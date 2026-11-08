import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import JsonLd from "@/components/json-ld";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  SITE_URL,
  absoluteUrl,
  company,
  serviceAreas,
  services,
} from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const defaultTitle =
  "NexSync Labs | ERP, Websites & Apps in Rampurhat, Birbhum";

const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "NexSync Labs, a software studio in Rampurhat, Birbhum",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name, url: SITE_URL }],
  creator: company.name,
  publisher: company.name,
  category: "Technology",
  keywords: [
    ...company.serviceAreas.map((area) => `software company ${area}`),
    ...company.serviceAreas.map((area) => `website development ${area}`),
    ...services.map((service) => service.name),
    "ERP software Birbhum",
    "custom software West Bengal",
    "GST invoice software",
    "school management software West Bengal",
    "mobile app development Birbhum",
    "NexSync Labs",
  ],
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: company.name,
    title: defaultTitle,
    description: company.description,
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: company.description,
    images: [openGraphImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Rampurhat, Birbhum, West Bengal",
    "geo.position": `${company.geo.latitude};${company.geo.longitude}`,
    ICBM: `${company.geo.latitude}, ${company.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3eee4",
  colorScheme: "light",
};

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const businessId = `${SITE_URL}/#localbusiness`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: company.name,
      url: SITE_URL,
      description: company.description,
      email: company.email,
      telephone: company.phone,
      slogan: company.tagline,
      address: {
        "@type": "PostalAddress",
        addressLocality: company.address.locality,
        addressRegion: company.address.region,
        postalCode: company.address.postalCode,
        addressCountry: company.address.countryCode,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: company.phone,
        email: company.email,
        availableLanguage: ["English", "Bengali", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: company.name,
      description: company.description,
      inLanguage: "en-IN",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: company.name,
      url: SITE_URL,
      image: absoluteUrl("/opengraph-image"),
      description: company.description,
      slogan: company.tagline,
      email: company.email,
      telephone: company.phone,
      priceRange: "₹₹",
      paymentAccepted: "Cash, UPI, Bank transfer",
      currenciesAccepted: "INR",
      address: {
        "@type": "PostalAddress",
        addressLocality: company.address.locality,
        addressRegion: company.address.region,
        postalCode: company.address.postalCode,
        addressCountry: company.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: company.geo.latitude,
        longitude: company.geo.longitude,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:00",
      },
      areaServed: serviceAreas.map((area) => ({
        "@type": "City",
        name: area.city,
      })),
      knowsAbout: services.map((service) => service.name),
      parentOrganization: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <JsonLd data={structuredData} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
