import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Consonant - Real-time AI Cost Enforcement for B2B SaaS",
  description: "Track AI costs per customer, enforce margins in real-time, and prevent unprofitable usage. Stop losing money on AI features.",
  keywords: ["AI cost management", "B2B SaaS", "profitability tracking", "cost enforcement"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
