"use server";

import { prisma } from "@/lib/prisma";
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

    await prisma.apiKey.create({
        data: {
            name,
            key,
            maskedKey,
            organizationId: membership.organizationId,
        },
    });

    revalidatePath("/dashboard/security");
    return key; // Only returned once
}

export async function revokeApiKey(id: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error("Unauthorized");

    await prisma.apiKey.delete({
        where: { id },
    });

    revalidatePath("/dashboard/security");
}
