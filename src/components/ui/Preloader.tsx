"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Your Body", "Your Patterns", "Your Edge", "Your Agent", "OneSync"];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const easeOutQuart = [0.76, 0, 0.24, 1] as const;

export function Preloader() {
    const [visibleCount, setVisibleCount] = useState(0);
    const [progress, setProgress] = useState(0);

    // Smooth percentage counter 0 → 100
    useEffect(() => {
        const duration = 2800;
        const interval = 30;
        let current = 0;
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            current += step + Math.random() * 0.5;
            if (current >= 100) {
                setProgress(100);
                clearInterval(timer);
            } else {
                setProgress(Math.floor(current));
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    // Reveal words one by one
    useEffect(() => {
        if (visibleCount >= words.length) return;
        const delay = visibleCount === 0 ? 300 : 450;
        const timeout = setTimeout(
            () => setVisibleCount((c) => c + 1),
            delay
        );
        return () => clearTimeout(timeout);
    }, [visibleCount]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.9, ease: easeOutQuart, delay: 0.15 },
            }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-surface-950"
        >
            {/* Percentage counter */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.6 }}
                className="absolute top-8 right-8 font-mono text-sm text-text-muted tabular-nums"
            >
                {progress}%
            </motion.div>

            {/* Stacked word reveal */}
            <div className="flex flex-col items-center gap-1">
                {words.map((word, i) => {
                    const isVisible = i < visibleCount;
                    const isLast = i === words.length - 1;
                    const isActive = i === visibleCount - 1;

                    return (
                        <div key={word} className="overflow-hidden">
                            <motion.div
                                initial={{ y: "110%", opacity: 0 }}
                                animate={isVisible ? { y: "0%", opacity: 1 } : {}}
                                transition={{
                                    y: { duration: 0.6, ease: easeOutExpo },
                                    opacity: { duration: 0.4 },
                                }}
                                className="font-display font-light tracking-tight leading-none"
                                style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
                            >
                                {isLast ? (
                                    <span className="inline-flex">
                                        {word.split("").map((char, ci) => (
                                            <motion.span
                                                key={ci}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: ci * 0.05,
                                                    ease: easeOutExpo,
                                                }}
                                                className="text-emerald-gradient"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ) : (
                                    <motion.span
                                        animate={{
                                            opacity: isActive ? 0.85 : 0.3,
                                            color: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="text-text-primary"
                                    >
                                        {word}
                                    </motion.span>
                                )}
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Subtle tagline */}
            <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.2, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="mt-8 text-xs font-light text-text-muted tracking-[0.3em] uppercase"
            >
                Body First. Then Everything.
            </motion.p>

            {/* Progress bar */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-px bg-surface-800 overflow-hidden rounded-full">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.8, ease: easeOutExpo }}
                    className="h-full bg-gradient-to-r from-emerald/60 to-emerald origin-left"
                />
            </div>
        </motion.div>
    );
}
