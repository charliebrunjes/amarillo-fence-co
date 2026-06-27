import type { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book a Free Estimate",
  description:
    "Schedule a free fence estimate with Amarillo Fence Co. Pick a time, we'll come out and give you a straight quote — no pressure, no obligation.",
  openGraph: {
    title: "Book a Free Estimate | Amarillo Fence Co.",
    description:
      "Schedule your free fence estimate in Amarillo, TX. No pressure, no obligation.",
    url: "https://amarillofenceco.com/book",
  },
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            It&apos;s Free
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Book a <span className="text-gold">Free Estimate</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Pick a time that works for you and we&apos;ll come out, take a look,
            and get you a quote — no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
