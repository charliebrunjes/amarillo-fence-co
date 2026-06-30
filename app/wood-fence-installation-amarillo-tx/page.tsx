import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wood Fence Installation in Amarillo, TX",
  description:
    "Expert wood fence installation in Amarillo, TX. Privacy fences, picket fences, and custom cedar designs built to handle the Texas Panhandle climate. Free estimates.",
  openGraph: {
    title: "Wood Fence Installation in Amarillo, TX | Amarillo Fence Co.",
    description:
      "Cedar and pine privacy fences, picket fences, and custom wood fence designs in Amarillo, TX. Free estimates from a local, licensed fence company.",
    url: "https://amarillofenceco.com/wood-fence-installation-amarillo-tx",
  },
};

const benefits = [
  "Privacy fences up to 8 feet tall",
  "Board-on-board and dog-ear panel styles",
  "Cedar and pressure-treated pine options",
  "Posts set in concrete for wind resistance",
  "Picket fences for front yards",
  "Custom gate installation included",
];

export default function WoodFencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amarillo, TX
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Wood Fence Installation<br />
            <span className="text-gold">in Amarillo, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Locally built cedar and pine fences designed for the Texas Panhandle.
            Privacy fences, picket fences, and custom designs — free estimates on every job.
          </p>
          <Link
            href="/estimate"
            className="mt-10 inline-block rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
          >
            Get a Free Wood Fence Estimate
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 leading-relaxed text-secondary">
              <p>
                Wood fencing is the most popular choice for Amarillo homeowners who want privacy,
                curb appeal, and the warm, natural look that vinyl and chain link can&apos;t match.
                Whether you&apos;re enclosing a backyard, adding a front-yard picket fence, or building
                a full privacy fence around your property, we install wood fences that look great
                and hold up in the Texas Panhandle.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Styles We Build</h2>
              <p>
                We install several styles to fit different property types and goals. Board-on-board
                privacy fences are the most popular choice for Amarillo backyards — overlapping boards
                block sightlines completely and look clean from both sides. Dog-ear panel fences offer
                a classic look in 4, 5, 6, and 8-foot heights. For front yards, wood picket fences
                provide a traditional appearance that complements most homes in the area. If you have
                a specific height, layout, or custom design in mind, we can build to spec.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Built for West Texas Weather</h2>
              <p>
                Amarillo&apos;s climate is tough on wood fences. Sustained winds of 20–30 mph are routine,
                and spring storms can push significantly harder. Intense sun and wide temperature swings
                between seasons can dry out boards, warp rails, and loosen posts faster than in more
                temperate climates.
              </p>
              <p>
                We build our wood fences to handle it. Posts are set in concrete at a minimum of 30
                inches deep to handle the wind loads common in the Panhandle. We prefer cedar as our
                primary material — it&apos;s naturally rot-resistant, holds up better in arid climates
                than pine, and takes stain well when you&apos;re ready to maintain it. All ground-contact
                posts use pressure-treated lumber, and we size boards and spacing to allow for the
                natural expansion and contraction that comes with dramatic seasonal temperature changes.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Privacy Fence Heights</h2>
              <p>
                We build wood fences up to 8 feet tall. For most residential applications in Amarillo,
                6 feet is standard and provides full privacy from the street and neighbors. If you want
                extra height — whether to block wind, buffer noise from a nearby road, or simply prefer
                the added privacy — we&apos;ll build to whatever height makes sense for your lot and local
                ordinances.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Free Estimates on Every Job</h2>
              <p>
                We don&apos;t do estimates over the phone. We come to your property, walk the perimeter,
                check the grade, look at any existing fence, and give you a straight quote. Most
                Amarillo fence jobs get a written estimate within 24 hours of our visit.
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
            Ready for a Wood Fence Estimate?
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
