"use client";

import { useState } from "react";
import Link from "next/link";

const GALLERY_ITEMS = [
  { type: "Wood", label: "Cedar Privacy Fence", sub: "Amarillo, TX", aspect: "aspect-[4/3]", bg: "from-amber-950/60 to-amber-900/30" },
  { type: "Chain Link", label: "Residential Chain Link", sub: "6 ft galvanized", aspect: "aspect-[3/4]", bg: "from-zinc-700/60 to-zinc-600/30" },
  { type: "Vinyl", label: "White Vinyl Privacy", sub: "6 ft panels", aspect: "aspect-square", bg: "from-gray-200/80 to-gray-100/60" },
  { type: "Gate", label: "Cedar Driveway Gate", sub: "Double swing", aspect: "aspect-[4/3]", bg: "from-amber-900/60 to-amber-800/30" },
  { type: "Wood", label: "Board-on-Board Fence", sub: "8 ft tall, backyard", aspect: "aspect-[3/4]", bg: "from-amber-950/60 to-amber-900/30" },
  { type: "Chain Link", label: "Commercial Chain Link", sub: "8 ft security fence", aspect: "aspect-[4/3]", bg: "from-zinc-700/60 to-zinc-600/30" },
  { type: "Vinyl", label: "Tan Vinyl Fence", sub: "Semi-privacy style", aspect: "aspect-[3/4]", bg: "from-yellow-100/60 to-amber-50/40" },
  { type: "Gate", label: "Automatic Slide Gate", sub: "Commercial property", aspect: "aspect-square", bg: "from-zinc-800/60 to-zinc-700/30" },
  { type: "Wood", label: "Picket Fence", sub: "Front yard, Wolflin area", aspect: "aspect-[4/3]", bg: "from-amber-950/60 to-amber-900/30" },
  { type: "Chain Link", label: "Backyard Dog Fence", sub: "4 ft residential", aspect: "aspect-[3/4]", bg: "from-zinc-700/60 to-zinc-600/30" },
  { type: "Vinyl", label: "Ranch Rail Vinyl", sub: "White 3-rail", aspect: "aspect-[4/3]", bg: "from-gray-200/80 to-gray-100/60" },
  { type: "Gate", label: "Walk Gate Install", sub: "Wood with latch", aspect: "aspect-[3/4]", bg: "from-amber-900/60 to-amber-800/30" },
];

const FILTERS = ["All", "Wood", "Chain Link", "Vinyl", "Gate"] as const;
type Filter = (typeof FILTERS)[number];

export default function GalleryClient() {
  const [active, setActive] = useState<Filter>("All");

  const items =
    active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.type === active);

  return (
    <>
      {/* Filter buttons */}
      <section className="bg-white px-6 pt-12 pb-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === f
                    ? "bg-gold text-dark"
                    : "border border-[#E5E5E5] bg-white text-secondary hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {items.map((item, i) => (
              <div key={`${item.label}-${i}`} className="mb-4 break-inside-avoid">
                <div
                  className={`relative ${item.aspect} overflow-hidden rounded-xl bg-gradient-to-br ${item.bg}`}
                >
                  {/* Placeholder fence pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 60px)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="font-oswald text-lg font-bold text-white">{item.label}</p>
                    <p className="text-xs text-white/70">{item.sub}</p>
                  </div>
                  <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-dark">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-secondary">
            More photos coming soon — we&apos;re adding new projects weekly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-oswald text-4xl font-bold text-dark">
            Like What You See?
          </h2>
          <p className="mt-4 text-dark/70">
            Get a free estimate for your Amarillo fence project. We&apos;ll come out,
            measure the job, and give you a straight quote.
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
