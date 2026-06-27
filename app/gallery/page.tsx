import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of our Amarillo fence installations — coming soon. Wood, chain link, vinyl, and gate work by Amarillo Fence Co.",
  openGraph: {
    title: "Gallery | Amarillo Fence Co.",
    description: "Photos of our Amarillo fence work — coming soon.",
    url: "https://amarillofenceco.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center"
      style={{
        background:
          "repeating-linear-gradient(-7deg, #F5B800 0px, #F5B800 44px, #111111 44px, #111111 88px)",
      }}
    >
      {/* Card */}
      <div className="relative z-10 mx-6 w-full max-w-md rounded-2xl bg-white px-10 py-12 text-center shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Gallery
        </p>
        <p className="mt-5 font-oswald text-2xl font-bold leading-snug text-dark md:text-3xl">
          We&apos;re out building fences,<br />not taking selfies.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-secondary">
          Photos of our work coming soon. Check back after our next job.
        </p>
      </div>

      {/* Branding */}
      <p className="absolute bottom-5 right-6 font-inter text-xs font-medium text-white/40">
        Amarillo Fence Co.
      </p>
    </div>
  );
}
