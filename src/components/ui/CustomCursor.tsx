"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "hover" | "text" | "heading";

export function CustomCursor() {
    const [cursorState, setCursorState] = useState<CursorState>("default");
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    // Motion values for smooth cursor movement
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Spring animation for smooth following effect
    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const getCursorSize = useCallback(() => {
        // All states are circles, just different sizes
        switch (cursorState) {
            case "heading":
                return 80; // Large circle for headings
            case "text":
                return 50; // Medium circle for text
            case "hover":
                return 60; // Circle for interactive elements
            default:
                return 20; // Default small circle
        }
    }, [cursorState]);

    useEffect(() => {
        // Check if mobile/touch device
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        // Track mouse leaving window
        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Track hover states on elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for interactive elements (links, buttons)
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.hasAttribute("data-cursor-hover") ||
                target.closest("[data-cursor-hover]");

            // Check for headings
            const isHeading =
                target.tagName === "H1" ||
                target.tagName === "H2" ||
                target.tagName === "H3" ||
                target.closest("h1") ||
                target.closest("h2") ||
                target.closest("h3");

            // Check for text elements (paragraphs, spans with substantial text)
            const isText =
                (target.tagName === "P" ||
                    target.tagName === "SPAN" ||
                    target.tagName === "LI") &&
                target.textContent &&
                target.textContent.length > 10;

            if (isInteractive) {
                setCursorState("hover");
            } else if (isHeading) {
                setCursorState("heading");
            } else if (isText) {
                setCursorState("text");
            } else {
                setCursorState("default");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", checkMobile);
        };
    }, [cursorX, cursorY]);

    // Don't render on mobile/touch devices
    if (isMobile) return null;

    const size = getCursorSize();

    return (
        <>
            {/* Main cursor - always circular */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="bg-white rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isVisible ? 1 : 0,
                        opacity: isVisible ? 1 : 0,
                        width: size,
                        height: size,
                        x: -size / 2,
                        y: -size / 2,
                    }}
                    transition={{
                        scale: { duration: 0.2 },
                        opacity: { duration: 0.2 },
                        width: { duration: 0.25, ease: "easeOut" },
                        height: { duration: 0.25, ease: "easeOut" },
                        x: { duration: 0.25, ease: "easeOut" },
                        y: { duration: 0.25, ease: "easeOut" },
                    }}
                />
            </motion.div>
        </>
    );
}
