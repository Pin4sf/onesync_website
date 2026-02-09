"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "dark" | "light";
}

export function GlassCard({ children, className, variant = "light" }: GlassCardProps) {
    const isDark = variant === "dark";

    return (
        <div
            className={cn(
                "relative rounded-2xl transition-all duration-500",
                isDark
                    ? [
                        "bg-white/[0.03] backdrop-blur-xl backdrop-saturate-150",
                        "border border-white/[0.08]",
                        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
                        "hover:bg-white/[0.06] hover:border-white/[0.12]",
                    ]
                    : [
                        "bg-white/80 backdrop-blur-xl backdrop-saturate-150",
                        "border border-neutral-200/60",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]",
                        "hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08)] hover:border-emerald/15",
                    ],
                className
            )}
        >
            {/* Top-left highlight */}
            <div
                className={cn(
                    "absolute inset-0 rounded-2xl pointer-events-none",
                    isDark
                        ? "bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
                        : "bg-gradient-to-br from-white/60 via-transparent to-transparent"
                )}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
