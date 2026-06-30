import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chain Link Fence Installation in Amarillo, TX",
  description:
    "Residential and commercial chain link fence installation in Amarillo, TX. Multiple heights, galvanized and vinyl-coated options. Free estimates from a local Amarillo fence company.",
  openGraph: {
    title: "Chain Link Fence Installation in Amarillo, TX | Amarillo Fence Co.",
    description:
      "Durable, low-maintenance chain link fencing for homes and businesses in Amarillo, TX. Fast installation, free estimates.",
    url: "https://amarillofenceco.com/chain-link-fence-amarillo-tx",
  },
};

const benefits = [
  "Residential heights: 4 ft, 5 ft, and 6 ft",
  "Commercial heights: 8 ft and 10 ft available",
  "Galvanized and vinyl-coated options",
  "Privacy slat inserts available",
  "Swing and slide gate installation",
  "Most residential jobs completed in one day",
];

export default function ChainLinkFencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amarillo, TX
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Chain Link Fence Installation<br />
            <span className="text-gold">in Amarillo, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Durable, affordable chain link for residential and commercial properties across
            Amarillo and the Texas Panhandle. Free estimates on every project.
          </p>
          <Link
            href="/estimate"
            className="mt-10 inline-block rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
          >
            Get a Free Chain Link Estimate
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 leading-relaxed text-secondary">
              <p>
                Chain link is one of the most practical fence choices for Amarillo homeowners and
                businesses. It&apos;s durable, low-maintenance, and far more affordable than wood or
                vinyl for larger perimeters. If you need to secure a yard, contain pets and kids,
                enclose a commercial property, or build a boundary fence that will take decades of
                West Texas weather without flinching — chain link is worth a serious look.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Heights and Gauges</h2>
              <p>
                We install chain link in standard residential heights of 4, 5, and 6 feet — enough
                for most backyard enclosures and pet containment applications. For commercial
                properties, school grounds, and high-security applications, we install 8-foot and
                10-foot chain link using heavier 9-gauge fabric and commercial-grade posts.
              </p>
              <p>
                Standard galvanized chain link is the most affordable option and the right choice for
                most applications. If you want a cleaner look that blends into landscaping, we also
                install vinyl-coated chain link in black and green. The coating adds longevity in
                high-moisture areas and significantly improves the appearance at a modest cost increase.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Why Chain Link Handles Amarillo Wind</h2>
              <p>
                Amarillo sees sustained winds of 20–30 mph on a regular basis, with gusts during spring
                storms that push considerably higher. Chain link actually handles wind load better than
                solid fencing because air passes through the fabric rather than pushing against a flat
                panel. This means less stress on posts and less risk of sections blowing over in severe
                weather — a genuine advantage in the Texas Panhandle.
              </p>
              <p>
                Galvanized chain link is also essentially maintenance-free. Unlike wood, it won&apos;t
                rot or need periodic staining. Unlike vinyl panels, it&apos;s impact-resistant and won&apos;t
                crack in extreme temperatures. For homeowners and property managers who want security
                without upkeep, it&apos;s the lowest-maintenance fence material available.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Privacy Slats and Add-Ons</h2>
              <p>
                Standard chain link is open — good for security but not for privacy. If you want some
                visual screening without moving to a solid fence, we can weave privacy slats through
                the fabric. Slats come in several colors and can block up to 90% of visibility through
                the fence while still allowing airflow. It&apos;s a popular upgrade for backyard chain
                link where you want containment plus a bit of privacy.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Gates and Access</h2>
              <p>
                Every chain link project includes gate installation. For residential yards, that&apos;s
                typically a standard swing gate on one or both sides. For commercial and agricultural
                applications, we install double-swing and slide gates wide enough for vehicles,
                trailers, and equipment.
              </p>
            </div>

            {/* Benefits card */}
            <div className="rounded-xl border border-[#E5E5E5] bg-white p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                What&apos;s Included
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-dark">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-[#E5E5E5] pt-6">
                <p className="text-sm text-secondary">
                  Questions before you request an estimate?{" "}
                  <a href="tel:+18068912016" className="font-semibold text-dark hover:text-gold">
                    Call (806) 891-2016
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-oswald text-4xl font-bold text-dark md:text-5xl">
            Ready for a Chain Link Estimate?
          </h2>
          <p className="mt-4 text-dark/70">
            Fill out the form and we&apos;ll come out to your Amarillo property within 24 hours
            for a free, no-pressure quote.
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
