"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import { usePathname } from "next/navigation"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname()
  const isDocs = pathname?.startsWith("/docs")

  return (
    <NextThemesProvider {...props} forcedTheme={isDocs ? undefined : "light"}>
      {children}
    </NextThemesProvider>
  )
}
