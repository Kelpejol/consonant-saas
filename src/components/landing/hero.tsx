/**
 * Hero Section - First Impression Component
 * 
 * Design: Premium SaaS aesthetic with bold typography and smooth animations
 * CTA Strategy: Primary (Get Started) and Secondary (View Demo) with high contrast
 * Animations: Staggered fade-in for headline, subheadline, and CTAs
 * 
 * Accessibility: Semantic HTML5, proper heading hierarchy, focus states
 * Performance: No layout shift, optimized fonts, GPU-accelerated animations
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24 sm:px-8 lg:px-12 lg:pt-40 lg:pb-32">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-950/30 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
              <Zap className="h-4 w-4" />
              <span>Real-time AI Cost Enforcement</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Stop Losing Money on{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              AI Features
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl"
          >
            Track AI costs per customer, enforce margins in real-time, and
            prevent unprofitable usage. Built for B2B SaaS companies with
            flat-rate pricing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-100"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 transition-all hover:border-gray-400 hover:bg-gray-50 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 active:scale-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-800"
            >
              View Live Demo
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="h-5 w-5 text-green-600" />
              <span>5-minute integration</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="h-5 w-5 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Free for 30 days</span>
            </div>
          </motion.div>

          {/* Hero image/illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:p-4"
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-600">
                [Dashboard Preview - Coming Soon]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
