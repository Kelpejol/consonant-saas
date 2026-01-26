/**
 * FAQ Section - Accordion-style Frequently Asked Questions
 * 
 * Design: Clean accordion with smooth expand/collapse animations
 * Strategy: Address common objections and technical concerns
 * Accessibility: Keyboard navigable, properly labeled for screen readers
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does integration take?",
    answer:
      "Most customers integrate in under 15 minutes. You install our SDK via npm/pip, wrap your AI client with 3 lines of code, and configure customer ID extraction. That's it. Our docs have step-by-step guides for Next.js, Express, Flask, and more.",
  },
  {
    question: "Does this add latency to AI requests?",
    answer:
      "Negligible. Balance checks complete in under 5 milliseconds using Redis. The overhead is imperceptible to end users—typically adding 3-5ms to a request that already takes 2-5 seconds for AI generation.",
  },
  {
    question: "What if Consonant goes down? Do my AI features break?",
    answer:
      "No. The SDK has fallback modes. If our backend is unreachable, you can configure the SDK to either allow requests (permissive mode) or block them (conservative mode). We also have 99.9% uptime SLA with multi-region redundancy.",
  },
  {
    question: "Can I use this with Anthropic, Google, or other providers?",
    answer:
      "Yes. We support OpenAI, Anthropic, Google Gemini, and any provider that returns token usage in API responses. Our SDK wraps the official client libraries, so you use the same code you're already familiar with.",
  },
  {
    question: "How do you calculate costs if I use a custom LLM?",
    answer:
      "You configure pricing in the dashboard. Set input/output cost per 1000 tokens for your model. Our SDK uses those rates to calculate costs. You can version pricing over time if costs change.",
  },
  {
    question: "Do you store my prompts or completions?",
    answer:
      "No. We only store metadata: customer ID, token counts, model name, timestamps, and costs. We never log the actual text of prompts or AI-generated content. Your data stays between you and the AI provider.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about Consonant
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white p-6 text-left transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700"
              >
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
