"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { Cpu, Wifi, Shield, Zap, Server, Code, Layers, FileJson, Activity, Lock, ArrowRight } from "lucide-react";

const techStack = [
    {
        category: "Edge Computing",
        icon: Cpu,
        items: [
            {
                name: "On-Device ML",
                description: "TinyML models optimized for low-power ARM processors, enabling real-time feature extraction.",
                icon: Layers,
            },
            {
                name: "Signal Processing",
                description: "Kalman filtering and adaptive algorithms for motion artifact rejection.",
                icon: Activity,
            },
            {
                name: "Feature Extraction",
                description: "HRV computation, sleep classification, and activity recognition all happen locally.",
                icon: FileJson,
            },
        ],
    },
    {
        category: "Connectivity",
        icon: Wifi,
        items: [
            {
                name: "BLE 5.0",
                description: "Low-energy Bluetooth for efficient, secure communication with mobile devices.",
                icon: Wifi,
            },
            {
                name: "Selective Sync",
                description: "Only consented feature-level data is transmitted, never raw biosignals.",
                icon: Server,
            },
            {
                name: "Offline First",
                description: "Full functionality without connectivity. Data syncs when available.",
                icon: Shield,
            },
        ],
    },
    {
        category: "Security",
        icon: Shield,
        items: [
            {
                name: "End-to-End Encryption",
                description: "AES-256 encryption from device to cloud. Keys never leave your control.",
                icon: Lock,
            },
            {
                name: "Secure Enclave",
                description: "Sensitive computations isolated in hardware-protected memory regions.",
                icon: Shield,
            },
            {
                name: "Audit Logging",
                description: "Immutable logs of all data access for compliance and transparency.",
                icon: FileJson,
            },
        ],
    },
];

const specifications = [
    { label: "Processor", value: "High-Performance ARM Core", description: "Optimized for on-device AI", icon: Cpu },
    { label: "Memory", value: "Ample Storage", description: "Weeks of data on-device", icon: Server },
    { label: "Sensors", value: "Medical-Grade Array", description: "Heart, motion, temperature & more", icon: Activity },
    { label: "Battery Life", value: "Week-Long Power", description: "Go days between charges", icon: Zap },
    { label: "Water Resistance", value: "Fully Waterproof", description: "Swim, shower, sweat", icon: Shield },
    { label: "Connectivity", value: "Instant Sync", description: "Latest Bluetooth technology", icon: Wifi },
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
                    <motion.div {...scrollReveal}>
                        <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                            Core <span className="text-emerald-gradient">Technology</span>
                        </h1>
                        <p className="text-body-lg md:text-xl text-text-secondary font-extralight max-w-2xl leading-relaxed">
                            A deep dive into the engineering choices that make OneSync possible.
                            Built for reliability, privacy, and transparency.
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
                        <SectionLabel>Specifications</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Built to <span className="text-emerald-gradient">Perform</span>
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
                                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-emerald/20"
                            >
                                {/* Liquid glass reflection gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
                                {/* Bottom edge glow */}
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-emerald/20 transition-colors border border-white/10">
                                        <spec.icon className="w-5 h-5 text-emerald" />
                                    </div>
                                    <p className="text-xs text-emerald font-medium uppercase tracking-wider mb-2">
                                        {spec.label}
                                    </p>
                                    <p className="text-xl text-slate-800 font-light mb-2 group-hover:text-emerald transition-colors">
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
                        <SectionLabel>Philosophy</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Why We <span className="text-emerald-gradient">Build This Way</span>
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
                                    Why Edge-First?
                                </h3>
                            </div>
                            <p className="text-text-dark-secondary font-light leading-relaxed">
                                Moving computation to the edge isn't just about privacy — it's
                                about creating a more reliable, responsive system. When your
                                insights don't depend on connectivity, they're always available
                                when you need them. This architecture also enables features that
                                would be impractical with cloud-only processing.
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
                                    Designed for Extensibility
                                </h3>
                            </div>
                            <p className="text-text-dark-secondary font-light leading-relaxed">
                                The OneSync architecture is built to evolve. New sensor
                                modalities, updated ML models, and enhanced features can be
                                deployed via secure OTA updates. The system is designed to grow
                                with advances in wearable computing while maintaining backward
                                compatibility and data integrity.
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
                            See It In <span className="text-emerald-gradient">Action</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            Explore the product that brings this technology to life.
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
