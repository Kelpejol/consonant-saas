import { auth } from "@/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Zap, CheckCircle2, History } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function BillingPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const membership = await prisma.organizationMember.findFirst({
    where: { userId: session.user.id },
    include: { organization: true }
  });

  const org = membership?.organization;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Billing</h2>
        <p className="text-muted-foreground">Manage your subscription, grain balance, and payment methods.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-white to-blue-50/30 border-blue-100">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>You are on the {org?.plan.toUpperCase()} plan.</CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
             <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">$29</span>
                <span className="text-muted-foreground">/ month</span>
             </div>
             <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                   <CheckCircle2 className="h-4 w-4 text-green-500" /> 10M Grains / month included
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                   <CheckCircle2 className="h-4 w-4 text-green-500" /> Unlimited Customers
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                   <CheckCircle2 className="h-4 w-4 text-green-500" /> Vampire Detection Active
                </li>
             </ul>
          </CardContent>
          <CardFooter>
             <Button className="w-full">Upgrade Plan</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
               <Zap className="h-5 w-5 text-yellow-500" />
               <CardTitle>Grain Top-ups</CardTitle>
            </div>
            <CardDescription>
              Add more grains to your workspace pool for secondary distribution.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50/50">
                <span className="text-sm font-medium">1,000,000 Grains</span>
                <span className="font-bold">$10.00</span>
             </div>
             <div className="flex items-center justify-between p-3 border rounded-lg bg-gray-50/50">
                <span className="text-sm font-medium">10,000,000 Grains</span>
                <span className="font-bold text-blue-600">$85.00 <span className="text-[0.6rem] text-muted-foreground font-normal">(-15%)</span></span>
             </div>
          </CardContent>
          <CardFooter>
             <Button variant="outline" className="w-full gap-2">
                <CreditCard className="h-4 w-4" /> Manage Payment Method
             </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
             <History className="h-5 w-5 text-gray-500" />
             <CardTitle>Payment History</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
           <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
              No recent payments found. Connect Stripe to get started.
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
