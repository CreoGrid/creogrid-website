"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerParent } from "@/lib/motion";
import { HeroVisualization } from "@/components/hero/HeroVisualization";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden pt-24 lg:pt-28"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,white,white_60%,var(--surface))]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(70,81,95,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(70,81,95,0.06)_1px,transparent_1px)] [background-size:56px_56px]"
      />

      <div className="container-page grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Tailored Intelligent Systems. Stronger Business. Faster Growth.
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            Bring Your Entire Business Into One{" "}
            <span className="text-primary">Intelligent System.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We build tailored software, automation, and AI solutions that organize
            operations, simplify management, save time, and strengthen your
            business—giving you complete control while enabling operational
            excellence, exceptional customer experiences, and a smarter business
            that runs more efficiently, grows faster, and scales effortlessly.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#contact">
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border px-6"
            >
              <a href="#solutions">Explore Solutions</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <HeroVisualization />
        </motion.div>
      </div>
    </section>
  );
}
