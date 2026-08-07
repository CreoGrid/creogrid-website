"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#solutions", label: "Our Solutions", id: "solutions" },
  { href: "#industries", label: "Industries", id: "industries" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#technology", label: "Technology", id: "technology" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const PRODUCT_CATEGORIES = [
  {
    id: "gym",
    label: "Gym",
    items: [
      {
        label: "TorqOne",
        description: "Intelligent enterprise platform for gym management & business growth (AI-powered)",
        href: "/products/gym/torqone",
      },
    ],
  },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>("");
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const els = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const closeMenus = () => {
    setProductsOpen(false);
    setActiveCategory(null);
    setMobileProductsOpen(false);
    setOpen(false);
  };

  const selectedCategory = PRODUCT_CATEGORIES.find((category) => category.id === activeCategory);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#top" aria-label="CreoGrid home" className="flex items-center relative">
          <Logo className="h-8 w-auto lg:h-9" />
          <p className="absolute top-[35px] left-[45px] text-[11px] text-foreground/75 whitespace-nowrap">
            Tailored Intelligent Systems.
          </p>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => {
              setProductsOpen(true);
            }}
            onMouseLeave={() => {
              setProductsOpen(false);
              setActiveCategory(null);
            }}
            onFocus={() => {
              setProductsOpen(true);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setProductsOpen(false);
                setActiveCategory(null);
              }
            }}
          >
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen((value) => !value)}
              className={cn(
                "relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 cursor-pointer",
                productsOpen ? "text-primary" : "text-foreground/75 hover:text-primary",
              )}
            >
              <span>Products</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", productsOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full mt-3 w-[28rem] rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_60px_-18px_rgba(15,23,42,0.28)] backdrop-blur-xl"
                >
                  <div className="flex gap-3 rounded-[6px] border border-slate-200/70 bg-slate-950/[0.02] px-[5px] py-2 cursor-pointer">
                    <div className="flex min-w-[10rem] flex-col gap-1">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onFocus={() => setActiveCategory(category.id)}
                          className={cn(
                            "rounded-[7px] border px-3 py-2.5 text-left transition-all duration-200  cursor-pointer",
                            activeCategory === category.id
                              ? "border-primary/20 bg-primary/8 text-primary shadow-sm"
                              : "border-transparent text-foreground/80 hover:border-primary/10 hover:bg-primary/5 hover:text-primary",
                          )}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold">{category.label}</span>
                            <ChevronRight className="h-4 w-4 opacity-70" />
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="min-w-[15rem] rounded-[8px] border border-slate-200/70 bg-white/85 p-3 cursor-pointer">
                      {selectedCategory ? (
                        <div className="space-y-2">
                          {selectedCategory.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenus}
                              className="group flex flex-col rounded-[5px] border border-transparent p-2.5 transition-all duration-200 hover:border-primary/10 hover:bg-primary/5"
                            >
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground/80">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="flex h-full min-h-[8rem] flex-col justify-center rounded-lg border border-dashed border-slate-200/70 bg-slate-950/[0.02] p-3 text-sm text-muted-foreground/80">
                          Select an industry to view products.
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.id ? "page" : undefined}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
                active === item.id ? "text-primary" : "text-foreground/75 hover:text-primary",
              )}
            >
              {item.label}
              <AnimatePresence>
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            <div className="rounded-xl border border-border/70 bg-muted/50">
              <button
                type="button"
                aria-expanded={mobileProductsOpen}
                aria-haspopup="true"
                onClick={() => setMobileProductsOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-base font-medium text-foreground/85 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                <span>Products</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
              </button>

              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-t border-border/70 px-2 py-2"
                  >
                    <div className="rounded-lg border border-border/70 bg-white/70 p-2">
                      <div className="rounded-md px-2 py-2 text-sm font-semibold text-foreground">Gym</div>
                      <Link
                        href="/products/gym/torqone"
                        onClick={closeMenus}
                        className="mt-1 flex flex-col rounded-md border border-transparent px-2 py-2 text-sm text-foreground/80 transition-colors hover:border-primary/10 hover:bg-primary/5"
                      >
                        <span className="font-medium text-foreground">TorqOne</span>
                        <span className="mt-1 text-xs text-muted-foreground/80">AI-powered operating system for modern gyms</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/85 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full" onClick={() => setOpen(false)}>
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
