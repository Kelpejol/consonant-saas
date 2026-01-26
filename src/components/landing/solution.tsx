/**
 * Solution Section - How Consonant Solves the Problem
 * 
 * Design: Split layout with benefits list and visual mockup
 * Messaging: Position as the "control layer" between customers and AI providers
 * Visual: Clean code snippet preview showing integration simplicity
 */

"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Real-time enforcement",
    description:
      "SDK checks balance before every AI request. If customer ran out of credits, request is blocked instantly.",
  },
  {
    icon: BarChart3,
    title: "Per-customer visibility",
    description:
      "Dashboard shows exactly which customers are profitable and which are bleeding you dry.",
  },
  {
    icon: Shield,
    title: "Automated protection",
    description:
      "Set margin thresholds. Auto-switch expensive users to cheaper models or block requests entirely.",
  },
];

export default function Solution() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Add a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Control Layer
                </span>{" "}
                Between You and AI Providers
              </h2>

              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Consonant sits between your application and AI providers,
                tracking costs per customer and enforcing spending limits in
                real-time—before requests drain your margins.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 space-y-8"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-600/30">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 lg:mt-0"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-2 border-b border-gray-200 pb-4 dark:border-gray-800">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  integration.ts
                </span>
              </div>

              <div className="mt-4 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-gray-800 dark:text-gray-200">
                    {`import { Consonant } from '@consonant/sdk'

const consonant = new Consonant({
  apiKey: process.env.CONSONANT_KEY,
  customerIdExtractor: (ctx) => ctx.userId
})

// Wrap your AI client
const ai = consonant.wrap(openaiClient)

// Now all requests are tracked & enforced
const response = await ai.chat.completions.create({
  model: 'gpt-4',
  messages: [{ role: 'user', content: prompt }]
})
// ✅ Automatically blocked if customer over limit`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600 dark:text-green-500" />
                <p className="text-sm font-medium text-green-900 dark:text-green-300">
                  5 lines of code. That's the entire integration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
