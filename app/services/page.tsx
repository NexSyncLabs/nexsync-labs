import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaPanel from "@/components/cta-panel";
import JsonLd from "@/components/json-ld";
import { OG_IMAGE, company, services, SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — ERP, Websites, Apps & Billing Software",
  description:
    "Explore NexSync Labs services: ERP and custom ERP systems, dynamic websites, SEO-optimised sites, invoice management, iOS and Android apps, food delivery apps, astrology apps and school management software.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
    title: "Services | NexSync Labs, Rampurhat",
    description:
      "ERP, custom ERP, dynamic websites, invoice systems, mobile apps and school software, built from Rampurhat for businesses across Birbhum and beyond.",
    images: [OG_IMAGE],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software and web services by NexSync Labs",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    url: `${SITE_URL}/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="pt-10">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Services" }]}
          />
        </div>

        <header className="grid gap-8 border-b border-ink/15 pt-12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              Services
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.8vw,5rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
              Software for the parts of the business{" "}
              <span className="italic text-ink/65">that cannot slip.</span>
            </h1>
          </div>
          <p className="max-w-sm self-end text-[0.95rem] leading-relaxed text-ink/65 lg:col-span-4">
            {company.name} works across nine service lines. Most clients start
            with one, then find that the website, billing and back office make
            more sense when they talk to each other.
          </p>
        </header>

        <section className="border-t border-ink/15">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="grid gap-6 border-b border-ink/15 py-10 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <p className="text-[0.66rem] uppercase tracking-[0.18em] text-ink/65">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-tight tracking-[-0.01em]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-terracotta"
                  >
                    {service.name}
                  </Link>
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/65">
                  {service.line}
                </p>
              </div>
              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-relaxed text-ink/65">
                  {service.summary}
                </p>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Typical timeline
                </p>
                <p className="mt-1 font-display text-lg tracking-tight">
                  {service.timeline}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 border-b border-ink/25 pb-0.5 text-[0.72rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Explore service
                  <span aria-hidden="true">&#8599;</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <div className="py-10">
          <p className="max-w-xl text-sm leading-relaxed text-ink/70">
            Not sure where your project fits? That is normal. Most useful
            conversations start with a problem, not a service name.
          </p>
        </div>
      </div>

      <CtaPanel
        eyebrow="Next step"
        title={
          <>
            Tell us what is{" "}
            <span className="italic text-paper/80">not working.</span>
          </>
        }
        body="A short call is usually enough to work out which of these services you actually need. If the answer is none of them yet, we will tell you."
      />
    </>
  );
}
