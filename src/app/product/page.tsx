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

const features = [
    {
        icon: Activity,
        title: "24/7 Passive Sensing",
        description: "Continuous monitoring without any user intervention. The band works silently in the background.",
    },
    {
        icon: Battery,
        title: "7+ Day Battery Life",
        description: "Advanced power management means you charge less and track more.",
    },
    {
        icon: Droplets,
        title: "5 ATM Water Resistant",
        description: "Swim, shower, or sweat without worry. Rated for 50 meters.",
    },
    {
        icon: Brain,
        title: "Cognitive Load Detection",
        description: "Proprietary algorithms detect mental fatigue before you feel it.",
    },
    {
        icon: Heart,
        title: "Advanced HRV Analysis",
        description: "Advanced heart rate variability tracking for deep insights.",
    },
    {
        icon: Shield,
        title: "Privacy by Design",
        description: "All sensitive processing happens on-device. Your data stays yours.",
    },
];

const bentoSpecs = [
    {
        title: "Week-Long Battery",
        description: "Go days between charges with intelligent power management",
        icon: Battery,
        size: "large",
        highlight: "7+ Days",
    },
    {
        title: "Featherlight Design",
        description: "So light you'll forget you're wearing it",
        icon: Zap,
        size: "small",
        highlight: "Ultra-Light",
    },
    {
        title: "Swim-Ready",
        description: "Waterproof design for any activity",
        icon: Droplets,
        size: "small",
        highlight: "Waterproof",
    },
    {
        title: "Advanced Sensors",
        description: "Advanced biosensors for heart rate, temperature, and more",
        icon: Activity,
        size: "medium",
        highlight: "Pro Sensors",
    },
    {
        title: "Smart Processing",
        description: "On-device AI that learns and adapts to you",
        icon: Brain,
        size: "medium",
        highlight: "Edge AI",
    },
    {
        title: "Seamless Sync",
        description: "Instant connection to your devices",
        icon: Smartphone,
        size: "small",
        highlight: "Bluetooth",
    },
    {
        title: "Skin-Safe Materials",
        description: "Hypoallergenic silicone for all-day comfort",
        icon: Shield,
        size: "small",
        highlight: "Comfort Fit",
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
                    <div className="flex items-center justify-center min-h-[70vh]">
                        <motion.div {...fadeInUp} className="text-center max-w-3xl">
                            <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                                <span className="text-emerald-gradient">ONEBAND</span>
                            </h1>
                            <p className="text-body-lg text-text-secondary font-extralight mb-8 leading-relaxed mx-auto">
                                A wearable that learns your physiology, movement, and cognitive patterns —
                                then turns it into a continuous performance loop for readiness, recovery,
                                effort, and focus. Your personal performance model, always with you.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <motion.a
                                    href="mailto:01nesync@gmail.com"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                                >
                                    Request Demo
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
                        <SectionLabel>Features</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Built for the <span className="text-emerald-gradient">Future</span>
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
                        <SectionLabel>Specifications</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Built to <span className="text-emerald-gradient">Perform</span>
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
                            <SectionLabel>Companion App</SectionLabel>
                            <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                                Seamlessly <span className="text-emerald-gradient">Connected</span>
                            </h2>
                            <p className="text-body-lg text-text-dark-secondary font-light mb-10 leading-relaxed">
                                The OneSync mobile app provides a beautiful, intuitive interface
                                to your cognitive and physical wellness data.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { icon: Smartphone, text: "Available on iOS and Android" },
                                    { icon: Zap, text: "Real-time sync with OneBand" },
                                    { icon: Shield, text: "End-to-end encrypted" },
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
                            Ready for the <span className="text-emerald-gradient">Future</span>?
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            Join our early access program and be among the first to
                            experience cognitive wellness tracking.
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
