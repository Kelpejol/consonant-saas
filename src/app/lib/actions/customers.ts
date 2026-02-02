"use server";

import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

/**
 * Top up a customer's balance.
 * This updates PostgreSQL (source of truth) and immediately pushes to Redis (hot path).
 */
export async function topUpCustomer(customerId: string, amountGrains: number) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    if (amountGrains <= 0) throw new Error("Amount must be positive");

    // Start a transaction to ensure atomic update and audit trail
    const customer = await prisma.$transaction(async (tx) => {
        // 1. Update customer balance
        const updated = await tx.customer.update({
            where: { id: customerId },
            data: {
                currentBalanceGrains: { increment: BigInt(amountGrains) },
                lifetimeSpentGrains: { increment: BigInt(amountGrains) }, // For billing clarity
            },
        });

        // 2. Create transaction record for audit
        await tx.transaction.create({
            data: {
                customerId,
                amountGrains: BigInt(amountGrains),
                type: "topup", // Standard type
                status: "success",
                description: `Manual top-up of ${amountGrains} grains`,
            },
        });

        return updated;
    });

    // 3. Sync to Redis for the Engine (CRITICAL for zero-drift)
    // We use a pipeline (ioredis) to ensure all related fields are updated together
    await redis.pipeline()
        .set(`customer:balance:${customerId}`, customer.currentBalanceGrains.toString())
        .set(`customer:org:${customerId}`, customer.organizationId)
        .set(`customer:buffer:${customerId}`, customer.bufferStrategy)
        .setnx(`customer:reserved:${customerId}`, "0")
        .exec();

    revalidatePath(`/dashboard/customers/${customerId}`);
    revalidatePath("/dashboard/customers");

    return { success: true, balance: customer.currentBalanceGrains.toString() };
}

/**
 * Create a new customer and initialize their balance in Redis.
 */
export async function createCustomer(data: {
    name: string;
    externalId: string;
    initialBalance?: number;
    bufferStrategy?: string;
}) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    // Get active organization
    const membership = await prisma.organizationMember.findFirst({
        where: { userId: session.user.id },
    });
    if (!membership) throw new Error("No organization found");

    const initialBalance = data.initialBalance || 0;

    const customer = await prisma.customer.create({
        data: {
            name: data.name,
            externalId: data.externalId,
            organizationId: membership.organizationId,
            currentBalanceGrains: BigInt(initialBalance),
            lifetimeSpentGrains: BigInt(initialBalance),
            bufferStrategy: data.bufferStrategy || "conservative",
        },
    });

    if (initialBalance > 0) {
        await prisma.transaction.create({
            data: {
                customerId: customer.id,
                amountGrains: BigInt(initialBalance),
                type: "topup",
                status: "success",
                description: "Initial balance",
            },
        });
    }

    // Sync to Redis with all required context for the Engine
    await redis.pipeline()
        .set(`customer:balance:${customer.id}`, customer.currentBalanceGrains.toString())
        .set(`customer:reserved:${customer.id}`, "0")
        .set(`customer:org:${customer.id}`, customer.organizationId)
        .set(`customer:buffer:${customer.id}`, customer.bufferStrategy)
        .exec();

    revalidatePath("/dashboard/customers");
    return customer;
}
