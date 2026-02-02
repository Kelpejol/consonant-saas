"use client"

import { useState, useEffect } from "react"

// Animated network visualization showing Consonant connecting multiple apps
function NetworkVisualization() {
  const [activeConnection, setActiveConnection] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection(prev => (prev + 1) % 5)
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  
  const apps = [
    { name: "WriteFlow", icon: "✏️", x: 0, y: 0 },
    { name: "CodeHelper", icon: "💻", x: 1, y: 0 },
    { name: "DataViz", icon: "📊", x: 2, y: 0 },
    { name: "ResearchAI", icon: "🔬", x: 0.5, y: 1 },
    { name: "Your App", icon: "✨", x: 1.5, y: 1. },
  ]
  
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Central Consonant Hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          {/* Pulse rings */}
          <div className="absolute inset-0 -m-8 rounded-full bg-emerald-500/10 animate-ping" />
          <div className="absolute inset-0 -m-4 rounded-full bg-emerald-500/20 animate-pulse" />
          
          {/* Main hub */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-white shadow-2xl flex flex-col items-center justify-center">
            <span className="text-white text-2xl md:text-3xl font-bold">C</span>
            <span className="text-emerald-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">Consonant</span>
          </div>
        </div>
      </div>
      
      {/* App nodes */}
      {apps.map((app, index) => {
        const angle = (index / apps.length) * Math.PI * 2 - Math.PI / 2
        const radius = 140
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const isActive = activeConnection === index
        
        return (
          <div
            key={app.name}
            className={`absolute left-1/2 top-1/2 transition-all duration-500 z-10 ${isActive ? 'scale-110' : 'scale-100'}`}
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            {/* Connection line */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="300"
              height="300"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <line
                x1="150"
                y1="150"
                x2={150 - x}
                y2={150 - y}
                stroke={isActive ? "#10B981" : "#E2E8F0"}
                strokeWidth={isActive ? 3 : 2}
                strokeDasharray={isActive ? "none" : "5,5"}
                className="transition-all duration-300"
              />
            </svg>
            
            {/* App card */}
            <div className={`bg-white rounded-xl border-2 p-3 md:p-4 shadow-lg transition-all duration-300 ${isActive ? 'border-emerald-400 shadow-emerald-100' : 'border-slate-200'}`}>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-xl md:text-2xl">{app.icon}</span>
                <div>
                  <div className={`text-xs md:text-sm font-semibold ${app.name === "Your App" ? 'text-emerald-600' : 'text-slate-800'}`}>
                    {app.name}
                  </div>
                  {isActive && (
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-emerald-600">Connected</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
      
      {/* User at bottom */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 z-30">
        <div className="bg-slate-800 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            U
          </div>
          <span className="text-sm font-medium">One Account • All Apps</span>
        </div>
      </div>
    </div>
  )
}

// The "aha moment" user story
function UserStory() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          J
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-sm font-semibold text-slate-800">Jamie • Designer</div>
            <div className="text-xs text-slate-500">Already pays $30/mo for AI across 3 apps</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-emerald-600">1</div>
              <p className="text-sm text-slate-700">Discovers <strong>your app</strong> and wants to try AI features</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-emerald-600">2</div>
              <p className="text-sm text-slate-700">Sees "Connect with Consonant" instead of a payment form</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-sm text-slate-700 italic">"Oh, I already have Consonant from WriteFlow!"</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-slate-700"><strong>One click later:</strong> Using your features. No new payment. No friction.</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-emerald-200">
            <p className="text-sm text-emerald-700 font-medium">
              You just converted a user who would have bounced.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">The Solution</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            Consonant is <span className="text-emerald-600">universal AI access</span>
            <br />
            that works across apps.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            When you integrate Consonant, users can connect their existing account instead of setting up payment with you.
            If they already use Consonant in <strong>any other app</strong>—a writing tool, a coding assistant, anything—they click one button and start using your features immediately.
          </p>
        </div>
        
        {/* Network visualization */}
        <div className="mb-16">
          <NetworkVisualization />
        </div>
        
        {/* Key benefits row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No payment setup</h3>
            <p className="text-sm text-slate-600">Users don't enter card details. They use their existing Consonant account.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No API keys</h3>
            <p className="text-sm text-slate-600">You never see or store user credentials. Consonant handles security.</p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No friction</h3>
            <p className="text-sm text-slate-600">One click to connect. Three seconds to start using AI in your app.</p>
          </div>
        </div>
        
        {/* User story */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-6">
            See how this changes the user experience:
          </h3>
          <UserStory />
        </div>
        
        {/* Developer value prop */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800 text-white rounded-2xl px-8 py-6">
            <p className="text-lg">
              For you as a developer, this means you get access to
              <br />
              <strong className="text-emerald-400">everyone who is already paying for AI in other apps.</strong>
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Your addressable market just grew significantly.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}
