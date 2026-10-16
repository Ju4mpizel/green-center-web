// src/app/robots.js
import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function robots() {
  const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

  return {
    rules: [
      {
        userAgent: "*",
        allow: isIndexable ? "/" : undefined,
        disallow: isIndexable ? undefined : "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
