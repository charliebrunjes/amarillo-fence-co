import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.amarillofenceco.com";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/estimate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/wood-fence-installation-amarillo-tx`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/chain-link-fence-amarillo-tx`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/vinyl-fence-installation-amarillo-tx`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/fence-repair-amarillo-tx`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gate-installation-amarillo-tx`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
