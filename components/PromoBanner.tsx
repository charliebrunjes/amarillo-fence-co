import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="w-full bg-dark border-b border-white/10 px-6 py-3">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gold">
          🎉 Limited Time Special &mdash; Broken Pickets or Gate Won&apos;t Open Right? Get It Fixed
          Starting at{" "}
          <strong className="text-base font-bold">$50</strong>
          {" "}&middot; Valid Until August 1st
        </p>
        <Link
          href="/estimate"
          className="shrink-0 self-start rounded-md border border-gold px-4 py-1.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-dark sm:self-auto"
        >
          Get the Deal
        </Link>
      </div>
    </div>
  );
}
