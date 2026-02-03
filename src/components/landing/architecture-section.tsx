"use client"

import { Badge } from "@/components/ui/badge-custom"

// Architecture flow visualization
function ArchitectureFlow() {
  return (
    <div className="w-full py-8 flex flex-col items-center gap-6">
      {/* Flow diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 w-full max-w-[900px] px-4">
        {/* Step 1: SDK */}
        <div className="flex flex-col items-center gap-3 flex-1 min-w-[160px]">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-[#37322F] font-semibold text-sm">Your App</div>
            <div className="text-[#7A746F] text-xs mt-1">User makes request</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center px-2">
          <div className="w-8 h-[2px] bg-gradient-to-r from-violet-300 to-blue-300" />
          <svg className="w-4 h-4 text-blue-400 -ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
          </svg>
        </div>
        <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-violet-300 to-blue-300" />

        {/* Step 2: Backend */}
        <div className="flex flex-col items-center gap-3 flex-1 min-w-[160px]">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-[#37322F] font-semibold text-sm">Consonant</div>
            <div className="text-[#7A746F] text-xs mt-1">Auth & routing</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center px-2">
          <div className="w-8 h-[2px] bg-gradient-to-r from-blue-300 to-emerald-300" />
          <svg className="w-4 h-4 text-emerald-400 -ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
          </svg>
        </div>
        <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-blue-300 to-emerald-300" />

        {/* Step 3: Redis */}
        <div className="flex flex-col items-center gap-3 flex-1 min-w-[160px]">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-[#37322F] font-semibold text-sm">AI Provider</div>
            <div className="text-[#7A746F] text-xs mt-1">OpenAI, Anthropic, etc.</div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex items-center px-2">
          <div className="w-8 h-[2px] bg-gradient-to-r from-emerald-300 to-amber-300" />
          <svg className="w-4 h-4 text-amber-400 -ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
          </svg>
        </div>
        <div className="md:hidden w-[2px] h-6 bg-gradient-to-b from-emerald-300 to-amber-300" />

        {/* Step 4: Decision */}
        <div className="flex flex-col items-center gap-3 flex-1 min-w-[160px]">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-center">
            <div className="text-[#37322F] font-semibold text-sm">User Billed</div>
            <div className="text-[#7A746F] text-xs mt-1">Automatic & unified</div>
          </div>
        </div>
      </div>

      {/* Code example */}
      <div className="w-full max-w-[700px] mt-6 mx-4">
        <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-xl">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#16162a] border-b border-slate-700/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-400 text-xs font-mono ml-2">The complete flow</span>
          </div>
          <div className="p-5 overflow-x-auto">
            <pre className="text-xs sm:text-sm font-mono leading-relaxed">
              <code>
                <span className="text-slate-500">// 1. User authenticates with Consonant</span>
                {"\n"}
                <span className="text-purple-400">const</span>
                <span className="text-slate-300">{" session = "}</span>
                <span className="text-purple-400">await</span>
                <span className="text-cyan-400">{" consonant"}</span>
                <span className="text-slate-300">.auth(...);</span>
                {"\n\n"}
                <span className="text-slate-500">// 2. Your app makes AI request</span>
                {"\n"}
                <span className="text-purple-400">const</span>
                <span className="text-slate-300">{" response = "}</span>
                <span className="text-purple-400">await</span>
                <span className="text-cyan-400">{" consonant"}</span>
                <span className="text-slate-300">.chat(...);</span>
                {"\n\n"}
                <span className="text-slate-500">// 3. Consonant routes to user's provider</span>
                {"\n"}
                <span className="text-emerald-400">{"// ✓ User chose Anthropic in dashboard"}</span>
                {"\n"}
                <span className="text-emerald-400">{"// ✓ Request routed automatically"}</span>
                {"\n"}
              
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ArchitectureSection() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[640px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="#37322F" strokeWidth="1" fill="none" />
                <circle cx="6" cy="6" r="1.5" fill="#37322F" />
              </svg>
            }
            text="Architecture"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            The layer between apps and AI
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Consonant sits between your application and AI providers.
            <br className="hidden md:block" />
            Handle auth, route requests, manage billing—all through one clean API.
          </div>
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="self-stretch px-4 md:px-12 py-8 md:py-12">
        <ArchitectureFlow />
      </div>
    </div>
  )
}
