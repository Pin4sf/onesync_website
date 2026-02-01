"use client";

import { cn } from "@/lib/utils";

interface NoiseTextureProps {
    /** Opacity of the noise (0-100) */
    opacity?: number;
    /** Whether to animate the noise slightly */
    animated?: boolean;
    /** Additional class names */
    className?: string;
}

export function NoiseTexture({
    opacity = 4,
    animated = true,
    className,
}: NoiseTextureProps) {
    return (
        <>
            {/* SVG filter for noise generation */}
            <svg className="hidden">
                <filter id="noise-filter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>

            <div
                className={cn(
                    "absolute inset-0 pointer-events-none",
                    animated && "animate-noise",
                    className
                )}
                style={{
                    opacity: opacity / 100,
                    filter: "url(#noise-filter)",
                    mixBlendMode: "overlay",
                }}
                aria-hidden="true"
            />
        </>
    );
}
