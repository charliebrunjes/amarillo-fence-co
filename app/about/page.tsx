import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Locally owned fence company in Amarillo, TX. We're your neighbors — we live here, work here, and take pride in every Amarillo fence we build.",
  openGraph: {
    title: "About Amarillo Fence Co.",
    description:
      "Locally owned and operated fence installation in Amarillo, TX. Your neighbors in the Texas Panhandle.",
    url: "https://amarillofenceco.com/about",
  },
};

const values = [
  {
    title: "Quality",
    description:
      "We don't cut corners. Every post is set in concrete. Every panel is level. Every gate swings right. We build fences the way we'd want our own fence built.",
  },
  {
    title: "Honesty",
    description:
      "You get a straight quote, no hidden fees, and no surprise charges at the end. If something comes up during the job, we tell you before we do it.",
  },
  {
    title: "Reliability",
    description:
      "We show up when we say we will, finish when we say we will, and leave your property cleaner than we found it. That's the commitment you get with every job.",
  },
];

const serviceAreas = [
  "Amarillo",
  "Canyon",
  "Bushland",
  "Tascosa",
  "Sunrise Shores",
  "Lake Tanglewood",
  "Wildorado",
  "Vega",
  "Adrian",
  "Claude",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-28 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Who We Are
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Amarillo&apos;s Local<br />
            <span className="text-gold">Fence Company</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Our Story
              </p>
              <h2 className="mt-3 font-oswald text-4xl font-bold text-dark">
                Built in Amarillo.<br />Built for Amarillo.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-secondary">
                <p>
                  Amarillo Fence Co. is locally owned and operated right here in
                  the Texas Panhandle. We&apos;re not a national franchise — we&apos;re your
                  neighbors. We live on the same streets, shop at the same stores,
                  and know what Amarillo properties need.
                </p>
                <p>
                  We started this company because we saw too many homeowners get
                  burned by out-of-town contractors who didn&apos;t know the local
                  soil, the local wind, or the local market. We do. And we stand
                  behind every fence we build with a quality guarantee.
                </p>
                <p>
                  Whether you need a privacy fence in a Wolflin home, a chain link
                  fence around a commercial property on Coulter, or a gate at a
                  ranch east of town — we handle it all.
                </p>
              </div>
              <Link
                href="/estimate"
                className="mt-8 inline-block rounded-md bg-gold px-7 py-3 font-semibold text-dark transition-colors hover:bg-gold-hover"
              >
                Get a Free Estimate
              </Link>
            </div>

            {/* Photo placeholder */}
            <div className="aspect-[4/3] rounded-xl bg-[#F0E8D8] flex flex-col items-center justify-center text-center p-8 border border-[#E5E5E5]">
              <svg className="h-16 w-16 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-4 text-sm font-semibold text-secondary">Owner / Team Photo</p>
              <p className="mt-1 text-xs text-secondary/60">Replace with real photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              How We Work
            </p>
            <h2 className="font-oswald text-4xl font-bold md:text-5xl">
              Our Values
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-oswald text-2xl font-bold text-gold">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Where We Work
          </p>
          <h2 className="mt-3 font-oswald text-4xl font-bold text-dark">
            Service Area
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-secondary">
            Based in Amarillo, we serve the entire Texas Panhandle. If you&apos;re
            within about an hour of Amarillo, we can almost certainly get to you.
            Give us a call and we&apos;ll confirm.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#E5E5E5] px-4 py-2 text-sm font-medium text-dark"
              >
                {area}
              </span>
            ))}
            <span className="rounded-full border border-gold/30 bg-gold/5 px-4 py-2 text-sm font-medium text-gold">
              + more surrounding areas
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-oswald text-4xl font-bold text-dark">
            Let&apos;s Talk About Your Fence
          </h2>
          <p className="mt-4 text-dark/70">
            Free estimates, honest quotes, and local people who stand behind
            their work. That&apos;s Amarillo Fence Co.
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
