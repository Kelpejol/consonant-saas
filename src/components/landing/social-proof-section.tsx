"use client"

import { useEffect, useState, useRef } from "react"
import { OpenAILogo, AnthropicLogo, GoogleLogo, GroqLogo } from "./provider-logos"

interface MetricCardProps {
  value: string
  label: string
  suffix?: string
  prefix?: string
  animate?: boolean
}

function MetricCard({ value, label, suffix = "", prefix = "", animate = true }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(animate ? "0" : value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animate || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true)
          // Animate number counting up
          const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""))
          const duration = 1500
          const steps = 40
          const increment = numericValue / steps
          let current = 0
          
          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              // Format based on original value format
              if (value.includes(".")) {
                setDisplayValue(current.toFixed(1))
              } else {
                setDisplayValue(Math.floor(current).toString())
              }
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animate, value, hasAnimated])

  return (
    <div 
      ref={ref}
      className="flex-1 min-w-[140px] py-8 sm:py-10 md:py-12 px-4 flex flex-col items-center justify-center gap-2 border-r border-[rgba(55,50,47,0.08)] last:border-r-0"
    >
      <div className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-sans tracking-tight">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-[#7A746F] text-xs sm:text-sm font-medium font-sans text-center">
        {label}
      </div>
    </div>
  )
}

export function SocialProofSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Stats strip */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-wrap justify-center items-stretch border-l border-r border-[rgba(55,50,47,0.12)] bg-gradient-to-b from-white/50 to-transparent">
          <MetricCard 
            prefix="<" 
            value="5" 
            suffix="ms" 
            label="Balance check latency" 
          />
          <MetricCard 
            value="100" 
            suffix="%" 
            label="Overage prevention" 
          />
          <MetricCard 
            value="3" 
            label="Lines of code to integrate" 
          />
          <MetricCard 
            prefix="$" 
            value="0" 
            label="Lost to runaway requests" 
          />
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Provider logos */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 py-6 sm:py-8 border-t border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center gap-4">
        <div className="text-[#9A9490] text-xs sm:text-sm font-medium font-sans">
          Works with every major AI provider
        </div>


        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* OpenAI */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <OpenAILogo className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">OpenAI</span>
          </div>
          
          {/* Anthropic */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <AnthropicLogo className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Anthropic</span>
          </div>
          
          {/* Google */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <GoogleLogo className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Google</span>
          </div>
          
          {/* Groq */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <GroqLogo className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Groq</span>
          </div>
        </div>
      </div>
    </div>
  )
}
