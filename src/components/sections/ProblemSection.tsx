"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";

const stats = [
    {
        value: 77,
        suffix: "%",
        label: "Americans stressed at work",
        sublabel: "Nearly 8 in 10 employees experiencing work-related stress monthly.",
        decimals: 0,
    },
    {
        value: 1,
        suffix: "B+",
        label: "Mental Health Disorders",
        sublabel: "Over one billion people globally living with mental health conditions.",
        decimals: 1,
    },
    {
        value: 40,
        suffix: "%",
        label: "GenZ Anxiety Levels",
        sublabel: "Younger generations feeling stressed or anxious most of the time.",
        decimals: 0,
    },
];

export function ProblemSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            id="problem"
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Subtle background text */}
            <BackgroundText text="STRESS" position="center" direction="left" speed={0.6} />

            <div className="section-container relative z-10">
                <motion.div {...scrollReveal}>
                    <SectionLabel>The Crisis</SectionLabel>

                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-6">
                        The Silent <span className="text-emerald-gradient">Epidemic</span>
                    </h2>

                    <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl mb-16 md:mb-24">
                        The defining health challenge of our generation.
                    </p>
                </motion.div>

                {/* Stats Grid - No cards, seamless */}
                <motion.div
                    variants={staggerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={staggerRevealItem}
                        >
                            {/* Number indicator */}
                            <div className="text-xs font-mono text-text-dark-muted/40 mb-6">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Animated stat value */}
                            <div className="font-display text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-4 text-text-dark">
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    duration={2.5}
                                    decimals={stat.decimals}
                                />
                            </div>

                            <h3 className="text-lg font-light text-text-dark mb-3">
                                {stat.label}
                            </h3>

                            <p className="text-sm text-text-dark-muted font-light leading-relaxed">
                                {stat.sublabel}
                            </p>

                            {/* Subtle bottom accent line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="mt-8 w-16 h-px origin-left bg-emerald/30"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sources */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 text-xs text-text-dark-muted font-light text-center"
                >
                    Sources: World Health Organization (WHO), SSR Workplace Stress Report, Deloitte Global GenZ Survey
                </motion.p>
            </div>
        </section>
    );
}
