"use client"

import DocumentationSection from "../components/landing/documentation-section"
import FAQSection from "../components/landing/faq-section"
import CTASection from "../components/landing/cta-section"
import FooterSection from "../components/landing/footer-section"
import { Navbar } from "../components/landing/navbar"
import { HeroSection } from "../components/landing/hero-section"
import { SocialProofSection } from "../components/landing/social-proof-section"
import { BentoGridSection } from "../components/landing/bento-grid-section"
import ArchitectureSection from "../components/landing/architecture-section"
import UseCasesSection from "../components/landing/use-cases-section"
import OpenSourceSection from "../components/landing/open-source-section"
import { ThemeProvider } from "@/components/theme-provider"

export default function LandingPage() {
  return (
      <div className="w-full min-h-screen pt-12 sm:pt-14 md:pt-16 lg:pt-[84px] relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
        <div className="relative flex flex-col justify-start items-center w-full">
          {/* Main container with proper margins */}
          <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
            {/* Left vertical line */}
            <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
  
            {/* Right vertical line */}
            <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
  
            <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
              {/* Navigation */}
              <Navbar />
  
              {/* Hero Section */}
              <HeroSection />
  
              {/* Social Proof Section */}
              <SocialProofSection />
  
              {/* Bento Grid Section - Core Features */}
              <BentoGridSection />
  
              {/* Architecture Section - How It Works */}
              <ArchitectureSection />
  
              {/* Use Cases Section */}
              <UseCasesSection />
  
              {/* Documentation Section */}
              <DocumentationSection />
  
              {/* Open Source Section */}
              <OpenSourceSection />
  
              {/* FAQ Section */}
              <FAQSection />
  
              {/* CTA Section */}
              <CTASection />
  
              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
    </div>
  )
}
