"use client"

import { Badge } from "@/components/ui/badge-custom"
import { useState, useEffect } from "react"

// Animated journey step component
function JourneyStep({ 
  step, 
  text, 
  subtext,
  isActive, 
  isCompleted,
  delay
}: { 
  step: number
  text: string
  subtext?: string
  isActive: boolean
  isCompleted: boolean
  delay: number
}) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return (
    <div className={`flex items-start gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${isActive ? 'scale-100' : isCompleted ? 'opacity-60' : 'opacity-40 scale-95'}`}>
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold transition-all duration-300 ${
        isCompleted ? 'bg-emerald-500 text-white' : 
        isActive ? 'bg-indigo-500 text-white ring-2 ring-indigo-200' : 
        'bg-slate-100 text-slate-400'
      }`}>
        {isCompleted ? (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          step
        )}
      </div>
      <div className="pt-0.5">
        <p className={`text-[13px] font-medium ${isActive || isCompleted ? 'text-[#37322F]' : 'text-slate-400'}`}>{text}</p>
        {subtext && <p className="text-[11px] text-slate-400 mt-0.5">{subtext}</p>}
      </div>
    </div>
  )
}

// Path A: Already has Consonant
function ExistingUserJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 5) return 0
        return prev + 1
      })
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    { text: "User clicks AI feature in your app" },
    { text: 'Sees "Connect with Consonant"' },
    { text: "Recognizes familiar login", subtext: "Same as other apps they use" },
    { text: '"Oh, I already have this!"' },
    { text: "One click to approve", subtext: "3 seconds total" },
    { text: "Using your app!", subtext: "No payment. No config. Just works." },
  ]

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl p-6 flex flex-col border border-slate-200 shadow-inner">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#37322F] text-[12px] font-bold uppercase tracking-wider">Already has Consonant</span>
        </div>
        <div className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full text-[9px] font-bold text-emerald-600 uppercase">3 Seconds</div>
      </div>
      
      <div className="flex-1 space-y-3">
        {steps.map((step, i) => (
          <JourneyStep
            key={i}
            step={i + 1}
            text={step.text}
            subtext={step.subtext}
            isActive={currentStep === i}
            isCompleted={currentStep > i}
            delay={i * 100}
          />
        ))}
      </div>
    </div>
  )
}

// Path B: New to Consonant
function NewUserJourney() {
  const [currentStep, setCurrentStep] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 4) return 0
        return prev + 1
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    { text: 'Sees "Connect with Consonant"' },
    { text: "Creates Consonant account", subtext: "Email + password" },
    { text: "Chooses how to access AI", subtext: "Card, bring own key, or local" },
    { text: "Connected to your app", subtext: "And all future apps too!" },
    { text: "Using your features!", subtext: "One account, everywhere" },
  ]

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-xl p-6 flex flex-col border border-slate-200 shadow-inner">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-[#37322F] text-[12px] font-bold uppercase tracking-wider">New to Consonant</span>
        </div>
        <div className="px-2 py-0.5 bg-indigo-50 border border-indigo-100 rounded-full text-[9px] font-bold text-indigo-600 uppercase">One Time</div>
      </div>
      
      <div className="flex-1 space-y-3">
        {steps.map((step, i) => (
          <JourneyStep
            key={i}
            step={i + 1}
            text={step.text}
            subtext={step.subtext}
            isActive={currentStep === i}
            isCompleted={currentStep > i}
            delay={i * 100}
          />
        ))}
      </div>
    </div>
  )
}

// Cross-app network effect visualization
function NetworkEffect() {
  const [week, setWeek] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWeek(prev => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  const apps = [
    { name: 'WriteFlow', icon: 'W', connected: true },
    { name: 'CodeHelper', icon: 'C', connected: week >= 1 },
    { name: 'Your App', icon: 'Y', connected: week >= 2, highlight: true },
  ]

  return (
    <div className="w-full h-full bg-white rounded-xl border border-slate-200 p-6 flex flex-col shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-[#37322F] text-[13px] font-bold">The Network Effect</span>
        <div className="px-2 py-1 bg-slate-50 rounded-lg border border-slate-100 text-[10px] text-slate-500 font-bold">
          Week {week + 1}
        </div>
      </div>
      
      {/* Central Consonant icon */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#37322F] flex items-center justify-center shadow-lg">
          <span className="text-white text-lg font-bold">C</span>
        </div>
        
        {/* Connected apps */}
        <div className="flex items-center gap-3">
          {apps.map((app, i) => (
            <div key={i} className={`flex flex-col items-center gap-1.5 transition-all duration-500 ${app.connected ? 'opacity-100 scale-100' : 'opacity-30 scale-90'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[12px] font-bold border transition-all ${
                app.highlight && app.connected
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-600 ring-2 ring-emerald-100'
                  : app.connected 
                    ? 'bg-indigo-50 border-indigo-100 text-indigo-600' 
                    : 'bg-slate-50 border-slate-100 text-slate-400'
              }`}>
                {app.icon}
              </div>
              <span className="text-[9px] font-medium text-slate-500">{app.name}</span>
              {app.connected && (
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-emerald-400" />
                  <span className="text-[8px] text-emerald-600 font-bold">Connected</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="pt-4 border-t border-slate-100 text-center">
        <p className="text-[11px] text-slate-500">
          {week === 0 && "User creates account in WriteFlow"}
          {week === 1 && "Week later: discovers CodeHelper → 3 sec login"}
          {week === 2 && "Your App: same login → instant access"}
        </p>
      </div>
    </div>
  )
}

export default function UserExperienceSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] mx-auto py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="6" r="4" stroke="#37322F" strokeWidth="1" fill="none" />
                <circle cx="6" cy="6" r="1.5" fill="#37322F" />
              </svg>
            }
            text="User experience"
          />
          <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            What users see when they use your app
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Two paths, both friction-free. Existing Consonant users connect in 3 seconds.
            <br className="hidden sm:block" />
            New users create one account that works everywhere.
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {/* Path A: Existing User */}
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                Already Has Consonant
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                User connected to Consonant from another app. One click and they're using your AI features.
              </p>
            </div>
            <div className="w-full h-[280px] sm:h-[320px] md:h-[340px] rounded-lg overflow-hidden">
              <ExistingUserJourney />
            </div>
          </div>

          {/* Path B: New User */}
          <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                New to Consonant
              </h3>
              <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                First-time user creates an account once. Works across all Consonant apps forever.
              </p>
            </div>
            <div className="w-full h-[280px] sm:h-[320px] md:h-[340px] rounded-lg overflow-hidden">
              <NewUserJourney />
            </div>
          </div>
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Network Effect Section */}
      <div className="self-stretch border-t border-[rgba(55,50,47,0.12)] flex justify-center items-stretch">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-l border-r border-[rgba(55,50,47,0.12)]">
          <div className="border-b md:border-b-0 border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start gap-4">
            <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
              The Power of Network Effects
            </h3>
            <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
              Week later, user discovers ANOTHER Consonant app. Same login → 3 seconds → Working.
              No new payment setup. One bill at month end.
            </p>
            <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
              <span className="text-[#37322F] font-semibold">This is why early integrators benefit most.</span> Every new Consonant app increases the value of all existing integrations.
            </p>
          </div>
          
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-start items-start gap-4 sm:gap-5">
            <div className="w-full h-[220px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden">
              <NetworkEffect />
            </div>
          </div>
        </div>
        
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
      </div>
    </div>
  )
}
