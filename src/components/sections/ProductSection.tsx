"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductPlaceholder } from "@/components/placeholders";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { scrollReveal } from "@/lib/motion";
import { Brain, MessageSquare, Smartphone } from "lucide-react";

const features = [
    {
        title: "Your Readiness Score",
        Icon: Brain,
    },
    {
        title: "Delivered to Telegram",
        Icon: MessageSquare,
    },
    {
        title: "Works With Your Watch",
        Icon: Smartphone,
    },
];

// Set to true when real product image is available
const HAS_PRODUCT_IMAGE = true;
// Set to true when turntable video is available
const HAS_PRODUCT_VIDEO = false;

export function ProductSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax and rotation effects
    const productRotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
    const productScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

    return (
        <section
            ref={sectionRef}
            id="product"
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Background typography */}
            <BackgroundText text="AGENT" position="center" direction="left" speed={0.4} />

            <div className="section-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div {...scrollReveal} className="order-2 lg:order-1">
                        <SectionLabel>Meet Your Agent</SectionLabel>

                        <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-6">
                            It reads your{" "}
                            <span className="text-emerald-gradient">watch</span>
                            <br />
                            and tells you the truth
                        </h2>

                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-lg">
                            Every morning, OneSync tells you how sharp you actually are — not how you feel, but what your biology says. A score, an insight, and a plan — delivered to Telegram before your first coffee.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-wrap items-center gap-6">
                            {features.map((feature, index) => (
                                <span key={feature.title} className="flex items-center gap-6">
                                    <span className="flex items-center gap-2 text-text-dark-muted">
                                        <feature.Icon className="w-4 h-4 text-emerald" aria-hidden="true" />
                                        <span className="text-sm font-light">{feature.title}</span>
                                    </span>
                                    {index < features.length - 1 && (
                                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                                    )}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Visual with 3D Effect - No card container */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        style={{
                            perspective: 1000,
                        }}
                    >
                        <motion.div
                            style={{
                                rotateY: productRotateY,
                                scale: productScale,
                            }}
                            className="relative"
                        >
                            {/* Product container - seamless */}
                            <div className="relative">
                                {HAS_PRODUCT_VIDEO ? (
                                    <video
                                        ref={videoRef}
                                        src="/product/oneband-turntable.webm"
                                        muted
                                        playsInline
                                        loop
                                        autoPlay
                                        className="w-full rounded-2xl"
                                    >
                                        <source src="/product/oneband-turntable.webm" type="video/webm" />
                                        <source src="/product/oneband-turntable.mp4" type="video/mp4" />
                                    </video>
                                ) : HAS_PRODUCT_IMAGE ? (
                                    <Image
                                        src="/product/oneband-render.jpeg"
                                        alt="OneSync - The AI agent that reads your body"
                                        width={800}
                                        height={800}
                                        className="w-full h-auto"
                                        priority
                                    />
                                ) : (
                                    <ProductPlaceholder className="py-16" />
                                )}
                            </div>

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
