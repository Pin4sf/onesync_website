"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Heart, TrendingUp, Moon, Zap } from "lucide-react";

interface AppScreenPlaceholderProps {
    variant: "neural" | "analytics" | "body";
    className?: string;
}

/**
 * Placeholder app screens - pure CSS/SVG, no external assets needed.
 * Replace with actual screenshots once available.
 */
export function AppScreenPlaceholder({ variant, className = "" }: AppScreenPlaceholderProps) {
    const screens = {
        neural: {
            title: "Neural Analysis",
            icon: Brain,
            color: "#187E5F",
            metrics: [
                { label: "Cognitive Load", value: "42%", trend: "down" },
                { label: "Focus Score", value: "87", trend: "up" },
                { label: "Mental Clarity", value: "High", trend: "stable" },
            ],
        },
        analytics: {
            title: "Analytics",
            icon: TrendingUp,
            color: "#00D46E",
            metrics: [
                { label: "Weekly Average", value: "72", trend: "up" },
                { label: "Best Day", value: "Tue", trend: "stable" },
                { label: "Improvement", value: "+12%", trend: "up" },
            ],
        },
        body: {
            title: "Body Tracking",
            icon: Heart,
            color: "#3366FF",
            metrics: [
                { label: "Heart Rate", value: "68 BPM", trend: "stable" },
                { label: "HRV", value: "45ms", trend: "up" },
                { label: "Recovery", value: "92%", trend: "up" },
            ],
        },
    };

    const screen = screens[variant];
    const Icon = screen.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative ${className}`}
        >
            {/* Phone frame */}
            <div className="relative w-[280px] h-[560px] bg-surface-900 rounded-[40px] p-3 shadow-2xl border border-surface-700">
                {/* Screen */}
                <div className="w-full h-full bg-surface-950 rounded-[32px] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 pt-4 pb-2">
                        <span className="text-xs text-text-muted">9:41</span>
                        <div className="flex items-center gap-1">
                            <div className="w-4 h-2 bg-text-muted rounded-sm" />
                            <div className="w-6 h-3 border border-text-muted rounded-sm relative">
                                <div className="absolute right-0.5 top-0.5 bottom-0.5 left-1 bg-data-green rounded-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 pt-4">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: `${screen.color}20` }}
                            >
                                <Icon className="w-5 h-5" style={{ color: screen.color }} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium">{screen.title}</h3>
                                <p className="text-xs text-text-muted">Today</p>
                            </div>
                        </div>

                        {/* Main visualization */}
                        <div className="relative h-40 mb-6">
                            {variant === "neural" && <NeuralVisualization color={screen.color} />}
                            {variant === "analytics" && <ChartVisualization color={screen.color} />}
                            {variant === "body" && <HeartVisualization color={screen.color} />}
                        </div>

                        {/* Metrics */}
                        <div className="space-y-3">
                            {screen.metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center p-3 bg-surface-800 rounded-xl"
                                >
                                    <span className="text-sm text-text-secondary">{metric.label}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-white">{metric.value}</span>
                                        {metric.trend === "up" && (
                                            <TrendingUp className="w-3 h-3 text-data-green" />
                                        )}
                                        {metric.trend === "down" && (
                                            <TrendingUp className="w-3 h-3 text-red-400 rotate-180" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick actions */}
                        <div className="flex gap-2 mt-6">
                            <button className="flex-1 py-3 bg-surface-800 rounded-xl text-xs text-text-muted">
                                History
                            </button>
                            <button
                                className="flex-1 py-3 rounded-xl text-xs font-medium text-surface-950"
                                style={{ backgroundColor: screen.color }}
                            >
                                Details
                            </button>
                        </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-surface-700 rounded-full" />
                </div>

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface-950 rounded-full" />
            </div>
        </motion.div>
    );
}

function NeuralVisualization({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Brain wave lines */}
            {[0, 1, 2].map((i) => (
                <path
                    key={i}
                    d={`M 0 ${40 + i * 20} Q 25 ${30 + i * 20} 50 ${40 + i * 20} T 100 ${40 + i * 20} T 150 ${40 + i * 20} T 200 ${40 + i * 20}`}
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    opacity={0.3 + i * 0.2}
                >
                    <animate
                        attributeName="d"
                        dur={`${2 + i * 0.5}s`}
                        repeatCount="indefinite"
                        values={`
                            M 0 ${40 + i * 20} Q 25 ${30 + i * 20} 50 ${40 + i * 20} T 100 ${40 + i * 20} T 150 ${40 + i * 20} T 200 ${40 + i * 20};
                            M 0 ${40 + i * 20} Q 25 ${50 + i * 20} 50 ${40 + i * 20} T 100 ${40 + i * 20} T 150 ${40 + i * 20} T 200 ${40 + i * 20};
                            M 0 ${40 + i * 20} Q 25 ${30 + i * 20} 50 ${40 + i * 20} T 100 ${40 + i * 20} T 150 ${40 + i * 20} T 200 ${40 + i * 20}
                        `}
                    />
                </path>
            ))}
            {/* Nodes */}
            {[30, 70, 110, 150, 170].map((x, i) => (
                <circle key={i} cx={x} cy={60} r="4" fill={color} opacity="0.6">
                    <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur={`${1 + i * 0.2}s`}
                        repeatCount="indefinite"
                    />
                </circle>
            ))}
        </svg>
    );
}

function ChartVisualization({ color }: { color: string }) {
    const bars = [40, 65, 45, 80, 60, 90, 75];
    return (
        <svg viewBox="0 0 200 120" className="w-full h-full">
            {bars.map((height, i) => (
                <g key={i}>
                    <rect
                        x={10 + i * 28}
                        y={110 - height}
                        width="20"
                        height={height}
                        fill={color}
                        opacity={0.3 + (i / bars.length) * 0.5}
                        rx="4"
                    />
                </g>
            ))}
            {/* Trend line */}
            <path
                d="M 20 80 L 48 50 L 76 65 L 104 30 L 132 45 L 160 20 L 188 35"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function HeartVisualization({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* ECG line */}
            <path
                d="M 0 60 L 30 60 L 40 60 L 50 20 L 60 100 L 70 60 L 100 60 L 110 60 L 120 20 L 130 100 L 140 60 L 200 60"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="400"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </path>
            {/* Heart icon */}
            <g transform="translate(85, 75)">
                <Heart className="w-8 h-8" fill={color} stroke="none" opacity="0.3" />
            </g>
        </svg>
    );
}

/**
 * Grid of all three app screens
 */
export function AppScreensGrid() {
    return (
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <AppScreenPlaceholder variant="neural" />
            <AppScreenPlaceholder variant="analytics" />
            <AppScreenPlaceholder variant="body" />
        </div>
    );
}
