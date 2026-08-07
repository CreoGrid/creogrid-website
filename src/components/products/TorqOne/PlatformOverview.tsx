'use client';

import { motion } from 'framer-motion';
import {
  Users, CreditCard, Calendar, BarChart3, Shield, Brain,
  Smartphone, Megaphone, Building2, Receipt, Apple, Gift,
  Zap, DatabaseZap, GraduationCap, Target, Database,
  Cloud, UserCog, Wallet, LineChart, Network, TrendingUp,
  Check, ChevronRight, Facebook, MessageCircle,
  UserPlus, Dumbbell, Activity, Trophy,
  Crown, Star, Heart, Flame, Bell, Sparkles, Camera,
  Monitor,
} from 'lucide-react';
import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal } from './primitives/motion';
import { Badge } from './primitives/Badge';

/* ═══════════════════════════════════════════════════════════════════════════════
   1. OPERATING SYSTEM VISUALIZATION  (12 nodes — 6 original + 6 new)
   Scaled up ~38%: larger nodes, fonts, icons, recalculated radial layout.
   ═══════════════════════════════════════════════════════════════════════════════ */

const NODES = [
  {
    icon: Users,
    label: "Member\nManagement",
    color: "#3A5DE2",
    angle: -90,
    dist: 170,
    ring: "inner",
  },
  {
    icon: UserPlus,
    label: "Customer\nAcquisition\n& CRM",
    color: "#22C55E",
    angle: -30,
    dist: 170,
    ring: "inner",
  },
  {
    icon: Dumbbell,
    label: "Member Journey \n&Success",
    color: "#F59E0B",
    angle: 30,
    dist: 170,
    ring: "inner",
  },
  {
    icon: GraduationCap,
    label: "Trainer\nWorkspace",
    color: "#00D4FF",
    angle: 90,
    dist: 170,
    ring: "inner",
  },
  {
    icon: Building2,
    label: "Gym\nOperations",
    color: "#EF4444",
    angle: 150,
    dist: 170,
    ring: "inner",
  },
  {
    icon: Brain,
    label: "AI &\nAutomation",
    color: "#7B5CFF",
    angle: -150,
    dist: 170,
    ring: "inner",
  },

  {
    icon: Receipt,
    label: "Business\nManagement\n& Billing",
    color: "#F59E0B",
    angle: -120,
    dist: 235,
    ring: "outer",
  },
  {
    icon: Megaphone,
    label: "Marketing\n& Growth",
    color: "#00D4FF",
    angle: -60,
    dist: 235,
    ring: "outer",
  },
  {
    icon: BarChart3,
    label: "Business\nIntelligence",
    color: "#3A5DE2",
    angle: 0,
    dist: 235,
    ring: "outer",
  },
  {
    icon: Network,
    label: "Enterprise\n& Multi-\nBranch",
    color: "#22C55E",
    angle: 60,
    dist: 235,
    ring: "outer",
  },
  {
    icon: Cloud,
    label: "Secure\nCloud\nPlatform",
    color: "#7B5CFF",
    angle: 120,
    dist: 235,
    ring: "outer",
  },
  {
    icon: DatabaseZap,
    label: "Data\nMigration",
    color: "#EF4444",
    angle: 180,
    dist: 223,
    ring: "outer",
  },
];

function toXY(angleDeg: number, dist: number) {
  const r = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(r) * dist, y: Math.sin(r) * dist };
}

