"use client";

import { motion } from "framer-motion";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";
import {
  ClipboardList,
  Unplug,
  EyeOff,
  Hourglass,
  Repeat,
  Database,
  TrendingDown,
  Users,
  Megaphone,
  Search,
  BarChart3,
  MessageSquare,
  Bot,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";

const ITEMS = [
  {
    icon: ClipboardList,
    title: "Manual Processes",
    body: "Critical operations still rely on spreadsheets, paperwork, and repetitive manual work that slows the entire business.",
  },
  {
    icon: Repeat,
    title: "Repetitive Tasks",
    body: "Teams spend valuable hours on recurring tasks that could be automated in minutes using intelligent workflows.",
  },
  {
    icon: Unplug,
    title: "Disconnected Systems",
    body: "Sales, finance, operations, inventory, and customer data live in separate tools that never communicate.",
  },
  {
    icon: Database,
    title: "Scattered Data",
    body: "Business information is fragmented across apps, making reporting, collaboration, and decision-making difficult.",
  },
  {
    icon: EyeOff,
    title: "Limited Business Visibility",
    body: "Without real-time dashboards, it's difficult to monitor performance, identify problems, or make confident decisions.",
  },
  {
    icon: TrendingDown,
    title: "Missed Sales Opportunities",
    body: "Potential customers slip away due to slow follow-ups, inconsistent sales processes, and poor lead management.",
  },
  {
    icon: Users,
    title: "Low Customer Retention",
    body: "Businesses struggle to nurture existing customers, resulting in lost repeat sales and weaker long-term relationships.",
  },
  {
    icon: Megaphone,
    title: "Inefficient Marketing",
    body: "Marketing campaigns, content, and customer outreach remain largely manual with little personalization or automation.",
  },
  {
    icon: Search,
    title: "Poor Online Visibility",
    body: "Weak SEO and limited digital presence reduce organic traffic, leads, and long-term business growth.",
  },
  {
    icon: BarChart3,
    title: "Lack of Actionable Analytics",
    body: "Business decisions rely on assumptions instead of real-time insights, predictive analytics, and measurable KPIs.",
  },
  {
    icon: MessageSquare,
    title: "Slow Customer Support",
    body: "Delayed responses and inconsistent support reduce customer satisfaction and damage brand reputation.",
  },
  {
    icon: Bot,
    title: "Untapped AI Potential",
    body: "Routine operations, customer interactions, reporting, and decision support remain manual despite AI opportunities.",
  },
];

export function BusinessChallenges() {
  const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "challenges" });
  const orphan1 = useConnectionAnchor<HTMLDivElement>({ kind: "orphan", section: "challenges" });
  const orphan2 = useConnectionAnchor<HTMLDivElement>({ kind: "orphan", section: "challenges" });
  return (
    <section id="challenges" className="relative py-24 lg:py-32">
      <div ref={orphan1} aria-hidden className="pointer-events-none absolute left-[12%] top-[30%] h-px w-px" />
      <div ref={orphan2} aria-hidden className="pointer-events-none absolute right-[14%] top-[65%] h-px w-px" />
      <div ref={anchor} className="container-page">
        <SectionHeader
          eyebrow="The Problem"
          title="Running a Business Shouldn't Feel Chaotic."
          description="Most operational pain comes from the same six patterns. We build systems that quietly remove them."
        />

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <motion.li
              key={title}
              variants={fadeInUp}
              className="card-premium group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
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
