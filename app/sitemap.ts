import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gomarkveil.com";
  const pages = [
    "", "/about", "/services", "/explore", "/contact", "/thank-you",
    "/explore/construction", "/explore/clothing", "/explore/gym", "/explore/studio"
  ];
  const now = new Date().toISOString();
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : p.startsWith("/explore/") ? 0.7 : 0.8
  }));
}
