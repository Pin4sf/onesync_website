import { EyeOff, Lock, FileCheck, Users } from "lucide-react";

const privacyPoints = [
    {
        icon: EyeOff,
        title: "What's Never Collected",
        items: [
            "Raw PPG waveforms",
            "Continuous GPS tracking",
            "Voice or audio recordings",
            "Identifiable biometric templates",
        ],
    },
    {
        icon: Lock,
        title: "What's Protected",
        items: [
            "All data encrypted at rest and in transit",
            "On-device processing for sensitive features",
            "No third-party data sharing without consent",
            "Audit logs for all data access",
        ],
    },
    {
        icon: FileCheck,
        title: "Your Control",
        items: [
            "Granular consent for each data type",
            "Revoke access at any time",
            "Export or delete your data",
            "Transparent data retention policies",
        ],
    },
    {
        icon: Users,
        title: "Team Access",
        items: [
            "Role-based visibility controls",
            "Athlete approves all team access",
            "Individual vs aggregate insights",
            "Emergency override protocols",
        ],
    },
];

export function TrustSection() {
    return (
        <section className="section relative">
            <div className="container-xl relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Trust, Privacy & Governance</h2>
                    <p className="text-gray-400 text-lg">
                        Clear boundaries. Explicit consent. Athletes own their data.
                    </p>
                </div>

                {/* Privacy grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {privacyPoints.map((point, index) => (
                        <div key={index} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="p-3 rounded-xl bg-accent/10 inline-block mb-4 border border-accent/20">
                                <point.icon className="h-6 w-6 text-accent" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">{point.title}</h3>
                            <ul className="space-y-3">
                                {point.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-sm text-gray-400 flex items-start gap-3"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 shrink-0" />
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
