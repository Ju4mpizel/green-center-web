import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
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

export const metadata = {
  title: "Green Center Bolivia | Movilidad Eléctrica",
  description:
    "Motos, bicicletas, trimotos y autos eléctricos en Bolivia. Importadores directos con envíos a todo el país y sucursales en Santa Cruz y Cochabamba.",
  openGraph: {
    title: "Green Center Bolivia | Movilidad Eléctrica",
    description:
      "Catálogo oficial de vehículos y bicicletas eléctricas en Bolivia.",
    url: "https://greencenterbo.com",
    siteName: "Green Center Bolivia",
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${hanken.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
