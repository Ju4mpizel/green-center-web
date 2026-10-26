// src/components/sections/Catalog.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductDrawer from "@/components/ui/ProductDrawer";
import ProductCard from "@/components/ui/ProductCard";
import SplitHeading from "@/components/ui/SplitHeading";

const EASE = [0.2, 0.8, 0.2, 1];

export default function Catalog() {
  const [activeCat, setActiveCat] = useState("Todo");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Escuchar el evento personalizado desde Selector.jsx
  useEffect(() => {
    const handleFilter = (e) => {
      if (e.detail && (CATEGORIES.includes(e.detail) || e.detail === "Todo")) {
        setActiveCat(e.detail);
      }
    };
    window.addEventListener("filter-catalog", handleFilter);
    return () => window.removeEventListener("filter-catalog", handleFilter);
  }, []);

  const baseFiltered =
    activeCat === "Todo"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === activeCat);

  // Si está en "Todo", respeta el p.lg de products.js (Valkiria).
  // Si entra a otra categoría (Motos, Autos, Trimotos...), el primer ítem se destaca en tamaño 6 columnas.
  const filteredProducts = baseFiltered.map((p, idx) => {
    if (activeCat === "Todo") return p;
    return {
      ...p,
      lg: idx === 0,
    };
  });

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

        {/* Transición fluida del grid */}
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
