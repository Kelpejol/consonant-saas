import { prisma } from "@/lib/prisma";

export type CustomerWithStats = {
    id: string;
    name: string | null;
    email: string | null;
    externalId: string;
    balanceGrains: bigint;
    totalSpent: bigint;
    usageCount: number;
    lastUsage: Date | null;
    margin: number; // Placeholder for margin logic
};

export async function getOrganizationCustomers(organizationId: string) {
    const customers = await prisma.customer.findMany({
        where: { organizationId },
        include: {
            _count: {
                select: { transactions: { where: { type: "USAGE" } } }
            },
            transactions: {
                where: { type: "USAGE" },
                orderBy: { createdAt: "desc" },
                take: 1,
            }
        },
        orderBy: { createdAt: "desc" }
    });

    return customers.map(c => ({
        ...c,
        usageCount: c._count.transactions,
        lastUsage: c.transactions[0]?.createdAt || null,
        // Basic margin calculation: (Total Revenue - Total Cost) / Total Revenue 
        // In our context: (Purchased Grains - Used Grains) / Purchased Grains
        // But for now, we'll store a mock margin based on totalSent vs balance
        margin: c.totalSpent > 0 ? Number(c.balanceGrains) / Number(c.totalSpent) : 100
    }));
}

export async function getDashboardStats(organizationId: string) {
    const [totalCustomers, usageStats] = await Promise.all([
        prisma.customer.count({ where: { organizationId } }),
        prisma.transaction.aggregate({
            where: {
                customer: { organizationId },
                type: "USAGE"
            },
            _sum: { amountGrains: true },
            _count: true
        })
    ]);

    // Aggregate total grains sold (TOPUP)
    const topupStats = await prisma.transaction.aggregate({
        where: {
            customer: { organizationId },
            type: "TOPUP"
        },
        _sum: { amountGrains: true }
    });

    const totalGrainsSold = topupStats._sum.amountGrains || BigInt(0);
    const totalGrainsUsed = usageStats._sum.amountGrains || BigInt(0);

    // Margin calculation
    // Cost to user is fixed (let's assume $1 per 1M grains)
    // Revenue is what they bought (TOPUPs)

    return {
        totalCustomers,
        totalGrainsUsed: String(totalGrainsUsed),
        totalGrainsSold: String(totalGrainsSold),
        usageCount: usageStats._count,
        avgMargin: totalGrainsSold > 0 ? (Number(totalGrainsSold - totalGrainsUsed) / Number(totalGrainsSold)) * 100 : 0
    };
}

export async function getUsageTimeline(organizationId: string, days: number = 7) {
    const dateLimit = new Date();
    dateLimit.setDate(dateLimit.getDate() - days);

    const transactions = await prisma.transaction.findMany({
        where: {
            customer: { organizationId },
            type: "USAGE",
            createdAt: { gte: dateLimit }
        },
        orderBy: { createdAt: "asc" }
    });

    // Group by day for charts
    const history: Record<string, number> = {};
    transactions.forEach(t => {
        const day = t.createdAt.toISOString().split('T')[0];
        history[day] = (history[day] || 0) + Math.abs(Number(t.amountGrains));
    });

    return Object.entries(history).map(([date, amount]) => ({
        date,
        amount
    }));
}
