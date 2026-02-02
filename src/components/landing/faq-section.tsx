"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How is Consonant different from calling OpenAI directly?",
    answer:
      "When you call OpenAI directly, you handle payments, API keys, security, and user management yourself. With Consonant, users bring their existing AI account that works across all apps. You get instant conversion (they don't need to set up payment), multi-provider support (OpenAI, Anthropic, Google, local), and zero security liability (keys stay in Consonant's vault). You focus on building; Consonant handles infrastructure.",
  },
  {
    question: "What happens if Consonant goes down?",
    answer:
      "Consonant maintains 99.9% uptime with redundant infrastructure across multiple regions. If issues occur, built-in failover automatically routes requests to backup providers. We also provide detailed status monitoring so you can track availability in real-time.",
  },
  {
    question: "Can I white-label Consonant?",
    answer:
      "Yes. Enterprise plans include white-labeling options where users see your branding throughout the connection flow. You can customize colors, logos, and even the domain. The experience feels native to your app while Consonant handles everything behind the scenes.",
  },
  {
    question: "Do I have to use Consonant's UI components?",
    answer:
      "No. We provide pre-built components for quick integration, but you can build your own UI using our SDK. The only requirement is the authentication flow where users connect their Consonant account—similar to OAuth flows you've seen with Google or GitHub.",
  },
  {
    question: "What if a user wants multiple providers for different tasks?",
    answer:
      "Users can configure provider preferences in their Consonant dashboard. They can set default providers, specify which provider to use for specific model types (e.g., Anthropic for text, OpenAI for code), or let Consonant optimize for cost/speed. Your app doesn't need to handle any of this complexity.",
  },
  {
    question: "How do refunds work?",
    answer:
      "For users on Consonant-managed billing, refunds are handled by Consonant directly—you're not involved. For revenue share, if a user gets a refund, the share is adjusted accordingly. This removes billing complexity entirely from your plate.",
  },
  {
    question: "Can users set spending limits?",
    answer:
      "Yes. Users can set total monthly limits, per-app limits, and even per-day limits in their Consonant dashboard. When limits are reached, requests fail gracefully with clear error messages. This gives users control and prevents surprise bills.",
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
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full mb-4">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">FAQ</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Everything you need to know about integrating Consonant into your platform.
            </p>
            
            <div className="mt-6 p-4 bg-slate-100 rounded-xl">
              <p className="text-sm text-slate-600">
                <strong className="text-slate-800">Still have questions?</strong>
                <br />
                <a href="mailto:hello@consonant.dev" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Schedule a call →
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:w-2/3">
            <div className="space-y-3">
              {faqData.map((item, index) => {
                const isOpen = openItems.includes(index)

                return (
                  <div 
                    key={index} 
                    className={`rounded-xl border transition-all duration-200 ${
                      isOpen ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-5 py-4 flex justify-between items-center gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1 text-slate-800 font-medium">
                        {item.question}
                      </div>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed">
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
    </section>
  )
}
