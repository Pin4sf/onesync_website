"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Product", href: "/product" },
    { name: "System", href: "/system" },
    { name: "Technology", href: "/technology" },
    { name: "Privacy", href: "/privacy" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
            <nav className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 animate-fade-in border border-white/10 shadow-2xl shadow-obsidian-950/50">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2 mr-4">
                    <div className="w-8 h-8 bg-obsidian-900 rounded-full flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full shadow-[0_0_10px_#66FCF1]" />
                    </div>
                    <span className="font-condensed font-bold tracking-tighter text-lg uppercase text-white group-hover:text-neon-cyan transition-colors">
                        OneSync
                    </span>
                </Link>

                {/* Nav Items */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors hover:text-neon-cyan",
                                        isActive ? "text-neon-cyan" : "text-gray-400"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/5 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA */}
                <div className="pl-4 border-l border-white/10 hidden md:block">
                    <Link
                        href="/demo"
                        className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-obsidian-950 bg-neon-cyan px-4 py-2 rounded-full hover:bg-neon-teal hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all font-bold"
                    >
                        <span>Live Demo</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
