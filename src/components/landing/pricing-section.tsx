"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    description: "For indie hackers and early-stage startups testing AI features.",
    price: "$0",
    period: "forever",
    features: [
      "Up to 3 customers",
      "100M grains/month included",
      "Basic dashboard",
      "Email support",
      "TypeScript SDK",
      "5 concurrent requests/customer",
    ],
    cta: "Start Free",
    ctaLink: "/signup",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For teams scaling AI features with real revenue at stake.",
    price: "$99",
    period: "/month",
    features: [
      "Up to 100 customers",
      "1B grains/month included",
      "Full analytics dashboard",
      "Slack + Email support",
      "TypeScript + Python SDKs",
      "25 concurrent requests/customer",
      "Stripe revenue sync",
      "Custom buffer strategies",
    ],
    cta: "Start 14-Day Trial",
    ctaLink: "/signup?plan=growth",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For companies where AI cost control is mission-critical.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited customers",
      "Unlimited grains",
      "White-label dashboard",
      "Dedicated support engineer",
      "All SDKs + custom integrations",
      "1000 concurrent requests/customer",
      "On-prem deployment option",
      "SLA with financial guarantees",
      "Custom reconciliation rules",
    ],
    cta: "Talk to Sales",
    ctaLink: "/contact?plan=enterprise",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What exactly is a 'grain'?",
    answer: "A grain is our unit of AI cost accounting. By default, 1 million grains = $1 USD. This gives you six decimal places of precision—enough to track costs down to fractions of a cent. You can configure your own grain-to-dollar ratio based on your pricing model."
  },
  {
    question: "How do you handle streaming responses?",
    answer: "Our SDK intercepts every chunk of a streaming response. Every 50 tokens (configurable), we batch a deduction call to check the customer's balance. If they're out of budget, we kill the stream instantly—no more tokens flow. The customer's code catches our InsufficientBalanceError and handles it gracefully."
  },
  {
    question: "What if Redis goes down?",
    answer: "We've built for this. The SDK maintains a local cache of recent balances with a 60-second TTL. During Redis outages, we fall back to conservative limits using cached data. When Redis recovers, a background job reconciles any discrepancies. Your customers never know anything happened."
  },
  {
    question: "Does this add latency to AI requests?",
    answer: "The pre-flight balance check adds ~2.8ms median latency (P99 is under 5ms). For streaming responses, deductions happen in the background and don't block token delivery. Your users experience zero perceptible delay."
  },
  {
    question: "What AI providers do you support?",
    answer: "Any provider that returns token usage data—which is all of them. OpenAI, Anthropic, Google Gemini, Azure OpenAI, Mistral, Cohere, and any other provider. Our stream-end reconciliation uses the provider's exact token counts as the source of truth."
  },
  {
    question: "Can I migrate mid-month?",
    answer: "Yes. When you connect Stripe, we retroactively import your existing customers and their subscription data. You can set initial balances manually or let them accumulate from the next billing cycle. Our SDK is non-breaking—just wrap your client and you're live."
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative py-32 bg-neutral-50 overflow-hidden">
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
            Pricing
            <span className="w-8 h-px bg-neutral-300" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Simple pricing.
            <br />
            <span className="text-neutral-400">No surprises.</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Start free. Scale as you grow. Never pay for overruns again.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative flex flex-col ${
                tier.highlighted 
                  ? 'bg-black text-white' 
                  : 'bg-white border-2 border-neutral-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-black'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {tier.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className={tier.highlighted ? 'text-neutral-400' : 'text-neutral-500'}>
                    {tier.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg 
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-black'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${tier.highlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0">
                <Link
                  href={tier.ctaLink}
                  className={`block w-full text-center py-4 font-semibold transition-colors duration-300 ${
                    tier.highlighted
                      ? 'bg-white text-black hover:bg-neutral-100'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-black pr-8">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-neutral-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
