// src/components/sections/Gallery.jsx
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "/img/variados/superbike.webp",
    alt: "Bicimoto eléctrica en exhibición",
  },
  { src: "/img/variados/scooter.webp", alt: "Scooter eléctrica urbana" },
  {
    src: "/img/variados/trimoto_naranja.webp",
    alt: "Trimoto eléctrica con asientos confort",
  },
  {
    src: "/img/variados/miniauto.webp",
    alt: "Mini auto eléctrico con techo solar",
  },
  {
    src: "/img/variados/mtb.webp",
    alt: "Bicicleta de montaña con asistencia eléctrica",
  },
  {
    src: "/img/variados/fatred.webp",
    alt: "Bicicleta eléctrica Fat Bike con llantas anchas",
  },
  { src: "/img/variados/trimoto_roja.webp", alt: "Trimoto eléctrica urbana" },
  {
    src: "/img/variados/motocarro.webp",
    alt: "Motocarro eléctrico de carga pesada",
  },
];

export default function Gallery() {
  return (
    <section
      className="overflow-hidden pt-[clamp(60px,8vw,110px)] select-none pointer-events-none"
      aria-label="Galería de vehículos"
    >
      <div className="flex gap-4 w-max mb-4 animate-[marquee_45s_linear_infinite]">
        {[...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, i) => (
          <div
            key={i}
            className="relative h-[clamp(170px,20vw,280px)] aspect-square rounded-[28px] overflow-hidden bg-salvia shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 w-max animate-[marquee-rev_55s_linear_infinite]">
        {[...GALLERY_ITEMS, ...GALLERY_ITEMS].reverse().map((item, i) => (
          <div
            key={i}
            className="relative h-[clamp(170px,20vw,280px)] aspect-square rounded-[28px] overflow-hidden bg-salvia shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
