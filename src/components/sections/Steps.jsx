// src/components/sections/Steps.jsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingSteps({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(32px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-tinta max-w-[900px] mb-6 sm:mb-14"
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em] mr-[0.22em] last:mr-0"
        >
          <motion.span
            initial={{ y: "115%" }}
            animate={isInView ? { y: "0%" } : { y: "115%" }}
            transition={{ duration: 0.9, delay: i * 0.045, ease: EASE }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
      <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em]">
        <motion.span
          initial={{ y: "115%" }}
          animate={isInView ? { y: "0%" } : { y: "115%" }}
          transition={{
            duration: 0.9,
            delay: words.length * 0.045,
            ease: EASE,
          }}
          className="inline-block italic not-italic text-hoja"
        >
          {highlight}
        </motion.span>
      </span>
    </h2>
  );
}

const STEPS = [
  {
    n: 1,
    img: "/img/bicicletas/bicimoto-tornado.webp",
    title: "Elige",
    desc: "Mira el catálogo o cuéntanos qué necesitas.",
  },
  {
    n: 2,
    img: "/img/motos/moto-spyder.webp",
    title: "Consulta",
    desc: "Resolvemos tus dudas por WhatsApp o en nuestras sucursales.",
  },
  {
    n: 3,
    img: "/img/autos/sky-car.webp",
    title: "Coordina",
    desc: "Acordamos el pago y la forma de entrega.",
  },
  {
    n: 4,
    img: "/img/trimotos/trimoto-familiar.webp",
    title: "Recíbela",
    desc: "La retiras en Santa Cruz o te la enviamos a cualquier ciudad de Bolivia.",
  },
];

export default function Steps() {
  return (
    <section id="como-comprar" className="bg-salvia py-[clamp(60px,9vw,160px)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="inline-flex items-center gap-2.5 text-sm font-semibold text-musgo mb-4 sm:mb-5"
        >
          <svg
            className="w-[18px] h-[18px] text-hoja fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
          </svg>
          Cómo comprar
        </motion.div>

        {/* Titular */}
        <SplitHeadingSteps text="Cuatro pasos y" highlight="listo." />

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-14">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: EASE }}
              className="group relative rounded-[24px] sm:rounded-[30px] overflow-hidden aspect-[16/9] sm:aspect-[3/4.2] bg-bosque text-white shadow-sm flex flex-col justify-end"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bosque/95 via-bosque/40 to-transparent" />

              {/* Número circular */}
              <span className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-10 w-8 h-8 sm:w-[46px] sm:h-[46px] rounded-full bg-brote text-bosque flex items-center justify-center font-display font-bold text-sm sm:text-lg shadow-sm">
                {s.n}
              </span>

              {/* Textos del paso */}
              <div className="relative z-10 p-4 sm:p-5">
                <h3 className="font-display font-bold text-xl sm:text-[28px] tracking-[-0.03em] leading-tight mb-1 sm:mb-2 text-white">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-[15px] text-[#d5e2d4] leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
