"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-white" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 md:px-12 lg:px-24 py-8 md:py-10">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link href="/" className="relative group">
            <Image
              src="/consonant.png"
              alt="Consonant"
              width={200}
              height={50}
              className="h-10 md:h-12 w-auto invert transition-opacity duration-300 group-hover:opacity-70"
              priority
            />
          </Link>
          
          <div className="hidden lg:flex items-center gap-12 text-base">
            <Link 
              href="#problem" 
              className="font-medium text-neutral-600 hover:text-black transition-colors duration-300"
            >
              Problem
            </Link>
            <Link 
              href="#solution" 
              className="font-medium text-neutral-600 hover:text-black transition-colors duration-300"
            >
              Solution
            </Link>
            <Link 
              href="#architecture" 
              className="font-medium text-neutral-600 hover:text-black transition-colors duration-300"
            >
              How It Works
            </Link>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              href="/login"
              className="text-base font-medium text-neutral-600 hover:text-black transition-colors duration-300"
            >
              Sign In
            </Link>
            <Link 
              href="/signup"
              className="group relative text-base font-semibold bg-black text-white px-6 md:px-8 py-3 md:py-3.5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/20"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: Main Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 text-sm font-semibold">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  REAL-TIME AI COST ENFORCEMENT
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-black leading-[0.95] mb-10"
              >
                Your AI features
                <br />
                are{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">bleeding</span>
                  <motion.span 
                    className="absolute bottom-2 left-0 right-0 h-4 md:h-6 bg-red-500 -z-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
                <br />
                money.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl text-neutral-600 leading-relaxed max-w-3xl mb-12"
              >
                Every token beyond your margin is profit lost.{" "}
                <span className="text-black font-semibold">
                  Consonant kills the stream the instant your customer's budget hits zero.
                </span>
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <Link
                  href="/signup"
                  className="group relative inline-flex items-center gap-4 bg-black text-white px-10 py-5 text-xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 hover:scale-105"
                >
                  <span className="relative z-10">Stop the Bleeding</span>
                  <svg 
                    className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:translate-x-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                
                <div className="flex flex-col gap-1 self-center">
                  <span className="text-sm font-semibold text-black">3 lines of code</span>
                  <span className="text-sm text-neutral-500">5 minutes to integrate</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="space-y-12"
              >
                <div className="group">
                  <div className="text-7xl md:text-8xl font-bold text-black tracking-tighter mb-3 group-hover:text-red-500 transition-colors duration-500">
                    2.8<span className="text-5xl">ms</span>
                  </div>
                  <div className="text-lg text-neutral-500 font-medium">Balance check latency</div>
                  <div className="w-24 h-1 bg-black mt-4 group-hover:w-full group-hover:bg-red-500 transition-all duration-500" />
                </div>

                <div className="group">
                  <div className="text-7xl md:text-8xl font-bold text-black tracking-tighter mb-3 group-hover:text-red-500 transition-colors duration-500">
                    $0
                  </div>
                  <div className="text-lg text-neutral-500 font-medium">Overrun possible</div>
                  <div className="w-24 h-1 bg-black mt-4 group-hover:w-full group-hover:bg-red-500 transition-all duration-500" />
                </div>

                <div className="group">
                  <div className="text-7xl md:text-8xl font-bold text-black tracking-tighter mb-3 group-hover:text-red-500 transition-colors duration-500">
                    47<span className="text-5xl">%</span>
                  </div>
                  <div className="text-lg text-neutral-500 font-medium">Avg. margin recovery</div>
                  <div className="w-24 h-1 bg-black mt-4 group-hover:w-full group-hover:bg-red-500 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 pb-12 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs font-semibold text-neutral-400 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-neutral-400 rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
