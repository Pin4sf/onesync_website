"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { AppPreview } from "@/components/ui/AppPreview";
import { fadeInUp, staggerReveal, staggerRevealItem, scrollReveal } from "@/lib/motion";
import { Battery, Droplets, Activity, Brain, Heart, Zap, Shield, Smartphone, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const features = [
    {
        icon: Brain,
        title: "A Score That Means Something",
        description: "Your Cognitive Readiness Score tells you how sharp you actually are — computed from sleep quality, heart rate variability, your circadian rhythm, and activity. Updated every 15 minutes.",
    },
    {
        icon: Activity,
        title: "Your Watch, Our Intelligence",
        description: "Already wear an Apple Watch or Android smartwatch? That's all you need. OneSync reads the data your watch collects and makes it actually useful.",
    },
    {
        icon: Heart,
        title: "Interventions, Not Notifications",
        description: "When your stress response fires, OneSync doesn't wait for you to open an app. It reaches you on Telegram with a personalized intervention — before the anxiety registers.",
    },
    {
        icon: Zap,
        title: "Your Morning Truth Brief",
        description: "Every morning: how your body prepared for today, what your readiness score means, and one actionable insight. On Telegram, before your first meeting.",
    },
    {
        icon: Shield,
        title: "Your Data Stays Yours",
        description: "Health data is the most intimate data you have. It's encrypted on your phone, locked behind row-level security in the cloud, and never logged anywhere.",
    },
    {
        icon: Smartphone,
        title: "It Gets Smarter Over Time",
        description: "By week two, it knows your baselines. By month one, it catches your stress triggers. By month three, it predicts tomorrow based on today.",
    },
];

const bentoSpecs = [
    {
        title: "Your Readiness Score",
        description: "A single number (0-100) that tells you how cognitively sharp you are right now. Computed on your phone, works offline, updates every 15 minutes.",
        icon: Brain,
        size: "large",
        highlight: "The Core",
    },
    {
        title: "Smart Cost Control",
        description: "Most checks don't need AI at all — saving you money at scale",
        icon: Zap,
        size: "small",
        highlight: "Efficient",
    },
    {
        title: "Both Platforms",
        description: "iPhone and Android from day one",
        icon: Smartphone,
        size: "small",
        highlight: "Cross-Platform",
    },
    {
        title: "Powered by Claude",
        description: "Personalized, empathetic messaging from Anthropic's AI — not generic push notifications",
        icon: Activity,
        size: "medium",
        highlight: "Truly Personal",
    },
    {
        title: "Meets You on Telegram",
        description: "Alerts arrive where you already are. Not buried in another app you'll forget to open.",
        icon: ArrowRight,
        size: "medium",
        highlight: "Proactive",
    },
    {
        title: "Encrypted End-to-End",
        description: "Military-grade encryption for the most intimate data you have",
        icon: Shield,
        size: "small",
        highlight: "Private",
    },
    {
        title: "Learns Over Months",
        description: "The longer you use it, the better it knows you. That's the moat.",
        icon: Heart,
        size: "small",
        highlight: "Compounding",
    },
];

export default function ProductPage() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Dark with full background image */}
            <section ref={heroRef} className="min-h-screen pt-24 pb-20 bg-surface-950 relative overflow-hidden">
                {/* Full background product image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/product/oneband-hero.png"
                        alt=""
                        fill
                        className="object-cover object-center opacity-50"
                        priority
                    />
                    {/* Gradient overlays for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-surface-950/40" />
                </div>

                <div className="section-container relative z-10">
                    <Breadcrumbs variant="dark" segments={[{ label: "Home", href: "/" }, { label: "Product" }]} />
                    <div className="flex items-center justify-center min-h-[70vh]">
                        <motion.div {...fadeInUp} className="text-center max-w-3xl">
                            <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                                <span className="text-emerald-gradient">ONESYNC</span>
                            </h1>
                            <p className="text-body-lg text-text-secondary font-extralight mb-8 leading-relaxed mx-auto">
                                Imagine waking up and getting a message that says: &ldquo;Your body recovered well.
                                Your sharpest window is 9-12am. That investor email you&apos;ve been drafting? Now is the time.&rdquo;
                                That&apos;s OneSync.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <motion.a
                                    href="mailto:01nesync@gmail.com"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                                >
                                    Get Early Access
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                                <motion.a
                                    href="/technology"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-8 py-4 text-text-primary font-light hover:text-emerald transition-colors"
                                >
                                    View Technology
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="FEATURES" position="top" direction="right" speed={0.4} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-20">
                        <SectionLabel>What It Does</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Not Another <span className="text-emerald-gradient">Health App</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                variants={staggerRevealItem}
                                className="group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                                        <feature.icon className="w-5 h-5 text-emerald" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-light text-text-dark mb-2 group-hover:text-emerald transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-text-dark-muted font-light leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Specifications Section - Bento Grid */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="SPECS" position="center" direction="left" speed={0.3} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-16">
                        <SectionLabel>Under the Hood</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Designed to <span className="text-emerald-gradient">Compound</span>
                        </h2>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
                    >
                        {bentoSpecs.map((spec, index) => (
                            <motion.div
                                key={spec.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className={`
                                    group relative overflow-hidden rounded-[20px]
                                    bg-white/60 backdrop-blur-[40px] backdrop-saturate-[180%]
                                    border border-black/[0.04]
                                    shadow-[0_2px_20px_rgba(0,0,0,0.04)]
                                    p-6 transition-all duration-300 ease-out
                                    hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                                    ${spec.size === 'large' ? 'col-span-2 row-span-2' : ''}
                                    ${spec.size === 'medium' ? 'col-span-2' : ''}
                                `}
                            >
                                {/* Light mode top highlight */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-[20px] bg-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className={`
                                        w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4
                                        group-hover:bg-emerald/10 transition-colors
                                        ${spec.size === 'large' ? 'w-14 h-14' : ''}
                                    `}>
                                        <spec.icon className={`text-emerald ${spec.size === 'large' ? 'w-7 h-7' : 'w-5 h-5'}`} />
                                    </div>

                                    {/* Highlight badge */}
                                    <span className="inline-flex self-start px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-medium mb-3">
                                        {spec.highlight}
                                    </span>

                                    {/* Title */}
                                    <h3 className={`
                                        font-light text-slate-900 mb-2 group-hover:text-emerald transition-colors
                                        ${spec.size === 'large' ? 'text-2xl' : 'text-lg'}
                                    `}>
                                        {spec.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`
                                        text-slate-600 font-light leading-relaxed mt-auto
                                        ${spec.size === 'large' ? 'text-base' : 'text-sm'}
                                    `}>
                                        {spec.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* App Integration Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...scrollReveal}>
                            <SectionLabel>The Roadmap</SectionLabel>
                            <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                                Where This <span className="text-emerald-gradient">Goes</span>
                            </h2>
                            <p className="text-body-lg text-text-dark-secondary font-light mb-10 leading-relaxed">
                                Today, OneSync knows your body. Tomorrow, it understands your rhythms, your triggers, your recovery patterns. Eventually, it becomes the intelligence layer for your entire life — starting from the only signal that can&apos;t be faked.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { icon: Smartphone, text: "Now: Your body — readiness, stress, recovery" },
                                    { icon: Zap, text: "Next: Your context — work, relationships, life" },
                                    { icon: Shield, text: "Then: Your OS — an agent that handles anything" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-emerald/10 flex items-center justify-center group-hover:bg-emerald/20 transition-colors">
                                            <item.icon className="w-4 h-4 text-emerald" />
                                        </div>
                                        <span className="text-text-dark-secondary font-light">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <AppPreview />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <BackgroundText text="JOIN US" position="center" direction="right" speed={0.3} />

                <div className="section-container text-center relative z-10">
                    <motion.div {...scrollReveal}>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                            Your Body Already <span className="text-emerald-gradient">Knows</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            Join the early access and be among the first people whose AI agent actually understands them.
                        </p>
                        <motion.a
                            href="mailto:01nesync@gmail.com"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                        >
                            Get Early Access
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
