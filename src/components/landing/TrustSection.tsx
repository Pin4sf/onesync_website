"use client";

import { Shield, Brain, Cpu, User, Fingerprint } from 'lucide-react';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function TrustSection() {
    return (
        <section className="py-32 bg-obsidian-950 relative">
            {/* Background noise */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="mb-20 flex justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="heading-xl text-4xl mb-4 text-white">
                            Built for Trust
                        </h2>
                        <p className="description text-gray-400 max-w-md">
                            Privacy isn't a toggle. It's the foundational architecture of the entire system.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]"
                >

                    {/* Large Card 1 - Privacy */}
                    <motion.div
                        variants={item}
                        className="glass-panel p-8 md:col-span-2 md:row-span-1 border-t-4 border-t-neon-cyan relative group overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(102,252,241,0.1)] hover:border-neon-cyan/50"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-neon-cyan/5 rounded-full blur-[80px] group-hover:bg-neon-cyan/10 transition-colors duration-700" />
                        <div className="absolute top-4 right-4 text-neon-cyan opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">
                            <Shield className="w-12 h-12" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 font-condensed uppercase tracking-tight group-hover:text-neon-cyan transition-colors">Trust by Design</h3>
                                <p className="text-gray-400 text-sm max-w-md leading-relaxed group-hover:text-gray-300 transition-colors">
                                    Privacy isn't an afterthought — it's built into every layer. Raw biometrics never leave your device.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <span className="mono-label text-neon-cyan border border-neon-cyan/20 px-2 py-1 rounded bg-neon-cyan/5">SEC_VERIFIED_v4</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/20 to-transparent" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Tall Card - Edge Compute */}
                    <motion.div
                        variants={item}
                        className="glass-panel p-8 md:col-span-1 md:row-span-2 border-t-4 border-t-neon-purple relative group overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(191,0,255,0.15)] flex flex-col justify-between"
                    >
                        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-neon-purple/10 rounded-full blur-[50px] group-hover:bg-neon-purple/20 transition-all duration-700" />

                        <div>
                            <Cpu className="w-8 h-8 text-neon-purple mb-6 group-hover:text-white transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-2 font-condensed uppercase tracking-tight group-hover:text-neon-purple transition-colors">Edge-First Computation</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300">
                                Critical processing happens on the OneBand itself for faster insights and reduced latency.
                            </p>
                        </div>

                        {/* Visualizer */}
                        <div className="h-32 w-full bg-black/40 rounded border border-white/5 p-4 relative overflow-hidden group-hover:border-neon-purple/30 transition-colors">
                            <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1 bg-neon-purple animate-pulse"
                                        style={{
                                            // Deterministic random-like values for hydration stability
                                            height: `${[45, 70, 30, 85, 50, 65][i]}%`,
                                            animationDelay: `${i * 0.1}s`,
                                            animationDuration: '1s'
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-2 right-2 text-[8px] font-mono text-neon-purple animate-pulse">PROCESSING...</div>
                        </div>
                    </motion.div>

                    {/* Card 3 - Conditional */}
                    <motion.div
                        variants={item}
                        className="glass-panel p-8 md:col-span-1 md:row-span-1 border-t-4 border-t-emerald-500 relative group overflow-hidden transition-all duration-500 hover:bg-white/[0.02]"
                    >
                        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500" />
                        <Brain className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white mb-2 font-condensed uppercase tracking-tight">Uncertainty Aware</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            When signal quality drops, the system says 'NO INFERENCE' instead of guessing.
                        </p>
                    </motion.div>

                    {/* Card 4 - User Control */}
                    <motion.div
                        variants={item}
                        className="glass-panel p-8 md:col-span-1 md:row-span-1 border-t-4 border-t-white relative group overflow-hidden transition-all duration-500 hover:bg-white/[0.02]"
                    >
                        <User className="w-8 h-8 text-white mb-4 group-hover:text-neon-cyan transition-colors" />
                        <h3 className="text-xl font-bold text-white mb-2 font-condensed uppercase tracking-tight">Athlete Controlled</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            You decide what's shared. Consent is explicit, reversible, and auditable.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
