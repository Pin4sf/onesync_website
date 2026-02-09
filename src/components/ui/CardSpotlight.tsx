"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardSpotlightProps {
    children: React.ReactNode;
    className?: string;
}

export function CardSpotlight({ children, className }: CardSpotlightProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-neutral-200 bg-white",
                "hover:border-emerald/20 transition-colors duration-500",
                className
            )}
        >
            {/* Spotlight gradient */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(11,88,68,0.08), transparent 40%)`,
                }}
            />
            {/* Border glow */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(11,88,68,0.15), transparent 40%)`,
                    mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />
            {children}
        </motion.div>
    );
}
