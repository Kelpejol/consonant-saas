// // import type { Metadata } from "next";
// // import "./globals.css";

// // export const metadata: Metadata = {
// //   title: "Consonant - Real-time AI Cost Enforcement for B2B SaaS",
// //   description: "Track AI costs per customer, enforce margins in real-time, and prevent unprofitable usage. Stop losing money on AI features.",
// //   keywords: ["AI cost management", "B2B SaaS", "profitability tracking", "cost enforcement"],
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body className="antialiased font-sans">
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }



// import type React from "react"
// import { ThemeProvider } from "@/components/theme-provider"
// import type { Metadata } from "next"
// import { Inter, Instrument_Serif } from "next/font/google"
// import "./globals.css"

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
//   preload: true,
// })

// const instrumentSerif = Instrument_Serif({
//   subsets: ["latin"],
//   variable: "--font-instrument-serif",
//   weight: ["400"],
//   display: "swap",
//   preload: true,
// })

// export const metadata: Metadata = {
//   title: "Consonant - Real-time AI Cost Enforcement",
//   description:
//     "Stop losing money on AI overages. Track costs per customer, enforce budgets in real-time, and protect your margins with a single line of code.",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
//         />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
//       </head>
//       <body className="font-sans antialiased">
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }




import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Consonant - Real-time AI Cost Enforcement",
  description:
    "Stop losing money on AI overages. Track costs per customer, enforce budgets in real-time, and protect your margins with a single line of code.",
  // ADD THESE FOR COLOR CONSISTENCY:
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        {/* Remove these duplicate font links - you're already loading fonts via next/font/google above */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" /> */}
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}