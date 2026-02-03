"use client"

import { Badge } from "@/components/ui/badge-custom"
import { useState, useEffect } from "react"

// Expandable capability card
function CapabilityCard({ 
  icon, 
  title, 
  description, 
  details, 
  isExpanded, 
  onClick 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  isExpanded: boolean
  onClick: () => void
}) {
  return (
    <div 
      className={`bg-white rounded-xl border transition-all duration-300 cursor-pointer ${
        isExpanded ? 'border-slate-300 shadow-md' : 'border-slate-200 hover:border-slate-300'
      }`}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#37322F] flex items-center justify-center text-white flex-shrink-0">
              {icon}
            </div>
            <div>
              <h3 className="text-[#37322F] text-sm font-semibold">{title}</h3>
              <p className="text-[#605A57] text-[12px] mt-0.5">{description}</p>
            </div>
          </div>
          <svg 
            className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 mt-1 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-slate-100 space-y-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[12px] text-[#605A57]">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Provider routing visualization
function ProviderRoutingDemo() {
  const [activeProvider, setActiveProvider] = useState(0)
  const providers = ['OpenAI', 'Anthropic', 'Google', 'Local']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProvider(prev => (prev + 1) % providers.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full bg-[#0f172a] rounded-xl overflow-hidden flex flex-col border border-slate-800">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/50 border-b border-slate-800/50">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[9px] text-slate-400 font-mono">routing</div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col justify-center">
        <div className="text-[11px] text-slate-400 font-mono mb-3">// User switches provider in Consonant</div>
        
        <div className="space-y-2 mb-4">
          {providers.map((provider, i) => (
            <div 
              key={i}
              className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all duration-500 ${
                i === activeProvider 
                  ? 'bg-emerald-500/10 border-emerald-500/30' 
                  : 'bg-transparent border-transparent opacity-40'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${i === activeProvider ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
              <span className={`text-[12px] font-mono ${i === activeProvider ? 'text-emerald-400' : 'text-slate-500'}`}>
                {provider}
              </span>
              {i === activeProvider && (
                <span className="text-[9px] text-emerald-400/60 font-mono ml-auto">active</span>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-[11px] text-slate-500 font-mono">
          // Your code: <span className="text-indigo-400">unchanged</span>
        </div>
      </div>
    </div>
  )
}

// Analytics preview
function AnalyticsPreview() {
  return (
    <div className="w-full h-full bg-white rounded-xl border border-slate-200 p-5 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#37322F] text-[12px] font-bold">Platform Dashboard</span>
        <div className="px-2 py-0.5 bg-slate-50 rounded-lg border border-slate-100 text-[9px] text-slate-500 font-bold">7D</div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-50 rounded-lg p-3">
          <div className="text-lg font-bold text-[#37322F]">12.4k</div>
          <div className="text-[9px] text-slate-400 font-medium">Requests</div>
        </div>
        <div className="bg-emerald-50 rounded-lg p-3">
          <div className="text-lg font-bold text-emerald-600">$847</div>
          <div className="text-[9px] text-emerald-600/60 font-medium">Revenue</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <div className="text-lg font-bold text-[#37322F]">23ms</div>
          <div className="text-[9px] text-slate-400 font-medium">Latency</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3">
          <div className="text-lg font-bold text-[#37322F]">99.9%</div>
          <div className="text-[9px] text-slate-400 font-medium">Uptime</div>
        </div>
      </div>
      
      {/* Mini chart */}
      <div className="flex-1 flex items-end gap-1 px-1">
        {[40, 65, 45, 70, 55, 80, 60, 75, 85, 70, 90, 75].map((height, i) => (
          <div 
            key={i} 
            className="flex-1 bg-indigo-400 rounded-t transition-all hover:bg-indigo-500" 
            style={{ height: `${height}%` }} 
          />
        ))}
      </div>
    </div>
  )
}

export default function AdvancedCapabilitiesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(0)

  const capabilities = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: "Bring Your Own Provider",
      description: "Users bring their OpenAI, Anthropic, or other accounts",
      details: [
        "Keys stored encrypted in Consonant's vault",
        "Requests routed through user's credentials",
        "Direct billing from provider to user",
        "You use Consonant API—routing automatic",
        "Users can switch providers anytime"
      ]
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Local & Self-Hosted Models",
      description: "Let advanced users or enterprise bring their own self-hosted or local LLMs through a unified interface",
      details: [
        "User configures local model endpoint",
        "Requests routed to their local machine",
        "Data never leaves their environment",
        "Your app code doesn't change at all",
        "Great for privacy-conscious users"
      ]
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Granular Access Controls",
      description: "Per-app permissions, spending limits, admin controls",
      details: [
        "Users set spending limits per app",
        "Revoke access to specific apps instantly",
        "Enterprise admins manage team access",
        "Detailed audit logs for compliance",
        "Role-based access control"
      ]
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Provider Failover",
      description: "Automatic fallback when primary provider is down",
      details: [
        "OpenAI down? Auto-switch to Anthropic",
        "Configurable failover order",
        "Sub-second failover detection",
        "Transparent to your app and users",
        "Higher uptime than any single provider"
      ]
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Monitoring",
      description: "Request volumes, costs, performance, usage patterns",
      details: [
        "See how users engage with AI features",
        "Track costs and token usage",
        "Monitor error rates and latency",
        "Model preference analytics",
        "Export data for your own analysis"
      ]
    },
  ]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] mx-auto py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L7 3L9 3.5L7.5 5.5L8 8L6 7L4 8L4.5 5.5L3 3.5L5 3L6 1Z" stroke="#37322F" strokeWidth="0.8" fill="none" />
              </svg>
            }
            text="Advanced"
          />
          <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Features for real applications
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Beyond the basics—everything you need to build production-ready AI features.
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          
          {/* Left: Capability cards */}
          <div className="border-b lg:border-b-0 border-r-0 lg:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={index}
                  icon={capability.icon}
                  title={capability.title}
                  description={capability.description}
                  details={capability.details}
                  isExpanded={expandedCard === index}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                />
              ))}
            </div>
          </div>
          
          {/* Right: Visual demos */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Intelligent Provider Routing
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                User switches provider in Consonant → all your apps instantly use the new provider.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] rounded-lg overflow-hidden">
              <ProviderRoutingDemo />
            </div>
            
            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Platform Analytics
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                See how users engage with AI features, track costs, and optimize your product.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] rounded-lg overflow-hidden">
              <AnalyticsPreview />
            </div>
          </div>
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
      </div>
    </div>
  )
}
