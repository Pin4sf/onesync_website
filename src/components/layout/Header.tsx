"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Product", href: "/product" },
    { name: "Technology", href: "/technology" },
    { name: "Team", href: "/team" },
];

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-lg border-b border-neutral-200"
                    : "bg-transparent"
            )}
        >
            <nav className="section-container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <span className={cn(
                        "text-xl font-light tracking-tight transition-colors",
                        isScrolled ? "text-text-dark" : "text-text-primary"
                    )}>
                        <span className="text-emerald-gradient font-normal">ONE</span>
                        <span>SYNC</span>
                    </span>
                </Link>

                {/* Desktop Nav Items */}
                <ul className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-light transition-colors",
                                        isScrolled
                                            ? isActive ? "text-text-dark" : "text-text-dark-muted hover:text-text-dark"
                                            : isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className={cn(
                                                "absolute inset-0 rounded-lg -z-10",
                                                isScrolled ? "bg-neutral-100" : "bg-white/10"
                                            )}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="mailto:contact@onesync.io"
                        className="inline-flex items-center gap-2 text-sm font-light text-white bg-emerald px-5 py-2.5 rounded-full hover:bg-emerald-light transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors touch-target",
                        isScrolled ? "text-text-dark-muted hover:text-text-dark" : "text-text-muted hover:text-text-primary"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-neutral-200 overflow-hidden"
                    >
                        <div className="section-container py-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-text-dark-secondary font-light hover:text-text-dark hover:bg-neutral-50 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-neutral-200">
                                <Link
                                    href="mailto:contact@onesync.io"
                                    className="block text-center text-sm font-light text-white bg-emerald px-5 py-3 rounded-full hover:bg-emerald-light transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
