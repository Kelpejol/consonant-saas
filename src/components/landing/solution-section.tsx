"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Pre-flight check",
    description: "Before every AI request, SDK estimates worst-case cost. Compares against customer's grain balance in Redis.",
    metric: "2.8ms latency",
    detail: "Atomic Lua scripts guarantee no race conditions. 100 simultaneous requests? Same customer? Zero overcommitment.",
  },
  {
    number: "02",
    title: "Real-time deduction",
    description: "As tokens stream back, SDK counts and deducts. Every 50 tokens, another balance check.",
    metric: "50 token batches",
    detail: "Batched deductions minimize latency. Your users see zero delay. Your accounting stays real-time.",
  },
  {
    number: "03",
    title: "The kill switch",
    description: "Balance hits zero? Stream dies. Instantly. The moment a customer exhausts their budget, the tokens stop flowing.",
    metric: "0ms delay",
    detail: "No grace period. No 'just this once.' The SDK throws InsufficientBalanceError and your code handles it gracefully.",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="relative bg-white py-32 md:py-48 overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 100px)`,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mb-24 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 text-sm font-semibold mb-10">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            THE SOLUTION
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[0.95] mb-10">
            Three lines of code.
            <br />
            <span className="text-neutral-400">Infinite control.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-neutral-600 leading-relaxed max-w-3xl">
            Consonant wraps your AI client. Every request passes through our SDK. We check balance, enforce limits, and kill streams that exceed budget—
            <span className="text-black font-semibold">all before your customers notice.</span>
          </p>
        </motion.div>

        {/* The Code */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-32"
        >
          <div className="bg-black text-white p-10 md:p-16 relative overflow-hidden group hover:shadow-2xl hover:shadow-black/30 transition-shadow duration-500">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-base text-neutral-500 font-mono">your-app.ts</span>
              </div>
              
              <pre className="text-lg md:text-xl font-mono overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-neutral-600">{"// Before: hope and prayers"}</span>
                  {"\n"}<span className="text-neutral-400">const</span> client = <span className="text-neutral-400">new</span> <span className="text-white">OpenAI</span>();
                  {"\n\n"}
                  <span className="text-neutral-600">{"// After: absolute control"}</span>
                  {"\n"}<span className="text-neutral-400">const</span> consonant = <span className="text-neutral-400">new</span> <span className="text-white">Consonant</span>({"{"}
                  {"\n  "}apiKey: process.env.<span className="text-red-400">CONSONANT_KEY</span>,
                  {"\n  "}getCustomerId: (ctx) {"=>"} ctx.userId,
                  {"\n"}{"}"});
                  {"\n\n"}
                  <span className="text-neutral-400">const</span> client = consonant.<span className="text-white">wrap</span>(<span className="text-neutral-400">new</span> <span className="text-white">OpenAI</span>());
                  {"\n\n"}
                  <span className="text-neutral-600">{"// That's it. Every request is now metered and enforced."}</span>
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
              className="group relative grid lg:grid-cols-12 gap-10 py-16 md:py-20 border-t-2 border-neutral-200 last:border-b-2 hover:border-red-500 transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <span className="text-6xl md:text-7xl font-bold font-mono text-neutral-200 group-hover:text-red-500 transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              
              <div className="lg:col-span-4">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {step.title}
                </h3>
                <div className="inline-block bg-black text-white px-4 py-2 text-sm font-mono font-semibold">
                  {step.metric}
                </div>
              </div>
              
              <div className="lg:col-span-6">
                <p className="text-xl md:text-2xl text-neutral-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
