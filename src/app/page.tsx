"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/ui/Preloader";
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
    // null = not checked yet, true = show preloader, false = skip
    const [showPreloader, setShowPreloader] = useState<boolean | null>(null);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("onesync-visited");
        if (hasVisited) {
            setShowPreloader(false);
            return;
        }

        setShowPreloader(true);
        const timer = setTimeout(() => {
            setShowPreloader(false);
            sessionStorage.setItem("onesync-visited", "true");
            window.scrollTo(0, 0);
        }, 3200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {showPreloader && <Preloader key="preloader" />}
            </AnimatePresence>
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
