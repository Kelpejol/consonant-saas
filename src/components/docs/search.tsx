/**
 * Docs Search Component
 * 
 * Client-side search for documentation navigation items.
 * Filters the sidebar structure based on user input.
 */

"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface SearchProps {
  className?: string;
}

// Reuse the navigation structure from sidebar.tsx or import it
// Ideally this would be a shared constant or generated from content
// Reuse the navigation structure from sidebar.tsx or import it
// Ideally this would be a shared constant or generated from content
const navItems = [
  { title: "Introduction", href: "/docs" },
  { title: "Quick Start", href: "/docs/quickstart" },
  { title: "Installation", href: "/docs/installation" },
  { title: "TypeScript SDK", href: "/docs/sdk/typescript" },
  { title: "Python SDK", href: "/docs/sdk/python" },
  { title: "How It Works", href: "/docs/concepts/how-it-works" },
  { title: "Grains & Pricing", href: "/docs/concepts/grains" },
  { title: "Customer Tracking", href: "/docs/concepts/customers" },
  { title: "Real-time Enforcement", href: "/docs/concepts/enforcement" },
  { title: "SDK Configuration", href: "/docs/api/configuration" },
  { title: "Balance Check", href: "/docs/api/balance-check" },
  { title: "Error Handling", href: "/docs/api/errors" },
];

export function DocsSearch({ className }: SearchProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "relative inline-flex h-9 w-full items-center justify-start rounded-[0.5rem] border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
          className
        )}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search docs...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-500 opacity-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                value={item.title}
                onSelect={() => {
                  runCommand(() => router.push(item.href));
                }}
              >
                <div className="mr-2 flex h-4 w-4 items-center justify-center">
                  <span className="text-lg">📄</span>
                </div>
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
