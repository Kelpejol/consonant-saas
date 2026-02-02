"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center">
      {/* Content */}
      <div className="self-stretch px-6 md:px-24 py-16 md:py-24 bg-gradient-to-b from-[#F7F5F3] to-[#EBE8E5] flex justify-center items-center gap-6 relative z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(55,50,47,0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="w-full max-w-[680px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-8 relative z-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-[#E0DEDB] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-[#49423D]">
              Free tier available
            </span>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-center flex justify-center flex-col text-[#37322F] text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.1] font-sans tracking-tight">
              Give your users unified
              <br />
              AI access in 30 minutes
            </div>
            <div className="self-stretch text-center text-[#605A57] text-base md:text-lg leading-7 font-sans">
              Join 1000+ platforms using Consonant to add AI features.
              <br className="hidden md:block" />
              Set your revenue share and focus on building.
            </div>
          </div>

          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              {/* Primary CTA */}
              <a 
                href="https://tally.so/r/eqaogJ"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 py-2 relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset,0px_4px_12px_rgba(0,0,0,0.15)] overflow-hidden rounded-full flex justify-center items-center cursor-pointer hover:bg-[#2a2523] transition-colors group"
              >
                <div className="w-full h-[41px] absolute left-0 top-0 bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-transparent mix-blend-overlay"></div>
                <div className="flex items-center gap-2 text-white text-[15px] font-medium leading-5 font-sans">
                  <span>Join waitlist</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>

              {/* Secondary CTA */}
              <Link
                href="/docs"
                className="h-12 px-6 py-2 bg-white border border-[#E0DEDB] shadow-sm rounded-full flex justify-center items-center cursor-pointer hover:bg-[#FAFAF9] transition-colors"
              >
                <div className="flex items-center gap-2 text-[#49423D] text-[15px] font-medium font-sans">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Read the docs</span>
                </div>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-2 text-[#7A746F] text-xs font-sans">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>30-minute integration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Set your revenue share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
