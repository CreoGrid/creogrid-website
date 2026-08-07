'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, CreditCard, Calendar, Shield, BarChart3, UserCog,
  Check, ChevronRight,
} from 'lucide-react';
import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal } from './primitives/motion';
import { Badge } from './primitives/Badge';

const FEATURES = [
  {
    id: 'members',
    icon: Users,
    label: 'Members',
    color: 'text-torqone-primary',
    accent: '#3A5DE2',
    title: 'You Know Who Pays. But Do You Know Who\'s Actually Using Their Membership?',
    body: 'A paid membership that\'s never used is a cancellation waiting to happen. TorqOne tracks every check-in, workout, and attendance streak — then flags members whose engagement is dropping before they ever ask to cancel.',
    bullets: [
      'Member mobile app with workout plans and daily schedule',
      'Attendance tracking, workout history, and discipline scores',
      'Transformation tracking with before-and-after photos',
      'Challenges, leaderboards, and achievement badges',
    ],
    panel: {
      stats: [
        { label: 'Active Members', value: '2,847', delta: '+12%', color: '#3A5DE2' },
        { label: 'Avg Discipline Score', value: '7.4', delta: '+1.2', color: '#22C55E' },
        { label: 'At-Risk Flagged', value: '23', delta: 'this wk.', color: '#F59E0B' },
      ],
    },
  },
  {
    id: 'billing',
    icon: CreditCard,
    label: 'Billing',
    color: 'text-torqone-success',
    accent: '#22C55E',
    title: 'Failed Payments Don\'t Announce Themselves',
    body: 'A card expires. A payment fails. Nobody notices for a week. The member keeps attending, the revenue gap grows, and you\'re left chasing payments instead of building relationships. TorqOne catches every failed payment automatically — and recovers most of them without you lifting a finger.',
    bullets: [
      'Online membership renewal with automated reminders',
      'GST-compliant invoices generated and sent automatically',
      'WhatsApp payment-due reminders before and after due dates',
      'Auto-suspend access on non-payment, re-activate on payment',
    ],
    panel: {
      stats: [
        { label: 'Collection Rate', value: '97.4%', delta: '+1.2%', color: '#22C55E' },
        { label: 'Auto-Recovered', value: '$8.1K', delta: 'this mo.', color: '#3A5DE2' },
        { label: 'GST Invoices', value: '412', delta: 'auto-sent', color: '#F59E0B' },
      ],
    },
  },
  {
    id: 'scheduling',
    icon: Calendar,
    label: 'Scheduling',
    color: 'text-torqone-warning',
    accent: '#F59E0B',
    title: 'Empty Classes Cost You Money Too',
    body: 'You schedule classes based on guesswork. Half are half-full. Trainers show up for sessions nobody booked. Members can\'t book sessions without calling. TorqOne\'s trainer booking system and attendance analytics show you exactly which times fill — and which are draining your payroll.',
    bullets: [
      'Trainer mobile app with daily queue and booking system',
      'Member session booking through the mobile app',
      'Attendance analytics reveal peak and dead hours',
      'Trainer performance tracking per class and per session',
    ],
    panel: {
      stats: [
        { label: 'Avg Fill Rate', value: '87%', delta: '+9%', color: '#F59E0B' },
        { label: 'Bookings / Wk', value: '341', delta: '+24%', color: '#22C55E' },
        { label: 'No-Shows', value: '11', delta: '−18%', color: '#3A5DE2' },
      ],
    },
  },
  {
    id: 'access',
    icon: Shield,
    label: 'Access',
    color: 'text-torqone-error',
    accent: '#EF4444',
    title: 'Your Front Desk Shouldn\'t Be a Bottleneck',
    body: 'Manual check-ins create a line at the door. Expired members slip through. Waivers get lost. Your front desk staff spend their day on data entry instead of greeting members. TorqOne\'s Smart Reception handles it all — QR, fingerprint, or PIN — tied directly to billing status.',
    bullets: [
      'Smart Reception Mode with QR, fingerprint, or PIN attendance',
      'Digital waivers and membership agreements signed on entry',
      'Auto-block expired or unpaid members at the door',
      'Real-time entry logs synced to the owner dashboard',
    ],
    panel: {
      stats: [
        { label: 'Check-ins Today', value: '1,204', delta: 'live', color: '#EF4444' },
        { label: 'Denied Entries', value: '7', delta: 'today', color: '#F59E0B' },
        { label: 'Waivers Signed', value: '89', delta: 'digital', color: '#22C55E' },
      ],
    },
  },
  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    color: 'text-torqone-ai',
    accent: '#7B5CFF',
    title: 'If You Can\'t See It, You Can\'t Fix It',
    body: 'You make decisions on gut feel because your data is scattered across notebooks, WhatsApp chats, and three different spreadsheets. TorqOne\'s Business Growth Intelligence Dashboard shows you everything in one place — and the AI Business Growth Coach tells you what to do about it every Monday morning.',
    bullets: [
      'Business Growth Intelligence Dashboard with monthly impact metrics',
      'Revenue, attendance, retention, and profit-vs-expense reports',
      'AI Business Growth Coach delivers a weekly action plan every Monday',
      'Executive dashboard for multi-branch performance (Scale plan)',
    ],
    panel: {
      stats: [
        { label: 'Revenue Forecast', value: '$1.2M', delta: 'next 12mo', color: '#7B5CFF' },
        { label: 'Member LTV', value: '$892', delta: 'avg.', color: '#3A5DE2' },
        { label: 'Churn Risk', value: '23', delta: 'flagged', color: '#EF4444' },
      ],
    },
  },
  {
    id: 'staff',
    icon: UserCog,
    label: 'Staff',
    color: 'text-torqone-accent',
    accent: '#00D4FF',
    title: 'Your Trainers Should Train, Not Track Spreadsheets',
    body: 'Trainers joined your gym to coach — not to chase attendance sheets, calculate payroll, or manage expense reports. TorqOne gives them a mobile app with their daily queue, member progress tracking, and nutrition plan approvals. You get automated payroll and expense management.',
    bullets: [
      'Trainer mobile app with daily queue and member progress tracking',
      'AI Nutrition Coach with trainer review, approval, and customization',
      'Staff payroll calculated automatically based on sessions and hours',
      'Expense management and financial reports for the owner',
    ],
    panel: {
      stats: [
        { label: 'Active Trainers', value: '24', delta: 'across 3 loc.', color: '#00D4FF' },
        { label: 'Sessions / Wk', value: '184', delta: '+12%', color: '#22C55E' },
        { label: 'Payroll Run', value: 'auto', delta: 'this mo.', color: '#F59E0B' },
      ],
    },
  },
];

