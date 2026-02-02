"use client"

import { useState } from "react"

// Capability card with expandable details
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
      className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer ${
        isExpanded ? 'border-slate-300 shadow-lg' : 'border-slate-200 hover:border-slate-300'
      }`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-white flex-shrink-0">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
              <p className="text-sm text-slate-600 mt-1">{description}</p>
            </div>
          </div>
          <svg 
            className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// Visual diagram for provider routing
function ProviderRoutingDiagram() {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
      <h4 className="text-lg font-semibold mb-4">Intelligent Provider Routing</h4>
      
      <div className="space-y-4">
        {/* User preference */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <div className="flex-1 h-0.5 bg-slate-600 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 animate-pulse" style={{ width: '60%' }} />
          </div>
          <div className="w-16 h-16 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
        </div>
        
        {/* Provider options */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {['OpenAI', 'Claude', 'Gemini', 'Local'].map((provider, i) => (
            <div key={provider} className={`p-3 rounded-lg border ${i === 0 ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-slate-700/50 border-slate-600'}`}>
              <div className="text-xs font-medium text-center">{provider}</div>
              {i === 0 && <div className="text-[10px] text-emerald-400 text-center mt-1">Active</div>}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-slate-400 mt-4">
          User switches provider in Consonant → All your apps instantly use the new provider
        </p>
      </div>
    </div>
  )
}

export default function AdvancedCapabilitiesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(0)

  const capabilities = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: "Existing Provider Accounts",
      description: "Users bring their own OpenAI, Anthropic, or other API keys",
      details: [
        "Keys stored encrypted in Consonant's vault",
        "Requests routed through user's credentials",
        "Direct billing from provider to user",
        "You still use Consonant API—routing is automatic",
        "Users can switch providers anytime"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Local & Self-Hosted Models",
      description: "Users run Ollama locally or use private cloud infrastructure",
      details: [
        "User configures local model endpoint in Consonant",
        "Requests routed to their local machine",
        "Data never leaves their environment",
        "Your app code doesn't change at all",
        "Great for privacy-conscious users and enterprises"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Granular Access Controls",
      description: "Per-app permissions, spending limits, and admin controls",
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
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Provider Failover",
      description: "Automatic fallback when primary provider is unavailable",
      details: [
        "OpenAI down? Automatically switch to Anthropic",
        "Configurable failover order",
        "Sub-second failover detection",
        "Transparent to your app and users",
        "Higher uptime than any single provider"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Monitoring",
      description: "Request volumes, costs, performance, and usage patterns",
      details: [
        "See how users are using AI in your app",
        "Track costs and token usage",
        "Monitor error rates and latency",
        "Model preference analytics",
        "Export data for your own analysis"
      ]
    },
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full mb-6">
            <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Advanced</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            Features that matter for
            <br />
            <span className="text-slate-500">real applications.</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Beyond the basics, Consonant provides everything you need to build production-ready AI applications.
          </p>
        </div>
        
        {/* Capabilities grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left: Capability cards */}
          <div className="space-y-4">
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
          
          {/* Right: Visual diagram */}
          <div className="lg:sticky lg:top-8 space-y-6">
            <ProviderRoutingDiagram />
            
            {/* Analytics preview */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Platform Dashboard</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-800">12.4k</div>
                  <div className="text-xs text-slate-500">AI requests this week</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600">$847</div>
                  <div className="text-xs text-slate-500">Revenue share earned</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-800">23ms</div>
                  <div className="text-xs text-slate-500">Average latency</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-800">99.9%</div>
                  <div className="text-xs text-slate-500">Uptime</div>
                </div>
              </div>
              
              {/* Mini chart */}
              <div className="mt-4 h-24 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl flex items-end p-4 gap-1">
                {[40, 65, 45, 70, 55, 80, 60, 75, 85, 70, 90, 75].map((height, i) => (
                  <div key={i} className="flex-1 bg-emerald-400 rounded-t transition-all hover:bg-emerald-500" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="text-xs text-slate-500 text-center mt-2">Requests over time</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
