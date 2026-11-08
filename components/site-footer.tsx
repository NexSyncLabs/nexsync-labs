import Link from "next/link";
import Asterisk from "@/components/asterisk";
import { company, serviceAreas, services } from "@/lib/content";

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.mapQuery,
)}`;

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-8 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Asterisk className="h-6 w-6 text-clay" />
              <span className="font-display text-2xl tracking-tight">
                NexSync <span className="italic text-paper/60">Labs</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-paper/70">
              A software studio in Rampurhat, building ERP systems, websites and
              mobile apps for businesses across Birbhum, Malda, Murshidabad and
              the Jharkhand border.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="border-b border-paper/25 pb-0.5 transition-colors hover:border-clay hover:text-clay"
              >
                {company.email}
              </a>
              <a
                href={`tel:${company.phone}`}
                className="border-b border-paper/25 pb-0.5 transition-colors hover:border-clay hover:text-clay"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-paper/60">
              Services
            </p>
            <ul className="mt-5 space-y-2.5 text-[0.9rem] text-paper/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-clay"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-clay/90 underline decoration-clay/40 underline-offset-4 transition-colors hover:text-clay"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-paper/60">
              Service areas
            </p>
            <ul className="mt-5 space-y-2.5 text-[0.9rem] text-paper/70">
              {serviceAreas.slice(0, 8).map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/service-areas/${location.slug}`}
                    className="transition-colors hover:text-clay"
                  >
                    {location.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-clay/90 underline decoration-clay/40 underline-offset-4 transition-colors hover:text-clay"
                >
                  All service areas
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-paper/60">
              Studio
            </p>
            <address className="mt-5 text-[0.9rem] leading-relaxed text-paper/70 not-italic">
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-clay"
              >
                {company.address.line}
              </a>
              <br />
              <span className="text-paper/60">{company.hours}</span>
            </address>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border-b border-paper/25 pb-0.5 text-[0.9rem] text-paper/70 transition-colors hover:border-clay hover:text-clay"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-6 text-[0.72rem] uppercase tracking-[0.14em] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="normal-case tracking-normal text-paper/60">
            Built in Rampurhat, for the districts.
          </p>
          <Link href="/sitemap.xml" className="transition-colors hover:text-clay">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
