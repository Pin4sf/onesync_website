"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Technology", href: "/technology" },
    { name: "Team", href: "/team" },
];

const productInfo = {
    title: "ONEBAND powers",
    subtitle: "cognitive wellness",
    cta: { name: "Learn more", href: "/product" },
};

// Magnetic hover effect hook
function useMagnetic(strength: number = 0.3) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (clientX - left - width / 2) * strength;
        const y = (clientY - top - height / 2) * strength;
        setPosition({ x, y });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return { ref, position, handleMouse, reset };
}

// Animated link with blur/reveal effect
function AnimatedLink({
    href,
    children,
    className = "",
    showArrow = false,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
    showArrow?: boolean;
}) {
    const { ref, position, handleMouse, reset } = useMagnetic(0.2);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            ref={ref}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            onMouseMove={handleMouse}
            onMouseLeave={() => {
                reset();
                setIsHovered(false);
            }}
            onMouseEnter={() => setIsHovered(true)}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className={`group relative inline-flex items-center gap-2 ${className}`}
        >
            <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                    {children}
                </span>
                <span className="absolute left-0 top-0 inline-block translate-y-full text-emerald transition-transform duration-300 group-hover:translate-y-0">
                    {children}
                </span>
            </span>
            {showArrow && (
                <ArrowUpRight
                    className={`w-3 h-3 transition-all duration-300 ${
                        isHovered ? "opacity-100 translate-x-0 -translate-y-0" : "opacity-0 -translate-x-1 translate-y-1"
                    }`}
                />
            )}
        </motion.a>
    );
}

// Large brand text with blur telescope effect
function BrandText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative w-full overflow-hidden py-8 md:py-12 cursor-default select-none"
        >
            {/* Blur mask that follows cursor */}
            {isHovering && (
                <div
                    className="pointer-events-none absolute z-10 rounded-full transition-opacity duration-300"
                    style={{
                        left: mousePos.x - 100,
                        top: mousePos.y - 100,
                        width: 200,
                        height: 200,
                        background: "radial-gradient(circle, rgba(11,88,68,0.15) 0%, transparent 70%)",
                        filter: "blur(20px)",
                    }}
                />
            )}

            {/* Main text - blurred version */}
            <div className="relative">
                <h2
                    className={`text-[15vw] md:text-[12vw] font-extralight tracking-tighter leading-none text-center transition-all duration-500 ${
                        isHovering ? "blur-[2px] text-neutral-300" : "blur-0 text-neutral-200"
                    }`}
                    style={{ fontFamily: "system-ui, sans-serif" }}
                >
                    ONESYNC
                </h2>

                {/* Clear text revealed by cursor (telescope effect) */}
                {isHovering && (
                    <div
                        className="absolute inset-0 overflow-hidden pointer-events-none"
                        style={{
                            clipPath: `circle(120px at ${mousePos.x}px ${mousePos.y}px)`,
                        }}
                    >
                        <h2
                            className="text-[15vw] md:text-[12vw] font-extralight tracking-tighter leading-none text-center text-emerald"
                            style={{ fontFamily: "system-ui, sans-serif" }}
                        >
                            ONESYNC
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light-bg border-t border-neutral-200">
            {/* Main Footer Content */}
            <div className="section-container">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 py-16 md:py-20 border-b border-neutral-200">
                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xs font-light uppercase tracking-[0.2em] text-text-dark-muted mb-8">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <AnimatedLink
                                href="mailto:01nesync@gmail.com"
                                className="text-text-dark-secondary text-sm font-light"
                            >
                                01nesync@gmail.com
                            </AnimatedLink>
                            <div>
                                <AnimatedLink
                                    href="mailto:01nesync@gmail.com"
                                    className="text-text-dark-secondary text-sm font-light"
                                    showArrow
                                >
                                    Get in touch
                                </AnimatedLink>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <p className="text-xs text-text-dark-muted font-light mb-1">{productInfo.title}</p>
                            <p className="text-xs text-text-dark-muted font-light mb-4">{productInfo.subtitle}</p>
                            <AnimatedLink
                                href={productInfo.cta.href}
                                className="text-text-dark-secondary text-sm font-light"
                                showArrow
                            >
                                {productInfo.cta.name}
                            </AnimatedLink>
                        </div>
                    </div>

                    {/* Explore Column */}
                    <div>
                        <h4 className="text-xs font-light uppercase tracking-[0.2em] text-text-dark-muted mb-8">
                            Explore
                        </h4>
                        <div className="space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <AnimatedLink
                                        href={link.href}
                                        className="text-text-dark-secondary text-sm font-light"
                                    >
                                        {link.name}
                                    </AnimatedLink>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subscribe Column */}
                    <div>
                        <h4 className="text-xs font-light uppercase tracking-[0.2em] text-text-dark-muted mb-8">
                            Subscribe
                        </h4>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle subscription
                            }}
                            className="relative group"
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-neutral-300 pb-3 text-sm text-text-dark font-light placeholder:text-text-dark-muted focus:outline-none focus:border-emerald transition-colors"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 p-1 text-text-dark-muted hover:text-emerald transition-colors"
                                aria-label="Subscribe"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="transition-transform duration-300 group-focus-within:translate-x-1"
                                >
                                    <path
                                        d="M1 8H15M15 8L8 1M15 8L8 15"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-text-dark-muted font-light">
                            Get updates on product launches and news.
                        </p>
                    </div>
                </div>

                {/* Large Brand Text */}
                <BrandText />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 border-t border-neutral-200">
                    <p className="text-xs text-text-dark-muted font-light">
                        &copy;{currentYear} ONESYNC
                    </p>

                    <AnimatedLink href="/privacy" className="text-xs text-text-dark-muted font-light">
                        Privacy Policy
                    </AnimatedLink>

                    <div className="flex items-center gap-1 text-xs text-text-dark-muted font-light">
                        <span>Crafted by</span>
                        <AnimatedLink
                            href="https://onesync.io"
                            className="text-text-dark-muted font-light"
                            showArrow
                        >
                            OneSync Team
                        </AnimatedLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
