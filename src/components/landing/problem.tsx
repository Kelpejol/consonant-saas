/**
 * Problem Section - Pain Point Highlight
 * 
 * Design: Three-column cards showing the "Vampire Customer" problem
 * Psychology: Build urgency by showing real costs and negative margins
 * Visual: Red/yellow/green color coding for emotional impact
 * 
 * Accessibility: Color is not the only indicator (icons + text)
 * Performance: Static content for fast rendering
 */

"use client";

import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, DollarSign } from "lucide-react";

const customerTypes = [
  {
    name: "The Ghost",
    percentage: "30%",
    cost: "$0.50/mo",
    margin: "+99%",
    color: "green",
    icon: DollarSign,
    description: "Pays but barely uses AI features",
  },
  {
    name: "The Normal",
    percentage: "60%",
    cost: "$5-15/mo",
    margin: "+70-90%",
    color: "yellow",
    icon: DollarSign,
    description: "Regular usage, healthy margins",
  },
  {
    name: "The Vampire",
    percentage: "10%",
    cost: "$80-300/mo",
    margin: "-500%",
    color: "red",
    icon: AlertTriangle,
    description: "Bleeding you dry, unknowingly",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Problem() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            The Problem:{" "}
            <span className="text-red-600 dark:text-red-500">
              Invisible Profit Drain
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            You charge customers a flat rate, but AI costs vary wildly. Some
            customers cost 100x more than others—and you won't know until the
            bill arrives 30 days later.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {customerTypes.map((type) => {
            const Icon = type.icon;
            const colorStyles = {
              green: {
                border: "border-green-200 dark:border-green-900",
                bg: "bg-green-50 dark:bg-green-950/30",
                text: "text-green-700 dark:text-green-400",
                iconBg: "bg-green-100 dark:bg-green-900/50",
              },
              yellow: {
                border: "border-yellow-200 dark:border-yellow-900",
                bg: "bg-yellow-50 dark:bg-yellow-950/30",
                text: "text-yellow-700 dark:text-yellow-400",
                iconBg: "bg-yellow-100 dark:bg-yellow-900/50",
              },
              red: {
                border: "border-red-200 dark:border-red-900",
                bg: "bg-red-50 dark:bg-red-950/30",
                text: "text-red-700 dark:text-red-400",
                iconBg: "bg-red-100 dark:bg-red-900/50",
              },
            }[type.color as "green" | "yellow" | "red"] || {
              border: "border-gray-200 dark:border-gray-800",
              bg: "bg-gray-50 dark:bg-gray-900/30",
              text: "text-gray-700 dark:text-gray-400",
              iconBg: "bg-gray-100 dark:bg-gray-800/50",
            };

            return (
              <motion.div
                key={type.name}
                variants={item}
                className={`rounded-2xl border-2 ${colorStyles.border} ${colorStyles.bg} p-8 transition-transform hover:scale-105`}
              >
                <div
                  className={`inline-flex rounded-lg ${colorStyles.iconBg} p-3`}
                >
                  <Icon className={`h-6 w-6 ${colorStyles.text}`} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {type.name}
                </h3>

                <div className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {type.percentage} of customers
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      AI Cost:
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {type.cost}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Margin:
                    </span>
                    <span
                      className={`text-xl font-bold ${colorStyles.text}`}
                    >
                      {type.margin}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border-2 border-red-200 bg-red-50 p-8 dark:border-red-900 dark:bg-red-950/30"
        >
          <div className="flex items-start gap-4">
            <TrendingDown className="h-8 w-8 flex-shrink-0 text-red-600 dark:text-red-500" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Real Example: $8,900/month loss from 5 customers
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                A coding assistant SaaS charged $20/developer. Five power users
                each cost $1,800/month in AI fees. They discovered this{" "}
                <span className="font-bold">3 months later</span> after losing
                $26,700.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
