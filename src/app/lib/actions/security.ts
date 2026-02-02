"use server";

import { prisma } from "@/lib/prisma";
import redis from "@/lib/redis";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

export async function createApiKey(name: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    // Get active organization
    const membership = await prisma.organizationMember.findFirst({
        where: { userId: session.user.id },
    });

    if (!membership) throw new Error("No organization found");

    const key = `con_${crypto.randomBytes(32).toString('hex')}`;
    const maskedKey = `${key.slice(0, 8)}...${key.slice(-4)}`;

    // Hash the key for the Engine to verify
    const apiKeyHash = crypto.createHash('sha256').update(key).digest('hex');

    const apiKey = await prisma.apiKey.create({
        data: {
            name,
            key,
            maskedKey,
            apiKeyHash,
            organizationId: membership.organizationId,
        },
    });

    // Sync to Redis for the Engine
    // Key format: apikey:<sha256_hash> -> organization_id
    await redis.set(`apikey:${apiKeyHash}`, membership.organizationId);

    revalidatePath("/dashboard/security");
    return key; // Only returned once
}

export async function revokeApiKey(id: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    // Get the key hash first to remove from Redis
    const apiKey = await prisma.apiKey.findUnique({
        where: { id },
    });

    if (apiKey) {
        await redis.del(`apikey:${apiKey.apiKeyHash}`);

        await prisma.apiKey.delete({
            where: { id },
        });
    }

    revalidatePath("/dashboard/security");
}
