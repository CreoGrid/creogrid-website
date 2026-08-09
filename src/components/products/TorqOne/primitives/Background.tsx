"use client";

import { motion } from "framer-motion";


export function BackgroundOrbs() {

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Primary orb — top left */}
            <motion.div
                className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(58,93,226,0.18) 0%, rgba(58,93,226,0.05) 50%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* AI orb — top right */}
            <motion.div
                className="absolute -top-32 -right-40 w-[700px] h-[700px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(123,92,255,0.15) 0%, rgba(123,92,255,0.04) 50%, transparent 75%)",
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
            {/* Accent orb — center */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(0,212,255,0.07) 0%, transparent 70%)",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            />
        </div>
    );
}


export function GridBackground({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 bg-grid-pattern ${className ?? ""}`}
            style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)" }}
        />
    );
}
