"use client";

import { motion } from "framer-motion";

export function ArchitectureFlow() {
    return (
        <section className="py-32 bg-obsidian-950 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="type-mono mb-4 text-neon-cyan"
                    >
                        Process_Architecture_Flow
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="type-display text-4xl md:text-5xl text-white"
                    >
                        How OneSync Works
                    </motion.h3>
                </div>

                <div className="relative">
                    {/* Connecting Line - Animated */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 overflow-hidden">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "linear" }}
                            className="w-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-50 absolute top-0"
                        />
                    </div>

                    <div className="space-y-24">
                        {[
                            {
                                id: "01",
                                title: "Senses & Computes",
                                badge: "EDGE_ONLY",
                                desc: "Raw biosignals are captured and processed on-device. Critical features are computed at the edge. Raw data never leaves your wrist.",
                                align: "right"
                            },
                            {
                                id: "02",
                                title: "Enforces Consent",
                                badge: "USER_AUTH",
                                desc: "The mobile app manages what data syncs and when. You explicitly consent to each sharing decision. Encryption protects data in transit.",
                                align: "left"
                            },
                            {
                                id: "03",
                                title: "Aggregates Features",
                                badge: "ANALYTICS_X",
                                desc: "Only computed features reach the cloud, never raw biometrics. This enables trend analysis while preserving your privacy boundary.",
                                align: "right"
                            },
                            {
                                id: "04",
                                title: "Verifies Confidence",
                                badge: "HONEST_OUTPUT",
                                desc: "Every insight comes with a confidence level. When data is insufficient, the system reports 'NO INFERENCE' rather than guessing.",
                                align: "left"
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-center ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* Content Side */}
                                <div className="flex-1 w-full md:text-right pl-16 md:pl-0">
                                    <div className={`p-8 glass-panel rounded-xl border-l-2 md:border-l border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors group ${step.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`flex flex-col gap-4 ${step.align === 'left' ? 'md:items-end' : 'md:items-start'}`}>
                                            <span className="type-mono text-neon-cyan border border-neon-cyan/20 px-2 py-0.5 w-fit group-hover:bg-neon-cyan/10 transition-colors">{step.badge}</span>
                                            <h3 className="text-2xl font-bold font-condensed uppercase text-white tracking-tighter group-hover:text-neon-cyan transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="type-body text-sm font-light text-gray-400 leading-relaxed max-w-md group-hover:text-gray-300">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-obsidian-950 border border-neon-cyan/30 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(102,252,241,0.2)]">
                                    <div className="w-10 h-10 bg-neon-cyan/10 rounded-full flex items-center justify-center border border-neon-cyan/50">
                                        <span className="font-mono font-bold text-neon-cyan text-sm">{step.id}</span>
                                    </div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
