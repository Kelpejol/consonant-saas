"use client"

// Benefit card component
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
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      highlight 
        ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200' 
        : 'bg-white border-slate-200'
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        highlight ? 'bg-emerald-500' : 'bg-slate-100'
      }`}>
        <div className={highlight ? 'text-white' : 'text-slate-700'}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      
      <div className={`pt-4 border-t ${highlight ? 'border-emerald-200' : 'border-slate-100'}`}>
        <div className={`text-2xl font-bold ${highlight ? 'text-emerald-600' : 'text-slate-800'}`}>{metric}</div>
        <div className="text-xs text-slate-500">{metricLabel}</div>
      </div>
    </div>
  )
}

export default function DeveloperBenefitsSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full mb-6">
            <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">For Developers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            Why developers choose Consonant
            <br />
            <span className="text-slate-500">instead of building their own infrastructure.</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Building AI authentication, billing, multi-provider support, and security from scratch takes months.
            Consonant gives you all of it in an afternoon.
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <BenefitCard
            highlight={true}
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
            title="Eliminate payment barrier"
            description="Users with Consonant connect in 3 seconds. No payment form. No credit card entry. No friction."
            metric="85%"
            metricLabel="conversion rate (vs 40-50% traditional)"
          />
          
          <BenefitCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            title="Multi-provider support"
            description="One integration gives you OpenAI, Anthropic, Google, local models, and everything else. Your code never changes."
            metric="0"
            metricLabel="additional integrations needed"
          />
          
          <BenefitCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            title="Never store credentials"
            description="Users' API keys stay in Consonant's encrypted vault. You never see them. Zero security liability for you."
            metric="0"
            metricLabel="keys to encrypt or manage"
          />
          
          <BenefitCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Own your pricing"
            description="Charge subscriptions, per-request, hybrid models. Set your revenue share. Consonant is infrastructure—pricing is yours."
            metric="100%"
            metricLabel="control over your business model"
          />
          
          <BenefitCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            }
            title="Built-in features"
            description="Failover between providers, spending limits, analytics, audit logs, rate limiting. All included, no extra work."
            metric="Weeks"
            metricLabel="of development time saved"
          />
          
          <BenefitCard
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            title="Impossible options"
            description="Local models, enterprise infrastructure, user provider choice. Features that would take months to build yourself."
            metric="Months"
            metricLabel="of development time saved"
          />
          
        </div>
        
        {/* Bottom comparison */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-8">
            Build it yourself vs. Use Consonant
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Build yourself */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Build it yourself</div>
              {[
                "Payment integration (2-4 weeks)",
                "API key storage & encryption (1-2 weeks)",
                "Multi-provider support (2-3 weeks per provider)",
                "Rate limiting & load balancing (1 week)",
                "Analytics dashboard (2-3 weeks)",
                "Security audit & compliance (ongoing)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-lg font-bold text-red-500">3-6 months</span>
                <span className="text-sm text-slate-500 ml-2">minimum</span>
              </div>
            </div>
            
            {/* Use Consonant */}
            <div className="space-y-3">
              <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4">Use Consonant</div>
              {[
                "Install SDK (5 minutes)",
                "Implement connection flow (1 hour)",
                "Make AI requests (30 minutes)",
                "Configure pricing model (15 minutes)",
                "Test & deploy (30 minutes)",
                "Everything else: included",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-emerald-100">
                <span className="text-lg font-bold text-emerald-500">~2 hours</span>
                <span className="text-sm text-slate-500 ml-2">total</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
