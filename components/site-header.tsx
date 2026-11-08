"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Asterisk from "@/components/asterisk";
import { company } from "@/lib/content";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group relative z-50 flex items-center gap-2.5 text-ink"
          aria-label="NexSync Labs home"
        >
          <Asterisk className="h-5 w-5 text-terracotta transition-transform duration-700 group-hover:rotate-90" />
          <span className="font-display text-[1.35rem] leading-none tracking-tight">
            <span className="font-medium">NexSync</span>{" "}
            <span className="italic text-ink/70">Labs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[0.82rem] uppercase tracking-[0.16em] transition-colors hover:text-terracotta ${
                isActive(item.href) ? "text-terracotta" : "text-ink/70"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-terracotta/60" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group flex items-center gap-2 border-b border-ink/40 pb-0.5 text-[0.82rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              &#8599;
            </span>
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.16em] text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? "Close" : "Menu"}
          <span className="flex h-3 w-4 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[5.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[5.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-40 flex flex-col justify-between bg-paper px-6 pt-28 pb-10 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col" aria-label="Mobile primary">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-t border-ink/10 py-5 font-display text-4xl tracking-tight text-ink"
              >
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 text-sm text-ink/70">
            <p className="border-t border-ink/10 pt-5">
              {company.address.line}
            </p>
            <a href={`mailto:${company.email}`} className="block hover:text-terracotta">
              {company.email}
            </a>
            <a href={`tel:${company.phone}`} className="block hover:text-terracotta">
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
