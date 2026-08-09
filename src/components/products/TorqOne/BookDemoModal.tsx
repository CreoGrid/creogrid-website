'use client';

import Image from "next/image";
import { forwardRef, useEffect, useRef, useState, useActionState, startTransition } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ArrowRight, CheckCircle2, Sparkles, User, Mail, Building2, Phone,
} from 'lucide-react';
import { Button } from './primitives/Button';
import { useCTA } from './CTAContext';
import { cn } from '@/lib/utils';

import { toast } from "sonner";

import {
  submitLead,
  type LeadFormState,   
} from "@/actions/lead.action";

/* ─── Shared Input ──────────────────────────────────────────────────────────── */

interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label: string;
  icon?: React.ReactNode;
  prefix?: React.ReactNode;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  function Field({ label, icon, prefix, error, className, id, ...props }, ref) {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-xs font-semibold text-torqone-text-secondary tracking-wide">
          {label}
        </label>
        <div className="relative flex items-center">
          {prefix && (
            <span className="absolute left-3.5 text-xs font-semibold text-torqone-text-secondary select-none">
              {prefix}
            </span>
          )}
          {icon && !prefix && (
            <span className="absolute left-3.5 text-torqone-text-muted">{icon}</span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              'w-full h-11 rounded-xl border bg-[rgba(7,16,24,0.6)] text-sm text-white',
              'placeholder:text-torqone-text-muted outline-none transition-all duration-200',
              'focus:border-torqone-primary focus:ring-2 focus:ring-torqone-primary/20',
              error ? 'border-torqone-error' : 'border-torqone-border',
              prefix ? 'pl-10 pr-4' : icon ? 'pl-10 pr-4' : 'px-4',
              className,
            )}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-torqone-error">{error}</p>}
      </div>
    );
  }
);

/* ─── Success State ─────────────────────────────────────────────────────────── */
function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center py-8 px-6 gap-5"
    >
      {/* Icon with glow */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-2xl bg-torqone-primary/30 scale-150" />
        <div className="relative w-16 h-16 rounded-full bg-torqone-gradient flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2">Demo Requested!</h3>
        <p className="text-sm text-torqone-text-secondary max-w-xs">
          Our team will reach out within 24 hours to schedule your personalised TorqOne demo.
        </p>
      </div>

      <div className="w-full rounded-xl border border-torqone-border bg-[rgba(58,93,226,0.08)] px-5 py-4 text-left space-y-2">
        {[
          'Personalised walkthrough of TorqOne',
          'Live Q&A with a product specialist',
          'Custom plan recommendation for your gym',
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-torqone-success shrink-0" />
            <span className="text-xs text-torqone-text-secondary">{item}</span>
          </div>
        ))}
      </div>

      <Button variant="outline" size="md" onClick={onClose} className="w-full">
        Close
      </Button>
    </motion.div>
  );
}

/* ─── Book Demo Modal ───────────────────────────────────────────────────────── */
export function BookDemoModal() {
  const { activeModal, close } = useCTA();
  const isOpen = activeModal === 'demo';

  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', source: 'demo', product: 'torqone' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState(false);

      const initialState: LeadFormState = {
      success: false,
      message: "",
    };
  
    const [state, formAction, isPending] = useActionState(
      submitLead,
      initialState,
    );

  /* Focus first input on open */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstFieldRef.current?.focus(), 80);
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', phone: '', source: 'demo', product: 'torqone' });
      setErrors({});
    }
  }, [isOpen]);

    useEffect(() => {
      if (!state.message) return;

      if (state.success) {
        toast.success(state.message);
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          source: "demo",
          product: "torqone",
        });
      } else {
        toast.error(state.message);
      }
    }, [state]);

  /* Escape key */
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isOpen, close]);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

