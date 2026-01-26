"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/consonant.png"
                alt="Consonant"
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#solution" className="text-sm text-neutral-600 hover:text-black transition-colors">
                Product
              </Link>
              <Link href="#pricing" className="text-sm text-neutral-600 hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="/docs" className="text-sm text-neutral-600 hover:text-black transition-colors">
                Docs
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/login"
                className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup"
                className="bg-black text-white px-6 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 px-4 py-2 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-xs font-medium text-neutral-700 uppercase tracking-wider">Real-time cost enforcement</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-8"
          >
            The growth engine
            <br />
            for AI companies
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-12 max-w-3xl"
          >
            Track every AI request. Enforce per-customer limits. Kill streams when budgets run out. Never lose money on AI features again.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 text-base font-medium hover:bg-neutral-800 transition-colors"
            >
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 text-base font-medium hover:bg-black hover:text-white transition-colors"
            >
              Read Documentation
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 mt-16 pt-8 border-t border-neutral-100"
          >
            <span className="text-sm text-neutral-500">Trusted by AI companies</span>
            <div className="flex items-center gap-6">
              {['OpenAI', 'Anthropic', 'Google', 'Stripe'].map((company) => (
                <div key={company} className="text-sm font-medium text-neutral-400">{company}</div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-neutral-100"
        >
          <div>
            <div className="text-5xl font-bold text-black mb-2">2.8ms</div>
            <div className="text-sm text-neutral-600">Balance check latency</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-black mb-2">$0</div>
            <div className="text-sm text-neutral-600">Overrun possible</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-black mb-2">47%</div>
            <div className="text-sm text-neutral-600">Avg margin recovery</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-black mb-2">3min</div>
            <div className="text-sm text-neutral-600">Integration time</div>
          </div>
        </motion.div>
      </div>

      {/* Product Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 pb-24"
      >
        <div className="relative border-2 border-neutral-200 bg-white p-4 shadow-2xl">
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
            <div className="w-3 h-3 rounded-full bg-neutral-300" />
          </div>
          <div className="bg-neutral-50 border border-neutral-200 h-[500px] flex items-center justify-center mt-6">
            <div className="text-center space-y-4 p-8">
              <div className="text-6xl font-bold text-black">Dashboard</div>
              <div className="text-neutral-500">Real-time cost tracking & enforcement</div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-4 border border-neutral-200">
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-xs text-neutral-500">Active Customers</div>
                </div>
                <div className="bg-white p-4 border border-neutral-200">
                  <div className="text-2xl font-bold">$0</div>
                  <div className="text-xs text-neutral-500">Overruns</div>
                </div>
                <div className="bg-white p-4 border border-neutral-200">
                  <div className="text-2xl font-bold">2.8ms</div>
                  <div className="text-xs text-neutral-500">P99 Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
