"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
            <span className="w-8 h-px bg-neutral-300" />
            Architecture
            <span className="w-8 h-px bg-neutral-300" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Under the hood.
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A three-layer system designed for <strong>sub-5ms latency</strong> at any scale.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* The Flow */}
          <div className="grid lg:grid-cols-5 gap-4 items-stretch mb-16">
            {/* Step 1: Your App */}
            <div className="relative">
              <div className="bg-neutral-100 border-2 border-neutral-200 p-6 h-full">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  01 / Your App
                </div>
                <h4 className="text-lg font-bold text-black mb-2">SDK Wrapper</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Wraps your OpenAI/Anthropic client. Zero code changes to your existing calls.
                </p>
                <div className="font-mono text-xs bg-white p-3 border border-neutral-200">
                  <span className="text-neutral-400">const</span> client = <br/>
                  {"  "}consonant.<span className="text-black">wrap</span>(openai);
                </div>
              </div>
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </div>
            </div>

            {/* Step 2: Pre-flight */}
            <div className="relative">
              <div className="bg-black text-white p-6 h-full">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  02 / Pre-flight
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Balance Check</h4>
                <p className="text-sm text-neutral-400 mb-4">
                  Estimate worst-case cost. Check against Redis. Reserve grains atomically.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-neutral-800 p-2 text-center">
                    <div className="text-neutral-400">Latency</div>
                    <div className="text-white font-bold">2.8ms</div>
                  </div>
                  <div className="bg-neutral-800 p-2 text-center">
                    <div className="text-neutral-400">Atomic</div>
                    <div className="text-white font-bold">Lua</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </div>
            </div>

            {/* Step 3: AI Provider */}
            <div className="relative">
              <div className="bg-neutral-100 border-2 border-dashed border-neutral-300 p-6 h-full">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  03 / Provider
                </div>
                <h4 className="text-lg font-bold text-black mb-2">OpenAI / etc</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Your request goes through normally. Tokens stream back. Nothing changes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI", "Anthropic", "Google", "Azure"].map((provider) => (
                    <span key={provider} className="text-xs bg-white border border-neutral-200 px-2 py-1">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </div>
            </div>

            {/* Step 4: Streaming */}
            <div className="relative">
              <div className="bg-black text-white p-6 h-full">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  04 / Streaming
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Live Deduction</h4>
                <p className="text-sm text-neutral-400 mb-4">
                  Every 50 tokens, SDK batches a deduction. Balance too low? Kill switch triggers.
                </p>
                <div className="border-l-2 border-red-500 pl-3 text-xs text-neutral-400">
                  <strong className="text-red-400">KILL SWITCH:</strong><br/>
                  Stream terminated on insufficient balance
                </div>
              </div>
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </div>
            </div>

            {/* Step 5: Reconciliation */}
            <div className="relative">
              <div className="bg-neutral-100 border-2 border-neutral-200 p-6 h-full">
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  05 / Finalize
                </div>
                <h4 className="text-lg font-bold text-black mb-2">Reconciliation</h4>
                <p className="text-sm text-neutral-600 mb-4">
                  Stream ends. Exact token count arrives. Instant refund for over-reservation.
                </p>
                <div className="text-xs bg-white p-3 border border-neutral-200">
                  <span className="text-green-600">+1,540 grains</span><br/>
                  <span className="text-neutral-400">refunded (over-estimate)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-50 border border-neutral-200 p-8"
          >
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">
              Infrastructure Layer
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <h5 className="font-bold text-black">Redis Cluster</h5>
                </div>
                <p className="text-sm text-neutral-600">
                  Hot path data. Balances, reservations, request tracking. Sub-millisecond reads.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <h5 className="font-bold text-black">PostgreSQL</h5>
                </div>
                <p className="text-sm text-neutral-600">
                  Durable storage. Transactions, audit logs, analytics. TimescaleDB for time-series.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <h5 className="font-bold text-black">Go Backend</h5>
                </div>
                <p className="text-sm text-neutral-600">
                  High-performance gRPC API. Handles 100K+ concurrent connections. &lt;1ms GC pauses.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <h5 className="font-bold text-black">SDK Layer</h5>
                </div>
                <p className="text-sm text-neutral-600">
                  TypeScript + Python. Wraps AI clients transparently. Zero latency to user experience.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
