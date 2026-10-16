// src/lib/whatsapp.js
import { siteConfig } from "@/data/siteConfig";

export function createWhatsAppLink(message) {
  const text = encodeURIComponent(
    message ||
      "Hola Green Center, deseo más información sobre sus vehículos eléctricos.",
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
