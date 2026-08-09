"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Workflow,
    BrainCircuit,
    LineChart,
    Boxes,
    Users,
    GitBranch,
    Cloud,
    Link2,
    Smartphone,
    ShieldCheck,
    ShoppingCart,
    BarChart3,
    Search,
    Megaphone,
    Bot,
    MonitorSmartphone,
    Warehouse,
    Truck,
    GraduationCap,
    Hospital,
    Microscope,
    Factory,
    Cpu,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const ITEMS = [
    // Core Digital Solutions
    {
        icon: Code2,
        title: "Custom Software",
        body: "Purpose-built software engineered around your unique business processes and operational goals.",
    },
    {
        icon: MonitorSmartphone,
        title: "Web & Desktop Applications",
        body: "High-performance web and desktop solutions that simplify daily operations and improve productivity.",
    },
    {
        icon: Smartphone,
        title: "Mobile Applications",
        body: "Modern Android and iOS applications that keep your business connected anytime, anywhere.",
    },

    // AI & Automation
    {
        icon: BrainCircuit,
        title: "AI Solutions",
        body: "Practical AI for customer support, reporting, document processing, analytics, and intelligent decision-making.",
    },
    {
        icon: Bot,
        title: "AI Agents",
        body: "Autonomous AI assistants that automate business operations, customer interactions, and repetitive tasks.",
    },
    {
        icon: Workflow,
        title: "Business Automation",
        body: "Automate approvals, notifications, workflows, and repetitive operations to save time and reduce errors.",
    },
    {
        icon: GitBranch,
        title: "Workflow Management",
        body: "Digitize and optimize business processes with structured workflows and automated approvals.",
    },

    // Business Systems
    {
        icon: Boxes,
        title: "ERP Systems",
        body: "Unify finance, inventory, HR, procurement, and operations into one intelligent platform.",
    },
    {
        icon: Users,
        title: "CRM Systems",
        body: "Manage leads, customers, follow-ups, sales pipelines, and customer relationships from one place.",
    },
    {
        icon: Warehouse,
        title: "Warehouse Management",
        body: "Optimize inventory, stock movement, barcode tracking, dispatch, and warehouse operations.",
    },
    {
        icon: Truck,
        title: "Dealer & Distributor Management",
        body: "Digitally manage distributors, dealers, inventory, orders, pricing, and sales performance.",
    },

    // Analytics & Growth
    {
        icon: LineChart,
        title: "Dashboards & Analytics",
        body: "Monitor KPIs, finances, sales, operations, and business performance in real time.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        body: "Transform business data into actionable insights with advanced reporting and forecasting.",
    },
    {
        icon: Megaphone,
        title: "Marketing Automation",
        body: "Automate customer journeys, campaigns, email marketing, WhatsApp, and lead nurturing.",
    },
    {
        icon: Search,
        title: "SEO & Digital Growth",
        body: "Increase online visibility, generate qualified leads, and accelerate long-term business growth.",
    },

    // Infrastructure
    {
        icon: Link2,
        title: "System Integrations",
        body: "Connect third-party platforms, APIs, payment gateways, and business applications seamlessly.",
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        body: "Secure, scalable cloud infrastructure, deployment, backups, and monitoring.",
    },
    {
        icon: ShieldCheck,
        title: "Security & Access Control",
        body: "Protect business data using secure authentication, role-based access, and audit trails.",
    },

    // Industry Solutions
    {
        icon: GraduationCap,
        title: "School & College ERP",
        body: "Student information systems, admissions, attendance, fees, examinations, transport, and communication.",
    },
    {
        icon: Hospital,
        title: "Hospital Management",
        body: "Manage patients, appointments, billing, pharmacy, staff, and clinical workflows efficiently.",
    },
    {
        icon: Microscope,
        title: "Diagnostic Laboratory",
        body: "Sample tracking, report generation, billing, patient records, and laboratory workflow automation.",
    },
    {
        icon: Factory,
        title: "Industrial & SME Automation",
        body: "Digitize production, maintenance, quality control, inventory, and manufacturing operations.",
    },
    {
        icon: Cpu,
        title: "Industrial Automation Products",
        body: "Develop custom software interfaces, dashboards, IoT integrations, and intelligent control systems for industrial environments.",
    },
];


export function Solutions() {
    const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "solutions" });
    return (
        <section id="solutions" className="bg-[color:var(--surface)] py-24 lg:py-32">
            <div ref={anchor} className="container-page">
                <SectionHeader
                    eyebrow="What We Build"
                    title="Everything Connected. Everything Under Control."
                    description="A cohesive suite of engineered systems — chosen and configured to fit your business, not the other way around."
                />

                <motion.ul
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {ITEMS.map(({ icon: Icon, title, body }) => (
                        <motion.li
                            key={title}
                            variants={fadeInUp}
                            className="card-premium group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-5 text-base font-semibold text-foreground">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {body}
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
