"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    text: string;
    /** Direction of scroll - left means text moves left as user scrolls down */
    direction?: "left" | "right";
    /** Speed multiplier for the scroll effect */
    speed?: number;
    /** Styling variant */
    variant?: "outline" | "filled" | "gradient";
    /** Additional class names */
    className?: string;
}

export function Marquee({
    text,
    direction = "left",
    speed = 1,
    variant = "outline",
    className,
}: MarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Calculate movement based on scroll
    const baseMovement = 300 * speed;
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === "left" ? [baseMovement, -baseMovement] : [-baseMovement, baseMovement]
    );

    const variantStyles = {
        outline:
            "text-transparent [-webkit-text-stroke:1px_rgba(80,227,164,0.15)] [text-stroke:1px_rgba(80,227,164,0.15)]",
        filled: "text-surface-800/30",
        gradient: "text-emerald/10",
    };

    // Repeat text to ensure seamless loop
    const repeatedText = Array(4).fill(text).join(" \u00A0\u00A0\u00A0 ");

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative w-full overflow-hidden py-8 pointer-events-none select-none",
                className
            )}
            aria-hidden="true"
        >
            <motion.div
                style={{ x }}
                className={cn(
                    "whitespace-nowrap font-display text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold tracking-tighter",
                    variantStyles[variant]
                )}
            >
                {repeatedText}
            </motion.div>
        </div>
    );
}
