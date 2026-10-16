// src/lib/whatsapp.js
import { siteConfig } from "@/data/siteConfig";

export function createWhatsAppLink(message = "") {
  const phone = siteConfig.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
