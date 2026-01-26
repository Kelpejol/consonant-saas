import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="hidden border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:block md:w-64">
        <DashboardSidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <DashboardHeader user={session.user} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
