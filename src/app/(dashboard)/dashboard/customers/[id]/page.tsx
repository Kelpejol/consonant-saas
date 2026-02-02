import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, User, Activity, Wallet, History } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { UsageChart } from "@/components/dashboard/usage-chart";

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) return null;
  const { id } = await params;

  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      transactions: {
        orderBy: { createdAt: "desc" },
        take: 20,
      },
    },
  });

  if (!customer) {
    redirect("/dashboard/customers");
  }

  // Get timeline for usage chart
  const dateLimit = new Date();
  dateLimit.setDate(dateLimit.getDate() - 30);
  
  const transactions = await prisma.transaction.findMany({
    where: {
      customerId: id,
      type: "ai_usage",
      createdAt: { gte: dateLimit }
    },
    orderBy: { createdAt: "asc" }
  });

  const history: Record<string, number> = {};
  transactions.forEach(t => {
    const day = t.createdAt.toISOString().split('T')[0];
    history[day] = (history[day] || 0) + Math.abs(Number(t.amountGrains));
  });

  const timeline = Object.entries(history).map(([date, amount]) => ({
    date,
    amount
  }));

  const formatGrains = (val: bigint | number) => {
    const num = Number(val);
    if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <Link href="/dashboard/customers" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to Customers
      </Link>

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">{customer.name || "Customer Detail"}</h2>
          <p className="font-mono text-sm text-muted-foreground">{customer.externalId}</p>
        </div>
        <div className="flex gap-2">
           <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 py-1 px-3">
              ACTIVE
           </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Balance</CardTitle>
            <Wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatGrains(customer.currentBalanceGrains)}</div>
            <p className="text-xs text-muted-foreground italic">Approx. Grains</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Lifetime Spend</CardTitle>
            <Activity className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatGrains(customer.lifetimeSpentGrains)}</div>
            <p className="text-xs text-muted-foreground italic">Total Top-ups</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Join Date</CardTitle>
            <User className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">{new Date(customer.createdAt).toLocaleDateString()}</div>
            <p className="text-xs text-muted-foreground italic">Initial Registration</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Usage History (30 Days)</CardTitle>
          <CardDescription>Visual breakdown of AI requests and grain consumption.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <UsageChart data={timeline} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
             <History className="h-5 w-5 text-gray-400" />
             <CardTitle>Recent Transactions</CardTitle>
          </div>
          <CardDescription>Individual request logs and balance adjustments.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Model / Reference</TableHead>
                <TableHead>Amount (Grains)</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customer.transactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>
                     <Badge variant={t.type === "ai_usage" ? "outline" : "secondary"}>
                        {t.type}
                     </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                     {t.providerModel || "N/A"}
                  </TableCell>
                  <TableCell className={Number(t.amountGrains) < 0 ? "text-red-500 font-medium" : "text-green-600 font-medium"}>
                     {Number(t.amountGrains) < 0 ? "-" : "+"}{formatGrains(Math.abs(Number(t.amountGrains)))}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(t.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                     <span className="text-[0.7rem] uppercase font-bold text-gray-400">{t.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
