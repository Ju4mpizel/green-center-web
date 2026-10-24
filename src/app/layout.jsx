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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/img/logo-mark.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Green Center Bolivia | Movilidad Eléctrica en Bolivia",
    description:
      "Venta de motos, bicimotos, trimotos solares, autos urbanos y montacargas eléctricos en Santa Cruz, Cochabamba y toda Bolivia.",
    url: siteUrl,
    siteName: "Green Center Bolivia",
    images: [
      {
        url: "/img/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Green Center Bolivia Logo",
      },
    ],
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Center Bolivia",
    description: "Movilidad Eléctrica en Bolivia",
    images: ["/img/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/logo.jpg`,
    image: `${siteConfig.url}/img/logo.jpg`,
    telephone: siteConfig.phoneFormatted,
    priceRange: siteConfig.priceRange,
    sameAs: [siteConfig.instagram],
    openingHours: siteConfig.openingHours,
    department: BRANCHES.map((b) => ({
      "@type": "LocalBusiness",
      name: `${siteConfig.name} - ${b.name}`,
      image: `${siteConfig.url}/img/logo.jpg`,
      hasMap: b.mapUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressLocality: b.city || "Santa Cruz de la Sierra",
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
