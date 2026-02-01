"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { ModelViewer } from "@/components/ui/ModelViewer";
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
        description: "Medical-grade heart rate variability tracking for deep insights.",
    },
    {
        icon: Shield,
        title: "Privacy by Design",
        description: "All sensitive processing happens on-device. Your data stays yours.",
    },
];

const specs = [
    { label: "Sensors", value: "PPG, IMU, Temperature, EDA" },
    { label: "Processor", value: "ARM Cortex-M4F @ 64MHz" },
    { label: "Memory", value: "256KB RAM, 1MB Flash" },
    { label: "Battery", value: "7+ days typical use" },
    { label: "Water Resistance", value: "5 ATM (50m)" },
    { label: "Connectivity", value: "Bluetooth 5.0 LE" },
    { label: "Weight", value: "< 30g" },
    { label: "Band Material", value: "Hypoallergenic silicone" },
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
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
                        <motion.div {...fadeInUp}>
                            <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                                <span className="text-emerald-gradient">ONEBAND</span>
                            </h1>
                            <p className="text-body-lg text-text-secondary font-extralight mb-8 leading-relaxed max-w-lg">
                                A wearable designed to disappear until you need it.
                                Combining medical-grade sensors with edge computing
                                to deliver cognitive insights that were previously impossible.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="mailto:contact@onesync.io"
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

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            {/* Subtle glow effect behind the model */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-80 h-80 bg-emerald/20 rounded-full blur-[100px]" />
                            </div>

                            {/* 3D Model with dramatic rim lighting */}
                            <ModelViewer
                                modelUrl="/3d/object_0.glb"
                                className="w-full h-[500px]"
                                autoRotate={true}
                                dramaticLighting={true}
                            />
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

            {/* Specifications Section - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="SPECS" position="center" direction="left" speed={0.3} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-20">
                        <SectionLabel>Specifications</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Technical <span className="text-emerald-gradient">Details</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="space-y-0">
                            {specs.map((spec, index) => (
                                <div
                                    key={spec.label}
                                    className="flex justify-between items-center py-5 border-b border-light-border-subtle last:border-0 group"
                                >
                                    <span className="text-text-dark-muted font-light">{spec.label}</span>
                                    <span className="text-text-dark font-light group-hover:text-emerald transition-colors">
                                        {spec.value}
                                    </span>
                                </div>
                            ))}
                        </div>
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
                            href="mailto:contact@onesync.io"
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
