"use client"

import { Navbar } from "../components/landing/navbar"
import { HeroSection } from "../components/landing/hero-section"
import ProblemSection from "../components/landing/problem-section"
import SolutionSection from "../components/landing/solution-section"
import IntegrationSection from "../components/landing/integration-section"
import UserExperienceSection from "../components/landing/user-experience-section"
import DeveloperBenefitsSection from "../components/landing/developer-benefits-section"
import AdvancedCapabilitiesSection from "../components/landing/advanced-capabilities-section"
import FAQSection from "../components/landing/faq-section"
import CTASection from "../components/landing/cta-section"
import FooterSection from "../components/landing/footer-section"

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - New conversion-focused headline */}
      <HeroSection />

      {/* Problem Section - Why users leave */}
      <ProblemSection />

      {/* Solution Section - What Consonant is */}
      <SolutionSection />

      {/* Integration Section - 4-step flow */}
      <IntegrationSection />

      {/* User Experience Section - Two-path journey */}
      <UserExperienceSection />

      {/* Developer Benefits Section - 6 key benefits */}
      <DeveloperBenefitsSection />

      {/* Advanced Capabilities Section */}
      <AdvancedCapabilitiesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section - Why Now */}
      <CTASection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}
