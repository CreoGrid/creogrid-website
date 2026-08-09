'use client';

import { useEffect, useState, useActionState, startTransition } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Phone, Mail, User, MessageSquare, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Button } from './primitives/Button'
import { useCTA } from './CTAContext';
import { cn } from '@/lib/utils';

import { toast } from "sonner";

import {
  submitLead,
  type LeadFormState,   
} from "@/actions/lead.action";

const SALES_PHONE = '+919074688913';
const SALES_PHONE_DISPLAY = '+91 9074688913';

/* ─── Shared compact field ──────────────────────────────────────────────────── */
interface SFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  icon?: React.ReactNode;
  multiline?: boolean;
  error?: string;
}

const SField = ({ label, icon, error, multiline, className, id, ...props }: SFieldProps) => {
  const base = cn(
    'w-full rounded-xl border bg-[rgba(7,16,24,0.6)] text-sm text-white',
    'placeholder:text-torqone-text-muted outline-none transition-all duration-200',
    'focus:border-torqone-primary focus:ring-2 focus:ring-torqone-primary/20',
    error ? 'border-torqone-error' : 'border-torqone-border',
    icon ? 'pl-10 pr-4' : 'px-4',
  );

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-torqone-text-secondary tracking-wide">
        {label}
      </label>
      <div className="relative flex">
        {icon && (
          <span className="absolute left-3.5 top-[50%] -translate-y-1/2 text-torqone-text-muted">
            {icon}
          </span>
        )}
        {multiline ? (
          <textarea
            id={id}
            rows={3}
            className={cn(base, 'py-3 resize-none', className)}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            className={cn(base, 'h-10', className)}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
      </div>
      {error && <p className="text-xs text-torqone-error">{error}</p>}
    </div>
  );
};

/* ─── Sales Modal ───────────────────────────────────────────────────────────── */
export function SalesModal() {
  const { activeModal, close } = useCTA();
  const isOpen = activeModal === 'sales';

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', company: '', source: 'contact', product: 'torqone' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

        const initialState: LeadFormState = {
        success: false,
        message: "",
      };
    
      const [state, formAction, isPending] = useActionState(
        submitLead,
        initialState,
      );
  

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '', company: '', source: 'contact', product: 'torqone' });
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [isOpen, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

      useEffect(() => {
      if (!state.message) return;

      if (state.success) {
        toast.success(state.message);
        setSubmitted(true);

        setForm({ name: '', email: '', phone: '', message: '', company: '', source: 'contact', product: 'torqone' });
      } else {
        toast.error(state.message);
      }
    }, [state]);

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
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [key]: e.target.value }));
      if (errors[key]) setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
        startTransition(() => {
        formAction({...form, company: undefined, source: "demo", product: "torqone"});
      });
  }

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="sales-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-[6px]"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="sales-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Speak to Our Team"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'fixed z-[91] inset-x-4 top-1/2 -translate-y-1/2 torqone-page',
              'sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[440px]',
              'rounded-2xl overflow-hidden',
              'border border-torqone-border',
              'shadow-[0_0_60px_rgba(123,92,255,0.2),0_0_0_1px_rgba(30,45,64,0.8)]',
            )}
            style={{ background: 'rgba(7,16,24,0.93)', backdropFilter: 'blur(24px)' }}
          >
            {/* Glow strip */}
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #7B5CFF, #00D4FF, transparent)' }}
            />

            {submitted ? (
              /* Success */
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center py-10 px-6 gap-5"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl bg-torqone-ai/30 scale-150" />
                  <div className="relative w-14 h-14 rounded-full bg-torqone-gradient-ai flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">Message Sent!</h3>
                  <p className="text-sm text-torqone-text-secondary max-w-xs">
                    Our sales team will be in touch very soon. Or call us right now:
                  </p>
                </div>
                <a
                  href={`tel:${SALES_PHONE}`}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-torqone-primary/10 border border-torqone-primary/30 hover:border-torqone-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-torqone-primary" />
                  <span className="text-sm font-semibold text-white">{SALES_PHONE_DISPLAY}</span>
                </a>
                <Button variant="outline" size="md" onClick={close} className="w-full">
                  Close
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-start justify-between px-6 pt-6 pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-white">Speak to Our Team</h2>
                    <p className="text-sm text-torqone-text-secondary mt-0.5">
                      We'll get back to you within a few hours.
                    </p>
                  </div>
                  <button
                    onClick={close}
                    aria-label="Close"
                    className="p-1.5 rounded-lg text-torqone-text-muted hover:text-white hover:bg-white/5 transition-colors shrink-0 -mt-0.5 cursor-pointer"
                  >
                    <X className="w-[18px] h-[18px]" />
                  </button>
                </div>

                {/* Call CTA — prominently visible */}
                <div className="mx-6 mb-4">
                  <a
                    href={`tel:${SALES_PHONE}`}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-xl',
                      'bg-torqone-primary/10 border border-torqone-primary/30',
                      'hover:border-torqone-primary hover:bg-torqone-primary/20',
                      'transition-all duration-200 group',
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-torqone-gradient flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] text-torqone-text-muted">Prefer to call?</p>
                      <p className="text-sm font-bold text-white">{SALES_PHONE_DISPLAY}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-torqone-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="mx-6 mb-4 flex items-center gap-3">
                  <div className="flex-1 h-px bg-torqone-border/60" />
                  <span className="text-xs text-torqone-text-muted">or send a message</span>
                  <div className="flex-1 h-px bg-torqone-border/60" />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate className="px-6 pb-6 space-y-3">
                  <SField
                    id="sales-name"
                    label="Name *"
                    icon={<User className="w-4 h-4" />}
                    placeholder="Rahul Kumar"
                    value={form.name}
                    onChange={handleChange('name')}
                    error={errors.name}
                    autoFocus
                  />
                  <SField
                    id="sales-email"
                    label="Email *"
                    icon={<Mail className="w-4 h-4" />}
                    type="email"
                    placeholder="you@yourgym.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                  />
                  <SField
                    id="sales-phone"
                    label="Phone"
                    icon={<Phone className="w-4 h-4" />}
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    error={errors.phone}
                  />
                  <SField
                    id="sales-message"
                    label="Message (Optional)"
                    icon={<MessageSquare className="w-4 h-4" />}
                    multiline
                    placeholder="Tell us a bit about your gym and what you're looking for…"
                    value={form.message}
                    onChange={handleChange('message')}
                  />

                  <Button
                    type="submit"
                    variant="gradient"
                    size="md"
                    loading={isPending}
                    iconPosition="right"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full mt-1"
                  >
                    Send Message
                  </Button>
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
