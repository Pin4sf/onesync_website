"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Technology", href: "/technology" },
    { name: "Team", href: "/team" },
    { name: "Investors", href: "/investor" },
];

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    // Scroll-aware: hide on scroll down, reveal on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;
        lastScrollY.current = latest;

        setIsScrolled(latest > 100);

        // Don't hide when mobile menu is open
        if (mobileMenuOpen) return;

        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else if (latest < previous) {
            setIsHidden(false);
        }
    });

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <motion.header
            animate={isHidden ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-lg border-b border-neutral-200"
                    : "bg-transparent"
            )}
        >
            <nav className="section-container flex items-center justify-between h-16" aria-label="Main navigation">
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
                                        "nav-link relative px-4 py-2 text-sm font-light transition-colors",
                                        isScrolled
                                            ? isActive ? "text-emerald font-medium" : "text-text-dark-muted hover:text-text-dark"
                                            : isActive ? "text-emerald font-medium" : "text-text-muted hover:text-text-primary"
                                    )}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <MagneticButton strength={0.25}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-light text-white bg-emerald px-5 py-2.5 rounded-full hover:bg-emerald-light transition-colors"
                        >
                            Contact Us
                        </Link>
                    </MagneticButton>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors touch-target",
                        isScrolled ? "text-text-dark-muted hover:text-text-dark" : "text-text-muted hover:text-text-primary"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" aria-hidden="true" />
                    ) : (
                        <Menu className="w-6 h-6" aria-hidden="true" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        role="navigation"
                        aria-label="Mobile navigation"
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
                                    href="/contact"
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
        </motion.header>
    );
}
