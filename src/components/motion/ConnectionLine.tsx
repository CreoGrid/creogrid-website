"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useConnectionLine, type Anchor } from "./ConnectionLineProvider";

/**
 * A smooth cubic-bezier path through spine anchors.
 * Adds gentle horizontal sway so the line curves naturally.
 */
function buildSpinePath(spine: Anchor[], width: number): string {
    if (spine.length === 0) return "";
    const cx = width / 2;
    const amp = Math.min(90, Math.max(40, width * 0.06));

    const pts = spine.map((a, i) => {
        // deterministic sway per anchor
        const sway = Math.sin(i * 0.9 + 1.2) * amp;
        return { x: cx + sway, y: a.y };
    });

    if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i];
        const p1 = pts[i + 1];
        const dy = (p1.y - p0.y) * 0.5;
        const c1x = p0.x;
        const c1y = p0.y + dy;
        const c2x = p1.x;
        const c2y = p1.y - dy;
        d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`;
    }
    return d;
}

function useIsDesktop() {
    const [is, set] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const on = () => set(mq.matches);
        on();
        mq.addEventListener("change", on);
        return () => mq.removeEventListener("change", on);
    }, []);
    return is;
}


export function ConnectionLine() {
    const { anchors, size, wrapperRef } = useConnectionLine();
    const reduced = useReducedMotion();
    const isDesktop = useIsDesktop();
    const pathRef = useRef<SVGPathElement | null>(null);
    const particleRef = useRef<SVGCircleElement | null>(null);
    const [, forceRender] = useState(0);

    const { scrollYProgress } = useScroll({
        target: wrapperRef as React.RefObject<HTMLElement>,
        offset: ["start start", "end end"],
    });

    const spine = useMemo(() => anchors.filter((a) => a.kind === "spine"), [anchors]);
    const orphans = useMemo(() => anchors.filter((a) => a.kind === "orphan"), [anchors]);
    const d = useMemo(() => buildSpinePath(spine, size.width), [spine, size.width]);

    // Position the particle along the path based on scroll progress.
    useEffect(() => {
        if (reduced || !isDesktop) return;
        const path = pathRef.current;
        const particle = particleRef.current;
        if (!path || !particle) return;
        const unsub = scrollYProgress.on("change", (p) => {
            try {
                const len = path.getTotalLength();
                if (!len) return;
                const pt = path.getPointAtLength(Math.max(0, Math.min(1, p)) * len);
                particle.setAttribute("cx", String(pt.x));
                particle.setAttribute("cy", String(pt.y));
            } catch {
                /* ignore */
            }
        });
        // Trigger once so the particle is placed correctly at mount.
        scrollYProgress.set(scrollYProgress.get());
        return () => unsub();
    }, [scrollYProgress, d, reduced, isDesktop]);

    // Force a re-render shortly after mount to ensure size is populated.
    useEffect(() => {
        const t = setTimeout(() => forceRender((v) => v + 1), 50);
        return () => clearTimeout(t);
    }, []);

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const particleOpacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

    if (!size.height || spine.length < 2) return null;

    return (
        <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-0"
            width={size.width}
            height={size.height}
            viewBox={`0 0 ${size.width} ${size.height}`}
            style={{ overflow: "visible" }}
        >
            {/* Base line — very subtle */}
            <path
                d={d}
                fill="none"
                stroke="var(--primary)"
                strokeOpacity={reduced ? 0.28 : isDesktop ? 0.14 : 0.1}
                strokeWidth={1.25}
                strokeLinecap="round"
            />

            {/* Active reveal line — brightens as user scrolls */}
            {!reduced && (
                <motion.path
                    ref={pathRef}
                    d={d}
                    fill="none"
                    stroke="var(--primary)"
                    strokeOpacity={isDesktop ? 0.55 : 0.35}
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    style={{ pathLength }}
                />
            )}

            {/* If reduced motion, still need a path ref for potential fallback */}
            {reduced && (
                <path ref={pathRef} d={d} fill="none" stroke="transparent" strokeWidth={0} />
            )}

            {/* Spine node dots */}
            {spine.map((a, i) => {
                const path = pathRef.current;
                let x = size.width / 2;
                let y = a.y;
                if (path) {
                    // Sample path at proportional length matching this anchor's Y.
                    try {
                        const total = path.getTotalLength();
                        const frac = (i + 1) / (spine.length + 1);
                        const pt = path.getPointAtLength(frac * total);
                        x = pt.x;
                        y = pt.y;
                    } catch {
                        /* keep defaults */
                    }
                }
                return (
                    <SpineDot
                        key={a.id}
                        cx={x}
                        cy={y}
                        progress={scrollYProgress}
                        index={i}
                        total={spine.length}
                        reduced={!!reduced}
                    />
                );
            })}

            {/* Orphan (chaos) nodes — pulse softly, never connect */}
            {!reduced &&
                orphans.map((a) => (
                    <motion.circle
                        key={a.id}
                        cx={a.x}
                        cy={a.y}
                        r={2.5}
                        fill="var(--primary)"
                        fillOpacity={0.35}
                        animate={{ opacity: [0.35, 0.9, 0.35], scale: [1, 1.4, 1] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ transformOrigin: `${a.x}px ${a.y}px` }}
                    />
                ))}

            {/* Traveling packet */}
            {!reduced && isDesktop && (
                <motion.circle
                    ref={particleRef}
                    r={3.5}
                    fill="var(--primary)"
                    style={{
                        opacity: particleOpacity,
                        filter: "drop-shadow(0 0 6px rgba(58,93,226,0.6))",
                    }}
                />
            )}
        </svg>
    );
}

function SpineDot({
    cx,
    cy,
    progress,
    index,
    total,
    reduced,
}: {
    cx: number;
    cy: number;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
    index: number;
    total: number;
    reduced: boolean;
}) {
    const threshold = (index + 0.5) / total;
    const opacity = useTransform(progress, [threshold - 0.05, threshold], [0.35, 1]);
    const scale = useTransform(
        progress,
        [threshold - 0.05, threshold, threshold + 0.05],
        [1, 1.6, 1],
    );
    return (
        <motion.circle
            cx={cx}
            cy={cy}
            r={3}
            fill="var(--primary)"
            style={
                reduced ? { opacity: 0.7 } : { opacity, scale, transformOrigin: `${cx}px ${cy}px` }
            }
        />
    );
}
