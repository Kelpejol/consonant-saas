/**
 * How It Works Section - 3-Step Process
 * 
 * Design: Numbered steps with visual flow
 * Purpose: Reduce perceived complexity of integration
 * Visual: Clean timeline with gradient connectors
 */

"use client";

import { motion } from "framer-motion";
import { Code2, Activity, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Code2,
    title: "Integrate SDK (5 minutes)",
    description:
      "Install our TypeScript or Python SDK. Wrap your AI client with 3 lines of code. Configure how to extract customer IDs from requests.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Track Usage Automatically",
    description:
      "Every AI request flows through Consonant. We count tokens, calculate costs, and attribute everything to specific customers in real-time.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Set Limits & Relax",
    description:
      "Configure margin thresholds and spending limits. Get alerted to problems. Let automation switch models or block unprofitable requests.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Three simple steps to complete control over AI costs
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connecting line (desktop only) */}
          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 lg:block" />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step number badge */}
                    <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-violet-600 shadow-xl dark:border-gray-900">
                      <Icon className="h-12 w-12 text-white" />
                    </div>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 px-4 py-1 text-sm font-bold text-white shadow-lg dark:bg-white dark:text-gray-900">
                      {step.number}
                    </div>

                    <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
