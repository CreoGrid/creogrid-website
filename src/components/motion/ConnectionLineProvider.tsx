"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";

export type AnchorKind = "spine" | "branch" | "orphan";

export interface Anchor {
    id: string;
    y: number; // absolute Y within the wrapper (px)
    x: number; // absolute X within the wrapper (px)
    kind: AnchorKind;
    section?: string;
}

interface AnchorInput {
    id: string;
    kind: AnchorKind;
    section?: string;
    ref: React.RefObject<HTMLElement | null>;
}

interface Ctx {
    wrapperRef: React.RefObject<HTMLDivElement | null>;
    anchors: Anchor[];
    register: (a: AnchorInput) => void;
    unregister: (id: string) => void;
    recompute: () => void;
    size: { width: number; height: number };
}

const ConnectionLineContext = createContext<Ctx | null>(null);


export function ConnectionLineProvider({ children }: { children: ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const inputsRef = useRef<Map<string, AnchorInput>>(new Map());
    const [anchors, setAnchors] = useState<Anchor[]>([]);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const rafRef = useRef<number | null>(null);

    const recompute = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;
            const wRect = wrapper.getBoundingClientRect();
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            const wrapperTop = wRect.top + scrollY;
            const wrapperLeft = wRect.left + scrollX;

            const next: Anchor[] = [];
            inputsRef.current.forEach((input) => {
                const el = input.ref.current;
                if (!el) return;
                const r = el.getBoundingClientRect();
                const y = r.top + r.height / 2 + scrollY - wrapperTop;
                const x = r.left + r.width / 2 + scrollX - wrapperLeft;
                next.push({ id: input.id, y, x, kind: input.kind, section: input.section });
            });
            next.sort((a, b) => a.y - b.y);
            setAnchors(next);
            setSize({ width: wRect.width, height: wrapper.scrollHeight });
        });
    }, []);

    const register = useCallback(
        (a: AnchorInput) => {
            inputsRef.current.set(a.id, a);
            recompute();
        },
        [recompute],
    );

    const unregister = useCallback(
        (id: string) => {
            inputsRef.current.delete(id);
            recompute();
        },
        [recompute],
    );

    useEffect(() => {
        if (typeof window === "undefined") return;
        const onResize = () => recompute();
        window.addEventListener("resize", onResize);
        // Watch for content size changes (fonts, images, dynamic content).
        let ro: ResizeObserver | null = null;
        if (wrapperRef.current && "ResizeObserver" in window) {
            ro = new ResizeObserver(() => recompute());
            ro.observe(wrapperRef.current);
        }
        // Recompute once after mount and once after fonts load.
        recompute();
        const t = window.setTimeout(recompute, 400);
        const t2 = window.setTimeout(recompute, 1200);
        return () => {
            window.removeEventListener("resize", onResize);
            ro?.disconnect();
            window.clearTimeout(t);
            window.clearTimeout(t2);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [recompute]);

    const value = useMemo<Ctx>(
        () => ({ wrapperRef, anchors, register, unregister, recompute, size }),
        [anchors, register, unregister, recompute, size],
    );

    return (
        <ConnectionLineContext.Provider value={value}>
            <div ref={wrapperRef} className="relative">
                {children}
            </div>
        </ConnectionLineContext.Provider>
    );
}

export function useConnectionLine() {
    const ctx = useContext(ConnectionLineContext);
    if (!ctx) throw new Error("useConnectionLine must be used inside ConnectionLineProvider");
    return ctx;
}
