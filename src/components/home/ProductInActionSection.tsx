"use client";

import { useState, useEffect } from "react";
import { Activity, Brain, Zap, AlertCircle, RefreshCw, Layers } from "lucide-react";

// Mock data generator
const generateData = (mode: string) => {
    const baseHR = mode === 'sleep' ? 55 : mode === 'training' ? 145 : 75;
    const variability = mode === 'training' ? 15 : 5;

    return {
        hr: Math.floor(baseHR + (Math.random() * variability - variability / 2)),
        hrv: Math.floor(mode === 'sleep' ? 60 + Math.random() * 20 : mode === 'training' ? 30 + Math.random() * 10 : 50 + Math.random() * 15),
        confidence: mode === 'adl' ? 85 + Math.floor(Math.random() * 10) : mode === 'training' ? 92 + Math.floor(Math.random() * 5) : 70 + Math.floor(Math.random() * 20)
    };
};

export function ProductInActionSection() {
    const [activeMode, setActiveMode] = useState<"sleep" | "adl" | "training">("adl");
    const [data, setData] = useState(generateData("adl"));
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(generateData(activeMode));
        }, 1000);
        return () => clearInterval(interval);
    }, [activeMode]);

    const handleModeChange = (mode: "sleep" | "adl" | "training") => {
        setIsScanning(true);
        setActiveMode(mode);
        setTimeout(() => setIsScanning(false), 800);
    };

    return (
        <section className="section relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-overlay opacity-30"></div>

            <div className="container-xl relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                        <Activity className="w-4 h-4 text-accent animate-pulse" />
                        <span className="text-xs font-mono text-accent tracking-wider">LIVE SYSTEM DEMO</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligence in <span className="text-gradient-accent">Real-Time</span></h2>
                    <p className="text-xl text-gray-400">
                        Watch how OneSync adapts its inference engine instantly based on your context.
                    </p>
                </div>

                {/* Dashboard HUD */}
                <div className="max-w-5xl mx-auto">
                    {/* Controls */}
                    <div className="flex justify-center mb-10">
                        <div className="glass-panel p-1.5 rounded-full flex gap-1">
                            {["sleep", "adl", "training"].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => handleModeChange(mode as any)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeMode === mode
                                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Interface */}
                    <div className="glass-card rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
                        {/* Scanning Effect */}
                        {isScanning && (
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent z-50 animate-[scan_1s_ease-in-out]"></div>
                        )}

                        {/* Top Bar */}
                        <div className="bg-black/40 border-b border-white/5 p-6 flex items-center justify-between backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-status-valid animate-pulse shadow-[0_0_10px_#00ff9d]"></div>
                                <span className="font-mono text-sm text-gray-400 tracking-wider">DEVICE_ID: ONE_BND_X9</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <div className="text-[10px] uppercase text-gray-500 tracking-widest">Latency</div>
                                    <div className="font-mono text-accent">~4ms</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] uppercase text-gray-500 tracking-widest">Battery</div>
                                    <div className="font-mono text-white">94%</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 gap-0">
                            {/* Primary Metric (Left) */}
                            <div className="md:col-span-4 bg-white/5 p-10 border-r border-white/5 flex flex-col justify-center items-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10 text-center">
                                    <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Heart Rate</h4>
                                    <div className="text-8xl font-mono font-bold text-white tracking-tighter mb-2 transition-all duration-300 transform group-hover:scale-110">
                                        {data.hr}
                                    </div>
                                    <span className="text-xl text-gray-500 font-mono">BPM</span>
                                </div>
                                {/* Subtle graph line background */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0 50 Q 25 20, 50 50 T 100 50" stroke="currentColor" fill="none" className="text-accent" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>

                            {/* Secondary Metrics (Right) */}
                            <div className="md:col-span-8 p-8 md:p-10 bg-black/20">
                                <div className="grid grid-cols-2 gap-8">
                                    {/* Insight Card 1 */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-gray-400 mb-1">
                                            <Brain className="w-4 h-4" />
                                            <span className="text-xs uppercase tracking-wider">Cognitive Load</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-mono font-bold text-white">
                                                {activeMode === 'sleep' ? 'LOW' : activeMode === 'training' ? 'HIGH' : 'MED'}
                                            </span>
                                        </div>
                                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-accent transition-all duration-1000"
                                                style={{ width: activeMode === 'sleep' ? '20%' : activeMode === 'training' ? '90%' : '50%' }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Insight Card 2 */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-gray-400 mb-1">
                                            <Activity className="w-4 h-4" />
                                            <span className="text-xs uppercase tracking-wider">HRV Status</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-mono font-bold text-white">{data.hrv}</span>
                                            <span className="text-sm text-gray-500">ms</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-secondary transition-all duration-1000"
                                                style={{ width: `${Math.min(data.hrv, 100)}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Confidence Meter (Full Width) */}
                                    <div className="col-span-2 mt-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-status-valid" />
                                                <span className="text-sm font-medium text-white">Inference Confidence</span>
                                            </div>
                                            <span className="font-mono text-accent">{data.confidence}%</span>
                                        </div>
                                        <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden relative">
                                            <div
                                                className="h-full bg-gradient-to-r from-accent to-status-valid transition-all duration-500"
                                                style={{ width: `${data.confidence}%` }}
                                            ></div>
                                            {/* Tick marks */}
                                            <div className="absolute inset-0 flex justify-between px-1">
                                                {[0, 25, 50, 75, 100].map(i => (
                                                    <div key={i} className="w-px h-full bg-white/20"></div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-3 flex gap-2">
                                            {['Gyro', 'Accel', 'PPG', 'EDA'].map((sensor) => (
                                                <div key={sensor} className="px-2 py-1 rounded bg-black/40 border border-white/5 text-[10px] text-gray-400 font-mono">
                                                    {sensor}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
