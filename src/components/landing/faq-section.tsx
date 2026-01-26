"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Consonant and who is it for?",
    answer:
      "Consonant is a real-time AI cost enforcement system for developers building AI-powered applications. It's designed for SaaS founders, AI app builders, and teams who need precise spending control and token tracking across OpenAI, Anthropic, and other AI providers.",
  },
  {
    question: "How does real-time balance checking work?",
    answer:
      "Our SDK intercepts AI API calls before they reach the provider. It sends a preflight request to our backend API which verifies customer spending limits in Redis (sub-millisecond latency). If the limit is exceeded, the request is rejected and the end user is notified immediately.",
  },
  {
    question: "Can I use Consonant with Helicone, Portkey, or direct API calls?",
    answer:
      "Yes! Consonant works with any AI provider setup. Use it with Helicone, Portkey, LiteLLM, or direct API calls to OpenAI, Anthropic, Google, Groq, and others. The SDK wraps your existing client transparently.",
  },
  {
    question: "What pricing models does Consonant support?",
    answer:
      "Consonant supports flexible pricing allocation. Allocate a percentage of customer subscription revenue to AI costs, set fixed monthly budgets, or use custom pricing rules. You control how grains (our micro-billing unit) map to customer budgets.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest. We use PostgreSQL with Row Level Security, Redis for real-time caching, and infrastructure hosted on trusted cloud providers. We maintain SOC 2 compliance and security audits.",
  },
  {
    question: "How do I get started with Consonant?",
    answer:
      "Sign up at app.consonant.dev, create an account, integrate our TypeScript or Python SDK (2 lines of code to wrap your AI client), and deploy. Our documentation includes examples for OpenAI, Anthropic, and more. You can be live in under 30 minutes.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Everything you need to know about controlling
            <br className="hidden md:block" />
            your AI costs with Consonant.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
