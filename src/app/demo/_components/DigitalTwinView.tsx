"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity,
    AlertTriangle,
    Brain,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { easeOutCubic } from "@/lib/motion";
import { type SystemState, type SystemStateId } from "./mock-data";

const ParticleBrain = dynamic(
    () =>
        import("./ParticleBrain").then((mod) => ({
            default: mod.ParticleBrain,
        })),
    { ssr: false }
);

interface DigitalTwinViewProps {
    state: SystemState;
    colors: {
        dot: string;
        border: string;
        bg: string;
        text: string;
    };
}

// ─── SVG color helpers ──────────────────────────────────────

const SVG_COLORS: Record<SystemStateId, string> = {
    active: "#0B5844",
    degraded: "#D97706",
    noInference: "#737373",
    recovery: "#2563EB",
};

// Brighter variant for glow effects
const SVG_GLOW_COLORS: Record<SystemStateId, string> = {
    active: "#2AA17A",
    degraded: "#F59E0B",
    noInference: "#A3A3A3",
    recovery: "#60A5FA",
};

const INSIGHT_STYLES: Record<SystemStateId, string> = {
    active: "border-emerald/20 text-emerald",
    degraded: "border-amber-500/20 text-amber-600",
    noInference: "border-red-500/20 text-red-600",
    recovery: "border-blue-600/20 text-blue-600",
};

const INSIGHT_BG: Record<SystemStateId, string> = {
    active: "bg-emerald/5",
    degraded: "bg-amber-500/5",
    noInference: "bg-red-500/5",
    recovery: "bg-blue-600/5",
};

const INSIGHT_DOT: Record<SystemStateId, string> = {
    active: "bg-emerald",
    degraded: "bg-amber-500",
    noInference: "bg-red-500",
    recovery: "bg-blue-600",
};

function getAggregateSignal(state: SystemState): number {
    const vals = Object.values(state.signalQuality);
    return Math.round(
        (vals.reduce((a, b) => a + b, 0) / vals.length) * 100
    );
}

// ─── Main component ─────────────────────────────────────────

