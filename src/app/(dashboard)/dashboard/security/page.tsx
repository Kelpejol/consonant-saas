import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Key, Trash2, Copy, Plus } from "lucide-react";
import { createApiKey, revokeApiKey } from "@/app/lib/actions/security";
import { KeyGenerator } from "@/components/security/key-generator";

export default async function SecurityPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const membership = await prisma.organizationMember.findFirst({
    where: { userId: session.user.id },
  });

  const apiKeys = membership 
    ? await prisma.apiKey.findMany({ where: { organizationId: membership.organizationId } })
    : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Security</h2>
        <KeyGenerator />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
             <Key className="h-5 w-5 text-blue-500" />
             <CardTitle>API Keys</CardTitle>
          </div>
          <CardDescription>
            Use these keys to authenticate your requests to the Consonant Engine. Keep them secret!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apiKeys.length === 0 ? (
                <TableRow>
                   <TableCell colSpan={5} className="text-center py-8 text-muted-foreground italic">
                      No API keys found. Create one to get started.
                   </TableCell>
                </TableRow>
              ) : (
                apiKeys.map((key) => (
                  <TableRow key={key.id}>
                    <TableCell className="font-medium">{key.name}</TableCell>
                    <TableCell>
                       <code className="bg-muted px-2 py-1 rounded text-xs">{key.maskedKey}</code>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {new Date(key.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {key.lastUsedAt ? new Date(key.lastUsedAt).toLocaleDateString() : "Never"}
                    </TableCell>
                    <TableCell className="text-right">
                       <form action={revokeApiKey.bind(null, key.id)}>
                          <Button variant="ghost" size="icon" type="submit" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                             <Trash2 className="h-4 w-4" />
                          </Button>
                       </form>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
