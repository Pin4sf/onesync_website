import Link from "next/link";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-[#26262b]">
            <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 relative">
                            <img
                                src="/assets/oneband-logo.png"
                                alt="OneBand Logo"
                                className="w-full h-full object-contain invert"
                            />
                        </div>
                        <span className="font-bold text-lg tracking-tight font-condensed text-white">
                            OneBand
                        </span>
                    </Link>
                    <div className="hidden lg:flex items-center space-x-6 text-[11px] font-mono tracking-wider text-gray-500 uppercase">
                        {["Terminal", "Nodes", "Security_Logs", "Schema"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-vibrant-purple transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>SYSTEM_READY</span>
                    </div>
                    <button className="bg-white hover:bg-gray-200 text-black px-4 py-1.5 rounded text-[11px] font-bold uppercase tracking-tighter transition-all">
                        Deploy Instance
                    </button>
                </div>
            </div>
        </nav>
    );
}
