import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesIndex() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
            01 / What we do
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[1.02] font-light tracking-[-0.02em]">
            Nine things, done properly.{" "}
            <span className="italic text-ink/65">
              Pick the one that hurts most.
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-ink/70">
          One team across all of it, so your website, billing and back office
          are not three unrelated projects with three sets of logins.
        </p>
      </div>

      <div className="border-t border-ink/15">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group grid grid-cols-[2.2rem_1fr_auto] items-baseline gap-x-4 border-b border-ink/15 py-6 transition-colors sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-6 sm:py-7"
          >
            <span className="text-[0.68rem] uppercase tracking-[0.16em] text-ink/65 transition-colors group-hover:text-terracotta">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block font-display text-[clamp(1.45rem,3vw,2.3rem)] leading-tight tracking-[-0.01em] transition-colors group-hover:text-terracotta">
                {service.name}
              </span>
              <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink/65">
                {service.line}
              </span>
            </span>
            <span
              className="text-lg text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-terracotta"
              aria-hidden="true"
            >
              &#8599;
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[0.78rem] uppercase tracking-[0.16em] text-ink/75 transition-colors hover:border-terracotta hover:text-terracotta"
        >
          How we approach each one
          <span aria-hidden="true">&#8594;</span>
        </Link>
      </div>
    </section>
  );
}
