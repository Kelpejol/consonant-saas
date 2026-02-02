"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

// Side-by-side journey comparison visual
function JourneyComparison() {
  const [step, setStep] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 6)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* WITHOUT CONSONANT */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-white/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-sm font-semibold text-slate-700">Without Consonant</span>
          </div>
        </div>
        
        {/* Journey Steps */}
        <div className="p-6 space-y-4">
          {/* Step 1 */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-sm font-medium text-slate-600">1</div>
            <div>
              <div className="text-sm font-medium text-slate-800">User discovers your app</div>
              <div className="text-xs text-slate-500">Excited to try the new AI features</div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-sm font-medium text-slate-600">2</div>
            <div>
              <div className="text-sm font-medium text-slate-800">Wants to use AI features</div>
              <div className="text-xs text-slate-500">Clicks on AI-powered functionality</div>
            </div>
          </div>
          
          {/* Step 3 - The Wall */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-800">"Set up payment to continue"</div>
              <div className="mt-2 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-2">Enter your card details</div>
                <div className="h-6 bg-slate-100 rounded w-full mb-2" />
                <div className="h-6 bg-slate-100 rounded w-2/3" />
              </div>
            </div>
          </div>
          
          {/* Step 4 - The Thought */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-3 bg-slate-800 rounded-lg text-white text-sm italic">
              "Really? Another AI subscription?"
            </div>
          </div>
          
          {/* Step 5 - The Result */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-red-600">60% leave</div>
              <div className="text-xs text-slate-500">Lost before they even tried your features</div>
            </div>
          </div>
        </div>
        
        {/* Footer stat */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-50 to-transparent p-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">40%</div>
            <div className="text-xs text-slate-500">conversion rate</div>
          </div>
        </div>
      </div>
      
      {/* WITH CONSONANT */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-emerald-200 bg-white/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-700">With Consonant</span>
          </div>
        </div>
        
        {/* Journey Steps */}
        <div className="p-6 space-y-4">
          {/* Step 1 */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-emerald-600">1</div>
            <div>
              <div className="text-sm font-medium text-slate-800">User discovers your app</div>
              <div className="text-xs text-slate-500">Excited to try the new AI features</div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-emerald-600">2</div>
            <div>
              <div className="text-sm font-medium text-slate-800">Wants to use AI features</div>
              <div className="text-xs text-slate-500">Clicks on AI-powered functionality</div>
            </div>
          </div>
          
          {/* Step 3 - The Connect */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-emerald-600">3</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-800">"Connect with Consonant"</div>
              <div className="mt-2 p-3 bg-white rounded-lg border border-emerald-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Continue with Consonant</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 - Recognition */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="p-3 bg-emerald-600 rounded-lg text-white text-sm italic">
              "Oh, I already have Consonant!"
            </div>
          </div>
          
          {/* Step 5 - One Click */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-emerald-600">4</div>
            <div>
              <div className="text-sm font-medium text-slate-800">One click → Approve</div>
              <div className="text-xs text-slate-500">Already set up from another app</div>
            </div>
          </div>
          
          {/* Step 6 - Success */}
          <div className={`flex items-start gap-3 transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-30'}`}>
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-emerald-600">Using your app!</div>
              <div className="text-xs text-slate-500">3 seconds. No payment. No friction.</div>
            </div>
          </div>
        </div>
        
        {/* Footer stat */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-100 to-transparent p-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-500">85%</div>
            <div className="text-xs text-slate-500">conversion rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 flex flex-col justify-start items-center px-4 md:px-8 lg:px-0 w-full">
      <div className="w-full max-w-[1100px] flex flex-col justify-center items-center gap-8 md:gap-12">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-[#E0DEDB] shadow-sm">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-70" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-40" />
          </div>
          <span className="text-xs font-semibold text-[#49423D] uppercase tracking-wide">
            For Platform Developers
          </span>
        </div>
        
        {/* Main headline */}
        <div className="w-full max-w-[900px] text-center">
          <h1 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight font-serif">
            Users already paying for AI
            <br />
            <span className="relative inline-block">
              will try your app
              <span className="text-emerald-600"> instantly</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C80 3 220 3 298 8" stroke="#10B981" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
          </h1>
        </div>
        
        {/* Subheadline */}
        <div className="w-full max-w-[700px] text-center">
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Integrate Consonant and tap into users who are already spending money on AI in other apps.
            They connect their existing account in one click—<span className="font-semibold text-slate-800">no payment setup, no friction</span>, they're using your features immediately.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary CTA */}
          <a
            href="https://tally.so/r/eqaogJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-14 px-8 bg-[#37322F] rounded-full flex items-center gap-3 cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
            <span className="relative text-white font-semibold">Start Integration</span>
            <span className="relative text-white/70 text-sm">(2 hours)</span>
            <svg className="relative w-5 h-5 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          {/* Secondary CTA */}
          <Link
            href="#how-it-works"
            className="h-14 px-8 bg-white border border-slate-200 rounded-full flex items-center gap-2 cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
          >
            <span className="text-slate-700 font-semibold">See How It Works</span>
            <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
        
        {/* Trust indicator */}
        <div className="flex items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Free tier available</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Ship in an afternoon</span>
          </div>
        </div>
        
        {/* Journey Comparison Visual */}
        <div className="w-full mt-8 md:mt-12">
          <JourneyComparison />
        </div>
        
      </div>
    </div>
  )
}
