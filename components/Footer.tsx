import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-oswald text-xl font-bold text-white">
              Amarillo <span className="text-gold">Fence Co.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Locally owned and operated fence installation company serving
              Amarillo and the Texas Panhandle. Licensed, insured, and built on
              reputation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              {[
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["About", "/about"],
                ["Free Estimate", "/estimate"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service pages */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Our Services
            </p>
            <ul className="space-y-2 text-sm">
              {[
                ["Wood Fence", "/wood-fence-installation-amarillo-tx"],
                ["Chain Link Fence", "/chain-link-fence-amarillo-tx"],
                ["Vinyl Fence", "/vinyl-fence-installation-amarillo-tx"],
                ["Fence Repair", "/fence-repair-amarillo-tx"],
                ["Gate Installation", "/gate-installation-amarillo-tx"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+18068912016" className="transition-colors hover:text-gold">
                  (806) 891-2016
                </a>
              </li>
              <li>
                <a href="mailto:charlie@amarillofenceco.com" className="transition-colors hover:text-gold">
                  charlie@amarillofenceco.com
                </a>
              </li>
              <li className="text-white/50">
                Amarillo &amp; surrounding<br />Texas Panhandle
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Amarillo Fence Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
