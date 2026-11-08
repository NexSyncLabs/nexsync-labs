import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Asterisk from "@/components/asterisk";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaPanel from "@/components/cta-panel";
import JsonLd from "@/components/json-ld";
import {
  OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  company,
  getService,
  serviceAreas,
  services,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      url: `/services/${service.slug}`,
      title: `${service.name} | ${company.name}`,
      description: service.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const index = services.findIndex((entry) => entry.slug === slug);
  const related = services.filter((entry) => entry.slug !== slug).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#localbusiness`,
      name: company.name,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: company.address.locality,
        addressRegion: company.address.region,
        postalCode: company.address.postalCode,
        addressCountry: company.address.countryCode,
      },
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: `Scoped and quoted in writing after a free consultation. Typical timeline: ${service.timeline}.`,
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.name },
            ]}
          />
        </div>

        <header className="grid gap-10 border-b border-ink/15 pt-12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              Service {String(index + 1).padStart(2, "0")} / 09
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.8vw,5rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
              {service.name}
            </h1>
            <p className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">
              {service.summary}
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:pt-2">
            <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
              Typical timeline
            </p>
            <p className="mt-1.5 font-display text-xl tracking-tight">
              {service.timeline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Quoted after a free scoping call. Fixed price, written scope, no
              surprise invoices.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[0.74rem] uppercase tracking-[0.14em] text-ink/75 transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Discuss this project
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </header>

        <section className="grid gap-12 border-b border-ink/15 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 text-[1rem] leading-[1.8] text-ink/70 lg:col-span-7">
            {service.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-[0.68rem] uppercase tracking-[0.2em] text-ink/65">
              What it includes
            </h2>
            <ul className="mt-4 border-t border-ink/15">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-ink/15 py-3.5 text-sm leading-snug text-ink/70"
                >
                  <Asterisk className="mt-1 h-3 w-3 shrink-0 text-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="grid gap-6 border-b border-ink/15 py-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="text-[0.68rem] uppercase tracking-[0.2em] text-ink/65">
              Who it is for
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:col-span-8 lg:col-start-5">
            {service.forWho.map((entry, entryIndex) => (
              <span key={entry} className="flex items-center gap-6">
                <span className="font-display text-xl tracking-tight sm:text-2xl">
                  {entry}
                </span>
                {entryIndex < service.forWho.length - 1 && (
                  <Asterisk className="h-3 w-3 text-terracotta/60" />
                )}
              </span>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Other things we build
            </h2>
            <Link
              href="/services"
              className="border-b border-ink/25 pb-0.5 text-[0.72rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-terracotta hover:text-terracotta"
            >
              All services
            </Link>
          </div>
          <div className="mt-8 border-t border-ink/15">
            {related.map((entry) => (
              <Link
                key={entry.slug}
                href={`/services/${entry.slug}`}
                className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
              >
                <span className="font-display text-xl tracking-tight transition-colors group-hover:text-terracotta sm:text-2xl">
                  {entry.name}
                </span>
                <span
                  className="text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-terracotta"
                  aria-hidden="true"
                >
                  &#8599;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CtaPanel
        eyebrow="Next step"
        title={
          <>
            Let&apos;s scope{" "}
            <span className="italic text-paper/80">it properly.</span>
          </>
        }
        body={`Tell us what you need from ${service.name.toLowerCase()}. A short call will tell us whether it is a fit, and what a sensible first phase looks like.`}
      />
    </>
  );
}
