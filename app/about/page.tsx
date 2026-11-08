import type { Metadata } from "next";
import Link from "next/link";
import Asterisk from "@/components/asterisk";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaPanel from "@/components/cta-panel";
import JsonLd from "@/components/json-ld";
import Process from "@/components/home/process";
import {
  OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  company,
  principles,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "The Studio — Software Built in Rampurhat, Birbhum",
  description:
    "NexSync Labs is a small software studio in Rampurhat, Birbhum. We build ERP systems, websites and apps with written scopes, in-person training and support that continues after launch.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "The Studio | NexSync Labs",
    description:
      "A small software studio in Rampurhat, Birbhum, working across Birbhum, Malda and the Jharkhand border.",
    images: [OG_IMAGE],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About NexSync Labs",
  url: absoluteUrl("/about"),
  description:
    "NexSync Labs is a software studio in Rampurhat, Birbhum, building ERP systems, websites and mobile apps.",
  about: { "@id": `${SITE_URL}/#localbusiness` },
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.mapQuery,
)}`;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="pt-10">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Studio" }]}
          />
        </div>

        <header className="grid gap-8 border-b border-ink/15 pt-12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              The studio
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.8vw,5rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
              A software studio in a{" "}
              <span className="italic text-ink/65">working town.</span>
            </h1>
          </div>
          <p className="max-w-sm self-end text-[0.95rem] leading-relaxed text-ink/65 lg:col-span-4">
            {company.name} builds ERP systems, websites and apps from
            Rampurhat. We keep the team small, the scope honest and the support
            close by.
          </p>
        </header>

        <section className="grid gap-12 border-b border-ink/15 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Asterisk className="h-8 w-8 text-terracotta" />
            <p className="mt-8 font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.2] italic text-ink/70">
              &ldquo;Software should be as dependable as a good ledger.&rdquo;
            </p>
          </div>
          <div className="space-y-5 text-[1rem] leading-[1.8] text-ink/70 lg:col-span-7 lg:col-start-6">
            <p>
              Rampurhat is a working town. Stone moves through it, produce moves
              through it, patients and pilgrims arrive and leave, and the
              businesses in between need software that holds up on an ordinary
              Tuesday.
            </p>
            <p>
              That is the standard we build to. Not a demo. Not a pitch deck. A
              system someone can open at 10 a.m. on a busy day and use without
              calling us.
            </p>
            <p>
              We work across nine service lines, but the approach is the same:
              understand the work, write down the scope, build in phases, and
              train the people who will actually use it. The person who scopes
              your project is the person who builds it.
            </p>
            <p>
              We are deliberately small. It means fewer projects at once,
              shorter lines of communication, and no handover to a team that has
              never heard of your business.
            </p>
            <p className="text-ink/70">
              What we will not do: promise page-one rankings in a week, sell you
              modules you do not need, or disappear once the final invoice is
              paid.
            </p>
          </div>
        </section>
      </div>

      <section className="border-b border-ink/15 bg-paper-deep/40">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
                What we hold to
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] leading-tight font-light tracking-[-0.02em]">
                Three things we will not trade away.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ink/70">
              These are not values on a wall. They decide how projects are
              scoped, priced and supported.
            </p>
          </div>

          <div className="mt-10 grid gap-0 border-t border-ink/15 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                className={`border-b border-ink/15 py-7 md:px-7 ${
                  index === 0 ? "md:pl-0" : ""
                } ${
                  index < principles.length - 1
                    ? "md:border-r md:border-ink/15"
                    : "md:pr-0"
                }`}
              >
                <p className="font-display text-sm italic text-terracotta">
                  {principle.number}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <section className="grid gap-10 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              The place
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,3.6vw,3rem)] leading-tight font-light tracking-[-0.02em]">
              Find us in Rampurhat.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/70">
              Visits are by appointment. Call ahead and we will make sure the
              right person is in the room.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <dl className="border-t border-ink/15 text-sm">
              <div className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Address
                </dt>
                <dd>
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/75 transition-colors hover:text-terracotta"
                  >
                    {company.address.line}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Hours
                </dt>
                <dd className="text-ink/75">{company.hours}</dd>
              </div>
              <div className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-ink/75 transition-colors hover:text-terracotta"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-ink/75 transition-colors hover:text-terracotta"
                  >
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-[0.64rem] uppercase tracking-[0.18em] text-ink/65">
                  Coverage
                </dt>
                <dd>
                  <Link
                    href="/service-areas"
                    className="text-ink/75 transition-colors hover:text-terracotta"
                  >
                    Birbhum, Malda, Murshidabad, Durgapur, Asansol and the
                    Jharkhand border
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      <Process eyebrow="How it goes" />
      <CtaPanel />
    </>
  );
}
