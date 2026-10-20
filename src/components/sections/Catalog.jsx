// src/components/sections/Catalog.jsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductDrawer from "@/components/ui/ProductDrawer";
import ProductCard from "@/components/ui/ProductCard";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeading({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

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

          {/* Categorías tipo cápsula */}
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

        {/* Transición fluida del grid sin colisiones ni rebotes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-5"
          >
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={setSelectedProduct}
              />
            ))}
          </motion.div>
        </AnimatePresence>

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
