"use client";

import { cn } from "@/lib/utils";

interface DotGridProps {
    /** Opacity of the dots (0-100) */
    opacity?: number;
    /** Size of each dot in pixels */
    dotSize?: number;
    /** Gap between dots in pixels */
    gap?: number;
    /** Dot color */
    color?: string;
    /** Additional class names */
    className?: string;
}

export function DotGrid({
    opacity = 6,
    dotSize = 2,
    gap = 32,
    color = "0, 0, 0",
    className,
}: DotGridProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 pointer-events-none",
                className
            )}
            style={{
                backgroundImage: `radial-gradient(circle, rgba(${color}, ${opacity / 100}) ${dotSize / 2}px, transparent ${dotSize / 2}px)`,
                backgroundSize: `${gap}px ${gap}px`,
                backgroundPosition: "center center",
            }}
            aria-hidden="true"
        />
    );
}
