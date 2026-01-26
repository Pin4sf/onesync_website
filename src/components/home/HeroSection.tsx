import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Cpu, Eye, Lock } from "lucide-react";

export function HeroSection() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

            <div className="container-xl relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-graphite-800 border border-graphite-700 text-sm text-gray-400 mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Edge-First Wearable Intelligence
                    </div>

                    {/* Headline */}
                    <h1 className="text-gradient mb-6">
                        Intelligence That Respects Your Privacy
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                        OneSync processes data on your wrist, not in the cloud. Get actionable
                        insights with full transparency about what's measured, what's inferred,
                        and what's never collected.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/demo">
                                View Live Demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="secondary" size="lg" asChild>
                            <Link href="/system">See How It Works</Link>
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-graphite-800/50">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <Cpu className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                                <p className="font-medium text-white text-sm">Edge Computing</p>
                                <p className="text-gray-500 text-xs">Processed on device</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-graphite-800/50">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <Shield className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                                <p className="font-medium text-white text-sm">Privacy First</p>
                                <p className="text-gray-500 text-xs">Your data, your control</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-graphite-800/50">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <Eye className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                                <p className="font-medium text-white text-sm">Transparent</p>
                                <p className="text-gray-500 text-xs">Full explainability</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-graphite-800/50">
                            <div className="p-2 rounded-lg bg-accent/10">
                                <Lock className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                                <p className="font-medium text-white text-sm">Athlete Control</p>
                                <p className="text-gray-500 text-xs">Consent-first design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
