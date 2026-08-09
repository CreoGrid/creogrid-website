"use client";

import { useEffect, useId, useRef } from "react";
import { useConnectionLine, type AnchorKind } from "./ConnectionLineProvider";


export function useConnectionAnchor<T extends HTMLElement = HTMLDivElement>(
    opts: {
        kind?: AnchorKind;
        section?: string;
        id?: string;
    } = {},
) {
    const ref = useRef<T | null>(null);
    const auto = useId();
    const id = opts.id ?? auto;
    const { register, unregister } = useConnectionLine();

    useEffect(() => {
        register({ id, kind: opts.kind ?? "spine", section: opts.section, ref });
        return () => unregister(id);
    }, [id, opts.kind, opts.section, register, unregister]);

    return ref;
}
