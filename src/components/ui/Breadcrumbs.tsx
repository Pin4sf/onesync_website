"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbSegment {
    label: string;
    href?: string;
}

export function Breadcrumbs({ segments, variant = "light" }: { segments: BreadcrumbSegment[]; variant?: "light" | "dark" }) {
    const isDark = variant === "dark";

    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 py-4">
            {segments.map((segment, i) => (
                <motion.span
                    key={segment.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                >
                    {i > 0 && (
                        <span className={cn("aria-hidden", isDark ? "text-text-muted/40" : "text-text-dark-muted/40")} aria-hidden="true">/</span>
                    )}
                    {segment.href ? (
                        <Link
                            href={segment.href}
                            className={cn(
                                "text-sm font-light transition-colors",
                                isDark ? "text-text-muted hover:text-text-primary" : "text-text-dark-muted hover:text-text-dark"
                            )}
                        >
                            {segment.label}
                        </Link>
                    ) : (
                        <span
                            className={cn("text-sm font-light", isDark ? "text-text-primary" : "text-text-dark")}
                            aria-current="page"
                        >
                            {segment.label}
                        </span>
                    )}
                </motion.span>
            ))}
        </nav>
    );
}
