"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingStageProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingStage({ children, className }: FloatingStageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-3xl overflow-hidden",
        // Subtle gradient background - light with emerald tint
        "bg-gradient-to-br from-light-bg via-light-surface to-[#E8F5F1]",
        // Soft shadow for floating effect
        "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]",
        // Border for definition
        "border border-light-border-subtle",
        // Backdrop blur for glass effect
        "backdrop-blur-sm",
        className
      )}
    >
      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle inner glow at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

      {/* Emerald accent glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
