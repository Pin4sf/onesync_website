"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundText } from "@/components/ui/BackgroundText";
import { DotGrid } from "@/components/backgrounds/DotGrid";
import { scrollReveal } from "@/lib/motion";
import {
    ArrowRight,
    Mail,
    FileText,
    Target,
    Lightbulb,
    TrendingUp,
    Users,
    DollarSign,
    Zap,
    Shield,
    BarChart3,
    Building,
    Handshake,
    CheckCircle2,
    RotateCcw
} from "lucide-react";

// Lean Canvas Data
const leanCanvas = {
    problem: {
        title: "Problem",
        icon: Target,
        items: [
            "Every AI agent is blind to your body — they optimize output without knowing your input",
            "Health apps have 3-12% 30-day retention because dashboards are passive",
            "62% of knowledge workers report burnout (HBR 2026)"
        ],
        backTitle: "Existing Alternatives",
        backContent: [
            "WHOOP Coach: proactive but in-app only, $30/mo, single-device",
            "Oura Advisor: reactive, ring-only, no external messaging",
            "Nori (YC): iOS only, data syncing issues, no real-time alerts",
            "Lindy/Manus: zero biological awareness"
        ]
    },
    solution: {
        title: "Solution",
        icon: Lightbulb,
        items: [
            "AI agent that reads your wearable and acts proactively via Telegram",
            "Cognitive Readiness Score (0-100) from sleep, HRV, circadian rhythm, activity",
            "Learns your patterns over weeks — stress triggers, recovery strategies"
        ],
        backTitle: "How It Works",
        backContent: [
            "Wearable → HealthKit/Health Connect → CRS on-phone",
            "Rules pre-filter (60-80% skip Claude = $0 cost)",
            "Claude Haiku 4.5 with 8 tools, 3 iterations max",
            "Proactive morning brief + stress alerts on Telegram"
        ]
    },
    keyMetrics: {
        title: "Key Metrics",
        icon: BarChart3,
        items: [
            "Day 30 retention (target: >30% vs industry 3-12%)",
            "Morning brief open rate",
            "Feedback loop engagement (thumbs up/down)",
            "CRS accuracy vs subjective ratings"
        ],
        backTitle: "Success Indicators",
        backContent: [
            "5-7 daily active beta users for 14+ days",
            "Proactive messaging drives >3x engagement vs passive",
            "Pattern discovery after 2+ weeks of data",
            "Break-even at ~50 Pro subscribers"
        ]
    },
    uniqueValue: {
        title: "Unique Value Proposition",
        icon: Zap,
        highlight: "The biological intelligence layer for the agentic economy. No agent knows your body — OneSync changes that."
    },
    unfairAdvantage: {
        title: "Unfair Advantage",
        icon: Shield,
        items: [
            "Biology is the only un-replicable data layer",
            "Data flywheel compounds over months — switching cost is total",
            "Device-agnostic + external messaging + cross-platform = empty quadrant",
            "Architecture distilled from 13 production agent systems"
        ],
        backTitle: "The Moat",
        backContent: [
            "Day 1: Population defaults. Week 2: Personal baselines.",
            "Month 1: Feedback loop active. Month 3: Deep patterns.",
            "Month 6: Predictive. Year 1: Agent knows you better than you.",
            "Every thumbs-up = labeled training data no competitor has"
        ]
    },
    channels: {
        title: "Channels",
        icon: TrendingUp,
        items: [
            "Telegram community (wearable + productivity enthusiasts)",
            "Product Hunt / Hacker News launch",
            "Twitter/X developer & health tech communities"
        ]
    },
    customerSegments: {
        title: "Customer Segments",
        icon: Users,
        items: [
            "Startup founders (14-hour days, no boundaries)",
            "Software engineers (deep work, meeting fatigue)",
            "Product managers (context-switching burnout)",
            "Students & remote workers (always-on culture)"
        ],
        backTitle: "Target Profile",
        backContent: [
            "Wears a smartwatch but gets zero actionable value",
            "Uses productivity tools blind to their body",
            "Knowledge worker experiencing burnout",
            "Early adopter comfortable with Telegram"
        ]
    },
    costStructure: {
        title: "Cost Structure",
        icon: DollarSign,
        items: [
            "MVP build cost: ~$466 USD (extremely capital-efficient)",
            "Claude Haiku: ~$0.90/user/mo at Pro tier",
            "Supabase free tier + keep-alive",
            "Engineering (solo founder + Claude Code)"
        ]
    },
    revenueStreams: {
        title: "Revenue Streams",
        icon: TrendingUp,
        items: [
            "Free tier: acquisition (1 brief/day, basic CRS)",
            "Pro: Rs 399/mo ($4.34) — full agent, patterns, unlimited alerts",
            "Team: Rs 999/mo/seat — team cognitive dashboards",
            "Future: Body API (MCP/A2A) for other agents"
        ],
        backTitle: "Unit Economics",
        backContent: [
            "Pro: $4.34 revenue, $0.90 AI cost = 79% margin",
            "Team: $10.87 revenue, $0.90 AI cost = 92% margin",
            "Break-even: ~50 Pro subscribers",
            "Comfortable profitability at 200 subscribers"
        ]
    }
};

