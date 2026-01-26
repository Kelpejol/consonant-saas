import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, User, Mail } from "lucide-react";
import { TestEmailButton } from "@/components/settings/test-email-button";

export default async function SettingsPage() {
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
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your workspace and account preferences.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
               <Building2 className="h-5 w-5 text-blue-500" />
               <CardTitle>Organization Details</CardTitle>
            </div>
            <CardDescription>
              This is your workspace's public profile and identification.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="org-name">Workspace Name</Label>
              <Input id="org-name" defaultValue={org?.name || ""} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="org-slug">Slug / Workspace ID</Label>
              <Input id="org-slug" defaultValue={org?.slug || ""} disabled />
              <p className="text-[0.7rem] text-muted-foreground">
                Slugs are used in API requests and cannot be changed after creation.
              </p>
            </div>
            <Button className="w-fit">Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
               <Mail className="h-5 w-5 text-purple-500" />
               <CardTitle>Communications</CardTitle>
            </div>
            <CardDescription>
              Manage how Consonant contacts you and test your email configuration.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>Account Email</Label>
              <Input value={session.user.email || ""} disabled />
            </div>
            <div className="pt-2 border-t">
               <p className="text-sm font-medium mb-2">Test Configuration</p>
               <TestEmailButton />
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="text-red-800">Danger Zone</CardTitle>
            <CardDescription className="text-red-600">
              Irreversible actions related to your workspace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">Delete Workspace</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
