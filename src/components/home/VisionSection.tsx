import { X, Check, ShieldAlert, Zap } from "lucide-react";

export function VisionSection() {
    return (
        <section className="section relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>

            <div className="container-xl relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                        The <span className="text-gradient-primary">Paradigm Shift</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We are moving from an era of <span className="text-white">blind data extraction</span> to
                        an era of <span className="text-accent">intelligent edge processing</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Traditional approach (Dimmed) */}
                    <div className="glass-panel p-8 rounded-2xl border-white/5 opacity-60 hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-full bg-white/5">
                                <ShieldAlert className="h-6 w-6 text-gray-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-300">The Silent Standard</h3>
                                <p className="text-sm text-gray-500">How others handle your biology</p>
                            </div>
                        </div>
                        <ul className="space-y-6">
                            {[
                                "Raw biometrics streamed to unknown servers",
                                "Black-box AI with unexplained outputs",
                                "False confidence (never admits uncertainty)",
                                "Data ownership is unclear or non-existent"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                    <span className="text-gray-400">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* OneSync approach (Glowing) */}
                    <div className="glass-card p-8 rounded-2xl border-accent/20 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-full bg-accent/10 border border-accent/20 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                                    <Zap className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">The OneSync Standard</h3>
                                    <p className="text-sm text-accent">Intelligent, Transparent, Local.</p>
                                </div>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Edge computing — data never leaves without consent",
                                    "Transparent inference with explainable reasoning",
                                    "Honest uncertainty (NO INFERENCE is a valid state)",
                                    "Athlete-owned, privacy-native architecture"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)] animate-pulse"></div>
                                        <span className="text-gray-100">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
