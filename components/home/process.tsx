import { processSteps } from "@/lib/content";

export default function Process({
  eyebrow = "04 / How it goes",
}: {
  eyebrow?: string;
}) {
  return (
    <section className="border-y border-ink/15 bg-paper-deep/40">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
            {eyebrow}
          </p>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,4.2vw,3.5rem)] leading-[1.03] font-light tracking-[-0.02em]">
              No surprises,{" "}
              <span className="italic text-ink/65">in either direction.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/65">
            The process is deliberately boring. Clear scope, visible progress,
            and a handover you can actually use.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`border-b border-ink/15 py-7 sm:border-r sm:px-7 sm:first:pl-0 ${
                index === 0 ? "lg:pl-0" : ""
              } ${index === processSteps.length - 1 ? "sm:border-r-0 sm:pr-0" : ""}`}
            >
              <p className="font-display text-sm italic text-terracotta">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