// Business Model Canvas Data
const businessModelCanvas = {
    keyPartners: {
        title: "Key Partners",
        icon: Handshake,
        items: [
            "Anthropic (Claude Haiku 4.5 — core AI engine)",
            "Supabase (backend infrastructure)",
            "Telegram (primary delivery channel)",
            "Wearable OEMs (Health Connect / HealthKit ecosystem)"
        ],
        backTitle: "Partnership Strategy",
        backContent: [
            "Academic validation partners for CRS algorithm",
            "Telegram bot community for distribution",
            "Integration with MCP/A2A for agent interop",
            "Potential WHOOP/Oura API partnerships (Phase 3)"
        ]
    },
    keyActivities: {
        title: "Key Activities",
        icon: Zap,
        items: [
            "CRS algorithm development & validation",
            "Agent personality tuning & quality gates",
            "Cross-platform health data pipeline",
            "User feedback loop → agent learning"
        ],
        backTitle: "Core Focus Areas",
        backContent: [
            "Proactive messaging that drives retention",
            "Pattern discovery from longitudinal data",
            "Privacy-first health data architecture",
            "Capital-efficient single-founder execution"
        ]
    },
    keyResources: {
        title: "Key Resources",
        icon: Building,
        items: [
            "Agent OS architecture from 13 production systems",
            "SAFTE-FAST validated CRS science",
            "Claude Code as force multiplier",
            "Biological data flywheel (un-replicable)"
        ],
        backTitle: "Competitive Assets",
        backContent: [
            "Labeled training data: subjective + biometric, at scale",
            "Personal baselines that deepen over months",
            "Architecture validated against real agent codebases",
            "50-150x more capital-efficient than avg health tech MVP"
        ]
    },
    valueProposition: {
        title: "Unique Value Proposition",
        icon: Target,
        highlight: "The biological intelligence layer for the agentic economy. Every AI agent will need to know your body — OneSync is that layer."
    },
    customerRelationship: {
        title: "Customer Relationship",
        icon: Users,
        items: [
            "AI onboarding interview (3-5 min, Day 0)",
            "Progressive trust: advise → suggest → act autonomously",
            "Agent learns from every interaction — gets smarter over weeks"
        ]
    },
    channels: {
        title: "Channels",
        icon: TrendingUp,
        items: [
            "Telegram community + word of mouth",
            "Product Hunt / Hacker News launch",
            "Health tech + AI agent Twitter/X communities"
        ]
    },
    customerSegments: {
        title: "Customer Segments",
        icon: Users,
        items: [
            "Burned-out startup founders",
            "Software engineers (deep work protection)",
            "Product managers (decision fatigue)",
            "Students & remote workers"
        ],
        backTitle: "Ideal Customer Profile",
        backContent: [
            "Wears a smartwatch, gets zero actionable value",
            "Uses AI tools that have zero body awareness",
            "Knowledge worker experiencing burnout",
            "Comfortable with Telegram, early adopter mindset"
        ]
    },
    costStructure: {
        title: "Cost Structure",
        icon: DollarSign,
        items: [
            "AI inference: Claude Haiku $0.90/user/mo",
            "Infrastructure: Supabase free tier",
            "Total MVP build: ~$466 USD",
            "Solo founder execution with Claude Code"
        ]
    },
    revenueStreams: {
        title: "Revenue Streams",
        icon: DollarSign,
        items: [
            "Free: Acquisition tier",
            "Pro: Rs 399/mo ($4.34) — 79% margin",
            "Team: Rs 999/mo/seat — 92% margin",
            "Future: Body API for other agents"
        ],
        backTitle: "Revenue Model",
        backContent: [
            "SaaS-only, no hardware dependency",
            "Break-even at ~50 Pro subscribers",
            "Profitable at 200 subscribers",
            "Body API (MCP/A2A) = platform revenue at scale"
        ]
    }
};

