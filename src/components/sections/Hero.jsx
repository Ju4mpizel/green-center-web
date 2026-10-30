// src/components/sections/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Button from "@/components/ui/Button";

const HERO_ITEMS = [
  {
    img: "/img/motos/moto-valkiria.webp",
    n: "Valkiria Eléctrica",
    s: "2.000 W · hasta 70 km/h · 72V 32Ah",
  },
  {
    img: "/img/bicicletas/bicimoto-tornado.webp",
    n: "Bicimoto Tornado",
    s: "800 W · Estilo Cafe Racer · NFC",
  },
  {
    img: "/img/trimotos/trimoto-familiar.webp",
    n: "Trimoto Familiar Solar",
    s: "Techo rígido · Panel solar integrado",
  },
  {
    img: "/img/autos/sky-car.webp",
    n: "Sky Car Eléctrico",
    s: "4 Puertas · Cabina cerrada con panel solar",
  },
  {
    img: "/img/maquinaria/montacargas-ironmax-2t.webp",
    n: "Montacargas Iron Max",
    s: "5.000 W · Elevación 3m · Carga pesada",
  },
];

const EASE_ORIGINAL = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const totalItems = isMobile ? 4 : HERO_ITEMS.length;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % totalItems);
    }, 4600);
    return () => clearInterval(interval);
  }, [isPaused, isMobile]);

  return (
    <section
      id="inicio"
      className="relative pt-[84px] sm:pt-[130px] pb-10 sm:pb-[70px] overflow-hidden bg-[radial-gradient(900px_500px_at_85%_10%,rgba(191,217,166,0.55),transparent_60%),radial-gradient(700px_500px_at_0%_70%,rgba(220,230,214,0.9),transparent_60%)]"
    >
      {/* Rayos geométricos tenues flotantes */}
      <div className="absolute left-[5%] top-[18%] w-[48px] h-[48px] text-hoja opacity-15 pointer-events-none hidden md:block rotate-[-15deg]">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
      <div className="absolute right-[8%] top-[30%] w-[40px] h-[40px] text-hoja opacity-15 pointer-events-none hidden md:block rotate-[20deg]">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>

      {/* Marca de agua sutil al fondo derecho */}
      <div
        className="pointer-events-none absolute -right-28 top-10 w-[560px] h-[560px] opacity-[0.05] hidden md:block select-none"
        aria-hidden="true"
      >
        <Image
          src="/img/logo-mark.png"
          alt=""
          fill
          sizes="560px"
          className="object-contain"
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)] relative z-10">
        {/* Chip de marca */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_ORIGINAL }}
          className="flex justify-center mb-3 sm:mb-5"
        >
          <div className="inline-flex items-center gap-2 pl-2 pr-3.5 sm:pr-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-bosque/10 shadow-xs">
            <span className="relative w-6 h-6 sm:w-7 sm:h-7 shrink-0">
              <Image
                src="/img/logo-mark.png"
                alt="Green Center"
                fill
                sizes="28px"
                className="object-contain"
                priority
              />
            </span>
            <span className="text-[12px] sm:text-[13.5px] font-semibold text-tinta tracking-tight flex items-center gap-1.5">
              Green Center Bolivia
              <Zap className="w-3.5 h-3.5 text-hoja fill-current" />
              <span className="hidden sm:inline font-medium text-musgo">
                · Movilidad 100% eléctrica
              </span>
            </span>
          </div>
        </motion.div>

        {/* Título Principal animado */}
        <h1
          aria-label="Movilidad eléctrica hecha para Bolivia"
          className="text-center font-display font-bold text-[clamp(32px,8vw,120px)] tracking-[-0.05em] leading-[1.02] sm:leading-[0.95] text-tinta"
        >
          <span className="block sm:whitespace-nowrap">
            <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.05, ease: EASE_ORIGINAL }}
                className="inline-block"
              >
                Movilidad
              </motion.span>
            </span>

            {/* Píldora 1: Valkiria */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "1.45em" }}
              transition={{ duration: 1.3, delay: 0.7, ease: EASE_ORIGINAL }}
              className="inline-block h-[0.74em] rounded-full overflow-hidden align-[-0.03em] mx-[0.06em] bg-salvia relative"
            >
              <div className="w-full h-full relative">
                <Image
                  src="/img/motos/moto-valkiria.webp"
                  alt="Moto eléctrica Valkiria"
                  fill
                  sizes="100px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.span>

            <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.15, ease: EASE_ORIGINAL }}
                className="inline-block"
              >
                eléctrica
              </motion.span>
            </span>
          </span>

          <span className="block sm:whitespace-nowrap mt-0.5 sm:mt-0">
            <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE_ORIGINAL }}
                className="inline-block"
              >
                hecha
              </motion.span>
            </span>{" "}
            <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.32, ease: EASE_ORIGINAL }}
                className="inline-block"
              >
                para
              </motion.span>
            </span>
            {/* Píldora 2: Bicimoto Tornado */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "1.45em" }}
              transition={{ duration: 1.3, delay: 0.95, ease: EASE_ORIGINAL }}
              className="inline-block h-[0.74em] rounded-full overflow-hidden align-[-0.03em] mx-[0.06em] bg-salvia relative"
            >
              <div className="w-full h-full relative">
                <Image
                  src="/img/bicicletas/bicimoto-tornado.webp"
                  alt="Bicimoto eléctrica Tornado"
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
            </motion.span>
            <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
              <motion.span
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 0.42, ease: EASE_ORIGINAL }}
                className="inline-block"
              >
                Bolivia.
              </motion.span>
            </span>
          </span>
        </h1>

        {/* Bajada y botones */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mt-4 sm:mt-7">
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE_ORIGINAL }}
            className="text-musgo text-[14px] sm:text-lg max-w-[540px] leading-relaxed mx-auto px-2"
          >
            Motos, bicimotos, trimotos con panel solar, autos urbanos y
            montacargas industriales. Importamos y enviamos a todo el país.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE_ORIGINAL }}
            className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full flex-wrap"
          >
            <Button href="#catalogo" variant="bosque">
              Ver catálogo
            </Button>
            <Button href="#ahorro" variant="ghost">
              Calcula tu ahorro
            </Button>
          </motion.div>
        </div>

        {/* Galería de Arcos de Alto Rendimiento */}
        <div
          className="flex gap-2 sm:gap-3.5 h-[320px] sm:h-[min(64vh,540px)] mt-6 sm:mt-12 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {HERO_ITEMS.map((item, index) => {
            const isActive = active === index;
            return (
              <article
                key={item.n}
                onClick={() => setActive(index)}
                style={{
                  flex: isActive ? (isMobile ? 3 : 3.4) : 1,
                  transition: "flex 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  willChange: "flex",
                }}
                className={`relative rounded-[50%_50%_20px_20px_/_34%_34%_20px_20px] sm:rounded-[50%_50%_28px_28px_/_34%_34%_28px_28px] overflow-hidden cursor-pointer bg-salvia transform-gpu ${
                  index === 4 ? "hidden sm:block" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.n}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1200px) 40vw, 30vw"
                  className="object-cover transform-gpu pointer-events-none"
                  priority={index === 0}
                />

                {/* Sombra inferior suave con fade por opacidad pura (acelerado por GPU) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bosque/90 transition-opacity duration-300 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Número de tarjeta */}
                <span className="absolute top-3 sm:top-[22px] left-1/2 -translate-x-1/2 z-10 w-6.5 h-6.5 sm:w-[34px] sm:h-[34px] rounded-full bg-white/90 text-tinta flex items-center justify-center font-display font-bold text-[11px] sm:text-[13px] shadow-xs pointer-events-none">
                  {index + 1}
                </span>

                {/* Textos con transición de opacidad nativa en CSS */}
                <div
                  className={`absolute left-3 right-3 sm:left-6 sm:right-6 bottom-3 sm:bottom-[22px] z-10 text-white pointer-events-none transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <b className="block font-display text-[15px] sm:text-[clamp(20px,2.4vw,32px)] tracking-[-0.03em] leading-tight line-clamp-1">
                    {item.n}
                  </b>
                  <span className="text-[11px] sm:text-sm text-white/85 line-clamp-1">
                    {item.s}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Líneas de progreso */}
        <div className="flex gap-1.5 sm:gap-2 mt-3.5">
          {HERO_ITEMS.map((_, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`flex-1 h-[2.5px] sm:h-[3px] rounded-full bg-tinta/[0.12] overflow-hidden cursor-pointer ${
                index === 4 ? "hidden sm:block" : ""
              }`}
            >
              <div
                className={`h-full bg-hoja origin-left transition-transform duration-200 ${
                  active === index
                    ? "w-full animate-[progress_4.6s_linear]"
                    : index < active
                      ? "scale-x-100 w-full"
                      : "scale-x-0 w-full"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
