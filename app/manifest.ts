import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: "NexSync Labs",
    description: company.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f3eee4",
    theme_color: "#1d251f",
    lang: "en-IN",
    dir: "ltr",
    categories: ["business", "developer", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Services",
        url: "/services",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
  };
}
