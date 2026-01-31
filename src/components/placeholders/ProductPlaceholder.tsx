"use client";

import { motion } from "framer-motion";

/**
 * SVG placeholder for OneBand product - no external assets needed.
 * Replace with actual product image once available.
 */
export function ProductPlaceholder({ className = "" }: { className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${className}`}
        >
            <svg
                viewBox="0 0 400 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
            >
                {/* Glow effect */}
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="bandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="50%" stopColor="#2a2a2a" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                    <linearGradient id="displayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f0f0f" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                    <linearGradient id="emeraldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00381F" />
                        <stop offset="50%" stopColor="#0B5844" />
                        <stop offset="100%" stopColor="#187E5F" />
                    </linearGradient>
                    <linearGradient id="emeraldShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0B5844" />
                        <stop offset="25%" stopColor="#187E5F" />
                        <stop offset="50%" stopColor="#2AA17A" />
                        <stop offset="75%" stopColor="#187E5F" />
                        <stop offset="100%" stopColor="#0B5844" />
                    </linearGradient>
                </defs>

                {/* Shadow */}
                <ellipse
                    cx="200"
                    cy="180"
                    rx="120"
                    ry="15"
                    fill="rgba(0,0,0,0.4)"
                    filter="url(#glow)"
                />

                {/* Band body */}
                <rect
                    x="80"
                    y="70"
                    width="240"
                    height="60"
                    rx="30"
                    fill="url(#bandGradient)"
                    stroke="#333"
                    strokeWidth="1"
                />

                {/* Display area */}
                <rect
                    x="160"
                    y="80"
                    width="80"
                    height="40"
                    rx="8"
                    fill="url(#displayGradient)"
                    stroke="#444"
                    strokeWidth="0.5"
                />

                {/* Display content - time */}
                <text
                    x="200"
                    y="105"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="14"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="300"
                >
                    10:24
                </text>

                {/* Heart rate indicator */}
                <g transform="translate(170, 112)">
                    <circle cx="0" cy="0" r="3" fill="#00D46E" opacity="0.8">
                        <animate
                            attributeName="opacity"
                            values="0.8;0.4;0.8"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <text
                        x="8"
                        y="3"
                        fill="#737373"
                        fontSize="8"
                        fontFamily="system-ui, sans-serif"
                    >
                        68 BPM
                    </text>
                </g>

                {/* Emerald accent line */}
                <line
                    x1="160"
                    y1="78"
                    x2="240"
                    y2="78"
                    stroke="url(#emeraldAccent)"
                    strokeWidth="1"
                    opacity="0.8"
                />

                {/* Sensor dots on bottom */}
                <g opacity="0.4">
                    <circle cx="180" cy="128" r="4" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
                    <circle cx="200" cy="128" r="4" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
                    <circle cx="220" cy="128" r="4" fill="#1a1a1a" stroke="#333" strokeWidth="0.5" />
                </g>

                {/* Ambient glow */}
                <ellipse
                    cx="200"
                    cy="100"
                    rx="60"
                    ry="30"
                    fill="url(#emeraldShimmer)"
                    opacity="0.08"
                    filter="url(#glow)"
                />
            </svg>

            {/* "Prototype Render" label */}
            <p className="text-center text-xs text-text-muted mt-4 opacity-50">
                Prototype Render
            </p>
        </motion.div>
    );
}

/**
 * Smaller version for inline use
 */
export function ProductPlaceholderSmall({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg
                viewBox="0 0 200 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
            >
                <defs>
                    <linearGradient id="bandGradientSm" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="50%" stopColor="#2a2a2a" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                    </linearGradient>
                </defs>

                {/* Shadow */}
                <ellipse cx="100" cy="90" rx="60" ry="8" fill="rgba(0,0,0,0.3)" />

                {/* Band */}
                <rect
                    x="40"
                    y="35"
                    width="120"
                    height="30"
                    rx="15"
                    fill="url(#bandGradientSm)"
                    stroke="#333"
                    strokeWidth="0.5"
                />

                {/* Display */}
                <rect
                    x="80"
                    y="40"
                    width="40"
                    height="20"
                    rx="4"
                    fill="#0f0f0f"
                    stroke="#444"
                    strokeWidth="0.25"
                />
            </svg>
        </div>
    );
}
