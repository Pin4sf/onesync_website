"use client";

import { motion } from "framer-motion";
import { statItem } from "@/lib/motion";

interface StatBlockProps {
    value: string;
    label: string;
    sublabel?: string;
    highlight?: string;
    className?: string;
}

export function StatBlock({ value, label, sublabel, highlight, className = "" }: StatBlockProps) {
    return (
        <motion.div variants={statItem} className={`${className}`}>
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-4">
                {value}
            </div>
            <div className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                {label}
            </div>
            {sublabel && (
                <p className="text-body-sm text-text-muted max-w-xs">
                    {highlight ? (
                        <>
                            {sublabel.split(highlight)[0]}
                            <span className="font-semibold text-text-primary">{highlight}</span>
                            {sublabel.split(highlight)[1]}
                        </>
                    ) : (
                        sublabel
                    )}
                </p>
            )}
        </motion.div>
    );
}
