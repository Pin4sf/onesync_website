"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Activity, Zap, Shield, Radio, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-neon-cyan/20 rounded-full blur-[150px] mix-blend-screen animate-float pointer-events-none" />

            {/* Background Grid - managed via CSS now for better performance */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">

                {/* Left Content - 7 cols */}
                <div className="lg:col-span-7 space-y-12">

                    {/* System Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-neon-purple/50 transition-colors duration-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                        </span>
                        <span className="text-xs font-mono text-gray-300 uppercase tracking-[0.2em] font-bold">
                            System Online <span className="text-white/20 mx-2">|</span> <span className="text-neon-cyan">v2.4.0</span>
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="hero-text text-6xl md:text-8xl lg:text-[110px] text-white leading-[0.85] tracking-tighter"
                        >
                            INTELLIGENCE
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="hero-text text-6xl md:text-8xl lg:text-[110px] text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple leading-[0.85] tracking-tighter"
                        >
                            AT THE EDGE
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed border-l-2 border-neon-cyan/30 pl-6"
                    >
                        OneSync pushes biometric inference from the cloud <br className="hidden md:block" /> to the device.
                        <span className="text-white font-medium"> Zero latency. Total privacy.</span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-5 pt-6"
                    >
                        <Link
                            href="/demo"
                            className="group relative px-10 py-5 bg-white text-black font-bold font-mono uppercase tracking-widest text-sm hover:bg-neon-cyan transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden clip-path-slant shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                            style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
                        >
                            <span className="relative z-10">Initialize Demo</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </Link>

                        <Link
                            href="/system"
                            className="group px-10 py-5 border border-white/20 text-white font-mono uppercase tracking-widest text-sm hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
                        >
                            <Terminal className="w-4 h-4 text-gray-500 group-hover:text-neon-cyan transition-colors" />
                            System Architecture
                        </Link>
                    </motion.div>

                    {/* Metrics/HUD */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
                    >
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">0ms</div>
                            <div className="mono-label flex items-center gap-2">
                                <Zap className="w-3 h-3 text-neon-cyan" /> Latency
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                            <div className="mono-label flex items-center gap-2">
                                <Shield className="w-3 h-3 text-neon-purple" /> Privacy
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">24/7</div>
                            <div className="mono-label flex items-center gap-2">
                                <Activity className="w-3 h-3 text-emerald-400" /> Uptime
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual - Product Showcase */}
                <div className="lg:col-span-5 relative h-[600px] w-full flex items-center justify-center lg:justify-end">

                    {/* Visual Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative w-full h-full flex items-center justify-center perspective-1000"
                    >
                        {/* Glow Behind Product */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-[120px] animate-pulse-slow" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon-cyan/10 rounded-full blur-[90px]" />

                        {/* Floating Product Image */}
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
                            className="relative z-20 w-[450px] md:w-[600px] drop-shadow-2xl"
                        >
                            <img
                                src="/smart-ring.png"
                                alt="OneSync Smart Ring"
                                className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(191,0,255,0.4)]"
                            />
                            {/* Floor Reflection */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-neon-purple/20 blur-xl rounded-[100%] skew-x-12 opacity-50" />
                        </motion.div>

                        {/* Floating HUD Card */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="absolute bottom-12 left-4 lg:left-0 glass-panel p-6 rounded-lg border-t-2 border-t-neon-purple w-64 z-30 shadow-[0_0_30px_rgba(191,0,255,0.15)]"
                        >
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                                <span className="mono-label text-neon-purple">Live Inference</span>
                                <div className="animate-pulse w-2 h-2 bg-neon-purple rounded-full shadow-[0_0_10px_#BF00FF]" />
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                        <span>SIGNAL_QUALITY</span>
                                        <span className="text-white">98.4%</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 overflow-hidden">
                                        <div className="h-full bg-neon-cyan w-[98%] animate-pulse" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                        <span>CONFIDENCE</span>
                                        <span className="text-white">HIGH</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/10 overflow-hidden">
                                        <div className="h-full bg-neon-purple w-[92%]" />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="text-[10px] font-mono text-gray-500 typewriter-text">
                                        &gt; PROCESSING_STREAM...
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            >
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Scroll to Initiate</span>
                <div className="w-px h-12 bg-gradient-to-b from-neon-cyan via-transparent to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
