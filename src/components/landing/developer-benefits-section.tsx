"use client"

import { Badge } from "@/components/ui/badge-custom"

// Benefit card component matching existing style
function BenefitCard({ 
  icon, 
  title, 
  description, 
  metric, 
  metricLabel,
  highlight 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  metric: string
  metricLabel: string
  highlight?: boolean
}) {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
      highlight 
        ? 'bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] border-indigo-200 shadow-sm' 
        : 'bg-white border-slate-200'
    }`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
        highlight ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-600'
      }`}>
        {icon}
      </div>
      
      <h3 className="text-[#37322F] text-base font-semibold mb-2">{title}</h3>
      <p className="text-[#605A57] text-[13px] leading-relaxed mb-4">{description}</p>
      
      <div className={`pt-4 border-t ${highlight ? 'border-indigo-100' : 'border-slate-100'}`}>
        <div className={`text-xl font-bold ${highlight ? 'text-indigo-600' : 'text-[#37322F]'}`}>{metric}</div>
        <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">{metricLabel}</div>
      </div>
    </div>
  )
}

export default function DeveloperBenefitsSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] mx-auto py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L6 2L10 4V8L6 10L2 8V4Z" stroke="#37322F" strokeWidth="1" fill="none" />
                <path d="M6 6V10" stroke="#37322F" strokeWidth="1" />
                <path d="M2 4L6 6L10 4" stroke="#37322F" strokeWidth="1" />
              </svg>
            }
            text="For developers"
          />
          <div className="w-full text-center flex justify-center flex-col text-[#49423D] text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Why developers choose Consonant
          </div>
         
        </div>
      </div>

      {/* Benefits grid */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />

        <div className="flex-1 border-l border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            
            <BenefitCard
              highlight={true}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              title="Maximize Conversion"
              description="Eliminate the payment barrier. Users bring their existing AI billing from other apps, letting them try your platform instantly without a credit card."
              metric="90%+"
              metricLabel="Signup-to-activation rate"
            />
            
            <BenefitCard
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Multi-provider support"
              description="One integration gives you OpenAI, Anthropic, Google, local models, and everything else."
              metric="0"
              metricLabel="Additional integrations"
            />
            
            <BenefitCard
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              title="Never store credentials"
              description="Users' API keys stay in Consonant's vault. You never see them. Zero security liability."
              metric="0"
              metricLabel="Keys to encrypt"
            />
            
            <BenefitCard
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Own your pricing"
              description="Charge subscriptions, per-request, hybrid models. Set your revenue share. Your call entirely."
              metric="100%"
              metricLabel="Pricing control"
            />
            
            <BenefitCard
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
              title="Support Non-Technical Users"
              description="Built-in managed billing means users without API keys can still use your app. Consonant handles the complexity, you just ship the features."
              metric="0"
              metricLabel="Logic for non-tech users"
            />
            
            <BenefitCard
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Infrastructure Control"
              description="Let advanced users or enterprise customers bring their own self-hosted or local LLMs through a unified interface."
              metric="Unlimited"
              metricLabel="Infrastructure options"
            />
            
          </div>
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch" />
      </div>
      
      {/* Comparison section */}
     
    </div>
  )
}
