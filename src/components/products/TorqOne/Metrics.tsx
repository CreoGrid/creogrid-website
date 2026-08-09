"use client";

import { motion } from "framer-motion";
import { Users, Target, Clock, Sparkles } from "lucide-react";
import { AnimatedCounter, ScrollReveal } from "./primitives/motion";

const METRICS = [
    {
        icon: Users,
        target: 4800,
        prefix: "",
        suffix: "+",
        label: "Members Recovered",
        color: "#3A5DE2",
        bg: "rgba(58,93,226,0.1)",
    },
    {
        icon: Target,
        target: 12500,
        prefix: "",
        suffix: "+",
        label: "Leads Converted",
        color: "#22C55E",
        bg: "rgba(34,197,94,0.1)",
    },
    {
        icon: Clock,
        target: 480,
        prefix: "",
        suffix: "hrs",
        label: "Staff Hours Saved / Month",
        color: "#00D4FF",
        bg: "rgba(0,212,255,0.1)",
    },
    {
        icon: Sparkles,
        target: 34000,
        prefix: "",
        suffix: "+",
        label: "AI Actions Performed",
        color: "#7B5CFF",
        bg: "rgba(123,92,255,0.1)",
    },
];


export function Metrics() {
    return (
        <section className="relative py-20 border-y border-torqone-border/40 bg-torqone-card/20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {METRICS.map((m, i) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative text-center lg:text-left"
                            >
                                <div
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-4"
                                    style={{ background: m.bg, borderColor: `${m.color}33` }}
                                >
                                    <m.icon className="w-5 h-5" style={{ color: m.color }} />
                                </div>
                                <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-1">
                                    <AnimatedCounter
                                        target={m.target}
                                        prefix={m.prefix}
                                        suffix={m.suffix}
                                        className="tabular-nums"
                                    />
                                </p>
                                <p className="text-sm text-torqone-text-muted">{m.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
