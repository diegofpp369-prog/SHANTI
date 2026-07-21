export const SITE = {
  name: "Shanti Ibarra",
  tagline: "Bienestar para cuerpo, mente y alma.",
  location: "Ibarra, Ecuador",
  whatsappNumber: "593988706699",
  whatsappDisplay: "+593 98 870 6699",
  instagram: "https://www.instagram.com/shanti.ibarra/",
  instagramHandle: "@shanti.ibarra",
  email: "hola@shantiibarra.com",
} as const;

export const waLink = (message = "Hola Shanti, me gustaría reservar una experiencia.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
