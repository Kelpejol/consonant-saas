/**
 * Landing Page - Consonant Marketing Site
 * 
 * Purpose: Convert visitors into signups with award-winning design
 * Features: Hero, Problem, Solution, Features, How It Works, FAQ, Footer
 * Accessibility: WCAG 2.1 AA compliant with keyboard navigation
 * Performance: Optimized for < 1.2s LCP with smooth 60fps animations
 */

import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import Solution from "@/components/landing/solution";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
