"use client";

import { AlertTriangle, Cpu, Server, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ParadigmShift() {
    return (
        <section className="py-32 bg-obsidian-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-neon-purple/5 to-transparent opacity-50 blur-[100px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="mb-24 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="type-display text-5xl md:text-6xl text-white mb-6"
                    >
                        The Old Model <br />
                        <span className="text-gray-600 line-through decoration-neon-cyan/50 decoration-4">Is Broken</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="type-body text-xl font-light text-gray-400 leading-relaxed"
                    >
                        Traditional wearables stream everything to the cloud. This creates <span className="text-neon-cyan">latency</span>, risks <span className="text-neon-cyan">privacy</span>, and wastes <span className="text-neon-cyan">bandwidth</span>. We inverted the architecture.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
                    {/* "Before" Card - The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 border border-white/5 bg-obsidian-900/50 rounded-2xl overflow-hidden hover:bg-obsidian-900 transition-colors"
                    >
                        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-signal-error/10 rounded-full flex items-center justify-center border border-signal-error/20 mb-8">
                                <AlertTriangle className="w-6 h-6 text-signal-error" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 type-display tracking-tight">Cloud-Dependent</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-signal-error mt-1">✕</span>
                                    <span className="text-gray-400 type-body text-sm">Raw data leaves the device immediately</span>
                                </li>
                                <li className="flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-signal-error mt-1">✕</span>
                                    <span className="text-gray-400 type-body text-sm">Latency makes real-time feedback impossible</span>
                                </li>
                                <li className="flex items-start gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="text-signal-error mt-1">✕</span>
                                    <span className="text-gray-400 type-body text-sm">&quot;Black box&quot; algorithms with no confidence score</span>
                                </li>
                            </ul>

                            {/* Graphic Visualization */}
                            <div className="h-48 border border-white/5 rounded-lg bg-black/80 p-6 flex items-center justify-between gap-4 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 shadow-inner">
                                <Smartphone className="w-8 h-8 text-gray-500" />
                                <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-500 to-signal-error relative overflow-hidden">
                                    <div className="absolute inset-0 bg-signal-error w-1/2 animate-[shimmer_2s_infinite]" />
                                </div>
                                <Server className="w-8 h-8 text-signal-error" />
                            </div>
                        </div>
                    </motion.div>

                    {/* "After" Card - The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-panel p-10 rounded-2xl relative group hover:border-neon-cyan/50 transition-colors"
                    >
                        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] group-hover:bg-neon-cyan/20 transition-all duration-700" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center border border-neon-cyan/20 mb-8 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                                <Zap className="w-6 h-6 text-neon-cyan" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-glow-cyan type-display tracking-tight">Edge-First Intelligence</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
                                    <span className="text-neon-cyan mt-1">✓</span>
                                    <span className="text-gray-300 type-body text-sm">Inference happens on the wrist</span>
                                </li>
                                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-75">
                                    <span className="text-neon-cyan mt-1">✓</span>
                                    <span className="text-gray-300 type-body text-sm">Zero-latency bio-feedback loops</span>
                                </li>
                                <li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-150">
                                    <span className="text-neon-cyan mt-1">✓</span>
                                    <span className="text-gray-300 type-body text-sm">Only significant events sync to cloud</span>
                                </li>
                            </ul>

                            {/* Graphic Visualization */}
                            <div className="h-48 border border-neon-cyan/20 rounded-lg bg-obsidian-950 p-6 flex items-center justify-center relative overflow-hidden group-hover:border-neon-cyan/50 transition-colors shadow-2xl">
                                <div className="absolute inset-0 bg-neon-cyan/5 group-hover:bg-neon-cyan/10 transition-colors" />
                                <div className="flex items-center gap-6 z-10">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-14 h-14 rounded-xl border border-neon-cyan/50 bg-obsidian-900 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-shadow">
                                            <Cpu className="w-7 h-7 text-neon-cyan" />
                                        </div>
                                        <span className="type-mono text-neon-cyan">EDGE_COMPUTE</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <div className="w-16 h-[1px] bg-neon-cyan/50" />
                                        <div className="w-16 h-[1px] bg-neon-cyan/30" />
                                        <div className="w-16 h-[1px] bg-neon-cyan/10" />
                                    </div>
                                    <div className="type-mono text-gray-600 border border-white/5 px-2 py-1 rounded bg-black">
                                        CLOUD (IDLE)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
