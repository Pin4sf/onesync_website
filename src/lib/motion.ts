import { Variants } from "framer-motion";

// Easing curves - premium feel
export const easeOutCubic = [0.33, 1, 0.68, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutCubic = [0.65, 0, 0.35, 1] as const;

// ============================================
// BASIC ANIMATIONS
// ============================================

// Fade in from bottom - most common animation
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5, ease: easeOutCubic },
};

// Simple fade in
export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: easeOutCubic },
};

// Fade in with longer duration for hero elements
export const fadeInSlow = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: easeOutCubic },
};

// Scale in - for images/cards
export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: easeOutCubic },
};

// Slide in from left
export const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: easeOutCubic },
};

// Slide in from right
export const slideInRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: easeOutCubic },
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

// Stagger container for lists/grids
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// Stagger item
export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOutCubic },
    },
};

// For statistics counter animation delay
export const staggerStats: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
        },
    },
};

export const statItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOutCubic },
    },
};

// ============================================
// PREMIUM SCROLL-LINKED ANIMATIONS
// ============================================

// Premium reveal animation - for important content
export const scrollReveal = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: easeOutExpo },
};

// Stagger reveal for multiple items
export const staggerReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

export const staggerRevealItem: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOutExpo },
    },
};

// ============================================
// HERO ANIMATIONS
// ============================================

// Hero-specific animations with delays
export const heroAnimations = {
    label: {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.1, ease: easeOutCubic },
    },
    title: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.2, ease: easeOutExpo },
    },
    tagline: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.4, ease: easeOutCubic },
    },
    cta: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.6, ease: easeOutCubic },
    },
    image: {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: { duration: 1, delay: 0.3, ease: easeOutExpo },
    },
    floatingProduct: {
        initial: { opacity: 0, y: 40, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 1.2, delay: 0.5, ease: easeOutExpo },
    },
};

// ============================================
// INTERACTIVE ANIMATIONS
// ============================================

// Magnetic button effect presets
export const magneticHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
};

// Card hover animation
export const cardHover: Variants = {
    rest: {
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: easeOutCubic },
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: easeOutCubic },
    },
};

// Glow pulse animation
export const glowPulse: Variants = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: [0.5, 0.8, 0.5],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
};

// ============================================
// PARALLAX HELPERS
// ============================================

// Use with Framer Motion's useTransform for parallax effects
export const parallaxConfig = {
    slow: { inputRange: [0, 1], outputRange: ["0%", "-10%"] },
    medium: { inputRange: [0, 1], outputRange: ["0%", "-20%"] },
    fast: { inputRange: [0, 1], outputRange: ["0%", "-30%"] },
    reverse: { inputRange: [0, 1], outputRange: ["0%", "20%"] },
};

// ============================================
// 3D PERSPECTIVE ANIMATIONS
// ============================================

// 3D card tilt on hover
export const tilt3D = {
    rest: {
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.5, ease: easeOutCubic },
    },
    hover: {
        rotateX: -5,
        rotateY: 5,
        transition: { duration: 0.3, ease: easeOutCubic },
    },
};

// App mockup perspective animation
export const appPerspective: Variants = {
    hidden: {
        opacity: 0,
        rotateY: -15,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        transition: { duration: 0.8, ease: easeOutExpo },
    },
};

// ============================================
// FLOATING ANIMATIONS
// ============================================

// Gentle float animation for product images
export const floatAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    },
};

// Subtle rotation float
export const floatRotate = {
    initial: { y: 0, rotate: 0 },
    animate: {
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
        },
    },
};
