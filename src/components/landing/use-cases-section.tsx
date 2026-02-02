"use client"

import { Badge } from "@/components/ui/badge-custom"

interface UseCaseCardProps {
  icon: React.ReactNode
  title: string
  description: string
  example: string
  saving: string
}

function UseCaseCard({ icon, title, description, example, saving }: UseCaseCardProps) {
  return (
    <div className="flex flex-col p-6 md:p-8 bg-white rounded-xl border border-[rgba(55,50,47,0.08)] hover:shadow-lg transition-all duration-300 hover:border-[rgba(55,50,47,0.15)]">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#37322F] to-[#605A57] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-[#37322F] text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#605A57] text-sm leading-relaxed mb-4 flex-1">{description}</p>
      
      <div className="pt-4 border-t border-[rgba(55,50,47,0.08)]">
        <div className="text-xs text-[#7A746F] mb-1">Example</div>
        <div className="text-sm text-[#49423D] font-medium mb-3">{example}</div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 rounded-full">
          <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs font-medium text-emerald-700">{saving}</span>
        </div>
      </div>
    </div>
  )
}

export default function UseCasesSection() {
  const useCases: UseCaseCardProps[] = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Indie Developer Apps",
      description: "Add AI features to your side project without building payment infrastructure. Users connect their Consonant account, you earn revenue share automatically.",
      example: "Chrome extension with 5K users",
      saving: "Zero payment infrastructure needed"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "SaaS Platforms",
      description: "Integrate AI features into your existing SaaS product. Let users bring their own AI provider or use Consonant-managed billing—you choose.",
      example: "Project management tool with AI summaries",
      saving: "One integration, all providers"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Enterprise Tools",
      description: "Give enterprise customers unified AI access with granular controls. They manage budgets centrally while using AI across all your tools.",
      example: "Enterprise analytics platform",
      saving: "Centralized billing & controls"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Content Platforms",
      description: "Build writing tools, image generators, or content studios. Users get one AI account that works across all their creative apps.",
      example: "AI writing assistant with 10K users",
      saving: "Users love unified billing"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Developer Tools",
      description: "IDE plugins, code assistants, and dev tools. Developers bring their own API keys securely through Consonant—you never see them.",
      example: "VS Code extension for code review",
      saving: "Zero security liability"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI-First Startups",
      description: "Launch your AI product faster. Focus on your unique features while Consonant handles authentication, billing, and multi-provider support.",
      example: "New AI research assistant",
      saving: "Ship in days, not months"
    },
  ]

  return (
    <div id="use-cases" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center bg-[#FAFAF9]">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 flex justify-center items-center gap-6">
        <div className="w-full max-w-[640px] px-6 py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <Badge
            icon={
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="10" height="10" rx="2" stroke="#37322F" strokeWidth="1" fill="none" />
                <path d="M4 6h4M6 4v4" stroke="#37322F" strokeWidth="1" />
              </svg>
            }
            text="Use Cases"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Built for platform developers
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            From indie apps to enterprise platforms, Consonant makes it easy to
            <br className="hidden md:block" />
            add AI features that users love—without building infrastructure.
          </div>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="self-stretch px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </div>
  )
}
