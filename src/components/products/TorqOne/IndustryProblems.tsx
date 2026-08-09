"use client";

import { motion } from "framer-motion";
import {
    TrendingDown,
    Users,
    Wrench,
    Gift,
    HeartHandshake,
    AlertTriangle,
    Layers,
    EyeOff,
    MessageSquareOff,
    DollarSign,
    BrickWall,
    Building2,
    ShieldAlert,
    CalendarOff,
    BarChart3,
    PhoneCall,
    MessageSquareMore,
} from "lucide-react";
import { SectionHeading, GradientText } from "./primitives/ui";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./primitives/motion";

/* ─── Part 1: The problems you already feel ──────────────────────────────────── */
// const OBVIOUS_PROBLEMS = [
//   {
//     icon: TrendingDown,
//     color: 'text-torqone-error',
//     bg: 'bg-torqone-error-muted',
//     border: 'border-torqone-error/20',
//     title: "Members Don't Cancel — They Just Stop Coming",
//     body: "A member misses one workout. Then two. Then a week. You don't notice until the renewal lapses and the payment fails. By then they've already joined the gym down the street. You're losing members you never knew were slipping away.",
//   },
//   {
//     icon: Users,
//     color: 'text-torqone-primary',
//     bg: 'bg-torqone-primary-muted',
//     border: 'border-torqone-primary/20',
//     title: 'Growth Has Become Unpredictable',
//     body: "Some months new members join naturally. Other months the phone barely rings or walk-ins slow down. Maybe you're running ads, maybe you're relying on referrals, or maybe you're simply hoping enquiries continue. Without a consistent system to capture, follow up, and convert every opportunity, growth becomes something you wait for instead of something you control.",
//   },
//   {
//     icon: Wrench,
//     color: 'text-torqone-warning',
//     bg: 'bg-torqone-warning-muted',
//     border: 'border-torqone-warning/20',
//     title: 'Your Business Depends Too Much on You And Has Become a Full-Time Firefight',
//     body: "Whether you run the gym alone or have a team, too many important tasks still depend on someone remembering to do them. Renewals, follow-ups, invoices, member questions, attendance, complaints, birthday wishes, festival greetings, checking in on members who've stopped visiting, and countless other small moments quietly consume hours every week. The problem isn't just the time they take—it's the opportunities you miss when they never happen. Every forgotten follow-up, missed birthday, unanswered enquiry, or silent absence is another chance for a member to disengage without anyone noticing.",
//   },
//   {
//     icon: Gift,
//     color: 'text-torqone-success',
//     bg: 'bg-torqone-success-muted',
//     border: 'border-torqone-success/20',
//     title: 'Happy Members Rarely Become New Members',
//     body: "People finish great workouts, hit personal milestones, and recommend your gym in conversations—but most of those moments are never turned into reviews, referrals, guest visits, or new memberships. Valuable word-of-mouth quietly disappears because nobody captures it at the right time.",
//   },
//   {
//     icon: HeartHandshake,
//     color: 'text-torqone-accent',
//     bg: 'bg-torqone-accent-muted',
//     border: 'border-torqone-accent/20',
//     title: 'Every Member Expects a Personal Experience',
//     body: "Members don't compare your gym only with other gyms anymore. They compare it with every app and service they use every day. They expect personalized workout plans, nutrition guidance, visible progress, transformation tracking, timely motivation, reminders that actually matter, milestone celebrations, and a clear sense of what's next in their fitness journey. Members don't always complain—they simply lose momentum, engagement, and eventually the habit of coming back.",
//   },
//   {
//     icon: AlertTriangle,
//     color: 'text-torqone-error',
//     bg: 'bg-torqone-error-muted',
//     border: 'border-torqone-error/20',
//     title: 'Small Operational Mistakes Become Expensive',
//     body: "Businesses rarely struggle because of one major mistake. They struggle because of hundreds of small ones. A missed renewal. An unpaid invoice. A forgotten follow-up. An inactive member nobody checked on. A trial lead that went cold. A birthday or festival greeting that never reached a loyal member. A complaint left unresolved. Equipment servicing postponed. Inventory shortages. Trainer scheduling conflicts. Missed review opportunities. Payroll corrections. Expired waivers. Individually they're easy to ignore. Together they quietly cost you members, revenue, referrals, and countless hours every month.",
//   },
//   {
//     icon: Building2,
//     color: 'text-torqone-secondary',
//     bg: 'bg-torqone-secondary-muted',
//     border: 'border-torqone-secondary/20',
//     title: 'Growth Creates Complexity Faster Than Revenue',
//     body: "More members should make your business easier to grow—not harder to manage. But as your gym expands, spreadsheets multiply, WhatsApp chats explode, reporting becomes fragmented, and every new trainer, member, or branch adds another layer of complexity.",
//   },
//   {
//     icon: ShieldAlert,
//     color: 'text-torqone-warning',
//     bg: 'bg-torqone-warning-muted',
//     border: 'border-torqone-warning/20',
//     title: "You're Solving Problems After They've Already Happened",
//     body: "Most gym owners only discover issues after a member leaves, revenue drops, or attendance declines. By the time the problem becomes obvious, the opportunity to prevent it has already passed.",
//   },
//   {
//     icon: BarChart3,
//     color: 'text-torqone-primary',
//     bg: 'bg-torqone-primary-muted',
//     border: 'border-torqone-primary/20',
//     title: 'Your Business Keeps Generating Valuable Data—But Almost None of It Becomes Better Decisions',
//     body: "Every check-in, renewal, enquiry, payment, workout, referral, and member interaction tells a story. Without connecting those signals, you're left relying on instinct when your business is already generating the answers.",
//   },
// ];

