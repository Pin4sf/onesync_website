import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { CostOfStressSection } from "@/components/sections/CostOfStressSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection";
import { MarketSection } from "@/components/sections/MarketSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProblemSection />
            <CostOfStressSection />
            <VisionSection />
            <ProductSection />
            <AppShowcaseSection />
            <MarketSection />
            <TeamSection />
            <CTASection />
        </>
    );
}
