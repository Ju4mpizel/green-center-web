// src/components/ui/ProductDrawer.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, BatteryCharging } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { getColorStyle } from "@/data/colors";

const DRAWER_EASE = [0.16, 1, 0.3, 1];

export default function ProductDrawer({ product, isOpen, onClose }) {
  const [prevProduct, setPrevProduct] = useState(product);
  const [pick, setPick] = useState({ id: null, i: 0 });
  const [batteryState, setBatteryState] = useState({ id: null, idx: 0 });

  if (product && product !== prevProduct) {
    setPrevProduct(product);
  }

  const activeProduct = product || prevProduct;
  const selectedImg = pick.id === activeProduct?.id ? pick.i : 0;
  const selectedBattery =
    batteryState.id === activeProduct?.id ? batteryState.idx : 0;

  const hasBatteryOptions =
    activeProduct?.batteryOptions && activeProduct.batteryOptions.length > 0;
  const currentBattery = hasBatteryOptions
    ? activeProduct.batteryOptions[selectedBattery]
    : null;
  const activePrice = currentBattery
    ? currentBattery.price
    : activeProduct?.price;

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

  return (
    <AnimatePresence>
      {isOpen && activeProduct && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[95] will-change-opacity"
            aria-hidden="true"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={`Detalles de ${activeProduct.name}`}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: DRAWER_EASE }}
            className="fixed top-2 sm:top-3 right-2 sm:right-3 bottom-2 sm:bottom-3 w-[min(540px,calc(100%-16px))] bg-niebla rounded-[28px] sm:rounded-[32px] z-[96] overflow-hidden shadow-2xl flex flex-col justify-between will-change-transform transform-gpu"
          >
            <div className="overflow-y-auto p-3.5 sm:p-5 pb-6 overscroll-contain">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center z-20 hover:scale-105 active:scale-95 transition-transform duration-150 shadow-sm border border-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-hoja"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5 text-tinta" />
              </button>

              <div className="rounded-[22px] sm:rounded-[26px] overflow-hidden aspect-square bg-salvia relative shadow-inner">
                <Image
                  src={activeProduct.imgs[selectedImg]}
                  alt={activeProduct.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 540px"
                  className="object-cover"
                  priority
                />
              </div>

              {activeProduct.imgs.length > 1 && (
                <div className="flex gap-2.5 mt-2.5">
                  {activeProduct.imgs.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setPick({ id: activeProduct.id, i })}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden transition-opacity ${
                        selectedImg === i
                          ? "ring-2 ring-hoja opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${activeProduct.name} vista ${i + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="pt-4 px-1.5 sm:px-2">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <span className="inline-block text-xs font-semibold text-hoja bg-hoja/10 px-3 py-1 rounded-full">
                    {activeProduct.tag}
                  </span>

                  {activeProduct.warranty && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-bosque bg-brote/40 border border-brote px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 text-hoja" />
                      {activeProduct.warranty}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-tinta mb-1.5">
                  {activeProduct.name}
                </h3>

                <p className="text-musgo text-xs sm:text-[14.5px] leading-relaxed mb-4">
                  {activeProduct.desc}
                </p>

                {hasBatteryOptions && (
                  <div className="mb-5 p-3.5 rounded-2xl bg-white shadow-xs border border-hoja/20">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-bosque mb-2.5 uppercase tracking-wider">
                      <BatteryCharging className="w-4 h-4 text-hoja" />
                      Selecciona el tipo de batería:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {activeProduct.batteryOptions.map((b, idx) => (
                        <button
                          key={b.type}
                          type="button"
                          onClick={() =>
                            setBatteryState({ id: activeProduct.id, idx })
                          }
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            selectedBattery === idx
                              ? "border-hoja bg-brote/20 ring-1 ring-hoja"
                              : "border-tinta/10 hover:border-tinta/30 bg-niebla"
                          }`}
                        >
                          <b className="block text-xs sm:text-sm text-tinta font-bold">
                            {b.type}
                          </b>
                          <span className="block text-xs font-semibold text-hoja mt-0.5">
                            {b.price}
                          </span>
                          <span className="block text-[10px] text-musgo mt-1 leading-tight">
                            {b.note}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeProduct.colors && activeProduct.colors.length > 0 && (
                  <div className="mb-6 p-3.5 rounded-2xl bg-white shadow-xs border border-tinta/5">
                    <span className="block text-xs font-semibold text-musgo mb-2 uppercase tracking-wider">
                      Colores disponibles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.colors.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-niebla text-tinta border border-tinta/10"
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/15 flex-shrink-0 shadow-2xs"
                            style={getColorStyle(c)}
                          />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <span className="block text-xs font-semibold text-musgo mb-1 uppercase tracking-wider">
                  Especificaciones técnicas
                </span>
                <ul className="divide-y divide-tinta/10">
                  {activeProduct.specs.map((s, idx) => {
                    const value =
                      hasBatteryOptions &&
                      s.label.toLowerCase().includes("batería")
                        ? currentBattery.detail
                        : s.val;
                    return (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-2.5 text-xs sm:text-sm"
                      >
                        <span className="text-musgo">{s.label}</span>
                        <b className="font-semibold text-tinta text-right">
                          {value}
                        </b>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-white border-t border-tinta/10 flex items-center justify-between gap-3 shadow-lg">
              <div>
                <span className="block text-[11px] font-medium text-musgo leading-none">
                  {hasBatteryOptions
                    ? `Precio (${currentBattery.type})`
                    : "Precio de referencia"}
                </span>
                <b className="font-display font-bold text-xl sm:text-2xl tracking-tight text-tinta">
                  {activePrice}
                </b>
              </div>

              <a
                href={createWhatsAppLink(
                  hasBatteryOptions
                    ? `Hola Green Center, me interesa consultar por el modelo: ${activeProduct.name} con ${currentBattery.type} (${activePrice}).`
                    : `Hola Green Center, me interesa consultar por el modelo: ${activeProduct.name} (${activeProduct.price}).`,
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
