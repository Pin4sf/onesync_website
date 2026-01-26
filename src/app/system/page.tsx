import { Watch, Smartphone, Cloud, BarChart3, Lock, Shield, Cpu, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const architectureLayers = [
    {
        icon: Watch,
        name: "OneBand",
        subtitle: "Edge Device",
        description: "The wearable device that senses and processes biometric data on your wrist.",
        capabilities: [
            "Multi-modal sensing (PPG, accelerometer, temperature)",
            "On-device feature extraction",
            "Real-time signal quality assessment",
            "Local data encryption",
        ],
        dataFlow: "Raw biosignals never leave this layer",
        color: "accent",
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
        color: "accent-light",
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
        color: "status-valid",
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
        color: "status-limited",
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
        <div className="min-h-screen py-8">
            <div className="container-xl">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <h1 className="text-3xl font-bold mb-4">System Architecture</h1>
                    <p className="text-gray-400 text-lg">
                        Understand how OneSync is built from the ground up to protect your
                        privacy while delivering reliable, explainable insights.
                    </p>
                </div>

                {/* Principles */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {principles.map((principle, index) => (
                        <Card key={index} className="hover:border-accent/30 transition-colors">
                            <CardContent className="p-6">
                                <div className="p-3 rounded-xl bg-accent/10 inline-block mb-4">
                                    <principle.icon className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {principle.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{principle.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Architecture Flow */}
                <h2 className="text-2xl font-bold mb-8">Data Flow Architecture</h2>
                <div className="space-y-4">
                    {architectureLayers.map((layer, index) => (
                        <div key={index}>
                            <Card className="hover:border-accent/30 transition-colors">
                                <CardContent className="p-6">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        {/* Icon */}
                                        <div className="shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-graphite-700 flex items-center justify-center">
                                                <layer.icon className={`h-8 w-8 text-${layer.color}`} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-semibold text-white">
                                                    {layer.name}
                                                </h3>
                                                <span className="badge bg-accent/10 text-accent text-xs">
                                                    {layer.subtitle}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 mb-4">{layer.description}</p>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                                                        Capabilities
                                                    </h4>
                                                    <ul className="space-y-1">
                                                        {layer.capabilities.map((cap, capIndex) => (
                                                            <li
                                                                key={capIndex}
                                                                className="text-sm text-gray-400 flex items-start gap-2"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                                                                {cap}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                                                        Data Boundary
                                                    </h4>
                                                    <p className="text-sm text-accent bg-accent/10 px-3 py-2 rounded-lg">
                                                        {layer.dataFlow}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            {index < architectureLayers.length - 1 && (
                                <div className="flex justify-center py-2">
                                    <ArrowRight className="h-6 w-6 text-graphite-600 rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
