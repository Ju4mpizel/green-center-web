// src/components/sections/Branches.jsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap } from "lucide-react";
import { BRANCHES } from "@/data/branches";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/siteConfig";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingBranches({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(34px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-tinta max-w-[1000px] mb-8 sm:mb-14"
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

export default function Branches() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [showRealMap, setShowRealMap] = useState(false);
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true, margin: "-10% 0px" });
  const selectedBranch = BRANCHES[selectedIdx];

  const cx = 300;
  const cy = 270;
  const P = (r, a) => [
    cx + r * Math.cos((a * Math.PI) / 180),
    cy + r * Math.sin((a * Math.PI) / 180),
  ];

  const RINGS = [
    { r: 215, n: "5º", d: 0.66 },
    { r: 165, n: "4º", d: 0.44 },
    { r: 115, n: "3º", d: 0.22 },
    { r: 70, n: "2º", d: 0.0 },
  ];

  const AVENUES = [
    { a: -36, n: "Av. Virgen de Cotoca" },
    { a: -2, n: "Av. Brasil" },
    { a: 36, n: "Av. 3 Pasos al Frente" },
    { a: 198, n: "Av. Paraguá" },
  ];

  return (
    <section id="ubicacion" className="py-[clamp(60px,9vw,160px)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Kicker con rayo */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-musgo mb-4 sm:mb-5"
        >
          <Zap className="w-4 h-4 text-hoja fill-current" />
          Nuestras sucursales
        </motion.div>

        {/* Titular */}
        <SplitHeadingBranches
          text="Sucursales en Santa Cruz y Cochabamba para"
          highlight="ver y probar."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[4.6fr_7.4fr] gap-4 sm:gap-[18px] mt-6 sm:mt-14">
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col gap-2.5 sm:gap-3.5">
            {BRANCHES.map((b, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`rounded-[24px] sm:rounded-[28px] p-4 sm:p-5.5 cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-bosque text-white shadow-md ring-1 ring-brote/30"
                      : "bg-white text-tinta hover:translate-x-1 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display font-bold text-sm sm:text-base flex-shrink-0 transition-colors ${
                        isSelected
                          ? "bg-brote text-bosque shadow-sm"
                          : "bg-salvia text-bosque"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <b className="block font-display text-lg sm:text-[22px] tracking-tight leading-snug">
                          {b.name}
                        </b>
                        {b.isNew && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brote text-bosque">
                            NUEVA
                          </span>
                        )}
                      </div>
                      <small
                        className={`block text-xs sm:text-[14.5px] mt-1 leading-relaxed ${
                          isSelected ? "text-[#a9c1b0]" : "text-musgo"
                        }`}
                      >
                        {b.address}
                      </small>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div
                    className={`flex flex-wrap gap-2 transition-all duration-300 overflow-hidden ${
                      isSelected
                        ? "max-h-24 opacity-100 mt-3.5 pt-1"
                        : "max-h-0 opacity-0 m-0"
                    }`}
                  >
                    <a
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 sm:px-4.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm bg-brote text-bosque hover:bg-white transition-all shadow-xs"
                    >
                      Cómo llegar
                    </a>
                    <a
                      href={createWhatsAppLink(
                        `Hola Green Center, quiero visitar la sucursal: ${b.name}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 sm:px-4.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35)] hover:bg-white/10 transition-colors"
                    >
                      Escribir
                    </a>
                  </div>
                </div>
              );
            })}

            <p className="text-xs sm:text-sm text-musgo px-2 py-1 leading-relaxed">
              Horario de atención: {siteConfig.openingHours}. Consultas directas
              por WhatsApp para confirmar disponibilidad inmediata.
            </p>
          </div>

          {/* LADO DERECHO: Mapa */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#e9f0e3] to-salvia overflow-hidden min-h-[380px] sm:min-h-[560px] shadow-sm flex flex-col justify-between"
          >
            {/* Header del Mapa */}
            <div className="absolute top-3 sm:top-[18px] left-3 sm:left-5 right-3 sm:right-5 flex justify-between items-center z-10 gap-2">
              <span className="text-xs sm:text-[13px] text-musgo bg-[rgba(241,244,236,0.92)] backdrop-blur px-2.5 sm:px-3.5 py-1 rounded-full font-medium shadow-sm truncate">
                {showRealMap ? "Mapa de Google" : "Esquema interactivo"}
              </span>

              <button
                type="button"
                onClick={() => setShowRealMap(!showRealMap)}
                className="px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-bosque text-white font-semibold text-xs sm:text-sm hover:-translate-y-0.5 transition-transform shadow-sm flex-shrink-0"
              >
                {showRealMap ? "Ver esquema" : "Ver mapa real"}
              </button>
            </div>

            {/* SVG o Iframe */}
            {showRealMap ? (
              <iframe
                title="Mapa de la sucursal"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedBranch.query || selectedBranch.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[380px] sm:min-h-[560px] border-0 saturate-[0.8] contrast-[1.05]"
                loading="lazy"
              />
            ) : (
              <svg
                viewBox="0 0 600 540"
                className="w-full h-full min-h-[380px] sm:min-h-[560px] select-none"
              >
                {/* 1. Anillos concéntricos */}
                {RINGS.map(({ r, n, d }) => {
                  const perimeter = Math.round(2 * Math.PI * r);
                  const [x, y] = P(r, -90);
                  return (
                    <g key={r}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill="none"
                        stroke="#1E8A4B"
                        strokeWidth={r === 165 ? 2.4 : 1.5}
                        strokeDasharray={perimeter}
                        strokeDashoffset={isMapInView ? 0 : perimeter}
                        style={{
                          transition: `stroke-dashoffset 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${d}s`,
                        }}
                        className={r === 165 ? "opacity-60" : "opacity-30"}
                      />
                      <text
                        x={x}
                        y={y - 6}
                        textAnchor="middle"
                        className={`text-[11px] font-semibold fill-tinta/45 font-sans transition-opacity duration-1000 ${
                          isMapInView ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: `${d + 0.5}s` }}
                      >
                        {n} anillo
                      </text>
                    </g>
                  );
                })}

                {/* 2. Avenidas radiales */}
                {AVENUES.map(({ a, n }) => {
                  const [x1, y1] = P(34, a);
                  const [x2, y2] = P(246, a);
                  const [tx, ty] = P(254, a);
                  const isLeft = Math.cos((a * Math.PI) / 180) < 0;
                  return (
                    <g
                      key={a}
                      className={`transition-opacity duration-1000 ${
                        isMapInView ? "opacity-45" : "opacity-0"
                      }`}
                      style={{ transitionDelay: "0.8s" }}
                    >
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#1E8A4B"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <text
                        x={tx}
                        y={ty + 4}
                        textAnchor={isLeft ? "end" : "start"}
                        className="text-xs font-semibold fill-musgo font-sans"
                      >
                        {n}
                      </text>
                    </g>
                  );
                })}

                {/* 3. Centro */}
                <circle cx={cx} cy={cy} r="6" fill="#10211A" />
                <text
                  x={cx}
                  y={cy + 22}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-musgo font-sans"
                >
                  Centro
                </text>

                {/* 4. Pines de Santa Cruz */}
                {BRANCHES.filter((b) => b.ring).map((b, i) => {
                  const [x, y] = P(b.ring, b.ang);
                  const isLeft = Math.cos((b.ang * Math.PI) / 180) < 0;
                  const isSelected = selectedIdx === i;
                  return (
                    <g
                      key={b.id}
                      onClick={() => setSelectedIdx(i)}
                      className="cursor-pointer"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <motion.g
                        initial={{ opacity: 0, scale: 0, y: -30 }}
                        animate={
                          isMapInView
                            ? { opacity: 1, scale: 1, y: 0 }
                            : { opacity: 0, scale: 0, y: -30 }
                        }
                        transition={{
                          duration: 0.8,
                          delay: 1.1 + i * 0.18,
                          ease: EASE,
                        }}
                      >
                        {isSelected && (
                          <>
                            <circle
                              cx="0"
                              cy="0"
                              r="16"
                              fill="#1E8A4B"
                              opacity="0.4"
                            >
                              <animate
                                attributeName="r"
                                values="16;38"
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0.45;0"
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                            </circle>
                            <circle
                              cx="0"
                              cy="0"
                              r="22"
                              fill="none"
                              stroke="#1E8A4B"
                              strokeWidth="1.5"
                              opacity="0.7"
                            >
                              <animate
                                attributeName="r"
                                values="16;28"
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values="0.7;0"
                                dur="1.8s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          </>
                        )}

                        <circle
                          cx="0"
                          cy="0"
                          r="16"
                          fill={isSelected ? "#1E8A4B" : "#0D2A1C"}
                          stroke="#fff"
                          strokeWidth="3"
                          className="transition-colors duration-300 shadow-md"
                        />
                        <text
                          y="5"
                          textAnchor="middle"
                          fill="#fff"
                          className="font-display font-bold text-sm pointer-events-none"
                        >
                          {i + 1}
                        </text>
                        <text
                          x={isLeft ? -26 : 26}
                          y="5"
                          textAnchor={isLeft ? "end" : "start"}
                          className={`text-[13px] font-bold font-sans transition-colors ${
                            isSelected
                              ? "fill-hoja font-extrabold"
                              : "fill-bosque"
                          }`}
                        >
                          {b.label}
                        </text>
                      </motion.g>
                    </g>
                  );
                })}

                {/* Pin 4: Cochabamba */}
                <g
                  onClick={() => setSelectedIdx(3)}
                  className="cursor-pointer"
                  style={{ transform: "translate(90px, 470px)" }}
                >
                  <motion.g
                    initial={{ opacity: 0, scale: 0, y: -30 }}
                    animate={
                      isMapInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0, y: -30 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: 1.1 + 3 * 0.18,
                      ease: EASE,
                    }}
                  >
                    {selectedIdx === 3 && (
                      <circle cx="0" cy="0" r="16" fill="#1E8A4B" opacity="0.4">
                        <animate
                          attributeName="r"
                          values="16;38"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.45;0"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    <circle
                      cx="0"
                      cy="0"
                      r="16"
                      fill={selectedIdx === 3 ? "#1E8A4B" : "#0D2A1C"}
                      stroke="#fff"
                      strokeWidth="3"
                    />
                    <text
                      y="5"
                      textAnchor="middle"
                      fill="#fff"
                      className="font-display font-bold text-sm pointer-events-none"
                    >
                      4
                    </text>
                    <text
                      x="24"
                      y="5"
                      className={`text-[13px] font-bold font-sans transition-colors ${
                        selectedIdx === 3
                          ? "fill-hoja font-extrabold"
                          : "fill-bosque"
                      }`}
                    >
                      Cochabamba (Av. Uyuni)
                    </text>
                  </motion.g>
                </g>
              </svg>
            )}

            <div className="absolute left-3 sm:left-5 bottom-3 sm:bottom-4 text-[11px] sm:text-[12.5px] text-musgo z-10 bg-white/80 backdrop-blur px-2.5 sm:px-3 py-1 rounded-full shadow-sm">
              Toca &quot;Cómo llegar&quot; para abrir la ruta en Google Maps.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