// Competitive Advantage Data
const competitiveData = {
    parameters: ["Body Awareness", "Proactive Messaging", "External Channel", "Multi-Device", "Cross-Platform", "Price"],
    competitors: [
        {
            name: "OneSync",
            highlight: true,
            values: [
                "Deep (HRV, CRS, stress detection)",
                "Morning brief + real-time alerts",
                "Telegram (WhatsApp planned)",
                "Any HealthKit / Health Connect watch",
                "Android + iOS from MVP",
                "Free / $4.34/mo"
            ]
        },
        {
            name: "WHOOP Coach",
            highlight: false,
            values: [
                "Deep (recovery, strain)",
                "In-app only, no external delivery",
                "No external channel",
                "WHOOP band only",
                "iOS + Android",
                "$17-30/mo"
            ]
        },
        {
            name: "Nori (YC)",
            highlight: false,
            values: [
                "Aggregated from multiple sources",
                "Morning plan only",
                "No external channel",
                "Multi-wearable",
                "iOS only",
                "TBD"
            ]
        },
        {
            name: "Lindy / Manus",
            highlight: false,
            values: [
                "None — zero biological awareness",
                "Yes, proactive agents",
                "Multiple channels",
                "N/A — no wearable integration",
                "Web only",
                "$50/mo"
            ]
        }
    ]
};

