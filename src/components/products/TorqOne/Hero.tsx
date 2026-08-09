'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import {
  ArrowRight, TrendingUp, Users, Zap, Brain, BarChart3,
  CheckCircle, Phone, Activity, Sparkles, Shield, ChevronRight,
} from 'lucide-react';
import { Button } from './primitives/Button';
import { Badge } from './primitives/Badge';
import { BackgroundOrbs, GridBackground } from './primitives/Background';
import { GradientText } from './primitives/ui';
import { useCTA } from './CTAContext';


function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-2xl mx-auto"
    >
      {/* Glow behind the card */}
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30"
        style={{ background: 'linear-gradient(135deg, rgba(58,93,226,0.5), rgba(123,92,255,0.5), rgba(0,212,255,0.3))' }}
      />

      {/* Main dashboard card */}
      <div className="relative w-[75%] xs:w-full glass-card rounded-2xl overflow-hidden border border-torqone-border">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-torqone-border/60 bg-torqone-card/80">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-torqone-error/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-torqone-warning/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-torqone-success/80" />
            </div>
            <span className="max-xs:hidden text-xs text-torqone-text-muted ml-2 font-mono">torqone.app / dashboard</span>
          </div>
          <Badge variant="ai" dot pulse size="sm">AI Active</Badge>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI Row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Active Members', value: '847', change: '+12%', icon: Users, color: 'text-torqone-primary' },
              { label: 'Monthly Revenue', value: '₹325.5K', change: '+8.3%', icon: TrendingUp, color: 'text-torqone-success' },
              { label: 'Retention', value: '94.1%', change: '+2.1%', icon: Shield, color: 'text-torqone-ai' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-xl bg-torqone-background/60 border border-torqone-border/60 p-3">
                <div className="flex items-center justify-between mb-1.5">
                  <kpi.icon className={`w-3.5 h-3.5 ${kpi.color}`} />
                  <span className="text-[10px] text-torqone-success font-medium">{kpi.change}</span>
                </div>
                <p className="text-base font-bold text-white leading-none mb-0.5">{kpi.value}</p>
                <p className="text-[10px] text-torqone-text-muted leading-none">{kpi.label}</p>
              </div>
            ))}
          </div>

          {/* AI Insight Card */}
          <div className="rounded-xl border border-torqone-ai/30 bg-torqone-ai-muted p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-torqone-gradient-ai flex items-center justify-center">
                <Brain className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-torqone-ai">AI Business Growth Coach</span>
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[10px] text-torqone-accent"
                  >
                    ● Analyzing
                  </motion.span>
                </div>
                <p className="text-xs text-torqone-text-secondary leading-relaxed">
                  17 members haven&apos;t visited in 9 days. WhatsApp re-engagement sent automatically. 4 already rebooked. Projected recovery: <span className="text-white font-semibold">₹4,140/month</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-torqone-text-secondary">Live Activity</span>
              <span className="flex items-center gap-1 text-[10px] text-torqone-success">
                <span className="w-1.5 h-1.5 rounded-full bg-torqone-success animate-pulse" />
                Real-time
              </span>
            </div>
            <div className="space-y-2">
              {[
                { icon: Users,    color: 'bg-torqone-primary',  msg: 'Lead from Instagram ad — auto WhatsApp follow-up sent',  time: '2s ago' },
                { icon: Activity, color: 'bg-torqone-success',  msg: 'Payment collected — GST invoice auto-generated',          time: '14s ago' },
                { icon: Sparkles, color: 'bg-torqone-ai',       msg: 'AI sent birthday wishes + referral nudge to 12 members', time: '1m ago' },
                { icon: BarChart3,color: 'bg-torqone-warning',  msg: 'Monday Growth Report delivered — 3 at-risk members flagged', time: '3m ago' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex items-center gap-2.5 py-1.5"
                >
                  <div className={`w-6 h-6 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="flex-1 text-[11px] text-torqone-text-secondary truncate">{item.msg}</span>
                  <span className="text-[10px] text-torqone-text-muted shrink-0">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {

    const { openDemo, openSales } = useCTA();

  const trustItems = [
    'No credit card required',
    'Setup in 48 hours',
    'WhatsApp automations from day one',
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Backgrounds */}
      <BackgroundOrbs />
      <GridBackground />

      {/* Radial vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(7,16,24,0.95) 30%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Image
          src="/TorqOneLogo_Final2.png"
          alt="TorqOne"
          width={500}
          height={147}
          priority
          className="mx-auto my-8 h-auto w-[280px] sm:w-[360px] lg:w-[420px]"
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center pb-24">
          {/* Left column — copy */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6"
            >
              <Badge variant="ai" dot pulse size="sm">
                <Sparkles className="w-3 h-3" /> AI-Powered Platform — by CreoGrid
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight leading-[1.05] text-white mb-6"
            >
              <span className="block lg:whitespace-nowrap"> The Intelligent Platform </span>
              <span className="lg:whitespace-nowrap">
                <GradientText>
                  for Modern
                  {/* <br className="sm:hidden" />
  {" "}Modern */}
                </GradientText>
              </span>
              <br className="xxs:hidden" /> Gym
              <br className="xxs:hidden" /> Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              className="text-[15px] sm:text-lg text-torqone-text-secondary leading-relaxed mb-10 max-xs:w-[75%] xs:max-w-[85%]"
            >
              Every day you lose valuable time on manual follow-ups, missed leads, silent drop-offs,
              disconnected tools and late-night spreadsheet sessions. TorqOne runs & unifies
              everything for you — Customer Acquisition, Retention, Marketing, Billing, Trainers,
              and Growth along with Member management, Operations, Business intelligence, AI
              Automations, Dashboards and CRM into one intelligent platform— so you can spend less
              time managing your gym and more time growing it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.33 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Button
                variant="gradient"
                size="xl"
                iconPosition="right"
                icon={<Phone className="w-4 h-4" />}
                onClick={openSales}
              >
                Talk to us
              </Button>
              <Button
                variant="outline"
                size="xl"
                iconPosition="right"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={openDemo}
              >
                Book a Demo
              </Button>
              {/* <Button variant="outline" size="xl" iconPosition="right" icon={<ChevronRight className="w-4 h-4" />}>
                Explore Platform
              </Button> */}
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-torqone-text-muted"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-torqone-success shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — dashboard */}
          <div className="mt-12 relative">
            <DashboardMockup />
          </div>
        </div>

        {/* Stats bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative border-t border-torqone-border/40 pt-10 pb-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Members Managed' },
              { value: '$12M+',   label: 'Revenue Processed' },
              { value: '34%',     label: 'Avg Churn Reduction' },
              { value: '480hrs',  label: 'Automated Per Month' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-white tracking-tight mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-torqone-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
