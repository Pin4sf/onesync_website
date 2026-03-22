"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";

const stats = [
    {
        value: 62,
        suffix: "%",
        label: "Are Already Burning Out",
        sublabel: "Most knowledge workers are running on fumes. The AI tools they rely on have no idea.",
        decimals: 0,
    },
    {
        value: 50,
        suffix: "%",
        label: "Of YC is Building Agents",
        sublabel: "The agent revolution is here — but every single one of them is blind to your biology.",
        decimals: 0,
    },
    {
        value: 88,
        suffix: "%",
        label: "Abandon Health Apps",
        sublabel: "Because dashboards wait for you to show up. Nobody does. The problem was never the data — it was the delivery.",
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
            <BackgroundText text="BLIND SPOT" position="center" direction="left" speed={0.6} />

            <div className="section-container relative z-10">
                <motion.div {...scrollReveal}>
                    <SectionLabel>The Blind Spot</SectionLabel>

                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-6">
                        A Trillion-Dollar <span className="text-emerald-gradient">Blindspot</span>
                    </h2>

                    <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl mb-16 md:mb-24">
                        Your AI agent will schedule your hardest meeting when your nervous system is depleted. It will push you through a 14-hour day when your biology is screaming for recovery. It optimizes what you do — without understanding who you are.
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
                    HBR 2026 · Y Combinator RFS 2026 · UXCam 2025
                </motion.p>
            </div>
        </section>
    );
}
