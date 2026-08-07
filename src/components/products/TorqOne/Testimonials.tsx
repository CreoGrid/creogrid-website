'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal, StaggerContainer, StaggerItem } from './primitives/motion';

const TESTIMONIALS = [
  {
    quote: "I didn't realize we were losing members until TorqOne's AI flagged 23 people who hadn't shown up in two weeks. The WhatsApp re-engagement campaign recovered 14 of them. That alone paid for the platform for the entire year.",
    name: 'Marcus Chen',
    role: 'Owner, IronCore Fitness',
    location: 'Austin, TX',
    locations: 3,
    result: '14 members recovered in 1 week',
  },
  {
    quote: "We used to lose leads constantly. They'd come in for a trial and we'd forget to follow up. The lead-to-member pipeline changed everything — every lead gets an automatic WhatsApp message within minutes. Our trial-to-member conversion jumped from 12% to 34%.",
    name: 'Sarah Williams',
    role: 'COO, Peak Performance Group',
    location: 'Denver, CO',
    locations: 7,
    result: 'Trial conversion 12% → 34%',
  },
  {
    quote: "The Monday Growth Report is the first thing I read every week. It tells me exactly who's at risk, what to do about it, and what revenue I'm on track for. It's like having a business analyst who actually understands gyms.",
    name: 'David Okafor',
    role: 'Founder, EliteGym Group',
    location: 'Atlanta, GA',
    locations: 5,
    result: 'Monday meetings transformed',
  },
  {
    quote: "My front desk used to spend hours on manual check-ins and birthday messages. Now it's all automated. My staff actually greet members instead of staring at a screen. The smart reception mode paid for itself in the first month.",
    name: 'Jennifer Park',
    role: 'GM, FitNation Studios',
    location: 'Seattle, WA',
    locations: 4,
    result: '180 admin hrs saved monthly',
  },
  {
    quote: "The challenges and leaderboards completely changed our gym culture. Members are competing for attendance streaks and referring friends for reward points. Our referral rate tripled and attendance is up 22% since we launched gamification.",
    name: 'Roberto Silva',
    role: 'CEO, Muscle Republic',
    location: 'Miami, FL',
    locations: 6,
    result: 'Referrals tripled, attendance +22%',
  },
  {
    quote: "Opening our third location used to mean hiring another manager. With TorqOne's multi-branch dashboard, I can see all three locations' performance in one view — P&L, attendance, churn, everything. I opened branch three without adding a single admin role.",
    name: 'Aisha Patel',
    role: 'Operations Lead, TrainSmart',
    location: 'San Francisco, CA',
    locations: 3,
    result: '3rd branch, zero new admin hires',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Customer Stories"
            title={<>Operators who switched<br /><GradientText>never look back.</GradientText></>}
            subtitle="Real gym owners. Real problems they used to accept as normal. Here's what changed when they put TorqOne at the center of their operation."
            className="mb-16"
          />
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="h-full rounded-2xl border border-torqone-border bg-torqone-card/70 p-6 flex flex-col"
              >
                <Quote className="w-7 h-7 text-torqone-primary/30 mb-4" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-torqone-warning fill-torqone-warning" />
                  ))}
                </div>

                <p className="text-sm text-torqone-text-secondary leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-torqone-success-muted border border-torqone-success/20 text-xs font-semibold text-torqone-success mb-4 w-fit">
                  {t.result}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-torqone-border/50">
                  <div className="w-9 h-9 rounded-full bg-torqone-gradient flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                    <p className="text-xs text-torqone-text-muted truncate">{t.role}</p>
                  </div>
                  <div className="ml-auto text-right shrink-0">
                    <p className="text-xs text-torqone-text-secondary font-semibold">{t.locations} loc.</p>
                    <p className="text-[10px] text-torqone-text-muted">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
