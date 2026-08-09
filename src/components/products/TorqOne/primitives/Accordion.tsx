"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
    id: string;
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
    allowMultiple?: boolean;
}


export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
    const [openIds, setOpenIds] = useState<string[]>([]);

    const toggle = (id: string) => {
        setOpenIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((i) => i !== id);
            }
            return allowMultiple ? [...prev, id] : [id];
        });
    };

    return (
        <div className={cn("space-y-2", className)}>
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);
                return (
                    <div
                        key={item.id}
                        className={cn(
                            "rounded-xl border transition-colors duration-200",
                            isOpen
                                ? "border-torqone-primary/40 bg-torqone-primary-muted"
                                : "border-torqone-border bg-torqone-card hover:border-torqone-border-subtle",
                        )}
                    >
                        <button
                            onClick={() => toggle(item.id)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                        >
                            <span
                                className={cn(
                                    "text-sm font-semibold leading-snug",
                                    isOpen ? "text-white" : "text-torqone-text-secondary",
                                )}
                            >
                                {item.question}
                            </span>
                            <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className={cn(
                                    "shrink-0 text-torqone-text-muted transition-colors",
                                    isOpen && "text-torqone-primary",
                                )}
                            >
                                <ChevronDown className="w-4 h-4" />
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-6 pb-5 text-sm text-torqone-text-secondary leading-relaxed">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
