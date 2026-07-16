"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Plug,
  Boxes,
  Workflow,
  Bot,
  LineChart,
  Megaphone,
  Link2,
  ShieldCheck,
  Cpu,
  Factory,
  Smartphone,
  BrainCircuit,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const CATS = [
  {
    icon: Layout,
    title: "Web & Desktop Applications",
    body: "Modern, secure, and scalable business applications engineered for speed, reliability, exceptional user experiences, and long-term maintainability across web and desktop platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    body: "Native and cross-platform mobile apps that keep your employees and customers connected wherever they are.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    body: "Robust backend architectures, APIs, authentication, business logic, and microservices powering mission-critical applications.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    body: "Well-architected databases, centralized business data, secure storage, backups, synchronization, and high-performance querying.",
  },
  {
    icon: Boxes,
    title: "Enterprise Systems",
    body: "ERP, CRM, HRMS, Warehouse Management, Dealer Management, School ERP, Hospital Management, Laboratory Systems, and other enterprise platforms.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    body: "Digitize repetitive operations, approvals, document workflows, notifications, scheduling, and complex business processes to maximize efficiency.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    body: "AI assistants, intelligent document processing, predictive insights, knowledge bases, recommendation systems, and decision-support solutions.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    body: "Autonomous AI agents capable of customer support, sales assistance, workflow execution, internal operations, and intelligent task automation.",
  },
  {
    icon: Cpu,
    title: "IoT & Smart Systems",
    body: "Connected devices, sensor networks, smart monitoring, industrial data collection, machine connectivity, and intelligent control platforms.",
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    body: "Software platforms for production monitoring, industrial dashboards, machine integration, predictive maintenance, and Industry 4.0 initiatives.",
  },
  {
    icon: Link2,
    title: "System Integrations",
    body: "Seamlessly integrate CRMs, ERPs, accounting software, payment gateways, WhatsApp, email platforms, cloud services, and third-party APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Scalable cloud deployments, DevOps, CI/CD pipelines, monitoring, security, backups, and high-availability infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    body: "Role-based access control, authentication, authorization, encryption, audit logs, and enterprise-grade application security.",
  },
  {
    icon: LineChart,
    title: "Analytics & Business Intelligence",
    body: "Real-time dashboards, KPIs, executive reporting, forecasting, operational analytics, and actionable business insights.",
  },
  {
    icon: Megaphone,
    title: "Digital Growth",
    body: "SEO-ready platforms, marketing automation, lead generation systems, customer engagement, and digital growth strategies.",
  },
  {
    icon: Plug,
    title: "Future-Ready Architecture",
    body: "Every solution is designed to scale with your business, making it easy to add new features, AI capabilities, automations, and integrations as you grow.",
  },
];

export function Technology() {
  const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "technology" });
  return (
    <section id="technology" className="py-24 lg:py-32">
      <div ref={anchor} className="container-page">
        <SectionHeader
          eyebrow="Technology & Expertise."
          title="Modern Technologies. Intelligent Engineering."
          description="We combine modern software engineering, AI, automation, cloud technologies, and intelligent integrations to build scalable systems that streamline operations, empower teams, enhance customer experiences, and accelerate business growth."
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CATS.map(({ icon: Icon, title, body }) => (
            <motion.li
              key={title}
              variants={fadeInUp}
              className="card-premium rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
