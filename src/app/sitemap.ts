import type { MetadataRoute } from "next";
import { access, readdir } from "fs/promises";
import path from "path";

/** Canonical site URL; override in Vercel: NEXT_PUBLIC_SITE_URL=https://www.sheepflights.com */
function getBaseUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL;
  if (env) {
    return env.startsWith("http") ? env : `https://${env}`;
  }
  return "https://www.sheepflights.com";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();
  const blogDir = path.join(process.cwd(), "src/app/blog");
  const entries = await readdir(blogDir, { withFileTypes: true });

  const blogUrls: MetadataRoute.Sitemap = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === "[slug]") continue;
    const pageFile = path.join(blogDir, entry.name, "page.tsx");
    try {
      await access(pageFile);
      blogUrls.push({
        url: new URL(`/blog/${entry.name}`, base).href,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    } catch {
      /* no page.tsx */
    }
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: new URL("/", base).href,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/about", base).href,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/blog", base).href,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogUrls];
}
