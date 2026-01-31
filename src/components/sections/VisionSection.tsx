"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";

const values = [
    "Minimal by design",
    "Scientifically grounded",
    "Private by default",
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
            {/* Background typography */}
            <BackgroundText text="CLARITY" position="center" direction="right" speed={0.5} />

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
                                Make Calm{" "}
                                <strong className="text-emerald font-light">
                                    Measurable
                                </strong>
                                <br />
                                <span className="text-text-dark-muted">Make Clarity </span>
                                <strong className="text-emerald font-light">
                                    Trainable
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
