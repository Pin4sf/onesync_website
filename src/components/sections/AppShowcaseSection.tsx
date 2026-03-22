"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AppPreview } from "@/components/ui/AppPreview";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";

const features = [
    { text: "Morning", highlight: "Truth Brief" },
    { text: "Real-Time", highlight: "Interventions" },
    { text: "Patterns Only", highlight: "Time Reveals" },
];

export function AppShowcaseSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Dot grid background */}
            <DotGrid opacity={10} gap={28} />

            <div className="section-wide relative z-10">
                {/* Section Header */}
                <motion.div {...scrollReveal} className="text-center mb-16">
                    <SectionLabel>How It Feels</SectionLabel>
                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-4">
                        A Guardian, <span className="text-emerald-gradient">Not a Dashboard</span>
                    </h2>
                    <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl mx-auto">
                        You don&apos;t open OneSync. OneSync reaches you — with a morning brief that tells you the truth and stress alerts that arrive before you spiral.
                    </p>
                </motion.div>

                {/* Interactive SVG App Preview */}
                <div className="mb-20">
                    <AppPreview />
                </div>

                {/* Features Bar */}
                <motion.div
                    variants={staggerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8"
                >
                    {features.map((feature, index) => (
                        <motion.span
                            key={feature.text}
                            variants={staggerRevealItem}
                            className="flex items-center gap-6 md:gap-12"
                        >
                            <span className="text-base md:text-lg text-text-dark-muted font-light">
                                {feature.text}{" "}
                                {feature.highlight && (
                                    <strong className="text-emerald font-normal">
                                        {feature.highlight}
                                    </strong>
                                )}
                            </span>
                            {index < features.length - 1 && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald/30" />
                            )}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
