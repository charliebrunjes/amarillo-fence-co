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
  metadataBase: new URL("https://amarillofenceco.com"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        {/* Mobile click-to-call sticky button */}
        <a
          href="tel:+18065550000"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark shadow-lg md:hidden"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          Call Now — (806) 555-0000
        </a>
      </body>
    </html>
  );
}
