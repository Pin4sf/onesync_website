"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { TextReveal } from "@/components/ui/TextReveal";

const values = [
    "Works with any smartwatch",
    "Comes to you, not the other way",
    "Your data never leaves your control",
];

export function VisionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax for quote marks
    const quoteY = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const quoteOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            id="vision"
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Dot grid background */}
            <DotGrid opacity={10} gap={28} />

            {/* Background typography */}
            <BackgroundText text="BODY FIRST" position="center" direction="right" speed={0.5} />

            <div className="section-container relative z-10">
                <motion.div
                    {...scrollReveal}
                    className="max-w-4xl mx-auto text-center"
                >
                    <SectionLabel>Our Vision</SectionLabel>

                    {/* Quote with animated marks */}
                    <div className="relative py-12">
                        {/* Opening quote mark */}
                        <motion.span
                            style={{ y: quoteY, opacity: quoteOpacity }}
                            className="absolute -top-4 left-0 md:left-8 text-[120px] md:text-[180px] font-display text-neutral-200 leading-none pointer-events-none select-none"
                            aria-hidden="true"
                        >
                            &ldquo;
                        </motion.span>

                        <blockquote className="relative z-10">
                            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-extralight text-text-dark-secondary leading-tight">
                                Body{" "}
                                <strong className="text-emerald font-light">
                                    First
                                </strong>
                                <br />
                                <span className="text-text-dark-muted">Context </span>
                                <strong className="text-emerald font-light">
                                    Next
                                </strong>
                                <br />
                                <span className="text-text-dark-muted">Then </span>
                                <strong className="text-emerald font-light">
                                    Everything Else
                                </strong>
                            </p>
                        </blockquote>

                        {/* Closing quote mark */}
                        <motion.span
                            style={{ y: quoteY, opacity: quoteOpacity }}
                            className="absolute -bottom-16 right-0 md:right-8 text-[120px] md:text-[180px] font-display text-neutral-200 leading-none pointer-events-none select-none"
                            aria-hidden="true"
                        >
                            &rdquo;
                        </motion.span>
                    </div>

                    {/* Vision statement with scroll-reveal text */}
                    <div className="mt-12 mb-8">
                        <TextReveal
                            text="We built an entire industry around collecting the most intimate data in existence — signals from inside your own body — and left people completely alone with it. OneSync is the agent that finally does something about it."
                            className="font-display text-2xl md:text-3xl font-extralight text-text-dark-secondary leading-relaxed justify-center"
                            as="p"
                        />
                    </div>

                    {/* Values */}
                    <motion.div
                        variants={staggerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-16"
                    >
                        {values.map((value, index) => (
                            <motion.span
                                key={value}
                                variants={staggerRevealItem}
                                className="flex items-center gap-6 md:gap-10"
                            >
                                <span className="text-sm md:text-base text-text-dark-muted font-light">
                                    {value}
                                </span>
                                {index < values.length - 1 && (
                                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                )}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="w-24 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent mx-auto mt-16"
                    />
                </motion.div>
            </div>
        </section>
    );
}
