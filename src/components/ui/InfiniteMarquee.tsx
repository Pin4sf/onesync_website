"use client";

import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
    items: string[];
    /** Direction of continuous scroll */
    direction?: "left" | "right";
    /** Duration of one complete cycle in seconds */
    duration?: number;
    /** Whether to pause on hover */
    pauseOnHover?: boolean;
    /** Additional class names */
    className?: string;
}

export function InfiniteMarquee({
    items,
    direction = "left",
    duration = 30,
    pauseOnHover = false,
    className,
}: InfiniteMarqueeProps) {
    const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

    return (
        <div
            className={cn(
                "relative flex overflow-hidden py-6",
                pauseOnHover && "group",
                className
            )}
            aria-hidden="true"
        >
            {/* First set */}
            <div
                className={cn(
                    "flex shrink-0 gap-8 md:gap-12",
                    animationClass,
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
                style={{ animationDuration: `${duration}s` }}
            >
                {items.map((item, idx) => (
                    <span
                        key={`${item}-${idx}`}
                        className="flex items-center gap-8 md:gap-12"
                    >
                        <span className="text-lg md:text-xl font-medium text-text-muted/50 whitespace-nowrap">
                            {item}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald/30" />
                    </span>
                ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div
                className={cn(
                    "flex shrink-0 gap-8 md:gap-12",
                    animationClass,
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
                style={{ animationDuration: `${duration}s` }}
            >
                {items.map((item, idx) => (
                    <span
                        key={`${item}-dup-${idx}`}
                        className="flex items-center gap-8 md:gap-12"
                    >
                        <span className="text-lg md:text-xl font-medium text-text-muted/50 whitespace-nowrap">
                            {item}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald/30" />
                    </span>
                ))}
            </div>
        </div>
    );
}
