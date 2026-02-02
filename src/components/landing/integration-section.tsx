"use client"

import { useState } from "react"

// Code step component with animated reveal
function CodeStep({ 
  step, 
  title, 
  description, 
  code, 
  isActive,
  onClick 
}: { 
  step: number
  title: string
  description: string
  code: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div 
      className={`cursor-pointer transition-all duration-300 ${isActive ? 'scale-100' : 'scale-95 opacity-70'}`}
      onClick={onClick}
    >
      <div className={`p-4 rounded-xl border transition-all duration-300 ${isActive ? 'bg-white border-emerald-200 shadow-lg shadow-emerald-100' : 'bg-slate-50 border-slate-200'}`}>
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${isActive ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
            {step}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
            <p className="text-xs text-slate-500 mt-0.5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main code display
function CodeDisplay({ activeStep }: { activeStep: number }) {
  const codeExamples = [
    // Step 1: Install SDK
    `# Install the Consonant SDK
npm install @consonant/sdk

# That's it. One package, everything included.`,
    // Step 2: Initialize
    `import { Consonant } from '@consonant/sdk'

// Initialize with your app ID
const consonant = new Consonant({
  appId: 'your-app-id',
  // Get this from consonant.dev/dashboard
})`,
    // Step 3: Connect user
    `// When user wants to use AI features
const handleConnect = async () => {
  const session = await consonant.connect()
  
  // User is now connected!
  // They authenticated with their Consonant account
  console.log('Connected:', session.user.email)
}`,
    // Step 4: Make requests
    `// Make AI requests on behalf of the user
const response = await consonant.chat({
  model: 'gpt-4', // or 'claude-3', 'gemini-pro', etc.
  messages: [
    { role: 'user', content: userMessage }
  ]
})

// That's it. Consonant handles:
// ✓ Routing to user's preferred provider
// ✓ Billing to user's account
// ✓ Security and rate limiting
// ✓ Failover if provider is down`
  ]

  return (
    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-2xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-slate-400 text-xs font-mono ml-2">
          {activeStep === 0 ? 'terminal' : 'index.ts'}
        </span>
      </div>
      
      {/* Code content */}
      <div className="p-6 min-h-[300px]">
        <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap">
          {codeExamples[activeStep]}
        </pre>
      </div>
      
      {/* Footer */}
      <div className="px-4 py-3 bg-[#16162a] border-t border-slate-700/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-mono">ready</span>
        </div>
        <span className="text-slate-500 text-xs font-mono">step {activeStep + 1} of 4</span>
      </div>
    </div>
  )
}

// Pricing model cards
function PricingModels() {
  const models = [
    {
      name: "Subscription",
      description: "Include AI in your subscription price",
      example: "$20/mo includes AI features",
      icon: "📦"
    },
    {
      name: "Per-Request",
      description: "Charge users based on usage",
      example: "$0.01 per AI request",
      icon: "⚡"
    },
    {
      name: "Freemium",
      description: "Free tier + paid upgrades",
      example: "100 free requests, then $5/mo",
      icon: "🎁"
    },
    {
      name: "Revenue Share",
      description: "Earn from AI usage",
      example: "Set your % on AI spend",
      icon: "💰"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-6">
      <h4 className="text-lg font-semibold text-slate-800 mb-4">Choose your pricing model</h4>
      <div className="grid grid-cols-2 gap-3">
        {models.map((model) => (
          <div key={model.name} className="bg-white rounded-xl border border-slate-100 p-4 hover:border-emerald-200 transition-colors cursor-pointer">
            <span className="text-2xl">{model.icon}</span>
            <h5 className="text-sm font-semibold text-slate-800 mt-2">{model.name}</h5>
            <p className="text-xs text-slate-500 mt-1">{model.description}</p>
            <p className="text-xs text-emerald-600 font-medium mt-2">{model.example}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 text-center mt-4">
        Consonant is just infrastructure—your pricing is up to you.
      </p>
    </div>
  )
}

export default function IntegrationSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Install the SDK",
      description: "One npm package, everything included"
    },
    {
      title: "Initialize",
      description: "Configure with your app ID"
    },
    {
      title: "Connect users",
      description: "One-click Consonant authentication"
    },
    {
      title: "Make AI requests",
      description: "Consonant handles the rest"
    }
  ]

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Integration</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            Integration takes about <span className="text-blue-600">two hours</span>.
            <br />
            Here's the complete flow.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Add the SDK, implement the connection flow, and make AI requests.
            That's it. Consonant handles billing, security, provider routing—everything.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <CodeStep
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                code=""
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
            
            {/* Pricing models at bottom */}
            <div className="pt-6">
              <PricingModels />
            </div>
          </div>
          
          {/* Right: Code display */}
          <div className="lg:sticky lg:top-8">
            <CodeDisplay activeStep={activeStep} />
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800 text-white rounded-2xl px-8 py-6">
            <div className="text-left">
              <p className="text-lg font-semibold">Ready to integrate?</p>
              <p className="text-slate-400 text-sm">Most developers ship in an afternoon.</p>
            </div>
            <a
              href="https://tally.so/r/eqaogJ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started →
            </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}
