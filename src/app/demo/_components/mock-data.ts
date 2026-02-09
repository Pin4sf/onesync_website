export type SystemStateId = "active" | "degraded" | "noInference" | "recovery";

export type SensorKey = "ppg" | "emg" | "eda" | "imu";

export interface SystemMetrics {
    readinessScore: number;
    confidence: number;
    stressLoad: number;
    hrv: number;
    cognitiveLoad: string;
}

export interface AIInsights {
    summary: string;
    recommendations: string[];
}

export interface SystemState {
    id: SystemStateId;
    label: string;
    mode: string;
    description: string;
    signalQuality: Record<SensorKey, number>;
    metrics: SystemMetrics | null;
    inference: boolean;
    warnings?: string[];
    reason?: string;
    aiInsights: AIInsights;
}

export const sensorLabels: Record<SensorKey, string> = {
    ppg: "PPG (Optical HR)",
    emg: "EMG (Muscle)",
    eda: "EDA (Skin Conductance)",
    imu: "IMU (Motion)",
};

export const stateOrder: SystemStateId[] = [
    "active",
    "degraded",
    "noInference",
    "recovery",
];

export const systemStates: Record<SystemStateId, SystemState> = {
    active: {
        id: "active",
        label: "Active Monitoring",
        mode: "ACTIVE_MONITORING",
        description: "All sensors reporting. Full inference active.",
        signalQuality: { ppg: 0.95, emg: 0.88, eda: 0.92, imu: 0.97 },
        metrics: {
            readinessScore: 72,
            confidence: 8,
            stressLoad: 0.34,
            hrv: 58,
            cognitiveLoad: "Moderate",
        },
        inference: true,
        aiInsights: {
            summary: "Cognitive load moderate — baseline monitoring stable",
            recommendations: [
                "Consider a 10-minute break in the next hour to maintain focus",
                "HRV trending stable — good recovery from yesterday's session",
                "Stress load within normal range — no intervention needed",
            ],
        },
    },
    degraded: {
        id: "degraded",
        label: "Degraded Signal",
        mode: "DEGRADED",
        description: "Some sensors reporting poor signal quality.",
        signalQuality: { ppg: 0.72, emg: 0.31, eda: 0.65, imu: 0.90 },
        metrics: {
            readinessScore: 65,
            confidence: 18,
            stressLoad: 0.41,
            hrv: 52,
            cognitiveLoad: "Elevated",
        },
        inference: true,
        warnings: ["EMG signal degraded — wristband may need repositioning"],
        aiInsights: {
            summary: "EMG signal degraded — readings less precise",
            recommendations: [
                "Reposition wristband — ensure snug contact with skin",
                "Confidence interval widened to ±18 — avoid critical decisions based on current readings",
                "Move to a stationary position to improve signal acquisition",
            ],
        },
    },
    noInference: {
        id: "noInference",
        label: "No Inference",
        mode: "NO_INFERENCE",
        description: "Signal quality insufficient. No metrics produced.",
        signalQuality: { ppg: 0.21, emg: 0.12, eda: 0.18, imu: 0.45 },
        metrics: null,
        inference: false,
        reason: "Signal quality below minimum threshold. No inference produced to maintain data integrity.",
        aiInsights: {
            summary: "Signal quality insufficient — no inference available",
            recommendations: [
                "Check wristband fit — ensure direct skin contact",
                "Reduce movement and wait 30 seconds for signal re-acquisition",
                "If issue persists, clean sensor surface and re-attach band",
            ],
        },
    },
    recovery: {
        id: "recovery",
        label: "Recovery Mode",
        mode: "RECOVERY",
        description: "Post-activity recovery tracking with full signal.",
        signalQuality: { ppg: 0.93, emg: 0.85, eda: 0.89, imu: 0.95 },
        metrics: {
            readinessScore: 84,
            confidence: 6,
            stressLoad: 0.18,
            hrv: 67,
            cognitiveLoad: "Low",
        },
        inference: true,
        aiInsights: {
            summary: "Recovery progressing — stress baseline normalizing",
            recommendations: [
                "Stress load dropped 47% from peak — recovery on track",
                "HRV improving — parasympathetic activity increasing",
                "Recommend light activity only for the next 30 minutes",
            ],
        },
    },
};

export const stateColors: Record<
    SystemStateId,
    { dot: string; border: string; bg: string; text: string }
> = {
    active: {
        dot: "bg-emerald",
        border: "border-emerald/30",
        bg: "bg-emerald/5",
        text: "text-emerald",
    },
    degraded: {
        dot: "bg-amber-500",
        border: "border-amber-500/30",
        bg: "bg-amber-500/5",
        text: "text-amber-600",
    },
    noInference: {
        dot: "bg-red-500",
        border: "border-red-500/30",
        bg: "bg-red-500/5",
        text: "text-red-600",
    },
    recovery: {
        dot: "bg-blue-600",
        border: "border-blue-600/30",
        bg: "bg-blue-600/5",
        text: "text-blue-600",
    },
};
