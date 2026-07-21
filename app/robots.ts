import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://amarillofenceco.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/_next/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
