// src/components/sections/Gallery.jsx
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "/img/bicicletas/superbike.jpg",
    alt: "Bici moto eléctrica Super Bike en exhibición",
  },
  { src: "/img/motos/scooter.jpg", alt: "Scooter eléctrica urbana clásica" },
  {
    src: "/img/trimotos/trimoto_naranja.jpg",
    alt: "Trimoto eléctrica de pasajeros color naranja",
  },
  {
    src: "/img/autos/miniauto.jpg",
    alt: "Mini auto eléctrico con techo solar para ciudad",
  },
  {
    src: "/img/bicicletas/mtb.jpg",
    alt: "Bicicleta de montaña eléctrica con batería integrada",
  },
  {
    src: "/img/bicicletas/fatred.jpg",
    alt: "Bicicleta eléctrica Fat Bike con llantas anchas todo terreno",
  },
  {
    src: "/img/trimotos/trimoto_roja.jpg",
    alt: "Trimoto eléctrica color rojo con asiento confortable",
  },
  {
    src: "/img/trimotos/motocarro.jpg",
    alt: "Motocarro eléctrico de carga pesada con tolva trasera",
  },
];

export default function Gallery() {
  return (
    <section
      className="overflow-hidden pt-[clamp(60px,8vw,110px)] select-none pointer-events-none"
      aria-label="Galería de vehículos"
    >
      {/* Fila 1: Hacia la izquierda */}
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

      {/* Fila 2: En sentido inverso */}
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
