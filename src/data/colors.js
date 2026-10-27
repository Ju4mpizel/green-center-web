// src/data/colors.js

export const COLOR_STYLES = {
  // Básicos
  Blanco: { background: "#f8fafc" },
  "Blanco entero": { background: "#f8fafc" },
  Negro: { background: "#1e293b" },
  Rojo: { background: "#dc2626" },
  Azul: { background: "#2563eb" },
  Plomo: { background: "#64748b" },
  Amarillo: { background: "#eab308" },
  "Celeste eléctrico": { background: "#06b6d4" },
  Lila: { background: "#c4b5fd" },
  Fucsia: { background: "#d946ef" },
  Beige: { background: "#f5f5dc" },
  Guindo: { background: "#800020" },
  Naranja: { background: "#f97316" },

  // Tonos pastel
  "Verde pastel": { background: "#86efac" },
  "Verde menta pastel": { background: "#a7f3d0" },
  "Morado pastel": { background: "#e9d5ff" },
  "Azul pastel": { background: "#bae6fd" },
  "Celeste pastel": { background: "#7dd3fc" },
  "Rosa completa": { background: "#f472b6" },
  Crema: { background: "#fef3c7" },
  Celeste: { background: "#38bdf8" },
  "Azul eléctrico": { background: "#1d4ed8" },
  "Verde olivo": { background: "#556b2f" },
  "Verde agua": { background: "#48d1cc" },

  // Bicolores (partidos con corte nítido)
  "Beige con lila": {
    background: "linear-gradient(135deg, #f5f5dc 50%, #c4b5fd 50%)",
  },
  "Beige con rosado": {
    background: "linear-gradient(135deg, #f5f5dc 50%, #f472b6 50%)",
  },
  "Beige con café": {
    background: "linear-gradient(135deg, #f5f5dc 50%, #8b4513 50%)",
  },
  "Verde agua con beige": {
    background: "linear-gradient(135deg, #48d1cc 50%, #f5f5dc 50%)",
  },
  "Guindo con crema": {
    background: "linear-gradient(135deg, #800020 50%, #fef3c7 50%)",
  },
  "Rosa con blanco": {
    background: "linear-gradient(135deg, #fbcfe8 50%, #ffffff 50%)",
  },
  "Café con crema": {
    background: "linear-gradient(135deg, #b45309 50%, #fef3c7 50%)",
  },
};

export function getColorStyle(colorName) {
  return COLOR_STYLES[colorName] || { background: "#94a3b8" };
}
