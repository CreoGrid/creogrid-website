'use client';

import { motion } from 'framer-motion';
import { Check, X, Zap } from 'lucide-react';
import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal } from './primitives/motion';
import { Badge } from './primitives/Badge';

type CellValue = boolean | 'partial';

const ROWS: {
  feature: string;
  torqone: CellValue;
  legacy: CellValue;
  generic: CellValue;
}[] = [
  // ─── Core Gym Operations ───
  {
    feature: 'Member & membership management',
    torqone: true,
    legacy: true,
    generic: 'partial',
  },
  {
    feature: 'Attendance, check-in & smart reception',
    torqone: true,
    legacy: 'partial',
    generic: false,
  },
  {
    feature: 'Billing, payments & GST invoices',
    torqone: true,
    legacy: true,
    generic: 'partial',
  },
  {
    feature: 'Online membership renewal & expiry tracking',
    torqone: true,
    legacy: 'partial',
    generic: 'partial',
  },
  {
    feature: 'POS, inventory & equipment management',
    torqone: true,
    legacy: false,
    generic: false,
  },

  // ─── Member Experience ───
  {
    feature: 'Dedicated member mobile app',
    torqone: true,
    legacy: 'partial',
    generic: false,
  },
  {
    feature: 'Workout plans, progress & transformation tracking',
    torqone: true,
    legacy: false,
    generic: false,
  },
  {
    feature: 'Challenges, gamification & loyalty rewards',
    torqone: true,
    legacy: false,
    generic: false,
  },

  // ─── CRM & Growth ───
  {
    feature: 'Lead CRM, trial booking & conversion tracking',
    torqone: true,
    legacy: 'partial',
    generic: true,
  },
  {
    feature: 'WhatsApp, push & email communication',
    torqone: true,
    legacy: 'partial',
    generic: 'partial',
  },
  {
    feature: 'Trainer workspace & mobile app',
    torqone: true,
    legacy: 'partial',
    generic: false,
  },

  // ─── Intelligence & AI ───
  {
    feature: 'Lead scoring & missed-lead recovery with AI',
    torqone: true,
    legacy: false,
    generic: false,
  },
  {
    feature: 'Member retention & inactivity recovery with AI',
    torqone: true,
    legacy: 'partial',
    generic: false,
  },
  {
    feature: 'Marketing generation & campaign optimization with AI',
    torqone: true,
    legacy: false,
    generic: 'partial',
  },
  {
    feature: 'Nutrition Coach & personalized guidance with AI',
    torqone: true,
    legacy: false,
    generic: false,
  },
  {
    feature: 'AI Business Growth Coach & weekly action plan',
    torqone: true,
    legacy: false,
    generic: false,
  },
  {
    feature: 'AI predictions, forecasting & business recommendations',
    torqone: true,
    legacy: false,
    generic: 'partial',
  },

  // ─── Business & Enterprise ───
  {
    feature: 'Business intelligence & executive dashboards',
    torqone: true,
    legacy: 'partial',
    generic: 'partial',
  },
  {
    feature: 'Multi-branch management & branch-wise P&L',
    torqone: true,
    legacy: 'partial',
    generic: 'partial',
  },
  {
    feature: 'White-label & custom AI capabilities',
    torqone: true,
    legacy: false,
    generic: false,
  },
];

function Cell({ value }: { value: boolean | 'partial' }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-5 h-5 rounded-full bg-torqone-success-muted border border-torqone-success/30 flex items-center justify-center">
          <Check className="w-3 h-3 text-torqone-success" strokeWidth={3} />
        </div>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-torqone-warning-muted border border-torqone-warning/30 flex items-center justify-center">
          <span className="text-[10px] text-torqone-warning font-bold">~</span>
        </div>
        <p className="text-[10px] text-torqone-text-muted"> (partial) </p>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-5 h-5 rounded-full bg-torqone-error-muted border border-torqone-error/20 flex items-center justify-center">
        <X className="w-3 h-3 text-torqone-error/60" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <section className="relative py-28 overflow-hidden bg-torqone-card/20" id="comparison">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why TorqOne"
            title={<>Built for the gym of tomorrow. Not yesterday. <br /> <GradientText>TorqOne vs everything else.</GradientText></>}
            subtitle="Traditional gym software was built for check-in sheets and renewal reminders. Generic CRMs weren't built for gyms at all. TorqOne is the only platform built from the ground up for AI-era fitness operations — from first lead to last renewal."
            className="mb-14"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-torqone-border">
              <div className="p-5">
                <span className="text-xs font-semibold tracking-wider uppercase text-torqone-text-muted">Capability</span>
              </div>
              <div className="relative p-5 text-center bg-torqone-primary-muted border-x border-torqone-primary/30">
                <div className="absolute -top-px left-0 right-0 h-px bg-torqone-gradient" />
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded-md bg-torqone-gradient flex items-center justify-center">
                    <Zap className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-bold text-white">TorqOne</span>
                </div>
                <Badge variant="ai" size="sm">Enterprise Intelligent Platform</Badge>
              </div>
              <div className="p-5 text-center">
                <span className="text-sm font-semibold text-torqone-text-secondary">Traditional Gym Software</span>
              </div>
              <div className="p-5 text-center">
                <span className="text-sm font-semibold text-torqone-text-secondary">Generic CRM</span>
              </div>
            </div>

            {/* Data rows */}
            {ROWS.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-torqone-border/50 last:border-0 ${
                  i % 2 === 0 ? 'bg-torqone-background/30' : ''
                }`}
              >
                <div className="p-4 text-sm text-torqone-text-secondary">{row.feature}</div>
                <div className="p-4 text-center bg-torqone-primary-muted/50 border-x border-torqone-primary/20">
                  <Cell value={row.torqone} />
                </div>
                <div className="p-4 text-center"><Cell value={row.legacy} /></div>
                <div className="p-4 text-center"><Cell value={row.generic} /></div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Legend */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-torqone-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-torqone-success-muted border border-torqone-success/30 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-torqone-success" strokeWidth={3} />
              </span>
              Fully supported
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-torqone-warning-muted border border-torqone-warning/30 flex items-center justify-center">
                <span className="text-[9px] text-torqone-warning font-bold">~</span>
              </span>
              Partial / limited
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-torqone-error-muted border border-torqone-error/20 flex items-center justify-center">
                <X className="w-2.5 h-2.5 text-torqone-error/60" strokeWidth={2.5} />
              </span>
              Not available
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
