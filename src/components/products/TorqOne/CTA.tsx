"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "./primitives/Button";
import { Badge } from "./primitives/Badge";
import { ScrollReveal } from "./primitives/motion";
import { useCTA } from "./CTAContext";


export function CTA() {
    const { openDemo, openSales } = useCTA();

    return (
        <section className="relative py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Gradient background */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(58,93,226,0.15) 0%, rgba(123,92,255,0.15) 55%, rgba(0,212,255,0.1) 100%)",
                            }}
                        />

                        {/* Grid pattern overlay */}
                        <div
                            className="absolute inset-0 bg-grid-pattern-sm opacity-30"
                            style={{
                                maskImage:
                                    "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
                            }}
                        />

                        {/* Border */}
                        <div className="absolute inset-0 rounded-3xl border border-torqone-border" />

                        {/* Floating orbs */}
                        <motion.div
                            className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(123,92,255,0.3) 0%, transparent 70%)",
                            }}
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(58,93,226,0.3) 0%, transparent 70%)",
                            }}
                            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        />

                        {/* Content */}
                        <div className="relative px-6 py-20 lg:px-16 lg:py-24 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-6"
                            >
                                <Badge variant="ai" dot pulse size="md">
                                    <Sparkles className="w-3 h-3" /> Get Started Today
                                </Badge>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]"
                            >
                                You opened a gym to change lives.
                                <br />
                                <span className="text-gradient">Let TorqOne handle the rest.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg text-torqone-text-secondary mb-10 max-w-xl mx-auto"
                            >
                                From the first lead to the next renewal, TorqOne brings your
                                members, operations, growth, AI and automation into one intelligent
                                system — working every day to help your gym run better and grow
                                faster at a quantum level.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-wrap items-center justify-center gap-3"
                            >
                                <Button
                                    variant="gradient"
                                    size="xl"
                                    iconPosition="right"
                                    icon={<ArrowRight className="w-4 h-4" />}
                                    onClick={openDemo}
                                >
                                    Book a Demo
                                </Button>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    iconPosition="left"
                                    icon={<Phone className="w-4 h-4" />}
                                    onClick={openSales}
                                >
                                    Speak to Our Team
                                </Button>
                                {/* Mobile: direct call */}
                                <a
                                    href="tel:+919074688913"
                                    className="sm:hidden"
                                    aria-label="Call Sales"
                                >
                                    <Button
                                        variant="outline"
                                        size="xl"
                                        iconPosition="left"
                                        icon={<Phone className="w-4 h-4" />}
                                        tabIndex={-1}
                                    >
                                        Speak to Our Team
                                    </Button>
                                </a>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="mt-6 text-xs text-torqone-text-muted"
                            >
                                14-day free trial · WhatsApp automations from day one · AI-powered
                                Customer retention from day one
                            </motion.p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
