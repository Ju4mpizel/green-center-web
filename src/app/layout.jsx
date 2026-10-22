// src/app/layout.jsx
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { BRANCHES } from "@/data/branches";
import Providers from "@/components/Providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://greencenterbolivia.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Green Center Bolivia | Movilidad Eléctrica en Bolivia",
  description:
    "Venta de motos, bicimotos, trimotos solares, autos urbanos y montacargas eléctricos en Santa Cruz, Cochabamba y toda Bolivia.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    department: BRANCHES.filter((b) => !b.isNew).map((b) => ({
      "@type": "LocalBusiness",
      name: `${siteConfig.name} - ${b.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: "Santa Cruz de la Sierra",
        addressCountry: "BO",
      },
    })),
  };

  return (
    <html lang="es" className={`${bricolage.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
