"use client"

import { useState, useEffect } from "react"

// Subscription card for the fragmented user visual
function SubscriptionCard({ 
  name, 
  price, 
  icon, 
  delay 
}: { 
  name: string
  price: string
  icon: React.ReactNode
  delay: number 
}) {
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return (
    <div className={`bg-white rounded-xl border border-slate-200 p-4 shadow-sm transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-800">{name}</div>
          <div className="text-xs text-slate-500">{price}/mo</div>
        </div>
      </div>
    </div>
  )
}

// The payment wall that causes users to leave
function PaymentWall() {
  const [showThought, setShowThought] = useState(false)
  const [showLeave, setShowLeave] = useState(false)
  
  useEffect(() => {
    const thoughtTimer = setTimeout(() => setShowThought(true), 2000)
    const leaveTimer = setTimeout(() => setShowLeave(true), 3500)
    return () => {
      clearTimeout(thoughtTimer)
      clearTimeout(leaveTimer)
    }
  }, [])
  
  return (
    <div className="relative">
      {/* The payment modal */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">Y</span>
              </div>
              <span className="font-semibold text-slate-800">YourApp</span>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800">Set up payment to use AI features</h3>
            <p className="text-sm text-slate-500 mt-1">Enter your card details to continue</p>
          </div>
          
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600">Card number</label>
              <div className="h-10 bg-slate-50 rounded-lg border border-slate-200 px-3 flex items-center">
                <span className="text-slate-300 text-sm">4242 4242 4242 4242</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">Expiry</label>
                <div className="h-10 bg-slate-50 rounded-lg border border-slate-200 px-3 flex items-center">
                  <span className="text-slate-300 text-sm">MM / YY</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">CVC</label>
                <div className="h-10 bg-slate-50 rounded-lg border border-slate-200 px-3 flex items-center">
                  <span className="text-slate-300 text-sm">123</span>
                </div>
              </div>
            </div>
          </div>
          
          <button className="w-full h-11 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors">
            Subscribe — $20/month
          </button>
        </div>
      </div>
      
      {/* User thought bubble */}
      <div className={`absolute -right-4 -top-16 transition-all duration-500 ${showThought ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="relative bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg">
          "Really? <span className="text-amber-300">Another</span> AI subscription?"
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-slate-800 rotate-45" />
        </div>
      </div>
      
      {/* Leave indicator */}
      <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 transition-all duration-500 ${showLeave ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2">
          <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-semibold text-red-600">User leaves</span>
        </div>
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-t border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full mb-6">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">The Problem</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            Your biggest problem is <span className="text-amber-600">not</span> building AI features.
            <br />
            <span className="text-slate-500">It's getting users to actually use them.</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            You can integrate OpenAI or Anthropic in a day. That part is easy. 
            The hard part is what happens when a user tries your AI features for the first time.
          </p>
        </div>
        
        {/* Main visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: The fragmented user */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-800">
              Your users are already paying for AI everywhere
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              <SubscriptionCard 
                name="ChatGPT Plus" 
                price="$20" 
                delay={0}
                icon={<svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.516 2.9 5.985 5.985 0 0 0 4.275-2.168 6.046 6.046 0 0 0 3.994-2.9 5.985 5.985 0 0 0-.739-7.099z"/></svg>}
              />
              <SubscriptionCard 
                name="Claude Pro" 
                price="$20" 
                delay={200}
                icon={<svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>}
              />
              <SubscriptionCard 
                name="Cursor Pro" 
                price="$20" 
                delay={400}
                icon={<svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>}
              />
              <SubscriptionCard 
                name="Midjourney" 
                price="$10" 
                delay={600}
                icon={<svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,2 22,22 2,22"/></svg>}
              />
            </div>
            
            <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Their monthly AI spending:</span>
                <span className="text-xl font-bold text-slate-800">$70/month</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">4 subscriptions • 4 bills • 4 accounts to manage</div>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <p className="text-slate-600 leading-relaxed">
                When they discover <strong>your app</strong> and see yet another payment screen, 
                they're exhausted. They're not opposed to AI—they just can't manage another subscription.
              </p>
            </div>
          </div>
          
          {/* Right: The payment wall */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <PaymentWall />
            </div>
          </div>
        </div>
        
        {/* Bottom stat */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-red-50 border border-red-100 rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold text-red-500">60%</div>
            <div className="text-left">
              <div className="text-lg font-semibold text-slate-800">of users leave</div>
              <div className="text-sm text-slate-500">when they see another payment form</div>
            </div>
          </div>
        </div>
        
        {/* Transition to solution */}
        <div className="mt-16 text-center">
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The problem isn't that they don't want AI.
            <br />
            <strong className="text-slate-800">It's that they don't want another payment relationship.</strong>
          </p>
          <div className="mt-6 flex justify-center">
            <svg className="w-8 h-8 text-slate-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
      </div>
    </section>
  )
}
