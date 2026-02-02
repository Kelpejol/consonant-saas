"use client"

import { useState, useEffect } from "react"

// Animated flow step
function FlowStep({ 
  step, 
  text, 
  subtext, 
  isActive, 
  isCompleted,
  highlight 
}: { 
  step: number
  text: string
  subtext?: string
  isActive: boolean
  isCompleted: boolean
  highlight?: boolean
}) {
  return (
    <div className={`flex items-start gap-3 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : isCompleted ? 'opacity-60' : 'opacity-30 scale-95'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        isCompleted ? 'bg-emerald-500 text-white' : 
        isActive ? 'bg-emerald-100 text-emerald-600 ring-2 ring-emerald-300' : 
        'bg-slate-100 text-slate-400'
      }`}>
        {isCompleted ? (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <span className="text-sm font-semibold">{step}</span>
        )}
      </div>
      <div className={`pt-1 ${highlight ? 'bg-emerald-50 -mx-2 px-2 py-1 rounded-lg' : ''}`}>
        <p className={`text-sm ${isActive || isCompleted ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{text}</p>
        {subtext && <p className="text-xs text-slate-500 mt-0.5">{subtext}</p>}
      </div>
    </div>
  )
}

// Journey path component
function JourneyPath({ title, subtitle, steps, color }: { 
  title: string
  subtitle: string
  steps: { text: string; subtext?: string; highlight?: boolean }[]
  color: 'emerald' | 'blue'
}) {
  const [currentStep, setCurrentStep] = useState(-1)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length) {
          return -1
        }
        return prev + 1
      })
    }, 1500)
    return () => clearInterval(interval)
  }, [steps.length])

  const bgColor = color === 'emerald' ? 'from-emerald-50 to-teal-50' : 'from-blue-50 to-indigo-50'
  const borderColor = color === 'emerald' ? 'border-emerald-200' : 'border-blue-200'
  const headerBg = color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'

  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-2xl border ${borderColor} overflow-hidden`}>
      {/* Header */}
      <div className={`${headerBg} px-6 py-4`}>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
      
      {/* Steps */}
      <div className="p-6 space-y-4">
        {steps.map((step, index) => (
          <FlowStep
            key={index}
            step={index + 1}
            text={step.text}
            subtext={step.subtext}
            isActive={currentStep === index}
            isCompleted={currentStep > index}
            highlight={step.highlight}
          />
        ))}
      </div>
      
      {/* Result */}
      <div className={`px-6 py-4 border-t ${borderColor}`}>
        <div className={`flex items-center gap-2 transition-all duration-500 ${currentStep >= steps.length - 1 ? 'opacity-100' : 'opacity-30'}`}>
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-emerald-700">Using your app!</span>
          <span className="text-xs text-slate-500">• No friction</span>
        </div>
      </div>
    </div>
  )
}

// Cross-app usage visualization
function CrossAppUsage() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-slate-800 mb-4">One Consonant account, unified billing</h4>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="text-xl">✏️</span>
            <div>
              <div className="text-sm font-medium text-slate-800">WriteFlow</div>
              <div className="text-xs text-slate-500">Writing assistant</div>
            </div>
          </div>
          <span className="text-sm font-semibold text-slate-700">$12.40</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="text-xl">💻</span>
            <div>
              <div className="text-sm font-medium text-slate-800">CodeHelper</div>
              <div className="text-xs text-slate-500">Coding assistant</div>
            </div>
          </div>
          <span className="text-sm font-semibold text-slate-700">$8.20</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-3">
            <span className="text-xl">✨</span>
            <div>
              <div className="text-sm font-medium text-emerald-700">Your App</div>
              <div className="text-xs text-emerald-600">Just connected!</div>
            </div>
          </div>
          <span className="text-sm font-semibold text-emerald-700">$0.00</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
        <span className="text-sm text-slate-600">Total this month:</span>
        <span className="text-xl font-bold text-slate-800">$20.60</span>
      </div>
      
      <p className="text-xs text-slate-500 text-center mt-4">
        One bill. One dashboard. Clear spending across all apps.
      </p>
    </div>
  )
}

export default function UserExperienceSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 rounded-full mb-6">
            <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">User Experience</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            What users see when
            <br />
            they use <span className="text-purple-600">your app</span>.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Two paths, both friction-free. Users who already have Consonant connect in seconds.
            New users create an account once and use it everywhere.
          </p>
        </div>
        
        {/* Two paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <JourneyPath
            title="Already has Consonant"
            subtitle="From another app"
            color="emerald"
            steps={[
              { text: "User clicks 'Connect with Consonant'" },
              { text: "Sees familiar login screen", subtext: "Same as other apps they use" },
              { text: '"Oh, I already have this!"', highlight: true },
              { text: "One click to approve", subtext: "3 seconds total" },
            ]}
          />
          
          <JourneyPath
            title="New to Consonant"
            subtitle="First time user"
            color="blue"
            steps={[
              { text: "User clicks 'Connect with Consonant'" },
              { text: "Creates Consonant account", subtext: "Email + password" },
              { text: "Chooses how to access AI", subtext: "Card, existing API key, or local" },
              { text: "Connected to your app", subtext: "And all future apps too!" },
            ]}
          />
        </div>
        
        {/* The power: week later */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">The Network Effect</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Week later: user discovers <span className="text-emerald-400">another</span> Consonant app
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Same login → 3 seconds → Working.
                <br />
                No new payment setup. No friction.
                <br />
                <strong className="text-white">One bill at month end.</strong>
              </p>
              
              <p className="text-slate-400 text-sm">
                This is why early integrators benefit most. Every new Consonant app increases the value of all existing integrations.
              </p>
            </div>
            
            <CrossAppUsage />
          </div>
        </div>
        
      </div>
    </section>
  )
}
