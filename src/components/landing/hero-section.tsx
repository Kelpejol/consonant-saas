"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}

function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}

// Animated code line component
function AnimatedCodeLine({ 
  text, 
  delay, 
  highlight = false 
}: { 
  text: string; 
  delay: number;
  highlight?: boolean;
}) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return (
    <div 
      className={`transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      }`}
    >
      <code className={`text-[11px] sm:text-xs md:text-sm font-mono ${
        highlight ? 'text-emerald-400' : 'text-slate-300'
      }`}>
        {text}
      </code>
    </div>
  )
}

// Code showcase component
function CodeShowcase({ activeCard }: { activeCard: number }) {
  const codeExamples = [
    // Platform integration showcase
    {
      lines: [
        { text: "// 1. User connects their Consonant account", delay: 0, highlight: false },
        { text: "const session = await consonant.auth({", delay: 200, highlight: true },
        { text: "  appId: 'your-app-id',", delay: 400, highlight: true },
        { text: "  redirectUri: '/callback'", delay: 600, highlight: true },
        { text: "});", delay: 800, highlight: true },
        { text: "", delay: 1000, highlight: false },
        { text: "// 2. Make AI requests on their behalf", delay: 1200, highlight: false },
        { text: "const response = await consonant.chat({", delay: 1400, highlight: false },
        { text: "  userToken: session.token,", delay: 1600, highlight: false },
        { text: '  model: "gpt-4",', delay: 1800, highlight: false },
        { text: "  messages: [...]", delay: 2000, highlight: false },
        { text: "});", delay: 2200, highlight: false },
        { text: "", delay: 2400, highlight: false },
        { text: "// ✓ User's account billed automatically", delay: 2600, highlight: true },
      ]
    },
    // Unified billing showcase
    {
      lines: [
        { text: "// Users see one unified bill", delay: 0, highlight: false },
        { text: "// across all their AI apps", delay: 200, highlight: false },
        { text: "", delay: 400, highlight: false },
        { text: "// Your app in their dashboard:", delay: 600, highlight: true },
        { text: '// "WriteFlow" - $12.40 this month', delay: 800, highlight: true },
        { text: '// "CodeHelper" - $8.20 this month', delay: 1000, highlight: true },
        { text: '// "DataViz" - $15.60 this month', delay: 1200, highlight: true },
        { text: "", delay: 1400, highlight: false },
        { text: "// Total: $36.20", delay: 1600, highlight: true },
        { text: "// One payment, all apps", delay: 1800, highlight: true },
        { text: "", delay: 2000, highlight: false },
        { text: "// ✓ No scattered subscriptions", delay: 2200, highlight: true },
      ]
    },
    // Provider flexibility showcase
    {
      lines: [
        { text: "// Users choose their AI provider", delay: 0, highlight: false },
        { text: "// Your app works with any of them", delay: 200, highlight: false },
        { text: "", delay: 400, highlight: false },
        { text: "// User switches in Consonant dashboard:", delay: 600, highlight: true },
        { text: '// Provider: "OpenAI" → "Anthropic"', delay: 800, highlight: true },
        { text: "", delay: 1000, highlight: false },
        { text: "// Your code stays the same:", delay: 1200, highlight: false },
        { text: "const response = await consonant.chat({", delay: 1400, highlight: false },
        { text: "  userToken: session.token,", delay: 1600, highlight: false },
        { text: "  messages: [...]", delay: 1800, highlight: false },
        { text: "});", delay: 2000, highlight: false },
        { text: "", delay: 2200, highlight: false },
        { text: "// ✓ Automatically uses Anthropic now", delay: 2400, highlight: true },
      ]
    },
  ]

  const currentExample = codeExamples[activeCard]

  return (
    <div className="w-full h-full bg-[#1a1a2e] rounded-lg overflow-hidden flex flex-col">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-slate-400 text-xs font-mono ml-2">index.ts</span>
      </div>
      
      {/* Code content */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 overflow-hidden">
        <div className="space-y-1" key={activeCard}>
          {currentExample.lines.map((line, index) => (
            <AnimatedCodeLine 
              key={`${activeCard}-${index}`}
              text={line.text} 
              delay={line.delay}
              highlight={line.highlight}
            />
          ))}
        </div>
      </div>
      
      {/* Terminal footer with metrics */}
      <div className="px-4 py-3 bg-[#16162a] border-t border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-mono">connected</span>
          </div>
        </div>
        <div className="text-slate-500 text-xs font-mono">
          latency: <span className="text-slate-300">&lt;5ms</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 1.67 // ~1.67% every 100ms = 6 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
      <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-[#E0DEDB] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-[#49423D]">
              The unified AI access layer.
            </span>
          </div>
          
          {/* Main headline */}
          <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[72px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.1] lg:leading-[1.05] font-serif px-2 sm:px-4 md:px-0">
           The auth & billing layer 
            <br />
            <span className="relative">
             for AI apps.
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C47 2.5 153 2.5 199 5.5" stroke="#37322F" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>
          </div>
          
          {/* Subheadline */}
          <div className="w-full max-w-[540px] lg:w-[540px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.75)] sm:text-lg md:text-xl leading-[1.5] sm:leading-[1.55] md:leading-[1.6] font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
           Stop building custom billing and key management for every AI feature. Let your users bring their own providers or pay as they go. 
            <span className="text-[#37322F] font-semibold">
             Set your platform fee, and start monetizing immediately.
            {" "}
            </span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          {/* Primary CTA */}
          <a
            href="https://tally.so/r/eqaogJ"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-12 md:h-[52px] px-6 sm:px-8 md:px-10 py-2 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(0,0,0,0.15)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2a2523] transition-colors group"
          >
            <div className="w-full h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-transparent mix-blend-overlay"></div>
            <div className="flex items-center gap-2 text-white text-sm sm:text-base font-medium font-sans">
              <span>Join waitlist</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
          
          {/* Secondary CTA */}
          <Link
            href="/docs"
            className="h-11 sm:h-12 md:h-[52px] px-5 sm:px-6 md:px-8 py-2 bg-white border border-[#E0DEDB] shadow-sm rounded-full flex justify-center items-center cursor-pointer hover:bg-[#FAFAF9] transition-colors"
          >
            <div className="flex items-center gap-2 text-[#49423D] text-sm sm:text-base font-medium font-sans">
              <span>View docs</span>
            </div>
          </Link>
        </div>
        
        {/* Trust indicator */}
        <div className="flex items-center gap-2 text-[#7A746F] text-xs sm:text-sm font-sans">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>No credit card required • 5 minute setup</span>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <div className="w-[800px] sm:w-[1000px] md:w-[1200px] lg:w-[1400px] h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-radial from-[#37322F]/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Code showcase */}
      <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
        <div className="w-full max-w-[960px] lg:w-[960px] h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),0px_8px_40px_-12px_rgba(0,0,0,0.25)] overflow-hidden rounded-[10px] sm:rounded-[12px] lg:rounded-[16px]">
          <CodeShowcase activeCard={activeCard} />
        </div>
      </div>

      {/* Feature cards */}
      <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              ></div>
            ))}
          </div>
        </div>

        <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
          <FeatureCard
            title="Zero Key Management"
            description="Your app gets instant AI access without ever touching a user's sensitive API keys. We handle the vaulting, encryption, and rotation."
            isActive={activeCard === 0}
            progress={activeCard === 0 ? progress : 0}
            onClick={() => handleCardClick(0)}
          />
          <FeatureCard
            title="Programmable Revenue Models"
            description="Implement custom revenue models in minutes. Set your platform margins and handle usage-based billing across any provider without building complex payment infrastructure."
            isActive={activeCard === 1}
            progress={activeCard === 1 ? progress : 0}
            onClick={() => handleCardClick(1)}
          />
          <FeatureCard
            title="Universal Provider Routing"
            description="Write code once. Let users toggle between OpenAI, Anthropic, or local models via Ollama. No code changes required on your end."
            isActive={activeCard === 2}
            progress={activeCard === 2 ? progress : 0}
            onClick={() => handleCardClick(2)}
          />
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
