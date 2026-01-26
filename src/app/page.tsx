import { Quote } from 'lucide-react';
import { Hero } from "@/components/landing/Hero";
import { ParadigmShift } from "@/components/landing/ParadigmShift";
import { TrustSection } from "@/components/landing/TrustSection";
import { RealTimeDemo } from "@/components/landing/RealTimeDemo";
import { ArchitectureFlow } from "@/components/landing/ArchitectureFlow";

export default function Home() {
    return (
        <div className="min-h-screen">
            <main>
                <Hero />
                <ParadigmShift />
                <TrustSection />
                <RealTimeDemo />
                <ArchitectureFlow />

                {/* Testimonials Section matching design */}
                {/* Testimonials Section - Obsidian Edge Design */}
                <section className="py-32 bg-obsidian-950 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none text-neon-purple font-display text-[100px] leading-none uppercase italic font-black -rotate-12 select-none">
                        Elite Science Elite Science Elite Science
                    </div>
                    <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                        <h3 className="text-center type-display text-4xl md:text-5xl text-white mb-24">
                            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Highest Standards</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                            <div className="glass-panel p-10 rounded-xl relative group">
                                <div className="absolute top-0 right-0 p-20 bg-neon-purple/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <Quote className="w-10 h-10 text-neon-purple mb-8 relative z-10" />
                                <p className="type-body mb-8 text-gray-300 relative z-10">
                                    &quot;Finally, a system that tells me when it doesn&apos;t know something. That honesty changes everything about how I trust the data.&quot;
                                </p>
                                <div className="border-t border-white/5 pt-6 relative z-10">
                                    <div className="font-bold text-xs type-mono text-white">
                                        Performance Director
                                    </div>
                                    <div className="text-[10px] text-neon-purple type-mono mt-1">
                                        Elite Sports Program
                                    </div>
                                </div>
                            </div>
                            <div className="glass-panel p-10 rounded-xl relative group">
                                <div className="absolute top-0 right-0 p-20 bg-neon-cyan/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <Quote className="w-10 h-10 text-neon-cyan mb-8 relative z-10" />
                                <p className="type-body mb-8 text-gray-300 relative z-10">
                                    &quot;The edge-first approach means my athletes&apos; raw biometrics stay private. That&apos;s not just a feature — it&apos;s a requirement.&quot;
                                </p>
                                <div className="border-t border-white/5 pt-6 relative z-10">
                                    <div className="font-bold text-xs type-mono text-white">
                                        Head of Sports Science
                                    </div>
                                    <div className="text-[10px] text-neon-cyan type-mono mt-1">
                                        Professional Team
                                    </div>
                                </div>
                            </div>
                            <div className="glass-panel p-10 rounded-xl relative group">
                                <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <Quote className="w-10 h-10 text-white mb-8 relative z-10" />
                                <p className="type-body mb-8 text-gray-300 relative z-10">
                                    &quot;I can clearly see what&apos;s inferred, what&apos;s measured, and what&apos;s uncertain. No other system gives me that transparency.&quot;
                                </p>
                                <div className="border-t border-white/5 pt-6 relative z-10">
                                    <div className="font-bold text-xs type-mono text-white">
                                        Senior Researcher
                                    </div>
                                    <div className="text-[10px] text-white/50 type-mono mt-1">
                                        Sports Medicine Institute
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-24 bg-white/[0.02] border border-white/5 p-4 rounded-full flex items-center justify-center space-x-6 max-w-xl mx-auto backdrop-blur-sm">
                            <div className="flex -space-x-3">
                                <div className="w-8 h-8 rounded-full bg-obsidian-800 border border-obsidian-950 ring-2 ring-obsidian-950"></div>
                                <div className="w-8 h-8 rounded-full bg-obsidian-700 border border-obsidian-950 ring-2 ring-obsidian-950"></div>
                                <div className="w-8 h-8 rounded-full bg-obsidian-800 border border-obsidian-950 ring-2 ring-obsidian-950"></div>
                            </div>
                            <span className="type-mono text-gray-500">
                                PEER_REVIEWED_COMPLIANCE <span className="text-neon-cyan mx-2">//</span> RESEARCH_STND_04
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
