"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";


const IntelligentGridCube = dynamic(() => import("./IntelligentGridCube"), {
    ssr: false,
    loading: () => <StaticFallback />,
});


function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = () => setIsDesktop(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);
    return isDesktop;
}


function StaticFallback() {
    // Elegant static wireframe cube shown on mobile & during 3D load.
    return (
        <div className="flex h-full w-full items-center justify-center">
            <svg
                viewBox="0 0 400 400"
                className="h-full max-h-[520px] w-full max-w-[520px]"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="cubeGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3A5DE2" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#3684A6" stopOpacity="0.6" />
                    </linearGradient>
                </defs>
                <g
                    fill="none"
                    stroke="url(#cubeGrad)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(200 210)"
                >
                    {/* Outer cube (isometric) */}
                    <path d="M -120 -70 L 0 -130 L 120 -70 L 0 -10 Z" opacity="0.85" />
                    <path d="M -120 -70 L -120 90 L 0 150 L 0 -10 Z" opacity="0.7" />
                    <path d="M 120 -70 L 120 90 L 0 150 L 0 -10 Z" opacity="0.7" />
                    {/* Inner grid subdivisions */}
                    <path
                        d="M -80 -90 L -80 70 M -40 -110 L -40 50 M 40 -110 L 40 50 M 80 -90 L 80 70"
                        opacity="0.25"
                    />
                    <path
                        d="M -120 -30 L 120 -30 M -120 10 L 120 10 M -120 50 L 120 50"
                        opacity="0.25"
                    />
                    {/* Nodes */}
                    {[
                        [-120, -70],
                        [0, -130],
                        [120, -70],
                        [0, -10],
                        [-120, 90],
                        [120, 90],
                        [0, 150],
                    ].map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r="4" fill="#3A5DE2" stroke="none" />
                    ))}
                </g>
            </svg>
        </div>
    );
}


export function HeroVisualization() {




    
    const isDesktop = useIsDesktop();

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[560px] sm:max-w-[620px]">
            <div
                aria-hidden
                className="absolute inset-[5%] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,93,226,0.10),transparent_70%)]"
            />
            <div
                aria-hidden
                className="absolute inset-[8%] rounded-full border border-primary/10"
            />
            <Suspense fallback={<StaticFallback />}>
                <IntelligentGridCube compact={!isDesktop} />
            </Suspense>
        </div>
    );
}
