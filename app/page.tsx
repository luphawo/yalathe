import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import VisionMission from "@/components/sections/VisionMission";
import Goals from "@/components/sections/Goals";
import Philosophy from "@/components/sections/Philosophy";
import Values from "@/components/sections/Values";
import Team from "@/components/sections/Team";
import QualityPolicy from "@/components/sections/QualityPolicy";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <ValueProposition />
      <VisionMission />
      <Goals />
      <Philosophy />
      <Values />
      <Team />
      <QualityPolicy />
      <CTASection />
    </>
  );
}
