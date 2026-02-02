"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge-custom"

// Visual component for the Docs Preview
function DocsPreview({ activeTab }: { activeTab: number }) {
  return (
    <div className="w-full h-full bg-[#1e1e2e] rounded-lg overflow-hidden flex flex-col border border-slate-700/50 shadow-2xl">
      {/* Fake Browser Toolbar */}
      <div className="h-10 bg-[#151520] border-b border-slate-700/50 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-3 py-1 bg-[#1e1e2e] rounded-md text-[10px] text-slate-400 font-mono flex items-center gap-1.5 min-w-[200px] justify-center">
            <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            docs.consonant.ai
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-48 bg-[#181825] border-r border-slate-700/30 p-4 hidden sm:flex flex-col gap-4">
          <div className="flex flex-col gap-2 opacity-100 transition-opacity duration-300">
            <div className={`h-2 w-16 rounded-full ${activeTab === 0 ? "bg-blue-500" : "bg-slate-700"} transition-colors`} />
            <div className={`h-2 w-24 rounded-full ${activeTab === 0 ? "bg-slate-600" : "bg-slate-800"} transition-colors`} />
            <div className={`h-2 w-20 rounded-full ${activeTab === 0 ? "bg-slate-600" : "bg-slate-800"} transition-colors`} />
          </div>
           <div className="flex flex-col gap-2 mt-2">
            <div className={`h-2 w-12 rounded-full ${activeTab === 1 ? "bg-purple-500" : "bg-slate-700"} transition-colors`} />
            <div className={`h-2 w-28 rounded-full ${activeTab === 1 ? "bg-slate-600" : "bg-slate-800"} transition-colors`} />
            <div className={`h-2 w-24 rounded-full ${activeTab === 1 ? "bg-slate-600" : "bg-slate-800"} transition-colors`} />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className={`h-2 w-20 rounded-full ${activeTab === 2 ? "bg-emerald-500" : "bg-slate-700"} transition-colors`} />
            <div className={`h-2 w-16 rounded-full ${activeTab === 2 ? "bg-slate-600" : "bg-slate-800"} transition-colors`} />
          </div>
        </div>

        {/* Main View */}
        <div className="flex-1 p-6 relative overflow-hidden">
          {activeTab === 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="text-blue-400 text-sm font-mono mb-2">installation</div>
              <div className="text-slate-100 text-lg font-semibold mb-4">Quickstart Guide</div>
              <div className="bg-[#151520] rounded-lg p-4 font-mono text-xs text-slate-300 border border-slate-700/50">
                <span className="text-slate-500"># Install the SDK</span>
                <br />
                <span className="text-purple-400">npm</span> install @consonant/sdk
                <br /> <br />
                <span className="text-slate-500"># Configure your client</span>
                <br />
                <span className="text-blue-400">export</span> CONSONANT_USER_TOKEN=...
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="text-purple-400 text-sm font-mono mb-2">guides</div>
              <div className="text-slate-100 text-lg font-semibold mb-3">Unified AI Access</div>
              <div className="space-y-4">
                <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
                  <div className="text-emerald-400 text-[10px] font-bold uppercase mb-1">How it works</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Users connect their Consonant account to your platform. They manage their own AI provider subscriptions, while you get a unified API to interact with any model.
                  </p>
                </div>
                <div className="flex gap-2">
                   <div className="flex-1 h-1.5 bg-slate-700 rounded-full" />
                   <div className="flex-1 h-1.5 bg-slate-700 rounded-full" />
                   <div className="flex-1 h-1.5 bg-slate-700 rounded-full opacity-50" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
             <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 h-full flex flex-col">
              <div className="text-emerald-400 text-sm font-mono mb-2">api reference</div>
              <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-mono rounded">GET</span>
                  <span className="text-slate-200 text-xs font-mono">/v1/user/stats</span>
              </div>
              <div className="flex-1 bg-[#151520] rounded-lg p-5 font-mono text-[11px] text-slate-300 border border-slate-700/50 overflow-hidden relative shadow-inner">
                <div className="absolute top-0 right-0 p-3 text-slate-600 text-[9px] font-bold">JSON RESPONSE</div>
                <div className="text-blue-400">{"{"}</div>
                <div className="pl-5 space-y-1">
                    <div><span className="text-indigo-300">"status"</span>: <span className="text-emerald-400">"active"</span>,</div>
                    <div><span className="text-indigo-300">"tokens"</span>: <span className="text-amber-400">1240000</span>,</div>
                    <div><span className="text-indigo-300">"revenue"</span>: <span className="text-emerald-400">0.30</span>,</div>
                    <div><span className="text-indigo-300">"provider"</span>: <span className="text-slate-400">"managed"</span></div>
                </div>
                <div className="text-blue-400">{"}"}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Quickstart Guides",
      description: "Get up and running in minutes with our\ncopy-paste usage examples for every framework.",
      color: "blue",
    },
    {
      title: "Deep Dive Concepts",
      description: "Understand specific topics like token counting,\nrevenue share mechanics, and provider routing.",
      color: "purple",
    },
    {
      title: "Interactive API Reference",
      description: "Test endpoints directly from your browser.\nTyped, documented, and predictable.",
      color: "emerald",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-white">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 1H9.5C10.05 1 10.5 1.45 10.5 2V10C10.5 10.55 10.05 11 9.5 11H2.5C1.95 11 1.5 10.5 1.5 10V2C1.5 1.45 1.95 1 2.5 1Z" stroke="#37322F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 3.5H8" stroke="#37322F" strokeWidth="1" strokeLinecap="round"/>
                <path d="M4 6H8" stroke="#37322F" strokeWidth="1" strokeLinecap="round"/>
                <path d="M4 8.5H6" stroke="#37322F" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            }
            text="Documentation"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Ship faster with great docs
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Integration guides, API references, and SDKs for every platform.
            <br className="hidden md:block" />
            Get your users unified AI access in under 30 minutes.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-[1060px] py-12 md:py-16 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:w-[360px] flex flex-col justify-center items-center gap-4">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer rounded-lg ${
                    isActive
                      ? "bg-slate-50 shadow-sm ring-1 ring-slate-200"
                      : "hover:bg-slate-50/50"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-slate-100 overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#37322F] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-start items-center gap-2 text-[#49423D] text-sm font-semibold leading-6 font-sans">
                         {isActive && (
                            <div className={`w-1.5 h-1.5 rounded-full ${
                                card.color === "blue" ? "bg-blue-500" :
                                card.color === "purple" ? "bg-purple-500" : "bg-emerald-500"
                            }`} />
                         )}
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:flex-1 h-[300px] md:h-[400px] rounded-xl flex flex-col justify-center items-center shadow-2xl shadow-slate-200/50 transform transition-transform duration-500 hover:scale-[1.01]">
            <DocsPreview activeTab={activeCard} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
