"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { heroAnimations } from "@/lib/motion";
import { ChevronDown, ChevronRight } from "lucide-react";

// Set to true when product image is ready at /public/product/oneband-hero.png
const HAS_PRODUCT_IMAGE = true;
const HAS_HERO_VIDEO = true;
const DESKTOP_BREAKPOINT = 1024; // lg breakpoint - video only on desktop

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    // Check if desktop on mount and resize
    useEffect(() => {
        const checkIsDesktop = () => {
            setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
        };

        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return () => window.removeEventListener("resize", checkIsDesktop);
    }, []);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Parallax effects for scroll
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[150vh] overflow-hidden"
        >
            {/* Sticky container for hero content */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
                {/* Background Video/Image - Full Background */}
                <motion.div
                    style={{ y: imageY, scale: imageScale }}
                    className="absolute inset-0 z-0"
                >
                    {/* Video on desktop, Image on mobile/tablet */}
                    {HAS_HERO_VIDEO && isDesktop ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/product/oneband-hero.png"
                            className="absolute inset-0 w-full h-full object-cover object-[center_55%] xl:object-[center_60%]"
                        >
                            <source src="/video/Oneband.webm" type="video/webm" />
                            <source src="/video/Oneband.mp4" type="video/mp4" />
                        </video>
                    ) : HAS_PRODUCT_IMAGE ? (
                        <Image
                            src="/product/oneband-hero.png"
                            alt="OneBand"
                            fill
                            className="object-cover object-center lg:object-[center_55%] xl:object-[center_60%]"
                            priority
                            quality={95}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-surface-900" />
                    )}
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-surface-950/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-950/60 via-transparent to-surface-950/60" />
                </motion.div>

                {/* Content with scroll opacity */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                >
                    {/* Brand Name - Premium Typography, thinner weight */}
                    <motion.h1
                        {...heroAnimations.title}
                        className="font-display text-7xl md:text-8xl lg:text-[10rem] font-light tracking-tight mb-6"
                    >
                        <span className="text-text-primary">ONE</span>
                        <span className="text-text-primary">BAND</span>
                    </motion.h1>

                    {/* Tagline - lighter opacity */}
                    <motion.p
                        {...heroAnimations.tagline}
                        className="text-xl md:text-2xl lg:text-3xl text-text-muted/70 font-extralight tracking-wide"
                    >
                        Beyond Vital Signs. Into the Mind
                    </motion.p>
                </motion.div>

                {/* Explore Button - Bottom Right */}
                <motion.a
                    href="#product"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="group absolute bottom-12 right-8 md:right-16 z-10 inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                >
                    <span className="uppercase tracking-widest">Explore</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Scroll Indicator - Just chevron, no text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
