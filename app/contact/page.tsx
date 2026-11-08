import type { Metadata } from "next";
import Breadcrumbs from "@/components/breadcrumbs";
import ContactForm from "@/components/contact-form";
import JsonLd from "@/components/json-ld";
import { OG_IMAGE, SITE_URL, absoluteUrl, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Talk to NexSync Labs in Rampurhat",
  description:
    "Talk to NexSync Labs about ERP software, a dynamic website, billing system or mobile app. Based in Rampurhat, serving Birbhum, Malda and the Jharkhand border.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact | NexSync Labs",
    description:
      "Tell us what is not working. We reply within one working day.",
    images: [OG_IMAGE],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NexSync Labs",
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.countryCode,
    },
  },
};

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.mapQuery,
)}`;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="pt-10">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Contact" }]}
          />
        </div>

        <header className="grid gap-8 border-b border-ink/15 pt-12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              Contact
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.8vw,5rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
              Tell us what is{" "}
              <span className="italic text-terracotta">not working.</span>
            </h1>
          </div>
          <p className="max-w-sm self-end text-[0.95rem] leading-relaxed text-ink/65 lg:col-span-4">
            A call or a message is enough to start. We will tell you honestly
            whether we can help, what it might cost and how long it would take.
          </p>
        </header>

        <div className="grid gap-14 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-7">
            <h2 className="text-[0.68rem] uppercase tracking-[0.22em] text-ink/65">
              Project enquiry
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70">
              A few honest lines are more useful than a formal brief. Share what
              the business does, what you use today, and where the day gets
              stuck.
            </p>
            <ContactForm />
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border-t border-ink/15">
              <div className="border-b border-ink/15 py-5">
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Write
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1.5 inline-block font-display text-xl tracking-tight transition-colors hover:text-terracotta"
                >
                  {company.email}
                </a>
              </div>
              <div className="border-b border-ink/15 py-5">
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Call or WhatsApp
                </p>
                <a
                  href={`tel:${company.phone}`}
                  className="mt-1.5 block font-display text-xl tracking-tight transition-colors hover:text-terracotta"
                >
                  {company.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-ink/65 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-terracotta"
                >
                  Message on WhatsApp
                </a>
              </div>
              <div className="border-b border-ink/15 py-5">
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Visit
                </p>
                <address className="mt-1.5 text-sm leading-relaxed text-ink/70 not-italic">
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-terracotta"
                  >
                    {company.address.line}
                  </a>
                  <br />
                  <span className="text-ink/65">
                    Visits by appointment. Call before you come.
                  </span>
                </address>
              </div>
              <div className="border-b border-ink/15 py-5">
                <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Hours
                </p>
                <p className="mt-1.5 text-sm text-ink/70">{company.hours}</p>
                <p className="mt-2 text-sm text-ink/65">
                  {company.responseTime}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                Helpful before the call
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
                <li className="border-b border-ink/10 pb-3">
                  What the business does, in one or two lines.
                </li>
                <li className="border-b border-ink/10 pb-3">
                  What software or registers you use today.
                </li>
                <li>What goes wrong most often, and when.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
