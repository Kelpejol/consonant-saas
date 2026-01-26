"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "For indie hackers testing AI features",
      features: [
        "Up to 3 customers",
        "100M grains/month",
        "Basic dashboard",
        "Email support",
      ],
      cta: "Start Free",
      href: "/signup",
      featured: false,
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      description: "For teams scaling AI features",
      features: [
        "Up to 100 customers",
        "1B grains/month",
        "Full analytics",
        "Priority support",
        "Custom limits",
        "Slack integration",
      ],
      cta: "Start Trial",
      href: "/signup?plan=growth",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For mission-critical deployments",
      features: [
        "Unlimited customers",
        "Unlimited grains",
        "White-label dashboard",
        "Dedicated support",
        "SLA guarantees",
        "On-premise option",
      ],
      cta: "Contact Sales",
      href: "/contact",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-neutral-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block bg-black text-white text-xs font-medium px-3 py-1 mb-6 uppercase tracking-wider">
            Pricing
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-8">
            Simple, transparent pricing
          </h2>
          
          <p className="text-xl text-neutral-600">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative flex flex-col ${
                plan.featured
                  ? "bg-black text-white border-4 border-black"
                  : "bg-white border-2 border-neutral-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium px-4 py-1 uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 flex-1">
                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-black"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? "text-neutral-400" : "text-neutral-600"}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.featured ? "text-neutral-400" : "text-neutral-500"}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg 
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.featured ? "text-white" : "text-black"}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.featured ? "text-neutral-300" : "text-neutral-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-8 pt-0">
                <Link
                  href={plan.href}
                  className={`block w-full text-center py-4 font-medium transition-colors ${
                    plan.featured
                      ? "bg-white text-black hover:bg-neutral-100"
                      : "bg-black text-white hover:bg-neutral-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
