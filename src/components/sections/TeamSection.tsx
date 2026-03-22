"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NoiseTexture } from "@/components/backgrounds/NoiseTexture";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { Linkedin } from "lucide-react";

const team = [
    {
        name: "Ark Patil",
        role: "The Visionary",
        description: "CEO · Biosensing & Performance",
        image: "/team/Ark.jpeg",
        linkedIn: "https://linkedin.com/in/arkpatil",
    },
    {
        name: "Shivansh Fulper",
        role: "The Architect",
        description: "CTO · AI & Systems",
        image: "/team/Shivansh.png",
        linkedIn: "https://linkedin.com/in/shivanshfulper",
    },
    {
        name: "Ansh Bathija",
        role: "The Operator",
        description: "COO · Manufacturing & Ops",
        image: "/team/ANsh.jpeg",
        linkedIn: "https://linkedin.com/in/anshbathija",
    },
    {
        name: "Mayur Kumar",
        role: "The Builder",
        description: "CPO · Product & Hardware",
        image: "/team/Mayur.png",
        linkedIn: "https://www.linkedin.com/in/mayurrkr/",
    },
];

export function TeamSection() {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section
            ref={sectionRef}
            className="py-section-lg relative overflow-hidden bg-light-bg"
        >
            {/* Film grain texture overlay */}
            <NoiseTexture opacity={4} animated={true} />

            <div className="section-container relative z-10">
                <motion.div {...scrollReveal} className="text-center mb-16">
                    <SectionLabel>The Team</SectionLabel>

                    <h2 className="font-display text-h1 md:text-display text-text-dark font-light mb-4">
                        The People <span className="text-emerald-gradient">Behind It</span>
                    </h2>

                    <p className="text-body-lg text-text-dark-secondary font-light max-w-2xl mx-auto">
                        We&apos;re engineers, athletes, and builders who believe the next great AI needs to understand the human behind the screen.
                    </p>
                </motion.div>

                {/* Team Grid - No cards, seamless */}
                <motion.div
                    variants={staggerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
                >
                    {team.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={staggerRevealItem}
                            className="group text-center"
                        >
                            <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {/* Avatar */}
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <div className="w-full h-full rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden group-hover:ring-2 group-hover:ring-emerald/30 transition-all">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={96}
                                                height={96}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-2xl font-display font-extralight text-text-dark-muted group-hover:text-emerald transition-colors">
                                                {member.name.split(" ").map(n => n[0]).join("")}
                                            </span>
                                        )}
                                    </div>

                                    {/* LinkedIn indicator */}
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                        <Linkedin className="w-3 h-3 text-emerald" aria-hidden="true" />
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="font-light text-text-dark mb-1 group-hover:text-emerald transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-emerald font-light mb-1">
                                    {member.role}
                                </p>
                                <p className="text-xs text-text-dark-muted font-light">
                                    {member.description}
                                </p>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Subtle hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-xs text-text-dark-muted font-light flex items-center justify-center gap-2"
                >
                    <Linkedin className="w-3 h-3" aria-hidden="true" />
                    Connect on LinkedIn
                </motion.p>
            </div>
        </section>
    );
}
