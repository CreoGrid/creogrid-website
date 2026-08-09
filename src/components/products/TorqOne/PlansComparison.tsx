"use client";

import { useState, useRef } from "react";
import {
    Users,
    Magnet,
    HeartPulse,
    GraduationCap,
    Dumbbell,
    Wallet,
    Megaphone,
    Bot,
    BarChart3,
    Network,
    Cloud,
    RefreshCw,
    Sparkles,
    MessageSquare,
    MessageCircle,
    Star,
    Check,
    type LucideIcon,
} from "lucide-react";
import { SectionHeading, GradientText } from "./primitives/ui";
import { ScrollReveal } from "./primitives/motion";

type PillColor = "gray" | "green" | "purple" | "blue" | "gold" | "neutral";

const pillStyles: Record<PillColor, string> = {
    gray: "bg-torqone-background/60 border-torqone-border text-torqone-text-muted",
    green: "bg-torqone-success-muted border-torqone-success/30 text-torqone-success",
    purple: "bg-torqone-ai-muted border-torqone-ai/30 text-torqone-ai",
    blue: "bg-torqone-primary-muted border-torqone-primary/30 text-torqone-primary",
    gold: "bg-torqone-warning-muted border-torqone-warning/30 text-torqone-warning",
    neutral: "bg-torqone-card border-torqone-border text-torqone-text-secondary",
};

function pillColor(value: string): PillColor {
    if (value === "—") return "gray";
    if (/AI/i.test(value)) return "purple";
    if (/Enterprise|Unlimited|Dedicated|Priority|Custom/.test(value)) return "gold";
    if (/Complete|Included/.test(value)) return "green";
    if (/Advanced|Enhanced|Premium|Multi-Branch/.test(value)) return "blue";
    return "neutral";
}

