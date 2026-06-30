import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gate Installation in Amarillo, TX",
  description:
    "Professional gate installation in Amarillo, TX. Driveway gates, walk gates, automatic gate openers, and custom sizes in wood, chain link, vinyl, and steel. Free estimates.",
  openGraph: {
    title: "Gate Installation in Amarillo, TX | Amarillo Fence Co.",
    description:
      "Walk gates, driveway gates, and automatic gate openers for Amarillo homes and businesses. Commercial slide gates available. Free estimates.",
    url: "https://amarillofenceco.com/gate-installation-amarillo-tx",
  },
};

const benefits = [
  "Walk gates in all fence materials",
  "Single and double swing driveway gates",
  "Automatic gate openers and access control",
  "Custom widths for RV, boat, and equipment access",
  "Commercial slide gates available",
  "Heavy-duty hinges and latches on every install",
];

export default function GateInstallationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amarillo, TX
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Gate Installation<br />
            <span className="text-gold">in Amarillo, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Walk gates, driveway gates, and automatic openers — installed right in wood, chain link,
            vinyl, and steel. Free estimates on every job.
          </p>
          <Link
            href="/estimate"
            className="mt-10 inline-block rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
          >
            Get a Free Gate Estimate
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 leading-relaxed text-secondary">
              <p>
                A fence is only as good as its gate. We install walk gates and driveway gates on
                new fence builds and as standalone replacements — in wood, chain link, vinyl, and
                steel. If an existing gate is causing problems on your property, we&apos;ll assess
                whether it needs adjustment, new hardware, or a full replacement and give you a
                straight answer.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Walk Gates</h2>
              <p>
                Standard walk gates for backyard access, side yard entry, and pool enclosures. We
                build them in every fence material and size them to fit the opening — typically 3 to
                4 feet wide for pedestrian access. All walk gates include commercial-grade hinges
                and a self-latching mechanism.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Driveway Gates</h2>
              <p>
                Single swing driveway gates are ideal for standard driveways and typically run
                10–12 feet wide. Double swing gates open from the center and are used on wider
                openings — larger driveways, RV access points, and boat storage areas. We build
                driveway gates in wood, steel, and vinyl and size them to fit whatever opening
                you have.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Automatic Gate Openers</h2>
              <p>
                We install automatic gate openers on swing driveway gates for homeowners who want
                remote, keypad, or app-controlled access. If you&apos;re pulling in and out of your
                driveway multiple times a day, an automatic opener pays for itself quickly in
                convenience. We work with several opener brands and recommend the right unit
                based on gate size, weight, and expected use frequency.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Custom Widths and Commercial Gates</h2>
              <p>
                Not every opening is standard. If you need clearance for farm equipment, an oversized
                driveway, or commercial vehicle access — we custom-build gates to the exact dimensions
                you need. For commercial properties and high-traffic applications that can&apos;t
                accommodate a swing gate, we install track-mounted slide gates that roll to the side
                to open, requiring no swing clearance in front of the opening.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Hardware That Lasts</h2>
              <p>
                The biggest reason gates fail prematurely is cheap hardware — flimsy hinges that pull
                out of posts under the weight of the gate, latches that loosen with repeated use,
                springs that fatigue within a couple of seasons. We install commercial-grade hinges
                and latches rated for the size and weight of each gate. For larger driveway gates,
                we use adjustable hinges that allow for fine-tuning after installation and seasonal
                adjustment as the ground shifts.
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
            Ready for a Gate Estimate?
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
