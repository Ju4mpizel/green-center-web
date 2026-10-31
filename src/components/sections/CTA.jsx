// src/components/sections/CTA.jsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";

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
      {/* Rayos eléctricos decorativos de fondo */}
      <div className="absolute left-[8%] top-[24%] w-[52px] h-[52px] text-brote opacity-15 pointer-events-none hidden md:block rotate-[-12deg]">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
      <div className="absolute right-[10%] bottom-[20%] w-[44px] h-[44px] text-brote opacity-15 pointer-events-none hidden md:block rotate-[15deg]">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        <SplitHeadingCTA
          text="Tu próxima forma de moverte no hace"
          highlight="ruido."
        />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap"
        >
          {/* Botón WhatsApp */}
          <a
            href={createWhatsAppLink(
              "Hola Green Center, quiero reservar un vehículo eléctrico.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 pl-4 sm:pl-5 pr-2 py-2 rounded-full font-semibold text-xs sm:text-[15px] bg-white text-bosque hover:bg-salvia transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
              <Image
                src="/icons/whatsapp.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <span>Escríbenos ahora</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-bosque text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>

          {/* Botón Instagram */}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 pl-4 sm:pl-5 pr-2 py-2 rounded-full font-semibold text-xs sm:text-[15px] text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current opacity-85 group-hover:opacity-100 transition-opacity shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-bosque">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>

          {/* Botón TikTok */}
          <a
            href={siteConfig.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 pl-4 sm:pl-5 pr-2 py-2 rounded-full font-semibold text-xs sm:text-[15px] text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current opacity-85 group-hover:opacity-100 transition-opacity shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            <span>TikTok</span>
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-bosque">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
