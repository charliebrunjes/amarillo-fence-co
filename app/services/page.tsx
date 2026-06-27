import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fence Installation Services",
  description:
    "Wood, chain link, and vinyl fence installation, gate installation, and fence repair in Amarillo, TX. Licensed and insured. Free estimates for all Amarillo fence projects.",
  openGraph: {
    title: "Fence Installation Services | Amarillo Fence Co.",
    description:
      "Professional fence installation in Amarillo, TX. Wood, chain link, vinyl, gates, and repair. Free estimates.",
    url: "https://amarillofenceco.com/services",
  },
};

const services = [
  {
    id: "wood",
    name: "Wood Fence Installation",
    tagline: "Privacy · Picket · Custom Designs",
    description:
      "Nothing beats the warmth and character of a real wood fence. We build cedar and pine fences that complement your property and stand up to the Texas Panhandle wind and sun. Whether you want a tall privacy fence to block the neighbor's view, a classic picket fence in the front yard, or a custom board-on-board design — we've got you covered.",
    benefits: [
      "Privacy fences up to 8 feet tall",
      "Picket fence installation for front yards",
      "Board-on-board and dog-ear panel styles",
      "Cedar, pine, and treated lumber options",
      "Custom gate installation included",
      "All hardware and post concrete included",
    ],
    cta: "Get a Wood Fence Estimate",
  },
  {
    id: "chainlink",
    name: "Chain Link Fence Installation",
    tagline: "Residential · Commercial · Security",
    description:
      "Chain link is the workhorse of the fence world — durable, affordable, and nearly maintenance-free. We install residential and commercial chain link across Amarillo in multiple heights and gauges. Great for keeping kids and pets in, keeping unwanted visitors out, and securing commercial properties and job sites.",
    benefits: [
      "Residential 4 ft, 5 ft, and 6 ft heights",
      "Commercial-grade 8 ft and 10 ft available",
      "Galvanized and vinyl-coated options",
      "Privacy slat inserts available",
      "Swing and slide gate installation",
      "Fast installation — most jobs done in a day",
    ],
    cta: "Get a Chain Link Estimate",
  },
  {
    id: "vinyl",
    name: "Vinyl Fence Installation",
    tagline: "Low Maintenance · Durable · Clean Look",
    description:
      "Vinyl fencing gives you the look of a painted wood fence without the ongoing maintenance. No painting, no staining, no rotting posts — vinyl holds its color and shape year after year. Available in white, tan, and gray, it's a popular choice for Amarillo homeowners who want a sharp-looking fence without the upkeep.",
    benefits: [
      "Never needs painting or staining",
      "Resistant to rot, insects, and moisture",
      "White, tan, and gray color options",
      "Privacy and semi-privacy panel styles",
      "Picket and ranch rail styles available",
      "20+ year expected lifespan",
    ],
    cta: "Get a Vinyl Fence Estimate",
  },
  {
    id: "gates",
    name: "Gate Installation",
    tagline: "Automatic · Manual · Driveway Gates",
    description:
      "A fence is only as good as its gate. We install walk gates and driveway gates in wood, chain link, vinyl, and steel — manual and automatic. Whether you need a simple swing gate for a backyard or a heavy-duty automatic driveway gate for a commercial property, we'll build it right.",
    benefits: [
      "Single and double swing driveway gates",
      "Automatic gate openers and access control",
      "Walk gates in all fence materials",
      "Heavy-duty hinges and latches",
      "Custom widths for RV and boat access",
      "Commercial slide gates available",
    ],
    cta: "Get a Gate Estimate",
  },
  {
    id: "repair",
    name: "Fence Repair",
    tagline: "All Fence Types · Post Replacement · Panel Repair",
    description:
      "Storm damage, rotted posts, leaning sections, broken panels — we repair all of it. We work on wood, chain link, vinyl, and metal fences across Amarillo. Sometimes a section just needs a few new boards; sometimes it's a full post replacement. We'll assess the damage and give you an honest repair quote.",
    benefits: [
      "Post replacement and re-setting",
      "Individual panel and picket repair",
      "Storm and wind damage restoration",
      "Gate adjustment and rehang",
      "Chain link fabric repair and replacement",
      "Same materials matched to existing fence",
    ],
    cta: "Get a Repair Estimate",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-28 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            What We Do
          </p>
          <h1 className="font-oswald text-5xl font-bold leading-tight md:text-6xl">
            Fence Installation Services<br />
            <span className="text-gold">in Amarillo, TX</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            From wood privacy fences to commercial chain link, we install every
            type of fence in Amarillo and the surrounding Texas Panhandle.
            Licensed, insured, and backed by a quality guarantee.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`px-6 py-20 ${i % 2 === 0 ? "bg-white" : "bg-[#F9F9F9]"}`}
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Content */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  {service.tagline}
                </p>
                <h2 className="mt-3 font-oswald text-4xl font-bold text-dark">
                  {service.name}
                </h2>
                <p className="mt-5 leading-relaxed text-secondary">
                  {service.description}
                </p>
                <Link
                  href="/estimate"
                  className="mt-8 inline-block rounded-md bg-gold px-7 py-3 font-semibold text-dark transition-colors hover:bg-gold-hover"
                >
                  {service.cta}
                </Link>
              </div>

              {/* Benefits */}
              <div className="rounded-xl border border-[#E5E5E5] bg-white p-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                  What&apos;s Included
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-gold px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-oswald text-4xl font-bold text-dark md:text-5xl">
            Ready to Start Your Amarillo Fence Project?
          </h2>
          <p className="mt-4 text-dark/70">
            Tell us what you need and we&apos;ll come out for a free, no-pressure
            estimate. Most Amarillo jobs get a quote within 24 hours.
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
