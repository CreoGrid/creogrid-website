'use client';

import { motion } from 'framer-motion';

const LOGOS = [
  'IronCore Fitness', 'Peak Performance', 'EliteGym Group', 'FitNation',
  'Muscle Republic', 'TrainSmart Studios', 'ProFit Centers', 'AthletiX',
];

export function TrustBar() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="relative border-y border-torqone-border/40 py-12 overflow-hidden bg-torqone-card/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-torqone-text-muted">
          Trusted by gym operators across the country
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #071018, transparent)' }} />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #071018, transparent)' }} />

        <div className="flex animate-marquee gap-10 w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-2 shrink-0 h-12 rounded-lg border border-torqone-border/40 bg-torqone-card/30"
            >
              <span className="text-sm font-semibold text-torqone-text-muted whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
