// src/components/sections/Story.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Zap } from "lucide-react";
import SplitHeading from "@/components/ui/SplitHeading";

const EASE = [0.2, 0.8, 0.2, 1];

function Counter({ to, duration = 1.8, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    latest.toLocaleString("es-BO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, to, duration, count]);

  return (
    <span ref={ref} className="tabular-nums whitespace-nowrap">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="inline-block">{suffix}</span>}
    </span>
  );
}

export default function Story() {
  const tlRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (tlRef.current) {
            const r = tlRef.current.getBoundingClientRect();
            const p = Math.min(
              1,
              Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height),
            );
            setProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="historia"
      className="bg-bosque text-[#eaf1e6] py-[clamp(60px,9vw,160px)] relative overflow-hidden"
    >
      {/* Rayo decorativo de fondo */}
      <div className="absolute right-[6%] top-[8%] w-[64px] h-[64px] text-brote opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 sm:gap-[clamp(40px,7vw,120px)] items-start">
          {/* Columna Izquierda (Sticky) */}
          <div className="lg:sticky lg:top-[110px]">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9db8a4] mb-3 sm:mb-[22px]"
            >
              <Zap className="w-4 h-4 text-brote fill-current" />
              Quiénes somos
            </motion.div>

            {/* Titular animado */}
            <SplitHeading
              text="Traemos movilidad eléctrica a Bolivia y la llevamos hasta"
              highlight="tu puerta."
              className="text-white mb-[26px] text-[clamp(34px,4.4vw,64px)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="text-[#a9c1b0] text-[15px] sm:text-[clamp(17px,1.5vw,21px)] max-w-[560px] leading-relaxed mb-6 sm:mb-9"
            >
              Green Center Bolivia es una empresa importadora y comercializadora
              de vehículos eléctricos. Desde Santa Cruz y Cochabamba, trabajamos
              con motos, bicimotos, trimotos solares, mini autos y maquinaria
              industrial.
            </motion.p>

            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0 round 24px)" }}
              whileInView={{ clipPath: "inset(0 0 0 0 round 28px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE }}
              className="w-[min(100%,320px)] sm:w-[min(100%,360px)] aspect-[1/1.05] rounded-[50%_50%_24px_24px_/_36%_36%_24px_24px] overflow-hidden bg-bosque2 relative shadow-2xl"
            >
              <Image
                src="/img/trimotos/trimoto-familiar.webp"
                alt="Trimoto eléctrica familiar con panel solar Green Center"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Columna Derecha con Línea de Tiempo */}
          <div className="relative pl-9 sm:pl-12">
            <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-[rgba(191,217,166,0.18)]" />

            <div
              className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-brote origin-top transition-transform duration-150 ease-out"
              style={{ transform: `scaleY(${progress})` }}
            />

            <ol ref={tlRef} className="relative list-none">
              <motion.li
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative pb-8 sm:pb-[clamp(56px,7vw,96px)]"
              >
                <span
                  className={`absolute -left-[39px] sm:-left-[46px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-500 z-10 ${
                    progress > 0.1
                      ? "bg-brote border-2 border-brote shadow-[0_0_0_8px_rgba(191,217,166,0.15)]"
                      : "bg-bosque border-2 border-[rgba(191,217,166,0.35)]"
                  }`}
                />
                <h3 className="font-display text-2xl sm:text-[clamp(28px,3.4vw,46px)] tracking-[-0.04em] leading-tight font-bold mb-2 text-white">
                  Importamos con criterio
                </h3>
                <p className="text-[#a9c1b0] text-sm sm:text-[17px] max-w-[520px] leading-relaxed">
                  Elegimos modelos eléctricos pensados para la realidad
                  boliviana: ciudad, trabajo diario, transporte familiar y
                  logística de carga.
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative pb-8 sm:pb-[clamp(56px,7vw,96px)]"
              >
                <span
                  className={`absolute -left-[39px] sm:-left-[46px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-500 z-10 ${
                    progress > 0.35
                      ? "bg-brote border-2 border-brote shadow-[0_0_0_8px_rgba(191,217,166,0.15)]"
                      : "bg-bosque border-2 border-[rgba(191,217,166,0.35)]"
                  }`}
                />
                <h3 className="font-display text-2xl sm:text-[clamp(28px,3.4vw,46px)] tracking-[-0.04em] leading-tight font-bold mb-2 text-white">
                  Creamos una comunidad
                </h3>
                <p className="text-[#a9c1b0] text-sm sm:text-[17px] max-w-[520px] leading-relaxed mb-4 sm:mb-6">
                  Mostramos cada modelo en video, con pruebas reales y
                  respuestas claras a las dudas de quienes quieren pasarse a lo
                  eléctrico.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-[clamp(24px,5vw,64px)] max-w-[420px]">
                  <div className="flex flex-col min-h-[72px] justify-start">
                    <b className="font-display text-[clamp(32px,7vw,72px)] font-bold tracking-[-0.05em] leading-none text-white block">
                      <Counter to={60.7} decimals={1} suffix=" mil" />
                    </b>
                    <span className="text-xs sm:text-sm text-[#9db8a4] mt-1.5 leading-snug">
                      seguidores en Instagram
                    </span>
                  </div>
                  <div className="flex flex-col min-h-[72px] justify-start">
                    <b className="font-display text-[clamp(32px,7vw,72px)] font-bold tracking-[-0.05em] leading-none text-white block">
                      <Counter to={1424} decimals={0} />
                    </b>
                    <span className="text-xs sm:text-sm text-[#9db8a4] mt-1.5 leading-snug">
                      publicaciones
                    </span>
                  </div>
                </div>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative pb-8 sm:pb-[clamp(56px,7vw,96px)]"
              >
                <span
                  className={`absolute -left-[39px] sm:-left-[46px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-500 z-10 ${
                    progress > 0.65
                      ? "bg-brote border-2 border-brote shadow-[0_0_0_8px_rgba(191,217,166,0.15)]"
                      : "bg-bosque border-2 border-[rgba(191,217,166,0.35)]"
                  }`}
                />
                <h3 className="font-display text-2xl sm:text-[clamp(28px,3.4vw,46px)] tracking-[-0.04em] leading-tight font-bold mb-2 text-white">
                  Salimos a mostrarlo
                </h3>
                <p className="text-[#a9c1b0] text-sm sm:text-[17px] max-w-[520px] leading-relaxed">
                  Estuvimos en Expo Cruz 2026 con nuestro propio stand, con
                  motos, trimotos, autos y maquinaria eléctrica para ver y
                  probar en persona.
                </p>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative pb-0"
              >
                <span
                  className={`absolute -left-[39px] sm:-left-[46px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-500 z-10 ${
                    progress > 0.9
                      ? "bg-brote border-2 border-brote shadow-[0_0_0_8px_rgba(191,217,166,0.15)]"
                      : "bg-bosque border-2 border-[rgba(191,217,166,0.35)]"
                  }`}
                />
                <h3 className="font-display text-2xl sm:text-[clamp(28px,3.4vw,46px)] tracking-[-0.04em] leading-tight font-bold mb-2 text-white">
                  Llegamos a todo el país
                </h3>
                <p className="text-[#a9c1b0] text-sm sm:text-[17px] max-w-[520px] leading-relaxed">
                  Atendemos en Santa Cruz y Cochabamba, además de realizar
                  envíos a nivel nacional para que tengas tu vehículo eléctrico
                  donde sea que vivas.
                </p>
              </motion.li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
