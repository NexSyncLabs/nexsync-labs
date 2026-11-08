import JsonLd from "@/components/json-ld";
import { faqs } from "@/lib/content";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqList() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <JsonLd data={faqSchema} />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
            06 / Questions
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.03] font-light tracking-[-0.02em]">
            Asked before the{" "}
            <span className="italic text-ink/65">first invoice.</span>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/70">
            Still unsure about something? Write to us. We answer plainly, even
            when the answer is &ldquo;you don&apos;t need that yet&rdquo;.
          </p>
        </div>

        <div className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg leading-snug tracking-tight sm:text-xl">
                  {faq.question}
                </h3>
                <span
                  className="text-xl font-light text-terracotta transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink/65">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
