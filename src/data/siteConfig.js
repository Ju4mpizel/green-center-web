// src/data/siteConfig.js
export const siteConfig = {
  name: "Green Center Bolivia",
  slogan: "Movilidad eléctrica hecha para Bolivia.",
  whatsappNumber: "59174177120", // Número oficial actualizado
  instagram: "https://www.instagram.com/greencentertv.electricos/",
  cities: ["Santa Cruz", "Cochabamba"],
};

export function getWhatsAppUrl(message) {
  const text = encodeURIComponent(
    message ||
      "Hola Green Center, deseo más información sobre sus vehículos eléctricos.",
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
