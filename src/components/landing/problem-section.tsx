"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    stat: "23%",
    label: "of B2B SaaS AI features",
    description: "run at a loss",
    detail: "You're subsidizing your heaviest users. They're your worst customers.",
  },
  {
    stat: "$847",
    label: "monthly overrun",
    description: "per enterprise customer",
    detail: "That's not a cost center. That's a rounding error eating your runway.",
  },
  {
    stat: "72hrs",
    label: "to discover",
    description: "a runaway AI loop",
    detail: "By then, one user has burned through 40 customers' worth of budget.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
      
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0, white 2px, transparent 2px, transparent 60px)`,
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mb-24 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold mb-10">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            THE PROBLEM
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-10">
            You built AI features.
            <br />
            <span className="text-neutral-500">They're eating you alive.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-neutral-400 leading-relaxed max-w-3xl">
            Every founder with AI-powered features knows the feeling. That moment when you check your OpenAI invoice and realize{" "}
            <span className="text-white font-semibold">you've been subsidizing your customers' unlimited usage</span>{" "}
            at your own expense.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-32">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-neutral-800 group-hover:bg-red-500 transition-all duration-500" />
              
              <div className="pl-8">
                <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tighter group-hover:text-red-500 transition-colors duration-500">
                  {point.stat}
                </div>
                <div className="text-xl md:text-2xl text-neutral-300 font-semibold mb-2">
                  {point.label}
                </div>
                <div className="text-xl md:text-2xl text-neutral-500 mb-6">
                  {point.description}
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {point.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Deeper Cut */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="pt-24 border-t border-neutral-800"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                The real problem isn't cost.
                <br />
                <span className="text-neutral-500">It's control.</span>
              </h3>
              <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed">
                You can't set per-customer budgets. You can't kill runaway requests mid-stream. You don't even know which customers are profitable until the month-end invoice arrives.
              </p>
            </div>
            
            <div className="relative">
              {/* Code block showing the problem */}
              <div className="bg-neutral-950 border-2 border-neutral-800 p-8 md:p-10 hover:border-red-500/50 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-neutral-600 font-mono">your-app.ts</span>
                </div>
                <pre className="text-base md:text-lg font-mono leading-relaxed">
                  <code className="text-neutral-500">
                    <span className="text-neutral-600">// Your current situation</span>
                    {"\n\n"}const response = await openai.chat({"{"}
                    {"\n  "}messages: userPrompt,
                    {"\n  "}stream: true,
                    {"\n  "}<span className="text-red-400">// ← No budget check</span>
                    {"\n  "}<span className="text-red-400">// ← No kill switch</span>
                    {"\n  "}<span className="text-red-400">// ← No customer limits</span>
                    {"\n  "}<span className="text-red-400">// ← Just vibes and prayers</span>
                    {"\n"}{"}"});
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
