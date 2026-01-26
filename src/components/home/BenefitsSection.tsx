import { Shield, Brain, Cpu, User, ArrowRight } from "lucide-react";

const benefits = [
    {
        icon: Shield,
        title: "Trust by Design",
        description:
            "Privacy isn't an afterthought — it's built into every layer. Raw biometrics never leave your device. Only computed features travel when you consent.",
    },
    {
        icon: Brain,
        title: "Conditional Intelligence",
        description:
            "When signal quality drops or context is unclear, the system says 'NO INFERENCE' instead of guessing. Honesty is more valuable than completeness.",
    },
    {
        icon: Cpu,
        title: "Edge-First Computation",
        description:
            "Critical processing happens on the OneBand itself. This means faster insights, reduced latency, and complete control over your biometric data.",
    },
    {
        icon: User,
        title: "Athlete-Controlled Data",
        description:
            "You decide what's shared, when, and with whom. Consent is explicit, reversible, and auditable. Your performance data belongs to you.",
    },
];

export function BenefitsSection() {
    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent pointer-events-none opacity-50"></div>
            <div className="container-xl relative z-10">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Built for <span className="text-white">Trust</span></h2>
                    <p className="text-gray-400 text-lg">
                        Every design decision puts athlete safety, privacy, and transparency
                        first. No compromises.
                    </p>
                </div>

                {/* Benefits grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="glass-card group p-8 rounded-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                <ArrowRight className="w-5 h-5 text-accent" />
                            </div>

                            <div className="flex items-start gap-5 relative z-10">
                                <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors border border-accent/10 group-hover:border-accent/40">
                                    <benefit.icon className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
