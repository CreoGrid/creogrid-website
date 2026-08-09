"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

/* ─── Gradient Text ──────────────────────────────────────────────────────────── */
interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "ai";
}


export function GradientText({
    variant = "default",
    className,
    children,
    ...props
}: GradientTextProps) {
    return (
        <span
            className={cn(variant === "default" ? "text-gradient" : "text-gradient-ai", className)}
            {...props}
        >
            {children}
        </span>
    );
}


/* ─── Glass Panel ────────────────────────────────────────────────────────────── */
interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "lighter" | "card";
    glow?: "none" | "primary" | "ai" | "accent";
    rounded?: "md" | "lg" | "xl" | "2xl";
}

const glowStyles = {
    none: "",
    primary: "shadow-torqone-primary",
    ai: "shadow-torqone-ai",
    accent: "shadow-torqone-accent",
};

const roundedStyles = {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
};


export function GlassPanel({
    variant = "default",
    glow = "none",
    rounded = "xl",
    className,
    children,
    ...props
}: GlassPanelProps) {
    const glassClass =
        variant === "lighter" ? "glass-lighter" : variant === "card" ? "glass-card" : "glass";

    return (
        <div
            className={cn(glassClass, glowStyles[glow], roundedStyles[rounded], className)}
            {...props}
        >
            {children}
        </div>
    );
}


/* ─── Section Heading ────────────────────────────────────────────────────────── */
interface SectionHeadingProps {
    eyebrow?: string;
    title: React.ReactNode;
    subtitle?: string;
    align?: "left" | "center";
    className?: string;
    eyebrowVariant?: "primary" | "ai";
}


export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "center",
    className,
    eyebrowVariant = "primary",
}: SectionHeadingProps) {
    return (
        <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
            {eyebrow && (
                <p
                    className={cn(
                        "mb-4 text-xs font-semibold tracking-[0.2em] uppercase",
                        eyebrowVariant === "ai" ? "text-torqone-ai" : "text-torqone-primary",
                    )}
                >
                    {eyebrow}
                </p>
            )}
            <h2 className="text-torqone-display-md text-white mb-5 tracking-tight leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "text-torqone-text-secondary text-lg leading-relaxed max-w-2xl",
                        align === "center" ? "mx-auto" : "",
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
