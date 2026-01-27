"use client"

import Link from "next/link"
import Image from "next/image"
import { DocsSidebar } from "@/components/docs/sidebar"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-sm z-50 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
           <div className="bg-black p-1.5 rounded-md">
             <Image src="/consonant.png" alt="Consonant" width={80} height={24} className="h-5 w-auto" />
           </div>
        </Link>
        <div className="flex items-center gap-2">
            <ModeToggle />
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground"
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden pt-16">
          <aside className="w-full h-full bg-background border-r border-border overflow-y-auto p-4 animate-in slide-in-from-left-48 duration-200">
             <DocsSidebar />
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 border-r border-border bg-sidebar text-sidebar-foreground fixed top-0 bottom-0 left-0 z-30">
        <div className="h-full overflow-y-auto py-6 px-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2">
                <div className="bg-black p-1.5 rounded-md shadow-sm">
                    <Image src="/consonant.png" alt="Consonant" width={100} height={32} className="h-6 w-auto" />
                </div>
            </Link>
          </div>
          
          <div className="flex-1">
            <DocsSidebar />
          </div>

          <div className="pt-6 mt-auto border-t border-sidebar-border">
             <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-medium">Theme</span>
                <ModeToggle />
             </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 lg:pl-72 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">
          {children}
        </div>
      </main>
    </div>
  )
}

