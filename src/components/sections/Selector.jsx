// src/components/sections/Selector.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingSelector({ text, highlight }) {
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

const OPTIONS = [
  {
    k: "ciudad",
    title: "Moverme por la ciudad",
    desc: "Trabajo, universidad, trámites",
    icon: (
      <svg
        className="w-8 h-8 sm:w-11 sm:h-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21V9l6-3v15M9 21h12V12l-6-2v11M12 14h.01M12 17h.01M18 15h.01M18 18h.01M6 12h.01M6 15h.01"
        />
      </svg>
    ),
    result: {
      t: "Un scooter o una bici moto",
      p: "Ágiles, fáciles de estacionar y muy baratas de cargar. Perfectas para tu rutina diaria.",
      imgs: ["/img/scooter.jpg", "/img/superbike.jpg"],
      cat: "Motos y scooters",
    },
  },
  {
    k: "carga",
    title: "Trabajar y llevar carga",
    desc: "Reparto, negocio, herramientas",
    icon: (
      <svg
        className="w-8 h-8 sm:w-11 sm:h-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"
        />
      </svg>
    ),
    result: {
      t: "Una trimoto o un motocarro",
      p: "Más espacio, más estabilidad y capacidad para llevar carga. Hechas para trabajar.",
      imgs: ["/img/trimoto_roja.jpg", "/img/motocarro.jpg"],
      cat: "Trimotos y carga",
    },
  },
  {
    k: "confort",
    title: "Comodidad para todos",
    desc: "Familia, lluvia y sol",
    icon: (
      <svg
        className="w-8 h-8 sm:w-11 sm:h-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3zM6 18v2M18 18v2"
        />
      </svg>
    ),
    result: {
      t: "Un mini auto eléctrico",
      p: "Techo, puertas y cuatro ruedas. La comodidad de un auto con el gasto de un eléctrico.",
      imgs: ["/img/miniauto.jpg", "/img/trimoto_naranja.jpg"],
      cat: "Autos",
    },
  },
  {
    k: "paseo",
    title: "Pasear y explorar",
    desc: "Fines de semana, deporte",
    icon: (
      <svg
        className="w-8 h-8 sm:w-11 sm:h-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 20l7-12 4 7 3-4 6 9zM9 8l2 3"
        />
      </svg>
    ),
    result: {
      t: "Una fat bike o una bici de montaña",
      p: "Para salir los fines de semana, subir cuestas sin cansarte y llegar más lejos.",
      imgs: ["/img/fatred.jpg", "/img/mtb.jpg"],
      cat: "Bicicletas",
    },
  },
];

export default function Selector() {
  const [selectedKey, setSelectedKey] = useState(null);
  const resultRef = useRef(null);
  const selectedOption = OPTIONS.find((o) => o.k === selectedKey);

  // Autoscroll suave hacia el resultado al abrir
  useEffect(() => {
    if (selectedKey && resultRef.current) {
      const timer = setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [selectedKey]);

  return (
    <section id="elegir" className="bg-salvia py-[clamp(60px,9vw,160px)]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Cabecera animada */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-10 items-end mb-8 sm:mb-14">
          <SplitHeadingSelector text="¿Para qué la vas a" highlight="usar?" />

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="text-musgo text-sm sm:text-[clamp(17px,1.5vw,21px)] leading-relaxed"
          >
            Elige lo que más se parece a tu día y te decimos qué tipo de
            vehículo te conviene.
          </motion.p>
        </div>

        {/* 4 Opciones: 2 columnas en móvil y 4 en escritorio */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {OPTIONS.map((opt, index) => {
            const isSelected = selectedKey === opt.k;
            return (
              <motion.button
                key={opt.k}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                onClick={() => setSelectedKey(isSelected ? null : opt.k)}
                className={`group rounded-[20px] sm:rounded-[28px] p-4 sm:p-6 min-h-[160px] sm:min-h-[210px] flex flex-col justify-between text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-bosque text-white shadow-md scale-[1.01]"
                    : "bg-niebla text-tinta hover:-translate-y-1 shadow-xs"
                }`}
              >
                <div
                  className={`transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${
                    isSelected ? "text-brote" : "text-hoja"
                  }`}
                >
                  {opt.icon}
                </div>

                <div>
                  <b className="block font-display text-base sm:text-[26px] tracking-tight leading-tight font-bold">
                    {opt.title}
                  </b>
                  <small
                    className={`block text-[11px] sm:text-sm font-sans mt-1 leading-snug line-clamp-1 sm:line-clamp-none ${
                      isSelected ? "text-[#a9c1b0]" : "text-musgo"
                    }`}
                  >
                    {opt.desc}
                  </small>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Panel Desplegable con Resultado y Autoscroll */}
        <AnimatePresence>
          {selectedOption && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mt-4 sm:mt-5 rounded-[24px] sm:rounded-[32px] bg-bosque text-white overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] shadow-xl"
            >
              {/* Texto y botón */}
              <div className="p-5 sm:p-[clamp(28px,4vw,56px)] flex flex-col justify-center">
                <h3 className="font-display font-bold text-2xl sm:text-[clamp(28px,3.4vw,48px)] tracking-tight leading-tight mb-2 sm:mb-3.5 text-white">
                  {selectedOption.result.t}
                </h3>
                <p className="text-[#a9c1b0] text-sm sm:text-lg mb-5 sm:mb-7 max-w-[460px] leading-relaxed">
                  {selectedOption.result.p}
                </p>
                <div>
                  <a
                    href="#catalogo"
                    className="inline-flex items-center gap-2.5 sm:gap-3.5 pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-white hover:bg-salvia text-bosque font-semibold text-xs sm:text-[15px] transition-transform duration-300 hover:-translate-y-0.5 shadow-sm"
                  >
                    <span>Ver estos modelos</span>
                    <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bosque text-white flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </a>
                </div>
              </div>

              {/* 2 Fotos de los modelos recomendados con altura explícita y alt descriptivo */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 p-2.5 sm:p-3.5">
                {selectedOption.result.imgs.map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden w-full h-44 sm:h-60 bg-salvia"
                  >
                    <Image
                      src={img}
                      alt={`${selectedOption.result.t} - Modelo recomendado`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
