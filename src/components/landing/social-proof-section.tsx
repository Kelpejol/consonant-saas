"use client"

import { useEffect, useState, useRef } from "react"

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
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
            </svg>
            <span className="text-sm font-medium hidden sm:inline">OpenAI</span>
          </div>
          
          {/* Anthropic */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.304 3.541l-5.304 16.918-5.304-16.918h-3.696l7.5 20.459h3l7.5-20.459h-3.696z"/>
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Anthropic</span>
          </div>
          
          {/* Google */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Google</span>
          </div>
          
          {/* Groq */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Groq</span>
          </div>
          
          {/* Mistral */}
          <div className="flex items-center gap-2 text-[#49423D]/60 hover:text-[#49423D] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="4" height="4"/>
              <rect x="10" y="4" width="4" height="4"/>
              <rect x="16" y="4" width="4" height="4"/>
              <rect x="4" y="10" width="4" height="4"/>
              <rect x="16" y="10" width="4" height="4"/>
              <rect x="4" y="16" width="4" height="4"/>
              <rect x="10" y="16" width="4" height="4"/>
              <rect x="16" y="16" width="4" height="4"/>
            </svg>
            <span className="text-sm font-medium hidden sm:inline">Mistral</span>
          </div>
        </div>
      </div>
    </div>
  )
}
