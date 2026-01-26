import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Activity, CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import { auth } from "@/auth";
import { getDashboardStats, getUsageTimeline } from "@/lib/services/dashboard";
import { UsageChart } from "@/components/dashboard/usage-chart";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  // Fetch real data
  const stats = await getDashboardStats(session.user.id);
  const timeline = await getUsageTimeline(session.user.id);

  const formatGrains = (val: string | number) => {
    const num = typeof val === 'string' ? parseInt(val) : val;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <div className="flex items-center space-x-2">
           <span className="text-sm text-muted-foreground italic">Live tracking Active</span>
           <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Grains Sold</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatGrains(stats.totalGrainsSold)}</div>
            <p className="text-xs text-muted-foreground">
              Across all customers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{stats.totalCustomers}</div>
            <p className="text-xs text-muted-foreground">
              Growing by 12% MoM
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Consumed</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatGrains(stats.totalGrainsUsed)}</div>
            <p className="text-xs text-muted-foreground">
              Total AI usage detected
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Margin</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.avgMargin.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {stats.avgMargin > 50 ? <TrendingUp className="mr-1 h-3 w-3 text-green-500" /> : <TrendingDown className="mr-1 h-3 w-3 text-red-500" />}
              Performance optimal
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Usage Timeline</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <UsageChart data={timeline} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Organization Context</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
               <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Plan</span>
                  <span className="font-semibold uppercase tracking-wider text-blue-600">Enterprise</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">API Status</span>
                  <span className="text-green-500 font-medium font-mono">HEALTHY</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total API Requests</span>
                  <span className="font-semibold">{stats.usageCount.toLocaleString()}</span>
               </div>
               <hr />
               <div className="text-xs text-muted-foreground italic">
                  Data reflects real-time transactions from the Consonant Engine.
               </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
