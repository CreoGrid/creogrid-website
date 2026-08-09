"use client";

import Image from "next/image";
import { ScrollReveal } from "./primitives/motion";


export function ProductClosing() {
    return (
        <footer className="relative border-t border-torqone-border/60 bg-torqone-card/30 overflow-hidden">
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] rounded-full blur-3xl opacity-10"
                style={{ background: "radial-gradient(ellipse, #3A5DE2 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <ScrollReveal>
                    <div className="flex flex-col gap-6 items-center text-center">
                        <Image
                            src="/TorqOneLogo_Final2.png"
                            alt="TorqOne"
                            width={500}
                            height={147}
                            priority
                            className="mx-auto my-8 h-auto w-[100px] sm:w-[100px] lg:w-[150px]"
                        />

                        <p className="-mt-10 text-sm text-torqone-text-secondary">
                            Intelligent AI-powered enterprise platform for gym management & business
                            growth
                        </p>

                        <p className="mb-8 text-[11px] text-torqone-text-muted">
                            © TorqOne · A CreoGrid product
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}
