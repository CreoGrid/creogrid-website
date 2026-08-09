"use client";

import { createPortal } from "react-dom";

import { useCTA } from "./CTAContext";

import { BookDemoModal } from "./BookDemoModal";
import { SalesModal } from "./SalesModal";
import { useState, useEffect } from "react";


export function ModalManager() {
    const { activeModal } = useCTA();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {activeModal === "demo" && createPortal(<BookDemoModal />, document.body)}
            {activeModal === "sales" && createPortal(<SalesModal />, document.body)}
        </>
    );
}
