/**
 * Documentation Layout
 * 
 * Three-column layout: Sidebar | Content | TOC
 * Responsive: Collapses on mobile with hamburger menu
 * Sticky sidebar and TOC for easy navigation
 */

import Link from "next/link";
import { DocsSidebar } from "@/components/docs/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
        <div className="sticky top-0 h-screen overflow-y-auto py-6 px-4">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Consonant
            </span>
            <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">
              Docs
            </span>
          </Link>
          <DocsSidebar />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-6 py-12 lg:px-8">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </article>
        </div>
      </main>
    </div>
  );
}
