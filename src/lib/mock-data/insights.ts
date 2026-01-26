import { Insight } from "../types";

// All possible insights with their base configurations
export const insights: Record<string, Omit<Insight, "status" | "value" | "confidence">> = {
    hrv: {
        id: "hrv",
        name: "Heart Rate Variability",
        unit: "ms",
        description: "RMSSD measure of autonomic nervous system activity",
        modalities: ["PPG", "Motion Correction"],
        availableInModes: ["sleep", "adl"],
    },
    sleep_quality: {
        id: "sleep_quality",
        name: "Sleep Quality",
        unit: "/10",
        description: "Overall sleep score based on duration, stages, and disturbances",
        modalities: ["HRV", "Motion", "Skin Temperature"],
        availableInModes: ["sleep"],
    },
    recovery: {
        id: "recovery",
        name: "Recovery Score",
        unit: "/10",
        description: "Readiness for training based on sleep and HRV trends",
        modalities: ["Sleep Quality", "HRV Baseline", "Activity History"],
        availableInModes: ["sleep", "adl"],
    },
    stress: {
        id: "stress",
        name: "Stress Load Index",
        unit: "",
        description: "Relative stress level based on HRV and activity patterns",
        modalities: ["HRV", "Motion", "Context"],
        availableInModes: ["sleep", "adl", "training"],
    },
    cognitive_load: {
        id: "cognitive_load",
        name: "Cognitive Load",
        unit: "",
        description: "Mental workload proxy based on physiological signals",
        modalities: ["HRV", "EDA", "Motion"],
        availableInModes: ["adl"],
    },
    training_load: {
        id: "training_load",
        name: "Training Load",
        unit: "AU",
        description: "Acute training stress from current session",
        modalities: ["Heart Rate", "Motion", "Duration"],
        availableInModes: ["training"],
    },
};

// Demo data for different system states
export const insightValues: Record<string, Record<string, { value: string | number; confidence: number }>> = {
    ideal_sleep: {
        hrv: { value: 48, confidence: 92 },
        sleep_quality: { value: 8.4, confidence: 88 },
        recovery: { value: 8.7, confidence: 90 },
        stress: { value: "Low", confidence: 85 },
    },
    light_motion: {
        stress: { value: 64, confidence: 78 },
        recovery: { value: 7.2, confidence: 72 },
        cognitive_load: { value: "Medium", confidence: 65 },
    },
    high_motion: {
        stress: { value: "High", confidence: 55 },
    },
    poor_contact: {
        // No insights available
    },
    training_impact: {
        stress: { value: "Elevated", confidence: 70 },
        training_load: { value: 142, confidence: 82 },
    },
};

export function getInsightsForState(stateId: string): Insight[] {
    const stateValues = insightValues[stateId] || {};

    return Object.entries(insights).map(([id, baseInsight]) => {
        const stateValue = stateValues[id];

        if (stateValue) {
            return {
                ...baseInsight,
                status: stateValue.confidence >= 70 ? "valid" : "limited",
                value: stateValue.value,
                confidence: stateValue.confidence,
            } as Insight;
        } else {
            return {
                ...baseInsight,
                status: "none",
                value: null,
                confidence: 0,
                description: "NO INFERENCE: Insufficient signal quality",
            } as Insight;
        }
    });
}