/* ─── Part 2: The problems you don't see ──────────────────────────────────────── */
// const HIDDEN_PROBLEMS = [
//   {
//     icon: CalendarOff,
//     color: 'text-torqone-accent',
//     bg: 'bg-torqone-accent-muted',
//     border: 'border-torqone-accent/20',
//     title: "Your Gym Is Just a Room With Equipment",
//     body: "Members don't quit your gym — they quit their own fitness journey. No workout plan. No progress tracking. No nutrition guidance. No accountability system beyond showing up. Any room with equipment can replace you. The moment a member stops seeing progress, your membership becomes a monthly debit they resent.",
//   },
//   {
//     icon: EyeOff,
//     color: 'text-torqone-ai',
//     bg: 'bg-torqone-ai-muted',
//     border: 'border-torqone-ai/20',
//     title: "You're Making Decisions on Gut Feel",
//     body: "You don't know which class times actually fill. Which trainer retains best. Which campaign converted. Which members are profitable and which are quietly costing you. You can't predict revenue, you can't predict churn(Members Leaving), and you can't see which way the business is trending until the month is already over.",
//   },
//   {
//     icon: Building2,
//     color: 'text-torqone-success',
//     bg: 'bg-torqone-success-muted',
//     border: 'border-torqone-success/20',
//     title: 'Every New Branch Feels Like Another Job',
//     body: "You opened a second location to grow — but now you're running two gyms instead of one. Each branch is its own silo. You can't compare performance. You can't see combined P&L. You become the bottleneck for every decision. Growth starts to feel like punishment instead of progress.",
//   },
// ];

