import { Logo } from "./Logo";
import { Linkedin, Twitter, Github } from "lucide-react";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--surface)]">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="relative flex items-center gap-2">
              <Logo className="h-9 w-auto" />
              <p className="absolute top-[35px] left-[45px] text-[11px] text-foreground/75 whitespace-nowrap">
                Tailored Intelligent Systems.
              </p>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              CreoGrid engineers tailored intelligent systems that organize operations, connect
              teams, and help businesses scale with confidence.
            </p>
          </div>

          <FooterColumn
            title="Company"
            links={[
              { href: "/#about", label: "About" },
              { href: "/#process", label: "Process" },
              { href: "/#industries", label: "Industries" },
            ]}
          />
          <FooterColumn
            title="Platform"
            links={[
              { href: "/#solutions", label: "Solutions" },
              { href: "/#technology", label: "Technology" },
              { href: "/#contact", label: "Contact" },
            ]}
          />
          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@creogrid.co.in" className="hover:text-primary">
                  hello@creogrid.co.in
                </a>
              </li>
              <li>Global · Remote-first</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {YEAR} CreoGrid. All rights reserved.</p>
          <p>Tailored Intelligent Systems. Stronger Business. Faster Growth.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-primary">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
  target,
  rel,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={target}
      rel={rel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
    >
      {children}
    </a>
  );
}
