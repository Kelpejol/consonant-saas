/**
 * Docs Sidebar Navigation
 * 
 * Hierarchical navigation for documentation
 * Collapsible sections with active state highlighting
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DocsSearch } from "@/components/docs/search";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quickstart" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Integration Guides",
    items: [
      { title: "TypeScript SDK", href: "/docs/sdk/typescript" },
      { title: "Python SDK", href: "/docs/sdk/python" },
     
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "How It Works", href: "/docs/concepts/how-it-works" },
      { title: "Grains & Pricing", href: "/docs/concepts/grains" },
      { title: "Customer Tracking", href: "/docs/concepts/customers" },
      { title: "Real-time Enforcement", href: "/docs/concepts/enforcement" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "SDK Configuration", href: "/docs/api/configuration" },
      { title: "Balance Check", href: "/docs/api/balance-check" },
     
      { title: "Error Handling", href: "/docs/api/errors" },
    ],
  },
];

function NavSection({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const hasItems = item.items && item.items.length > 0;

  if (!hasItems && item.href) {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={cn(
          "block py-1.5 px-3 text-sm rounded-md transition-colors",
          isActive
            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-medium"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
        )}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-1.5 px-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
      >
        {item.title}
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
      {isOpen && hasItems && (
        <div className="mt-1 ml-3 space-y-1">
          {item.items!.map((subItem) => {
            const isActive = pathname === subItem.href;
            return (
              <Link
                key={subItem.href}
                href={subItem.href!}
                className={cn(
                  "block py-1.5 px-3 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
                )}
              >
                {subItem.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function DocsSidebar() {
  return (
    <nav className="space-y-4">
      <DocsSearch className="mb-4" />
      <div className="space-y-2">
        {navigation.map((item) => (
          <NavSection key={item.title} item={item} />
        ))}
      </div>
    </nav>
  );
}
