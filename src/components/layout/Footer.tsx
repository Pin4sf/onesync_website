import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-obsidian-950 pt-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-x-8 mb-32">
                    {/* Brand Column */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center border border-neon-cyan/20 mb-8">
                                <div className="w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_15px_#66FCF1]" />
                            </div>
                            <p className="text-gray-400 max-w-sm leading-relaxed font-light">
                                <span className="text-white font-medium">OneSync Intelligence.</span> Edge-first biometric processing for elite performance environments. Privacy by design.
                            </p>
                        </div>
                        <div className="mt-12 flex gap-4">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">System Operational</span>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Platform */}
                        <div className="flex flex-col gap-6">
                            <h4 className="mono-label">Platform</h4>
                            <ul className="space-y-4">
                                <li><Link href="/features" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Features</Link></li>
                                <li><Link href="/technology" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Technology</Link></li>
                                <li><Link href="/security" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Security</Link></li>
                                <li><Link href="/roadmap" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Roadmap</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col gap-6">
                            <h4 className="mono-label">Resources</h4>
                            <ul className="space-y-4">
                                <li><Link href="/docs" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Documentation</Link></li>
                                <li><Link href="/api" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">API Reference</Link></li>
                                <li><Link href="/status" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">System Status</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-6">
                            <h4 className="mono-label">Company</h4>
                            <ul className="space-y-4">
                                <li><Link href="/about" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">About</Link></li>
                                <li><Link href="/blog" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Blog</Link></li>
                                <li><Link href="/careers" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Careers</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div className="flex flex-col gap-6">
                            <h4 className="mono-label">Legal</h4>
                            <ul className="space-y-4">
                                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Privacy</Link></li>
                                <li><Link href="/terms" className="text-sm text-gray-400 hover:text-neon-cyan transition-colors">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Massive Typography */}
                <div className="border-t border-white/5 pt-12 pb-12 flex justify-between items-end">
                    <div className="text-[14vw] leading-[0.8] font-black font-condensed tracking-tighter text-white/5 select-none pointer-events-none mix-blend-overlay">
                        ONESYNC
                    </div>
                    <div className="hidden md:flex flex-col items-end pb-4">
                        <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-1">© 2026 OneSync Inc.</span>
                        <span className="text-[10px] font-mono text-obsidian-700 uppercase tracking-widest">San Francisco, CA</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