// Flip Card Component - shows all content, flips on CLICK to reveal more details
function FlipCard({
    title,
    icon: Icon,
    items,
    highlight,
    backContent,
    backTitle,
    className = "",
    delay = 0
}: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    items?: string[];
    highlight?: string;
    backContent?: string[];
    backTitle?: string;
    className?: string;
    delay?: number;
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const hasBackContent = backContent && backContent.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.05 }}
            viewport={{ once: true }}
            className={`relative h-full ${className}`}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className={`relative w-full h-full ${hasBackContent ? "cursor-pointer" : ""}`}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => hasBackContent && setIsFlipped(!isFlipped)}
            >
                {/* Front Side */}
                <div
                    className="relative w-full h-full rounded-[20px] bg-white/60 backdrop-blur-[40px] backdrop-saturate-[180%] border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-6 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Top highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-[20px]" />

                    {/* Flip indicator for cards with back content */}
                    {hasBackContent && (
                        <div className="absolute top-5 right-5 text-emerald/40">
                            <RotateCcw className="w-4 h-4" />
                        </div>
                    )}

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-emerald" />
                            </div>
                            <h3 className="text-lg font-light text-slate-900">
                                {title}
                            </h3>
                        </div>

                        {/* Highlight text */}
                        {highlight && (
                            <p className="text-base text-slate-700 font-light leading-relaxed">
                                {highlight}
                            </p>
                        )}

                        {/* Items list - all visible */}
                        {items && (
                            <ul className="space-y-2">
                                {items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm text-slate-600 font-light"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Back Side */}
                {hasBackContent && (
                    <div
                        className="absolute inset-0 w-full h-full rounded-[20px] bg-emerald/10 backdrop-blur-[40px] backdrop-saturate-[180%] border border-emerald/20 shadow-[0_12px_40px_rgba(0,0,0,0.1)] p-6"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                        }}
                    >
                        {/* Top highlight */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent rounded-t-[20px]" />

                        {/* Flip back indicator */}
                        <div className="absolute top-5 right-5 text-emerald/60">
                            <RotateCcw className="w-4 h-4" />
                        </div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-emerald/20 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-emerald" />
                                </div>
                                <h3 className="text-lg font-light text-emerald">
                                    {backTitle || "Details"}
                                </h3>
                            </div>

                            {/* Back content */}
                            <ul className="space-y-2">
                                {backContent.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm text-slate-700 font-light"
                                    >
                                        <span className="text-emerald">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

// Section hint component for flip cards
function FlipHint() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs text-slate-400 font-light"
        >
            <RotateCcw className="w-3 h-3" />
            <span>Click cards to reveal more details</span>
        </motion.div>
    );
}

export default function InvestorPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Dark */}
            <section className="min-h-[60vh] pt-24 pb-20 bg-surface-950 relative overflow-hidden flex items-center">
                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                            <span className="text-xs font-light text-emerald uppercase tracking-wider">
                                Investor Relations
                            </span>
                        </motion.div>
                        <h1 className="font-display text-display-lg md:text-display-xl text-text-primary font-light mb-6 tracking-tight">
                            The <span className="text-emerald-gradient">Opportunity</span>
                        </h1>
                        <p className="text-body-lg text-text-secondary font-extralight leading-relaxed mb-8">
                            Half of Y Combinator&apos;s latest batch is building AI agents. Every one of them is blind to the human body. We&apos;re building the missing layer — and the window is closing fast.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="https://drive.google.com/file/d/1Kmd4depasXneVOiyTcUm8H7oSps5MxiP/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                            >
                                <FileText className="w-4 h-4" />
                                View Pitch Deck
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="mailto:01nesync@gmail.com"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 text-text-primary font-light hover:text-emerald transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Lean Canvas Section */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="LEAN CANVAS" position="top" direction="right" speed={0.4} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-12">
                        <SectionLabel>Business Strategy</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Lean <span className="text-emerald-gradient">Canvas</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mt-4 max-w-2xl mx-auto">
                            A consumer AI health agent built at extreme capital efficiency — $466 MVP cost, 79% margins at scale.
                        </p>
                    </motion.div>

                    {/* Hint for flip interaction */}
                    <div className="flex justify-end mb-4 max-w-6xl mx-auto">
                        <FlipHint />
                    </div>

                    {/* Lean Canvas Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-fr">
                        {/* Row 1 */}
                        <FlipCard {...leanCanvas.problem} delay={0} className="lg:col-span-2" />
                        <FlipCard {...leanCanvas.solution} delay={1} />
                        <FlipCard {...leanCanvas.uniqueValue} delay={2} />

                        {/* Row 2 */}
                        <FlipCard {...leanCanvas.keyMetrics} delay={3} />
                        <FlipCard {...leanCanvas.unfairAdvantage} delay={4} />
                        <FlipCard {...leanCanvas.channels} delay={5} />
                        <FlipCard {...leanCanvas.customerSegments} delay={6} />

                        {/* Row 3 */}
                        <FlipCard {...leanCanvas.costStructure} delay={7} className="lg:col-span-2" />
                        <FlipCard {...leanCanvas.revenueStreams} delay={8} className="lg:col-span-2" />
                    </div>
                </div>
            </section>

            {/* Business Model Canvas Section */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="BUSINESS MODEL" position="center" direction="left" speed={0.3} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-12">
                        <SectionLabel>Operations</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            Business Model <span className="text-emerald-gradient">Canvas</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mt-4 max-w-2xl mx-auto">
                            How we turn wearable data into a compounding moat that no competitor can replicate.
                        </p>
                    </motion.div>

                    {/* Hint for flip interaction */}
                    <div className="flex justify-end mb-4 max-w-6xl mx-auto">
                        <FlipHint />
                    </div>

                    {/* Business Model Canvas Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-fr">
                        {/* Row 1 */}
                        <FlipCard {...businessModelCanvas.keyPartners} delay={0} />
                        <FlipCard {...businessModelCanvas.keyActivities} delay={1} />
                        <FlipCard {...businessModelCanvas.keyResources} delay={2} />
                        <FlipCard {...businessModelCanvas.valueProposition} delay={3} />

                        {/* Row 2 */}
                        <FlipCard {...businessModelCanvas.customerRelationship} delay={4} />
                        <FlipCard {...businessModelCanvas.channels} delay={5} />
                        <FlipCard {...businessModelCanvas.customerSegments} delay={6} className="lg:col-span-2" />

                        {/* Row 3 */}
                        <FlipCard {...businessModelCanvas.costStructure} delay={7} className="lg:col-span-2" />
                        <FlipCard {...businessModelCanvas.revenueStreams} delay={8} className="lg:col-span-2" />
                    </div>
                </div>
            </section>

            {/* Competitive Advantage Section */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <DotGrid opacity={10} gap={28} />
                <BackgroundText text="ADVANTAGE" position="center" direction="right" speed={0.3} />

                <div className="section-container relative z-10">
                    <motion.div {...scrollReveal} className="text-center mb-16">
                        <SectionLabel>Market Position</SectionLabel>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light">
                            The Empty <span className="text-emerald-gradient">Quadrant</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mt-4 max-w-2xl mx-auto">
                            Every competitor has a piece. Nobody has put it all together. Here&apos;s where we sit.
                        </p>
                    </motion.div>

                    {/* Competitive Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <div className="min-w-[800px] relative overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-[40px] backdrop-saturate-[180%] border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                            {/* Top highlight */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />

                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="p-6 text-left text-sm font-medium text-slate-500 uppercase tracking-wider bg-slate-50/50">
                                            Parameters
                                        </th>
                                        {competitiveData.competitors.map((comp, idx) => (
                                            <th
                                                key={idx}
                                                className={`p-6 text-left text-sm font-medium uppercase tracking-wider ${
                                                    comp.highlight
                                                        ? "bg-emerald/10 text-emerald"
                                                        : "text-slate-500 bg-slate-50/50"
                                                }`}
                                            >
                                                {comp.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {competitiveData.parameters.map((param, paramIdx) => (
                                        <motion.tr
                                            key={paramIdx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: paramIdx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="border-b border-slate-100 last:border-0 group hover:bg-slate-50/50 transition-colors"
                                        >
                                            <td className="p-6 text-sm font-medium text-slate-700">
                                                {param}
                                            </td>
                                            {competitiveData.competitors.map((comp, compIdx) => (
                                                <td
                                                    key={compIdx}
                                                    className={`p-6 text-sm font-light ${
                                                        comp.highlight
                                                            ? "text-slate-800 bg-emerald/5"
                                                            : "text-slate-600"
                                                    }`}
                                                >
                                                    <div className="flex items-start gap-2">
                                                        {comp.highlight && (
                                                            <CheckCircle2 className="w-4 h-4 text-emerald mt-0.5 shrink-0" />
                                                        )}
                                                        <span>{comp.values[paramIdx]}</span>
                                                    </div>
                                                </td>
                                            ))}
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-section-lg relative overflow-hidden bg-light-bg">
                <BackgroundText text="PARTNER" position="center" direction="right" speed={0.3} />

                <div className="section-container text-center relative z-10">
                    <motion.div {...scrollReveal}>
                        <h2 className="font-display text-display md:text-display-lg text-text-dark font-light mb-6">
                            Let&apos;s <span className="text-emerald-gradient">Talk</span>
                        </h2>
                        <p className="text-body-lg text-text-dark-secondary font-light mb-10 max-w-xl mx-auto">
                            Pre-seed: $55K-$110K. Total MVP cost: $466. That&apos;s 50-150x more capital-efficient than the average health tech startup. We build fast because we build smart.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                href="mailto:01nesync@gmail.com"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                Schedule a Call
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="https://drive.google.com/file/d/1Kmd4depasXneVOiyTcUm8H7oSps5MxiP/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-8 py-4 text-text-dark font-light hover:text-emerald transition-colors"
                            >
                                <FileText className="w-4 h-4" />
                                Download Pitch Deck
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
