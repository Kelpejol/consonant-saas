"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full mb-6">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">Why Now</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            AI is becoming fragmented.
            <br />
            <span className="text-emerald-400">Consonant fixes that.</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            AI is going through the same fragmentation that payments went through before Stripe.
            Every app building their own infrastructure. Every user managing multiple subscriptions.
            The window is open for a standard to emerge.
          </p>
        </div>
        
        {/* Network effect visualization */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Early</div>
              <div className="text-slate-400 text-sm">Integrators benefit most</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">Network</div>
              <div className="text-slate-400 text-sm">Effects compound</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Standard</div>
              <div className="text-slate-400 text-sm">Becomes expected</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-slate-400 text-sm text-center">
              Every new Consonant app increases the value of all existing integrations.
              <br />
              <strong className="text-white">The earlier you integrate, the more you benefit.</strong>
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <p className="text-white text-lg mb-6">
            If you're building an app with AI features, integrate Consonant.
            <br />
            <span className="text-slate-400">It takes two hours. Increases conversion. Gives you network effects.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="https://tally.so/r/eqaogJ"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-14 px-8 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center gap-3 transition-all duration-200 shadow-lg shadow-emerald-500/30"
            >
              <span className="text-white font-semibold">Start Integration</span>
              <svg className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            {/* Secondary CTA */}
            <Link
              href="/docs"
              className="h-14 px-8 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center gap-2 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-white font-semibold">Read the Docs</span>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>2-hour integration</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free tier forever</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
