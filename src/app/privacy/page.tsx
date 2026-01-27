import { Shield, Eye, Lock, FileCheck, Users, Database, AlertTriangle, CheckCircle2, XCircle, FileText, Download, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const dataCategories = [
    {
        title: "Verified Collection",
        subtitle: "What We Collect",
        icon: Database,
        color: "text-neon-cyan",
        bgColor: "bg-neon-cyan/5",
        borderColor: "border-neon-cyan/20",
        items: [
            "Computed heart rate variability features",
            "Aggregated activity patterns",
            "Sleep stage classifications",
            "Device health metrics",
        ],
    },
    {
        title: "Restricted Data",
        subtitle: "What We Never Collect",
        icon: AlertTriangle,
        color: "text-neon-magenta",
        bgColor: "bg-neon-magenta/5",
        borderColor: "border-neon-magenta/20",
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
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-6">

                {/* Hero Section */}
                <div className="mb-20 md:mb-32">
                    <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mb-6 uppercase">
                        Privacy <span className="text-gray-600">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Governance</span>
                    </h1>
                    <div className="h-1 w-32 bg-neon-purple mb-8 rounded-full shadow-[0_0_15px_rgba(191,0,255,0.5)]"></div>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        Your data belongs to you. We've built OneSync with <span className="text-white font-medium">privacy as a fundamental design principle</span>, not an afterthought.
                    </p>
                </div>

                {/* Data Categories - Security Clearance Style */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 md:mb-32">
                    {dataCategories.map((category, index) => (
                        <div key={index} className={`group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent ${index === 1 ? 'md:mt-12' : ''}`}>
                            <div className={`absolute inset-0 bg-${category.color.replace('text-', '')}/5 blur-xl group-hover:blur-2xl transition-all duration-500 rounded-2xl`}></div>

                            <div className="relative h-full bg-obsidian-950/80 backdrop-blur-xl rounded-xl p-8 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <div className={`text-xs font-mono font-bold uppercase tracking-widest mb-2 ${category.color}`}>
                                            {category.title}
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-white tracking-wide">
                                            {category.subtitle}
                                        </h3>
                                    </div>
                                    <div className={`p-3 rounded-xl bg-obsidian-900 border ${category.borderColor}`}>
                                        <category.icon className={`h-6 w-6 ${category.color}`} />
                                    </div>
                                </div>

                                {/* List */}
                                <ul className="space-y-4">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-4 text-gray-300 group/item">
                                            {index === 0 ? (
                                                <CheckCircle2 className="w-5 h-5 text-neon-cyan mt-0.5 shrink-0" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-neon-magenta mt-0.5 shrink-0" />
                                            )}
                                            <span className="group-hover/item:text-white transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Decorative Watermark */}
                                <div className="absolute -bottom-12 -right-12 opacity-[0.03] pointer-events-none">
                                    <category.icon className="w-48 h-48" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Consent Model */}
                <div className="mb-24 md:mb-32">
                    <h2 className="text-3xl font-display font-bold text-white mb-12 text-center uppercase tracking-tight">
                        The Consent Model
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {consentModel.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-obsidian-900/30 border border-white/5 hover:bg-obsidian-900/60 hover:border-neon-cyan/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-obsidian-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 user-select-none group-hover:text-neon-cyan transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Measures - Fortress Style */}
                <div className="mb-24 md:mb-32 relative">
                    <div className="absolute inset-0 bg-neon-cyan/5 blur-[100px] pointer-events-none"></div>

                    <Card className="relative overflow-hidden border-neon-cyan/20 bg-obsidian-950/80 backdrop-blur-xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>

                        <CardContent className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 text-center md:text-left">
                                    <div className="inline-flex p-4 rounded-2xl bg-neon-cyan/10 text-neon-cyan mb-6">
                                        <Shield className="w-12 h-12" />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold text-white mb-4 uppercase">
                                        Fortified Security
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        Built with the same standards used by healthcare and financial institutions.
                                        Your data is encrypted, audited, and protected at every layer.
                                    </p>
                                </div>

                                <div className="md:w-2/3 w-full">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {securityMeasures.map((measure, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-4 p-4 rounded-xl bg-obsidian-900/50 border border-white/5 hover:border-white/10 transition-colors"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,1)]" />
                                                <span className="text-gray-200 font-medium text-sm">{measure}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Athlete Rights - Bill of Rights */}
                <div className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl font-display font-bold text-white mb-10 uppercase tracking-widest text-center">
                        Athlete Bill of Rights
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Right to Access",
                                desc: "View all data we hold about you at any time through your dashboard.",
                                icon: FileText,
                                action: "View Data"
                            },
                            {
                                title: "Right to Export",
                                desc: "Download your complete data history in standard formats (JSON, CSV).",
                                icon: Download,
                                action: "Export All"
                            },
                            {
                                title: "Right to Delete",
                                desc: "Request permanent deletion of your data with verified confirmation.",
                                icon: Trash2,
                                action: "Delete Account",
                                danger: true
                            }
                        ].map((right, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all text-center">
                                <right.icon className={`w-8 h-8 mx-auto mb-4 ${right.danger ? 'text-neon-magenta' : 'text-gray-400'} group-hover:scale-110 transition-transform`} />
                                <h3 className="font-bold text-white mb-2">{right.title}</h3>
                                <p className="text-gray-500 text-sm mb-6">{right.desc}</p>
                                <button className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all ${right.danger
                                    ? 'border-neon-magenta/30 text-neon-magenta hover:bg-neon-magenta/10'
                                    : 'border-white/10 text-white hover:bg-white/10'
                                    }`}>
                                    {right.action}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
