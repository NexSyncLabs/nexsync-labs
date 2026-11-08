import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CtaPanel from "@/components/cta-panel";
import JsonLd from "@/components/json-ld";
import { OG_IMAGE, SITE_URL, serviceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service Areas — Birbhum, Malda & the Jharkhand Border",
  description:
    "NexSync Labs is one studio in Rampurhat serving Rampurhat, Suri, Sainthia, Bolpur, Santiniketan, Nalhati, Dubrajpur, Tarapith, Pakur, Dumka, Jamtara, Malda, Berhampore, Durgapur and Asansol. Service areas, not branch offices.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    url: "/service-areas",
    title: "Service Areas | NexSync Labs",
    description:
      "A software studio in Rampurhat working across Birbhum, Malda, Murshidabad and the Jharkhand border districts. These are service areas, not branches.",
    images: [OG_IMAGE],
  },
};

const birbhum = serviceAreas.filter(
  (area) => area.district === "Birbhum",
);
const jharkhand = serviceAreas.filter(
  (area) => area.state === "Jharkhand",
);
const elsewhere = serviceAreas.filter(
  (area) => area.state === "West Bengal" && area.district !== "Birbhum",
);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Service areas covered by NexSync Labs",
  itemListElement: serviceAreas.map((area, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: area.city,
    url: `${SITE_URL}/service-areas/${area.slug}`,
  })),
};

function ServiceAreaGroup({
  title,
  note,
  items,
}: {
  title: string;
  note: string;
  items: typeof serviceAreas;
}) {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/25 pb-3">
        <h2 className="text-[0.7rem] uppercase tracking-[0.22em] text-ink">
          {title}{" "}
          <span className="text-ink/65">
            ({String(items.length).padStart(2, "0")})
          </span>
        </h2>
        <p className="text-[0.68rem] uppercase tracking-[0.14em] text-ink/65">
          {note}
        </p>
      </div>
      {items.map((area) => (
        <Link
          key={area.slug}
          href={`/service-areas/${area.slug}`}
          className="group grid gap-2 border-b border-ink/15 py-5 sm:grid-cols-[1fr_1.6fr_auto] sm:items-baseline sm:gap-6"
        >
          <span>
            <span className="font-display text-xl tracking-tight transition-colors group-hover:text-terracotta sm:text-2xl">
              {area.city}
            </span>
            <span className="mt-0.5 block text-[0.64rem] uppercase tracking-[0.14em] text-ink/65">
              {area.district}
              {area.state !== "West Bengal" ? `, ${area.state}` : ""}
            </span>
          </span>
          <span className="max-w-lg text-sm leading-relaxed text-ink/65">
            {area.line}
          </span>
          <span className="text-[0.72rem] tracking-wide text-ink/65 transition-colors group-hover:text-terracotta">
            {area.distanceKm === 0
              ? "Home base"
              : `~${area.distanceKm} km`}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="pt-10">
          <Breadcrumbs
            items={[{ name: "Home", href: "/" }, { name: "Service Areas" }]}
          />
        </div>

        <header className="grid gap-8 border-b border-ink/15 pt-12 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-terracotta">
              Service areas
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.7rem,5.8vw,5rem)] leading-[0.98] font-light tracking-[-0.025em] text-balance">
              One studio, working{" "}
              <span className="italic text-ink/65">across the districts.</span>
            </h1>
          </div>
          <p className="max-w-sm self-end text-[0.95rem] leading-relaxed text-ink/65 lg:col-span-4">
            Fifteen towns across two states, plus clients further afield. These
            are service areas, not branch offices — every project runs from our
            Rampurhat studio, with travel where the distance makes sense.
          </p>
        </header>

        <div className="border-b border-ink/15 py-6">
          <p className="max-w-3xl text-sm leading-relaxed text-ink/70">
            <span className="font-medium text-ink">A note on these pages.</span>{" "}
            NexSync Labs does not have branch offices in the towns below. This
            is one studio in Rampurhat, and these pages exist so nearby
            businesses can find us when they search locally. We travel for
            meetings, training and go-live.
          </p>
        </div>

        <ServiceAreaGroup
          title="Birbhum"
          note="In-person support from Rampurhat"
          items={birbhum}
        />
        <ServiceAreaGroup
          title="Jharkhand border"
          note="Same-day visits from Rampurhat"
          items={jharkhand}
        />
        <ServiceAreaGroup
          title="Further in West Bengal"
          note="Workshops plus remote delivery"
          items={elsewhere}
        />

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink/65">
          Not on the list? We also work with clients in Kolkata and other
          cities on remote-first projects. The distance matters less than the
          clarity of the brief.
        </p>
      </div>

      <div className="mt-16">
        <CtaPanel
          eyebrow="Outside the list?"
          title={
            <>
              Ask <span className="italic text-paper/80">anyway.</span>
            </>
          }
          body="If you are within a few hours of Rampurhat, we can almost certainly work something out. Tell us where you are and what you need."
        />
      </div>
    </>
  );
}
