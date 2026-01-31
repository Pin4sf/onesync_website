"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";

const impacts = [
    { category: "Mind", items: ["Fragmented Focus", "Memory Degradation", "Decision Fatigue"] },
    { category: "Body", items: ["Sleep Disruption", "Elevated Heart Rate", "Chronic Inflammation"] },
    { category: "Life", items: ["Burnout", "Absenteeism", "Productivity Loss"] },
];

const marqueeItems = [
    "FRAGMENTED FOCUS",
    "MEMORY LOSS",
    "DECISION FATIGUE",
    "SLEEP DISRUPTION",
    "BURNOUT",
    "CHRONIC STRESS",
    "ANXIETY",
    "INFLAMMATION",
];

export function CostOfStressSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            <div className="section-container relative z-10">
                <motion.div {...scrollReveal} className="text-center max-w-3xl mx-auto mb-20">
                    <SectionLabel>Consequences</SectionLabel>

                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-6">
                        The Cost of <span className="text-emerald-gradient">Stress</span>
                    </h2>

                    <p className="text-body-lg text-text-dark-secondary font-light">
                        Chronic stress fundamentally rewires your brain and body.
                    </p>
                </motion.div>

                {/* Horizontal marquee - stress impacts */}
                <div className="relative mb-20 overflow-hidden">
                    <div className="flex animate-marquee" style={{ animationDuration: "30s" }}>
                        {[...marqueeItems, ...marqueeItems].map((item, index) => (
                            <span
                                key={index}
                                className="flex-shrink-0 px-8 md:px-12 text-4xl md:text-6xl lg:text-7xl font-extralight text-neutral-200 whitespace-nowrap"
                            >
                                {item}
                                <span className="mx-8 md:mx-12 text-emerald/30">•</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Three column layout - seamless */}
                <motion.div
                    variants={staggerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24"
                >
                    {impacts.map((impact, categoryIndex) => (
                        <motion.div
                            key={impact.category}
                            variants={staggerRevealItem}
                            className="relative"
                        >
                            <h3 className="text-sm font-normal uppercase tracking-[0.2em] text-text-dark-muted mb-8">
                                {impact.category}
                            </h3>

                            <ul className="space-y-6">
                                {impact.items.map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index + 0.2 * categoryIndex }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald/40 flex-shrink-0" />
                                        <span className="text-xl md:text-2xl font-light text-text-dark">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Subtle divider */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="mt-8 w-12 h-px origin-left bg-emerald/20"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <p className="text-2xl md:text-3xl font-extralight text-text-dark-secondary max-w-2xl mx-auto leading-relaxed">
                        The cumulative effect leads to{" "}
                        <span className="text-text-dark font-light">irreversible damage</span>—
                        unless you act now.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
