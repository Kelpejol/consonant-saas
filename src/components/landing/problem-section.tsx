"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative py-24 md:py-32 bg-neutral-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-block bg-black text-white text-xs font-medium px-3 py-1 mb-6 uppercase tracking-wider">
            The Problem
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-8">
            Every AI feature is
            <br />
            a financial liability
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
            You charge flat rates. Your users consume variable AI resources. Without per-customer limits, your best features become your biggest losses.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { stat: "23%", label: "of AI features run at a loss", detail: "SaaS companies losing money on their best features" },
            { stat: "$847", label: "monthly overrun per customer", detail: "Enterprise users can cost you thousands" },
            { stat: "72hrs", label: "to discover runaway costs", detail: "By then, the damage is already done" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-white border-2 border-neutral-200 p-8"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-4">{item.stat}</div>
              <div className="text-base font-medium text-black mb-2">{item.label}</div>
              <p className="text-sm text-neutral-600">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Before */}
          <div className="bg-white border-2 border-neutral-200 p-8">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">Without Consonant</div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                <span className="text-sm text-neutral-600">Cost visibility</span>
                <span className="text-sm text-neutral-400">Monthly invoice</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                <span className="text-sm text-neutral-600">Per-customer limits</span>
                <span className="text-sm text-neutral-400">None</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                <span className="text-sm text-neutral-600">Kill switch</span>
                <span className="text-sm text-neutral-400">Manual</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm text-neutral-600">Response time</span>
                <span className="text-sm text-neutral-400">Days</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-black text-white p-8">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">With Consonant</div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                <span className="text-sm">Cost visibility</span>
                <span className="text-sm font-medium">Real-time</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                <span className="text-sm">Per-customer limits</span>
                <span className="text-sm font-medium">Atomic</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-neutral-800">
                <span className="text-sm">Kill switch</span>
                <span className="text-sm font-medium">Automatic</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-sm">Response time</span>
                <span className="text-sm font-medium">2.8ms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
