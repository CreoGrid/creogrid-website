"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const PILLARS = [
  { k: "Engineering-led", v: "We think in systems, not features. Every decision is deliberate." },
  { k: "Business-first", v: "Technology serves the business — never the other way around." },
  { k: "Long-term partner", v: "Systems that endure, backed by a team that stays with you." },
];

export function About() {
  const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "about" });
  return (
    <section id="about" className="bg-[color:var(--surface)] py-24 lg:py-32">
      <div ref={anchor} className="container-page">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-20"
        >
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              About CreoGrid
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
            >
              A technology partner for businesses that want to run better.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              CreoGrid engineers business systems — not just software. We work
              with leaders who want their operations to feel organized,
              connected, and calm. Every platform we build is designed for
              clarity, longevity, and measurable business outcomes.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We don't sell templates. We design and build the exact system
              your business needs to grow with confidence.
            </motion.p>
          </div>

          <motion.ul variants={staggerParent} className="space-y-4">
            {PILLARS.map((p) => (
              <motion.li
                key={p.k}
                variants={fadeInUp}
                className="card-premium rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <p className="text-sm font-semibold text-primary">{p.k}</p>
                <p className="mt-2 text-base text-foreground">{p.v}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
