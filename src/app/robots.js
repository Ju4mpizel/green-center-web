// src/app/robots.js
import { siteConfig } from "@/data/siteConfig";

export const dynamic = "force-static";

export default function robots() {
  const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

  if (!isIndexable) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
