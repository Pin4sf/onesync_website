// System States - represent different operating conditions
export type SystemMode = "sleep" | "adl" | "training";

export type SignalStatus = "valid" | "limited" | "none";

export interface SignalQuality {
    motion: SignalStatus;
    contact: SignalStatus;
    optical: SignalStatus;
}

export interface Insight {
    id: string;
    name: string;
    value: string | number | null;
    unit?: string;
    status: SignalStatus;
    confidence: number; // 0-100
    description: string;
    modalities: string[];
    availableInModes: SystemMode[];
}

export interface SystemState {
    id: string;
    name: string;
    mode: SystemMode;
    signalQuality: SignalQuality;
    availableInsights: string[]; // IDs of available insights
    description: string;
}

// Mock data types for the demo
export interface DemoState {
    currentMode: SystemMode;
    currentSystemState: string;
    deviceConnected: boolean;
    batteryLevel: number;
}
