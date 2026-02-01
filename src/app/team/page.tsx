"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal, staggerReveal, staggerRevealItem } from "@/lib/motion";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

const teamMembers = [
    {
        name: "Ark Patil",
        role: "Chief Executive Officer",
        bio: "Systems engineer with deep R&D expertise in biosensing and human performance. Won ISSS Awards 2025 at IISc Bangalore for a non-invasive sweat-analysis wearable. National level athlete with competitive training discipline that carries into building.",
        image: "/team/Ark.jpeg",
        linkedin: "https://linkedin.com/in/arkpatil",
        twitter: "https://twitter.com",
        email: "ark@onesync.io",
    },
    {
        name: "Shivansh Fulper",
        role: "Chief Technology Officer",
        bio: "Core contributor to Project EKA (IndiaAI Mission) 120B Indic MoE LLM. Built large-scale dataset curation pipelines and shipped ML systems in open-source and industry. Leads AI architecture and technical vision.",
        image: "/team/Shivansh.png",
        linkedin: "https://linkedin.com/in/shivanshfulper",
        twitter: "https://twitter.com",
        email: "shivansh@onesync.io",
    },
    {
        name: "Ansh Bathija",
        role: "Chief Operations Officer",
        bio: "Led SUPRA SAE aero redesign under a 16-day constraint achieving AIR 16 in Engineering Design. Built Clariflo, an electricity-free purification system under IP filing. Drives operational excellence and manufacturing strategy.",
        image: null,
        linkedin: "https://linkedin.com/in/anshbathija",
        twitter: "https://twitter.com",
        email: "ansh@onesync.io",
    },
    {
        name: "Mayur Kumar",
        role: "Chief Product Officer",
        bio: "Built and patented multiple assistive and wearable products. Special Jury Mention at IIT Jammu Invention Factory. Division-I level weightlifter bringing execution discipline to product development and user experience.",
        image: "/team/Mayur.png",
        linkedin: "https://linkedin.com/in/mayurkumar",
        twitter: "https://twitter.com",
        email: "mayur@onesync.io",
    },
];

const values = [
    {
        title: "Privacy First",
        description: "We believe your biometric data belongs to you. Our architecture ensures your most sensitive information never leaves your control.",
    },
    {
        title: "Scientific Rigor",
        description: "Every insight we deliver is grounded in peer-reviewed research and validated through rigorous testing protocols.",
    },
    {
        title: "Transparent AI",
        description: "We show our confidence levels and explain our reasoning. When we don't know, we say so explicitly.",
    },
    {
        title: "Human-Centered",
        description: "Technology should enhance human capability, not replace it. We design for empowerment, not dependency.",
    },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Dark */}
            <section className="min-h-[60vh] pt-24 pb-20 bg-surface-950 relative overflow-hidden flex items-center">
                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="max-w-3xl">
                        <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                            The Founding <span className="text-emerald-gradient">Team</span>
                        </h1>
                        <p className="text-body-lg text-text-secondary font-extralight leading-relaxed">
                            We're a team of engineers, scientists, and designers united by a
                            mission to make cognitive wellness measurable and actionable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="TEAM" position="top" direction="right" speed={0.4} />

                <div className="section-container relative z-10">
                    <motion.div
                        variants={staggerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-12 lg:gap-16"
                    >
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={staggerRevealItem}
                                className="group"
                            >
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Avatar */}
                                    <div className="shrink-0">
                                        <div className="w-24 h-24 rounded-2xl bg-neutral-100 overflow-hidden group-hover:ring-2 group-hover:ring-emerald/30 transition-all">
                                            {member.image ? (
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={96}
                                                    height={96}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-3xl font-display font-extralight text-text-dark-muted">
                                                    {member.name[0]}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-light text-text-dark mb-1 group-hover:text-emerald transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-emerald text-sm font-light mb-4">
                                            {member.role}
                                        </p>
                                        <p className="text-text-dark-muted text-sm font-light leading-relaxed mb-4">
                                            {member.bio}
                                        </p>

                                        {/* Social Links */}
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-text-dark-muted hover:text-emerald hover:bg-emerald/10 transition-colors"
                                                aria-label={`${member.name}'s LinkedIn`}
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={member.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-text-dark-muted hover:text-emerald hover:bg-emerald/10 transition-colors"
                                                aria-label={`${member.name}'s Twitter`}
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-text-dark-muted hover:text-emerald hover:bg-emerald/10 transition-colors"
                                                aria-label={`Email ${member.name}`}
                                            >
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="VALUES" position="center" direction="left" speed={0.3} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-16">
                        <SectionLabel>Our Values</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            What We <span className="text-emerald-gradient">Stand For</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
                    >
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={staggerRevealItem}
                                className="group"
                            >
                                <h3 className="text-lg font-light text-text-dark mb-3 group-hover:text-emerald transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-text-dark-muted font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Join Us CTA - Light */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <BackgroundText text="JOIN US" position="center" direction="right" speed={0.3} />

                <div className="section-container text-center relative z-10">
                    <motion.div {...scrollReveal}>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                            Join Our <span className="text-emerald-gradient">Mission</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            We're always looking for talented individuals who share our
                            passion for revolutionizing personal health technology.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="mailto:careers@onesync.io"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                            >
                                View Open Positions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="mailto:contact@onesync.io"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 text-text-dark font-light hover:text-emerald transition-colors"
                            >
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
