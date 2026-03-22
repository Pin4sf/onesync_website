"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { staggerStats, statItem, scrollReveal } from "@/lib/motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";

const marketStats = [
    {
        value: 62,
        suffix: "%",
        label: "Of Knowledge Workers Are",
        highlight: "Burning Out",
        description: "While Their AI Tools Watch",
        position: "left" as const,
        decimals: 0,
    },
    {
        value: 0,
        suffix: "",
        label: "AI Agents Today Know",
        highlight: "Your Biology",
        description: "That Changes Now",
        position: "right" as const,
        decimals: 0,
    },
];

export function MarketSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Background typography */}
            <BackgroundText text="FUTURE" position="top" direction="right" speed={0.5} />
            <BackgroundText text="MARKET" position="bottom" direction="left" speed={0.4} />

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div {...scrollReveal} className="text-center mb-24">
                    <SectionLabel>The Opportunity</SectionLabel>
                    <h2 className="font-display text-display-lg md:text-display-xl text-text-dark font-extralight">
                        The Quadrant Nobody <span className="text-emerald-gradient">Occupies</span>
                    </h2>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={staggerStats}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16 md:space-y-24"
                >
                    {marketStats.map((stat, index) => (
                        <motion.div
                            key={stat.value}
                            variants={statItem}
                            className={`flex items-center gap-8 md:gap-16 ${
                                stat.position === "right" ? "justify-end" : "justify-start"
                            }`}
                        >
                            {/* Decorative line - left stat */}
                            {stat.position === "left" && (
                                <div className="hidden lg:block flex-1 max-w-[200px]">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-px bg-gradient-to-r from-transparent via-emerald/20 to-emerald/40 origin-left"
                                    />
                                </div>
                            )}

                            <div className={`${stat.position === "right" ? "text-right" : "text-left"}`}>
                                {/* Animated Counter */}
                                <div className="font-display text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-text-dark mb-4">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        duration={2.5}
                                        decimals={stat.decimals}
                                    />
                                </div>
                                <p className="text-lg md:text-xl text-text-dark-secondary font-light">
                                    {stat.label}
                                </p>
                                <p className="text-lg md:text-xl text-text-dark-secondary font-light">
                                    <strong className="text-emerald font-normal">
                                        {stat.highlight}
                                    </strong>{" "}
                                    {stat.description}
                                </p>
                            </div>

                            {/* Decorative line - right stat */}
                            {stat.position === "right" && (
                                <div className="hidden lg:block flex-1 max-w-[200px]">
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-px bg-gradient-to-l from-transparent via-emerald/20 to-emerald/40 origin-right"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Global Market Opportunity - Featured Stat */}
                <motion.div
                    {...scrollReveal}
                    className="mt-20 md:mt-28 text-center relative"
                >
                    {/* Circular text decoration */}
                    <div className="relative w-28 h-28 mx-auto mb-10">
                        <motion.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            viewBox="0 0 100 100"
                            className="w-full h-full"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                />
                            </defs>
                            <text className="fill-neutral-300" style={{ fontSize: "8.5px", letterSpacing: "3px" }}>
                                <textPath href="#circlePath" className="font-mono uppercase">
                                    BIOLOGY · AGENCY · PROACTIVE ·{" "}
                                </textPath>
                            </text>
                        </motion.svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald/40" />
                        </div>
                    </div>

                    {/* Main stat */}
                    <div className="font-display text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight mb-4">
                        <span className="text-emerald-gradient">$</span>
                        <AnimatedCounter
                            value={300}
                            suffix="B+"
                            duration={3}
                            className="text-text-dark"
                        />
                    </div>
                    <p className="text-xl md:text-2xl text-text-dark-muted font-extralight">
                        Where Wearables Meet AI Agents
                    </p>

                    {/* Decorative bottom accent */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent mx-auto mt-8"
                    />
                </motion.div>
            </div>
        </section>
    );
}
