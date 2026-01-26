/**
 * Features Section - Detailed Capabilities
 * 
 * Design: Grid layout with feature cards
 * Strategy: Mix functional and emotional benefits
 * Icons: Lucide icons for visual consistency
 */

"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Bell,
  RefreshCw,
  Users,
  Lock,
  Zap,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Per-Customer Profitability",
    description:
      "See exactly which customers are profitable and which are costing you money. Sort by margin, costs, or usage.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Margin Tracking",
    description:
      "Every AI request updates the customer's balance instantly. Know your margins at all times, not 30 days later.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified when customers hit thresholds, spike in usage, or create infinite loops burning credits.",
  },
  {
    icon: RefreshCw,
    title: "Automated Model Switching",
    description:
      "When margins drop, automatically switch customers to cheaper models (GPT-4 → Claude Haiku) without code changes.",
  },
  {
    icon: Users,
    title: "Stripe Integration",
    description:
      "Syncs revenue data from Stripe to calculate true profitability. Connects in one click via OAuth.",
  },
  {
    icon: Lock,
    title: "Hard Spend Limits",
    description:
      "Set maximum spending per customer. SDK blocks requests at the limit—your bill never surprises you.",
  },
  {
    icon: Zap,
    title: "Sub-5ms Latency",
    description:
      "Balance checks complete in under 5 milliseconds using Redis. End users never notice the overhead.",
  },
  {
    icon: BarChart,
    title: "Usage Analytics",
    description:
      "Track which features cost the most, which models customers prefer, and identify optimization opportunities.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything You Need to Control AI Costs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Built for B2B SaaS founders who need profitability visibility and
            automated cost controls—not just dashboards.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-700 dark:hover:shadow-blue-900/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
