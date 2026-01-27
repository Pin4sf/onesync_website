"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Activity,
    Brain,
    Zap,
    AlertCircle,
    Moon,
    Sun,
    Dumbbell,
    Signal,
    Battery,
    Bluetooth,
    Wifi,
    Cpu
} from "lucide-react";
import { systemStates, getSignalQualityLabel } from "@/lib/system-states";
import { getInsightsForState } from "@/lib/mock-data/insights";
import type { Insight } from "@/lib/types";

const modeIcons: Record<string, any> = {
    sleep: Moon,
    adl: Sun,
    training: Dumbbell,
};

const statusColors = {
    valid: "bg-emerald-500",
    limited: "bg-amber-500",
    none: "bg-red-500",
};

const statusTextColors = {
    valid: "text-emerald-500",
    limited: "text-amber-500",
    none: "text-red-500",
};

const signalQualityColors = {
    valid: "text-emerald-500",
    limited: "text-amber-500",
    none: "text-gray-600",
};

export default function DemoPage() {
    const [currentStateId, setCurrentStateId] = useState("ideal_sleep");
    const currentState = systemStates[currentStateId];
    const insights = getInsightsForState(currentStateId);

    const signalQualityLabel = getSignalQualityLabel(currentState.signalQuality);

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-obsidian-950">
            {/* Ambient Background Effects */}
            <div className="fixed top-0 left-1/4 w-1/2 h-[500px] bg-neon-cyan/5 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 right-0 w-1/3 h-[400px] bg-neon-purple/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">

                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-4 uppercase">
                            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Simulation</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light max-w-2xl">
                            Interactive demo of OneSync's <span className="text-white">conditional inference engine</span>.
                            Switch states to observe real-time adaptation.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-lg bg-obsidian-900 border border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Live Feed</span>
                        </div>
                        <div className="h-4 w-px bg-white/10"></div>
                        <div className="text-xs font-mono text-gray-500">LATENCY: 12ms</div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* State Selector - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-obsidian-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-1 overflow-hidden sticky top-24">
                            <div className="p-4 border-b border-white/5 bg-white/[0.02]">
                                <h3 className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">Select Scenario</h3>
                            </div>

                            <div className="p-2 space-y-2">
                                {Object.values(systemStates).map((state) => {
                                    const ModeIcon = modeIcons[state.mode];
                                    const isActive = currentStateId === state.id;
                                    return (
                                        <button
                                            key={state.id}
                                            onClick={() => setCurrentStateId(state.id)}
                                            className={`w-full text-left p-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${isActive
                                                    ? "bg-white/[0.08] border border-neon-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.05)]"
                                                    : "hover:bg-white/[0.04] border border-transparent"
                                                }`}
                                        >
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${isActive ? 'bg-neon-cyan' : 'bg-transparent group-hover:bg-white/10'}`}></div>

                                            <div className="flex items-start gap-4">
                                                <div className={`p-2 rounded-lg ${isActive ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/5 text-gray-400 group-hover:text-white'} transition-colors`}>
                                                    <ModeIcon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <div className={`text-sm font-bold mb-1 ${isActive ? "text-white" : "text-gray-300"}`}>
                                                        {state.name}
                                                    </div>
                                                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 bg-black/20 px-2 py-0.5 rounded inline-block">
                                                        {state.mode}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Main Dashboard */}
                    <div className="lg:col-span-3 space-y-6">

                        {/* Status Bar HUD */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Device", value: "Connected", icon: Bluetooth, color: "text-emerald-400" },
                                { label: "Battery", value: "87%", icon: Battery, color: "text-emerald-400" },
                                { label: "Signal", value: signalQualityLabel, icon: Signal, color: signalQualityLabel === "Excellent" ? "text-emerald-400" : signalQualityLabel === "Limited" ? "text-amber-400" : "text-red-400" },
                                { label: "Processor", value: "Normal", icon: Cpu, color: "text-neon-cyan" },
                            ].map((stat, i) => (
                                <div key={i} className="bg-obsidian-900/60 border border-white/10 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                        <div className="text-sm font-bold text-white">{stat.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Current State Description */}
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-obsidian-900 to-obsidian-950 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-32 h-32 rotate-12" />
                            </div>
                            <h2 className="text-xl font-display font-bold text-white mb-2 relative z-10">Scenario Context</h2>
                            <p className="text-gray-400 max-w-2xl relative z-10 font-light leading-relaxed">
                                {currentState.name}: {currentState.description}
                            </p>
                        </div>

                        {/* Detailed Signal Metrics */}
                        <div className="bg-obsidian-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Wifi className="w-4 h-4" /> Signal Telemetry
                            </h3>
                            <div className="grid grid-cols-3 gap-8">
                                {(["motion", "contact", "optical"] as const).map((signal) => (
                                    <div key={signal} className="text-center group">
                                        <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                                                <path className="text-obsidian-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                                                <path
                                                    className={`${currentState.signalQuality[signal] === 'valid' ? 'text-emerald-500' : currentState.signalQuality[signal] === 'limited' ? 'text-amber-500' : 'text-red-500'} transition-all duration-1000 ease-out`}
                                                    strokeDasharray={`${currentState.signalQuality[signal] === 'valid' ? '100' : currentState.signalQuality[signal] === 'limited' ? '60' : '20'}, 100`}
                                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                            <Activity className={`h-6 w-6 ${signalQualityColors[currentState.signalQuality[signal]]}`} />
                                        </div>
                                        <div className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-1">{signal}</div>
                                        <div className={`text-sm font-bold uppercase ${statusTextColors[currentState.signalQuality[signal]]}`}>
                                            {currentState.signalQuality[signal]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Insights Grid */}
                        <div>
                            <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2 mt-8">
                                <Brain className="w-4 h-4" /> Live Inference API
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {insights.map((insight) => (
                                    <InsightCard key={insight.id} insight={insight} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InsightCard({ insight }: { insight: Insight }) {
    const isNoInference = insight.status === "none";

    // Dynamic border color based on status
    const borderColor = isNoInference
        ? "border-red-500/20"
        : insight.status === "limited"
            ? "border-amber-500/20"
            : "border-emerald-500/20";

    const glowColor = isNoInference
        ? "shadow-red-500/5"
        : insight.status === "limited"
            ? "shadow-amber-500/5"
            : "shadow-emerald-500/5";

    return (
        <Card
            className={`border ${borderColor} bg-obsidian-900/60 backdrop-blur-xl relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${glowColor} ${isNoInference ? 'opacity-80' : 'opacity-100'}`}
        >
            {/* Status Indicator Line */}
            <div className={`absolute top-0 left-0 w-1 h-full ${statusColors[insight.status]}`}></div>

            {isNoInference && (
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            )}

            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isNoInference ? "bg-red-500/10 text-red-500" : insight.status === "limited" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}>
                            {isNoInference ? (
                                <AlertCircle className="h-5 w-5" />
                            ) : insight.status === "limited" ? (
                                <Zap className="h-5 w-5" />
                            ) : (
                                <Brain className="h-5 w-5" />
                            )}
                        </div>
                        <span className="font-bold text-white tracking-wide">{insight.name}</span>
                    </div>

                    <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border ${isNoInference
                            ? "border-red-500/30 text-red-500 bg-red-500/5"
                            : insight.status === "limited"
                                ? "border-amber-500/30 text-amber-500 bg-amber-500/5"
                                : "border-emerald-500/30 text-emerald-500 bg-emerald-500/5"
                        }`}>
                        {isNoInference
                            ? "NO SIGNAL"
                            : insight.status === "limited"
                                ? "LIMITED"
                                : "VALID"}
                    </span>
                </div>

                <div className="mb-4">
                    <span
                        className={`text-4xl font-mono font-bold tracking-tighter ${isNoInference ? "text-gray-600" : "text-white"
                            }`}
                    >
                        {insight.value ?? "---"}
                    </span>
                    {insight.unit && (
                        <span className="text-gray-500 ml-2 font-mono text-sm">{insight.unit}</span>
                    )}
                </div>

                <p className="text-sm text-gray-400 mb-6 font-light">{insight.description}</p>

                {!isNoInference && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                            <span>CONFIDENCE SCORE</span>
                            <span className={statusTextColors[insight.status]}>{insight.confidence}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-obsidian-950 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${statusColors[insight.status]} transition-all duration-1000 ease-out`}
                                style={{ width: `${insight.confidence}%` }}
                            />
                        </div>
                    </div>
                )}

                {isNoInference && (
                    <div className="mt-4 p-3 bg-red-500/5 border border-red-500/10 rounded-lg">
                        <div className="text-xs text-red-400 font-mono flex items-center gap-2">
                            <AlertCircle className="w-3 h-3" />
                            INSUFFICIENT DATA QUALITY
                        </div>
                    </div>
                )}

                {insight.modalities.length > 0 && !isNoInference && (
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                        {insight.modalities.map(mod => (
                            <span key={mod} className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                {mod.toUpperCase()}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
