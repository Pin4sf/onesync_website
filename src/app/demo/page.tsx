"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { systemStates, getSignalQualityLabel } from "@/lib/system-states";
import { getInsightsForState } from "@/lib/mock-data/insights";
import type { SystemMode, Insight } from "@/lib/types";

const modeIcons = {
    sleep: Moon,
    adl: Sun,
    training: Dumbbell,
};

const statusColors = {
    valid: "bg-status-valid",
    limited: "bg-status-limited",
    none: "bg-status-none",
};

const statusBadges = {
    valid: "badge-valid",
    limited: "badge-limited",
    none: "badge-none",
};

export default function DemoPage() {
    const [currentStateId, setCurrentStateId] = useState("ideal_sleep");
    const currentState = systemStates[currentStateId];
    const insights = getInsightsForState(currentStateId);

    const signalQualityLabel = getSignalQualityLabel(currentState.signalQuality);

    return (
        <div className="min-h-screen py-8">
            <div className="container-xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Interactive Demo</h1>
                    <p className="text-gray-400">
                        Explore how OneSync behaves under different conditions. Switch
                        between system states to see how insights adapt.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* State Selector - Sidebar */}
                    <div className="lg:col-span-1">
                        <Card>
                            <CardContent className="p-4">
                                <h3 className="font-semibold mb-4 text-white">System States</h3>
                                <div className="space-y-2">
                                    {Object.values(systemStates).map((state) => {
                                        const ModeIcon = modeIcons[state.mode];
                                        return (
                                            <button
                                                key={state.id}
                                                onClick={() => setCurrentStateId(state.id)}
                                                className={`w-full text-left p-3 rounded-lg transition-all ${currentStateId === state.id
                                                        ? "bg-accent/20 border border-accent/50"
                                                        : "bg-graphite-900/50 border border-graphite-700 hover:border-graphite-600"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <ModeIcon
                                                        className={`h-4 w-4 ${currentStateId === state.id
                                                                ? "text-accent"
                                                                : "text-gray-400"
                                                            }`}
                                                    />
                                                    <span
                                                        className={`text-sm font-medium ${currentStateId === state.id
                                                                ? "text-white"
                                                                : "text-gray-400"
                                                            }`}
                                                    >
                                                        {state.name}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1 ml-7">
                                                    {state.mode.toUpperCase()} mode
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Dashboard */}
                    <div className="lg:col-span-3">
                        {/* Device Status Bar */}
                        <Card className="mb-6">
                            <CardContent className="p-4">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Bluetooth className="h-4 w-4 text-accent" />
                                            <span className="text-sm text-white">OneBand Connected</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Battery className="h-4 w-4 text-status-valid" />
                                            <span className="text-sm text-gray-400">87%</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Signal className="h-4 w-4 text-gray-400" />
                                            <span className="text-sm text-gray-400">
                                                Signal: {signalQualityLabel}
                                            </span>
                                        </div>
                                        <span
                                            className={`badge ${signalQualityLabel === "Excellent" || signalQualityLabel === "Good"
                                                    ? "badge-valid"
                                                    : signalQualityLabel === "Limited"
                                                        ? "badge-limited"
                                                        : "badge-none"
                                                }`}
                                        >
                                            {currentState.mode.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Current State Info */}
                        <div className="mb-6 p-4 rounded-lg bg-graphite-800/50 border border-graphite-700">
                            <p className="text-sm text-gray-400">
                                <span className="text-accent font-medium">
                                    {currentState.name}:
                                </span>{" "}
                                {currentState.description}
                            </p>
                        </div>

                        {/* Signal Quality */}
                        <Card className="mb-6">
                            <CardContent className="p-4">
                                <h3 className="font-semibold mb-4 text-white">Signal Quality</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {(["motion", "contact", "optical"] as const).map((signal) => (
                                        <div key={signal} className="text-center">
                                            <div
                                                className={`w-12 h-12 mx-auto rounded-full ${statusColors[currentState.signalQuality[signal]]
                                                    } flex items-center justify-center mb-2`}
                                            >
                                                <Activity className="h-5 w-5 text-white" />
                                            </div>
                                            <p className="text-sm text-white capitalize">{signal}</p>
                                            <p
                                                className={`text-xs ${currentState.signalQuality[signal] === "valid"
                                                        ? "text-status-valid"
                                                        : currentState.signalQuality[signal] === "limited"
                                                            ? "text-status-limited"
                                                            : "text-status-none"
                                                    }`}
                                            >
                                                {currentState.signalQuality[signal].toUpperCase()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Insights Grid */}
                        <h3 className="font-semibold mb-4 text-white">Insights</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {insights.map((insight) => (
                                <InsightCard key={insight.id} insight={insight} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InsightCard({ insight }: { insight: Insight }) {
    const isNoInference = insight.status === "none";

    return (
        <Card
            className={`${isNoInference ? "opacity-60" : ""} transition-opacity`}
        >
            <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                        {isNoInference ? (
                            <AlertCircle className="h-5 w-5 text-status-none" />
                        ) : insight.status === "limited" ? (
                            <Zap className="h-5 w-5 text-status-limited" />
                        ) : (
                            <Brain className="h-5 w-5 text-accent" />
                        )}
                        <span className="font-medium text-white">{insight.name}</span>
                    </div>
                    <span className={statusBadges[insight.status]}>
                        {isNoInference
                            ? "No Data"
                            : insight.status === "limited"
                                ? "Limited"
                                : "Valid"}
                    </span>
                </div>

                <div className="mb-3">
                    <span
                        className={`text-3xl font-bold ${isNoInference ? "text-status-none" : "text-white"
                            }`}
                    >
                        {insight.value ?? "—"}
                    </span>
                    {insight.unit && (
                        <span className="text-gray-500 ml-1">{insight.unit}</span>
                    )}
                </div>

                <p className="text-sm text-gray-400 mb-3">{insight.description}</p>

                {!isNoInference && (
                    <div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                            <span>Confidence</span>
                            <span>{insight.confidence}%</span>
                        </div>
                        <div className="confidence-bar">
                            <div
                                className={`confidence-fill ${statusColors[insight.status]}`}
                                style={{ width: `${insight.confidence}%` }}
                            />
                        </div>
                    </div>
                )}

                {insight.modalities.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-graphite-700">
                        <p className="text-xs text-gray-500">
                            Using: {insight.modalities.join(", ")}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
