import Link from "next/link";
import { serviceAreas } from "@/lib/content";

export default function Coverage() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
            03 / Service areas
          </p>
          <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[1.02] font-light tracking-[-0.02em]">
            From Rampurhat,{" "}
            <span className="italic text-ink/65">outward.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink/70">
          One studio in Rampurhat, serving the districts around it. These are
          search areas, not branch offices — we travel for meetings, training
          and go-live.
        </p>
      </div>

      <div className="mt-10 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:gap-x-20">
        {serviceAreas.map((location) => (
          <Link
            key={location.slug}
            href={`/service-areas/${location.slug}`}
            className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
          >
            <span className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-lg tracking-tight transition-colors group-hover:text-terracotta sm:text-xl">
                {location.city}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.14em] text-ink/65">
                {location.district}
                {location.state !== "West Bengal" ? `, ${location.state}` : ""}
              </span>
            </span>
            <span className="shrink-0 text-[0.7rem] tracking-wide text-ink/65 transition-colors group-hover:text-terracotta">
              {location.distanceKm === 0 ? "Home" : `~${location.distanceKm} km`}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[0.78rem] uppercase tracking-[0.16em] text-ink/75 transition-colors hover:border-terracotta hover:text-terracotta"
        >
          See all service areas
          <span aria-hidden="true">&#8594;</span>
        </Link>
      </div>
    </section>
  );
}
