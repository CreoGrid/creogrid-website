"use client";

import Link from "next/link";
import { Zap, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const FOOTER_LINKS = {
    Product: [
        { label: "Platform Overview", href: "#platform" },
        { label: "AI Business Growth Coach", href: "#ai-engine" },
        { label: "Automation Engine", href: "#platform" },
        { label: "Member Experience", href: "#platform" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
    ],
    Company: [
        { label: "About CreoGrid", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press Kit", href: "#" },
        { label: "Contact", href: "#" },
    ],
    Resources: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "System Status", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Data Processing", href: "#" },
        { label: "SOC 2 Report", href: "#" },
        { label: "GDPR", href: "#" },
    ],
};

const SOCIAL = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
];


export function Footer() {
    return (
        <footer className="relative border-t border-torqone-border/60 bg-torqone-card/30 overflow-hidden">
            {/* Subtle top glow */}
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] rounded-full blur-3xl opacity-10"
                style={{ background: "radial-gradient(ellipse, #3A5DE2 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8 mb-12">
                    {/* Brand column */}
                    <div className="lg:pr-8">
                        <Link href="/" className="flex items-center gap-2.5 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-torqone-gradient shadow-torqone-primary">
                                <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-base font-bold tracking-tight text-white">
                                Torq<span className="text-gradient">One</span>
                            </span>
                        </Link>
                        <p className="text-sm text-torqone-text-muted leading-relaxed mb-5 max-w-xs">
                            The AI operating system for gyms. WhatsApp automations, AI retention,
                            lead-to-member pipeline, and multi-branch management — built by CreoGrid
                            to help fitness operators manage, automate, and grow.
                        </p>

                        {/* Social */}
                        <div className="flex gap-2">
                            {SOCIAL.map((s) => (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-8 h-8 rounded-lg border border-torqone-border bg-torqone-card flex items-center justify-center text-torqone-text-muted hover:text-white hover:border-torqone-primary transition-colors"
                                >
                                    <s.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
                        <div key={heading}>
                            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-torqone-text mb-4">
                                {heading}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-torqone-text-muted hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-torqone-border/50">
                    <div className="flex items-center gap-2 text-xs text-torqone-text-muted">
                        <span>© {new Date().getFullYear()} CreoGrid, Inc.</span>
                        <span className="w-1 h-1 rounded-full bg-torqone-text-muted/40" />
                        <span>Powered by</span>
                        <span className="font-semibold text-torqone-text-secondary">CreoGrid</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-torqone-text-muted">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-torqone-success animate-pulse" />
                            All systems operational
                        </span>
                        <span className="w-1 h-1 rounded-full bg-torqone-text-muted/40" />
                        <span>SOC 2 Type II</span>
                        <span className="w-1 h-1 rounded-full bg-torqone-text-muted/40" />
                        <span>GDPR</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
