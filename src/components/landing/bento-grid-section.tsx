"use client"

import { Badge } from "@/components/ui/badge-custom"
import Image from "next/image"
import { useEffect, useState } from "react"

// Animated balance meter component
function BalanceMeter() {
  const [balance, setBalance] = useState(250000)
  const [isStreaming, setIsStreaming] = useState(false)
  
  useEffect(() => {
    // Simulate streaming deductions
    const streamInterval = setInterval(() => {
      setIsStreaming(true)
      setBalance(prev => {
        const newBalance = prev - Math.floor(Math.random() * 1500 + 500)
        if (newBalance <= 50000) {
          // Reset after reaching low
          setTimeout(() => {
            setBalance(250000)
            setIsStreaming(false)
          }, 2000)
          return 50000
        }
        return newBalance
      })
    }, 800)
    
    return () => clearInterval(streamInterval)
  }, [])
  
  const percentage = (balance / 250000) * 100
  const isLow = percentage < 25
  
  return (
    <div className="w-full h-full bg-[#1a1a2e] rounded-lg p-4 sm:p-5 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isStreaming ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
          <span className="text-slate-400 text-xs font-mono">customer_abc123</span>
        </div>
        <span className={`text-xs font-mono px-2 py-0.5 rounded ${isLow ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
          {isLow ? 'LOW BALANCE' : 'ACTIVE'}
        </span>
      </div>
      
      {/* Balance display */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-slate-500 text-xs font-mono mb-1">Available Balance</div>
        <div className="text-white text-2xl sm:text-3xl font-mono font-bold mb-3">
          {balance.toLocaleString()} <span className="text-slate-500 text-sm">grains</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-300 ${isLow ? 'bg-amber-500' : 'bg-emerald-500'}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-slate-500 text-[10px] font-mono">0</span>
          <span className="text-slate-500 text-[10px] font-mono">250,000</span>
        </div>
      </div>
      
      {/* Recent activity */}
      <div className="mt-4 pt-3 border-t border-slate-700/50">
        <div className="text-slate-500 text-[10px] font-mono mb-2">Recent deductions</div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-slate-400">gpt-4 completion</span>
            <span className="text-red-400">-1,245</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-slate-400">gpt-4 completion</span>
            <span className="text-red-400">-892</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// SDK code preview component
function SDKPreview() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] rounded-lg overflow-hidden flex flex-col">
      {/* Tab bar */}
      <div className="flex items-center gap-1 px-3 py-2 bg-[#16162a] border-b border-slate-700/50">
        <div className="px-3 py-1 bg-[#1a1a2e] rounded text-xs text-white font-mono">TypeScript</div>
        <div className="px-3 py-1 text-xs text-slate-500 font-mono hover:text-slate-300 cursor-pointer">Python</div>
      </div>
      
      {/* Code */}
      <div className="flex-1 p-4 overflow-hidden">
        <pre className="text-[10px] sm:text-xs font-mono leading-relaxed">
          <code>
            <span className="text-slate-500">// Install:</span>
            {"\n"}
            <span className="text-emerald-400">npm install @consonant/sdk</span>
            {"\n\n"}
            <span className="text-slate-500">// Wrap your client</span>
            {"\n"}
            <span className="text-purple-400">import</span>
            <span className="text-slate-300">{" { Consonant } "}</span>
            <span className="text-purple-400">from</span>
            <span className="text-amber-300">{" '@consonant/sdk'"}</span>
            {"\n\n"}
            <span className="text-purple-400">const</span>
            <span className="text-slate-300">{" client = "}</span>
            <span className="text-cyan-400">consonant</span>
            <span className="text-slate-300">.wrap(openai)</span>
            {"\n\n"}
            <span className="text-slate-500">// That's it. You're protected.</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

// Kill switch visualization
function KillSwitchDemo() {
  const [stage, setStage] = useState(0)
  const stages = ['streaming', 'limit_hit', 'killed', 'recovered']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev + 1) % stages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 sm:p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#49423D] text-xs font-semibold">Kill Switch</span>
        <div className={`px-2 py-0.5 rounded text-[10px] font-medium ${
          stage === 2 ? 'bg-red-100 text-red-600' : 
          stage === 3 ? 'bg-emerald-100 text-emerald-600' :
          'bg-blue-100 text-blue-600'
        }`}>
          {stage === 0 && 'Streaming...'}
          {stage === 1 && 'Limit reached'}
          {stage === 2 && 'Stream killed'}
          {stage === 3 && 'User notified'}
        </div>
      </div>
      
      {/* Simulated chat */}
      <div className="flex-1 bg-white rounded-lg border border-slate-200 p-3 overflow-hidden">
        <div className="space-y-2">
          <div className="bg-slate-100 rounded-lg p-2 text-xs text-slate-600 max-w-[80%]">
            Write a comprehensive guide...
          </div>
          <div className={`bg-[#37322F] rounded-lg p-2 text-xs text-white max-w-[80%] ml-auto transition-all ${
            stage >= 2 ? 'opacity-60' : ''
          }`}>
            {stage === 0 && "Here's a comprehensive guide to machine learning..."}
            {stage >= 1 && (
              <>
                Here&apos;s a comprehensive guide to machine learning...
                {stage >= 2 && (
                  <div className="mt-2 pt-2 border-t border-white/20 text-amber-300 text-[10px]">
                    ⚠️ Response limit reached
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-center text-[10px] text-slate-500">
        Partial response delivered, no overspend
      </div>
    </div>
  )
}

// Analytics mini dashboard
function AnalyticsDashboard() {
  return (
    <div className="w-full h-full bg-white rounded-lg border border-slate-200 p-4 sm:p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#49423D] text-sm font-semibold">Customer Analytics</span>
        <span className="text-xs text-slate-500">Last 7 days</span>
      </div>
      
      {/* Mini bar chart */}
      <div className="flex-1 flex items-end justify-between gap-1 px-2">
        {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-gradient-to-t from-[#37322F] to-[#605A57] rounded-t transition-all hover:from-[#49423D] hover:to-[#7A746F]"
              style={{ height: `${height}%` }}
            />
            <span className="text-[8px] text-slate-400">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>
      
      {/* Stats row */}
      <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2">
        <div className="text-center">
          <div className="text-lg font-semibold text-[#37322F]">847</div>
          <div className="text-[10px] text-slate-500">Requests</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-emerald-600">$12.40</div>
          <div className="text-[10px] text-slate-500">AI Spend</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-[#37322F]">92%</div>
          <div className="text-[10px] text-slate-500">Margin</div>
        </div>
      </div>
    </div>
  )
}

// Stripe integration visual
function StripeIntegration() {
  const [syncing, setSyncing] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncing(true)
      setTimeout(() => setSyncing(false), 1500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg p-4 sm:p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#635BFF"/>
            <path d="M18.5 16.5c0-1.1.9-1.5 2.3-1.5 2.1 0 4.6.6 6.7 1.8v-6.3c-2.2-.9-4.5-1.3-6.7-1.3-5.5 0-9.1 2.9-9.1 7.7 0 7.5 10.3 6.3 10.3 9.5 0 1.3-1.1 1.7-2.7 1.7-2.3 0-5.3-.9-7.6-2.2v6.4c2.6 1.1 5.2 1.6 7.6 1.6 5.6 0 9.5-2.8 9.5-7.7-.1-8.1-10.3-6.6-10.3-9.7z" fill="white"/>
          </svg>
          <span className="text-[#49423D] text-sm font-semibold">Stripe Connected</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Auto-sync customer payments. When invoices pay, grains credit instantly.
        </p>
      </div>
      
      {/* Sync animation */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
          <svg className="w-5 h-5 text-[#635BFF]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.144l-.893 5.575C4.746 22.811 7.677 24 11.158 24c2.686 0 4.92-.7 6.466-1.958 1.652-1.317 2.605-3.285 2.605-5.714 0-4.039-2.494-5.757-6.253-7.178z"/>
          </svg>
        </div>
        
        <div className={`flex gap-1 ${syncing ? 'opacity-100' : 'opacity-30'}`}>
          {[0, 1, 2].map(i => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full bg-[#635BFF] ${syncing ? 'animate-bounce' : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="w-10 h-10 rounded-lg bg-[#37322F] flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
      </div>
      
      <div className="mt-4 text-center text-[10px] text-slate-500">
        {syncing ? 'Syncing payment data...' : 'Payment → Grains in real-time'}
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
            Everything you need to protect margins
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Real-time balance tracking, automatic kill switches, and
            <br className="hidden sm:block" />
            Stripe integration—all in a lightweight SDK.
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
          {/* Real-time Balance Tracking */}
          <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Real-time Balance Tracking
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Watch balances update live as tokens stream. Every grain is accounted for with microsecond precision.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <BalanceMeter />
            </div>
          </div>

          {/* 3-Line Integration */}
          <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                3-Line Integration
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Wrap your existing OpenAI or Anthropic client. No infrastructure changes, no complex setup.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <SDKPreview />
            </div>
          </div>

          {/* Kill Switch */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Automatic Kill Switch
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Terminate responses mid-stream when limits hit. Customer sees partial output, you lose zero dollars.
              </p>
            </div>
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <KillSwitchDemo />
            </div>
          </div>

          {/* Stripe Integration */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Stripe Integration
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                Connect Stripe in one click. Customer payments automatically convert to AI spending limits.
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
          {/* Analytics */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Per-Customer Analytics
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                See exactly which customers are profitable and which are draining your AI budget.
              </p>
            </div>
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden">
              <AnalyticsDashboard />
            </div>
          </div>
          
          {/* Multi-provider */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Works With Any Provider
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                OpenAI, Anthropic, Google, Groq—use any provider or gateway. Consonant sits in front.
              </p>
            </div>
            <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-5 flex flex-col justify-center items-center">
              <div className="grid grid-cols-3 gap-4">
                {/* Provider icons */}
                {[
                  { name: 'OpenAI', src: '/openai-icon.svg' },
                  { name: 'Anthropic', src: '/anthropic-Icon.svg' },
                  { name: 'Google', src: '/google-gemini-icon.svg' },
                  { name: 'Groq', src: '/grok-ai-icon.svg' },
                  { name: 'Helicone', src: '/helicone.png' },
                  { name: 'Portkey', src: '/portkey.jpeg' },
                ].map((provider, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden p-2"
                    title={provider.name}
                  >
                    <Image
                      src={provider.src}
                      alt={provider.name}
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500 text-center">
                Plus Helicone, Portkey, LiteLLM, and direct API calls
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
      </div>
    </div>
  )
}
