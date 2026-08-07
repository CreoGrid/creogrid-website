'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Boxes } from 'lucide-react';
import { ScrollReveal } from './primitives/motion';

const CRUMBS = [
  { label: 'Products', href: '#', muted: true },
  { label: 'Gym', href: '#', muted: false },
];

export function BreadcrumbBar() {
  return (
    <div className="relative z-30 mt-16 border-b border-torqone-border/40 bg-torqone-background/80 backdrop-blur-md">
      {/* subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-torqone-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 py-2.5"
          >
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              {/* <span className="flex h-5 w-5 items-center justify-center rounded bg-torqone-primary-muted border border-torqone-primary/20">
                <Boxes className="w-3 h-3 text-torqone-primary" />
              </span> */}
            </motion.div>

            <ol className="flex items-center gap-1.5 text-[13px]">
              {CRUMBS.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <ChevronRight className="w-3 h-3 text-torqone-text-muted/60" />
                  )}
                  <motion.a
                    href={crumb.href}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                    className={
                      crumb.muted
                        ? 'font-medium text-torqone-text-muted hover:text-torqone-text-secondary transition-colors duration-200'
                        : 'font-semibold text-torqone-text-secondary hover:text-white transition-colors duration-200'
                    }
                  >
                    {crumb.label}
                  </motion.a>
                </li>
              ))}
            </ol>

            {/* right-side status chip */}
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="ml-auto hidden sm:flex items-center gap-2 text-[11px] text-torqone-text-muted"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-torqone-success/60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-torqone-success" />
              </span>
              <span className="tracking-wide">TorqOne · Active Product</span>
            </motion.div>
          </nav>
        </ScrollReveal>
      </div>
    </div>
  );
}
