import { SystemState, SignalQuality } from "./types";

// Canonical system states that mirror real OneBand behavior
export const systemStates: Record<string, SystemState> = {
    ideal_sleep: {
        id: "ideal_sleep",
        name: "Ideal Sleep",
        mode: "sleep",
        signalQuality: {
            motion: "valid",
            contact: "valid",
            optical: "valid",
        },
        availableInsights: ["hrv", "sleep_quality", "recovery", "stress"],
        description: "Minimal motion, good skin contact, all modalities available",
    },
    light_motion: {
        id: "light_motion",
        name: "Light Motion",
        mode: "adl",
        signalQuality: {
            motion: "limited",
            contact: "valid",
            optical: "valid",
        },
        availableInsights: ["stress", "recovery", "cognitive_load"],
        description: "Normal daily activity, some motion artifacts present",
    },
    high_motion: {
        id: "high_motion",
        name: "High Motion",
        mode: "training",
        signalQuality: {
            motion: "none",
            contact: "limited",
            optical: "limited",
        },
        availableInsights: ["stress"],
        description: "Intense physical activity, most insights gated",
    },
    poor_contact: {
        id: "poor_contact",
        name: "Poor Contact",
        mode: "adl",
        signalQuality: {
            motion: "valid",
            contact: "none",
            optical: "limited",
        },
        availableInsights: [],
        description: "Band loose or mispositioned, minimal inference possible",
    },
    training_impact: {
        id: "training_impact",
        name: "Training Impact",
        mode: "training",
        signalQuality: {
            motion: "limited",
            contact: "valid",
            optical: "valid",
        },
        availableInsights: ["stress", "training_load"],
        description: "Active training session with good signal quality",
    },
};

export function getSystemState(stateId: string): SystemState | undefined {
    return systemStates[stateId];
}

export function getAvailableStatesForMode(
    mode: "sleep" | "adl" | "training"
): SystemState[] {
    return Object.values(systemStates).filter((state) => state.mode === mode);
}

export function getSignalQualityLabel(quality: SignalQuality): string {
    const validCount = Object.values(quality).filter((q) => q === "valid").length;
    const limitedCount = Object.values(quality).filter(
        (q) => q === "limited"
    ).length;

    if (validCount === 3) return "Excellent";
    if (validCount >= 2) return "Good";
    if (validCount >= 1 || limitedCount >= 2) return "Limited";
    return "Poor";
}