export function DigitalTwinView({ state, colors }: DigitalTwinViewProps) {
    const stateId = state.id;
    const svgColor = SVG_COLORS[stateId];
    const glowColor = SVG_GLOW_COLORS[stateId];
    const signalPct = getAggregateSignal(state);
    const isActive = state.inference;
    const flowAnimClass = isActive ? "animate-data-flow" : "";
    const flowDuration = stateId === "degraded" ? "2.5s" : "2s";

    const metrics = useMemo(
        () => ({
            readiness: state.metrics
                ? `${state.metrics.readinessScore}`
                : "—",
            confidence: state.metrics ? `±${state.metrics.confidence}` : "",
            hrv: state.metrics ? `${state.metrics.hrv}` : "—",
            hrvUnit: state.metrics ? "ms" : "",
            stress: state.metrics
                ? `${(state.metrics.stressLoad * 100).toFixed(0)}%`
                : "—",
            load: state.metrics?.cognitiveLoad ?? "—",
        }),
        [state.metrics]
    );

    return (
        <div className="max-w-3xl mx-auto">
            {/* Dark monitoring container */}
            <div className="relative bg-surface-950 rounded-2xl border border-surface-700 overflow-hidden shadow-2xl shadow-black/20">
                {/* Noise overlay */}
                <div className="noise-overlay absolute inset-0 z-20 pointer-events-none" />

                {/* Status bar */}
                <div className="relative z-10 flex items-center justify-between px-5 py-3 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-text-muted" />
                        <div className="flex items-center gap-2">
                            <span
                                className={cn(
                                    "w-1.5 h-1.5 rounded-full",
                                    isActive ? "animate-pulse" : "",
                                    colors.dot
                                )}
                            />
                            <span
                                className={cn(
                                    "text-[11px] font-mono uppercase tracking-widest",
                                    colors.text
                                )}
                            >
                                {state.mode.replace(/_/g, " ")}
                            </span>
                        </div>
                    </div>
                    {isActive && state.metrics && (
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-display font-extralight text-text-primary tabular-nums">
                                {state.metrics.readinessScore}
                            </span>
                            <span className="text-[10px] font-mono text-text-muted">
                                ±{state.metrics.confidence}
                            </span>
                        </div>
                    )}
                </div>

                {/* Main visualization area */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                    {/* Radial glow behind the figure */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(ellipse 40% 50% at 50% 40%, ${svgColor}15, transparent 70%)`,
                            transition: "background 0.8s",
                        }}
                    />

                    {/* SVG Layer — silhouette + pathways */}
                    <svg
                        viewBox="0 0 400 480"
                        className="absolute inset-0 w-full h-full"
                        aria-hidden="true"
                    >
                        <defs>
                            <filter id="pathway-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="node-glow" x="-200%" y="-200%" width="500%" height="500%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <filter id="silhouette-glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Human silhouette — centered, bolder */}
                        <g
                            fill="none"
                            stroke={svgColor}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#silhouette-glow)"
                            style={{ transition: "stroke 0.6s, opacity 0.6s" }}
                        >
                            {/* Head */}
                            <ellipse
                                cx="200" cy="95" rx="30" ry="36"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.35 : 0.1}
                            />
                            {/* Inner head detail — brain area hint */}
                            <ellipse
                                cx="200" cy="88" rx="20" ry="18"
                                strokeWidth="0.8"
                                opacity={isActive ? 0.15 : 0.05}
                                strokeDasharray="3 5"
                            />
                            {/* Neck */}
                            <path
                                d="M192,131 L192,155 M208,131 L208,155"
                                strokeWidth="1.2"
                                opacity={isActive ? 0.3 : 0.08}
                            />
                            {/* Shoulders + collar */}
                            <path
                                d="M192,155 Q175,160 140,175"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.35 : 0.1}
                            />
                            <path
                                d="M208,155 Q225,160 260,175"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.35 : 0.1}
                            />
                            {/* Left arm to wrist */}
                            <path
                                d="M140,175 Q125,225 110,290"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.3 : 0.08}
                            />
                            {/* Right arm */}
                            <path
                                d="M260,175 Q275,225 290,290"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.3 : 0.08}
                            />
                            {/* Torso sides */}
                            <path
                                d="M160,165 Q155,230 150,330"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.3 : 0.08}
                            />
                            <path
                                d="M240,165 Q245,230 250,330"
                                strokeWidth="1.5"
                                opacity={isActive ? 0.3 : 0.08}
                            />
                            {/* Spine hint */}
                            <path
                                d="M200,155 L200,320"
                                strokeWidth="0.8"
                                opacity={isActive ? 0.12 : 0.04}
                                strokeDasharray="4 8"
                            />
                            {/* Rib cage hints */}
                            <path
                                d="M170,195 Q200,205 230,195"
                                strokeWidth="0.6"
                                opacity={isActive ? 0.1 : 0.03}
                            />
                            <path
                                d="M165,215 Q200,225 235,215"
                                strokeWidth="0.6"
                                opacity={isActive ? 0.1 : 0.03}
                            />
                            {/* Wrist band (left) */}
                            <rect
                                x="102" y="275" width="16" height="28" rx="4"
                                strokeWidth="2"
                                opacity={isActive ? 0.6 : 0.15}
                                stroke={glowColor}
                            />
                        </g>

                        {/* Data flow pathways */}
                        <g filter="url(#pathway-glow)">
                            {/* Wrist → Brain (primary) */}
                            <path
                                d="M110,290 Q120,240 140,175 Q170,140 200,95"
                                fill="none"
                                stroke={svgColor}
                                strokeWidth="1.5"
                                opacity={isActive ? 0.18 : 0.04}
                                style={{ transition: "stroke 0.6s, opacity 0.6s" }}
                            />
                            {isActive && (
                                <path
                                    d="M110,290 Q120,240 140,175 Q170,140 200,95"
                                    fill="none"
                                    stroke={glowColor}
                                    strokeWidth="2.5"
                                    strokeDasharray="8 14"
                                    opacity={stateId === "degraded" ? 0.35 : 0.55}
                                    className={flowAnimClass}
                                    style={{
                                        animationDuration: flowDuration,
                                        transition: "stroke 0.6s, opacity 0.6s",
                                    }}
                                />
                            )}

                            {/* Wrist → Heart */}
                            <path
                                d="M110,290 Q130,260 185,220"
                                fill="none"
                                stroke={svgColor}
                                strokeWidth="1.2"
                                opacity={isActive ? 0.12 : 0.03}
                                style={{ transition: "stroke 0.6s, opacity 0.6s" }}
                            />
                            {isActive && (
                                <path
                                    d="M110,290 Q130,260 185,220"
                                    fill="none"
                                    stroke={glowColor}
                                    strokeWidth="2"
                                    strokeDasharray="6 10"
                                    opacity={stateId === "degraded" ? 0.25 : 0.4}
                                    className={flowAnimClass}
                                    style={{
                                        animationDuration: flowDuration,
                                        transition: "stroke 0.6s, opacity 0.6s",
                                    }}
                                />
                            )}

                            {/* Right arm pathway (secondary, fainter) */}
                            <path
                                d="M290,290 Q280,240 260,175 Q230,140 200,95"
                                fill="none"
                                stroke={svgColor}
                                strokeWidth="1"
                                opacity={isActive ? 0.08 : 0.02}
                                strokeDasharray="2 6"
                                style={{ transition: "stroke 0.6s, opacity 0.6s" }}
                            />
                        </g>

                        {/* Sensor nodes with strong glow */}
                        <g filter="url(#node-glow)">
                            {/* Wrist node */}
                            <circle
                                cx="110" cy="290" r="6"
                                fill={glowColor}
                                opacity={isActive ? 0.8 : 0.12}
                                style={{ transition: "fill 0.6s, opacity 0.6s" }}
                            />
                            {/* Heart node */}
                            <circle
                                cx="190" cy="218" r="5"
                                fill={glowColor}
                                opacity={isActive ? 0.55 : 0.08}
                                style={{ transition: "fill 0.6s, opacity 0.6s" }}
                            />
                            {/* Brain node */}
                            <circle
                                cx="200" cy="88" r="7"
                                fill={glowColor}
                                opacity={isActive ? 0.65 : 0.08}
                                style={{ transition: "fill 0.6s, opacity 0.6s" }}
                            />
                        </g>
                    </svg>

                    {/* 3D Particle Brain — centered on head */}
                    <ParticleBrain
                        state={stateId}
                        className="absolute pointer-events-none z-10"
                        style={{
                            top: "0%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "clamp(220px, 55%, 340px)",
                            height: "42%",
                        }}
                    />

                    {/* Floating metric overlays (desktop) */}
                    <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
                        {/* Brain area — readiness */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="absolute glass-dark px-3.5 py-2.5 rounded-lg border border-white/5"
                            style={{ top: "10%", right: "8%" }}
                        >
                            <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                                Readiness
                            </p>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl font-display font-extralight text-text-primary tabular-nums">
                                    {metrics.readiness}
                                </span>
                                {metrics.confidence && (
                                    <span className="text-[9px] font-mono text-text-muted">
                                        {metrics.confidence}
                                    </span>
                                )}
                            </div>
                        </motion.div>

                        {/* Heart area — HRV */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.4 }}
                            className="absolute glass-dark px-3.5 py-2.5 rounded-lg border border-white/5"
                            style={{ top: "38%", left: "6%" }}
                        >
                            <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                                HRV
                            </p>
                            <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl font-display font-extralight text-text-primary tabular-nums">
                                    {metrics.hrv}
                                </span>
                                {metrics.hrvUnit && (
                                    <span className="text-[9px] font-mono text-text-muted">
                                        {metrics.hrvUnit}
                                    </span>
                                )}
                            </div>
                        </motion.div>

                        {/* Wrist area — signal + stress */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35, duration: 0.4 }}
                            className="absolute glass-dark px-3.5 py-2.5 rounded-lg border border-white/5"
                            style={{ bottom: "16%", left: "6%" }}
                        >
                            <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                                Signal
                            </p>
                            <span className="text-2xl font-display font-extralight text-text-primary tabular-nums">
                                {signalPct}%
                            </span>
                        </motion.div>

                        {/* Cognitive load — right side */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="absolute glass-dark px-3.5 py-2.5 rounded-lg border border-white/5"
                            style={{ top: "55%", right: "8%" }}
                        >
                            <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                                Cognitive Load
                            </p>
                            <span className="text-base font-display font-extralight text-text-primary">
                                {metrics.load}
                            </span>
                        </motion.div>
                    </div>

                    {/* NO_INFERENCE center message */}
                    {!isActive && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.5,
                                ease: easeOutCubic,
                            }}
                            className="absolute inset-0 z-20 flex items-center justify-center"
                        >
                            <div className="text-center px-6 py-5 rounded-2xl bg-surface-950/85 backdrop-blur-sm border border-red-500/20 max-w-xs">
                                <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-3">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                </div>
                                <h4 className="font-display text-base text-text-primary font-light mb-2">
                                    No Inference Available
                                </h4>
                                <p className="text-xs text-text-muted font-light leading-relaxed">
                                    {state.reason}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Mobile metrics strip */}
                <div className="sm:hidden relative z-10 flex items-center justify-around px-4 py-3 border-t border-white/5">
                    <div className="text-center">
                        <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                            Readiness
                        </p>
                        <span className="text-base font-display font-extralight text-text-primary tabular-nums">
                            {metrics.readiness}
                        </span>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div className="text-center">
                        <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                            HRV
                        </p>
                        <span className="text-base font-display font-extralight text-text-primary tabular-nums">
                            {metrics.hrv}
                            {metrics.hrvUnit && (
                                <span className="text-[9px] font-mono text-text-muted ml-0.5">
                                    {metrics.hrvUnit}
                                </span>
                            )}
                        </span>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div className="text-center">
                        <p className="text-[9px] font-mono uppercase tracking-widest text-text-muted mb-1">
                            Signal
                        </p>
                        <span className="text-base font-display font-extralight text-text-primary tabular-nums">
                            {signalPct}%
                        </span>
                    </div>
                </div>
            </div>

            {/* AI Recommendations Panel */}
            <div className="mt-5">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stateId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: easeOutCubic }}
                        className={cn(
                            "rounded-xl border overflow-hidden",
                            INSIGHT_STYLES[stateId]
                        )}
                    >
                        {/* Summary header */}
                        <div
                            className={cn(
                                "flex items-center gap-3 px-4 py-3",
                                INSIGHT_BG[stateId]
                            )}
                        >
                            <Brain className="w-4 h-4 shrink-0" />
                            <span className="text-[10px] font-mono uppercase tracking-wider opacity-60 shrink-0">
                                AI Analysis
                            </span>
                            <span className="text-[10px] opacity-30">
                                &bull;
                            </span>
                            <p className="text-sm font-light">
                                {state.aiInsights.summary}
                            </p>
                        </div>

                        {/* Recommendations */}
                        <div className="px-4 py-3 space-y-2.5 bg-white">
                            {state.aiInsights.recommendations.map(
                                (rec, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.15 + i * 0.08,
                                            duration: 0.3,
                                        }}
                                        className="flex items-start gap-2.5"
                                    >
                                        <div
                                            className={cn(
                                                "w-1 h-1 rounded-full mt-[7px] shrink-0",
                                                INSIGHT_DOT[stateId]
                                            )}
                                        />
                                        <p className="text-sm text-text-dark-secondary font-light leading-relaxed">
                                            {rec}
                                        </p>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Competitor Comparison (NO_INFERENCE only) */}
            {!isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.4,
                        ease: easeOutCubic,
                    }}
                    className="grid grid-cols-2 gap-4 mt-5"
                >
                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/50">
                        <div className="flex items-center gap-2 mb-3">
                            <XCircle className="w-3.5 h-3.5 text-red-500" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-red-600">
                                Typical Wearable
                            </span>
                        </div>
                        <p className="text-xl font-display font-extralight text-red-600 mb-1">
                            68
                            <span className="text-[10px] font-light ml-1 text-red-400">
                                (fabricated)
                            </span>
                        </p>
                        <p className="text-[11px] text-red-500 font-light leading-relaxed">
                            Shows a number regardless of signal quality
                        </p>
                    </div>
                    <div className="p-4 rounded-xl border border-emerald/20 bg-emerald/5">
                        <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald">
                                OneSync
                            </span>
                        </div>
                        <p className="text-xl font-display font-extralight text-text-dark mb-1">
                            —
                            <span className="text-[10px] font-light ml-1 text-text-dark-muted">
                                (no inference)
                            </span>
                        </p>
                        <p className="text-[11px] text-emerald font-light leading-relaxed">
                            Maintains data integrity over availability
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Screen reader description */}
            <div className="sr-only" aria-live="polite">
                System is in {state.mode.replace(/_/g, " ")} state.
                {state.inference && state.metrics
                    ? `Readiness score: ${state.metrics.readinessScore} plus or minus ${state.metrics.confidence}. Heart rate variability: ${state.metrics.hrv} milliseconds. Signal quality: ${signalPct} percent.`
                    : "No inference available. Signal quality is too low to produce reliable metrics."}
                AI analysis: {state.aiInsights.summary}
            </div>
        </div>
    );
}
