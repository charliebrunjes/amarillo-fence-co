import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vinyl Fence Installation in Amarillo, TX",
  description:
    "Low-maintenance vinyl fence installation in Amarillo, TX. Privacy fences, picket fences, and ranch rail styles in white, tan, and gray. Free estimates from a local fence company.",
  openGraph: {
    title: "Vinyl Fence Installation in Amarillo, TX | Amarillo Fence Co.",
    description:
      "UV-stabilized vinyl fencing for Amarillo homeowners. No painting, no staining, no rotting posts. Free estimates from Amarillo Fence Co.",
    url: "https://amarillofenceco.com/vinyl-fence-installation-amarillo-tx",
  },
};

const benefits = [
  "Never needs painting or staining",
  "UV-stabilized for West Texas sun",
  "Resistant to rot, insects, and moisture",
  "White, tan, and gray color options",
  "Privacy, semi-privacy, picket, and ranch rail styles",
  "20+ year expected lifespan",
];

export default function VinylFencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amarillo, TX
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Vinyl Fence Installation<br />
            <span className="text-gold">in Amarillo, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            The clean look of a painted wood fence without the ongoing maintenance. No painting,
            no rotting posts, no annual upkeep. Free estimates on every project.
          </p>
          <Link
            href="/estimate"
            className="mt-10 inline-block rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
          >
            Get a Free Vinyl Fence Estimate
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 leading-relaxed text-secondary">
              <p>
                Vinyl fencing is the choice for Amarillo homeowners who want the look of a painted
                wood fence without the ongoing work of maintaining one. Once it&apos;s installed, vinyl
                doesn&apos;t rot, it doesn&apos;t need painting, and it doesn&apos;t fade the way painted wood
                does under constant Texas Panhandle sun. It&apos;s a long-term investment that keeps
                looking good with almost no effort.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Styles We Install</h2>
              <p>
                We offer several vinyl styles to match different property types and preferences.
                Privacy panels in 6-foot and 8-foot heights are the most popular choice for Amarillo
                backyards — solid panels block all sightlines and come in white, tan, and gray.
                Semi-privacy panels have small gaps between boards for a more open feel while still
                providing screening. For front yards, vinyl picket fences give you the classic look
                without ever needing a coat of paint. Ranch rail styles in two-rail and three-rail
                configurations work well for larger properties and agricultural applications where
                containment matters more than privacy.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Built for the Texas Panhandle Climate</h2>
              <p>
                Amarillo sees intense UV exposure year-round — more than most of the country — and
                low-quality vinyl fencing can fade, chalk, or become brittle over time in these
                conditions. The vinyl we install is UV-stabilized specifically for high-sun environments
                like West Texas. It won&apos;t discolor, chalk, or crack from UV exposure the way cheaper
                imported materials can.
              </p>
              <p>
                Vinyl is also moisture-resistant, which matters more in Amarillo than people expect.
                Even in a relatively dry climate, irrigation systems, rain events, and seasonal soil
                moisture can deteriorate wood posts over years. Vinyl posts and rails are unaffected
                by moisture and won&apos;t heave or rot at the ground line the way untreated wood can.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">No Painting. No Staining. No Rotting Posts.</h2>
              <p>
                That&apos;s the core appeal. A cedar fence looks great when it&apos;s new, but in Amarillo&apos;s
                climate it&apos;ll need treatment within a few years and regular maintenance after that —
                staining, board replacement, post repair. Vinyl eliminates that maintenance cycle
                entirely. An occasional rinse with a garden hose is all the upkeep it needs.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Cost vs. Wood Over Time</h2>
              <p>
                Vinyl typically costs more upfront than a comparable wood fence. But when you factor
                in no staining, no painting, no board or post replacement, and a 20+ year lifespan
                with minimal maintenance — the total cost of ownership often comes out in vinyl&apos;s
                favor. We&apos;ll give you honest numbers on both options so you can decide what makes
                sense for your property and budget.
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
            Ready for a Vinyl Fence Estimate?
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
