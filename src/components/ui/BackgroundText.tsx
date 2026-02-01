"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundTextProps {
    text: string;
    /** Position of the text */
    position?: "top" | "center" | "bottom";
    /** Direction of scroll movement */
    direction?: "left" | "right";
    /** Speed multiplier */
    speed?: number;
    /** Additional class names */
    className?: string;
}

export function BackgroundText({
    text,
    position = "center",
    direction = "left",
    speed = 1,
    className,
}: BackgroundTextProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const baseMovement = 200 * speed;
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        direction === "left" ? [baseMovement, -baseMovement] : [-baseMovement, baseMovement]
    );

    const positionStyles = {
        top: "top-0",
        center: "top-1/2 -translate-y-1/2",
        bottom: "bottom-0",
    };

    return (
        <div
            ref={ref}
            className={cn(
                "absolute left-0 right-0 overflow-hidden pointer-events-none select-none",
                positionStyles[position],
                className
            )}
            aria-hidden="true"
        >
            <motion.div
                style={{ x }}
                className="whitespace-nowrap font-display text-[10rem] md:text-[14rem] lg:text-[18rem] font-extralight tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.10)] [text-stroke:1px_rgba(0,0,0,0.10)]"
            >
                {text} {text} {text}
            </motion.div>
        </div>
    );
}
