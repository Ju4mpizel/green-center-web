// src/components/sections/Gallery.jsx
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/img/superbike.jpg",
    "/img/scooter.jpg",
    "/img/trimoto_naranja.jpg",
    "/img/miniauto.jpg",
    "/img/mtb.jpg",
    "/img/fatred.jpg",
    "/img/trimoto_roja.jpg",
    "/img/motocarro.jpg",
  ];

  return (
    <section
      className="overflow-hidden pt-[clamp(60px,8vw,110px)] select-none pointer-events-none"
      aria-label="Galería"
    >
      {/* Fila 1: Hacia la izquierda */}
      <div className="flex gap-4 w-max mb-4 animate-[marquee_45s_linear_infinite]">
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="relative h-[clamp(170px,20vw,280px)] aspect-square rounded-[28px] overflow-hidden bg-salvia shadow-sm"
          >
            <Image
              src={src}
              alt="Galería"
              fill
              sizes="280px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fila 2: En sentido inverso */}
      <div className="flex gap-4 w-max animate-[marquee-rev_55s_linear_infinite]">
        {[...images, ...images].reverse().map((src, i) => (
          <div
            key={i}
            className="relative h-[clamp(170px,20vw,280px)] aspect-square rounded-[28px] overflow-hidden bg-salvia shadow-sm"
          >
            <Image
              src={src}
              alt="Galería"
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