function OperatingSystemViz() {
  const cx = 270;
  const cy = 270;
  const innerNodes = NODES.filter(n => n.ring === 'inner');
  const outerNodes = NODES.filter(n => n.ring === 'outer');

  return (
    <div className="relative w-full max-w-[560px] sm:max-w-[640px] xl:max-w-[520px] mx-auto aspect-square">
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle at center, rgba(123,92,255,0.5) 0%, transparent 65%)' }}
      />
      <svg viewBox="0 0 555 540" className="w-full h-full relative" aria-label="TorqOne Operating System architecture">
        {/* Ring guides */}
        <circle cx={cx} cy={cy} r={235} fill="none" stroke="rgba(30,45,64,0.4)" strokeWidth="0.5" strokeDasharray="2 6" />
        <circle cx={cx} cy={cy} r={170} fill="none" stroke="rgba(30,45,64,0.3)" strokeWidth="0.5" strokeDasharray="2 6" />

        {/* Inner connection lines to core */}
        {innerNodes.map((node, i) => {
          const { x, y } = toXY(node.angle, node.dist);
          return (
            <motion.line
              key={`line-${i}`}
              x1={cx} y1={cy}
              x2={cx + x} y2={cy + y}
              stroke={node.color}
              strokeWidth="1"
              strokeOpacity="0.35"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
            />
          );
        })}

        {/* Outer connection lines to core */}
        {outerNodes.map((node, i) => {
          const { x, y } = toXY(node.angle, node.dist);
          return (
            <motion.line
              key={`oline-${i}`}
              x1={cx} y1={cy}
              x2={cx + x} y2={cy + y}
              stroke={node.color}
              strokeWidth="0.75"
              strokeOpacity="0.2"
              strokeDasharray="3 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 + i * 0.08 }}
            />
          );
        })}

        {/* Animated pulse along inner connections */}
        {innerNodes.map((node, i) => {
          const { x, y } = toXY(node.angle, node.dist);
          return (
            <motion.circle
              key={`pulse-${i}`}
              r="3"
              fill={node.color}
              initial={{ cx, cy, opacity: 0 }}
              animate={{ cx: [cx, cx + x], cy: [cy, cy + y], opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, delay: 1.5 + i * 0.3, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
            />
          );
        })}

        {/* Central node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx={cx} cy={cy} r={73} fill="none" stroke="url(#coreGrad)" strokeWidth="1.5" opacity="0.5" />
          <circle cx={cx} cy={cy} r={54} fill="rgba(17,24,39,0.95)" stroke="url(#coreGrad)" strokeWidth="2" />
          <circle cx={cx} cy={cy} r={51} fill="url(#coreGradFill)" opacity="0.15" />
          <motion.circle
            cx={cx} cy={cy} r={65}
            fill="none" stroke="url(#coreGrad)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        </motion.g>

        {/* Center text */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <text x={cx - 15} y={cy + 5} textAnchor="middle" fontSize="17" fontWeight="800" fill="white" fontFamily="Inter, sans-serif">Torq</text>
          <text x={cx + 25} y={cy + 5} textAnchor="middle" fontSize="17" fontWeight="800" fill="url(#textGrad)" fontFamily="Inter, sans-serif">One</text>
          {/* <text x={cx} y={cy + 28} textAnchor="middle" fontSize="9" fill="#B7C2D0" fontFamily="Inter, sans-serif" letterSpacing="1">OPERATING SYSTEM</text> */}
        </motion.g>

        {/* Inner satellite nodes */}
        {innerNodes.map((node, i) => {
          const { x, y } = toXY(node.angle, node.dist);
          const nx = cx + x;
          const ny = cy + y;
          return (
            <motion.g
              key={`inner-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <circle cx={nx} cy={ny} r={47} fill="rgba(17,24,39,0.95)" stroke={node.color} strokeWidth="1.5" strokeOpacity="0.6" />
              <circle cx={nx} cy={ny} r={55} fill={node.color} fillOpacity="0.08" />
              <circle cx={nx} cy={ny - 9} r={6.5} fill={node.color} fillOpacity="0.7" />
              {node.label.split('\n').map((line, li) => (
                <text key={li} x={nx} y={ny + 11 + li * 14} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#B7C2D0" fontFamily="Inter, sans-serif">
                  {line}
                </text>
              ))}
            </motion.g>
          );
        })}

        {/* Outer satellite nodes */}
        {outerNodes.map((node, i) => {
          const { x, y } = toXY(node.angle, node.dist);
          const nx = cx + x;
          const ny = cy + y;
          return (
            <motion.g
              key={`outer-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }} 
            >
              <circle cx={nx} cy={ny} r={47} fill="rgba(17,24,39,0.9)" stroke={node.color} strokeWidth="1.25" strokeOpacity="0.5" />
              <circle cx={nx} cy={ny} r={55} fill={node.color} fillOpacity="0.06" />
              <circle cx={nx} cy={ny - 7} r={5.5} fill={node.color} fillOpacity="0.6" />
              {node.label.split('\n').map((line, li) => (
                <text key={li} x={nx} y={ny + 9 + li * 14} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#B7C2D0" fontFamily="Inter, sans-serif">
                  {line}
                </text>
              ))}
            </motion.g>
          );
        })}

        <defs>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A5DE2" />
            <stop offset="55%" stopColor="#7B5CFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
          <linearGradient id="coreGradFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A5DE2" />
            <stop offset="100%" stopColor="#7B5CFF" />
          </linearGradient>
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B5CFF" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   2. FEATURE CATEGORIES  —  compact blocks with chips & check-mark badges
   AI capabilities → purple/violet chips. Everything else → neutral check badges.
   ═══════════════════════════════════════════════════════════════════════════════ */

type Feature = { label: string; ai?: boolean; icon?: typeof Smartphone };

const FEATURE_SECTIONS: {
  icon: typeof Smartphone;
  color: string;
  bg: string;
  heading: string;
  description: string;
  features: Feature[];
  elevated?: boolean;
}[] = [
  {
    icon: Smartphone,
    color: '#3A5DE2',
    bg: 'rgba(58,93,226,0.1)',
    heading: 'Applications Included',
    description: 'Every app your gym needs — for owners, members, and trainers — in one connected suite.',
    elevated: true,
    features: [
      { label: 'Member Mobile App', icon: Smartphone },
      { label: 'Trainer Mobile App', icon: Smartphone },
      { label: 'Owner/Admin Mobile App', icon: Smartphone },
      { label: 'Owner Desktop Application (PWA)', icon: Monitor },
    ],
  },
  {
    icon: Users,
    color: '#00D4FF',
    bg: 'rgba(0,212,255,0.1)',
    heading: 'Member Management',
    description: 'Everything from registration to renewals, billing, and smart reminders.',
    features: [
      { label: 'Member Registration' },
      { label: 'Memberships' },
      { label: 'Attendance' },
      { label: 'Billing & Payments' },
      { label: 'GST Invoices' },
      { label: 'Online Renewals' },
      { label: 'Workout History' },
      { label: 'Membership status' },
      { label: 'Push Notifications' },
      { label: 'Digital Waivers' },
      { label: 'Birthday Wishes' },
      { label: 'Inactivity Recovery' },
      { label: 'Expiry Management' },
      { label: 'Smart Reminders' },
      { label: 'Communication Tools' },
      { label: 'Complaints & Feedback' },
      { label: 'Health Calculators' },
      { label: 'Health Indicators' },
    ],
  },
  {
    icon: UserPlus,
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.1)',
    heading: 'Customer Acquisition & CRM',
    description: 'Capture, score, nurture, and convert leads with AI-powered automation.',
    features: [
      { label: 'Lead Capture' },
      { label: 'AI Lead Scoring', ai: true },
      { label: 'Trial Bookings' },
      { label: 'Automatic Follow-ups' },
      { label: 'Missed Lead Recovery' },
      { label: 'WhatsApp Automation' },
      { label: 'Google Review Automation' },
      { label: 'Referrals' },
      { label: 'Campaign Tracking' },
      { label: 'Lead Analytics', ai: true },
      { label: 'Customer Retention' },
      { label: 'Complete CRM' },
    ],
  },
  {
    icon: Trophy,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    heading: 'Member Journey & Success',
    description: 'Workouts, nutrition, gamification, and AI motivation that keeps members engaged.',
    features: [
      { label: 'Workout Plans' },
      { label: 'Exercise Tracking' },
      { label: 'Target Muscle Guidance' },
      { label: 'Daily Workout Schedule' },
      { label: 'Nutrition Management' },
      { label: 'Goal-based Nutrition Plans', ai: true },
      { label: 'Calorie Tracking' },
      { label: 'Transformation Tracking'},
      { label: 'Discipline Tracking' },
      { label: 'AI Motivation', ai: true },
      { label: 'Engagement System' },
      { label: 'Challenges' },
      { label: 'Leaderboards' },
      { label: 'Achievement Badges' },
      { label: 'Gamification' },
      { label: 'Loyalty & Rewards' },
      { label: 'Workout Streak Rewards' },
      { label: 'Attendance Rewards' },
      { label: 'VIP Rewards' },
      { label: 'Birthday Rewards' },
      { label: 'Discount Coupons' },
    ],
  },
  {
    icon: UserCog,
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.1)',
    heading: 'Trainer Workspace',
    description: 'A dedicated mobile app for trainers to manage members, workouts, and bookings.',
    features: [
      { label: 'Trainer Mobile App' },
      { label: 'Member Progress Tracking' },
      { label: 'Daily Trainer Queue' },
      { label: 'Workout Management' },
      { label: 'Nutrition Review & Approval' },
      { label: 'Booking System' },
      { label: 'Trainer Notifications' },
      { label: 'Trainer Productivity Tools' },
    ],
  },
  {
    icon: Shield,
    color: '#3A5DE2',
    bg: 'rgba(58,93,226,0.1)',
    heading: 'Gym Operations',
    description: 'Smart Reception, scheduling, inventory, POS, and complete day-to-day operations.',
    features: [
      { label: 'Owner Desktop App' },
      { label: 'Smart Reception' },
      { label: 'Owner Dashboards & Reports' },
      { label: 'Attendance Reports' },
      { label: 'Member Onboarding' },
      { label: 'Attendance Management' },
      { label: 'Scheduling' },
      { label: 'Equipment Maintenance' },
      { label: 'Inventory' },
      { label: 'eCommerce' },
      { label: 'POS' },
      { label: 'Payroll' },
      { label: 'Staff Management' },
    ],
  },
  {
    icon: Wallet,
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.1)',
    heading: 'Business Management & Billing',
    description: 'Billing, expenses, financial reports, and profit & loss across branches.',
    features: [
      { label: 'Business Reports with AI insights', ai: true },
      { label: 'Revenue Reports with AI insights', ai: true },
      { label: 'Attendance Analytics' },
      { label: 'Customer Retention Analytics' },
      { label: 'Membership Billing' },
      { label: 'Payment Management' },
      { label: 'Expenses' },
      { label: 'Payroll' },
      { label: 'Financial Reports' },
      { label: 'Profit & Loss' },
      { label: 'Profit vs Expense' },
      { label: 'Branch-wise Finances' },
      { label: 'Business Reports' },
      { label: 'Operational Analytics' },
    ],
  },
  {
    icon: Megaphone,
    color: '#7B5CFF',
    bg: 'rgba(123,92,255,0.1)',
    heading: 'Marketing & Growth',
    description: 'AI-powered campaigns, referrals, loyalty programs, and a self-learning marketing engine.',
    features: [
      { label: 'AI Facebook & Instagram Marketing', ai: true },
      { label: 'Campaign Generation', ai: true },
      { label: 'Posters & Captions', ai: true },
      { label: 'Hashtags' },
      { label: 'Referrals' },
      { label: 'AI Audience Suggestions', ai: true  },
      { label: 'AI Best Posting Time', ai: true  },
      { label: 'AI Campaign Suggestions', ai: true  },
      {label:  'Marketing Optimization', ai: true  },
      { label: 'Loyalty Programs' },
      { label: 'Rewards Engine' },
      { label: 'Campaign Analytics' },
      { label: 'Growth Automation' },
      { label: 'Self-learning AI Marketing Engine', ai: true },
    ],
  },
  {
    icon: Zap,
    color: '#00D4FF',
    bg: 'rgba(0,212,255,0.1)',
    heading: 'AI & Automation Engine',
    description: 'Predictive insights, personalized messages, and proactive business assistance.',
    features: [
      { label: 'AI Business Growth Coach', ai: true },
      { label: 'AI Customer Acquisition', ai: true },
      { label: 'AI Customer Retention', ai: true },
      { label: 'Automatic Renewals' },
      { label: 'Inactivity Recovery' },
      { label: 'Payment Recovery' },
      { label: 'Lead Recovery' },
      { label: 'Trial Follow-ups' },
      { label: 'Smart Reminders' },
      { label: 'Personalized Renewal Offers', ai: true },
      { label: 'Personalized WhatsApp Messages', ai: true },
      { label: 'AI determines best send time', ai: true },
      { label: 'AI Motivation', ai: true },
      { label: 'Smart Notifications', ai: true },
      { label: 'Intelligent Recommendations', ai: true },
      { label: 'Predictive Insights', ai: true },
      { label: 'Workflow Automation' },
      { label: 'Proactive Business Assistance', ai: true },
    ],
  },
  {
    icon: LineChart,
    color: '#7B5CFF',
    bg: 'rgba(123,92,255,0.1)',
    heading: 'Business Intelligence',
    description: 'Executive dashboards, revenue forecasting, and AI-powered business recommendations.',
    features: [
      { label: 'Executive Dashboards' },
      { label: 'KPIs' },
      { label: 'Growth Intelligence' },
      { label: 'Revenue Forecasting' },
      { label: 'Members Likely to Leave' },
      { label: 'Member Lifetime Value' },
      { label: 'ROI Tracking' },
      { label: 'Business Health Monitoring' },
      { label: 'Executive Reports' },
      { label: 'AI Growth Score', ai: true },
      { label: 'AI Business Recommendations', ai: true },
    ],
  },
  {
    icon: Building2,
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    heading: 'Enterprise & Multi-Branch',
    description: 'Multi-branch management, advanced permissions, enterprise security, and white-label.',
    features: [
      { label: 'Multi-branch Management' },
      { label: 'Fingerprint Integration' },
      { label: 'QR Attendance' },
      { label: 'API Integrations' },
      { label: 'Enterprise Security' },
      { label: 'Branch-wise P&L' },
      { label: 'Custom Reports' },
      { label: 'Advanced Permissions' },
      { label: 'Custom Workflows' },
      { label: 'Dedicated Infrastructure & Database' },
      { label: 'White-label Platform' },
    ],
  },
  {
    icon: Cloud,
    color: '#3A5DE2',
    bg: 'rgba(58,93,226,0.1)',
    heading: 'Secure Cloud Platform',
    description: 'Enterprise-grade hosting, automatic backups, disaster recovery, and continuous monitoring.',
    features: [
      { label: 'Secure Cloud Hosting' },
      { label: 'Automatic Backups' },
      { label: 'High Availability' },
      { label: 'Auto Software Updates' },
      { label: 'Auto Scaling' },
      { label: 'Performance Optimization' },
      { label: 'Disaster Recovery' },
      { label: 'Enterprise-grade Security' },
      { label: 'AI Infrastructure', ai: true },
      { label: 'Continuous Monitoring' },
    ],
  },
  {
    icon: Database,
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.1)',
    heading: 'Data Migration',
    description: 'We migrate your existing members, plans, history, and data from any previous system.',
    features: [
      { label: 'Existing Members' },
      { label: 'Membership Plans' },
      { label: 'Active Subscriptions' },
      { label: 'Payment History' },
      { label: 'Attendance History' },
      { label: 'Trainer Data' },
      { label: 'Branch Data' },
      { label: 'Previous Software Imports' },
      { label: 'Excel & CSV Imports' },
    ],
  },
];