const OBVIOUS_PROBLEMS = [
    {
        icon: TrendingDown,
        color: "text-torqone-error",
        bg: "bg-torqone-error-muted",
        border: "border-torqone-error/20",
        title: "Members Don't Cancel — They Just Stop Coming",
        body: [
            "A member misses one workout. Then two. Then a week. You don't notice until the renewal lapses and the payment fails.",
            "By then they've already joined the gym down the street.",
            "You're losing members you never knew were slipping away.",
        ],
    },
    {
        icon: Users,
        color: "text-torqone-primary",
        bg: "bg-torqone-primary-muted",
        border: "border-torqone-primary/20",
        title: "Growth Has Become Unpredictable",
        body: [
            "Some months new members join naturally. Other months the phone barely rings or walk-ins slow down.",
            "Maybe you're running ads, maybe you're relying on referrals, or maybe you're simply hoping enquiries continue.",
            " Without a consistent system to capture, follow up, and convert every opportunity, growth becomes something you wait for instead of something you control.",
        ],
    },
    {
        icon: Wrench,
        color: "text-torqone-warning",
        bg: "bg-torqone-warning-muted",
        border: "border-torqone-warning/20",
        title: "Your Business Depends Too Much on You",
        body: [
            "Whether you run the gym alone or have a team, too many important tasks still depend on someone remembering to do them.",
            "Renewals, follow-ups, invoices, member support, attendance, celebrations, complaints, and countless routine tasks quietly consume hours every week.",
            "The problem isn't just the time they take—it's the opportunities you miss when they never happen.",
            "Every forgotten follow-up, missed birthday, unanswered enquiry, or silent absence is another chance for a member to disengage without anyone noticing.",
        ],
    },
    {
        icon: AlertTriangle,
        color: "text-torqone-error",
        bg: "bg-torqone-error-muted",
        border: "border-torqone-error/20",
        title: "Small Operational Mistakes Become Expensive",
        body: [
            "Businesses rarely struggle because of one major mistake. They struggle because of hundreds of small ones.",
            "A missed renewal. An unpaid invoice. A forgotten follow-up. An inactive member nobody checked on. A complaint left unresolved, Inventory shortages. Equipment servicing postponed, etc",
            "Individually they're easy to ignore. Together they quietly cost you members, revenue, referrals, and countless hours every month.",
        ],
    },
    {
        icon: PhoneCall,
        color: "text-torqone-accent",
        bg: "bg-torqone-accent-muted",
        border: "border-torqone-accent/20",
        title: "Every Day Starts With Interruptions",
        body: [
            "The phone rings while you're helping a member. A WhatsApp enquiry comes in. A trainer needs approval. Someone wants to renew. Another has a billing question. Equipment needs attention.",
            "Every interruption feels urgent, making it harder to focus on the work that actually grows your business.",
            "By the end of the day you've been busy from morning to night—but somehow the important work still hasn't moved forward.",
        ],
    },
    {
        icon: MessageSquareMore,
        color: "text-torqone-primary",
        bg: "bg-torqone-primary-muted",
        border: "border-torqone-primary/20",
        title: "You're Answering Questions Instead of Growing the Business",
        body: [
            '"What are your membership plans?" "What\'s the prie?" "Can I renew online?" "When does my membership expire?" "Did I miss today\'s workout?" "Can you send my invoice again?"',
            "The same conversations repeat every single day. The questions never stop.",
            "Individually they only take a minute. Together they quietly steal hours every week that could have been spent coaching members, improving the gym & memeber experience, acquiring new members, planning your gym's future or growing the business.",
        ],
    },
];

const HIDDEN_PROBLEMS = [
    {
        icon: CalendarOff,
        color: "text-torqone-accent",
        bg: "bg-torqone-accent-muted",
        border: "border-torqone-accent/20",
        title: "Your Gym Sells Access. Your Members Buy Results",
        body: [
            "Members don't quit your gym—they quit their fitness journey. Without guidance, accountability, visible progress, nutrition support, transformation tracking, reminders, motivation, and a clear path forward, momentum quietly fades.",
            "When members stop achieving results, your membership becomes another monthly expense instead of an investment in their future.",
        ],
    },
    {
        icon: HeartHandshake,
        color: "text-torqone-accent",
        bg: "bg-torqone-accent-muted",
        border: "border-torqone-accent/20",
        title: "Your Members Expect More Than a Membership",
        body: [
            "Members don't just compare your gym with other gyms anymore. They compare every interaction with the apps and services they use every day.",
            "Fast responses, timely reminders, personalized communication, milestone celebrations, and feeling remembered have quietly become the new standard.",
            "When those moments are missing, members don't usually complain—they simply feel less connected to your gym over time.",
        ],
    },
    {
        icon: Gift,
        color: "text-torqone-success",
        bg: "bg-torqone-success-muted",
        border: "border-torqone-success/20",
        title: "Happy Members Rarely Become New Members",
        body: [
            "People finish great workouts, hit personal milestones, and recommend your gym in conversations—but most of those moments are never turned into reviews, referrals, guest visits, or new memberships. ",
            "Valuable word-of-mouth quietly disappears because nobody captures it at the right time.",
        ],
    },
    {
        icon: ShieldAlert,
        color: "text-torqone-warning",
        bg: "bg-torqone-warning-muted",
        border: "border-torqone-warning/20",
        title: "You're Solving Problems After They've Already Happened",
        body: [
            "Most gym owners only discover issues after a member leaves, revenue drops, or attendance declines. By the time the problem becomes obvious, the opportunity to prevent it has already passed.",
        ],
    },
    {
        icon: BarChart3,
        color: "text-torqone-primary",
        bg: "bg-torqone-primary-muted",
        border: "border-torqone-primary/20",
        title: "Your Business Keeps Generating Valuable Data—But Almost None of It Becomes Better Decisions",
        body: [
            "Every check-in, renewal, enquiry, payment, workout, referral, and member interaction tells a story. Without connecting those signals, you're left relying on instinct when your business is already generating the answers.",
        ],
    },
    {
        icon: EyeOff,
        color: "text-torqone-ai",
        bg: "bg-torqone-ai-muted",
        border: "border-torqone-ai/20",
        title: "You're Making Decisions on Gut Feel",
        body: [
            "You don't know which class times actually fill. Which trainer retains best. Which campaign converted. Which members are profitable and which are quietly costing you.",
            "You can't predict revenue, you can't predict churn(members Leaving), and you can't see which way the business is trending until the month is already over.",
        ],
    },
    {
        icon: BrickWall,
        color: "text-torqone-secondary",
        bg: "bg-torqone-secondary-muted",
        border: "border-torqone-secondary/20",
        title: "Growth Creates Complexity Faster Than Revenue",
        body: [
            "More members should make your business easier to grow—not harder to manage.",
            "But as your gym expands, spreadsheets multiply, WhatsApp chats explode, reporting becomes fragmented, and every new trainer, member, or branch adds another layer of complexity.",
        ],
    },

    {
        icon: Building2,
        color: "text-torqone-success",
        bg: "bg-torqone-success-muted",
        border: "border-torqone-success/20",
        title: "Every New Branch Feels Like Another Job",
        body: [
            "You opened a second location to grow — but now you're running two gyms instead of one. Each branch is its own silo. You can't compare performance. You can't see combined P&L.",
            "You become the bottleneck for every decision. Growth starts to feel like punishment instead of progress.",
        ],
    },
];


