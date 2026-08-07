'use client';

import { cn } from '@/lib/utils';

/* ──────────────────────────────────────────────────────────────────────────
   LOGO PLACEHOLDERS

   These are intentionally empty containers. Replace the inner content of each
   component with the real logo asset (SVG / PNG / <Image />) when available.

   To swap in the real logos later:
     - CreoGridLogo: replace the inner block with an <img> or Next <Image>.
     - TorqOneLogo:  replace the inner block with an <img> or Next <Image>.

   The surrounding wrapper keeps sizing, spacing, and responsive behavior
   consistent so the real logos drop in without touching layout.
   ────────────────────────────────────────────────────────────────────────── */

interface LogoProps {
  className?: string;
}

/* CreoGrid — parent brand. Small, understated, neutral. */
export function CreoGridLogo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/5',
        className
      )}
      aria-label="CreoGrid logo"
    >
      {/* REPLACE: CreoGrid logo asset goes here */}
      <span className="text-[9px] font-bold tracking-tight text-torqone-text-muted">
        CG
      </span>
    </div>
  );
}

/* TorqOne — primary product brand. Larger, prominent, gradient accent. */
export function TorqOneLogo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        'flex h-9 w-9 items-center justify-center rounded-lg bg-torqone-gradient shadow-torqone-primary',
        className
      )}
      aria-label="TorqOne logo"
    >
      {/* REPLACE: TorqOne logo asset goes here */}
      <span className="text-xs font-extrabold tracking-tight text-white">T1</span>
    </div>
  );
}
