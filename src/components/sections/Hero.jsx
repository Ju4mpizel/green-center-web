// src/components/sections/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const HERO_ITEMS = [
  {
    img: "/img/motos/moto-valkiria.jpg",
    n: "Valkiria Eléctrica",
    s: "2.000 W · hasta 70 km/h · 72V 32Ah",
  },
  {
    img: "/img/bicicletas/bicimoto-tornado.jpg",
    n: "Bicimoto Tornado",
    s: "800 W · Estilo Cafe Racer · NFC",
  },
  {
    img: "/img/trimotos/trimoto-familiar.jpg",
    n: "Trimoto Familiar Solar",
    s: "Techo rígido · Panel solar integrado",
  },
  {
    img: "/img/autos/sky-car.jpg",
    n: "Sky Car Eléctrico",
    s: "4 Puertas · Cabina cerrada con panel solar",
  },
  {
    img: "/img/maquinaria/montacargas-ironmax-2t.jpg",
    n: "Montacargas Iron Max",
    s: "5.000 W · Elevación 3m · Carga pesada",
  },
];

const EASE_ORIGINAL = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 4600);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="inicio"
      className="relative pt-[90px] sm:pt-[135px] pb-10 sm:pb-[70px] overflow-hidden bg-[radial-gradient(900px_500px_at_85%_10%,rgba(191,217,166,0.55),transparent_60%),radial-gradient(700px_500px_at_0%_70%,rgba(220,230,214,0.9),transparent_60%)]"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* LOGO REDONDEADO DISCRETO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_ORIGINAL }}
          className="flex justify-center mb-3 sm:mb-5"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-xs border border-bosque/10 bg-white">
            <Image
              src="/img/logo.jpg"
              alt="Green Center Bolivia"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
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
              <motion.div
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.7, ease: EASE_ORIGINAL }}
                className="w-full h-full relative"
              >
                <Image
                  src="/img/motos/moto-valkiria.jpg"
                  alt="Moto eléctrica Valkiria"
                  fill
                  sizes="100px"
                  className="object-cover"
                  priority
                />
              </motion.div>
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
              <motion.div
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, delay: 0.95, ease: EASE_ORIGINAL }}
                className="w-full h-full relative"
              >
                <Image
                  src="/img/bicicletas/bicimoto-tornado.jpg"
                  alt="Bicimoto eléctrica Tornado"
                  fill
                  sizes="100px"
                  className="object-cover"
                  priority
                />
              </motion.div>
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

        {/* BAJADA Y BOTONES */}
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

        {/* GALERÍA DE ARCOS INTERACTIVOS */}
        <div
          className="flex gap-2 sm:gap-3.5 h-[320px] sm:h-[min(64vh,540px)] mt-6 sm:mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {HERO_ITEMS.map((item, index) => {
            const isActive = active === index;
            return (
              <motion.article
                key={item.n}
                onClick={() => setActive(index)}
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{
                  duration: 1.4,
                  delay: 0.5 + index * 0.12,
                  ease: EASE_ORIGINAL,
                }}
                className={`relative rounded-[50%_50%_20px_20px_/_34%_34%_20px_20px] sm:rounded-[50%_50%_28px_28px_/_34%_34%_28px_28px] overflow-hidden cursor-pointer bg-salvia transition-[flex] duration-700 sm:duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  isActive ? "flex-[4] sm:flex-[3.4]" : "flex-1"
                } ${index === 4 ? "hidden sm:block" : ""}`}
              >
                <Image
                  src={item.img}
                  alt={item.n}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1200px) 40vw, 30vw"
                  className={`object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bosque/85 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <span className="absolute top-3 sm:top-[22px] left-1/2 -translate-x-1/2 z-10 w-6.5 h-6.5 sm:w-[34px] sm:h-[34px] rounded-full bg-white/90 text-tinta flex items-center justify-center font-display font-bold text-[11px] sm:text-[13px] shadow-xs">
                  {index + 1}
                </span>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      ease: EASE_ORIGINAL,
                    }}
                    className="absolute left-3 right-3 sm:left-6 sm:right-6 bottom-3 sm:bottom-[22px] z-10 text-white"
                  >
                    <b className="block font-display text-[15px] sm:text-[clamp(20px,2.4vw,32px)] tracking-[-0.03em] leading-tight line-clamp-1">
                      {item.n}
                    </b>
                    <span className="text-[11px] sm:text-sm text-white/85 line-clamp-1">
                      {item.s}
                    </span>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* LÍNEAS DE PROGRESO */}
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
                className={`h-full bg-hoja transition-all duration-300 ${
                  active === index
                    ? "w-full animate-[progress_4.6s_linear]"
                    : index < active
                      ? "w-full"
                      : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
