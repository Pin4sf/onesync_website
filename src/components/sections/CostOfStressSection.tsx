"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";

const impacts = [
    { category: "What You Tell Yourself", items: ["I'm Fine, Just Tired", "I Can Push Through One More Week", "I'll Rest After This Deadline"] },
    { category: "What Your Body Says", items: ["Heart Rate Variability Crashed", "Running on 4 Hours of Sleep Debt", "Stress Response Still Firing"] },
    { category: "What Actually Happens", items: ["You Snap at Someone You Love", "The Decision You Made at 11pm Costs You", "The Crash Comes — and Nobody Saw It Coming"] },
];

const marqueeItems = [
    "SILENT BURNOUT",
    "MISSED RECOVERY",
    "DECISION FATIGUE",
    "SLEEP DEBT",
    "SNAPPING AT LOVED ONES",
    "DEPLETED FOCUS",
    "IGNORED SIGNALS",
    "PUSHING THROUGH",
    "THE CRASH",
];

// Interactive Marquee Component
function InteractiveMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const baseX = useMotionValue(0);
    const baseVelocity = -50; // pixels per second (negative = left scroll)

    // Measure content width on mount and resize
    useEffect(() => {
        const measureWidth = () => {
            if (marqueeRef.current) {
                // Get width of first set of items (half the content)
                const firstChild = marqueeRef.current.firstElementChild as HTMLElement;
                if (firstChild) {
                    setContentWidth(firstChild.offsetWidth);
                }
            }
        };

        measureWidth();
        window.addEventListener("resize", measureWidth);
        return () => window.removeEventListener("resize", measureWidth);
    }, []);

    // Continuous animation
    useAnimationFrame((_, delta) => {
        if (isPaused || isDragging || contentWidth === 0) return;

        let newX = baseX.get() + (baseVelocity * delta) / 1000;

        // Reset when we've scrolled past one full set
        if (newX <= -contentWidth) {
            newX = 0;
        }

        baseX.set(newX);
    });

    // Handle drag
    const handleDragStart = useCallback(() => {
        setIsDragging(true);
    }, []);

    const handleDragEnd = useCallback(() => {
        setIsDragging(false);
        // Normalize position after drag
        if (contentWidth > 0) {
            let currentX = baseX.get();
            // Keep within bounds
            while (currentX <= -contentWidth) {
                currentX += contentWidth;
            }
            while (currentX > 0) {
                currentX -= contentWidth;
            }
            baseX.set(currentX);
        }
    }, [baseX, contentWidth]);

    return (
        <div
            className="relative mb-20 overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
                setIsPaused(false);
                setIsDragging(false);
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <motion.div
                ref={marqueeRef}
                className="flex"
                style={{ x: baseX }}
                drag="x"
                dragConstraints={{ left: -contentWidth * 2, right: contentWidth }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                {/* First set - used for measurement */}
                <div className="flex flex-shrink-0">
                    {marqueeItems.map((item, index) => (
                        <span
                            key={`first-${index}`}
                            className="flex-shrink-0 px-6 md:px-10 text-4xl md:text-6xl lg:text-7xl font-extralight text-neutral-200 whitespace-nowrap select-none transition-colors hover:text-neutral-300"
                        >
                            {item}
                            <span className="mx-6 md:mx-10 text-emerald/30">•</span>
                        </span>
                    ))}
                </div>
                {/* Second set - for seamless loop */}
                <div className="flex flex-shrink-0">
                    {marqueeItems.map((item, index) => (
                        <span
                            key={`second-${index}`}
                            className="flex-shrink-0 px-6 md:px-10 text-4xl md:text-6xl lg:text-7xl font-extralight text-neutral-200 whitespace-nowrap select-none transition-colors hover:text-neutral-300"
                        >
                            {item}
                            <span className="mx-6 md:mx-10 text-emerald/30">•</span>
                        </span>
                    ))}
                </div>
                {/* Third set - extra buffer for drag */}
                <div className="flex flex-shrink-0">
                    {marqueeItems.map((item, index) => (
                        <span
                            key={`third-${index}`}
                            className="flex-shrink-0 px-6 md:px-10 text-4xl md:text-6xl lg:text-7xl font-extralight text-neutral-200 whitespace-nowrap select-none transition-colors hover:text-neutral-300"
                        >
                            {item}
                            <span className="mx-6 md:mx-10 text-emerald/30">•</span>
                        </span>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

export function CostOfStressSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Dot grid background */}
            <DotGrid opacity={10} gap={28} />

            <div className="section-container relative z-10">
                <motion.div {...scrollReveal} className="text-center max-w-3xl mx-auto mb-20">
                    <SectionLabel>The Gap</SectionLabel>

                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-6">
                        Two Realities. <span className="text-emerald-gradient">One You.</span>
                    </h2>

                    <p className="text-body-lg text-text-dark-secondary font-light">
                        There&apos;s the version of you that says &ldquo;I&apos;m fine&rdquo; — and the version your nervous system is actually living. No tool today catches that gap.
                    </p>
                </motion.div>

                {/* Interactive Horizontal Marquee */}
                <InteractiveMarquee />

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
                        You tell yourself you&apos;re fine.{" "}
                        <span className="text-text-dark font-light">Your body always tells the truth.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
