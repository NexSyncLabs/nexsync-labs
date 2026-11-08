import type { Metadata } from "next";
import CtaPanel from "@/components/cta-panel";
import Hero from "@/components/home/hero";
import Coverage from "@/components/home/coverage";
import FaqList from "@/components/home/faq-list";
import Industries from "@/components/home/industries";
import Process from "@/components/home/process";
import ServicesIndex from "@/components/home/services-index";
import Studio from "@/components/home/studio";
import Marquee from "@/components/marquee";
import { OG_IMAGE, company, services } from "@/lib/content";

const marqueeItems = [
  "ERP software",
  "Dynamic websites",
  "Invoice systems",
  "SEO-optimised sites",
  "iOS & Android apps",
  "Food delivery apps",
  "Astrology apps",
  "School software",
  "Rampurhat",
  "Suri",
  "Sainthia",
  "Bolpur",
  "Malda",
  "Pakur",
];

export const metadata: Metadata = {
  title: {
    absolute: "NexSync Labs | ERP, Websites & Apps in Rampurhat, Birbhum",
  },
  description: company.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: `${company.name} | Software studio in Rampurhat, Birbhum`,
    description: company.description,
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <ServicesIndex />
      <Studio />
      <Coverage />
      <Process />
      <Industries />
      <FaqList />
      <CtaPanel />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${company.name} services`,
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.name,
              url: `${company.url}/services/${service.slug}`,
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
