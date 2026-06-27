import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amarillo Fence Co. — Amarillo, TX",
  description:
    "Amarillo's most trusted fence company. Wood, chain link, and vinyl fence installation, gate installation, fence repair, and free estimates in Amarillo, TX.",
  openGraph: {
    title: "Amarillo Fence Co. — Amarillo, TX",
    description:
      "Licensed and insured fence installation in Amarillo and the Texas Panhandle. Free estimates.",
    url: "https://amarillofenceco.com",
  },
};

const services = [
  {
    icon: "🪵",
    name: "Wood Fence",
    desc: "Privacy fences, picket fences, and custom wood designs built to last.",
  },
  {
    icon: "⛓️",
    name: "Chain Link",
    desc: "Residential and commercial chain link in multiple heights and gauges.",
  },
  {
    icon: "🏠",
    name: "Vinyl Fence",
    desc: "Low-maintenance, durable vinyl that keeps its clean look for decades.",
  },
  {
    icon: "🚪",
    name: "Gate Installation",
    desc: "Automatic and manual gates — driveway gates, walk gates, and more.",
  },
  {
    icon: "🔧",
    name: "Fence Repair",
    desc: "Post replacement, panel repair, and full fence restoration on all types.",
  },
  {
    icon: "📋",
    name: "Free Estimates",
    desc: "We come to you, measure the job, and give you a straight quote — no pressure.",
  },
];

const pillars = [
  {
    icon: "✅",
    title: "Licensed & Insured",
    desc: "Fully licensed and insured so you're protected on every job.",
  },
  {
    icon: "💰",
    title: "Free Estimates",
    desc: "No cost, no obligation — we'll come out and give you a real number.",
  },
  {
    icon: "📍",
    title: "Amarillo Locals",
    desc: "We live here and work here. Your reputation is our reputation.",
  },
  {
    icon: "⭐",
    title: "Quality Guaranteed",
    desc: "We stand behind every post we set and every panel we hang.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Amarillo Fence Co.",
    description:
      "Licensed fence installation company serving Amarillo and the Texas Panhandle.",
    telephone: "+1-806-555-0000",
    email: "charles@amarillofenceco.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amarillo",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 35.2219971,
        longitude: -101.8312969,
      },
      geoRadius: "80000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fence Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chain Link Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Repair" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center bg-dark px-6 py-24 text-white">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amarillo, Texas · Est. Today
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-7xl">
            Amarillo&apos;s Most{" "}
            <span className="text-gold">Trusted</span> Fence Company
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Wood · Chain Link · Vinyl · Gates · Repair
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/50">
            Locally owned, licensed &amp; insured. Serving Amarillo and the
            Texas Panhandle with quality fence installation and free estimates.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/estimate"
              className="rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/gallery"
              className="rounded-md border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:text-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What We Do
            </p>
            <h2 className="font-oswald text-4xl font-bold text-dark md:text-5xl">
              What We Build
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.name}
                className="group rounded-xl border border-[#E5E5E5] bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 font-oswald text-xl font-bold text-dark">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-md border border-dark px-8 py-3 font-semibold text-dark transition-colors hover:bg-dark hover:text-white"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Why Us
            </p>
            <h2 className="font-oswald text-4xl font-bold md:text-5xl">
              The Amarillo Fence Co. Difference
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="text-center">
                <span className="text-4xl">{p.icon}</span>
                <h3 className="mt-4 font-oswald text-lg font-bold text-gold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Estimate CTA Banner ── */}
      <section className="bg-gold px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-oswald text-4xl font-bold text-dark md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-dark/70">
            Tell us about your project and we&apos;ll come out for a free,
            no-pressure estimate. Most Amarillo fence jobs get a quote within 24
            hours.
          </p>
          <Link
            href="/estimate"
            className="mt-8 inline-block rounded-md bg-dark px-10 py-4 font-semibold text-white transition-colors hover:bg-dark/80"
          >
            Request Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
