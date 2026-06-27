import type { Metadata } from "next";
import EstimateForm from "./EstimateForm";

export const metadata: Metadata = {
  title: "Free Estimate Request",
  description:
    "Request a free fence estimate from Amarillo Fence Co. Wood, chain link, vinyl, gate installation, and fence repair in Amarillo, TX. We'll call you within 24 hours.",
  openGraph: {
    title: "Free Fence Estimate | Amarillo Fence Co.",
    description:
      "Get a free, no-obligation fence estimate in Amarillo, TX. We'll call you within 24 hours.",
    url: "https://amarillofenceco.com/estimate",
  },
};

export default function EstimatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            It&apos;s Free
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Request a<br />
            <span className="text-gold">Free Estimate</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Fill out the form below and we&apos;ll contact you within 24 hours to
            schedule your free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <EstimateForm />
        </div>
      </section>
    </>
  );
}
