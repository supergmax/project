import { HeroSection } from "@/components/landing/HeroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { WhyChooseUsSection } from "@/components/landing/WhyChooseUsSection";
import { CommitmentsSection } from "@/components/landing/CommitmentsSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FaqSection } from "@/components/landing/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <CommitmentsSection />
      <ProcessSection />
      <FaqSection />
    </>
  );
}