import type { Metadata } from "next";
import Link from "next/link";
import Asterisk from "@/components/asterisk";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <Asterisk className="pointer-events-none absolute -top-20 -right-24 h-96 w-96 animate-slow-spin text-terracotta/[0.08]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
          404 / Off the map
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
          This page took a wrong turn{" "}
          <span className="italic text-ink/65">at the junction.</span>
        </h1>
        <p className="mt-6 max-w-lg text-[1rem] leading-relaxed text-ink/65">
          The link may be old, or the page may have moved. The useful parts of
          the site are all one click away.
        </p>
        <nav className="mt-10 border-t border-ink/15" aria-label="Recovery">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
            >
              <span className="font-display text-xl tracking-tight transition-colors group-hover:text-terracotta">
                {link.label}
              </span>
              <span
                className="text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-terracotta"
                aria-hidden="true"
              >
                &#8599;
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