function FeatureChip({ label, ai, icon: Icon }: { label: string; ai?: boolean; icon?: typeof Smartphone }) {
  if (Icon) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border"
        style={{ background: 'rgba(58,93,226,0.1)', borderColor: 'rgba(58,93,226,0.3)', color: '#B7C2D0' }}>
        <Icon className="w-3.5 h-3.5 text-torqone-primary" strokeWidth={2} />
        {label}
      </span>
    );
  }
  if (ai) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border"
        style={{ background: 'rgba(123,92,255,0.12)', borderColor: 'rgba(123,92,255,0.35)', color: '#9d86ff' }}>
        <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium border border-torqone-border/50 bg-torqone-background/40 text-torqone-text-secondary">
      <Check className="w-2.5 h-2.5 text-torqone-success" strokeWidth={3} />
      {label}
    </span>
  );
}

function FeatureSectionBlock({ section, index }: { section: typeof FEATURE_SECTIONS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className={`group glass-card rounded-2xl p-5 h-full${section.elevated ? ' border-[1.5px]' : ''}`}
      style={section.elevated ? {
        background: 'linear-gradient(135deg, rgba(58,93,226,0.08) 0%, rgba(123,92,255,0.05) 100%)',
        borderColor: 'rgba(58,93,226,0.35)',
      } : undefined}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
          style={{ background: section.bg, borderColor: `${section.color}33` }}
        >
          <section.icon className="w-5 h-5" style={{ color: section.color }} />
        </div>
        <h4 className="text-sm font-bold text-white leading-tight">{section.heading}</h4>
      </div>
      <p className="text-xs text-torqone-text-secondary leading-relaxed mb-3">
        {section.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {section.features.map((feat) => (
          <FeatureChip key={feat.label} label={feat.label} ai={feat.ai} icon={feat.icon} />
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   3. THREE PREMIUM CARDS BELOW THE VISUALIZATION
   ═══════════════════════════════════════════════════════════════════════════════ */

function AINeverStopsCard() {
  const watchItems = [
    { icon: Users,      label: 'Attendance',    color: '#3A5DE2' },
    { icon: CreditCard, label: 'Renewals',      color: '#22C55E' },
    { icon: Wallet,     label: 'Payments',      color: '#F59E0B' },
    { icon: UserPlus,   label: 'Leads',         color: '#00D4FF' },
    { icon: Trophy,     label: 'Engagement',    color: '#7B5CFF' },
    { icon: LineChart,  label: 'Performance',   color: '#EF4444' },
  ];

  return (
    <div className="relative h-full">
      <div
        className="absolute -inset-3 rounded-2xl blur-2xl opacity-10"
        style={{ background: 'radial-gradient(circle at top, rgba(123,92,255,0.5), transparent 70%)' }}
      />
      <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
        <div className="absolute top-0 right-0 flex gap-1 p-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-torqone-ai"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="w-10 h-10 rounded-xl bg-torqone-ai-muted border border-torqone-ai/20 flex items-center justify-center mb-4">
          <Brain className="w-5 h-5 text-torqone-ai" />
        </div>
        <h3 className="text-base font-bold text-white mb-2">AI That Never Stops Working</h3>
        <p className="text-sm text-torqone-text-secondary leading-relaxed mb-5">
          TorqOne continuously watches attendance, renewals, payments, leads, member engagement and business performance. It predicts problems before they become losses, automates repetitive work, and delivers recommendations every week — so your business keeps improving even when you&apos;re busy running it.
        </p>

        <div className="grid grid-cols-3 gap-2">
          {watchItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-torqone-border/50 bg-torqone-background/40 p-2.5"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}28` }}
              >
                <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
              </div>
              <span className="text-[10px] text-torqone-text-muted font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ZeroSwitchingCard() {
  const oldWay = ['WhatsApp', 'Excel', 'Phone Calls', 'Billing', 'Attendance', 'CRM', 'Reports', 'More Excel'];

  return (
    <div className="relative h-full">
      <div
        className="absolute -inset-3 rounded-2xl blur-2xl opacity-10"
        style={{ background: 'radial-gradient(circle at top, rgba(58,93,226,0.5), transparent 70%)' }}
      />
      <div className="relative glass-card rounded-2xl p-6 h-full">
        <div className="w-10 h-10 rounded-xl bg-torqone-primary-muted border border-torqone-primary/20 flex items-center justify-center mb-4">
          <Network className="w-5 h-5 text-torqone-primary" />
        </div>
        <h3 className="text-base font-bold text-white mb-2">One Platform. Zero Switching.</h3>
        <p className="text-sm text-torqone-text-secondary leading-relaxed mb-5">
          Instead of switching between WhatsApp, Excel, Google Sheets, phone calls, printers, notebooks, POS, CRM, attendance registers and billing software — everything happens inside TorqOne.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* Old Way */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-torqone-error mb-2.5">Old Way</p>
            <div className="space-y-1">
              {oldWay.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-1.5"
                >
                  <div className="flex-1 rounded-md bg-torqone-error-muted border border-torqone-error/15 px-2 py-1.5 text-[10px] text-torqone-text-muted text-center">
                    {tool}
                  </div>
                  {i < oldWay.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-torqone-error/40 rotate-90" />}
                </motion.div>
              ))}
              <div className="flex items-center justify-center pt-1">
                <span className="text-[9px] text-torqone-error/60">Owner overwhelmed</span>
              </div>
            </div>
          </div>

          {/* New Way */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-torqone-success mb-2.5">New Way</p>
            <div className="flex flex-col items-center justify-start gap-1 pt-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-lg bg-torqone-gradient px-4 py-2 text-xs font-bold text-white shadow-torqone-primary w-full text-center"
              >
                TorqOne
              </motion.div>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4], y: [0, 2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-3 h-3 text-torqone-success rotate-90" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="rounded-lg bg-torqone-success-muted border border-torqone-success/25 px-3 py-2 text-[10px] font-semibold text-torqone-success text-center w-full"
              >
                Everything Connected
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const LEAD_JOURNEY = [
  { icon: Facebook,      label: 'Facebook / Instagram', color: '#3A5DE2' },
  { icon: UserPlus,     label: 'Lead Captured',          color: '#22C55E' },
  { icon: Brain,        label: 'AI Lead Scoring',        color: '#7B5CFF' },
  { icon: MessageCircle, label: 'Automatic WhatsApp',    color: '#00D4FF' },
  { icon: Calendar,     label: 'Trial Booking',          color: '#F59E0B' },
  { icon: Bell,         label: 'Visit Reminder',         color: '#EF4444' },
  { icon: Users,        label: 'Membership',             color: '#22C55E' },
  { icon: Zap,          label: 'Retention Automation',   color: '#7B5CFF' },
  { icon: Gift,         label: 'Referral',               color: '#F59E0B' },
];

function LeadJourneyCard() {
  const col1 = LEAD_JOURNEY.slice(0, 5);
  const col2 = LEAD_JOURNEY.slice(5);
  const crossColor = LEAD_JOURNEY[4].color;

  return (
    <div className="relative h-full">
      <div
        className="absolute -inset-3 rounded-2xl blur-2xl opacity-10"
        style={{ background: 'radial-gradient(circle at top, rgba(0,212,255,0.5), transparent 70%)' }}
      />
      <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
        <div className="w-10 h-10 rounded-xl bg-torqone-accent-muted border border-torqone-accent/20 flex items-center justify-center mb-4">
          <TrendingUp className="w-5 h-5 text-torqone-accent" />
        </div>
        <h3 className="text-base font-bold text-white mb-2">Every Lead Has A Journey</h3>
        <p className="text-sm text-torqone-text-secondary leading-relaxed mb-5">
          From the first ad click to a loyal, referring member — every step is automated, tracked and optimized.
        </p>

        <div className="flex justify-center items-stretch gap-x-2">
          {/* Column 1: steps 1-5 */}
          <div className="flex flex-col items-center">
            {col1.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex flex-col items-center gap-1.5 w-[72px]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}
                  >
                    <step.icon className="w-[18px] h-[18px]" style={{ color: step.color }} />
                  </div>
                  <span className="text-[10px] text-torqone-text-muted font-medium text-center leading-tight min-h-[28px] flex items-center">
                    {step.label}
                  </span>
                </motion.div>
                {i < col1.length - 1 && (
                  <div className="relative flex flex-col items-center h-6">
                    <div className="w-px h-3.5" style={{ background: `${step.color}40` }} />
                    <div
                      className="w-0 h-0"
                      style={{
                        borderLeft: '3px solid transparent',
                        borderRight: '3px solid transparent',
                        borderTop: `4px solid ${step.color}`,
                      }}
                    />
                    <motion.div
                      className="absolute w-1 h-1 rounded-full"
                      style={{ background: step.color }}
                      animate={{ y: [-4, 18, -4], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cross-column connector: bottom of col1 → top of col2 */}
          <div className="relative flex flex-col items-center self-stretch w-5 py-1">
            <div
              className="w-0 h-0 shrink-0"
              style={{
                borderLeft: `5px solid ${crossColor}`,
                borderTop: '3px solid transparent',
                borderBottom: '3px solid transparent',
              }}
            />
            <div className="w-px flex-1 my-1" style={{ background: `${crossColor}40` }} />
            <motion.div
              className="absolute w-1 h-1 rounded-full left-1/2 -translate-x-1/2"
              style={{ background: crossColor, top: '90%' }}
              animate={{ top: ['90%', '10%'], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          {/* Column 2: steps 6-9 */}
          <div className="flex flex-col items-center">
            {col2.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + 5) * 0.08 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex flex-col items-center gap-1.5 w-[72px]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}
                  >
                    <step.icon className="w-[18px] h-[18px]" style={{ color: step.color }} />
                  </div>
                  <span className="text-[10px] text-torqone-text-muted font-medium text-center leading-tight min-h-[28px] flex items-center">
                    {step.label}
                  </span>
                </motion.div>
                {i < col2.length - 1 && (
                  <div className="relative flex flex-col items-center h-6">
                    <div className="w-px h-3.5" style={{ background: `${step.color}40` }} />
                    <div
                      className="w-0 h-0"
                      style={{
                        borderLeft: '3px solid transparent',
                        borderRight: '3px solid transparent',
                        borderTop: `4px solid ${step.color}`,
                      }}
                    />
                    <motion.div
                      className="absolute w-1 h-1 rounded-full"
                      style={{ background: step.color }}
                      animate={{ y: [-4, 18, -4], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: (i + 5) * 0.2 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   4. MEMBER SUCCESS JOURNEY  —  animated horizontal flow
   ═══════════════════════════════════════════════════════════════════════════════ */

const MEMBER_JOURNEY = [
  { icon: UserPlus,     label: 'Join Gym',            color: '#3A5DE2' },
  { icon: Dumbbell,     label: 'Workout Plan',        color: '#22C55E' },
  { icon: Activity,     label: 'Exercise Guidance',   color: '#00D4FF' },
  { icon: Target,       label: 'Target Muscle',        color: '#F59E0B' },
  { icon: Apple,        label: 'Nutrition Plan',      color: '#EF4444' },
  { icon: Flame,        label: 'Calories',            color: '#7B5CFF' },
  { icon: TrendingUp,   label: 'Progress Tracking',   color: '#22C55E' },
  { icon: Camera,       label: 'Transformation',      color: '#00D4FF' },
  { icon: Shield,       label: 'Discipline Score',     color: '#3A5DE2' },
  { icon: Trophy,       label: 'Challenges',          color: '#F59E0B' },
  { icon: BarChart3,    label: 'Leaderboards',        color: '#7B5CFF' },
  { icon: Gift,         label: 'Rewards',             color: '#22C55E' },
  { icon: Crown,        label: 'VIP Rewards',         color: '#F59E0B' },
  { icon: Sparkles,     label: 'AI Motivation',       color: '#7B5CFF' },
  { icon: Star,         label: 'Milestones',          color: '#00D4FF' },
  { icon: Heart,        label: 'Long-Term Member',    color: '#EF4444' },
];

function MemberJourneyFlow() {
  return (
    <div className="relative">
      <ScrollReveal>
        <div className="text-center mb-10">
          <Badge variant="primary" dot size="md" className="mb-4">
            <Sparkles className="w-3 h-3" /> Member Success
          </Badge>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
            Every Member Has A Journey
          </h3>
          <p className="text-sm text-torqone-text-secondary max-w-2xl mx-auto leading-relaxed">
            From the moment they join to the day they become a long-term advocate — TorqOne guides every step of their fitness journey with AI-powered engagement, tracking, and motivation.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="relative glass-card rounded-2xl p-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, rgba(58,93,226,0.3), rgba(123,92,255,0.3), rgba(0,212,255,0.3))' }}
          />

          <div className="relative flex flex-wrap items-center justify-center gap-y-4 gap-x-1">
            {MEMBER_JOURNEY.map((step, i) => (
              <div key={i} className="flex items-center gap-1">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex flex-col items-center gap-1.5 w-[68px] group cursor-default"
                >
                  <div
                    className="relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:shadow-lg"
                    style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}
                  >
                    <step.icon className="w-[18px] h-[18px]" style={{ color: step.color }} />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                      style={{ background: `${step.color}30` }}
                    />
                  </div>
                  <span className="text-[9px] text-torqone-text-muted font-medium text-center leading-tight">
                    {step.label}
                  </span>
                </motion.div>
                {i < MEMBER_JOURNEY.length - 1 && (
                  <div className="relative flex items-center pb-5">
                    <div className="w-3 h-px" style={{ background: `${step.color}30` }} />
                    <motion.div
                      className="absolute w-1 h-1 rounded-full"
                      style={{ background: step.color }}
                      animate={{ x: [-4, 8, -4], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════════════════ */

export function PlatformOverview() {
  return (
    <section className="relative py-28 bg-torqone-card/20 overflow-hidden" id="platform">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern-sm opacity-50"
        style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="One Intelligent Platform."
            title={<>What if every part of your gym<br /><GradientText>worked together as one intelligent system?</GradientText></>}
            subtitle="TorqOne becomes the intelligent operating system behind your gym—bringing member management, customer acquisition, Whatsapp automation, CRM, billing, trainers, workouts, nutrition, communication, marketing, AI automations, business intelligence, finance, expense and daily operations into one connected platform. When something changes anywhere, everything stays perfectly in sync."
            className="mb-16"
          />
        </ScrollReveal>

        {/* ── Unified platform container: visualization + feature cards ── */}
        <div className="relative glass-card rounded-3xl p-6 sm:p-8 mb-20 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ background: 'radial-gradient(circle at 30% 40%, rgba(123,92,255,0.4), transparent 60%)' }}
          />

          {/* Top row: visualization (left) + first two feature cards (right) on desktop */}
          <div className="relative flex flex-col xl:flex-row gap-8 items-start">
            <ScrollReveal className="xl:w-[460px] xl:shrink-0 mx-auto xl:mx-0">
              <OperatingSystemViz />
            </ScrollReveal>

            <div className="flex flex-col gap-5 w-full xl:flex-1">
              {FEATURE_SECTIONS.slice(0, 2).map((section, i) => (
                <ScrollReveal key={section.heading} delay={i * 0.1}>
                  <FeatureSectionBlock section={section} index={i} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Remaining feature cards in the existing responsive 2-column grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {FEATURE_SECTIONS.slice(2).map((section, i) => (
              <ScrollReveal key={section.heading} delay={(i % 2) * 0.1}>
                <FeatureSectionBlock section={section} index={i + 2} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Three premium cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          <ScrollReveal>
            <AINeverStopsCard />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ZeroSwitchingCard />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <LeadJourneyCard />
          </ScrollReveal>
        </div>

        {/* ── Member Success Journey ── */}
        <MemberJourneyFlow />
      </div>
    </section>
  );
}
