// src/components/sections/Calculator.jsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1];

function SplitHeadingCalc({ text, highlight }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <h2
      ref={ref}
      className="font-display font-bold text-[clamp(32px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-white max-w-[1000px]"
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
          className="inline-block italic not-italic text-brote"
        >
          {highlight}
        </motion.span>
      </span>
    </h2>
  );
}

export default function Calculator() {
  const [km, setKm] = useState(25);
  const [dias, setDias] = useState(26);

  const [rend, setRend] = useState(35);
  const [pgas, setPgas] = useState(6.96);
  const [whk, setWhk] = useState(22);
  const [pkwh, setPkwh] = useState(1.0);

  const totMensual = km * dias;
  const gasMensual = (totMensual / (rend || 1)) * pgas;
  const eleMensual = ((totMensual * whk) / 1000) * pkwh;
  const saveAnual = Math.max(0, (gasMensual - eleMensual) * 12);
  const litAnual = (totMensual / (rend || 1)) * 12;
  const co2Anual = litAnual * 2.31;

  const maxGasto = Math.max(gasMensual, eleMensual, 1);
  const barGasWidth = `${(gasMensual / maxGasto) * 100}%`;
  const barEleWidth = `${Math.max(3, (eleMensual / maxGasto) * 100)}%`;

  return (
    <section
      id="ahorro"
      className="bg-bosque text-[#eaf1e6] py-[clamp(60px,9vw,160px)] relative"
    >
      <div className="absolute left-[3%] top-[10%] w-[54px] text-brote opacity-[0.18] pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#9db8a4] mb-3 sm:mb-[22px]"
        >
          <svg
            className="w-[18px] h-[18px] text-brote fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M20.5 3.5C11 3 4.5 7.5 4.5 14.2c0 1.7.5 3 1.2 4.1L3 21l1.4.9 2.7-2.6c1.1.6 2.4.9 3.8.9 6.4 0 10.2-6.2 9.6-16.7z" />
          </svg>
          Calculadora de ahorro
        </motion.div>

        {/* Titular */}
        <SplitHeadingCalc
          text="¿Cuánto dejarías de gastar"
          highlight="cada año?"
        />

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="text-[#a9c1b0] text-sm sm:text-[clamp(17px,1.5vw,21px)] max-w-[640px] leading-relaxed mt-4 sm:mt-6"
        >
          Mueve los controles según cómo te mueves y compara una moto a gasolina
          con una eléctrica.
        </motion.p>

        {/* Panel Calculadora */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-4 sm:gap-[clamp(24px,4vw,56px)] mt-8 sm:mt-14 items-stretch">
          {/* LADO IZQUIERDO: Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="bg-bosque2 rounded-[28px] sm:rounded-[32px] p-5 sm:p-[clamp(24px,3vw,40px)] flex flex-col justify-between"
          >
            <div>
              {/* Slider 1 */}
              <div className="mb-5 sm:mb-7">
                <div className="flex justify-between items-baseline mb-2 text-[#cfdccf] text-sm sm:text-base">
                  <span>Kilómetros al día</span>
                  <output className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {km}
                    <small className="font-sans text-xs sm:text-sm font-medium text-[#9db8a4] ml-1">
                      km
                    </small>
                  </output>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  value={km}
                  onChange={(e) => setKm(+e.target.value)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-white"
                  style={{
                    background: `linear-gradient(90deg, #bfd9a6 ${((km - 5) / (120 - 5)) * 100}%, rgba(255,255,255,0.14) ${((km - 5) / (120 - 5)) * 100}%)`,
                  }}
                />
              </div>

              {/* Slider 2 */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-baseline mb-2 text-[#cfdccf] text-sm sm:text-base">
                  <span>Días de uso al mes</span>
                  <output className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {dias}
                    <small className="font-sans text-xs sm:text-sm font-medium text-[#9db8a4] ml-1">
                      días
                    </small>
                  </output>
                </div>
                <input
                  type="range"
                  min="8"
                  max="30"
                  value={dias}
                  onChange={(e) => setDias(+e.target.value)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-white"
                  style={{
                    background: `linear-gradient(90deg, #bfd9a6 ${((dias - 8) / (30 - 8)) * 100}%, rgba(255,255,255,0.14) ${((dias - 8) / (30 - 8)) * 100}%)`,
                  }}
                />
              </div>

              {/* Ajustar supuestos */}
              <details className="border-t border-white/10 pt-3.5 group">
                <summary className="cursor-pointer font-semibold text-brote text-sm list-none flex items-center justify-between select-none">
                  <span>Ajustar supuestos</span>
                  <span className="text-xs transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mt-3 pt-1">
                  <div>
                    <label className="text-xs text-[#9db8a4] block">
                      Rendimiento gasolina (km/L)
                    </label>
                    <input
                      type="number"
                      step="1"
                      value={rend}
                      onChange={(e) => setRend(+e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl border-0 bg-white/10 text-white font-sans text-sm outline-none focus:ring-1 focus:ring-brote"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#9db8a4] block">
                      Precio gasolina (Bs/L)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={pgas}
                      onChange={(e) => setPgas(+e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl border-0 bg-white/10 text-white font-sans text-sm outline-none focus:ring-1 focus:ring-brote"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#9db8a4] block">
                      Consumo eléctrico (Wh/km)
                    </label>
                    <input
                      type="number"
                      step="1"
                      value={whk}
                      onChange={(e) => setWhk(+e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl border-0 bg-white/10 text-white font-sans text-sm outline-none focus:ring-1 focus:ring-brote"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#9db8a4] block">
                      Precio electricidad (Bs/kWh)
                    </label>
                    <input
                      type="number"
                      step="0.05"
                      value={pkwh}
                      onChange={(e) => setPkwh(+e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl border-0 bg-white/10 text-white font-sans text-sm outline-none focus:ring-1 focus:ring-brote"
                    />
                  </div>
                </div>
              </details>
            </div>
          </motion.div>

          {/* LADO DERECHO: Resultados */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="bg-niebla text-tinta rounded-[28px] sm:rounded-[32px] p-5 sm:p-[clamp(24px,3vw,44px)] flex flex-col justify-between gap-5 sm:gap-7 shadow-sm"
          >
            {/* Comparación mensual */}
            <div>
              {/* Barra Gasolina */}
              <div className="mb-4 sm:mb-5">
                <div className="flex justify-between items-baseline mb-1.5 font-semibold">
                  <span className="text-musgo text-xs sm:text-base">
                    Moto a gasolina
                  </span>
                  <b className="font-display text-xl sm:text-[clamp(26px,2.8vw,38px)] tracking-tight text-tinta">
                    Bs{" "}
                    {gasMensual.toLocaleString("es-BO", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </b>
                </div>
                <div className="h-5 sm:h-7 rounded-full bg-tinta/[0.07] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#8a968d] transition-all duration-700 ease-out"
                    style={{ width: barGasWidth }}
                  />
                </div>
              </div>

              {/* Barra Eléctrica */}
              <div>
                <div className="flex justify-between items-baseline mb-1.5 font-semibold">
                  <span className="text-musgo text-xs sm:text-base">
                    Moto o bici eléctrica
                  </span>
                  <b className="font-display text-xl sm:text-[clamp(26px,2.8vw,38px)] tracking-tight text-hoja">
                    Bs{" "}
                    {eleMensual.toLocaleString("es-BO", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </b>
                </div>
                <div className="h-5 sm:h-7 rounded-full bg-tinta/[0.07] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-hoja2 to-hoja transition-all duration-700 ease-out"
                    style={{ width: barEleWidth }}
                  />
                </div>
              </div>

              <div className="text-xs sm:text-[13px] text-musgo mt-2.5">
                Gasto mensual estimado en combustible o energía.
              </div>
            </div>

            {/* Cuadro de Ahorro Anual */}
            <div className="bg-hoja text-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 shadow-sm">
              <span className="text-xs sm:text-[15px] opacity-85 block">
                Ahorro estimado en un año
              </span>
              <b className="block font-display text-[clamp(36px,10vw,82px)] tracking-[-0.05em] leading-none mt-1 text-white">
                Bs{" "}
                {saveAnual.toLocaleString("es-BO", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </b>
            </div>

            {/* Mini Cuadros compactos en móvil */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
              <div className="bg-white rounded-[18px] sm:rounded-[22px] p-3.5 sm:p-5 shadow-sm">
                <b className="block font-display text-xl sm:text-3xl font-bold tracking-tight text-tinta leading-none">
                  {litAnual.toLocaleString("es-BO", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </b>
                <span className="text-[11px] sm:text-sm text-musgo mt-1 sm:mt-1.5 block leading-tight">
                  litros de gasolina ahorrados/año
                </span>
              </div>
              <div className="bg-white rounded-[18px] sm:rounded-[22px] p-3.5 sm:p-5 shadow-sm">
                <b className="block font-display text-xl sm:text-3xl font-bold tracking-tight text-tinta leading-none">
                  {co2Anual.toLocaleString("es-BO", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </b>
                <span className="text-[11px] sm:text-sm text-musgo mt-1 sm:mt-1.5 block leading-tight">
                  kg de CO₂ evitados al año
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nota legal */}
        <p className="text-xs text-[#9db8a4] max-w-[760px] mt-4 sm:mt-6 leading-relaxed">
          Estimación referencial. Gasolina especial a Bs 6,96 por litro (precio
          vigente en 2026); consumo eléctrico calculado con la batería 48V 18Ah
          y 40 km de autonomía de la Super Bike. CO₂ calculado con 2,31 kg por
          litro quemado.
        </p>
      </div>
    </section>
  );
}
