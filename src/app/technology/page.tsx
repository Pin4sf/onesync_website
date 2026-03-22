"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { Cpu, Wifi, Shield, Zap, Server, Code, Layers, FileJson, Activity, Lock, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const techStack = [
    {
        category: "The Brain on Your Phone",
        icon: Cpu,
        items: [
            {
                name: "Your Readiness Engine",
                description: "A score that tells you how sharp you are — computed entirely on your phone from sleep, heart rate variability, circadian rhythm, and movement. No internet needed. No data leaves your device.",
                icon: Layers,
            },
            {
                name: "Speaks to Every Watch",
                description: "Native Swift and Kotlin modules that talk directly to Apple HealthKit and Android Health Connect. Your watch already collects the data — we just make it useful.",
                icon: Activity,
            },
            {
                name: "The Smart Skip",
                description: "Most of the time, your body is fine and the AI doesn't need to run. A simple rules engine catches 60-80% of checks — meaning zero AI cost for the majority of your day.",
                icon: FileJson,
            },
        ],
    },
    {
        category: "The Agent That Speaks",
        icon: Wifi,
        items: [
            {
                name: "Powered by Claude",
                description: "When the agent does speak, it uses Anthropic's Claude — the same AI that powers tools engineers love. Personalized, empathetic, and never generic.",
                icon: Server,
            },
            {
                name: "13 Systems in One",
                description: "We didn't invent from scratch. We studied the best — from enterprise agent platforms to open-source frameworks — and distilled the best patterns into a single architecture.",
                icon: Code,
            },
            {
                name: "Serverless Backbone",
                description: "The backend runs on Supabase Edge Functions — serverless, scalable, and cost-effective. Checks run every 15 minutes, quietly, in the background.",
                icon: Shield,
            },
        ],
    },
    {
        category: "Privacy as a Feature",
        icon: Shield,
        items: [
            {
                name: "Military-Grade Encryption",
                description: "Your health data is encrypted on your phone with AES-256 — the same standard used by governments. Not even we can read it.",
                icon: Lock,
            },
            {
                name: "You Only See Yours",
                description: "Every database query is locked to your account. Row-level security means even if someone broke into the server, they couldn't see your data.",
                icon: Shield,
            },
            {
                name: "We Don't Log Your Health",
                description: "We never log your actual heart rate, sleep hours, or stress levels. Period. We track what the agent did, not what your body said.",
                icon: FileJson,
            },
        ],
    },
];

const specifications = [
    { label: "Mobile App", value: "React Native + Expo", description: "One codebase, both platforms", icon: Cpu },
    { label: "Design System", value: "NativeWind + Tailwind", description: "Beautiful, consistent UI", icon: Zap },
    { label: "Health Data", value: "Encrypted SQLite", description: "AES-256 on your phone", icon: Shield },
    { label: "Cloud", value: "Supabase", description: "Postgres + Edge Functions + Auth", icon: Server },
    { label: "Intelligence", value: "Claude by Anthropic", description: "Empathetic, personalized AI", icon: Activity },
    { label: "Delivery", value: "Telegram Bot", description: "Messages that reach you first", icon: Wifi },
];

export default function TechnologyPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Dark with background image */}
            <section className="min-h-[70vh] pt-24 pb-20 bg-surface-950 relative overflow-hidden flex items-center">
                {/* Background image from home page */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/product/oneband-prototype.png"
                        alt=""
                        fill
                        className="object-cover object-center opacity-40"
                        priority
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/60 to-surface-950/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-surface-950/50" />
                </div>

                <div className="section-container relative z-10">
                    <Breadcrumbs variant="dark" segments={[{ label: "Home", href: "/" }, { label: "Technology" }]} />
                    <motion.div {...scrollReveal}>
                        <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                            How We <span className="text-emerald-gradient">Built It</span>
                        </h1>
                        <p className="text-body-lg md:text-xl text-text-secondary font-extralight max-w-2xl leading-relaxed">
                            We studied 13 production agent systems — from enterprise platforms to open-source frameworks — and took the best ideas from each. Then we built something that works offline, respects your privacy, and costs almost nothing to run.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="TECHNOLOGY" position="top" direction="right" speed={0.4} />

                <div className="section-container relative z-10">
                    <div className="space-y-24">
                        {techStack.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Category Header */}
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

                                {/* Category Items */}
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

            {/* Specifications Section - Card Grid */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="SPECS" position="center" direction="left" speed={0.3} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-16">
                        <SectionLabel>The Stack</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            What Powers <span className="text-emerald-gradient">OneSync</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                    >
                        {specifications.map((spec, index) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-[40px] backdrop-saturate-[180%] border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-6 transition-all duration-300 ease-out hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                            >
                                {/* Light mode top highlight */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-[20px] bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald/10 transition-colors">
                                        <spec.icon className="w-5 h-5 text-emerald" />
                                    </div>
                                    <p className="text-xs text-emerald font-medium uppercase tracking-wider mb-2">
                                        {spec.label}
                                    </p>
                                    <p className="text-xl text-slate-900 font-light mb-2 group-hover:text-emerald transition-colors">
                                        {spec.value}
                                    </p>
                                    <p className="text-sm text-slate-600 font-light">
                                        {spec.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-20">
                        <SectionLabel>Design Decisions</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Why These <span className="text-emerald-gradient">Choices</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                                    <Zap className="w-5 h-5 text-emerald" />
                                </div>
                                <h3 className="text-xl font-light text-text-dark">
                                    Why compute on your phone?
                                </h3>
                            </div>
                            <p className="text-text-dark-secondary font-light leading-relaxed">
                                Because your readiness score should work without WiFi, respond instantly, and never send raw health data anywhere. The science behind it is grounded in SAFTE-FAST — the same model the US Army uses for fatigue risk management. We adapted it for everyday life.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                                    <Code className="w-5 h-5 text-emerald" />
                                </div>
                                <h3 className="text-xl font-light text-text-dark">
                                    Why Telegram, not an app?
                                </h3>
                            </div>
                            <p className="text-text-dark-secondary font-light leading-relaxed">
                                Because 88% of health app users stop opening the app within 30 days. Dashboards are beautiful and completely useless if nobody looks at them. A Telegram message that arrives at 7am is fundamentally different from a score waiting in an app. The delivery IS the product.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <BackgroundText text="EXPLORE" position="center" direction="right" speed={0.3} />

                <div className="section-container text-center relative z-10">
                    <motion.div {...scrollReveal}>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                            See What It <span className="text-emerald-gradient">Does</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            The technology is interesting. What it enables is extraordinary.
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