export function IndustryProblems() {
    return (
        <>
            {/* ─── Part 1 ─────────────────────────────────────────────────────────── */}
            <section className="relative py-28 overflow-hidden" id="problems">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <SectionHeading
                            eyebrow="The Problems You Feel"
                            title={
                                <>
                                    You know something's wrong.
                                    <br />
                                    <GradientText>You just can't fix it alone.</GradientText>
                                </>
                            }
                            subtitle="These aren't rare problems—they're the everyday challenges quietly slowing your gym down. Leads disappear, members stop showing up, and hours vanish into admin work. Over time, it becomes so routine that it simply feels like part of running a gym."
                            className="mb-16"
                        />
                    </ScrollReveal>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {OBVIOUS_PROBLEMS.map((p) => (
                            <StaggerItem key={p.title}>
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                    className={`relative h-full rounded-2xl border ${p.border} bg-torqone-card/70 p-6 group cursor-default`}
                                >
                                    <div
                                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${p.bg} border ${p.border} mb-4`}
                                    >
                                        <p.icon className={`w-5 h-5 ${p.color}`} />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">
                                        {p.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {p.body.map((statement) => (
                                            <li
                                                key={statement}
                                                className="text-sm text-torqone-text-secondary leading-relaxed"
                                            >
                                                {statement}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ─── Part 2 ─────────────────────────────────────────────────────────── */}
            <section className="relative py-28 overflow-hidden bg-torqone-card/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <SectionHeading
                            eyebrow="The Problems You Don't See"
                            title={
                                <>
                                    But there's more.
                                    <br />
                                    <GradientText>
                                        The problems you've accepted as normal.
                                    </GradientText>
                                </>
                            }
                            subtitle="These are the blind spots that quietly drain your revenue, limit your growth, and keep you trapped in daily operations. You've never had the tools to see them — so you assumed they were just part of running a gym."
                            className="mb-16"
                        />
                    </ScrollReveal>

                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {HIDDEN_PROBLEMS.map((p) => (
                            <StaggerItem key={p.title}>
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                                    className={`relative h-full rounded-2xl border ${p.border} bg-torqone-card/70 p-6 group cursor-default`}
                                >
                                    <div
                                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${p.bg} border ${p.border} mb-4`}
                                    >
                                        <p.icon className={`w-5 h-5 ${p.color}`} />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">
                                        {p.title}
                                    </h3>
                                    <ul className="space-y-2">
                                        {p.body.map((statement, index) => (
                                            <li
                                                key={index}
                                                className="text-sm text-torqone-text-secondary leading-relaxed"
                                            >
                                                {statement}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
}
