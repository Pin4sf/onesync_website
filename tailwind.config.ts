import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Obsidian Theme - "Obsidian Edge" Design System
                obsidian: {
                    950: "#020202", // The Void - Main Background
                    900: "#0A0A0B", // The Surface - Cards/Panels
                    800: "#141417", // The Border - Strokes/Dividers
                    700: "#1C1F26", // Muted interactive
                    600: "#2A2F3A", // Hover states
                },
                // High-vis accents - Legacy Neon & Semantic Signal
                neon: {
                    cyan: "#00F0FF",    // Secondary: Data Flow, Connectivity
                    purple: "#BF00FF",  // Primary: Intelligence, AI Brain
                    magenta: "#FF003C", // Action/Alert
                    green: "#39FF14",   // Success (Legacy)
                },
                // Functional Signals (The Signal)
                signal: {
                    success: "#10B981", // Emerald-500
                    warning: "#F59E0B", // Amber-500
                    error: "#EF4444",   // Red-500
                },
                gray: {
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                    400: "#9CA3AF",
                    500: "#6B7280",
                    600: "#4B5563",
                    800: "#1F2937",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"], // Clean legibility
                mono: ["var(--font-jetbrains-mono)", "Menlo", "monospace"], // Technical precision
                display: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"], // Headlines
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'obsidian-gradient': 'linear-gradient(to bottom right, #08090A, #020202)',
                'neon-gradient': 'linear-gradient(to right, #00F0FF, #BF00FF)',
                'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            },
            animation: {
                "fade-in": "fadeIn 0.7s ease-out forwards",
                "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 8s ease-in-out infinite",
                "glow": "glow 3s ease-in-out infinite alternate",
                "glitch": "glitch 1s linear infinite",
                "scanline": "scanline 8s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(0, 240, 255, 0.2)" },
                    "100%": { boxShadow: "0 0 20px rgba(0, 240, 255, 0.6), 0 0 10px rgba(0, 240, 255, 0.4)" },
                },
                glitch: {
                    "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
                    "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
                    "62%": { transform: "translate(0,0) skew(5deg)" },
                },
                scanline: {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(100%)" },
                }
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                widest: '0.25em',
            },
        },
    },
    plugins: [],
};

export default config;