function StatusPill({ value }: { value: string }) {
    const color = pillColor(value);
    return (
        <span
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none tracking-wide ${pillStyles[color]}`}
        >
            {value === "—" ? <span className="text-torqone-text-muted/50">—</span> : value}
        </span>
    );
}

interface Plan {
    id: string;
    name: string;
    monthly: string;
    onboarding: string;
    highlighted: boolean;
    accent: string;
}

const PLANS: Plan[] = [
    {
        id: "launch",
        name: "Launch",
        monthly: "₹1499",
        onboarding: "₹25k",
        highlighted: false,
        accent: "#3A5DE2",
    },
    {
        id: "growth",
        name: "Growth (recommended)",
        monthly: "₹2,699",
        onboarding: "₹35k",
        highlighted: true,
        accent: "#7B5CFF",
    },
    {
        id: "scale",
        name: "Scale",
        monthly: "₹4,999",
        onboarding: "₹50k",
        highlighted: false,
        accent: "#00D4FF",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        monthly: "Custom",
        onboarding: "Custom",
        highlighted: false,
        accent: "#F59E0B",
    },
];

interface ModuleRow {
    icon: LucideIcon;
    name: string;
    values: [string, string, string, string];
}

const MODULES: ModuleRow[] = [
    {
        icon: Users,
        name: "Member Management",
        values: ["Intermediate", "Advanced", "Complete", "Enterprise-level"],
    },
    {
        icon: Magnet,
        name: "Customer Acquisition & CRM",
        values: ["—", "Complete", "Complete + AI Enhanced", "Enterprise-level"],
    },
    {
        icon: HeartPulse,
        name: "Member Journey & Success",
        values: ["Basic", "Advanced", "Advanced + Pro AI", "Enterprise-level"],
    },
    {
        icon: GraduationCap,
        name: "Trainer Workspace",
        values: ["—", "Complete", "Advanced", "Enterprise-level"],
    },
    {
        icon: Dumbbell,
        name: "Gym Operations",
        values: ["Intermediate", "Advanced", "Advanced + Business Suite", "Enterprise-level"],
    },
    {
        icon: Wallet,
        name: "Business Management & Billing",
        values: ["Intermediate", "Advanced", "Advanced + Business Suite", "Enterprise-level"],
    },
    {
        icon: Megaphone,
        name: "Marketing & Growth",
        values: ["Basic", "AI Powered", "AI Powered + Self-Learning AI", "Enterprise-level"],
    },
    {
        icon: Bot,
        name: "AI & Automation",
        values: ["Basic AI", "Growth AI", "Pro AI", "Custom AI"],
    },
    {
        icon: BarChart3,
        name: "Business Intelligence",
        values: ["Basic", "Intermediate", "Executive + AI Powered", "Enterprise-level"],
    },
    {
        icon: Network,
        name: "Enterprise & Multi-Branch",
        values: ["—", "—", "Multi-Branch", "Unlimited"],
    },
    {
        icon: Cloud,
        name: "Secure Cloud Platform",
        values: ["Standard", "Enhanced", "Premium", "Dedicated"],
    },
    {
        icon: RefreshCw,
        name: "Data Migration",
        values: ["Add-on", "Included", "Included", "Priority"],
    },
];

interface UsageRow {
    icon: LucideIcon;
    label: string;
    aiAccent: boolean;
    values: [string, string, string, string];
}

const USAGE: UsageRow[] = [
    {
        icon: Users,
        label: "Members",
        aiAccent: false,
        values: ["Up to 100", "101–300", "301–500", "500+"],
    },
    {
        icon: Sparkles,
        label: "Owner AI Usage",
        aiAccent: true,
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
        aiAccent: true,
        values: [
            "20 AI Conversations / active member / month",
            "30 AI Conversations / active member / month",
            "40 AI Conversations / active member / month",
            "Custom",
        ],
    },
    {
        icon: MessageCircle,
        label: "WhatsApp Notifications",
        aiAccent: false,
        values: ["1,000 / month", "5,000 / month", "15,000 / month", "Custom / Fair Usage"],
    },
];

const GRID = "grid-cols-[1.5fr_1fr_1fr_1fr_1fr]";


export function PlansComparison() {
    const [activeIdx, setActiveIdx] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.88));
        setActiveIdx(Math.min(Math.max(idx, 0), 3));
    };

    const scrollTo = (idx: number) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({ left: idx * el.clientWidth * 0.88, behavior: "smooth" });
    };

    return (
        <section className="relative py-28 overflow-hidden" id="plans">
            {/* Background glow */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[340px] rounded-full blur-3xl opacity-[0.08]"
                    style={{ background: "radial-gradient(ellipse, #7B5CFF 0%, transparent 70%)" }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <SectionHeading
                        eyebrow="Plan Comparison"
                        title={
                            <>
                                Compare every plan, <GradientText>module by module.</GradientText>
                            </>
                        }
                        subtitle="A detailed look at what's included across all four plans — from core business modules and AI capabilities to communication limits and multi-branch features."
                        className="mb-12"
                    />
                </ScrollReveal>

                {/* ─── Desktop Matrix ─────────────────────────────────────────── */}
                <ScrollReveal delay={0.1}>
                    <div className="hidden lg:block">
                        <div className="glass-card rounded-2xl overflow-hidden">
                            <div className={`grid ${GRID} min-w-[920px]`}>
                                {/* Header row: Core Module + plan pricing */}
                                <div className="sticky left-0 z-20 bg-torqone-card border-r border-torqone-border p-5">
                                    <span className="text-xs font-semibold tracking-wider uppercase text-torqone-text-muted">
                                        Core Module
                                    </span>
                                </div>
                                {PLANS.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={`relative p-5 text-center border-x border-torqone-border/60 ${
                                            plan.highlighted ? "bg-torqone-ai-muted/40" : ""
                                        }`}
                                    >
                                        {plan.highlighted && (
                                            <div className="absolute -top-px left-0 right-0 h-px bg-torqone-gradient-ai" />
                                        )}
                                        <div className="flex items-center justify-center gap-1.5 mb-2">
                                            {/* {plan.highlighted && <Star className="w-3.5 h-3.5 fill-torqone-ai text-torqone-ai" />} */}
                                            <span className="text-sm font-bold text-white">
                                                {plan.name}
                                            </span>
                                        </div>
                                        {/* Monthly — primary price */}
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-2xl font-extrabold text-white tracking-tight">
                                                {plan.monthly}
                                            </span>
                                            <span className="text-xs text-torqone-text-muted">
                                                /mo
                                            </span>
                                        </div>
                                        {/* Onboarding — secondary */}
                                        <p className="text-[11px] text-torqone-text-muted mt-1">
                                            Onboarding{" "}
                                            <span className="text-torqone-text-secondary font-semibold">
                                                {plan.onboarding}
                                            </span>
                                        </p>
                                    </div>
                                ))}

                                {/* Onboarding note — full width */}
                                <div className="col-span-5 px-5 py-3.5 bg-torqone-background/40 border-y border-torqone-border/60">
                                    <p className="text-xs text-torqone-text-muted leading-relaxed text-center">
                                        Onboarding includes platform configuration, staff setup and
                                        required integrations.{" "}
                                        <span className="text-torqone-text-secondary">
                                            Data migration is included from Growth onward and
                                            available as an add-on for Launch.
                                        </span>
                                    </p>
                                </div>

                                {/* Module rows */}
                                {MODULES.map((mod, i) => (
                                    <div key={mod.name} className="contents">
                                        <div
                                            className={`sticky left-0 z-10 bg-torqone-card border-r border-torqone-border border-t border-torqone-border/60 p-4 flex items-center gap-2.5 ${
                                                i % 2 === 0 ? "bg-[#0f1825]" : "bg-torqone-card"
                                            }`}
                                        >
                                            <mod.icon className="w-4 h-4 text-torqone-accent shrink-0" />
                                            <span className="text-sm font-medium text-torqone-text-secondary">
                                                {mod.name}
                                            </span>
                                        </div>
                                        {mod.values.map((v, j) => (
                                            <div
                                                key={j}
                                                className={`p-4 flex items-center justify-center text-center border-x border-torqone-border/40 border-t border-torqone-border/60 ${
                                                    PLANS[j].highlighted
                                                        ? "bg-torqone-ai-muted/20"
                                                        : i % 2 === 0
                                                          ? "bg-torqone-background/25"
                                                          : ""
                                                }`}
                                            >
                                                <StatusPill value={v} />
                                            </div>
                                        ))}
                                    </div>
                                ))}

                                {/* Usage section divider */}
                                <div className="col-span-5 px-5 py-3 bg-torqone-background/50 border-t border-torqone-border">
                                    <span className="text-xs font-semibold tracking-wider uppercase text-torqone-accent">
                                        Usage & Limits
                                    </span>
                                </div>

                                {/* Usage rows */}
                                {USAGE.map((row, i) => (
                                    <div key={row.label} className="contents">
                                        <div
                                            className={`sticky left-0 z-10 border-r border-torqone-border border-t border-torqone-border/60 p-4 flex items-center gap-2.5 ${
                                                i % 2 === 0 ? "bg-[#0f1825]" : "bg-torqone-card"
                                            }`}
                                        >
                                            <row.icon
                                                className={`w-4 h-4 shrink-0 ${row.aiAccent ? "text-torqone-ai" : "text-torqone-accent"}`}
                                            />
                                            <span className="text-sm font-medium text-torqone-text-secondary">
                                                {row.label}
                                            </span>
                                        </div>
                                        {row.values.map((v, j) => (
                                            <div
                                                key={j}
                                                className={`p-4 flex items-center justify-center text-center border-x border-torqone-border/40 border-t border-torqone-border/60 ${
                                                    PLANS[j].highlighted
                                                        ? "bg-torqone-ai-muted/20"
                                                        : i % 2 === 0
                                                          ? "bg-torqone-background/25"
                                                          : ""
                                                }`}
                                            >
                                                <span
                                                    className={`text-xs font-medium leading-snug ${row.aiAccent ? "text-torqone-ai" : "text-torqone-text-secondary"}`}
                                                >
                                                    {v}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 text-xs text-torqone-text-muted">
                            <LegendItem color="green" label="Included / Complete" />
                            <LegendItem color="purple" label="AI features" />
                            <LegendItem color="blue" label="Advanced / Enhanced" />
                            <LegendItem color="gold" label="Enterprise / Unlimited" />
                            <LegendItem color="gray" label="Not included" />
                        </div>
                    </div>
                </ScrollReveal>

                {/* ─── Mobile Swipeable Cards ─────────────────────────────────── */}
                <ScrollReveal delay={0.1}>
                    <div className="lg:hidden">
                        {/* Plan selector tabs */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            {PLANS.map((p, i) => (
                                <button
                                    key={p.id}
                                    onClick={() => scrollTo(i)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                                        activeIdx === i
                                            ? "bg-torqone-ai-muted border-torqone-ai/40 text-white"
                                            : "bg-torqone-card border-torqone-border text-torqone-text-muted"
                                    }`}
                                >
                                    {p.highlighted && (
                                        <Star className="w-3 h-3 inline mr-1 fill-torqone-ai text-torqone-ai" />
                                    )}
                                    {p.name}
                                </button>
                            ))}
                        </div>

                        {/* Swipeable carousel */}
                        <div
                            ref={scrollRef}
                            onScroll={onScroll}
                            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 -mx-4 px-4"
                        >
                            {PLANS.map((plan) => (
                                <div
                                    key={plan.id}
                                    className={`snap-center shrink-0 w-[88%] glass-card rounded-2xl p-5 ${
                                        plan.highlighted
                                            ? "shadow-torqone-ai border-torqone-ai/30"
                                            : ""
                                    }`}
                                >
                                    {/* Plan header */}
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-torqone-border/60">
                                        <div className="flex items-center gap-2">
                                            {plan.highlighted && (
                                                <Star className="w-4 h-4 fill-torqone-ai text-torqone-ai" />
                                            )}
                                            <span className="text-base font-bold text-white">
                                                {plan.name}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-baseline gap-1 justify-end">
                                                <span className="text-2xl font-extrabold text-white tracking-tight">
                                                    {plan.monthly}
                                                </span>
                                                <span className="text-xs text-torqone-text-muted">
                                                    /mo
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-torqone-text-muted">
                                                Onboarding {plan.onboarding}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Onboarding note */}
                                    <p className="text-[11px] text-torqone-text-muted leading-relaxed mb-4 p-2.5 rounded-lg bg-torqone-background/40">
                                        Onboarding includes platform configuration, staff setup and
                                        required integrations. Data migration is included from
                                        Growth onward.
                                    </p>

                                    {/* Modules */}
                                    <div className="space-y-2.5 mb-5">
                                        {MODULES.map((mod) => {
                                            const idx = PLANS.findIndex((p) => p.id === plan.id);
                                            return (
                                                <div
                                                    key={mod.name}
                                                    className="flex items-center justify-between gap-3"
                                                >
                                                    <div className="flex items-center gap-2 min-w-0">
                                                        <mod.icon className="w-4 h-4 text-torqone-accent shrink-0" />
                                                        <span className="text-xs font-medium text-torqone-text-secondary truncate">
                                                            {mod.name}
                                                        </span>
                                                    </div>
                                                    <StatusPill value={mod.values[idx]} />
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Usage */}
                                    <div className="pt-4 border-t border-torqone-border/60">
                                        <p className="text-xs font-semibold tracking-wider uppercase text-torqone-accent mb-3">
                                            Usage & Limits
                                        </p>
                                        <div className="space-y-3">
                                            {USAGE.map((row) => {
                                                const idx = PLANS.findIndex(
                                                    (p) => p.id === plan.id,
                                                );
                                                return (
                                                    <div
                                                        key={row.label}
                                                        className="flex items-start justify-between gap-3"
                                                    >
                                                        <div className="flex items-center gap-2 min-w-0">
                                                            <row.icon
                                                                className={`w-4 h-4 shrink-0 ${row.aiAccent ? "text-torqone-ai" : "text-torqone-accent"}`}
                                                            />
                                                            <span className="text-xs font-medium text-torqone-text-secondary">
                                                                {row.label}
                                                            </span>
                                                        </div>
                                                        <span
                                                            className={`text-xs font-semibold text-right max-w-[55%] ${row.aiAccent ? "text-torqone-ai" : "text-torqone-text-secondary"}`}
                                                        >
                                                            {row.values[idx]}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dots */}
                        <div className="flex items-center justify-center gap-1.5 mt-5">
                            {PLANS.map((p, i) => (
                                <button
                                    key={p.id}
                                    onClick={() => scrollTo(i)}
                                    aria-label={`View ${p.name} plan`}
                                    className={`h-1.5 rounded-full transition-all ${
                                        activeIdx === i
                                            ? "w-6 bg-torqone-ai"
                                            : "w-1.5 bg-torqone-border"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}


function LegendItem({ color, label }: { color: PillColor; label: string }) {
    return (
        <span className="flex items-center gap-1.5">
            <span className={`w-3.5 h-3.5 rounded-full border ${pillStyles[color]}`} />
            {label}
        </span>
    );
}
