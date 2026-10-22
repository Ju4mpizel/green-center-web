// src/components/ui/ProductDrawer.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

// Mapeo completo de colores
const COLOR_HEX = {
  Blanco: "#f8fafc",
  "Blanco entero": "#f8fafc",
  Negro: "#1e293b",
  Rojo: "#dc2626",
  Azul: "#2563eb",
  Plomo: "#64748b",
  Amarillo: "#eab308",
  "Celeste eléctrico": "#06b6d4",
  Lila: "#c4b5fd",
  "Verde pastel": "#bbf7d0",
  "Verde menta pastel": "#a7f3d0",
  "Morado pastel": "#e9d5ff",
  "Azul pastel": "#bae6fd",
  "Celeste pastel": "#7dd3fc",
};

const DRAWER_EASE = [0.16, 1, 0.3, 1]; // Curva expo fluida de salida/entrada

export default function ProductDrawer({ product, isOpen, onClose }) {
  const [pick, setPick] = useState({ id: null, i: 0 });
  const selectedImg = pick.id === product?.id ? pick.i : 0;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.classList.add("lock");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("lock");
    }
    return () => {
      document.body.classList.remove("lock");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop liviano sin blur agresivo para fluidez total a 60fps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[95] will-change-opacity"
          />

          {/* Panel con aceleración GPU */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: DRAWER_EASE }}
            className="fixed top-2 sm:top-3 right-2 sm:right-3 bottom-2 sm:bottom-3 w-[min(540px,calc(100%-16px))] bg-niebla rounded-[28px] sm:rounded-[32px] z-[96] overflow-hidden shadow-2xl flex flex-col justify-between will-change-transform transform-gpu"
          >
            {/* Contenido con Scroll */}
            <div className="overflow-y-auto p-3.5 sm:p-5 pb-6 overscroll-contain">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center z-20 hover:scale-105 active:scale-95 transition-transform duration-150 shadow-sm border border-black/5"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5 text-tinta" />
              </button>

              {/* Imagen Principal */}
              <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-square bg-salvia relative shadow-inner">
                <Image
                  src={product.imgs[selectedImg]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 540px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Miniaturas */}
              {product.imgs.length > 1 && (
                <div className="flex gap-2.5 mt-2.5">
                  {product.imgs.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setPick({ id: product.id, i })}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden transition-opacity ${
                        selectedImg === i
                          ? "ring-2 ring-hoja opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} vista ${i + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Encabezado e Info */}
              <div className="pt-4 px-1.5 sm:px-2">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <span className="inline-block text-xs font-semibold text-hoja bg-hoja/10 px-3 py-1 rounded-full">
                    {product.tag}
                  </span>

                  {product.warranty && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-bosque bg-brote/40 border border-brote px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 text-hoja" />
                      {product.warranty}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-tinta mb-1.5">
                  {product.name}
                </h3>

                <p className="text-musgo text-xs sm:text-[14.5px] leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Colores Disponibles */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-6 p-3.5 rounded-2xl bg-white shadow-xs border border-tinta/5">
                    <span className="block text-xs font-semibold text-musgo mb-2 uppercase tracking-wider">
                      Colores disponibles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-niebla text-tinta border border-tinta/10"
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-black/15 flex-shrink-0"
                            style={{
                              backgroundColor: COLOR_HEX[c] || "#94a3b8",
                            }}
                          />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tabla de Especificaciones Técnicas */}
                <span className="block text-xs font-semibold text-musgo mb-1 uppercase tracking-wider">
                  Especificaciones técnicas
                </span>
                <ul className="divide-y divide-tinta/10">
                  {product.specs.map((s, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-2.5 text-xs sm:text-sm"
                    >
                      <span className="text-musgo">{s.label}</span>
                      <b className="font-semibold text-tinta text-right">
                        {s.val}
                      </b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pie Fijo: Precio + Botón WhatsApp */}
            <div className="p-3.5 sm:p-4 bg-white border-t border-tinta/10 flex items-center justify-between gap-3 shadow-lg">
              <div>
                <span className="block text-[11px] font-medium text-musgo leading-none">
                  Precio de referencia
                </span>
                <b className="font-display font-bold text-xl sm:text-2xl tracking-tight text-tinta">
                  {product.price}
                </b>
              </div>

              <a
                href={createWhatsAppLink(
                  `Hola Green Center, me interesa consultar por el modelo: ${product.name} (${product.price}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-hoja hover:bg-bosque text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
