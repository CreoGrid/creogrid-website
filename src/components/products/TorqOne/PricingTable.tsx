"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Star, Users, Cpu, MessageSquare, Bell, Shield, Crown, Zap } from "lucide-react";
import { SectionHeading, GradientText } from "./primitives/ui";
import { ScrollReveal } from "./primitives/motion";

/* ──────────────────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────────────── */

type PillKind = "green" | "purple" | "blue" | "gold" | "gray";

const PLANS = ["Launch", "Growth", "Scale", "Enterprise"] as const;
type Plan = (typeof PLANS)[number];

const PRICING: {
    plan: Plan;
    monthly: string;
    onboarding: string;
    members: string;
    highlight?: boolean;
}[] = [
    { plan: "Launch", monthly: "₹999", onboarding: "₹25k", members: "Up to 100" },
    { plan: "Growth", monthly: "₹2,499", onboarding: "₹35k", members: "101–300", highlight: true },
    { plan: "Scale", monthly: "₹4,999", onboarding: "₹50k", members: "301–500" },
    { plan: "Enterprise", monthly: "Custom", onboarding: "Custom", members: "500+" },
];

const MODULES: {
    icon: typeof Users;
    label: string;
    values: [string, PillKind?][];
}[] = [
    {
        icon: Users,
        label: "Member Management",
        values: [
            ["Intermediate", "blue"],
            ["Advanced", "blue"],
            ["Complete", "green"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Customer Acquisition & CRM",
        values: [
            ["—", "gray"],
            ["Complete", "green"],
            ["Complete + AI Enhanced", "purple"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Member Journey & Success",
        values: [
            ["Basic", "gray"],
            ["Advanced", "blue"],
            ["Advanced + Pro AI", "purple"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Trainer Workspace",
        values: [
            ["—", "gray"],
            ["Complete", "green"],
            ["Advanced", "blue"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Gym Operations",
        values: [
            ["Intermediate", "blue"],
            ["Advanced", "blue"],
            ["Advanced + Business Suite", "green"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Business Management & Billing",
        values: [
            ["Intermediate", "blue"],
            ["Advanced", "blue"],
            ["Advanced + Business Suite", "green"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Marketing & Growth",
        values: [
            ["Basic", "gray"],
            ["AI Powered", "purple"],
            ["AI Powered + Self-Learning AI", "purple"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "AI & Automation",
        values: [
            ["Basic AI", "purple"],
            ["Growth AI", "purple"],
            ["Pro AI", "purple"],
            ["Custom AI", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Business Intelligence",
        values: [
            ["Basic", "gray"],
            ["Intermediate", "blue"],
            ["Executive + AI Powered", "purple"],
            ["Enterprise", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Enterprise & Multi-Branch",
        values: [
            ["—", "gray"],
            ["—", "gray"],
            ["Multi-Branch", "green"],
            ["Unlimited", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Secure Cloud Platform",
        values: [
            ["Standard", "gray"],
            ["Enhanced", "blue"],
            ["Premium", "green"],
            ["Dedicated", "gold"],
        ],
    },
    {
        icon: Users,
        label: "Data Migration",
        values: [
            ["Add-on", "gray"],
            ["Included", "green"],
            ["Included", "green"],
            ["Priority", "gold"],
        ],
    },
];

const USAGE_ROWS: {
    icon: typeof Users;
    label: string;
    values: string[];
}[] = [
    {
        icon: Users,
        label: "Members",
        values: ["Up to 100", "101–300", "301–500", "500+"],
    },
    {
        icon: Cpu,
        label: "Owner AI Usage",
        values: [
            "100 AI Operations / month",
            "250 AI Operations / month",
            "600 AI Operations / month",
            "Custom",
        ],
    },
    {
        icon: MessageSquare,
        label: "Member AI Usage",
        values: [
            "20 AI Conversations / active member / month",
            "30 AI Conversations / active member / month",
            "40 AI Conversations / active member / month",
            "Custom",
        ],
    },
    {
        icon: Bell,
        label: "WhatsApp Notifications",
        values: ["1,000 / month", "5,000 / month", "15,000 / month", "Custom / Fair Usage"],
    },
];

/* ──────────────────────────────────────────────────────────────────────────
   Pill
   ────────────────────────────────────────────────────────────────────── */

const PILL_STYLES: Record<PillKind, { bg: string; border: string; text: string }> = {
    green: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.35)", text: "#4ADE80" },
    purple: { bg: "rgba(123,92,255,0.12)", border: "rgba(123,92,255,0.35)", text: "#A78BFA" },
    blue: { bg: "rgba(58,93,226,0.12)", border: "rgba(58,93,226,0.35)", text: "#60A5FA" },
    gold: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.35)", text: "#FBBF24" },
    gray: { bg: "rgba(107,122,143,0.08)", border: "rgba(107,122,143,0.2)", text: "#6B7A8F" },
};

function StatusPill({ label, kind }: { label: string; kind?: PillKind }) {
    const k = kind ?? "gray";
    const s = PILL_STYLES[k];
    const isDash = label === "—";
    return (
        <span
            className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap border"
            style={{ background: s.bg, borderColor: s.border, color: isDash ? "#6B7A8F" : s.text }}
        >
            {isDash ? <X className="w-3 h-3" strokeWidth={2.5} /> : label}
        </span>
    );
}

/* ──────────────────────────────────────────────────────────────────────────
   Plan header card (shared by desktop + mobile)
   ────────────────────────────────────────────────────────────────────── */

function PlanHeader({ p, compact }: { p: (typeof PRICING)[number]; compact?: boolean }) {
    return (
        <div
            className={`relative flex flex-col items-center text-center ${p.highlight ? "py-5" : "py-4"}`}
        >
            {p.highlight && (
                <div className="absolute -top-px left-0 right-0 h-px bg-torqone-gradient" />
            )}
            {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-torqone-gradient text-[10px] font-bold text-white tracking-wide shadow-torqone-primary">
                    <Star className="w-2.5 h-2.5 fill-white" /> MOST POPULAR
                </div>
            )}
            <div className={`flex items-center gap-1.5 ${compact ? "mb-2" : "mb-3"}`}>
                {p.highlight && (
                    <div className="w-6 h-6 rounded-md bg-torqone-gradient flex items-center justify-center">
                        <Zap className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </div>
                )}
                <span className={`font-bold text-white ${compact ? "text-sm" : "text-base"}`}>
                    {p.plan}
                </span>
            </div>
            <div className="flex items-baseline gap-1">
                <span
                    className={`font-extrabold text-white tracking-tight ${compact ? "text-2xl" : "text-3xl"}`}
                >
                    {p.monthly}
                </span>
                {p.monthly !== "Custom" && (
                    <span className="text-xs text-torqone-text-muted font-medium">/mo</span>
                )}
            </div>
            <div className="mt-1.5 flex flex-col items-center gap-0.5">
                <span className="text-[11px] text-torqone-text-muted">
                    Onboarding{" "}
                    <span className="text-torqone-text-secondary font-semibold">
                        {p.onboarding}
                    </span>
                </span>
                <span className="text-[11px] text-torqone-text-muted">
                    Members{" "}
                    <span className="text-torqone-text-secondary font-semibold">{p.members}</span>
                </span>
            </div>
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────────────────
   Desktop matrix (≥1024px)
   ────────────────────────────────────────────────────────────────────── */

function DesktopMatrix() {
    return (
        <div className="hidden lg:block glass-card rounded-2xl overflow-hidden">
            {/* Plan header row */}
            <div className="grid grid-cols-[260px_repeat(4,1fr)] border-b border-torqone-border bg-torqone-card/40">
                <div className="p-5 flex items-center">
                    <span className="text-xs font-semibold tracking-wider uppercase text-torqone-text-muted">
                        Choose your plan
                    </span>
                </div>
                {PRICING.map((p) => (
                    <div
                        key={p.plan}
                        className={
                            p.highlight
                                ? "bg-torqone-primary-muted border-x border-torqone-primary/30"
                                : "border-x border-torqone-border/50"
                        }
                    >
                        <PlanHeader p={p} />
                    </div>
                ))}
            </div>

            {/* Onboarding note row */}
            <div className="grid grid-cols-[260px_repeat(4,1fr)] border-b border-torqone-border/50 bg-torqone-background/30">
                <div className="p-3.5 col-span-5 text-center">
                    <p className="text-[11px] text-torqone-text-muted leading-relaxed">
                        Onboarding includes platform configuration, data migration, staff setup and
                        required integrations.
                    </p>
                </div>
            </div>

            {/* Section label */}
            <div className="grid grid-cols-[260px_repeat(4,1fr)] border-b border-torqone-border">
                <div className="p-3.5 col-span-5">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-torqone-accent">
                        Module Availability
                    </span>
                </div>
            </div>

            {/* Module rows */}
            {MODULES.map((mod, i) => (
                <motion.div
                    key={mod.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    className={`grid grid-cols-[260px_repeat(4,1fr)] border-b border-torqone-border/40 last:border-0 ${i % 2 === 0 ? "bg-torqone-background/20" : ""}`}
                >
                    <div className="p-4 sticky left-0 z-10 bg-inherit flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-torqone-card flex items-center justify-center shrink-0 border border-torqone-border">
                            <mod.icon
                                className="w-4 h-4 text-torqone-text-secondary"
                                strokeWidth={1.75}
                            />
                        </div>
                        <span className="text-sm font-medium text-torqone-text-secondary">
                            {mod.label}
                        </span>
                    </div>
                    {mod.values.map((v, j) => (
                        <div
                            key={j}
                            className={`p-4 flex items-center justify-center border-x border-torqone-border/30 ${PRICING[j].highlight ? "bg-torqone-primary-muted/40" : ""}`}
                        >
                            <StatusPill label={v[0]} kind={v[1]} />
                        </div>
                    ))}
                </motion.div>
            ))}

            {/* Usage section label */}
            <div className="grid grid-cols-[260px_repeat(4,1fr)] border-b border-torqone-border bg-torqone-card/30">
                <div className="p-3.5 col-span-5">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-torqone-accent">
                        Usage & Limits
                    </span>
                </div>
            </div>

            {/* Usage rows */}
            {USAGE_ROWS.map((row, i) => (
                <motion.div
                    key={row.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    className={`grid grid-cols-[260px_repeat(4,1fr)] border-b border-torqone-border/40 last:border-0 ${i % 2 === 0 ? "bg-torqone-background/20" : ""}`}
                >
                    <div className="p-4 sticky left-0 z-10 bg-inherit flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-torqone-card flex items-center justify-center shrink-0 border border-torqone-border">
                            <row.icon
                                className="w-4 h-4 text-torqone-text-secondary"
                                strokeWidth={1.75}
                            />
                        </div>
                        <span className="text-sm font-medium text-torqone-text-secondary">
                            {row.label}
                        </span>
                    </div>
                    {row.values.map((v, j) => (
                        <div
                            key={j}
                            className={`p-4 flex items-center justify-center text-center border-x border-torqone-border/30 ${PRICING[j].highlight ? "bg-torqone-primary-muted/40" : ""}`}
                        >
                            <span className="text-xs font-medium text-torqone-text-secondary leading-relaxed">
                                {v}
                            </span>
                        </div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────────────────
   Mobile swipeable cards (<1024px)
   ────────────────────────────────────────────────────────────────────── */

function MobileCards() {
    const [active, setActive] = useState(1); // Growth default

    return (
        <div className="lg:hidden">
            {/* Plan selector tabs */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-2 -mx-4 px-4">
                {PLANS.map((plan, i) => (
                    <button
                        key={plan}
                        onClick={() => setActive(i)}
                        className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                            active === i
                                ? "bg-torqone-gradient text-white shadow-torqone-primary"
                                : "glass-card text-torqone-text-muted hover:text-torqone-text-secondary"
                        }`}
                    >
                        {plan === "Growth" && <Star className="inline w-3 h-3 mr-1 fill-white" />}
                        {plan}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="glass-card rounded-2xl overflow-hidden"
                >
                    {/* Plan header */}
                    <div
                        className={`p-5 text-center border-b border-torqone-border ${PRICING[active].highlight ? "bg-torqone-primary-muted" : "bg-torqone-card/40"}`}
                    >
                        <PlanHeader p={PRICING[active]} compact />
                    </div>

                    {/* Onboarding note */}
                    <div className="p-3.5 bg-torqone-background/30 border-b border-torqone-border/50">
                        <p className="text-[11px] text-torqone-text-muted leading-relaxed text-center">
                            Onboarding includes platform configuration, data migration, staff setup
                            and required integrations.
                        </p>
                    </div>

                    {/* Modules */}
                    <div className="p-4">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-torqone-accent block mb-3">
                            Module Availability
                        </span>
                        <div className="space-y-2.5">
                            {MODULES.map((mod) => (
                                <div
                                    key={mod.label}
                                    className="flex items-center justify-between gap-3"
                                >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                        <div className="w-7 h-7 rounded-lg bg-torqone-card flex items-center justify-center shrink-0 border border-torqone-border">
                                            <mod.icon
                                                className="w-3.5 h-3.5 text-torqone-text-secondary"
                                                strokeWidth={1.75}
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-torqone-text-secondary truncate">
                                            {mod.label}
                                        </span>
                                    </div>
                                    <StatusPill
                                        label={mod.values[active][0]}
                                        kind={mod.values[active][1]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Usage */}
                    <div className="p-4 border-t border-torqone-border/50">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-torqone-accent block mb-3">
                            Usage & Limits
                        </span>
                        <div className="space-y-2.5">
                            {USAGE_ROWS.map((row) => (
                                <div
                                    key={row.label}
                                    className="flex items-start justify-between gap-3"
                                >
                                    <div className="flex items-center gap-2.5 shrink-0">
                                        <div className="w-7 h-7 rounded-lg bg-torqone-card flex items-center justify-center shrink-0 border border-torqone-border">
                                            <row.icon
                                                className="w-3.5 h-3.5 text-torqone-text-secondary"
                                                strokeWidth={1.75}
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-torqone-text-secondary">
                                            {row.label}
                                        </span>
                                    </div>
                                    <span className="text-xs font-semibold text-torqone-text text-right">
                                        {row.values[active]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Swipe hint */}
            <p className="text-center text-[11px] text-torqone-text-muted mt-4">
                Swipe or tap a plan to compare
            </p>
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────────────────
   Legend
   ────────────────────────────────────────────────────────────────────── */

function Legend() {
    const items: { label: string; kind: PillKind }[] = [
        { label: "Included / Core / Complete", kind: "green" },
        { label: "AI Features", kind: "purple" },
        { label: "Advanced / Enhanced", kind: "blue" },
        { label: "Enterprise / Unlimited", kind: "gold" },
        { label: "Not included", kind: "gray" },
    ];
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {items.map((it) => (
                <span
                    key={it.label}
                    className="flex items-center gap-1.5 text-xs text-torqone-text-muted"
                >
                    <span
                        className="w-3 h-3 rounded-full border"
                        style={{
                            background: PILL_STYLES[it.kind].bg,
                            borderColor: PILL_STYLES[it.kind].border,
                        }}
                    />
                    {it.label}
                </span>
            ))}
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────────────────
   Section
   ────────────────────────────────────────────────────────────────────── */

export function ComparisonTable() {
    return (
        <section className="relative py-28 overflow-hidden bg-torqone-card/20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Pricing & Plans"
                        title={
                            <>
                                One platform. <GradientText>Four ways to grow.</GradientText>
                            </>
                        }
                        subtitle="Transparent pricing that scales with your gym. Monthly pricing is the primary cost; onboarding is a one-time fee that gets you fully operational."
                        className="mb-14"
                    />
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <DesktopMatrix />
                    <MobileCards />
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <Legend />
                </ScrollReveal>
            </div>
        </section>
    );
}
