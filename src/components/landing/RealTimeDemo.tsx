"use client";

import { Brain, Activity, Cpu, Wifi } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function RealTimeDemo() {
    return (
        <section className="py-32 bg-obsidian-950 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 text-neon-cyan border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 rounded-full type-mono mb-6"
                    >
                        <span className="w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_8px_#66FCF1] animate-pulse"></span>
                        <span>Live System Demo</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="type-display text-5xl md:text-7xl text-white mb-4"
                    >
                        Intelligence in Real-<span className="text-neon-cyan text-glow-cyan">Time</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="type-mono text-gray-500 tracking-[0.4em]"
                    >
                        Multi-Panel Insight Dashboard v4.2
                    </motion.p>
                </div>

                {/* Dashboard Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-obsidian-900 border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden group"
                >
                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-cyan/50 blur-[20px] group-hover:bg-neon-cyan/80 transition-colors duration-500" />

                    {/* Top Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 pb-6 border-b border-white/5 gap-4">
                        <div className="flex space-x-1">
                            {['SLEEP', 'ACTIVITY', 'TRAINING'].map((mode, i) => (
                                <button
                                    key={mode}
                                    className={cn(
                                        "px-6 py-2 text-[10px] font-mono tracking-widest border transition-all duration-300 uppercase",
                                        i === 1
                                            ? "bg-neon-cyan text-obsidian-950 border-neon-cyan font-bold shadow-[0_0_15px_rgba(102,252,241,0.3)]"
                                            : "border-white/10 text-gray-500 hover:text-white hover:border-white/30"
                                    )}
                                >
                                    0{i + 1}: {mode}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase">
                            <div className="flex items-center gap-2">
                                <Wifi className="w-3 h-3 text-signal-success animate-pulse" />
                                <span>LINK_ESTABLISHED</span>
                            </div>
                            <span>BATTERY: 98%</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Main Metric - Heart Rate */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                            <div className="glass-panel p-8 rounded flex flex-col justify-between bg-obsidian-800/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="flex flex-col">
                                        <span className="type-mono text-gray-400 mb-1">
                                            Biometric_Source
                                        </span>
                                        <span className="text-xs font-mono text-neon-cyan font-bold">
                                            HEART_RATE_PPG
                                        </span>
                                    </div>
                                    <span className="type-mono text-signal-success animate-pulse">
                                        ● LIVE
                                    </span>
                                </div>
                                <div className="py-12 flex flex-col items-center relative z-10">
                                    <div className="text-[120px] font-display font-bold leading-none tracking-tighter text-white text-glow-cyan tabular-nums">
                                        75
                                    </div>
                                    <div className="type-mono text-gray-500 mt-2 text-[10px]">
                                        Beats_Per_Min
                                    </div>
                                </div>
                                {/* Waveform Visual */}
                                <div className="h-16 w-full flex items-end space-x-1 opacity-60 relative z-10">
                                    {[30, 45, 35, 60, 40, 50, 30, 70, 40, 50, 45, 60, 50, 80, 40, 50, 30, 45, 35, 60].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: "20%" }}
                                            animate={{ height: [`${h}%`, `${h * 0.8}%`, `${h}%`] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
                                            className="flex-1 bg-neon-cyan/40 rounded-t-sm hover:bg-neon-cyan hover:shadow-[0_0_10px_#66FCF1] transition-colors"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                {/* Cognitive Load */}
                                <div className="glass-panel p-6 rounded bg-obsidian-800/50 hover:border-neon-purple/30 transition-colors duration-300">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Brain className="w-4 h-4 text-gray-400" />
                                        <span className="type-mono text-gray-400">
                                            Cognitive Load
                                        </span>
                                    </div>
                                    <div className="flex items-baseline justify-between mb-3">
                                        <span className="text-4xl type-display italic text-white text-glow-purple">
                                            MED
                                        </span>
                                        <span className="text-[10px] font-mono text-neon-purple font-bold">
                                            LVL_02
                                        </span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "33%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-neon-purple shadow-[0_0_10px_#8B5CF6]"
                                        />
                                        <div className="h-full bg-neon-purple/20 w-1/6"></div>
                                    </div>
                                </div>

                                {/* HRV */}
                                <div className="glass-panel p-6 rounded bg-obsidian-800/50 hover:border-signal-success/30 transition-colors duration-300">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Activity className="w-4 h-4 text-gray-400" />
                                        <span className="type-mono text-gray-400">
                                            HRV Status
                                        </span>
                                    </div>
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-5xl font-display text-white tracking-tighter tabular-nums">
                                            54
                                        </span>
                                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                            ms
                                        </span>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[9px] font-mono uppercase text-gray-600">
                                        <span>Delta: +2.1</span>
                                        <span className="text-signal-success font-bold">Stable</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* System Status Panel */}
                        <div className="space-y-6">
                            <div className="glass-panel p-6 rounded h-full flex flex-col bg-obsidian-800/30 border-l-2 border-l-neon-cyan/20">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                    <div className="flex items-center space-x-2">
                                        <Cpu className="w-4 h-4 text-gray-400" />
                                        <span className="type-mono text-white">
                                            System_State
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow space-y-8">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="type-mono text-gray-400">
                                                Inference Confidence
                                            </span>
                                            <span className="text-xs font-mono text-neon-cyan font-bold">
                                                94.8%
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "94.8%" }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-neon-cyan rounded-full shadow-[0_0_10px_#66FCF1]"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-4 border border-neon-cyan/20 bg-neon-cyan/5 rounded relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-neon-cyan" />
                                        <span className="type-mono text-neon-cyan mb-2 block font-bold">
                                            Log_Output:
                                        </span>
                                        <p className="text-[10px] font-mono text-gray-400 leading-relaxed italic typewriter-text">
                                            &quot;Inference model synced. Edge processing active. All sensors nominal.&quot;
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 text-center border-t border-white/5 pt-4">
                                    <span className="type-mono text-gray-600">
                                        ID: 0x93FF_AE12
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
