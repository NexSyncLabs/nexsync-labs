import Link from "next/link";
import Asterisk from "@/components/asterisk";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Asterisk className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] animate-slow-spin text-terracotta/[0.07] sm:-top-20 sm:-right-20" />
      <div className="relative mx-auto max-w-[1440px] px-5 pt-14 pb-12 sm:px-8 lg:px-12 lg:pt-24 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="rise flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-ink/65">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Software studio &middot; Rampurhat, Birbhum
            </p>
            <h1 className="rise rise-1 mt-7 font-display text-[clamp(2.75rem,7.4vw,6.8rem)] leading-[0.93] font-light tracking-[-0.03em] text-balance">
              Websites, software and apps that{" "}
              <span className="relative inline-block italic text-terracotta">
                earn their keep.
                <svg
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-terracotta/60"
                  viewBox="0 0 320 14"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9.5C58 4.5 120 3.3 182 5.2c44 1.4 90 1 134-2.4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="rise rise-2 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
              We build ERP systems, dynamic websites, invoice software and
              mobile apps for businesses across Birbhum, Malda and the Jharkhand
              border. Practical software, made close to home.
            </p>
            <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-[0.76rem] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-terracotta"
              >
                Tell us what you need
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  &#8599;
                </span>
              </Link>
              <Link
                href="/services"
                className="border-b border-ink/30 pb-1 text-[0.78rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                See what we build
              </Link>
            </div>
          </div>
        </div>

        <div className="rise rise-4 mt-16 grid gap-6 border-t border-ink/15 pt-6 sm:grid-cols-3">
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-ink/65">
              Home base
            </p>
            <p className="mt-1.5 font-display text-lg tracking-tight">
              Rampurhat, Birbhum
            </p>
          </div>
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-ink/65">
              What we do
            </p>
            <p className="mt-1.5 font-display text-lg tracking-tight">
              ERP, websites, apps
            </p>
          </div>
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-ink/65">
              Nearby
            </p>
            <p className="mt-1.5 font-display text-lg tracking-tight">
              Suri &middot; Sainthia &middot; Bolpur &middot; Pakur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
