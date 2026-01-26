"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const beforeAfterData = {
  before: {
    title: "Before Consonant",
    items: [
      { label: "Cost visibility", value: "Monthly invoice", status: "bad" },
      { label: "Per-customer limits", value: "None", status: "bad" },
      { label: "Overrun protection", value: "Hope", status: "bad" },
      { label: "Kill switch latency", value: "∞", status: "bad" },
      { label: "Multi-agent support", value: "Chaos", status: "bad" },
      { label: "Reconciliation", value: "Manual", status: "bad" },
    ]
  },
  after: {
    title: "After Consonant",
    items: [
      { label: "Cost visibility", value: "Real-time", status: "good" },
      { label: "Per-customer limits", value: "Per-grain precision", status: "good" },
      { label: "Overrun protection", value: "Atomic", status: "good" },
      { label: "Kill switch latency", value: "0ms", status: "good" },
      { label: "Multi-agent support", value: "50 concurrent", status: "good" },
      { label: "Reconciliation", value: "Automatic", status: "good" },
    ]
  }
};

export function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSide, setHoveredSide] = useState<"before" | "after" | null>(null);

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '120px 120px'
        }} />
      </div>

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
            The Transformation
            <span className="w-8 h-px bg-neutral-300" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            From chaos to control.
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            The difference isn't subtle. It's the difference between hoping your margins hold and <em>knowing</em> they will.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-1 bg-neutral-200">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`bg-neutral-100 p-8 lg:p-12 transition-all duration-500 ${hoveredSide === 'before' ? 'bg-neutral-200' : ''}`}
            onMouseEnter={() => setHoveredSide('before')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-neutral-400" />
              <h3 className="text-2xl font-bold text-neutral-600">
                {beforeAfterData.before.title}
              </h3>
            </div>
            
            <div className="space-y-6">
              {beforeAfterData.before.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between py-3 border-b border-neutral-300"
                >
                  <span className="text-neutral-500">{item.label}</span>
                  <span className="font-mono text-sm text-neutral-400 line-through decoration-neutral-300">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-400 mb-2">−$847</div>
                <div className="text-sm text-neutral-400">monthly per enterprise customer</div>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`bg-black text-white p-8 lg:p-12 transition-all duration-500 ${hoveredSide === 'after' ? 'bg-neutral-900' : ''}`}
            onMouseEnter={() => setHoveredSide('after')}
            onMouseLeave={() => setHoveredSide(null)}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-white" />
              <h3 className="text-2xl font-bold text-white">
                {beforeAfterData.after.title}
              </h3>
            </div>
            
            <div className="space-y-6">
              {beforeAfterData.after.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center justify-between py-3 border-b border-neutral-700"
                >
                  <span className="text-neutral-400">{item.label}</span>
                  <span className="font-mono text-sm text-white font-medium">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-700">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">+47%</div>
                <div className="text-sm text-neutral-400">average margin recovery</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
