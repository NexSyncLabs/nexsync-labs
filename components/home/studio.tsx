import Link from "next/link";
import { principles } from "@/lib/content";

export default function Studio() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-28">
        <div className="lg:col-span-5">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-clay">
            02 / The studio
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.3rem,4.6vw,3.9rem)] leading-[1.02] font-light tracking-[-0.02em] text-balance">
            A small studio with{" "}
            <span className="italic text-paper/50">long attention spans.</span>
          </h2>
          <div className="mt-8 max-w-md space-y-4 text-[0.95rem] leading-relaxed text-paper/65">
            <p>
              Most software companies sell you a licence and disappear into a
              support queue. We work the other way around. You deal with the
              same people from the first call to the last training session.
            </p>
            <p>
              Because we live here, we know the difference between a Sainthia
              trader&apos;s ledger and a Santiniketan homestay&apos;s booking
              calendar. The software should show it.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-paper/25 pb-1 text-[0.78rem] uppercase tracking-[0.16em] text-paper/80 transition-colors hover:border-clay hover:text-clay"
          >
            More about the studio
            <span aria-hidden="true">&#8594;</span>
          </Link>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="border-t border-paper/15">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-paper/15 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-x-6"
              >
                <span className="font-display text-sm italic text-clay">
                  {principle.number}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-tight sm:text-2xl">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-paper/60">
                    {principle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
