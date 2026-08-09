"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
    target: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
}
 

export function AnimatedCounter({
    target,
    duration = 2,
    prefix = "",
    suffix = "",
    decimals = 0,
    className,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const controls = animate(0, target, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(v),
        });

        return () => controls.stop();
    }, [inView, target, duration]);

    const formatted = display.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <span ref={ref} className={cn("tabular-nums", className)}>
            {prefix}
            {formatted}
            {suffix}
        </span>
    );
}


/* ─── Scroll Reveal ──────────────────────────────────────────────────────────── */
interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
}


export function ScrollReveal({
    children,
    className,
    delay = 0,
    y = 24,
    once = true,
}: ScrollRevealProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}


/* ─── Stagger Container ──────────────────────────────────────────────────────── */
interface StaggerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    containerDelay?: number;
}


export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    containerDelay = 0,
}: StaggerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: staggerDelay, delayChildren: containerDelay },
                },
            }}
        >
            {children}
        </motion.div>
    );
}


export function StaggerItem({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
