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
      "Consonant is a unified AI access layer for platform developers. Instead of building payment infrastructure, managing API keys, and integrating with multiple AI providers, you integrate Consonant once. Your users get one account that works across all AI-powered apps, and you earn revenue share automatically.",
  },
  {
    question: "How does it work for my users?",
    answer:
      "Users create a Consonant account once and choose how to pay (managed billing or bring-your-own API key). When they use your app, they connect their Consonant account—similar to 'Sign in with Google.' All AI usage flows through Consonant, giving them one unified bill across all their AI apps.",
  },
  {
    question: "What do I need to integrate?",
    answer:
      "Integration takes about 30 minutes. Install our SDK, implement the authentication flow (users connect their Consonant account), and make AI requests through our API. We handle everything else: billing, API key management, provider routing, and security. No payment processing, no key storage, no multi-provider complexity.",
  },
  {
    question: "How do I make money from AI features?",
    answer:
      "When users consume AI through your app via Consonant-managed billing, you automatically earn revenue share. No payment infrastructure needed. For users who bring their own API keys, you can still charge for your app's features separately—Consonant just handles the secure key storage and routing.",
  },
  {
    question: "Is it secure? Who sees the API keys?",
    answer:
      "Your application never sees or stores user API keys. Users paste their keys into Consonant's secure vault (encrypted at rest). When they use your app, Consonant uses their key behind the scenes. This is fundamentally more secure than having keys scattered across dozens of applications. We maintain SOC 2 compliance and regular security audits.",
  },
  {
    question: "Can users switch AI providers?",
    answer:
      "Yes! Users can switch between OpenAI, Anthropic, Google, Groq, or any supported provider in their Consonant dashboard. Your code stays the same—Consonant automatically routes requests to their chosen provider. This gives users choice and keeps providers competing on quality and price.",
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
            Everything you need to know about integrating
            <br className="hidden md:block" />
            unified AI access into your platform.
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
