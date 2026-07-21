import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Fencing",
  description:
    "Commercial chain link, perimeter and security fencing, repair, and subcontract work for GCs and landscapers in Amarillo, TX and the Texas Panhandle.",
  alternates: {
    canonical: "https://amarillofenceco.com/commercial",
  },
  openGraph: {
    title: "Commercial Fencing in Amarillo, TX | Amarillo Fence Co.",
    description:
      "Commercial chain link, perimeter and security fencing, and subcontract work for GCs and landscapers across the Texas Panhandle.",
    url: "https://amarillofenceco.com/commercial",
  },
};

const services = [
  {
    icon: "⛓️",
    name: "Commercial Chain Link",
    desc: "8 ft and 10 ft heights, heavy-gauge fabric and commercial-grade posts built for perimeters and job sites.",
  },
  {
    icon: "🔒",
    name: "Perimeter & Security Fencing",
    desc: "Secure a new build, a lot, or a facility with fencing designed to keep the property line locked down.",
  },
  {
    icon: "⚡",
    name: "Repair & Storm Damage Response",
    desc: "Downed sections, bent posts, wind damage — we get commercial properties patched and secure fast.",
  },
  {
    icon: "🤝",
    name: "Subcontract Work",
    desc: "We work under general contractors and landscaping companies as a reliable fencing sub on commercial builds.",
  },
];

const whyUs = [
  {
    icon: "📍",
    title: "Locally Owned",
    desc: "Based in Amarillo. We know the Panhandle and the people building in it.",
  },
  {
    icon: "✅",
    title: "Insured",
    desc: "Fully insured for commercial job sites and general contractor requirements.",
  },
  {
    icon: "⏱️",
    title: "Fast Response",
    desc: "Storm damage or a tight build schedule — we move quickly when a job needs it.",
  },
  {
    icon: "🔧",
    title: "Sub or Direct",
    desc: "Comfortable working as a subcontractor under a GC or landscaper, or hired direct.",
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Texas Panhandle · Commercial & Contractor Work
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Commercial Fencing<br />
            <span className="text-gold">in Amarillo</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            We build and repair fencing for businesses, contractors, and
            landscapers across the Texas Panhandle — direct or as a
            subcontractor on your job.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/estimate"
              className="rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
            >
              Get a Commercial Quote
            </Link>
            <a
              href="tel:+18068912016"
              className="rounded-md border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-white hover:text-white"
            >
              Call (806) 891-2016
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/commercial-qt-fence-line.jpg"
            alt="Commercial chainlink fence line at QT, Amarillo TX."
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Recent work callout */}
      <section className="bg-[#F9F9F9] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-8 md:p-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Recent Work
            </p>
            <h2 className="font-oswald text-2xl font-bold text-dark md:text-3xl">
              QT Gas Station Perimeter — Amarillo, TX
            </h2>
            <p className="mt-4 leading-relaxed text-secondary">
              Chain link perimeter fencing for a new QT gas station build,
              subcontracted through Emerald Lawn &amp; Landscaping. Full
              perimeter run on a live commercial job site, on schedule and
              ready for handoff.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              What We Do
            </p>
            <h2 className="font-oswald text-4xl font-bold text-dark md:text-5xl">
              Commercial Services
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Why Us
            </p>
            <h2 className="font-oswald text-4xl font-bold md:text-5xl">
              Built for Commercial Jobs
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((p) => (
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

      {/* CTA */}
      <section className="bg-gold px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-oswald text-4xl font-bold text-dark md:text-5xl">
            Get a Commercial Quote
          </h2>
          <p className="mt-4 text-dark/70">
            Tell us about the job — new build, repair, or a subcontract bid —
            and we&apos;ll get back to you fast.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/estimate"
              className="inline-block rounded-md bg-dark px-10 py-4 font-semibold text-white transition-colors hover:bg-dark/80"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+18068912016"
              className="text-lg font-semibold text-dark hover:underline"
            >
              (806) 891-2016
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
