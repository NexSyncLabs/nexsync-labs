import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import serviceAreasData from "@/data/service-areas.json";
import faqsData from "@/data/faqs.json";
import processData from "@/data/process.json";
import industriesData from "@/data/industries.json";
import principlesData from "@/data/principles.json";

export type Company = typeof companyData;
export type Service = (typeof servicesData)[number];
export type ServiceArea = (typeof serviceAreasData)[number];
export type Faq = (typeof faqsData)[number];
export type ProcessStep = (typeof processData)[number];
export type Industry = (typeof industriesData)[number];
export type Principle = (typeof principlesData)[number];

export const company: Company = companyData;
export const services: Service[] = servicesData;
export const serviceAreas: ServiceArea[] = serviceAreasData;
export const faqs: Faq[] = faqsData;
export const processSteps: ProcessStep[] = processData;
export const industries: Industry[] = industriesData;
export const principles: Principle[] = principlesData;

export const SITE_URL = company.url.replace(/\/$/, "");

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "NexSync Labs, a software studio in Rampurhat, Birbhum",
};

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export function getNearbyServiceAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby
    .map((slug) => getServiceArea(slug))
    .filter((entry): entry is ServiceArea => Boolean(entry));
}

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatDistance(km: number): string {
  if (km === 0) return "Home base";
  return `About ${km} km from Rampurhat`;
}
