'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  RotateCcw, 
  UserPlus, 
  Zap, 
  Workflow, 
  BellRing, 
  MessageCircleMore, 
  RefreshCcw, 
  Clock3, 
  Cog, 
  Check 
} from 'lucide-react';
import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal, StaggerContainer, StaggerItem } from './primitives/motion';
import { Badge } from './primitives/Badge';

const FLOWS = [
  {
    id: 'welcome',
    icon: UserPlus,
    color: '#3A5DE2',
    bg: 'rgba(58,93,226,0.1)',
    border: 'rgba(58,93,226,0.25)',
    title: 'New Member Welcome',
    trigger: 'Member signs up',
    steps: [
      { label: 'Welcome WhatsApp message sent', delay: '0s' },
      { label: 'Workout plan assigned in mobile app', delay: '30s' },
      { label: 'Day-7 engagement check-in', delay: '7d' },
      { label: 'Referral nudge with reward offer', delay: '14d' },
      { label: 'Renewal reminder before expiry', delay: '28d' },
    ],
  },
  {
    id: 'churn',
    icon: Users,
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.25)',
    title: 'Churn Prevention (Preventing Members from Leaving)',
    trigger: 'AI detects inactivity',
    steps: [
      { label: 'Member flagged — 9+ days absent', delay: '0s' },
      { label: 'Motivational WhatsApp message sent', delay: '1h' },
      { label: 'Personalized re-engagement offer', delay: '24h' },
      { label: 'Trainer alerted for personal follow-up', delay: '3d' },
      { label: 'Win-back campaign launched', delay: '7d' },
    ],
  },
  {
    id: 'payment',
    icon: CreditCard,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.25)',
    title: 'Payment Recovery',
    trigger: 'Payment fails or expires',
    steps: [
      { label: 'WhatsApp payment-due reminder', delay: '0s' },
      { label: 'GST invoice auto-generated and sent', delay: '6h' },
      { label: 'Second reminder with update link', delay: '24h' },
      { label: 'Grace period — access maintained', delay: '3d' },
      { label: 'Access auto-suspended, reactivation offer', delay: '7d' },
    ],
  },
  {
    id: 'lead',
    icon: RotateCcw,
    color: '#7B5CFF',
    bg: 'rgba(123,92,255,0.1)',
    border: 'rgba(123,92,255,0.25)',
    title: 'Lead Recovery',
    trigger: 'Lead goes cold',
    steps: [
      { label: 'Lead marked cold — no response in 48h', delay: '0s' },
      { label: 'Auto WhatsApp follow-up sent', delay: '1h' },
      { label: 'Trial re-booking offer with incentive', delay: '3d' },
      { label: 'Visit reminder before trial date', delay: '5d' },
      { label: 'Conversion nudge after trial visit', delay: '7d' },
    ],
  },
];

const FEATURE_GROUPS = [
  {
    title: 'Smart Reminders',
    icon: BellRing,
    color: '#3A5DE2',
    features: [
      'Renewal Reminders',
      'Payment Reminders',
      'Workout Reminders',
      'Nutrition Reminders',
      'Membership Expiry Alerts',
      'Personalized Renewal Offers',
    ],
  },
  {
    title: 'Automated Communication',
    icon: MessageCircleMore,
    color: '#00D4FF',
    features: [
      'Personalized WhatsApp Messages',
      'Push Notifications',
      'Email Notifications',
      'Birthday Campaigns',
      'Referral Campaigns',
    ],
  },
  {
    title: 'Recovery Workflows',
    icon: RefreshCcw,
    color: '#EF4444',
    features: [
      'Inactivity Recovery',
      'Trial Follow-ups',
      'Missed Lead Recovery',
      'Payment Recovery',
      'Win-back Campaigns',
    ],
  },
  {
    title: 'Intelligent Timing',
    icon: Clock3,
    color: '#F59E0B',
    features: [
      'Best Send Time',
      'Behavior-based Triggers',
      'Personalized Delivery',
      'Multi-step Journeys',
    ],
  },
  {
    title: 'Background Operations',
    icon: Cog,
    color: '#7B5CFF',
    features: [
      'Digital Waiver Collection',
      'Membership Activation',
      'Membership Expiry Handling',
      'Invoice Generation',
      'GST Invoice Delivery',
      'Attendance-based Actions',
      'Trainer Notifications',
      'Google Review Requests',
      'Reward Distribution',
      'Loyalty Point Updates',
    ],
  },
];

function SummaryCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-torqone-border/80 bg-torqone-card/60 backdrop-blur-xl p-6 md:p-8 shadow-2xl transition-all duration-300 hover:border-torqone-border hover:shadow-torqone-primary/5 group" id="automation-showcase">
      {/* Styles for custom flow animations */}
      <style>{`
        @keyframes flowDash {
          to {
            stroke-dashoffset: -1000;
          }
        }
        .animate-flow-dash {
          animation: flowDash 40s linear infinite;
        }
      `}</style>

      {/* Subtle animated electric / workflow accent background */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-torqone-primary/10 via-torqone-ai/20 to-torqone-accent/15 blur-3xl opacity-70 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-tr from-torqone-accent/5 via-torqone-primary/10 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      {/* Flowing animated grid pattern in the background */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* SVG connection lines with flowing dashes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-35">
        <svg className="absolute w-full h-full" viewBox="0 0 400 600" fill="none">
          <path
            d="M 50 100 Q 200 80 220 200 T 350 350 T 150 500"
            stroke="url(#flowGradient)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="animate-flow-dash"
          />
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A5DE2" />
              <stop offset="50%" stopColor="#7B5CFF" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Status Badge */}
      <div className="flex items-center justify-between mb-6">
        <Badge variant="success" dot pulse size="sm" className="bg-torqone-success-muted/5 border-torqone-success/20 text-[10px] md:text-xs">
          System Active • 24/7 Operations
        </Badge>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-torqone-accent bg-torqone-accent/5 border border-torqone-accent/20 px-2.5 py-0.5 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-torqone-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-torqone-accent"></span>
          </span>
          Live Engine Running
        </span>
      </div>

      {/* Main Icon & Titles */}
      <div className="flex items-start gap-4 mb-6">
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-2xl bg-torqone-accent/20 blur-md animate-pulse" />
          <div className="relative w-14 h-14 rounded-2xl bg-torqone-background border border-torqone-accent/30 flex items-center justify-center shadow-lg">
            <Workflow className="w-8 h-8 text-torqone-accent" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight mb-2">
            Intelligent Automation Engine
          </h3>
          <p className="text-sm text-torqone-text-secondary leading-relaxed">
            Thousands of routine tasks happen automatically every week—without anyone remembering to do them. TorqOne continuously monitors your business, triggers the right workflows at the right time, and keeps members engaged from their very first enquiry to long after they join.
          </p>
        </div>
      </div>

      {/* Feature groups */}
      <div className="space-y-4 my-6">
        {FEATURE_GROUPS.map((group) => {
          const Icon = group.icon;
          return (
            <div 
              key={group.title} 
              className="p-4 rounded-2xl border border-torqone-border/40 bg-torqone-card/30 hover:bg-torqone-card/55 hover:border-torqone-border/70 transition-all duration-300 group/module"
            >
              {/* Group Title / Icon */}
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center border"
                  style={{ background: `${group.color}10`, borderColor: `${group.color}25` }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: group.color }} />
                </div>
                <h4 className="text-[11px] font-semibold text-white tracking-wide uppercase">
                  {group.title}
                </h4>
              </div>

              {/* Badges/Chips */}
              <div className="flex flex-wrap gap-1.5">
                {group.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="text-[10px] md:text-xs px-2.5 py-0.5 rounded-full border border-torqone-border/50 bg-torqone-background/40 text-torqone-text-secondary hover:text-white hover:border-torqone-accent/30 transition-all duration-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Micro Copy */}
      <div className="mt-6 pt-4 border-t border-torqone-border/40 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-torqone-success/10 border border-torqone-success/30 flex items-center justify-center shrink-0">
          <Check className="w-3 h-3 text-torqone-success" />
        </div>
        <p className="text-xs text-torqone-text-secondary font-medium">
          Every automation is triggered by real member behavior—not fixed schedules.
        </p>
      </div>
    </div>
  );
}

function FlowCard({ flow }: { flow: typeof FLOWS[0] }) {
  return (
    <div className="rounded-2xl bg-torqone-card border p-5 h-full" style={{ borderColor: flow.border }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center border"
          style={{ background: flow.bg, borderColor: flow.border }}>
          <flow.icon className="w-5 h-5" style={{ color: flow.color }} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{flow.title}</p>
          <p className="text-[11px] text-torqone-text-muted">Trigger: {flow.trigger}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="relative space-y-0">
        {flow.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-start gap-3 pb-4 last:pb-0"
          >
            {/* Vertical line */}
            {i < flow.steps.length - 1 && (
              <div
                className="absolute left-[11px] top-5 bottom-0 w-px"
                style={{ background: `linear-gradient(to bottom, ${flow.color}40, transparent)` }}
              />
            )}

            {/* Step dot */}
            <div
              className="shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 bg-torqone-background z-10"
              style={{ borderColor: `${flow.color}60` }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: flow.color }} />
            </div>

            <div className="flex-1 min-w-0 flex items-center justify-between gap-2">
              <span className="text-xs text-torqone-text-secondary">{step.label}</span>
              <span
                className="shrink-0 text-[10px] font-mono px-1.5 py-0.5 rounded"
                style={{ background: `${flow.color}15`, color: flow.color }}
              >
                +{step.delay}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AutomationShowcase() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <Badge variant="primary" dot size="md" className="mb-4">
              <Zap className="w-3 h-3" /> Automation Engine
            </Badge>
            <SectionHeading
              title={<>The work that happens<br /><GradientText>while you sleep.</GradientText></>}
              subtitle="TorqOne runs end-to-end member journeys 24/7 — triggered by real behavior, optimized by AI. Welcome sequences, churn prevention (preventing members from leaving), payment recovery, and lead follow-up all happen automatically. You set the rules once. The system runs forever."
            />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 z-20">
            <ScrollReveal>
              <SummaryCard />
            </ScrollReveal>
          </div>

          {/* Journey Flows */}
          <div className="lg:col-span-7">
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {FLOWS.map((flow) => (
                <StaggerItem key={flow.id}>
                  <FlowCard flow={flow} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Stats strip */}
        {/* <ScrollReveal delay={0.2}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Automation Flows', value: '40+' },
              { label: 'Hours Saved / Month', value: '480' },
              { label: 'WhatsApp Messages Automated', value: '50K+' },
              { label: 'Revenue Recovered', value: '$2.4M+' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-torqone-border/60 bg-torqone-card/40 p-4 text-center">
                <p className="text-xl font-extrabold text-white mb-1">{s.value}</p>
                <p className="text-xs text-torqone-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal> */}
      </div>
    </section>
  );
}
