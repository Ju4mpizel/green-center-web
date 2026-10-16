// src/components/sections/Catalog.jsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductDrawer from "@/components/ui/ProductDrawer";

function SplitHeading({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  const EASE = [0.2, 0.8, 0.2, 1];

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(32px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-tinta"
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em] mr-[0.22em] last:mr-0"
        >
          <motion.span
            initial={{ y: "115%" }}
            animate={isInView ? { y: "0%" } : { y: "115%" }}
            transition={{ duration: 0.9, delay: i * 0.06, ease: EASE }}
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
          transition={{ duration: 0.9, delay: words.length * 0.06, ease: EASE }}
          className="inline-block italic not-italic text-hoja"
        >
          {highlight}
        </motion.span>
      </span>
    </h2>
  );
}

export default function Catalog() {
  const [activeCat, setActiveCat] = useState("Todo");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCat === "Todo"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === activeCat);

  return (
    <section id="catalogo" className="py-[clamp(60px,9vw,160px)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Cabecera del catálogo */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 text-sm font-semibold text-musgo mb-3 sm:mb-4">
              <svg
                className="w-[18px] h-[18px] text-hoja fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
              </svg>
              Catálogo
            </div>

            <SplitHeading text="Elige cómo quieres" highlight="moverte." />
          </div>

          {/* Categorías tipo cápsula con scroll horizontal en móvil */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-[15px] transition-all duration-300 flex-shrink-0 ${
                  activeCat === cat
                    ? "bg-bosque text-white shadow-none"
                    : "bg-white text-musgo shadow-[inset_0_0_0_1px_rgba(16,33,26,0.1)] hover:text-bosque hover:shadow-[inset_0_0_0_1px_var(--color-hoja)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Productos: 2 columnas en móvil, 12 columnas en escritorio */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, index) => {
              const isLg = p.lg;
              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.3,
                    delay: (index % 4) * 0.04,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  onClick={() => setSelectedProduct(p)}
                  className={`group bg-white rounded-[22px] sm:rounded-[32px] p-2.5 sm:p-3 pb-3.5 sm:pb-[22px] flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-15px_rgba(13,42,28,0.2)] shadow-xs ${
                    isLg
                      ? "col-span-2 sm:col-span-2 lg:col-span-6 lg:row-span-2"
                      : "col-span-1 lg:col-span-3"
                  }`}
                >
                  {/* Imagen del producto */}
                  <div
                    className={`relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-salvia ${
                      isLg
                        ? "aspect-[16/10] sm:aspect-auto sm:flex-1 sm:min-h-[380px]"
                        : "aspect-[1/1] sm:aspect-[1/1.02]"
                    }`}
                  >
                    <Image
                      src={p.imgs[0]}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.07]"
                    />

                    {/* Botón flotante flecha */}
                    <span className="absolute right-2 bottom-2 sm:right-3.5 sm:bottom-3.5 w-7 h-7 sm:w-[52px] sm:h-[52px] rounded-full bg-brote text-bosque flex items-center justify-center transition-all duration-300 group-hover:bg-hoja group-hover:text-white shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>

                  {/* Info de la Card */}
                  <div className="pt-2.5 sm:pt-4 px-1 sm:px-3 flex flex-col justify-between flex-1">
                    <div>
                      <span className="inline-block text-[10px] sm:text-[13px] font-semibold text-hoja bg-hoja/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mb-1.5 sm:mb-2.5">
                        {p.tag}
                      </span>
                      <h3
                        className={`font-display font-bold tracking-tight text-tinta mb-1 leading-snug line-clamp-1 sm:line-clamp-none ${
                          isLg
                            ? "text-base sm:text-[clamp(26px,2.6vw,40px)]"
                            : "text-[14px] sm:text-[clamp(19px,1.6vw,25px)]"
                        }`}
                      >
                        {p.name}
                      </h3>
                      <p className="text-musgo text-xs sm:text-[14.5px] line-clamp-1 sm:line-clamp-2">
                        {p.line}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1.5 mt-2.5 sm:mt-3.5 font-display font-bold text-sm sm:text-[22px] tracking-tight text-tinta">
                      {p.price !== "Consultar" ? (
                        <>
                          <span>{p.price}</span>
                          <small className="hidden sm:inline font-sans text-[12.5px] font-medium text-musgo tracking-normal">
                            Ref.
                          </small>
                        </>
                      ) : (
                        <span className="text-xs sm:text-base text-musgo font-sans font-semibold">
                          Consultar
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Nota informativa */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-musgo text-center px-4">
          Fotos de referencia. Precios y disponibilidad sujetos a confirmación
          por WhatsApp.
        </p>

        {/* Modal Drawer */}
        <ProductDrawer
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
