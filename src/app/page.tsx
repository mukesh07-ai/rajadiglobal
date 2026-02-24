import { HeroSection } from "@/components/home/HeroSection";
import { ClientLogoSection } from "@/components/home/ClientLogoSection";
import { UniqueValueSection } from "@/components/home/UniqueValueSection";
import { IndustryFocusSection } from "@/components/home/IndustryFocusSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ProblemSolutionSection } from "@/components/home/ProblemSolutionSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { ScrollNavigation } from "@/components/ui/ScrollNavigation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogoSection />
      <UniqueValueSection />
      <HowItWorksSection />
      <ProblemSolutionSection />
      <IndustryFocusSection />
      <ServicesSection />
      <MetricsSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <ScrollNavigation />
    </>
  );
}
