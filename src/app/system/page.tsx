import { Watch, Smartphone, Cloud, BarChart3, Lock, Shield, Cpu, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const architectureLayers = [
    {
        icon: Watch,
        name: "OneBand",
        subtitle: "Edge Device",
        description: "The wearable device that senses and processes biometric data on your wrist.",
        capabilities: [
            "Multi-modal sensing (PPG, accelerometer)",
            "On-device feature extraction",
            "Real-time signal quality assessment",
            "Local data encryption (AES-256)",
        ],
        dataFlow: "Raw biosignals never leave this layer",
        color: "text-neon-cyan",
        borderColor: "border-neon-cyan/20",
        bgWithOpacity: "bg-neon-cyan/5",
    },
    {
        icon: Smartphone,
        name: "OneSync Mobile",
        subtitle: "Consent Layer",
        description: "The mobile application that manages consent and secure data transfer.",
        capabilities: [
            "Explicit consent management",
            "Selective sync controls",
            "End-to-end encryption",
            "Offline capability",
        ],
        dataFlow: "Only consented features are transmitted",
        color: "text-white",
        borderColor: "border-white/20",
        bgWithOpacity: "bg-white/5",
    },
    {
        icon: Cloud,
        name: "OneSync Cloud",
        subtitle: "Aggregation Layer",
        description: "Cloud infrastructure that enables trends and team features.",
        capabilities: [
            "Feature-level aggregation only",
            "Trend analysis and insights",
            "Role-based access controls",
            "Audit logging",
        ],
        dataFlow: "No raw biometrics stored",
        color: "text-neon-purple",
        borderColor: "border-neon-purple/20",
        bgWithOpacity: "bg-neon-purple/5",
    },
    {
        icon: BarChart3,
        name: "Insights",
        subtitle: "Presentation Layer",
        description: "Transparent insights with confidence levels and explanations.",
        capabilities: [
            "Confidence indicators on all outputs",
            "'NO INFERENCE' as first-class state",
            "Modality attribution",
            "Explainable results",
        ],
        dataFlow: "Always show uncertainty",
        color: "text-emerald-400",
        borderColor: "border-emerald-500/20",
        bgWithOpacity: "bg-emerald-500/5",
    },
];

const principles = [
    {
        icon: Cpu,
        title: "Edge-First",
        description: "Critical computations happen on the device, not in the cloud.",
    },
    {
        icon: Lock,
        title: "Privacy by Design",
        description: "Privacy is built in from the ground up, not added as an afterthought.",
    },
    {
        icon: Shield,
        title: "Conditional Inference",
        description: "The system knows when it doesn't know, and says so explicitly.",
    },
];

export default function SystemPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">

                {/* Hero Section */}
                <div className="mb-20 md:mb-32">
                    <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6 uppercase">
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Architecture</span>
                    </h1>
                    <div className="h-1 w-32 bg-neon-cyan mb-8 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        OneSync is built on a <span className="text-white font-medium">zero-trust, edge-first foundation</span>.
                        We process data where it lives—on your body—ensuring your biological signature remains yours alone.
                    </p>
                </div>

                {/* Core Principles */}
                <div className="grid md:grid-cols-3 gap-6 mb-24 md:mb-32">
                    {principles.map((principle, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl border border-white/5 bg-obsidian-900/40 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/50 hover:bg-obsidian-800/60"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-obsidian-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-neon-cyan/30 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                                    <principle.icon className="h-6 w-6 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-3 tracking-wide uppercase">
                                    {principle.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {principle.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architecture Flow */}
                <div className="relative">
                    <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent md:-translate-x-1/2 opacity-30 dashed-line"></div>

                    <h2 className="text-3xl font-display font-bold text-white mb-16 text-center tracking-tight">
                        Data Flow Pipeline
                    </h2>

                    <div className="space-y-12 md:space-y-0 relative">
                        {architectureLayers.map((layer, index) => (
                            <div key={index} className="relative md:flex md:justify-center group">

                                {/* Timeline Node (Mobile Only) */}
                                <div className="absolute left-0 top-8 w-[60px] flex justify-center md:hidden z-20">
                                    <div className={`w-4 h-4 rounded-full border-2 bg-obsidian-950 ${layer.color.replace('text-', 'border-')} shadow-[0_0_10px_currentColor]`} style={{ color: layer.color === 'text-white' ? '#fff' : undefined }}></div>
                                </div>

                                <Card className={`relative md:w-[800px] border-white/5 bg-obsidian-900/60 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)] overflow-hidden ml-16 md:ml-0`}>
                                    {/* Glass Highlight */}
                                    <div className={`absolute top-0 left-0 w-1 h-full ${layer.bgWithOpacity.replace('/5', '/50')}`}></div>

                                    <CardContent className="p-0">
                                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                                            {/* Icon Section */}
                                            <div className="shrink-0 flex md:block items-center gap-4">
                                                <div className={`w-16 h-16 rounded-2xl bg-obsidian-950 border border-white/10 flex items-center justify-center ${layer.color}`}>
                                                    <layer.icon className="h-8 w-8" />
                                                </div>
                                                <div className="md:hidden">
                                                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                                                    <div className={`text-xs font-mono uppercase tracking-wider ${layer.color} opacity-80`}>
                                                        {layer.subtitle}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="hidden md:flex items-center gap-4 mb-3">
                                                    <h3 className="text-2xl font-bold text-white tracking-tight">{layer.name}</h3>
                                                    <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest border ${layer.borderColor} ${layer.bgWithOpacity} ${layer.color}`}>
                                                        {layer.subtitle}
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 mb-6 font-light text-lg">
                                                    {layer.description}
                                                </p>

                                                <div className="grid md:grid-cols-2 gap-6 p-4 rounded-xl bg-obsidian-950/50 border border-white/5">
                                                    <div>
                                                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Capabilities</h4>
                                                        <ul className="space-y-2">
                                                            {layer.capabilities.map((cap, i) => (
                                                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                                                    <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${layer.color.replace('text-', 'bg-')}`} />
                                                                    {cap}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Data Boundary</h4>
                                                        <div className={`text-sm font-medium p-3 rounded-lg border ${layer.borderColor} ${layer.bgWithOpacity} ${layer.color}`}>
                                                            <div className="flex items-center gap-2">
                                                                <Lock className="w-3 h-3" />
                                                                {layer.dataFlow}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Connector Arrow */}
                                {index < architectureLayers.length - 1 && (
                                    <div className="hidden md:flex absolute -bottom-12 left-1/2 -translate-x-1/2 z-10 justify-center items-center h-12 w-full">
                                        <ArrowDown className="w-6 h-6 text-gray-600 animate-pulse" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
