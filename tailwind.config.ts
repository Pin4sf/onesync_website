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
                // Surface System - Dark (for hero only)
                surface: {
                    950: "#0a0a0a",
                    900: "#0f0f0f",
                    800: "#121212",
                    700: "#1a1a1a",
                    600: "#242424",
                    500: "#2a2a2a",
                },

                // Light Backgrounds
                light: {
                    bg: "#FAFAFA",
                    "bg-warm": "#F7F5F2",
                    surface: "#FFFFFF",
                    border: "#E5E5E5",
                    "border-subtle": "#EFEFEF",
                },

                // Brand Colors - Royal Emerald Green
                emerald: {
                    DEFAULT: "#0B5844",
                    light: "#187E5F",
                    dark: "#00381F",
                    shimmer: "#2AA17A",
                    glow: "#0B5844",
                },

                // Data Visualization Colors (darker for light bg)
                data: {
                    green: "#0B5844",
                    blue: "#2563EB",
                },

                // Text Colors - Dark theme (hero)
                text: {
                    primary: "#FFFFFF",
                    secondary: "#E5E5E5",
                    muted: "#737373",
                    disabled: "#525252",
                    // Light theme text
                    dark: "#1a1a1a",
                    "dark-secondary": "#404040",
                    "dark-muted": "#737373",
                },

                // Functional Colors
                functional: {
                    success: "#0B5844",
                    warning: "#D97706",
                    error: "#DC2626",
                },
            },

            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "Menlo", "Monaco", "monospace"],
            },

            fontSize: {
                // Display sizes - thin/light weights for premium feel
                'display-2xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '300' }],
                'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '300' }],
                'display-lg': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '300' }],
                'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],

                // Heading sizes - light weight
                'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '300' }],
                'h2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '300' }],
                'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '300' }],
                'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '300' }],

                // Body sizes - light weight
                'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '300' }],
                'body': ['1rem', { lineHeight: '1.7', fontWeight: '300' }],
                'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '300' }],

                // Labels
                'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '400' }],
                'caption': ['0.6875rem', { lineHeight: '1.4', fontWeight: '300' }],
            },

            backgroundImage: {
                // Emerald gradient for brand elements
                'emerald-gradient': 'linear-gradient(135deg, #00381F 0%, #0B5844 50%, #187E5F 100%)',
                'emerald-text': 'linear-gradient(90deg, #187E5F, #2AA17A, #187E5F)',
                'emerald-shimmer': 'linear-gradient(135deg, #0B5844 0%, #187E5F 25%, #2AA17A 50%, #187E5F 75%, #0B5844 100%)',

                // Subtle background gradients
                'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #121212 100%)',
                'dark-radial': 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 70%)',
                'section-fade': 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 100%)',

                // Subtle grid for optional use
                'grid-subtle': 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
            },

            // Simplified animations - subtle and premium
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "fade-in-slow": "fadeIn 0.8s ease-out forwards",
                "shimmer": "shimmer 3s linear infinite",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "0% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
            },

            letterSpacing: {
                tighter: '-0.02em',
                tight: '-0.01em',
                normal: '0',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
                'ultra-wide': '0.15em',
            },

            spacing: {
                'section': '6rem',      // 96px - Default section padding
                'section-lg': '8rem',   // 128px - Large sections
                'section-sm': '4rem',   // 64px - Compact sections
            },

            maxWidth: {
                'content': '1200px',
                'wide': '1400px',
                'full-bleed': '1600px',
            },

            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },

            boxShadow: {
                'glow-emerald': '0 0 40px rgba(11, 88, 68, 0.3)',
                'glow-emerald-lg': '0 0 80px rgba(24, 126, 95, 0.25)',
                'glow-emerald-shimmer': '0 0 60px rgba(42, 161, 122, 0.35)',
                'glow-green': '0 0 40px rgba(80, 227, 164, 0.2)',
                'glow-blue': '0 0 40px rgba(51, 102, 255, 0.15)',
                'card': '0 4px 24px rgba(0, 0, 0, 0.2)',
                'card-emerald': '0 4px 24px rgba(0, 56, 31, 0.3)',
            },
        },
    },
    plugins: [],
};

export default config;
