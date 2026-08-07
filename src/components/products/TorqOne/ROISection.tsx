'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal, StaggerContainer, StaggerItem } from './primitives/motion';
import { Badge } from './primitives/Badge';

const COMPARISONS = [
  { metric: 'Monthly Revenue',       before: '$78K',   after: '$112K',  uplift: '+44%' },
  { metric: 'Member Retention Rate', before: '71%',   after: '94%',    uplift: '+23pts' },
  { metric: 'Lead Conversion Rate',  before: '12%',   after: '34%',    uplift: '+183%' },
  { metric: 'Staff Admin Hours',     before: '180hrs',after: '24hrs',  uplift: '−87%' },
  { metric: 'Churn Rate',             before: '8.2%',  after: '2.1%',   uplift: '−74%' },
];

export function ROISection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <Badge variant="success" dot size="md" className="mb-4">
              <TrendingUp className="w-3 h-3" /> Measurable Impact
            </Badge>
          </div>
          <SectionHeading
            eyebrow="The ROI"
            title={<>What happens when you<br /><GradientText>switch to TorqOne.</GradientText></>}
            subtitle="Gym operators who adopt TorqOne see measurable improvements within the first 90 days. Here's what the data shows across our customer base."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Before/After bars */}
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-white">Before vs. After TorqOne</h3>
                <span className="text-xs text-torqone-text-muted">90-day average</span>
              </div>

              <div className="space-y-5">
                {COMPARISONS.map((c, i) => (
                  <div key={c.metric}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-torqone-text-secondary">{c.metric}</span>
                      <span className="text-xs font-semibold text-torqone-success flex items-center gap-0.5">
                        <ArrowUpRight className="w-3 h-3" /> {c.uplift}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-torqone-text-muted">Before</span>
                          <span className="text-[10px] text-torqone-text-muted font-mono">{c.before}</span>
                        </div>
                        <div className="h-2 rounded-full bg-torqone-background overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-torqone-text-muted/50"
                            initial={{ width: 0 }}
                            whileInView={{ width: '40%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] text-torqone-primary">After</span>
                          <span className="text-[10px] text-torqone-primary font-mono">{c.after}</span>
                        </div>
                        <div className="h-2 rounded-full bg-torqone-background overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-torqone-gradient"
                            initial={{ width: 0 }}
                            whileInView={{ width: '95%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Projected revenue + outcomes */}
          <div className="space-y-6">
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white">Projected Revenue Lift</h3>
                  <Badge variant="success" size="sm">12-month forecast</Badge>
                </div>

                <div className="flex items-end gap-1 h-32 mb-4">
                  {[40, 48, 55, 62, 70, 78, 85, 92, 100, 108, 115, 125].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm bg-torqone-gradient"
                      style={{ minHeight: 4, opacity: 0.3 + (i / 12) * 0.7 }}
                      initial={{ scaleY: 0, transformOrigin: 'bottom' }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-torqone-text-muted">Month 1</span>
                  <span className="text-torqone-success font-semibold">+$340K projected</span>
                  <span className="text-torqone-text-muted">Month 12</span>
                </div>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {[
                { label: 'Payback Period', value: '< 3 months' },
                { label: 'Implementation Time', value: '48 hours' },
                { label: 'WhatsApp Automations', value: 'From day one' },
                { label: 'AI Retention Engine', value: 'From day one' },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="rounded-xl border border-torqone-border/60 bg-torqone-card/50 p-4">
                    <CheckCircle2 className="w-4 h-4 text-torqone-success mb-2" />
                    <p className="text-sm font-semibold text-white">{item.value}</p>
                    <p className="text-xs text-torqone-text-muted">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
