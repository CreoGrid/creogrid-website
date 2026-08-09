"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Sparkles,
    Megaphone,
    Target,
    Apple,
    BarChart3,
    Bell,
    ArrowRight,
    BrainCircuit,
    Radar,
    Dumbbell,
    LineChart,
} from "lucide-react";
import { Badge } from "./primitives/Badge";
import { Button } from "./primitives/Button";
import { SectionHeading, GradientText } from "./primitives/ui";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./primitives/motion";

const COLOR_MAP: Record<
    string,
    {
        text: string;
        bgMuted: string;
        border: string;
        glow: string;
        bullet: string;
        gradient: string;
        borderHover: string;
    }
> = {
    "growth-coach": {
        text: "text-torqone-ai",
        bgMuted: "bg-torqone-ai-muted",
        border: "border-torqone-ai/20",
        glow: "shadow-torqone-ai",
        bullet: "bg-torqone-ai",
        gradient: "from-[#7B5CFF] to-[#00D4FF]",
        borderHover: "hover:border-torqone-ai/40",
    },
    "monitoring-engine": {
        text: "text-torqone-accent",
        bgMuted: "bg-torqone-accent-muted",
        border: "border-torqone-accent/20",
        glow: "shadow-torqone-accent",
        bullet: "bg-torqone-accent",
        gradient: "from-[#00D4FF] to-[#3A5DE2]",
        borderHover: "hover:border-torqone-accent/40",
    },
    "prediction-engine": {
        text: "text-torqone-ai",
        bgMuted: "bg-torqone-ai-muted",
        border: "border-torqone-ai/20",
        glow: "shadow-torqone-ai",
        bullet: "bg-torqone-ai",
        gradient: "from-[#7B5CFF] to-[#EF4444]",
        borderHover: "hover:border-torqone-ai/40",
    },
    "lead-acquisition": {
        text: "text-torqone-success",
        bgMuted: "bg-torqone-success-muted",
        border: "border-torqone-success/20",
        glow: "shadow-torqone-success",
        bullet: "bg-torqone-success",
        gradient: "from-[#22C55E] to-[#00D4FF]",
        borderHover: "hover:border-torqone-success/40",
    },
    "marketing-engine": {
        text: "text-torqone-warning",
        bgMuted: "bg-torqone-warning-muted",
        border: "border-torqone-warning/20",
        glow: "shadow-torqone-warning",
        bullet: "bg-torqone-warning",
        gradient: "from-[#F59E0B] to-[#7B5CFF]",
        borderHover: "hover:border-torqone-warning/40",
    },
    "member-success": {
        text: "text-torqone-error",
        bgMuted: "bg-torqone-error-muted",
        border: "border-torqone-error/20",
        glow: "shadow-torqone-error",
        bullet: "bg-torqone-error",
        gradient: "from-[#EF4444] to-[#F59E0B]",
        borderHover: "hover:border-torqone-error/40",
    },
    "business-intelligence": {
        text: "text-torqone-primary",
        bgMuted: "bg-torqone-primary-muted",
        border: "border-torqone-primary/20",
        glow: "shadow-torqone-primary",
        bullet: "bg-torqone-primary",
        gradient: "from-[#3A5DE2] to-[#7B5CFF]",
        borderHover: "hover:border-torqone-primary/40",
    },
};

