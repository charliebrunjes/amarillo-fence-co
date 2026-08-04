import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Your free fence estimate request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EstimateReceivedPage() {
  return (
    <section className="bg-dark px-6 py-24 text-white">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
          <svg
            className="h-8 w-8 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Request Received
        </p>
        <h1 className="font-oswald text-4xl font-bold leading-tight md:text-5xl">
          Got it — we&apos;ll email you within 24 hours
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-white/60">
          We&apos;ll email you to confirm the details of your project and get
          your free in-home estimate scheduled.
        </p>

        <div className="mx-auto mt-10 max-w-sm rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="font-oswald text-lg font-bold text-gold">
            Need it faster?
          </p>
          <p className="mt-2 text-sm text-white/60">
            Call or text us and we&apos;ll get you taken care of directly.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+18068912016"
              className="rounded-md bg-gold px-6 py-3 font-semibold text-dark transition-colors hover:bg-gold-hover"
            >
              Call (806) 891-2016
            </a>
            <a
              href="sms:+18068912016"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white"
            >
              Text (806) 891-2016
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold text-white/50 transition-colors hover:text-gold"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
