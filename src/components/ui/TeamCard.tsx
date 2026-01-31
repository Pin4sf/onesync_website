"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
    name: string;
    role: string;
    image?: string;
    linkedIn?: string;
}

export function TeamCard({ name, role, image, linkedIn }: TeamCardProps) {
    const CardWrapper = linkedIn ? "a" : "div";
    const cardProps = linkedIn ? { href: linkedIn, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
        >
            <CardWrapper
                {...cardProps}
                className="block group cursor-pointer"
            >
                {/* Photo */}
                <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-surface-800 border border-surface-600 group-hover:border-surface-500 transition-colors">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-text-muted">
                            <span className="text-4xl font-bold">{name[0]}</span>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                            {name}
                        </h3>
                        <p className="text-sm text-text-muted">
                            {role}
                        </p>
                    </div>
                    {linkedIn && (
                        <Linkedin className="w-5 h-5 text-text-muted group-hover:text-data-blue transition-colors" />
                    )}
                </div>
            </CardWrapper>
        </motion.div>
    );
}
