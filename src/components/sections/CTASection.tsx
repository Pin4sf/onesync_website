"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/motion";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { ArrowRight, Mail, FileText, TrendingUp } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Background typography */}
            <BackgroundText text="JOIN US" position="center" direction="right" speed={0.3} />

            <div className="section-container relative z-10">
                <motion.div
                    {...scrollReveal}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Badge - minimal */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                        <span className="text-xs font-light text-emerald uppercase tracking-wider">
                            Now Seeking Partners
                        </span>
                    </motion.div>

                    <h2 className="font-display text-h1 md:text-display-lg text-text-dark font-light mb-6">
                        Be Part of the{" "}
                        <span className="text-emerald-gradient">Future</span>
                    </h2>

                    <p className="text-body-lg text-text-dark-secondary font-light mb-12 max-w-xl mx-auto">
                        We&apos;re looking for investors, partners, and early adopters.
                    </p>

                    {/* CTA Buttons - cleaner */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                        {/* Primary CTA */}
                        <MagneticButton>
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors touch-target"
                            >
                                <Mail className="w-4 h-4" aria-hidden="true" />
                                Get in Touch
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </motion.a>
                        </MagneticButton>

                        {/* For Investors CTA */}
                        <MagneticButton>
                            <motion.a
                                href="/investor"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 border border-emerald/30 text-emerald font-light rounded-full hover:bg-emerald/5 transition-colors touch-target"
                            >
                                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                                For Investors
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </motion.a>
                        </MagneticButton>

                        {/* Pitch Deck CTA */}
                        <motion.a
                            href="https://drive.google.com/file/d/1Kmd4depasXneVOiyTcUm8H7oSps5MxiP/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 text-text-dark font-light hover:text-emerald transition-colors touch-target"
                        >
                            <FileText className="w-4 h-4" aria-hidden="true" />
                            View Pitch Deck
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                        </motion.a>
                    </div>

                    {/* Trust indicators - minimal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-20"
                    >
                        <p className="text-xs text-text-dark-muted font-light mb-6">Backed by Science. Built for the Future.</p>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {["HIPAA Pathway", "FDA Pathway", "SOC 2 Planned"].map((badge) => (
                                <span
                                    key={badge}
                                    className="text-xs text-text-dark-muted font-light"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
