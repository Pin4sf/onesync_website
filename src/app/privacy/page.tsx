import { Shield, Eye, Lock, FileCheck, Users, Database, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dataCategories = [
    {
        title: "What We Collect",
        icon: Database,
        color: "accent",
        items: [
            "Computed heart rate variability features",
            "Aggregated activity patterns",
            "Sleep stage classifications",
            "Device health metrics",
        ],
    },
    {
        title: "What We Never Collect",
        icon: AlertTriangle,
        color: "status-none",
        items: [
            "Raw PPG waveforms",
            "Continuous GPS location",
            "Voice or audio recordings",
            "Identifiable biometric templates",
            "Third-party app data",
        ],
    },
];

const consentModel = [
    {
        icon: Eye,
        title: "Transparent",
        description:
            "Every data point collected is explicitly listed. No hidden telemetry or background collection.",
    },
    {
        icon: Lock,
        title: "Granular",
        description:
            "Choose what to share at the feature level. Enable sleep tracking without sharing activity data.",
    },
    {
        icon: FileCheck,
        title: "Reversible",
        description:
            "Revoke any consent at any time. Request deletion of historical data with full audit trail.",
    },
    {
        icon: Users,
        title: "Role-Based",
        description:
            "Athletes approve what coaches can see. Individual data vs team aggregates are clearly separated.",
    },
];

const securityMeasures = [
    "AES-256 encryption at rest",
    "TLS 1.3 for all data in transit",
    "Zero-knowledge architecture where possible",
    "Regular third-party security audits",
    "SOC 2 Type II compliance roadmap",
    "GDPR and CCPA ready",
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-8">
            <div className="container-xl">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <h1 className="text-3xl font-bold mb-4">Privacy & Governance</h1>
                    <p className="text-gray-400 text-lg">
                        Your data belongs to you. We've built OneSync with privacy as a
                        fundamental design principle, not an afterthought.
                    </p>
                </div>

                {/* Data Categories */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {dataCategories.map((category, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                                        <category.icon className={`h-6 w-6 text-${category.color}`} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="flex items-start gap-3 text-gray-400"
                                        >
                                            <span
                                                className={`w-2 h-2 rounded-full bg-${category.color} mt-2 shrink-0`}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Consent Model */}
                <h2 className="text-2xl font-bold mb-8">Consent Model</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {consentModel.map((item, index) => (
                        <Card key={index} className="hover:border-accent/30 transition-colors">
                            <CardContent className="p-6">
                                <div className="p-3 rounded-xl bg-accent/10 inline-block mb-4">
                                    <item.icon className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Security */}
                <h2 className="text-2xl font-bold mb-8">Security Measures</h2>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-status-valid/10">
                                <Shield className="h-6 w-6 text-status-valid" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    Enterprise-Grade Security
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Built with the same standards used by healthcare and financial
                                    institutions.
                                </p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {securityMeasures.map((measure, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-graphite-900/50"
                                >
                                    <div className="w-2 h-2 rounded-full bg-status-valid" />
                                    <span className="text-gray-300 text-sm">{measure}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Athlete Rights */}
                <div className="mt-16 p-8 rounded-2xl bg-accent/5 border border-accent/20">
                    <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-semibold text-white mb-2">Access</h3>
                            <p className="text-gray-400 text-sm">
                                View all data we hold about you at any time through your
                                dashboard.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2">Export</h3>
                            <p className="text-gray-400 text-sm">
                                Download your complete data history in standard formats.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2">Delete</h3>
                            <p className="text-gray-400 text-sm">
                                Request permanent deletion of your data with verified
                                confirmation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
