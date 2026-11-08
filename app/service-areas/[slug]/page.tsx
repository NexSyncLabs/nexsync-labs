import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaPanel from "@/components/cta-panel";
import JsonLd from "@/components/json-ld";
import {
  OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  company,
  formatDistance,
  getNearbyServiceAreas,
  getServiceArea,
  serviceAreas,
  services,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getServiceArea(slug);

  if (!location) {
    return { title: "Service area not found" };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: `/service-areas/${location.slug}`,
    },
    openGraph: {
      url: `/service-areas/${location.slug}`,
      title: `${location.metaTitle} | ${company.name}`,
      description: location.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getServiceArea(slug);

  if (!location) {
    notFound();
  }

  const nearby = getNearbyServiceAreas(location);

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Software and website development in ${location.city}`,
    serviceType: "Software and website development",
    description: location.metaDescription,
    url: absoluteUrl(`/service-areas/${location.slug}`),
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
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${location.district}, ${location.state}`,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services available in ${location.city}`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={locationSchema} />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="pt-10">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/service-areas" },
              { name: location.city },
            ]}
          />
        </div>

        <header className="grid gap-10 border-b border-ink/15 pt-12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              {location.district}, {location.state}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,5.6vw,4.8rem)] leading-[0.99] font-light tracking-[-0.025em] text-balance">
              Software and websites for{" "}
              <span className="italic text-terracotta">
                {location.city}
              </span>{" "}
              businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-ink/70">
              {location.line}
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:pt-2">
            <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
              Distance
            </p>
            <p className="mt-1.5 font-display text-xl tracking-tight">
              {formatDistance(location.distanceKm)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              {location.distanceKm > 0
                ? "Local visits for workshops, training and go-live. Remote support in between."
                : "Our own town. On-site support is the default here, not an add-on."}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[0.74rem] uppercase tracking-[0.14em] text-ink/75 transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Start a conversation
              <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </header>

        <section className="grid gap-10 border-b border-ink/15 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-5 text-[1rem] leading-[1.8] text-ink/70 lg:col-span-7">
            {location.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              We work with businesses in {location.city} on ERP and billing
              software, dynamic and SEO-ready websites, mobile apps and school
              management systems. Every project begins with a written scope and
              a fixed estimate, and support continues after launch.
            </p>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-[0.68rem] uppercase tracking-[0.2em] text-ink/65">
              What we do for {location.city}
            </h2>
            <ul className="mt-4 border-t border-ink/15">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-baseline justify-between gap-3 border-b border-ink/15 py-3 text-sm text-ink/70 transition-colors hover:text-terracotta"
                  >
                    {service.name}
                    <span
                      className="text-ink/25 transition-all group-hover:translate-x-0.5 group-hover:text-terracotta"
                      aria-hidden="true"
                    >
                      &#8599;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="grid gap-6 border-b border-ink/15 py-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              Why us
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight">
              Close enough to be useful.
            </h2>
          </div>
          <div className="space-y-4 text-[0.98rem] leading-relaxed text-ink/65 lg:col-span-7 lg:col-start-6">
            <p>
              We are not a metro agency with a district branch that nobody has
              visited. NexSync Labs is in Rampurhat, and the businesses around
              it are our neighbours, clients and references.
            </p>
            <p>
              To be clear, there is no branch office in {location.city}. The
              team that scopes, builds and supports your project sits in
              Rampurhat.
            </p>
            <p>
              That changes the economics of a project. We can visit{" "}
              {location.city} without adding travel budgets, train staff in
              person, and return after go-live when something needs adjusting.
            </p>
          </div>
        </section>

        {nearby.length > 0 && (
          <section className="py-14">
            <h2 className="text-[0.68rem] uppercase tracking-[0.2em] text-ink/65">
              Also nearby
            </h2>
            <div className="mt-5 border-t border-ink/15">
              {nearby.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/service-areas/${entry.slug}`}
                  className="group flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
                >
                  <span className="font-display text-xl tracking-tight transition-colors group-hover:text-terracotta">
                    {entry.city}
                  </span>
                  <span className="text-[0.72rem] text-ink/65">
                    {entry.distanceKm === 0
                      ? "Home base"
                      : `~${entry.distanceKm} km away`}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <CtaPanel
        eyebrow={`Serving ${location.city}`}
        title={
          <>
            Let&apos;s build something useful in{" "}
            <span className="italic text-paper/80">{location.city}.</span>
          </>
        }
        body={`Tell us what your business does and where the day gets stuck. We will reply with a straight answer, usually within one working day.`}
      />
    </>
  );
}
