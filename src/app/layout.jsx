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

const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title:
    "Green Center Bolivia | Movilidad Eléctrica en Santa Cruz y Cochabamba",
  description:
    "Vehículos eléctricos en Bolivia. Motos, bicicletas, trimotos y autos eléctricos para moverte con ahorro y estilo.",
  robots: {
    index: isIndexable,
    follow: isIndexable,
  },
  openGraph: {
    title: "Green Center Bolivia | Movilidad Eléctrica",
    description: "Motos, bicicletas, trimotos y autos eléctricos en Bolivia.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_BO",
    type: "website",
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
