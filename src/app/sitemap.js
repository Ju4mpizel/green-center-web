// src/app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://greencenterbo.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
