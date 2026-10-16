// src/components/sections/CTA.jsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingCTA({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(32px,6.5vw,96px)] tracking-[-0.045em] leading-[1.02] text-white text-center mb-6 sm:mb-9 max-w-[820px] mx-auto"
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top pb-[0.08em] -mb-[0.08em] mr-[0.2em] last:mr-0"
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
      <span className="inline-block overflow-hidden align-top pb-[0.08em] -mb-[0.08em]">
        <motion.span
          initial={{ y: "115%" }}
          animate={isInView ? { y: "0%" } : { y: "115%" }}
          transition={{
            duration: 0.9,
            delay: words.length * 0.045,
            ease: EASE,
          }}
          className="inline-block italic not-italic text-brote"
        >
          {highlight}
        </motion.span>
      </span>
    </h2>
  );
}

export default function CTA() {
  return (
    <section className="bg-bosque text-white py-[clamp(60px,8vw,130px)] relative overflow-hidden text-center">
      {/* Hojas decorativas de fondo */}
      <div className="absolute left-[10%] top-[20%] w-[54px] text-brote opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
        </svg>
      </div>
      <div className="absolute right-[12%] bottom-[22%] w-[42px] text-brote opacity-15 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Titular proporcionado */}
        <SplitHeadingCTA
          text="Tu próxima forma de moverte no hace"
          highlight="ruido."
        />

        {/* Grupo de botones armónico y simétrico */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap"
        >
          {/* Botón WhatsApp */}
          <a
            href={getWhatsAppUrl(
              "Hola Green Center, quiero reservar un vehículo eléctrico.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full font-semibold text-xs sm:text-[15px] bg-white text-bosque hover:bg-salvia transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            <span>Escríbenos ahora</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-bosque text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>

          {/* Botón Instagram con borde nítido y flecha animada */}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full font-semibold text-xs sm:text-[15px] text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Ver Instagram</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-bosque">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