function validate() {
  const errs: Record<string, string> = {};

  if (!form.name.trim()) {
    errs.name = "Name is required";
  } else if (form.name.length > 100) {
    errs.name = "Name is too long";
  }

  if (!form.email.trim()) {
    errs.email = "Work email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errs.email = "Enter a valid email";
  }

  if (!form.phone.trim()) {
    errs.phone = "Phone number is required";
  } else if (!/^(?:\+91)?\d{10}$/.test(form.phone.replace(/\s+/g, ""))) {
    errs.phone = "Enter a valid phone number";
  }

  return errs;
}

  function handleChange(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
      if (errors[key]) setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    startTransition(() => {
    formAction({...form, source: "demo", product: "torqone"});
  });
  }

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[6px] "
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Book a Demo"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed z-[91] inset-x-4 top-1/2 -translate-y-1/2 torqone-page",
              "sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[480px]",
              "rounded-2xl overflow-hidden",
              "border border-torqone-border",
              "shadow-[0_0_60px_rgba(58,93,226,0.25),0_0_0_1px_rgba(30,45,64,0.8)]",
            )}
            style={{ background: "rgba(7,16,24,0.92)", backdropFilter: "blur(24px)" }}
          >
            {/* Glow strip at top */}
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #3A5DE2, #7B5CFF, #00D4FF, transparent)",
              }}
            />
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl"
              style={{
                background: "radial-gradient(ellipse, rgba(123,92,255,0.25) 0%, transparent 70%)",
              }}
            />

            {submitted ? (
              <SuccessState onClose={close} />
            ) : (
              <>
                {/* Header */}
                <div className="relative flex items-start justify-between px-6 pt-6 pb-4">
                  <div className="relative">
                    {/* <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-torqone-gradient flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-torqone-primary tracking-wide uppercase">
                        TorqOne
                      </span>
                    </div> */}
                    <Image
                      src="/TorqOneLogo_Final2.png"
                      alt="TorqOne"
                      width={500}
                      height={147}
                      priority
                      className="mx-auto mb-8 h-auto w-[100px] sm:w-[100px] lg:w-[150px]"
                    />
                    <p className="absolute top-[39px] left-38 mb-[7px] text-[9px] text-torqone-text-muted">
                      · A CreoGrid product
                    </p>

                    <h2 className="text-lg font-bold text-white leading-tight">Book a Demo</h2>
                    <p className="text-sm text-torqone-text-secondary mt-1 leading-relaxed whitespace-nowrap">
                      See how TorqOne can fit your gym's operations and growth.
                    </p>
                  </div>
                  <button
                    onClick={close}
                    aria-label="Close"
                    className="mt-[4px] p-1.5 rounded-lg text-torqone-text-muted hover:text-white hover:bg-white/5 transition-colors shrink-0 -mt-0.5 cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                  </button>
                </div>

                <div className="w-full h-px bg-torqone-border/60" />

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="px-6 py-5 space-y-4">
                  <Field
                    id="demo-name"
                    ref={firstFieldRef}
                    label="Name *"
                    icon={<User className="w-4 h-4" />}
                    placeholder="Rahul Kumar"
                    value={form.name}
                    onChange={handleChange("name")}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    id="demo-email"
                    label="Work Email *"
                    icon={<Mail className="w-4 h-4" />}
                    type="email"
                    placeholder="rahul@yourgym.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <Field
                    id="demo-company"
                    label="Gym / Company *"
                    icon={<Building2 className="w-4 h-4" />}
                    placeholder="Iron Republic Fitness"
                    value={form.company}
                    onChange={handleChange("company")}
                    error={errors.company}
                    autoComplete="organization"
                  />
                  <Field
                    id="demo-phone"
                    label="Phone"
                    prefix="+91"
                    type="tel"
                    placeholder="98765 43210"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    error={errors.phone}
                    autoComplete="tel"
                  />

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    loading={isPending}
                    iconPosition="right"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full mt-2"
                  >
                    Request a Demo
                  </Button>

                  <p className="text-[11px] text-torqone-text-muted text-center">
                    No credit card required · Setup in 48 hrs · WhatsApp automations from day one
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
