import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amarillofenceco.com"),
  title: {
    template: "%s | Amarillo Fence Co. — Amarillo, TX",
    default: "Amarillo Fence Co. — Amarillo, TX",
  },
  description:
    "Amarillo's most trusted fence company. Wood, chain link, and vinyl fence installation, gate installation, fence repair, and free estimates. Serving Amarillo and the Texas Panhandle.",
  openGraph: {
    siteName: "Amarillo Fence Co.",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Amarillo Fence Co.",
  description:
    "Licensed fence installation company serving Amarillo and the Texas Panhandle. Wood, chain link, vinyl, gate installation, and fence repair.",
  url: "https://amarillofenceco.com",
  telephone: "+1-806-891-2016",
  email: "charlie@amarillofenceco.com",
  foundingDate: "2021",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[STREET NUMBER] SW 15th Ave", // ← confirm exact street number before deploying
    addressLocality: "Amarillo",
    addressRegion: "TX",
    postalCode: "79106",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.2219971,
    longitude: -101.8312969,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Amarillo",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    { "@type": "AdministrativeArea", name: "Texas Panhandle" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fence Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chain Link Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Repair" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Mobile click-to-call sticky button */}
        <a
          href="tel:+18068912016"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark shadow-lg md:hidden"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          Call Now — (806) 891-2016
        </a>
      </body>
    </html>
  );
}
