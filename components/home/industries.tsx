import { industries } from "@/lib/content";

export default function Industries() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
            05 / Who it&apos;s for
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[1.02] font-light tracking-[-0.02em]">
            Built for the work{" "}
            <span className="italic text-ink/65">you actually do.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-ink/70">
          Not a generic product with your logo on it. The software starts from
          your counter, your register and your month-end.
        </p>
      </div>

      <div className="mt-10 border-t border-ink/15">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="grid gap-2 border-b border-ink/15 py-5 sm:grid-cols-[1fr_1.4fr] sm:items-baseline sm:gap-8"
          >
            <h3 className="font-display text-xl tracking-tight sm:text-2xl">
              {industry.name}
            </h3>
            <p className="text-sm leading-relaxed text-ink/70">
              {industry.line}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
