"use client";

import { useActionState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  submitContact,
  type ContactFormState,
} from "@/actions/contact.action";

import {
  fadeInUp,
  staggerParent,
  viewportOnce,
} from "@/lib/motion";

import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";
const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function Contact() {
  const anchor = useConnectionAnchor({
    kind: "spine",
    section: "contact",
  });

  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={anchor} className="container-page">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16"
      >
        {/* LEFT SIDE */}
        <div>
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Contact
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-[2.5rem]"
          >
            Let's Build Something Smarter Together.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Tell us about your business and where things feel chaotic.
            We'll respond within one business day with a clear next step.
          </motion.p>

          <motion.ul
            variants={staggerParent}
            className="mt-10 space-y-5"
          >
            {[
              {
                Icon: Mail,
                label: "Email",
                value: "hello@creogrid.co.in",
                href: "mailto:hello@creogrid.co.in",
              },
              {
                Icon: Phone,
                label: "Phone",
                value: "(+91) 9074688913",
                href: "tel:+919074688913",
              },
              {
                Icon: MapPin,
                label: "Location",
                value: "Global · Remote-first",
              },
            ].map(({ Icon, label, value, href }) => (
              <motion.li
                key={label}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-primary">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      className="mt-0.5 block text-base font-medium text-foreground hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-base font-medium text-foreground">
                      {value}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* FORM */}
        <motion.form
          variants={fadeInUp}
          action={formAction}
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-9"
        >
          <div className="space-y-5">
            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
              >
                <Input
                  name="name"
                  placeholder="Abhijit Kumar"
                  autoComplete="name"
                  required
                />
              </Field>

              <Field
                label="Email"
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </Field>
            </div>

            {/* Company */}
            <Field
              label="Company"
              optional
            >
              <Input
                name="company"
                placeholder="Company name"
                autoComplete="organization"
              />
            </Field>

            {/* Message */}
            <Field
              label="How can we help?"
            >
              <Textarea
                name="body"
                rows={5}
                placeholder="Tell us about your business and what you'd like to build."
                required
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="w-full rounded-full sm:w-auto sm:px-8"
            >
              {isPending ? "Sending…" : "Send message"}

              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </motion.form>
      </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  error,
  optional,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label>
        {label}

        {optional && (
          <span className="ml-1 text-xs text-muted-foreground">
            Optional
          </span>
        )}
      </Label>

      {children}

      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}