// src/app/sitemap.js
import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-10-15T00:00:00.000Z",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