function FeaturePanel({ feature }: { feature: typeof FEATURES[0] }) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div className="glass-card rounded-2xl overflow-hidden h-full">
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-torqone-border/60">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-torqone-error/60" />
              <div className="w-2 h-2 rounded-full bg-torqone-warning/60" />
              <div className="w-2 h-2 rounded-full bg-torqone-success/60" />
            </div>
            <span className="text-xs text-torqone-text-muted ml-2 font-mono">
              torqone.app / {feature.id}
            </span>
          </div>
          <Badge variant="primary" size="sm">{feature.label}</Badge>
        </div>

        <div className="p-5 space-y-5">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {feature.panel.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-torqone-background/50 border border-torqone-border/60 p-3">
                <p className="text-base font-bold text-white leading-none mb-1">{s.value}</p>
                <p className="text-[10px] text-torqone-text-muted mb-1 leading-none">{s.label}</p>
                <span className="text-[10px] font-medium" style={{ color: s.color }}>{s.delta}</span>
              </div>
            ))}
          </div>

          {/* Bullet list */}
          <div className="space-y-2.5">
            {feature.bullets.map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: `${feature.accent}22`, border: `1px solid ${feature.accent}44` }}>
                  <Check className="w-2.5 h-2.5" style={{ color: feature.accent }} />
                </div>
                <span className="text-sm text-torqone-text-secondary">{b}</span>
              </div>
            ))}
          </div>

          {/* Decorative bar chart */}
          <div className="flex items-end gap-1 h-12 pt-2">
            {[60, 75, 55, 85, 70, 90, 80, 95, 72, 88, 65, 78].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: `${feature.accent}40`, minWidth: 0 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesShowcase() {
  const [activeId, setActiveId] = useState('members');
  const active = FEATURES.find((f) => f.id === activeId) ?? FEATURES[0];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Core Platform"
            title={<>Six modules. One system.<br /><GradientText>Every problem solved.</GradientText></>}
            subtitle="Each module directly addresses a problem you just read about. Together, they form a connected platform that runs your gym from first lead to last renewal."
            className="mb-14"
          />
        </ScrollReveal>

        {/* Tab strip */}
        <ScrollReveal delay={0.1}>
          <div className="relative flex overflow-x-auto no-scrollbar border border-torqone-border/60 rounded-2xl p-1.5 bg-torqone-card/40 mb-12">
            {FEATURES.map((f) => {
              const isActive = f.id === activeId;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveId(f.id)}
                  className={`relative flex flex-1 items-center justify-center gap-2 min-w-[90px] px-4 py-2.5 rounded-xl transition-colors duration-200 text-xs font-semibold ${
                    isActive ? 'text-white' : 'text-torqone-text-muted hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-xl bg-torqone-card border border-torqone-border"
                      transition={{ type: 'spring', stiffness: 400, damping: 36 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <f.icon className={`w-3.5 h-3.5 ${isActive ? f.color : ''}`} />
                    <span className="hidden sm:inline">{f.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + '-text'}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl`}
                style={{ background: `${active.accent}22`, border: `1px solid ${active.accent}44` }}>
                <active.icon className={`w-6 h-6 ${active.color}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{active.title}</h3>
                <p className="text-torqone-text-secondary leading-relaxed">{active.body}</p>
              </div>
              <button className={`flex items-center gap-1.5 text-sm font-semibold ${active.color} hover:opacity-80 transition-opacity`}>
                Learn more <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right — panel */}
          <AnimatePresence mode="wait">
            <FeaturePanel key={active.id} feature={active} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
