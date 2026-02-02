"use client"

import { Badge } from "@/components/ui/badge-custom"
import Image from "next/image"
import { useEffect, useState } from "react"

// OAuth-style authentication component
function BalanceMeter() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  
  useEffect(() => {
    const connectInterval = setInterval(() => {
      setIsConnecting(true)
      setTimeout(() => {
        setIsConnected(true)
        setIsConnecting(false)
        setTimeout(() => {
          setIsConnected(false)
        }, 3000)
      }, 1500)
    }, 6000)
    
    return () => clearInterval(connectInterval)
  }, [])
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl p-6 flex flex-col justify-center items-center border border-slate-200 shadow-inner">
      {/* App header */}
      <div className="w-full mb-6 pb-4 border-b border-slate-200/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">Y</div>
          <div>
            <div className="text-[12px] font-bold text-[#37322F]">YourApp.ai</div>
            <div className="text-[10px] text-slate-400">Settings &rsaquo; Integrations</div>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-slate-300" />
      </div>
      
      {/* OAuth button */}
      <div className="w-full max-w-[280px] space-y-4">
        <button 
          className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all duration-500 shadow-sm flex items-center justify-center gap-3 group active:scale-[0.98] ${
            isConnected 
              ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-emerald-100' 
              : 'bg-white border-slate-200 text-[#37322F] hover:border-indigo-500 hover:shadow-md'
          }`}
          disabled={isConnecting}
        >
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors shadow-sm ${
            isConnected ? 'bg-emerald-500' : 'bg-[#37322F] group-hover:bg-indigo-600'
          }`}>
            <span className="text-white text-[12px] font-bold">C</span>
          </div>
          <span className="text-[13px] font-semibold tracking-tight">
            {isConnecting ? 'Connecting...' : isConnected ? 'Consonant Connected' : 'Connect Consonant'}
          </span>
        </button>
        
        <div className="relative">
          {isConnected ? (
            <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">AI Access Active</div>
              </div>
              <div className="text-[10px] text-slate-500 leading-tight">Billing & routing managed by Consonant.</div>
            </div>
          ) : isConnecting ? (
            <div className="flex justify-center py-2">
               <div className="flex gap-1.5">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                  ))}
               </div>
            </div>
          ) : (
            <div className="text-center text-[11px] text-slate-400 font-medium">
              Unified billing for all your AI features
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// SDK code preview component
function SDKPreview() {
  return (
    <div className="w-full h-full bg-[#0f172a] rounded-xl overflow-hidden shadow-2xl flex flex-col border border-slate-800">
      {/* Window controls */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/50 border-b border-slate-800/50">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex items-center gap-2">
           <div className="px-2 py-0.5 bg-slate-800 rounded text-[9px] text-slate-400 font-mono">consonant.ts</div>
           <div className="px-2 py-0.5 text-[9px] text-slate-600 font-mono">package.json</div>
        </div>
      </div>
      
      {/* Code Area */}
      <div className="flex-1 p-5 font-mono text-[11px] sm:text-[12px] leading-[1.6]">
        <div className="flex gap-4">
          <div className="text-slate-600 text-right select-none hidden sm:block">
            {Array.from({length: 8}).map((_, i) => <div key={i}>{i+1}</div>)}
          </div>
          <div className="flex-1 overflow-hidden">
            <div>
              <span className="text-slate-500 italic">// Install SDK</span>
            </div>
            <div className="mb-3">
              <span className="text-amber-400">npm</span> <span className="text-slate-300">install</span> <span className="text-emerald-400">@consonant/sdk</span>
            </div>
            
            <div>
              <span className="text-pink-400 italic">// Connect user account</span>
            </div>
            <div>
              <span className="text-purple-400">import</span> <span className="text-slate-300">{" { "}</span><span className="text-cyan-400">Consonant</span><span className="text-slate-300">{" } "}</span><span className="text-purple-400">from</span><span className="text-amber-300"> 'sdk'</span>
            </div>
            <div className="mb-3">
              <span className="text-purple-400">const</span> <span className="text-slate-300">ai =</span> <span className="text-purple-400">new</span> <span className="text-cyan-400">Consonant</span><span className="text-slate-300">(token)</span>
            </div>
            
            <div>
              <span className="text-indigo-400 italic">// Just work. Billing included.</span>
            </div>
            <div>
              <span className="text-purple-400">const</span> <span className="text-slate-300">res =</span> <span className="text-purple-400">await</span> <span className="text-slate-300">ai.</span><span className="text-indigo-400">chat</span><span className="text-slate-300">(...)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Automatic billing visualization
function KillSwitchDemo() {
  const [activeStep, setActiveStep] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  
  const steps = [
    { id: 1, text: 'AI Feature Triggered', color: 'blue' },
    { id: 2, text: 'Usage Synced to Consonant', color: 'indigo' },
    { id: 3, text: 'Immediate Micro-Billing', color: 'emerald' },
    { id: 4, text: 'Revenue Share Deposited', color: 'amber' }
  ]
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl p-6 flex flex-col border border-slate-200 shadow-inner">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[#37322F] text-[12px] font-bold uppercase tracking-wider">Transaction Flow</span>
        <div className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full text-[9px] font-bold text-emerald-600 uppercase">Real-Time</div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center gap-3">
        {steps.map((step, i) => (
          <div 
            key={i}
            className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-500 ${
              i === activeStep 
                ? 'bg-white border-slate-200 shadow-md translate-x-1 scale-[1.02]' 
                : 'bg-transparent border-transparent opacity-40'
            }`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold shadow-sm transition-colors ${
              i === activeStep 
                ? `bg-indigo-600 text-white` 
                : 'bg-slate-200 text-slate-500'
            }`}>
              {step.id}
            </div>
            <div className={`text-[12px] font-semibold tracking-tight ${
              i === activeStep ? 'text-[#37322F]' : 'text-slate-400'
            }`}>
              {step.text}
            </div>
            {i === activeStep && (
               <div className="ml-auto animate-pulse flex gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
               </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Analytics mini dashboard
function AnalyticsDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-xl border border-slate-200 p-6 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[#37322F] text-[13px] font-bold">Platform Tokens</span>
          <div className="text-[10px] text-slate-400 font-medium">Synced across all providers</div>
        </div>
        <div className="px-2 py-1 bg-slate-50 rounded-lg border border-slate-100 text-[10px] text-slate-500 font-bold">7D</div>
      </div>
      
      {/* Mini bar chart */}
      <div className="flex-1 flex items-end justify-between gap-1.5 px-1 mb-6">
        {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
            <div className="relative w-full">
              <div 
                className="w-full bg-[#f1f5f9] rounded-t-sm absolute bottom-0 h-[100px] -z-10"
              />
              <div 
                className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-sm transition-all duration-1000 group-hover:from-indigo-400 group-hover:to-indigo-300 shadow-sm"
                style={{ height: `${height}px` }}
              />
            </div>
            <span className="text-[9px] text-slate-400 font-bold group-hover:text-slate-600 mb-[-4px]">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-50">
        <div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mb-0.5">Tokens</div>
          <div className="text-[15px] font-bold text-[#37322F]">1.2M</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mb-0.5">Revenue</div>
          <div className="text-[15px] font-bold text-emerald-600">$421</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mb-0.5">Users</div>
          <div className="text-[15px] font-bold text-[#37322F]">2.4k</div>
        </div>
      </div>
    </div>
  )
}

// Provider flexibility visual
function StripeIntegration() {
  const [selectedProvider, setSelectedProvider] = useState(0)
  const providers = [
    { name: 'OpenAI', icon: 'O' },
    { name: 'Anthropic', icon: 'A' },
    { name: 'Google Gemini', icon: 'G' }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedProvider(prev => (prev + 1) % providers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl p-6 flex flex-col justify-between border border-slate-200 shadow-inner">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-[#37322F] text-[12px] font-bold uppercase tracking-wider">Provider Selection</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Users choose. You build once. Consonant routes.
        </p>
      </div>
      
      {/* Provider selection list */}
      <div className="flex-1 space-y-2.5">
        {providers.map((provider, i) => (
          <div 
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-700 ${
              i === selectedProvider 
                ? 'bg-white border-indigo-200 shadow-md translate-x-1' 
                : 'bg-slate-50/50 border-transparent opacity-60'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold border ${
              i === selectedProvider 
                ? 'bg-indigo-50 border-indigo-100 text-indigo-600' 
                : 'bg-white border-slate-200 text-slate-400'
            }`}>
              {provider.icon}
            </div>
            <div className="flex flex-col">
              <span className={`text-[12px] font-bold ${
                i === selectedProvider ? 'text-[#37322F]' : 'text-slate-500'
              }`}>
                {provider.name}
              </span>
              {i === selectedProvider && (
                <span className="text-[9px] text-emerald-600 font-bold uppercase animate-in fade-in zoom-in-95">Route Active</span>
              )}
            </div>
            {i === selectedProvider && (
              <div className="ml-auto w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function BentoGridSection() {
  return (
    <div id="features" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L11 3.5V8.5L6 11L1 8.5V3.5L6 1Z" stroke="#37322F" strokeWidth="1" fill="none" />
                <path d="M6 5.5V11" stroke="#37322F" strokeWidth="1" />
                <path d="M1 3.5L6 6L11 3.5" stroke="#37322F" strokeWidth="1" />
              </svg>
            }
            text="How it works"
          />
          <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            The infrastructure layer for AI access
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            One integration gives your users unified AI access across providers,
            <br className="hidden sm:block" />
            secure authentication, and automatic billing—with zero infrastructure work.
          </div>
        </div>
      </div>

      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* OAuth-Style Authentication */}
          <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                OAuth-Style Authentication
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Users connect their Consonant account with one click—like "Sign in with Google." Instant AI access, zero API key management.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <BalanceMeter />
            </div>
          </div>

          {/* Simple Integration */}
          <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                Simple Integration
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Add our SDK, implement OAuth flow, make AI requests. No payment processing, no key storage, no provider complexity.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <SDKPreview />
            </div>
          </div>

          {/* Automatic Billing */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Automatic Billing
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Users see one unified bill across all AI apps. You set your revenue share and focus on building—no payment infrastructure needed.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <KillSwitchDemo />
            </div>
          </div>

          {/* Provider Flexibility */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Provider Flexibility
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Users choose their preferred AI provider. Your app works with all of them—Consonant handles routing.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <StripeIntegration />
            </div>
          </div>
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom feature row */}
      <div className="self-stretch border-t border-[rgba(55,50,47,0.12)] flex justify-center items-stretch">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* Analytics Dashboard */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Analytics Dashboard
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                See how users engage with AI features. Track usage patterns, costs, and optimize your product.
              </p>
            </div>
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
              <AnalyticsDashboard />
            </div>
          </div>
          
          {/* Revenue Share */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Set Your Revenue Share
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Configure your revenue percentage on AI transactions. Get paid automatically when users consume AI through your app.
              </p>
            </div>
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-xl overflow-hidden bg-[#f8fafc] border border-slate-200 p-6 flex flex-col justify-center shadow-inner">
              <div className="w-full space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[13px] font-bold text-[#37322F]">Dynamic Margins</span>
                    <div className="text-[10px] text-slate-400 font-medium">Set your platform fee</div>
                  </div>
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-lg border border-emerald-100 text-[11px] font-bold text-emerald-600">+30%</div>
                </div>
                
                {/* Visual slider mock */}
                <div className="relative w-full h-10 flex items-center">
                  <div className="absolute w-full h-2 bg-slate-200/50 rounded-full" />
                  <div className="absolute w-[30%] h-2 bg-indigo-500 rounded-full" />
                  <div className="absolute left-[30%] w-6 h-6 bg-white border-[3px] border-indigo-500 rounded-xl shadow-lg -ml-3 cursor-pointer hover:scale-110 transition-transform active:scale-95 z-10" />
                  <div className="absolute left-[30%] -top-6 -ml-4 bg-[#37322F] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">Your Fee</div>
                </div>

                <div className="pt-2 space-y-2">
                  <div className="flex justify-between text-[11px] font-medium font-mono">
                    <span className="text-slate-400">PROVIDER COST</span>
                    <span className="text-slate-600">$1.00</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-medium font-mono">
                    <span className="text-slate-400">USER PAYS</span>
                    <span className="text-slate-600 font-bold">$1.30</span>
                  </div>
                  <div className="flex justify-between text-[12px] font-bold border-t border-slate-200/60 pt-2 text-emerald-600">
                    <span>YOU EARN</span>
                    <span className="bg-emerald-50 px-1.5 rounded">$0.30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
      </div>
    </div>
  )
}