const AI_CARDS = [
    {
        id: "growth-coach",
        isHero: true,
        icon: BrainCircuit,
        title: "AI Business Growth Coach",
        description:
            "Your executive AI advisor that continuously analyzes your business, prioritizes opportunities and delivers practical actions every week.",
        features: [
            "Weekly Growth Reports",
            "AI Action Plan",
            "Members Likely To Renew",
            "Members Likely To Leave",
            "Revenue Forecast",
            "Campaign Performance",
            "Referral Opportunities",
            "Profit Improvement Suggestions",
            "Business Recommendations",
        ],
    },
    {
        id: "monitoring-engine",
        isHero: false,
        icon: Radar,
        title: "AI Business Monitoring Engine",
        description:
            "Continuously monitors every critical area of your business in real time so problems are identified before they become expensive.",
        features: [
            "Member Activity",
            "Attendance",
            "Leads",
            "Trial Conversions",
            "Payments",
            "Renewals",
            "Marketing",
            "Trainer Productivity",
            "Revenue",
            "Business Health",
        ],
    },
    {
        id: "prediction-engine",
        isHero: false,
        icon: Sparkles,
        title: "AI Prediction Engine",
        description:
            "Predicts future business outcomes using patterns across your gym so you can act before problems happen.",
        features: [
            "Members Likely To Leave",
            "Members Likely To Renew",
            "Revenue Trends",
            "Marketing ROI",
            "Lead Quality",
            "Growth Opportunities",
        ],
    },
    {
        id: "lead-acquisition",
        isHero: false,
        icon: Target,
        title: "AI Lead Acquisition Engine",
        description:
            "Turns enquiries into paying members using intelligent scoring, follow-ups and conversion optimization.",
        features: [
            "AI Lead Scoring",
            "Automatic Follow-ups",
            "Trial Bookings",
            "Missed Lead Recovery",
            "Lead Conversion Tracking",
            "Customer Acquisition",
            "Referral Requests",
        ],
    },
    {
        id: "marketing-engine",
        isHero: false,
        icon: Megaphone,
        title: "AI Marketing Engine",
        description:
            "Creates, optimizes and continuously improves marketing campaigns across multiple channels.",
        features: [
            "Facebook Campaigns",
            "Instagram Campaigns",
            "Posters",
            "Captions",
            "Hashtags",
            "Audience Suggestions",
            "Best Posting Times",
            "Campaign Optimization",
            "Marketing Analytics",
        ],
    },
    {
        id: "member-success",
        isHero: false,
        icon: Dumbbell,
        title: "AI Member Success Engine",
        description:
            "Keeps members engaged, motivated and progressing toward real fitness results.",
        features: [
            "AI Workout Guidance",
            "AI Nutrition Plans",
            "Personalized Motivation",
            "Progress Tracking",
            "Discipline Insights",
            "Challenges",
            "Gamification",
            "Rewards",
            "Loyalty",
        ],
    },
    {
        id: "business-intelligence",
        isHero: false,
        icon: LineChart,
        title: "AI Business Intelligence Engine",
        description:
            "Transforms business data into executive-level insights for smarter decisions and long-term growth.",
        features: [
            "Executive Dashboards",
            "Revenue Insights",
            "Marketing ROI",
            "Profit Trends",
            "Branch Performance",
            "Business Health Score",
            "AI Growth Score",
            "Business Recommendations",
        ],
    },
];


function processFeatures(features: string[]) {
    const horizontal: string[] = [];
    const vertical: string[] = [];

    features.forEach((feat) => {
        const words = feat.trim().split(/\s+/).length;
        if (words <= 3) {
            horizontal.push(feat);
        } else {
            vertical.push(feat);
        }
    });

    const horizontalChunks: string[][] = [];
    for (let i = 0; i < horizontal.length; i += 3) {
        horizontalChunks.push(horizontal.slice(i, i + 3));
    }

    return { horizontalChunks, vertical };
}


