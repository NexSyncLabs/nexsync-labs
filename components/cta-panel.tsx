import Link from "next/link";
import Asterisk from "@/components/asterisk";
import { company } from "@/lib/content";

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.mapQuery,
)}`;

export default function CtaPanel({
  eyebrow = "07 / Start here",
  title,
  body = "Tell us what your business does and what is not working. We will reply with a straight answer, usually within one working day. If we are not the right fit, we will say so.",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-terracotta text-paper">
      <Asterisk className="pointer-events-none absolute -right-24 -bottom-28 h-[26rem] w-[26rem] animate-slow-spin text-paper/[0.08]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-paper">
              {eyebrow}
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5.4vw,4.6rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
              {title ?? (
                <>
                  Let&apos;s get your business{" "}
                  <span className="italic text-paper/80">in sync.</span>
                </>
              )}
            </h2>
            <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-paper">
              {body}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-10">
            <p className="text-[0.68rem] uppercase tracking-[0.2em] text-paper">
              Write or call
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-4 inline-block border-b border-paper/40 pb-1 font-display text-xl tracking-tight transition-colors hover:border-paper sm:text-2xl"
            >
              {company.email}
            </a>
            <a
              href={`tel:${company.phone}`}
              className="mt-3 block text-sm text-paper transition-colors hover:text-paper/80"
            >
              {company.phoneDisplay}
            </a>
            <address className="mt-6 text-sm leading-relaxed text-paper not-italic">
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                {company.address.line}
              </a>
              <br />
              <span className="text-paper">{company.hours}</span>
            </address>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-[0.76rem] uppercase tracking-[0.16em] transition-colors hover:border-paper"
            >
              See how to reach us
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
