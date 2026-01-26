"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "We were losing $3,400/month on our heaviest AI users. Consonant paid for itself in 4 hours.",
    author: "Sarah Chen",
    role: "CTO, Codeium Labs",
    metric: "47% margin recovery",
  },
  {
    quote: "The kill switch saved us during an agent loop incident. What would have cost $12K stopped at $47.",
    author: "Marcus Rodriguez",
    role: "Founder, AgentFlow",
    metric: "$11,953 saved",
  },
  {
    quote: "Finally, I can price my AI features profitably. Every customer gets exactly what they paid for.",
    author: "Emma Larsson",
    role: "CEO, DocuMind AI",
    metric: "3x more predictable costs",
  },
  {
    quote: "Integration took 20 minutes. We shipped the same day. Zero disruption to our users.",
    author: "James Okonkwo",
    role: "Lead Engineer, Nexus AI",
    metric: "20 min integration",
  },
  {
    quote: "Multi-agent orchestration was bleeding us dry. Now each agent has its own budget. Simple.",
    author: "Priya Sharma",
    role: "VP Engineering, Cortex",
    metric: "50 agents, 1 budget",
  },
  {
    quote: "Our enterprise customers used to cost us money. Now they're our most profitable segment.",
    author: "David Park",
    role: "COO, Synthesis Labs",
    metric: "Net positive enterprise",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
            <span className="w-8 h-px bg-neutral-700" />
            Testimonials
            <span className="w-8 h-px bg-neutral-700" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Founders who stopped
            <br />
            <span className="text-neutral-500">losing money on AI.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="bg-black p-8 flex flex-col"
            >
              <blockquote className="text-lg text-neutral-300 leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Result</div>
                  <div className="text-sm text-white font-mono">{testimonial.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 mb-4">
            Join 200+ companies protecting their AI margins
          </p>
          <div className="flex items-center justify-center gap-8 text-neutral-600">
            {["YC S24", "Techstars", "a16z backed", "SOC 2 Type II"].map((badge) => (
              <span key={badge} className="text-sm font-medium">{badge}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
