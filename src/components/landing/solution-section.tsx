"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="relative py-24 md:py-32 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-block bg-black text-white text-xs font-medium px-3 py-1 mb-6 uppercase tracking-wider">
            The Solution
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-8">
            3 lines of code.
            <br />
            Complete control.
          </h2>
          
          <p className="text-xl text-neutral-600 leading-relaxed">
            Wrap your AI client with Consonant. Every request gets checked, tracked, and enforced automatically.
          </p>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Code Block */}
          <div className="bg-neutral-900 p-8 border-2 border-neutral-800">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-neutral-500 font-mono">app.ts</span>
            </div>
            <pre className="text-sm font-mono leading-relaxed">
              <code className="text-neutral-300">
                <span className="text-neutral-500">// Install the SDK</span>
                {"\n"}npm install @consonant/sdk
                {"\n\n"}
                <span className="text-neutral-500">// Wrap your AI client</span>
                {"\n"}<span className="text-purple-400">import</span> {"{"} Consonant {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">'@consonant/sdk'</span>
                {"\n\n"}
                <span className="text-purple-400">const</span> consonant = <span className="text-purple-400">new</span> <span className="text-blue-400">Consonant</span>({"{"}
                {"\n"}  apiKey: process.env.CONSONANT_KEY,
                {"\n"}  getCustomerId: (ctx) {"=>"} ctx.userId
                {"\n"}{"}"})
                {"\n\n"}
                <span className="text-purple-400">const</span> ai = consonant.<span className="text-blue-400">wrap</span>(openai)
                {"\n\n"}
                <span className="text-neutral-500">// That's it! Every request is now tracked</span>
              </code>
            </pre>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            {[
              {
                title: "Pre-flight checks",
                description: "Every request checks balance before execution. Sub-5ms overhead."
              },
              {
                title: "Real-time tracking",
                description: "Token-by-token deductions as streams flow. Zero overruns possible."
              },
              {
                title: "Automatic kill switch",
                description: "Balance hits zero? Stream stops instantly. Clean error handling."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="border-l-4 border-black pl-6"
              >
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How it Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-black mb-12">How it works</h3>
          
          <div className="grid md:grid-cols-4 gap-px bg-neutral-200">
            {[
              { step: "01", title: "Pre-flight", desc: "Balance check before request" },
              { step: "02", title: "Stream", desc: "Real-time token deductions" },
              { step: "03", title: "Kill switch", desc: "Stop at zero balance" },
              { step: "04", title: "Reconcile", desc: "Exact cost settlement" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8">
                <div className="text-4xl font-bold text-neutral-200 mb-4">{item.step}</div>
                <div className="text-base font-medium text-black mb-2">{item.title}</div>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
