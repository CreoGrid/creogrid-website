"use client";

import { motion } from "framer-motion";
import { sectionReveal, viewportOnce } from "@/lib/motion";


export function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "center" | "left";
}) {
    const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={sectionReveal}
            className={`max-w-2xl ${alignCls}`}
        >
            {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {eyebrow}
                </p>
            )}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
