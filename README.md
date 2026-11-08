# NexSync Labs

Website for NexSync Labs, a software studio in Rampurhat, Birbhum, West Bengal.
Built with Next.js 16 (App Router), React 19, Tailwind CSS 4 and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
npm start       # serve the production build
```

## Content lives in `data/`

| File | Contents |
| --- | --- |
| `data/company.json` | Name, description, URL, email, phone, address, hours, service areas |
| `data/services.json` | The nine services, detail copy, deliverables, timelines, meta tags |
| `data/service-areas.json` | SEO service-area landing pages, distances, local copy, nearby towns |
| `data/faqs.json` | FAQ content (also feeds FAQPage schema) |
| `data/process.json` | The four-step working process |
| `data/industries.json` | Industries served |
| `data/principles.json` | Studio principles |

Pages, sitemap, structured data and navigation all read from these files. Add a
service or service-area entry and the page, footer link, sitemap entry and
schema are generated automatically.

The service areas are SEO landing pages for places the studio serves. They are
not branch offices; every page states that the work runs from Rampurhat.

Before going live, update the placeholder contact details in
`data/company.json` (`email`, `phoneDisplay`, `phone`, `whatsapp`) and the
production `url` if the domain changes. The site currently uses
`https://nexsynclabs.vercel.app`.

## SEO

- Per-page metadata, canonical URLs and Open Graph/Twitter tags
- Organization, ProfessionalService, WebSite, Service, FAQPage and BreadcrumbList JSON-LD
- Auto-generated `robots.txt`, `sitemap.xml`, web manifest and Open Graph image
- Robots rules allow search engines and AI crawlers; see also `public/llms.txt`
- SEO service-area landing pages for Rampurhat, Suri, Sainthia, Bolpur,
  Santiniketan, Nalhati, Dubrajpur, Tarapith, Pakur, Dumka, Jamtara, Malda,
  Berhampore, Durgapur and Asansol (not branch locations)
- Permanent redirects from the old `/locations` URLs to `/service-areas`

## Deployment

Deploy to Vercel (or any Next.js host). Set the production domain in
`data/company.json` before submitting the sitemap to Google Search Console.
