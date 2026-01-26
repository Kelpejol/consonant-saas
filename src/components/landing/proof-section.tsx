"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { metric: "2.8ms", label: "P99 balance check latency", detail: "Faster than a blink. Redis Lua scripts. Zero network hops." },
  { metric: "0", label: "Possible overrun (grains)", detail: "Atomic reservations. No race conditions. Mathematically impossible to exceed." },
  { metric: "50", label: "Tokens per batch deduction", detail: "Real-time without overwhelming backend. Configurable per use case." },
  { metric: "99.97%", label: "Uptime SLA", detail: "Multi-region Redis. PostgreSQL replication. Auto-failover." },
];

const architecturePoints = [
  {
    title: "Atomic Lua Scripts",
    description: "Every balance check and reservation happens in a single Redis transaction. No read-modify-write. No race windows.",
  },
  {
    title: "Reservation Pattern",
    description: "Pre-flight reserves worst-case cost. Real-time deducts actual tokens. Over-reservation refunds instantly on completion.",
  },
  {
    title: "Stream-End Reconciliation",
    description: "Provider's exact token count arrives when stream ends. Immediate correction. Your books balance to the grain.",
  },
  {
    title: "Graceful Degradation",
    description: "Redis down? SDK falls back to conservative local cache. PostgreSQL provides durable recovery. No single point of failure.",
  },
];

export function ProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proof" className="relative bg-neutral-50 py-32 overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6">
            <span className="w-8 h-px bg-neutral-300" />
            The Engineering
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Built for paranoia.
            <br />
            <span className="text-neutral-400">Tested under chaos.</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            We didn't just build a billing system. We built a real-time enforcement engine that survives 100 concurrent agents from the same customer, Redis outages, and network partitions.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 mb-24">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 group"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 tracking-tight">
                {spec.metric}
              </div>
              <div className="text-sm font-semibold text-neutral-900 mb-2">
                {spec.label}
              </div>
              <p className="text-sm text-neutral-500">
                {spec.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architecture Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-black mb-12">
            Why it actually works
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {architecturePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative pl-6 border-l-2 border-neutral-200 hover:border-black transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-black mb-2">
                  {point.title}
                </h4>
                <p className="text-neutral-600">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 bg-black text-white p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Multi-agent ready
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                50 agents, same customer, same millisecond. Every one checks balance atomically. Every one reserves independently. When the budget runs out, they all stop. Instantly.
              </p>
              <ul className="space-y-2">
                {["Concurrent request handling", "Per-customer concurrency limits", "Automatic loop detection", "Burst load protection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block">
                <div className="text-7xl md:text-8xl font-bold tracking-tight">50</div>
                <div className="text-neutral-500 text-lg">concurrent agents</div>
                <div className="text-neutral-500 text-lg">per customer</div>
                <div className="mt-4 text-sm text-neutral-400">Enterprise: up to 1,000</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
