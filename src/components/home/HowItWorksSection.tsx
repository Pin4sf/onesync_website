import { Watch, Smartphone, Cloud, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: Watch,
        step: "01",
        title: "OneBand Senses & Computes",
        description:
            "Raw biosignals are captured and processed on-device. Critical features are computed at the edge. Raw data never leaves your wrist.",
        detail: "Computed on device",
    },
    {
        icon: Smartphone,
        step: "02",
        title: "OneSync Mobile Enforces Consent",
        description:
            "The mobile app manages what data syncs and when. You explicitly consent to each sharing decision. Encryption protects data in transit.",
        detail: "Consent-controlled",
    },
    {
        icon: Cloud,
        step: "03",
        title: "Cloud Aggregates Features Only",
        description:
            "Only computed features reach the cloud, never raw biometrics. This enables trend analysis while preserving your privacy boundary.",
        detail: "Features only",
    },
    {
        icon: BarChart3,
        step: "04",
        title: "Insights with Confidence",
        description:
            "Every insight comes with a confidence level. When data is insufficient, the system reports 'NO INFERENCE' rather than guessing.",
        detail: "Transparent output",
    },
];

export function HowItWorksSection() {
    return (
        <section className="section">
            <div className="container-xl">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="mb-4">How It Works</h2>
                    <p className="text-gray-400 text-lg">
                        A carefully designed pipeline that keeps you in control at every step.
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Connection line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-graphite-600 to-graphite-700 hidden md:block" />

                        {/* Step items */}
                        <div className="space-y-8">
                            {steps.map((item, index) => (
                                <div key={index} className="relative flex gap-6 md:gap-8">
                                    {/* Icon container */}
                                    <div className="relative z-10 shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-graphite-800 border border-graphite-700 flex items-center justify-center">
                                            <item.icon className="h-7 w-7 text-accent" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center">
                                            <span className="text-xs font-bold text-accent">{item.step}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="card flex-1 group hover:border-accent/30 transition-colors">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            <span className="badge bg-accent/10 text-accent text-xs">
                                                {item.detail}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
