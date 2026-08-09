"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type BadgeVariant = "default" | "ai" | "primary" | "success" | "warning" | "error" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    dot?: boolean;
    pulse?: boolean;
    size?: "sm" | "md";
}

const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-torqone-card border-torqone-border text-torqone-text-secondary",
    ai: "bg-torqone-ai-muted border-torqone-ai/30 text-torqone-ai",
    primary: "bg-torqone-primary-muted border-torqone-primary/30 text-torqone-primary",
    success: "bg-torqone-success-muted border-torqone-success/30 text-torqone-success",
    warning: "bg-torqone-warning-muted border-torqone-warning/30 text-torqone-warning",
    error: "bg-torqone-error-muted border-torqone-error/30 text-torqone-error",
    outline: "bg-transparent border-torqone-border text-torqone-text-secondary",
};

const dotColors: Record<BadgeVariant, string> = {
    default: "bg-torqone-text-muted",
    ai: "bg-torqone-ai",
    primary: "bg-torqone-primary",
    success: "bg-torqone-success",
    warning: "bg-torqone-warning",
    error: "bg-torqone-error",
    outline: "bg-torqone-text-muted",
};


export function Badge({
    variant = "default",
    dot = false,
    pulse = false,
    size = "sm",
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 border rounded-full font-medium tracking-wide",
                size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
                variantStyles[variant],
                className,
            )}
            {...props}
        >
            {dot && (
                <span className={cn("relative flex h-1.5 w-1.5 rounded-full", dotColors[variant])}>
                    {pulse && (
                        <span
                            className={cn(
                                "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
                                dotColors[variant],
                            )}
                        />
                    )}
                </span>
            )}
            {children}
        </span>
    );
}
