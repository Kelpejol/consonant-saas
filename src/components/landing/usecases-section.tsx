"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const useCases = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Coding Assistants",
    description: "Your users write code all day. Some spawn 50 agents to refactor a codebase. Without limits, one power user burns through your entire monthly API budget in a week.",
    pain: "One customer ran 847 concurrent GPT-4 requests. $2,400 gone in 3 hours.",
    solution: "Consonant would have killed those streams at their allocated $200 budget.",
    metrics: {
      before: "$2,400/day for top user",
      after: "$200/month per user cap"
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Research Tools",
    description: "Researchers love deep dives. Multi-step reasoning chains, recursive summarization, agent loops that go 50 layers deep. Beautiful for discovery. Catastrophic for margins.",
    pain: "Average research session: 12,000 tokens. Power user sessions: 890,000 tokens.",
    solution: "Per-session budgets that gracefully degrade as users approach limits.",
    metrics: {
      before: "74x variance between users",
      after: "Predictable per-user costs"
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Customer Support Bots",
    description: "High volume, predictable costs—until someone finds the loophole. Automated scrapers posing as customers. Prompt injection attacks that trigger infinite loops.",
    pain: "Bot scrapers hit our support widget 14,000 times in one night.",
    solution: "Rate limiting + budget caps + anomaly detection built into every request.",
    metrics: {
      before: "$4,700 abuse incident",
      after: "$0 - caught at 50 requests"
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document Processing",
    description: "Upload a PDF, extract insights. Simple feature. Except when someone uploads a 500-page legal contract and asks for analysis at every paragraph level.",
    pain: "One 200-page upload cost more than the user's annual subscription.",
    solution: "Cost estimation before processing. Tiered limits based on document size.",
    metrics: {
      before: "Unlimited doc processing",
      after: "Scoped to plan tier"
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "AI Agents & Orchestration",
    description: "The frontier. Autonomous agents with tool use, planning, and self-correction. One agent can spawn 20 sub-agents. Each makes its own API calls. Costs explode exponentially.",
    pain: "Agent loop detected after 3,000 iterations. $12,000 spent overnight.",
    solution: "Per-agent budgets, loop detection, automatic kill switch mid-execution.",
    metrics: {
      before: "No visibility into agent costs",
      after: "Per-agent metering + limits"
    }
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Image & Video Generation",
    description: "Generative media costs 10-100x more than text. One viral feature with unlimited generations can bankrupt a startup faster than you can say 'DALL-E 3.'",
    pain: "Added image gen feature. Lost $34K in first month.",
    solution: "Credit-based generation limits that scale with subscription tier.",
    metrics: {
      before: "Unlimited generations",
      after: "100-1000 per tier/month"
    }
  },
];

export function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-neutral-950 text-white overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">
            <span className="w-8 h-px bg-neutral-700" />
            Use Cases
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Every AI feature.
            <br />
            <span className="text-neutral-500">Every failure mode.</span>
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            We've seen how AI costs spiral out of control across every category. Here's what happens without guardrails—and how Consonant prevents each disaster.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group bg-neutral-950 p-8 hover:bg-neutral-900 transition-colors duration-500"
            >
              <div className="text-neutral-500 group-hover:text-white transition-colors duration-300 mb-6">
                {useCase.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {useCase.title}
              </h3>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {useCase.description}
              </p>
              
              {/* Pain Point */}
              <div className="border-l-2 border-red-500/30 pl-4 mb-4">
                <div className="text-xs font-semibold text-red-400/60 uppercase tracking-wider mb-1">
                  The Pain
                </div>
                <p className="text-sm text-neutral-500">
                  {useCase.pain}
                </p>
              </div>
              
              {/* Solution */}
              <div className="border-l-2 border-white/20 pl-4 mb-6">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  The Fix
                </div>
                <p className="text-sm text-neutral-300">
                  {useCase.solution}
                </p>
              </div>
              
              {/* Metrics */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-neutral-800">
                <div>
                  <span className="text-neutral-600">Before: </span>
                  <span className="text-neutral-400 line-through">{useCase.metrics.before}</span>
                </div>
                <div>
                  <span className="text-neutral-600">After: </span>
                  <span className="text-white font-medium">{useCase.metrics.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
