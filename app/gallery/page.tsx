import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Fence Installation Gallery",
  description:
    "Browse photos of Amarillo fence installations — wood fences, chain link, vinyl, and gate projects. See the quality of Amarillo Fence Co.'s work.",
  openGraph: {
    title: "Fence Gallery | Amarillo Fence Co.",
    description:
      "See our work — wood, chain link, vinyl, and gate installations across Amarillo, TX.",
    url: "https://amarillofenceco.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-28 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Our Work
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Fence <span className="text-gold">Gallery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Browse recent Amarillo fence installations — wood, chain link,
            vinyl, and custom gates.
          </p>
        </div>
      </section>

      {/* Client-side filter + grid */}
      <GalleryClient />
    </>
  );
}
