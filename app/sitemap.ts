import type { MetadataRoute } from "next";

const siteUrl = "https://minyakpamboang.dekatlokal.com";
const lastModified = "2026-06-26";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
