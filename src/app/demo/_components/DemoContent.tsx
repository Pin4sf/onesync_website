"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Shield, AlertTriangle, Eye, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollReveal, staggerReveal, staggerRevealItem, fadeInUp, easeOutCubic } from "@/lib/motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DigitalTwinView } from "./DigitalTwinView";
import {
    type SystemStateId,
    systemStates,
    stateColors,
    stateOrder,
} from "./mock-data";

const valueProps = [
    {
        icon: Shield,
        title: "Data Integrity",
        body: "We never fabricate metrics. If signal quality is insufficient, we tell you — honestly. No guesswork, no false confidence.",
    },
    {
        icon: AlertTriangle,
        title: "Clinical Safety",
        body: "In high-stakes wellness monitoring, a fabricated reading is worse than no reading. Our system prioritizes accuracy over availability.",
    },
    {
        icon: Eye,
        title: "Full Transparency",
        body: "Every metric includes a confidence interval. You always know how reliable the data is and when sensor quality drops.",
    },
];

export function DemoContent() {
    const [selectedState, setSelectedState] = useState<SystemStateId>("active");
    const currentState = systemStates[selectedState];
    const colors = stateColors[selectedState];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-surface-950 pt-32 pb-20 relative overflow-hidden">
                <div className="section-container relative z-10">
                    <Breadcrumbs
                        variant="dark"
                        segments={[
                            { label: "Home", href: "/" },
                            { label: "System Demo" },
                        ]}
                    />

                    <motion.div {...scrollReveal} className="mt-8 max-w-3xl">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                            <span className="text-xs font-light text-emerald uppercase tracking-wider">
                                Interactive Demo
                            </span>
                        </div>

                        <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6">
                            Experience{" "}
                            <span className="text-emerald-gradient">
                                Conditional Intelligence
                            </span>
                        </h1>

                        <p className="text-body-lg text-text-secondary font-light max-w-2xl">
                            Watch how OneSync responds when signal quality changes.
                            Unlike typical wearables that always produce a number,
                            our system is honest enough to say{" "}
                            <span className="text-text-primary font-normal">
                                &ldquo;I don&rsquo;t know.&rdquo;
                            </span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Interactive Demo */}
            <section className="py-section-lg bg-light-bg relative overflow-hidden">
                <BackgroundText text="INFERENCE" position="top" direction="right" speed={0.3} />
                <DotGrid opacity={4} />

                <div className="section-container relative z-10">
                    <motion.div {...fadeInUp}>
                        <SectionLabel>Live System Demo</SectionLabel>
                        <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-4">
                            System State Simulator
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl mb-12">
                            Select a system state to see how OneSync processes and reports data
                            under different signal conditions.
                        </p>
                    </motion.div>

                    {/* State Selector */}
                    <motion.div
                        variants={staggerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12"
                    >
                        {stateOrder.map((stateId) => {
                            const state = systemStates[stateId];
                            const sc = stateColors[stateId];
                            const isSelected = selectedState === stateId;

                            return (
                                <motion.button
                                    key={stateId}
                                    variants={staggerRevealItem}
                                    onClick={() => setSelectedState(stateId)}
                                    className={cn(
                                        "relative text-left p-4 md:p-5 rounded-2xl border transition-all duration-300",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2",
                                        isSelected
                                            ? cn(sc.border, sc.bg, "border-2 shadow-sm")
                                            : "border-neutral-200 bg-white hover:border-neutral-300"
                                    )}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <span
                                            className={cn(
                                                "w-2 h-2 rounded-full transition-colors",
                                                isSelected ? sc.dot : "bg-neutral-300"
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                "text-xs font-mono uppercase tracking-wider transition-colors",
                                                isSelected ? sc.text : "text-text-dark-muted"
                                            )}
                                        >
                                            {state.mode.replace("_", " ")}
                                        </span>
                                    </div>
                                    <p className="text-sm font-light text-text-dark-secondary leading-relaxed">
                                        {state.description}
                                    </p>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Dashboard */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedState}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.4, ease: easeOutCubic }}
                        >
                            <DigitalTwinView state={currentState} colors={colors} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-section-lg bg-light-bg relative overflow-hidden border-t border-neutral-100">
                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="mb-16">
                        <SectionLabel>Why This Matters</SectionLabel>
                        <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-4">
                            Honest Data,{" "}
                            <span className="text-emerald-gradient">Real Trust</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl">
                            Most wearables prioritize always showing a number — even when the
                            underlying signal doesn&rsquo;t support it. OneSync takes a different approach.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {valueProps.map((prop) => (
                            <motion.div
                                key={prop.title}
                                variants={staggerRevealItem}
                                className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center mb-5">
                                    <prop.icon className="w-5 h-5 text-emerald" />
                                </div>
                                <h3 className="font-display text-xl text-text-dark font-light mb-3">
                                    {prop.title}
                                </h3>
                                <p className="text-sm text-text-dark-secondary font-light leading-relaxed">
                                    {prop.body}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-section-lg bg-light-bg relative overflow-hidden border-t border-neutral-100">
                <div className="section-container relative z-10 text-center">
                    <motion.div {...scrollReveal}>
                        <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-4">
                            Ready to see the real thing?
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light max-w-xl mx-auto mb-10">
                            This is a simulated demo. Get in touch to learn more about
                            OneSync&rsquo;s conditional inference system and how it can work for your organization.
                        </p>
                        <MagneticButton>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                            >
                                Get in Touch
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
