// src/components/sections/Benefits.jsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NoiseScope from "@/components/ui/NoiseScope";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingBenefits({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(32px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-tinta max-w-[980px] mb-8 sm:mb-14"
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

export default function Benefits() {
  const CITIES = [
    { name: "Santa Cruz", x: 175, y: 145, hub: true },
    { name: "La Paz", x: 55, y: 120 },
    { name: "Cochabamba", x: 110, y: 135 },
    { name: "Sucre", x: 125, y: 170 },
    { name: "Oruro", x: 80, y: 150 },
    { name: "Potosí", x: 110, y: 185 },
    { name: "Tarija", x: 135, y: 220 },
    { name: "Trinidad", x: 145, y: 85 },
    { name: "Cobija", x: 45, y: 40 },
  ];

  const sc = CITIES[0];

  return (
    <section id="beneficios" className="py-[clamp(60px,9vw,160px)]">
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
          Por qué eléctrico
        </motion.div>

        {/* Titular animado */}
        <SplitHeadingBenefits
          text="Menos ruido, menos gasto,"
          highlight="más tranquilidad."
        />

        {/* Bento Grid con padding móvil calibrado */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-[18px]">
          {/* Tarjeta 1: Osciloscopio */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="md:col-span-7 md:row-span-2 bg-bosque text-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-[30px] flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[360px] sm:min-h-auto"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-[clamp(24px,2.4vw,34px)] tracking-[-0.04em] mb-1.5 sm:mb-2 text-white">
                Se acabó el ruido del motor
              </h3>
              <p className="text-[#a9c1b0] text-sm sm:text-[15.5px] max-w-[340px]">
                Aceleras en silencio. Tu barrio, tus oídos y tus vecinos lo
                agradecen.
              </p>
            </div>

            <NoiseScope />
          </motion.div>

          {/* Tarjeta 2: Cárgala en casa */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="md:col-span-5 bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-[30px] flex flex-col justify-between overflow-hidden shadow-sm"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-[clamp(24px,2.4vw,34px)] tracking-[-0.04em] mb-1.5 sm:mb-2 text-tinta">
                Cárgala en casa
              </h3>
              <p className="text-musgo text-sm sm:text-[15.5px] max-w-[340px]">
                Sin filas ni gasolineras. Conectas, duermes y sales con la
                batería lista.
              </p>
            </div>

            <svg
              className="w-full h-[70px] sm:h-[90px] mt-2 sm:mt-4"
              viewBox="0 0 300 90"
            >
              <path
                d="M20 62 C80 62 80 24 150 24 S220 62 276 62"
                fill="none"
                stroke="#1E8A4B"
                strokeWidth="3"
                strokeLinecap="round"
                className="[stroke-dasharray:6_8] animate-[dash_1.4s_linear_infinite]"
              />
              <circle cx="20" cy="62" r="9" fill="#10211A" />
              <circle cx="276" cy="62" r="9" fill="#1E8A4B" />
            </svg>
          </motion.div>

          {/* Tarjeta 3: Aire más limpio */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="md:col-span-5 bg-brote rounded-[28px] sm:rounded-[32px] p-5 sm:p-[30px] flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[190px] sm:min-h-[220px]"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-[clamp(24px,2.4vw,34px)] tracking-[-0.04em] mb-1.5 sm:mb-2 text-[#0d2a1c]">
                Aire más limpio
              </h3>
              <p className="text-[#2f4a38] text-sm sm:text-[15.5px] max-w-[300px]">
                Cero humo por el escape. Cada trayecto eléctrico es un trayecto
                sin emisiones en la calle.
              </p>
            </div>

            <svg
              className="absolute -right-4 -bottom-6 w-[150px] sm:w-[190px] text-hoja opacity-90 pointer-events-none origin-bottom-left animate-[sway_6s_ease-in-out_infinite]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
            </svg>
          </motion.div>

          {/* Tarjeta 4: Menos mantenimiento */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="md:col-span-5 bg-arena rounded-[28px] sm:rounded-[32px] p-5 sm:p-[30px] flex flex-col justify-between overflow-hidden shadow-sm"
          >
            <div>
              <h3 className="font-display font-bold text-xl sm:text-[clamp(24px,2.4vw,34px)] tracking-[-0.04em] mb-1.5 sm:mb-2 text-tinta">
                Menos mantenimiento
              </h3>
              <p className="text-musgo text-sm sm:text-[15.5px] max-w-[340px]">
                Sin aceite, sin bujías y sin filtros. Menos visitas al taller y
                menos gastos sorpresa.
              </p>
            </div>
          </motion.div>

          {/* Tarjeta 5: Envíos a todo el país */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="md:col-span-7 bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-[30px] flex flex-col justify-between overflow-hidden relative shadow-sm min-h-[220px] sm:min-h-[260px]"
          >
            <div className="relative z-10">
              <h3 className="font-display font-bold text-xl sm:text-[clamp(24px,2.4vw,34px)] tracking-[-0.04em] mb-1.5 sm:mb-2 text-tinta">
                Envíos a todo el país
              </h3>
              <p className="text-musgo text-sm sm:text-[15.5px] max-w-[280px]">
                Salimos desde Santa Cruz hacia cualquier ciudad de Bolivia.
              </p>
            </div>

            <div className="absolute right-1 top-2 bottom-2 w-[55%] sm:w-[58%] pointer-events-none opacity-85 sm:opacity-100">
              <svg viewBox="0 0 250 260" className="w-full h-full">
                {CITIES.map((c, i) => {
                  if (c.hub) return null;
                  const mx = (c.x + sc.x) / 2;
                  const my = Math.min(c.y, sc.y) - 18;
                  return (
                    <path
                      key={i}
                      d={`M${sc.x} ${sc.y} Q${mx} ${my} ${c.x} ${c.y}`}
                      fill="none"
                      stroke="#1E8A4B"
                      strokeWidth="1.5"
                      strokeDasharray="4 5"
                      className="opacity-70 animate-[dash_1.8s_linear_infinite]"
                    />
                  );
                })}

                {CITIES.map((c, i) => (
                  <g key={i}>
                    {c.hub ? (
                      <>
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r="6"
                          fill="#1E8A4B"
                          className="opacity-35 animate-ping origin-center"
                        />
                        <circle cx={c.x} cy={c.y} r="6" fill="#1E8A4B" />
                      </>
                    ) : (
                      <circle cx={c.x} cy={c.y} r="3.5" fill="#0D2A1C" />
                    )}
                    <text
                      x={
                        c.x +
                        (c.name === "La Paz" ||
                        c.name === "Oruro" ||
                        c.name === "Cobija"
                          ? -6
                          : 8)
                      }
                      y={c.y + 3}
                      textAnchor={
                        c.name === "La Paz" ||
                        c.name === "Oruro" ||
                        c.name === "Cobija"
                          ? "end"
                          : "start"
                      }
                      className="font-sans text-[8.5px] sm:text-[9px] font-semibold fill-musgo"
                    >
                      {c.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
