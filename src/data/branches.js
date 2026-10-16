// src/data/branches.js
export const BRANCHES = [
  {
    id: "scz-central",
    name: "Sucursal Central",
    label: "Central",
    address: "Av. Cristóbal de Mendoza #123, 2do Anillo, Santa Cruz",
    query:
      "Green Center Bolivia Av Cristobal de Mendoza Santa Cruz de la Sierra",
    mapUrl: "https://maps.google.com/?q=Santa+Cruz+de+la+Sierra+Bolivia",
    ring: 70,
    ang: 180,
  },
  {
    id: "scz-motos",
    name: "4to Anillo (Motos)",
    label: "4to Anillo (Motos)",
    address: "Av. Cristo Redentor entre 4to y 5to Anillo, Santa Cruz",
    query: "Av Cristo Redentor 4to Anillo Santa Cruz de la Sierra Bolivia",
    mapUrl: "https://maps.google.com/?q=Av+Cristo+Redentor+Santa+Cruz",
    ring: 165,
    ang: 0,
  },
  {
    id: "scz-3pasos",
    name: "3 Pasos al Frente",
    label: "3 Pasos al Frente",
    address: "Av. 3 Pasos al Frente casi 3er Anillo Interno, Santa Cruz",
    query: "Av 3 Pasos al Frente Santa Cruz de la Sierra Bolivia",
    mapUrl: "https://maps.google.com/?q=Av+3+Pasos+al+Frente+Santa+Cruz",
    ring: 165,
    ang: 36,
  },
  {
    id: "cbba-nueva",
    name: "Cochabamba",
    label: "Cochabamba",
    // TODO: Confirmar dirección exacta con el cliente para la sucursal de Cochabamba
    address: "Av. América y Pando (Próxima apertura oficial), Cochabamba",
    query: "Av America Cochabamba Bolivia",
    mapUrl: "https://maps.google.com/?q=Av+America+Cochabamba+Bolivia",
    isNew: true,
  },
];
