// src/components/ui/ProductDrawer.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function ProductDrawer({ product, isOpen, onClose }) {
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedImg(0);
    }
  }, [product]);

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
          {/* Overlay oscuro difuminado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bosque/55 backdrop-blur-[6px] z-[95]"
          />

          {/* Drawer deslizable */}
          <motion.aside
            initial={{ x: "115%" }}
            animate={{ x: "0%" }}
            exit={{ x: "115%" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed top-3 right-3 bottom-3 w-[min(540px,calc(100%-24px))] bg-niebla rounded-[32px] z-[96] overflow-y-auto p-3.5 pb-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center z-10 hover:rotate-90 transition-transform duration-300 shadow-sm"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5 text-tinta" />
              </button>

              {/* Imagen Principal */}
              <div className="rounded-[24px] overflow-hidden aspect-square bg-salvia relative">
                <Image
                  src={product.imgs[selectedImg]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 540px"
                  className="object-cover"
                />
              </div>

              {/* Miniaturas (si tiene más de 1 imagen) */}
              {product.imgs.length > 1 && (
                <div className="flex gap-2.5 mt-2.5">
                  {product.imgs.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImg(i)}
                      className={`relative w-[72px] h-[72px] rounded-2xl overflow-hidden transition-all ${
                        selectedImg === i
                          ? "ring-2 ring-hoja opacity-100"
                          : "opacity-55 hover:opacity-85"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Contenido / Especificaciones */}
              <div className="pt-5 px-3">
                <span className="inline-block text-xs font-semibold text-hoja bg-hoja/10 px-3 py-1 rounded-full mb-2">
                  {product.tag}
                </span>

                <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.035em] text-tinta mb-2">
                  {product.name}
                </h3>

                <p className="text-musgo text-sm sm:text-base leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Lista de Ficha Técnica */}
                <ul className="divide-y divide-tinta/10 my-6">
                  {product.specs.map((s, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-3.5 text-sm sm:text-[15px]"
                    >
                      <span className="text-musgo">{s.label}</span>
                      <b className="font-semibold text-tinta text-right">
                        {s.val}
                      </b>
                    </li>
                  ))}
                </ul>

                {/* Precio */}
                {product.price && product.price !== "Consultar" && (
                  <div className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-tinta mb-6">
                    {product.price}
                  </div>
                )}
              </div>
            </div>

            {/* Botón WhatsApp unificado y estético */}
            <div className="px-3 pt-4">
              <a
                href={createWhatsAppLink(
                  `Hola Green Center, me interesa consultar por el modelo: ${product.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-between px-6 py-4 rounded-full bg-hoja hover:bg-bosque text-white font-semibold text-base transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="/icons/whatsapp.svg"
                      alt="WhatsApp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Consultar por este modelo</span>
                </div>

                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
