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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: "Bring-Your-Own-Key (BYOK) Apps",
      description: "Build tools where power users bring their own API keys. You get the security of a vault without the liability of storing keys on your servers.",
      example: "Developer-focused IDE plugins or analytical tools",
      saving: "Zero security liability for user keys"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI-as-a-Service Platforms",
      description: "Launch apps with built-in AI credits. Users pay you a margin on top of every request, and you don't have to manage the underlying provider billing.",
      example: "Writing assistants or design tools with token-based pricing",
      saving: "Automated billing with built-in margins"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Enterprise Managed Access",
      description: "Provide tools where companies can centrally manage their AI spend and provider preferences across all their employees using your software.",
      example: "Enterprise collaboration tools or data science platforms",
      saving: "Centralized spend & provider management"
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
            Consonant simplifies the complex logic of AI orchestration,
            <br className="hidden md:block" />
            letting you focus on high-value features and behavior.
          </div>
        </div>
      </div>

      {/* Use Cases Grid */}
      <div className="self-stretch px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