function AIProcessingPanel() {
    const steps = [
        { label: "Scanning attendance patterns across 2,847 members", status: "done" },
        { label: "Detecting inactivity — 17 members flagged (9+ days absent)", status: "done" },
        {
            label: "Scoring churn risk (risk of member leaving) and predicting recovery probability",
            status: "running",
        },
        { label: "Drafting personalized WhatsApp re-engagement messages", status: "pending" },
        { label: "Scheduling sends at each member's optimal engagement time", status: "pending" },
    ];

    return (
        <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col justify-between">
            <div>
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-torqone-border/60">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-torqone-gradient-ai flex items-center justify-center">
                            <Brain className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-white">
                            AI Business Growth Coach
                        </span>
                    </div>
                    <Badge variant="ai" dot pulse size="sm">
                        Processing
                    </Badge>
                </div>

                <div className="p-5 space-y-5">
                    {/* Progress steps */}
                    <div className="space-y-3">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="flex items-center gap-3"
                            >
                                <div
                                    className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${
                                        step.status === "done"
                                            ? "bg-torqone-success/20 border-torqone-success/40"
                                            : step.status === "running"
                                              ? "bg-torqone-ai/20 border-torqone-ai/40"
                                              : "bg-torqone-background border-torqone-border/60"
                                    }`}
                                >
                                    {step.status === "done" && (
                                        <svg
                                            className="w-3 h-3 text-torqone-success"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    )}
                                    {step.status === "running" && (
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-torqone-ai"
                                            animate={{ scale: [1, 1.4, 1] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    )}
                                    {step.status === "pending" && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-torqone-border" />
                                    )}
                                </div>
                                <span
                                    className={`text-xs ${
                                        step.status === "done"
                                            ? "text-torqone-text-secondary line-through opacity-60"
                                            : step.status === "running"
                                              ? "text-white font-medium"
                                              : "text-torqone-text-muted"
                                    }`}
                                >
                                    {step.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Insight card */}
                    <div className="rounded-xl border border-torqone-ai/30 bg-torqone-ai-muted p-4">
                        <p className="text-xs font-semibold text-torqone-ai mb-2">
                            Latest Insight Generated
                        </p>
                        <p className="text-xs text-torqone-text-secondary leading-relaxed">
                            <span className="text-white font-semibold">17 members</span>{" "}
                            haven&apos;t visited in 9 days. WhatsApp re-engagement sent
                            automatically.{" "}
                            <span className="text-white font-semibold">4 already rebooked</span>.
                            Projected recovery:{" "}
                            <span className="text-torqone-success font-semibold">₹4,140/month</span>
                            .
                        </p>
                    </div>
                </div>
            </div>

            {/* Metrics row */}
            <div className="p-5 pt-0">
                <div className="grid grid-cols-3 gap-2">
                    {[
                        { label: "Insights Today", value: "14" },
                        { label: "Automated", value: "9" },
                        { label: "Revenue Saved", value: "₹8.2K" },
                    ].map((m) => (
                        <div
                            key={m.label}
                            className="rounded-lg bg-torqone-background/50 border border-torqone-border/40 p-2.5 text-center"
                        >
                            <p className="text-sm font-bold text-white">{m.value}</p>
                            <p className="text-[10px] text-torqone-text-muted">{m.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function AIHeroCard({ card }: { card: (typeof AI_CARDS)[0] }) {
    const colors = COLOR_MAP[card.id];
    const { horizontalChunks, vertical } = processFeatures(card.features);

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="relative rounded-2xl border border-torqone-ai/40 bg-gradient-to-br from-torqone-card to-torqone-ai/10 shadow-torqone-glow-lg overflow-hidden h-full flex flex-col justify-between p-8 group text-left"
        >
            {/* Glow behind the card */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-torqone-gradient-ai opacity-15 blur-3xl pointer-events-none group-hover:opacity-25 transition-opacity duration-300" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-torqone-gradient opacity-10 blur-3xl pointer-events-none" />

            <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-torqone-gradient-ai flex items-center justify-center shadow-torqone-ai">
                            <card.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="ai" dot pulse size="sm">
                            ⭐ Hero Module
                        </Badge>
                    </div>
                    <span className="text-xs text-torqone-text-muted font-mono">
                        torqone.ai / growth-coach
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>

                {/* Description */}
                <p className="text-sm text-torqone-text-secondary leading-relaxed mb-6">
                    {card.description}
                </p>
            </div>

            {/* Bullet lists */}
            <div className="mt-auto border-t border-torqone-border/40 pt-6">
                <p className="text-xs font-semibold text-torqone-ai uppercase tracking-wider mb-4">
                    Core Capabilities
                </p>

                {/* Horizontal bullets */}
                {horizontalChunks.length > 0 && (
                    <div className="space-y-3">
                        {horizontalChunks.map((chunk, chunkIdx) => (
                            <div key={chunkIdx} className="flex flex-wrap items-center gap-x-5">
                                {chunk.map((feat) => (
                                    <span
                                        key={feat}
                                        className="inline-flex items-center text-xs text-torqone-text-secondary font-medium"
                                    >
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full shrink-0 mr-2 ${colors.bullet}`}
                                        />
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {/* Vertical bullets */}
                {vertical.length > 0 && (
                    <ul className={`${horizontalChunks.length > 0 ? "mt-4" : ""} space-y-2.5`}>
                        {vertical.map((feat) => (
                            <li
                                key={feat}
                                className="flex items-start gap-2.5 text-xs text-torqone-text-secondary leading-relaxed"
                            >
                                <span
                                    className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.bullet}`}
                                />
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}


function AICapabilityCard({ card }: { card: (typeof AI_CARDS)[0] }) {
    const colors = COLOR_MAP[card.id];
    const { horizontalChunks, vertical } = processFeatures(card.features);

    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`relative rounded-2xl border ${colors.border} ${colors.borderHover} bg-torqone-card/60 backdrop-blur-md p-6 h-full flex flex-col justify-between group overflow-hidden text-left`}
        >
            {/* Decorative top-right gradient glow on hover */}
            <div
                className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${colors.gradient}`}
            />

            <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div
                        className={`w-9 h-9 rounded-xl ${colors.bgMuted} border ${colors.border} flex items-center justify-center`}
                    >
                        <card.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <span className="text-[10px] text-torqone-text-muted font-mono">
                        torqone.ai / {card.id}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white mb-2">{card.title}</h3>

                {/* Description */}
                <p className="text-xs text-torqone-text-secondary leading-relaxed mb-4">
                    {card.description}
                </p>
            </div>

            {/* Bullet lists */}
            <div className="mt-auto border-t border-torqone-border/40 pt-4">
                {/* Horizontal bullets */}
                {horizontalChunks.length > 0 && (
                    <div className="space-y-2">
                        {horizontalChunks.map((chunk, chunkIdx) => (
                            <div key={chunkIdx} className="flex flex-wrap items-center gap-x-4">
                                {chunk.map((feat) => (
                                    <span
                                        key={feat}
                                        className="inline-flex items-center text-xs text-torqone-text-secondary"
                                    >
                                        <span
                                            className={`w-1 h-1 rounded-full shrink-0 mr-1.5 ${colors.bullet}`}
                                        />
                                        {feat}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {/* Vertical bullets */}
                {vertical.length > 0 && (
                    <ul className={`${horizontalChunks.length > 0 ? "mt-3" : ""} space-y-2`}>
                        {vertical.map((feat) => (
                            <li
                                key={feat}
                                className="flex items-start gap-2 text-xs text-torqone-text-secondary leading-relaxed"
                            >
                                <span
                                    className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${colors.bullet}`}
                                />
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}


export function AIGrowthCoach() {
    const heroCard = AI_CARDS.find((c) => c.isHero)!;
    const capabilityCards = AI_CARDS.filter((c) => !c.isHero);

    return (
        <section className="relative py-28 overflow-hidden bg-torqone-card/10" id="ai-engine">
            {/* AI-themed background glow */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10"
                    style={{
                        background:
                            "radial-gradient(ellipse at top, #7B5CFF 0%, #00D4FF 50%, transparent 80%)",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-4">
                        <Badge variant="ai" dot pulse size="md">
                            <Sparkles className="w-3 h-3" /> Powered by AI
                        </Badge>
                    </div>
                    <SectionHeading
                        eyebrow="AI Engine"
                        title={
                            <>
                                What if you had a AI business coach
                                <br />
                                <GradientText variant="ai">who never sleeps?</GradientText>
                            </>
                        }
                        subtitle="TorqOne's AI continuously watches your leads, members, attendance, payments, marketing, and daily operations. It identifies opportunities, predicts problems before they happen, automates repetitive work, tells you exactly where to focus next, and delivers practical recommendations that help your gym grow every single week."
                        className="mb-16"
                        eyebrowVariant="ai"
                    />
                </ScrollReveal>

                {/* Row 1: Mockup + Hero Card */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
                    <ScrollReveal className="lg:col-span-5 flex flex-col justify-start">
                        <AIProcessingPanel />
                    </ScrollReveal>

                    <ScrollReveal className="lg:col-span-7">
                        <AIHeroCard card={heroCard} />
                    </ScrollReveal>
                </div>

                {/* Row 2: Capability Cards Grid */}
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {capabilityCards.map((card) => (
                        <StaggerItem key={card.id}>
                            <AICapabilityCard card={card} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
                {/* 
        <ScrollReveal>
          <div className="text-center">
            <Button variant="ai" size="lg" iconPosition="right" icon={<ArrowRight className="w-4 h-4" />}>
              See AI in Action
            </Button>
          </div>
        </ScrollReveal> */}
            </div>
        </section>
    );
}
