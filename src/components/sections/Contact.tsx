"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeInUp, staggerParent, viewportOnce } from "@/lib/motion";
import { submitContact } from "@/lib/contact.functions";
import { useConnectionAnchor } from "@/components/motion/useConnectionAnchor";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more detail")
    .max(4000),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const anchor = useConnectionAnchor<HTMLDivElement>({ kind: "spine", section: "contact" });
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await submitContact(values);
      toast.success("Message received. We'll be in touch shortly.");
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

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
              Tell us about your business and where things feel chaotic. We'll
              respond within one business day with a clear next step.
            </motion.p>

            <motion.ul variants={staggerParent} className="mt-10 space-y-5">
              {[
                { Icon: Mail, label: "Email", value: "hello@creogrid.co.in", href: "mailto:hello@creogrid.co.in" },
                { Icon: Phone, label: "Phone", value: "(+91) 9074688913", href: "tel:+919074688913" },
                { Icon: MapPin, label: "Location", value: "Global · Remote-first" },
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

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-9"
            noValidate
          >
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ArrowRight className="h-5 w-5 -rotate-45" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  Thank you.
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  We received your message and will get back to you within one
                  business day.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <Input placeholder="Abhijit Kumar" autoComplete="name" {...register("name")} />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <Input type="email" placeholder="you@company.com" autoComplete="email" {...register("email")} />
                  </Field>
                </div>
                <Field label="Company" error={errors.company?.message} optional>
                  <Input placeholder="Company name" autoComplete="organization" {...register("company")} />
                </Field>
                <Field label="How can we help?" error={errors.message?.message}>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your business and what you'd like to build."
                    {...register("message")}
                  />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full rounded-full sm:w-auto sm:px-8"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
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
    <div>
      <Label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">Optional</span>
        )}
      </Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
