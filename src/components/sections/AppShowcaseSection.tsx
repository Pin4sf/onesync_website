"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AppScreenPlaceholder } from "@/components/placeholders";
import { scrollReveal, appPerspective, staggerReveal, staggerRevealItem } from "@/lib/motion";

const features = [
    { text: "Not Tracking, But", highlight: "Prediction" },
    { text: "Digital Twin", highlight: null },
    { text: "AI Driven", highlight: "Cognition" },
];

// Set to true when real app screenshots are available
const HAS_APP_SCREENSHOTS = false;

const appScreens = [
    {
        name: "Neural Analysis",
        description: "Real-time brain activity visualization",
        variant: "neural" as const,
        image: "/app/app-neural.png",
        rotation: -15,
    },
    {
        name: "Analytics",
        description: "Weekly recovery trends and biometrics",
        variant: "analytics" as const,
        image: "/app/app-analytics.png",
        rotation: 0,
    },
    {
        name: "Body Tracking",
        description: "Full body strain and fatigue monitoring",
        variant: "body" as const,
        image: "/app/app-body.png",
        rotation: 15,
    },
];

export function AppShowcaseSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax for the phone screens
    const centerY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const sideY = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            <div className="section-wide relative z-10">
                {/* Section Header */}
                <motion.div {...scrollReveal} className="text-center mb-16">
                    <SectionLabel>The Application</SectionLabel>
                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-4">
                        Your Mind, <span className="text-emerald-gradient">Visualized</span>
                    </h2>
                    <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl mx-auto">
                        Transform raw neural data into actionable insights
                    </p>
                </motion.div>

                {/* App Screens with 3D Perspective */}
                <div
                    className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mb-20"
                    style={{ perspective: 1200 }}
                >
                    {appScreens.map((screen, index) => {
                        const isCenter = index === 1;
                        const yMotion = isCenter ? centerY : sideY;

                        return (
                            <motion.div
                                key={screen.name}
                                variants={appPerspective}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                style={{
                                    y: yMotion,
                                    zIndex: isCenter ? 20 : 10,
                                }}
                                className={`relative group ${
                                    isCenter ? "lg:-mx-4" : "lg:first:-mr-8 lg:last:-ml-8"
                                }`}
                            >
                                {/* Phone container with 3D rotation */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: 0,
                                        z: 50,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    style={{
                                        rotateY: screen.rotation,
                                        transformStyle: "preserve-3d",
                                    }}
                                    className={`relative ${
                                        isCenter ? "scale-100 lg:scale-110" : "scale-90 lg:scale-95"
                                    }`}
                                >
                                    {/* Phone frame - minimal styling */}
                                    {HAS_APP_SCREENSHOTS ? (
                                        <div className="relative w-[260px] h-[520px] lg:w-[280px] lg:h-[560px] bg-neutral-100 rounded-[40px] p-2.5 shadow-lg">
                                            <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                                                <Image
                                                    src={screen.image}
                                                    alt={screen.name}
                                                    width={290}
                                                    height={580}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* Dynamic island */}
                                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-neutral-900 rounded-full" />
                                        </div>
                                    ) : (
                                        <div className="relative">
                                            <AppScreenPlaceholder variant={screen.variant} />
                                        </div>
                                    )}

                                    {/* Screen label */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
                                    >
                                        <p className="text-sm font-light text-text-dark mb-1">
                                            {screen.name}
                                        </p>
                                        <p className="text-xs text-text-dark-muted font-light">
                                            {screen.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Features Bar */}
                <motion.div
                    variants={staggerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8"
                >
                    {features.map((feature, index) => (
                        <motion.span
                            key={feature.text}
                            variants={staggerRevealItem}
                            className="flex items-center gap-6 md:gap-12"
                        >
                            <span className="text-base md:text-lg text-text-dark-muted font-light">
                                {feature.text}{" "}
                                {feature.highlight && (
                                    <strong className="text-emerald font-normal">
                                        {feature.highlight}
                                    </strong>
                                )}
                            </span>
                            {index < features.length - 1 && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald/30" />
                            )}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
