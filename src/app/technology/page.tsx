import { Cpu, Wifi, Shield, Zap, Server, Code, Layers, FileJson, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techStack = [
    {
        category: "Edge Computing",
        icon: Cpu,
        color: "text-neon-cyan",
        bgColor: "bg-neon-cyan/5",
        borderColor: "border-neon-cyan/20",
        items: [
            {
                name: "On-Device ML",
                description:
                    "TinyML models optimized for low-power ARM processors, enabling real-time feature extraction.",
                icon: Layers
            },
            {
                name: "Signal Processing",
                description:
                    "Kalman filtering and adaptive algorithms for motion artifact rejection and signal quality assessment.",
                icon: Activity
            },
            {
                name: "Feature Extraction",
                description:
                    "HRV computation, sleep stage classification, and activity recognition all happen locally.",
                icon: FileJson
            },
        ],
    },
    {
        category: "Connectivity",
        icon: Wifi,
        color: "text-white",
        bgColor: "bg-white/5",
        borderColor: "border-white/10",
        items: [
            {
                name: "BLE 5.0",
                description:
                    "Low-energy Bluetooth for efficient, secure communication between OneBand and mobile device.",
                icon: Wifi
            },
            {
                name: "Selective Sync",
                description:
                    "Only consented feature-level data is transmitted, never raw biosignals.",
                icon: Server
            },
            {
                name: "Offline First",
                description:
                    "Full functionality without connectivity. Data syncs when connection is available.",
                icon: Shield
            },
        ],
    },
    {
        category: "Security",
        icon: Shield,
        color: "text-neon-purple",
        bgColor: "bg-neon-purple/5",
        borderColor: "border-neon-purple/20",
        items: [
            {
                name: "End-to-End Encryption",
                description:
                    "AES-256 encryption from device to cloud. Keys never leave your control.",
                icon: LockIcon
            },
            {
                name: "Secure Enclave",
                description:
                    "Sensitive computations isolated in hardware-protected memory regions.",
                icon: Shield
            },
            {
                name: "Audit Logging",
                description:
                    "Immutable logs of all data access for compliance and transparency.",
                icon: FileJson
            },
        ],
    },
];

const specifications = [
    { label: "Processor", value: "ARM Cortex-M4F @ 64MHz" },
    { label: "Memory", value: "256KB RAM, 1MB Flash" },
    { label: "Sensors", value: "PPG, IMU, Temperature, EDA" },
    { label: "Battery Life", value: "7+ days typical use" },
    { label: "Water Resistance", value: "5 ATM" },
    { label: "Connectivity", value: "Bluetooth 5.0 LE" },
];

function LockIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}

export default function TechnologyPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="fixed top-0 right-0 w-full h-[500px] bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">
                {/* Hero Section */}
                <div className="mb-20 md:mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6 uppercase">
                                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Technology</span>
                            </h1>
                            <div className="h-1 w-32 bg-white mb-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
                                A deep dive into the engineering choices that make OneSync possible.
                                Built for <span className="text-neon-cyan">reliability</span>, <span className="text-neon-purple">privacy</span>, and <span className="text-white">transparency</span>.
                            </p>
                        </div>

                        <div className="hidden md:block">
                            <div className="p-4 rounded-lg bg-obsidian-900/80 border border-white/10 backdrop-blur-md">
                                <div className="text-xs font-mono text-gray-500 mb-1">CURRENT VERSION</div>
                                <div className="text-xl font-mono text-neon-cyan">v2.4.0-stable</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-12 mb-24 md:mb-32">
                    {techStack.map((category, index) => (
                        <div key={index} className="group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3 rounded-xl bg-obsidian-900 border border-white/10 ${category.color}`}>
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white uppercase tracking-wide">
                                    {category.category}
                                </h2>
                                <div className={`h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4`}></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {category.items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className={`relative p-6 rounded-2xl bg-obsidian-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-obsidian-800/60 hover:border-white/10 group/item hover:translate-y-[-4px]`}
                                    >
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover/item:via-${category.color.replace('text-', '')} opacity-50`}></div>

                                        <div className="mb-4">
                                            <item.icon className={`w-8 h-8 ${category.color} opacity-80`} />
                                        </div>

                                        <h3 className="font-display font-bold text-white mb-3 text-lg">{item.name}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specifications HUD */}
                <div className="mb-24 md:mb-32">
                    <h2 className="text-2xl font-display font-bold text-white mb-8 border-l-4 border-neon-cyan pl-4 uppercase">
                        Technical Specifications
                    </h2>

                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-obsidian-950/80">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]"></div>

                        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
                            {specifications.map((spec, index) => (
                                <div key={index} className="p-8 hover:bg-white/[0.02] transition-colors group">
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-neon-cyan transition-colors">
                                        {spec.label}
                                    </div>
                                    <div className="text-xl md:text-2xl font-mono text-white">
                                        {spec.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Philosophy */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="border-neon-cyan/20 bg-gradient-to-br from-obsidian-900 to-obsidian-950 overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl group-hover:bg-neon-cyan/20 transition-all duration-700"></div>

                        <CardContent className="p-8 md:p-10 relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                                    <Zap className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                                    Why Edge-First?
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-loose text-lg font-light">
                                Moving computation to the edge isn't just about privacy — it's
                                about creating a more reliable, responsive system. When your
                                insights don't depend on connectivity, they're always available
                                when you need them. This architecture also enables features that
                                would be impractical with cloud-only processing.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-neon-purple/20 bg-gradient-to-br from-obsidian-900 to-obsidian-950 overflow-hidden group">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-all duration-700"></div>

                        <CardContent className="p-8 md:p-10 relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                                    <Code className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                                    Designed for Extensibility
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-loose text-lg font-light">
                                The OneSync architecture is built to evolve. New sensor
                                modalities, updated ML models, and enhanced features can be
                                deployed via secure OTA updates. The system is designed to grow
                                with advances in wearable computing while maintaining backward
                                compatibility and data integrity.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
