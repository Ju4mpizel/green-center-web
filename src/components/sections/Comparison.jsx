// src/components/sections/Comparison.jsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingComp({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(32px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-tinta max-w-[980px] mb-6 sm:mb-14"
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

const TYPES = [
  {
    n: "Bicimoto / Bici",
    img: "/img/bicicletas/bicimoto-tornado.webp",
    ideal: "Paseo y cortos",
    scores: [5, 5, 1, 1],
  },
  {
    n: "Moto / Scooter",
    img: "/img/motos/moto-valkiria.webp",
    ideal: "Ciudad día a día",
    scores: [4, 4, 2, 2],
  },
  {
    n: "Trimoto solar",
    img: "/img/trimotos/trimoto-familiar.webp",
    ideal: "Familia y trabajo",
    scores: [4, 3, 4, 3],
  },
  {
    n: "Mini auto solar",
    img: "/img/autos/sky-car.webp",
    ideal: "Confort total",
    scores: [3, 2, 5, 5],
  },
];

const ROWS = [
  "Ahorro al usarla",
  "Facilidad estacionar",
  "Espacio y carga",
  "Protección clima",
];

export default function Comparison() {
  const [hoveredCol, setHoveredCol] = useState(null);
  const tableRef = useRef(null);
  const isTableInView = useInView(tableRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="comparar" className="py-[clamp(60px,9vw,160px)]">
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
          Comparativa
        </motion.div>

        {/* Titular */}
        <SplitHeadingComp
          text="Cuatro formas de ir eléctrico,"
          highlight="lado a lado."
        />

        {/* Indicador táctil en celular */}
        <div className="sm:hidden text-right text-xs font-semibold text-hoja mb-2 flex items-center justify-end gap-1">
          <span>Desliza para ver más</span>
          <span>→</span>
        </div>

        {/* Tabla con scroll suave */}
        <motion.div
          ref={tableRef}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white shadow-sm overflow-x-auto border border-tinta/[0.04]"
        >
          <div className="min-w-[620px] sm:min-w-[700px] grid grid-cols-[1.1fr_repeat(4,1fr)]">
            {/* FILA 1: Encabezados */}
            <div className="p-3.5 sm:p-[22px_18px] border-b border-tinta/[0.08]" />
            {TYPES.map((t, c) => (
              <div
                key={c}
                onMouseEnter={() => setHoveredCol(c)}
                onMouseLeave={() => setHoveredCol(null)}
                className={`p-3.5 sm:p-[28px_18px_22px] border-b border-tinta/[0.08] flex flex-col justify-end gap-2 sm:gap-3 transition-colors duration-300 ${
                  hoveredCol === c ? "bg-[#bfd9a6]/35" : ""
                }`}
              >
                <div className="w-14 h-14 sm:w-[76px] sm:h-[76px] rounded-full overflow-hidden bg-salvia relative">
                  <Image
                    src={t.img}
                    alt={t.n}
                    fill
                    sizes="76px"
                    className="object-cover"
                  />
                </div>
                <b className="font-display text-base sm:text-[22px] tracking-[-0.03em] font-bold text-tinta leading-tight">
                  {t.n}
                </b>
              </div>
            ))}

            {/* FILA 2: Ideal para */}
            <div className="p-3.5 sm:p-[22px_18px] border-b border-tinta/[0.07] font-semibold text-musgo text-xs sm:text-[15px] flex items-center">
              Ideal para
            </div>
            {TYPES.map((t, c) => (
              <div
                key={c}
                onMouseEnter={() => setHoveredCol(c)}
                onMouseLeave={() => setHoveredCol(null)}
                className={`p-3.5 sm:p-[22px_18px] border-b border-tinta/[0.07] text-xs sm:text-[15px] flex items-center transition-colors duration-300 ${
                  hoveredCol === c ? "bg-[#bfd9a6]/35" : ""
                }`}
              >
                <b className="text-tinta font-semibold leading-tight">
                  {t.ideal}
                </b>
              </div>
            ))}

            {/* FILAS 3 a 6: Puntos animados */}
            {ROWS.map((r, ri) => (
              <div key={ri} className="contents">
                <div className="p-3.5 sm:p-[22px_18px] border-b border-tinta/[0.07] font-semibold text-musgo text-xs sm:text-[15px] flex items-center">
                  {r}
                </div>
                {TYPES.map((t, c) => {
                  const score = t.scores[ri];
                  return (
                    <div
                      key={c}
                      onMouseEnter={() => setHoveredCol(c)}
                      onMouseLeave={() => setHoveredCol(null)}
                      className={`p-3.5 sm:p-[22px_18px] border-b border-tinta/[0.07] flex items-center transition-colors duration-300 ${
                        hoveredCol === c ? "bg-[#bfd9a6]/35" : ""
                      }`}
                    >
                      <div
                        role="img"
                        className="flex gap-1 sm:gap-1.5"
                        aria-label={`${score} de 5`}
                      >
                        {[0, 1, 2, 3, 4].map((dotIndex) => {
                          const isFilled = dotIndex < score;
                          return (
                            <span
                              key={dotIndex}
                              className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                                isFilled && isTableInView
                                  ? "bg-hoja scale-100"
                                  : "bg-tinta/10 scale-[0.6]"
                              }`}
                              style={{
                                transitionDelay: `${dotIndex * 0.08}s`,
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Nota */}
        <p className="mt-5 sm:mt-8 text-xs sm:text-sm text-musgo text-center">
          Guía orientativa para elegir. Cada modelo tiene sus propias
          características técnicas.
        </p>
      </div>
    </section>
  );
}
