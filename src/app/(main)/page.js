import AvlablePateSection from "@/Components/App/Home/AvlablePateSection";
import HeroSection from "@/Components/App/Home/HeroSection";
import MarqueeSection from "@/Components/App/Home/MarqueeSection";
import PetAdoptionSection from "@/Components/App/Home/PetAdoptionSection";
import PetCareTips from "@/Components/App/Home/PetCareTips";
import PetStatsSection from "@/Components/App/Home/PetStatsSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <PetStatsSection />
      <AvlablePateSection />
      <PetAdoptionSection />
      <MarqueeSection />
      <PetCareTips />
    </section>
  );
}
