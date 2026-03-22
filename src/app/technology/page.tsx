"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { Cpu, Wifi, Shield, Zap, Server, Code, Layers, FileJson, Activity, Lock, ArrowRight, Brain, Sparkles, Eye } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const capabilities = [
    {
        category: "On-Device Intelligence",
        icon: Cpu,
        items: [
            {
                name: "Cognitive Readiness Engine",
                description: "A proprietary scoring system that turns raw biometric signals into a single, actionable number — your readiness to perform. Runs entirely on your phone. Zero latency. Zero cloud dependency.",
                icon: Brain,
            },
            {
                name: "Universal Wearable Compatibility",
                description: "Seamlessly connects with Apple Watch, Pixel Watch, Samsung Galaxy Watch, and every major wearable platform. One agent, every ecosystem.",
                icon: Activity,
            },
            {
                name: "Adaptive Cost Intelligence",
                description: "A built-in optimization layer that ensures the AI only activates when it matters — keeping costs near zero while maintaining instant response for critical moments.",
                icon: Zap,
            },
        ],
    },
    {
        category: "Proactive Agent System",
        icon: Sparkles,
        items: [
            {
                name: "Anthropic-Powered Reasoning",
                description: "Built on the same frontier AI that powers the tools the world's best engineers trust. Every message is personalized, empathetic, and contextually aware — never a generic notification.",
                icon: Server,
            },
            {
                name: "Architecture Distilled from 13 Systems",
                description: "We didn't start from scratch. We studied the best production agent platforms in the world and distilled their most powerful patterns into a single, purpose-built system.",
                icon: Code,
            },
            {
                name: "Always-On Background Processing",
                description: "Continuous, silent monitoring that checks on you every 15 minutes — without draining your battery or requiring you to open an app. It's running even when you forget about it.",
                icon: Eye,
            },
        ],
    },
    {
        category: "Privacy-First Architecture",
        icon: Shield,
        items: [
            {
                name: "Military-Grade Encryption",
                description: "Every piece of health data is encrypted with AES-256 on your device — the same standard that protects classified government systems. Not even we can read your data.",
                icon: Lock,
            },
            {
                name: "Zero-Knowledge Cloud",
                description: "When data syncs, it's locked to your account with hardware-level isolation. Even in the impossible event of a breach, your data remains invisible to everyone but you.",
                icon: Shield,
            },
            {
                name: "No Health Data Logging. Ever.",
                description: "We fundamentally do not log your heart rate, sleep patterns, or stress levels. We track what the agent did — never what your body said. This isn't a policy. It's architecture.",
                icon: FileJson,
            },
        ],
    },
];

const principles = [
    {
        icon: Zap,
        title: "Why does the score compute on your phone?",
        description: "Because the most intimate data you have should never leave your device unless you choose. Your readiness score works without internet, responds in milliseconds, and is grounded in SAFTE-FAST — the same fatigue science the US Army trusts for mission-critical decisions.",
    },
    {
        icon: Code,
        title: "Why does the agent come to you on Telegram?",
        description: "Because 88% of people stop opening health apps within 30 days. Beautiful dashboards mean nothing if nobody looks at them. A message that arrives at 7am and tells you the truth about your body — that's a fundamentally different product. The delivery is the product.",
    },
];

export default function TechnologyPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Dark */}
            <section className="min-h-[70vh] pt-24 pb-20 bg-surface-950 relative overflow-hidden flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/product/oneband-prototype.png"
                        alt=""
                        fill
                        className="object-cover object-center opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/60 to-surface-950/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-surface-950/50" />
                </div>

                <div className="section-container relative z-10">
                    <Breadcrumbs variant="dark" segments={[{ label: "Home", href: "/" }, { label: "Technology" }]} />
                    <motion.div {...scrollReveal}>
                        <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                            The Science <span className="text-emerald-gradient">Under the Hood</span>
                        </h1>
                        <p className="text-body-lg md:text-xl text-text-secondary font-extralight max-w-2xl leading-relaxed">
                            A proprietary intelligence engine that reads your biology in real-time, reasons about your state with frontier AI, and reaches you proactively — all while keeping your most intimate data under military-grade encryption on your own device.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="INTELLIGENCE" position="top" direction="right" speed={0.4} />

                <div className="section-container relative z-10">
                    <div className="space-y-24">
                        {capabilities.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
                                        <category.icon className="w-6 h-6 text-emerald" />
                                    </div>
                                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light">
                                        {category.category}
                                    </h2>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="flex-1 h-px bg-gradient-to-r from-light-border to-transparent origin-left ml-4"
                                    />
                                </div>

                                <motion.div
                                    variants={staggerReveal}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid md:grid-cols-3 gap-x-12 gap-y-10"
                                >
                                    {category.items.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            variants={staggerRevealItem}
                                            className="group"
                                        >
                                            <div className="mb-4">
                                                <item.icon className="w-6 h-6 text-emerald/60 group-hover:text-emerald transition-colors" />
                                            </div>
                                            <h3 className="text-lg font-light text-text-dark mb-2 group-hover:text-emerald transition-colors">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-text-dark-muted font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Principles */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-20">
                        <SectionLabel>Design Philosophy</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Every Decision Has a <span className="text-emerald-gradient">Reason</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                                        <principle.icon className="w-5 h-5 text-emerald" />
                                    </div>
                                    <h3 className="text-xl font-light text-text-dark">
                                        {principle.title}
                                    </h3>
                                </div>
                                <p className="text-text-dark-secondary font-light leading-relaxed">
                                    {principle.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <BackgroundText text="EXPLORE" position="center" direction="right" speed={0.3} />

                <div className="section-container text-center relative z-10">
                    <motion.div {...scrollReveal}>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                            See What It <span className="text-emerald-gradient">Does</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            The science is fascinating. What it enables is life-changing.
                        </p>
                        <motion.a
                            href="/product"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                        >
                            View Product
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
