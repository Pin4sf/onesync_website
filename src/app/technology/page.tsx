import { Cpu, Wifi, Shield, Zap, Server, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techStack = [
    {
        category: "Edge Computing",
        icon: Cpu,
        items: [
            {
                name: "On-Device ML",
                description:
                    "TinyML models optimized for low-power ARM processors, enabling real-time feature extraction.",
            },
            {
                name: "Signal Processing",
                description:
                    "Kalman filtering and adaptive algorithms for motion artifact rejection and signal quality assessment.",
            },
            {
                name: "Feature Extraction",
                description:
                    "HRV computation, sleep stage classification, and activity recognition all happen locally.",
            },
        ],
    },
    {
        category: "Connectivity",
        icon: Wifi,
        items: [
            {
                name: "BLE 5.0",
                description:
                    "Low-energy Bluetooth for efficient, secure communication between OneBand and mobile device.",
            },
            {
                name: "Selective Sync",
                description:
                    "Only consented feature-level data is transmitted, never raw biosignals.",
            },
            {
                name: "Offline First",
                description:
                    "Full functionality without connectivity. Data syncs when connection is available.",
            },
        ],
    },
    {
        category: "Security",
        icon: Shield,
        items: [
            {
                name: "End-to-End Encryption",
                description:
                    "AES-256 encryption from device to cloud. Keys never leave your control.",
            },
            {
                name: "Secure Enclave",
                description:
                    "Sensitive computations isolated in hardware-protected memory regions.",
            },
            {
                name: "Audit Logging",
                description:
                    "Immutable logs of all data access for compliance and transparency.",
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

export default function TechnologyPage() {
    return (
        <div className="min-h-screen py-8">
            <div className="container-xl">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <h1 className="text-3xl font-bold mb-4">Technology</h1>
                    <p className="text-gray-400 text-lg">
                        A deep dive into the engineering choices that make OneSync possible.
                        Built for reliability, privacy, and transparency.
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-8 mb-16">
                    {techStack.map((category, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-xl bg-accent/10">
                                        <category.icon className="h-6 w-6 text-accent" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-white">
                                        {category.category}
                                    </h2>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex}>
                                            <h3 className="font-medium text-white mb-2">{item.name}</h3>
                                            <p className="text-gray-400 text-sm">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Specifications */}
                <h2 className="text-2xl font-bold mb-8">OneBand Specifications</h2>
                <Card>
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {specifications.map((spec, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center p-4 rounded-lg bg-graphite-900/50"
                                >
                                    <span className="text-gray-400">{spec.label}</span>
                                    <span className="text-white font-medium">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Philosophy */}
                <div className="mt-16 grid md:grid-cols-2 gap-6">
                    <Card className="border-accent/30">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="h-6 w-6 text-accent" />
                                <h3 className="text-lg font-semibold text-white">
                                    Why Edge-First?
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Moving computation to the edge isn't just about privacy — it's
                                about creating a more reliable, responsive system. When your
                                insights don't depend on connectivity, they're always available
                                when you need them. This architecture also enables features that
                                would be impractical with cloud-only processing.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-accent/30">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Code className="h-6 w-6 text-accent" />
                                <h3 className="text-lg font-semibold text-white">
                                    Designed for Extensibility
                                </h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
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
