import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  BarChart3,
  Shield,
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
  { name: "Analysis", href: "/dashboard/analysis", icon: BarChart3 },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Security", href: "/dashboard/security", icon: Shield },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold">Consonant</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul role="list" className="flex flex-col gap-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                <item.icon
                  className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-400"
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
