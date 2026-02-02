import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/auth";
import { getOrganizationCustomers } from "@/lib/services/dashboard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MoreHorizontal, Search, UserMinus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function CustomersPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const customers = await getOrganizationCustomers(session.user.id);

  const formatGrains = (val: bigint) => {
    const num = Number(val);
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        <div className="flex items-center gap-2">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input 
                    type="search" 
                    placeholder="Search ID or Email..." 
                    className="pl-8 h-10 w-[250px] rounded-md border border-input bg-background"
                />
            </div>
            <Button>Add Customer</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
           <CardTitle>All Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Grains Balance</TableHead>
                <TableHead>Margin</TableHead>
                <TableHead>Total Requests</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => {
                 const isVampire = c.margin < 0.2; // Custom logic: low margin = vampire
                 return (
                    <TableRow key={c.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{c.name || "Untitled"}</span>
                          <span className="text-xs text-muted-foreground font-mono">{c.externalId}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {isVampire ? (
                           <Badge variant="destructive" className="flex w-fit gap-1 items-center">
                              <UserMinus className="h-3 w-3" /> Vampire
                           </Badge>
                        ) : (
                           <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Active</Badge>
                        )}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {formatGrains(c.currentBalanceGrains)}
                      </TableCell>
                      <TableCell>
                         <span className={isVampire ? "text-red-600 font-bold" : "text-green-600 font-medium"}>
                            {(c.margin * 100).toFixed(1)}%
                         </span>
                      </TableCell>
                      <TableCell>{c.usageCount.toLocaleString()}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {c.lastUsage ? new Date(c.lastUsage).toLocaleDateString() : "Never"}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                 );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
