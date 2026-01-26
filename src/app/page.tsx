import {
  HeroSection,
  ProblemSection,
  ComparisonSection,
  SolutionSection,
  ArchitectureSection,
  ProofSection,
  UseCasesSection,
  CTASection,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <SolutionSection />
      <ArchitectureSection />
      <ProofSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
