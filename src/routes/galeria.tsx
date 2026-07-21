import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Section } from "@/components/section";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import intro from "@/assets/intro-space.jpg";
import expYoga from "@/assets/exp-yoga.jpg";
import expBrunch from "@/assets/exp-brunch.jpg";
import expCeremonias from "@/assets/exp-ceremonias.jpg";
import expEncuentros from "@/assets/exp-encuentros.jpg";
import expRetiros from "@/assets/exp-retiros.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería — Shanti Ibarra" },
      { name: "description", content: "Momentos, personas y paisajes de Shanti Ibarra en los Andes ecuatorianos." },
      { property: "og:title", content: "Galería — Shanti Ibarra" },
      { property: "og:description", content: "Fotografía editorial de nuestro santuario en Ibarra." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Page,
});

const images = [
  { src: g5, alt: "Paisaje andino al amanecer" },
  { src: expYoga, alt: "Manos en gesto de oración" },
  { src: g1, alt: "Luz de la mañana en madera natural" },
  { src: expBrunch, alt: "Brunch consciente" },
  { src: g6, alt: "Silueta en meditación" },
  { src: intro, alt: "Espacio interior sereno" },
  { src: expCeremonias, alt: "Ceremonia con palo santo" },
  { src: g3, alt: "Encuentro entre amigas" },
  { src: g2, alt: "Flores secas en cerámica" },
  { src: expEncuentros, alt: "Cena al atardecer" },
  { src: g4, alt: "Infusión con luz cálida" },
  { src: expRetiros, alt: "Retiro en la montaña" },
];

function Page() {
  const [lb, setLb] = useState<number | null>(null);

  return (
    <div className="pt-32">
      <Section eyebrow="Galería" className="!pt-16 !pb-16">
        <h1 className="font-display text-6xl leading-[0.98] md:text-8xl lg:text-9xl">
          Un archivo<br />
          <em className="italic text-primary/90">de presencia.</em>
        </h1>
      </Section>

      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {images.map((im, i) => (
            <button
              key={i}
              onClick={() => setLb(i)}
              className="block w-full break-inside-avoid overflow-hidden rounded-sm bg-muted group"
              aria-label={`Ver imagen: ${im.alt}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="w-full transition-transform duration-[1400ms] group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lb !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLb(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur"
        >
          <button
            aria-label="Cerrar"
            onClick={() => setLb(null)}
            className="absolute right-6 top-6 rounded-full border border-white/40 p-3 text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[lb].src}
            alt={images[lb].alt}
            className="max-h-[85vh] max-w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
