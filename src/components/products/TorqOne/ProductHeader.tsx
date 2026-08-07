'use client';

import { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from "../../site/Logo";
import { Button } from './primitives/Button';
import { CreoGridLogo, TorqOneLogo } from './LogoPlaceholders';

const NAV_LINKS = [
  { label: 'Gym Challenges',          href: '#problems' },
  { label: 'Platform & Features', href: '#platform' },
  { label: 'AI Engine',         href: '#ai-engine' },
  { label: 'Automation Engine', href: '#automation' },
  { label: 'Why TorqOne',       href: '#metrics' },
  { label: 'Plans & Pricing',   href: '#pricing' },
  { label: 'FAQ',               href: '#faq' },
];

function smoothScroll(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const top = (el as HTMLElement).offsetTop - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function ProductHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    smoothScroll(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-0 z-50 h-18 transition-all duration-300',
          scrolled
            ? 'glass border-b border-torqone-border/60 shadow-[0_4px_24px_rgba(0,0,0,0.3)] bg-white/85 backdrop-blur-md'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Made it relative just for breadcrumb which think about later or use BreadcrumbBar component*/}
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: CreoGrid parent context */}
            <div className="flex items-center gap-2.5 shrink-0">
              <i className="mr-[10px] p-[8px] border border-2 border-torqone-border rounded-[6px] group hover:border-torqone-primary-hover transition-colors duration-150 cursor-pointer" onClick={() => handleNav('#top')}>
                <Home className="w-5 h-5 text-torqone-primary 
                    group-hover:text-torqone-primary-hover transition-colors duration-100 cursor-pointer" 
                    onClick={() => router.push('/')}
                />   
              </i>
              <div className="hidden sm:flex flex-col leading-tight">
                {/* <span className="text-[1rem] font-semibold tracking-wide text-torqone-text-secondary">
                  <Home className="w-4 h-4 inline-block mr-1 mb-[2px] text-torqone-text-secondary" />
                </span> */}
                <a aria-label="CreoGrid home" className="flex items-center relative" onClick={() => router.push('/')}>
                          <Logo variant='mono-white' className="h-8 w-auto lg:h-9" />
                          <p className="absolute top-[35px] left-[40px] text-[11px] text-[#87888a] whitespace-nowrap">
                            Tailored Intelligent Systems.
                          </p>
                        </a>
                {/* <span className="absolute top-22 left-8 text-[10px] text-torqone-text-muted cursor-default">
                  Products / Gym / torqone
                </span> */}
              </div>
            </div>

            {/* Center: TorqOne product brand */}
            {/* <div className="flex items-center gap-2.5 shrink-0">
              <TorqOneLogo />
              <span className="text-base font-bold tracking-tight text-white">
                Torq<span className="text-gradient">One</span>
              </span>
            </div> */}

            {/* Right: desktop nav + CTA */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-3 py-2 text-[13px] font-medium text-torqone-text-secondary hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button
                variant="gradient"
                size="sm"
                iconPosition="right"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                onClick={() => handleNav('#pricing')}
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile / tablet hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden p-2 rounded-lg text-torqone-text-secondary hover:text-white hover:bg-white/5 transition-colors shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile / tablet drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed inset-y-0 right-0 z-50 w-80 glass border-l border-torqone-border flex flex-col"
            >
              <div className="flex items-center justify-between px-6 !h-20 border-b border-torqone-border/50">
                {/* <div className="flex items-center gap-2.5">
                  <TorqOneLogo className="h-7 w-7" />
                  <span className="font-bold text-white">TorqOne</span>
                </div> */}
                <a href="#top" aria-label="CreoGrid home" className="flex items-center relative">
          <Logo variant='mono-white' className="h-7 w-auto" />
          <p className="absolute top-[24px] left-[30px] text-[10px] text-foreground/75 whitespace-nowrap">
            Tailored Intelligent Systems.
          </p>
        </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-torqone-text-muted hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-2 border-b border-torqone-border/50 flex items-center gap-2">
                <span className="text-[11px] text-torqone-text-muted">
                  CreoGrid / Products / Gym
                </span>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-torqone-text-secondary hover:text-white hover:bg-white/5 transition-colors group"
                  >
                    <span className="font-medium text-sm">{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </nav>

              <div className="p-6 border-t border-torqone-border/50 space-y-3">
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  onClick={() => handleNav('#pricing')}
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
