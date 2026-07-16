"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Understand your business, challenges, workflows, goals, and opportunities for transformation.",
  },
  {
    n: "02",
    title: "Analyze",
    body: "Study existing processes, systems, data, and bottlenecks to identify the highest-impact improvements.",
  },
  {
    n: "03",
    title: "Strategize",
    body: "Design the right combination of software, automation, AI, integrations, and digital workflows for your business.",
  },
  {
    n: "04",
    title: "Design",
    body: "Create scalable system architecture, user experiences, workflows, dashboards, and security models.",
  },
  {
    n: "05",
    title: "Develop",
    body: "Build reliable software, AI capabilities, automations, integrations, and business systems tailored to your needs.",
  },
  {
    n: "06",
    title: "Integrate",
    body: "Connect existing software, databases, APIs, payment gateways, IoT devices, and third-party platforms into one ecosystem.",
  },
  {
    n: "07",
    title: "Test & Deploy",
    body: "Thoroughly test every feature before deploying with secure migration, training, and minimal disruption.",
  },
  {
    n: "08",
    title: "Optimize",
    body: "Monitor usage, automate additional workflows, improve performance, and continuously refine the system.",
  },
  {
    n: "09",
    title: "Support",
    body: "Provide ongoing maintenance, feature enhancements, security updates, monitoring, and technical support.",
  },
  {
    n: "10",
    title: "Scale",
    body: "Expand your platform with new modules, AI capabilities, automations, analytics, and future-ready technologies as your business grows.",
  },
];

export function Process() {
  const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "process" });
  return (
    <section id="process" className="bg-[color:var(--surface)] py-24 lg:py-32">
      <div ref={anchor} className="container-page">
        <SectionHeader
          eyebrow="How We Work"
          title="From Vision to Intelligent Business with End-to-End Delivery Process."
          description="Every project follows a proven end-to-end process—from understanding your business to building, 
            deploying, optimizing, and continuously evolving intelligent systems that grow with you."
        />

        <motion.ol
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          {STEPS.map((step, i) => (
            <motion.li
              key={step.n}
              variants={fadeInUp}
              className="relative rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-bold tracking-widest text-primary">
                  {step.n}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-border lg:block"
                />
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
