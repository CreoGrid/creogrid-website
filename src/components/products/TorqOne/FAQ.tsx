'use client';

import { SectionHeading, GradientText } from './primitives/ui';
import { ScrollReveal } from './primitives/motion';
import { Accordion } from './primitives/Accordion';

const FAQ_ITEMS = [
  {
    id: '1',
    question: 'How long does it take to get TorqOne running?',
    answer:
      'Most single-location gyms can get started quickly once we have the required business and member information. During onboarding, we configure your gym, set up your core modules, connect the required communication channels, import your existing data where applicable, and help your staff get familiar with the system. The exact timeline depends on the size and complexity of your gym.',
  },

  {
    id: '2',
    question: 'Can you migrate my existing gym data?',
    answer:
      'Yes. We can help migrate existing member records, membership plans, active subscriptions, payment history, attendance history, trainer data, and branch information from spreadsheets, CSV files, or supported existing systems. Migration requirements and complexity are assessed during onboarding. Data migration is included in Growth and above, while Launch can use it as an optional add-on.',
  },

  {
    id: '3',
    question: 'Do I need technical knowledge to use TorqOne?',
    answer:
      'No. TorqOne is designed for gym owners and staff, not technical teams. Owners get a simple business dashboard, trainers get their own workspace, and members use the mobile experience. We also help configure the system during onboarding so you do not have to figure everything out yourself.',
  },

  {
    id: '4',
    question: 'What can TorqOne automate for my gym?',
    answer:
      'TorqOne can automate recurring member and business workflows such as renewal reminders, payment reminders, inactivity recovery, trial follow-ups, workout reminders, birthday campaigns, referral campaigns, personalized WhatsApp notifications and more. Explore all those features in "Automation Engine" section of this page. Higher plans add more advanced AI-driven personalization, timing, optimization, and multi-channel workflows.',
  },

  {
    id: '5',
    question: 'How does TorqOne use AI?',
    answer:
      'AI is used where it can make the gym more proactive rather than simply adding a chatbot. Depending on your plan, TorqOne can score leads, identify members showing signs of disengagement, generate marketing campaigns, create nutrition plans, provide personalized motivation, forecast revenue, recommend actions, generate weekly business insights and more. Explore all those features in "AI Engine" section of this page. AI capabilities increase progressively from Launch to Enterprise.',
  },

  {
    id: '6',
    question: 'How does AI know when a member may stop visiting?',
    answer:
      'TorqOne looks for changes in behavior such as attendance frequency, inactivity patterns, engagement, membership status, and other available signals. Instead of relying on a single rule for every member, the system can identify meaningful changes and use them to trigger retention actions. Advanced predictive capabilities become available on higher plans.',
  },

  {
    id: '7',
    question: 'Can TorqOne handle leads from Facebook and Instagram?',
    answer:
      'Yes, the Growth plan introduces the lead-to-member pipeline. Leads can move through capture, AI scoring, follow-up, trial booking, visit reminders, conversion tracking, retention, and referral workflows. The goal is to help you understand not only how many leads you received, but how many actually became paying members.',
  },

  {
    id: '8',
    question: 'Can I automate WhatsApp communication?',
    answer:
      'Yes. WhatsApp automation is available from Launch onward, subject to the included monthly notification allowance and applicable WhatsApp/provider charges. You can automate messages such as renewal reminders, payment alerts, birthday wishes, inactivity recovery, trial reminders, referral campaigns, other member communications and more. Higher plans provide larger communication limits and more advanced personalization.',
  },

  {
    id: '9',
    question: 'Do my trainers get their own app?',
    answer:
      'Yes. The Growth plan introduces the dedicated Trainer Mobile App with features such as the daily trainer queue, member progress tracking, workout management, member nutrition tracking, reviews and approvals, notifications, booking support and more. Higher plans expand the trainer and business capabilities available to your team.',
  },

  {
    id: '10',
    question: 'Can I manage multiple gym branches with TorqOne?',
    answer:
      'Yes. Multi-branch management is available from the Scale plan. You can manage branches, members, operations, inventory, finances, permissions, and performance from a unified platform. Enterprise expands this with unlimited branches, dedicated infrastructure, advanced integrations, and enterprise-level capabilities.',
  },

  {
    id: '11',
    question: 'What happens if I start with Launch and later need more?',
    answer:
      'You can upgrade as your gym grows. Your existing data and configuration can continue with you as you move to Growth, Scale, or Enterprise. This lets a single-location gym start with the essentials and add AI, marketing, advanced business intelligence, POS, multi-branch management, and enterprise capabilities when they actually become useful.',
  },

  {
    id: '12',
    question: 'How much AI usage is included in each plan?',
    answer:
      'Each plan includes a defined monthly AI allowance. Launch includes 100 Owner AI Operations and 20 AI Conversations per active member per month. Growth includes 250 Owner AI Operations and 30 member AI Conversations. Scale includes 600 Owner AI Operations and 40 member AI Conversations. Enterprise provides customized AI resources based on the requirements and usage of the business.',
  },

  {
    id: '13',
    question: 'Is there a free trial?',
    answer:
      'Yes. TorqOne offers a 14-day free trial so you can explore the platform before committing. The exact features and usage available during the trial may vary depending on the plan and configuration. We can also help you understand which plan is appropriate for your gym before you subscribe.',
  },

  {
    id: '14',
    question: 'What does the one-time onboarding and implementation fee cover?',
    answer:
      'The one-time onboarding fee covers platform configuration, initial setup, staff setup, data migration where included, and required integrations. The goal is to get your gym configured correctly rather than simply giving you access to the software and leaving you to set everything up yourself.',
  },

  {
    id: '15',
    question: 'Can I use TorqOne if I already have gym management software?',
    answer:
      'Yes. You do not necessarily have to replace everything at once. We can assess your existing system and data, identify what needs to be migrated, and determine the best way to move to TorqOne. For gyms coming from spreadsheets or older software, the onboarding process can be especially useful for cleaning and organizing existing data.',
  },

  {
    id: '16',
    question: 'Is my gym and member data secure?',
    answer:
      'TorqOne is designed with security, access control, backups, and reliable cloud infrastructure in mind. Access to business information can be controlled based on roles and permissions, while higher plans provide stronger infrastructure and enterprise capabilities. Specific security, backup, infrastructure, and compliance requirements can be discussed during Enterprise onboarding.',
  },
];

export function FAQ() {
  return (
    <section className="relative py-28 overflow-hidden bg-torqone-card/20" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions?<br /><GradientText>We have answers.</GradientText></>}
            subtitle="Everything you need to know about TorqOne. Can't find what you're looking for? Our team is one message away."
            className="mb-14"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion items={FAQ_ITEMS} />
        </ScrollReveal>
      </div>
    </section>
  );
}
