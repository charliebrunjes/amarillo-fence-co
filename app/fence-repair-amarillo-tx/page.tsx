import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fence Repair in Amarillo, TX",
  description:
    "Professional fence repair in Amarillo, TX. Storm damage, rotted posts, leaning sections, and gate repairs on all fence types. Fast, honest quotes from a local fence company.",
  openGraph: {
    title: "Fence Repair in Amarillo, TX | Amarillo Fence Co.",
    description:
      "We repair wood, chain link, vinyl, and metal fences across Amarillo. Storm damage, post replacement, gate repair, and more. Free estimates.",
    url: "https://amarillofenceco.com/fence-repair-amarillo-tx",
  },
};

const repairTypes = [
  "Post replacement and re-setting in concrete",
  "Individual panel and picket repair",
  "Storm and wind damage restoration",
  "Gate adjustment, rehang, and replacement",
  "Chain link fabric repair and replacement",
  "Same-material matching on all repairs",
];

export default function FenceRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Amarillo, TX
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Fence Repair<br />
            <span className="text-gold">in Amarillo, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Storm damage, rotted posts, leaning sections — we repair all fence types across
            Amarillo. Honest assessments, fair prices, free estimates.
          </p>
          <Link
            href="/estimate"
            className="mt-10 inline-block rounded-md bg-gold px-8 py-4 font-semibold text-dark transition-colors hover:bg-gold-hover"
          >
            Get a Free Repair Estimate
          </Link>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 leading-relaxed text-secondary">
              <p>
                Amarillo wind storms are hard on fences. A strong spring storm can take out a whole
                section overnight — panels blown down, posts snapped at the ground, gates knocked
                off their hinges. But damage doesn&apos;t have to mean a full replacement. In most cases,
                a targeted repair is the smarter and more cost-effective option, and we&apos;ll tell you
                honestly which one applies to your situation.
              </p>
              <p>
                We repair all fence types — wood, chain link, vinyl, and metal — across Amarillo and
                the surrounding Panhandle area.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Post Replacement</h2>
              <p>
                Post replacement is the most common repair we do. Posts rot at the ground line over
                time, heave from soil movement, or snap in high winds. We pull the damaged post,
                re-dig the hole to the proper depth, set a new post in concrete, and re-attach your
                existing fence panels. In most cases your fence looks as good as it did before the
                problem started.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Storm and Wind Damage</h2>
              <p>
                After a bad Panhandle storm, we&apos;ll come out to assess the full extent of the damage
                rather than just patching what&apos;s visible. Sometimes what looks like one blown-over
                section has post damage or undermined concrete that will cause more sections to fail
                if not addressed. We give you a complete repair plan and handle everything in a
                single visit where possible.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Gate Repair</h2>
              <p>
                Gates that sag, drag, won&apos;t latch, or have come off their hinges are usually a
                hinge or post problem rather than a gate problem. We adjust, rehang, or replace
                gates and their hardware so they swing and latch correctly. For gates where the frame
                itself has warped or failed, we build and hang a replacement that matches the
                existing fence.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Repair vs. Replace</h2>
              <p>
                We&apos;ll give you an honest assessment. Sometimes repair is clearly the right call —
                the fence is structurally sound and needs a section or a few posts addressed. Other
                times, especially with older wood fences where multiple posts have been rotting for
                years, a full replacement is the better long-term value. We&apos;ll tell you which is
                which and let you decide without any pressure.
              </p>

              <h2 className="font-oswald text-2xl font-bold text-dark">Insurance Claims</h2>
              <p>
                If your fence was damaged by a storm, your homeowner&apos;s insurance may cover the
                repair. We document damage thoroughly and can provide the written estimates and
                photos your insurance company needs to process a claim.
              </p>
            </div>

            {/* Repair types card */}
            <div className="rounded-xl border border-[#E5E5E5] bg-white p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Repairs We Handle
              </p>
              <ul className="space-y-3">
                {repairTypes.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-dark">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-[#E5E5E5] pt-6">
                <p className="text-sm text-secondary">
                  Dealing with storm damage?{" "}
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
            Need a Fence Repaired in Amarillo?
          </h2>
          <p className="mt-4 text-dark/70">
            Fill out the form and we&apos;ll come out to assess the damage and give you a straight
            repair quote — no obligation.
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
