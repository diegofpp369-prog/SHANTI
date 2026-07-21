import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { waLink } from "@/lib/site";
import expYoga from "@/assets/exp-yoga.jpg";
import expBrunch from "@/assets/exp-brunch.jpg";
import expCeremonias from "@/assets/exp-ceremonias.jpg";
import expTalleres from "@/assets/exp-talleres.jpg";
import expEncuentros from "@/assets/exp-encuentros.jpg";
import expRetiros from "@/assets/exp-retiros.jpg";

export const Route = createFileRoute("/experiencias")({
  head: () => ({
    meta: [
      { title: "Experiencias — Yoga, Brunch, Ceremonias y Retiros | Shanti Ibarra" },
      {
        name: "description",
        content:
          "Yoga, brunch consciente, ceremonias, talleres, encuentros y retiros en Ibarra, Ecuador. Experiencias cuidadas para volver a ti.",
      },
      { property: "og:title", content: "Experiencias — Shanti Ibarra" },
      { property: "og:description", content: "Yoga, brunch, ceremonias, talleres y retiros en los Andes." },
      { property: "og:url", content: "/experiencias" },
    ],
    links: [{ rel: "canonical", href: "/experiencias" }],
  }),
  component: Page,
});

type Exp = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  benefits: string[];
  img: string;
};

const experiences: Exp[] = [
  {
    slug: "yoga",
    title: "Yoga",
    eyebrow: "Práctica diaria",
    intro:
      "Sesiones de yoga que integran movimiento, respiración y contemplación. Para todos los niveles, con un enfoque humano y sin prisa.",
    benefits: ["Vinyasa suave", "Hatha clásico", "Yin & restaurativo", "Meditación guiada"],
    img: expYoga,
  },
  {
    slug: "brunch",
    title: "Brunch Consciente",
    eyebrow: "Alimentos vivos",
    intro:
      "Un ritual de mesa larga con alimentos locales, frescos y de temporada. Comer despacio, agradecer, compartir.",
    benefits: ["Ingredientes orgánicos", "Cocina de estación", "Mesa comunitaria", "Menú del día"],
    img: expBrunch,
  },
  {
    slug: "ceremonias",
    title: "Ceremonias",
    eyebrow: "Rituales contemporáneos",
    intro:
      "Ceremonias del cacao, luna, palo santo y agradecimiento. Rituales sencillos, humanos, sin dogma.",
    benefits: ["Cacao ceremonial", "Ceremonia de luna", "Rituales de cierre", "Círculos de mujeres"],
    img: expCeremonias,
  },
  {
    slug: "talleres",
    title: "Talleres",
    eyebrow: "Aprender juntas",
    intro:
      "Talleres íntimos sobre escritura, meditación, respiración consciente, cocina viva y crecimiento personal.",
    benefits: ["Grupos reducidos", "Facilitadoras invitadas", "Materiales incluidos", "Sábados de práctica"],
    img: expTalleres,
  },
  {
    slug: "encuentros",
    title: "Encuentros Especiales",
    eyebrow: "Comunidad",
    intro:
      "Cenas, conciertos íntimos, noches de conversación. Momentos para tejer comunidad y celebrar.",
    benefits: ["Mesa larga al atardecer", "Música en vivo", "Colaboraciones", "Eventos privados"],
    img: expEncuentros,
  },
  {
    slug: "retiros",
    title: "Retiros",
    eyebrow: "Días completos",
    intro:
      "Retiros de uno o varios días entre las montañas de Imbabura. Yoga, alimentación, silencio y naturaleza.",
    benefits: ["Retiros de día", "Fines de semana", "Retiros temáticos", "Corporativos a medida"],
    img: expRetiros,
  },
];

function Page() {
  return (
    <div className="pt-32">
      <Section eyebrow="Experiencias" className="!pt-16 !pb-16">
        <h1 className="font-display text-6xl leading-[0.98] md:text-8xl lg:text-9xl">
          Seis caminos<br />
          <em className="italic text-primary/90">un mismo regreso.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Cada experiencia es una puerta distinta hacia la calma.
          Elige la que hoy te llame.
        </p>
      </Section>

      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        {experiences.map((exp, i) => (
          <section
            key={exp.slug}
            id={exp.slug}
            className={`grid gap-12 border-t border-border py-20 md:grid-cols-12 md:gap-16 md:py-28 scroll-mt-32 ${
              i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="md:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={exp.img} alt={exp.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="md:col-span-6 md:pt-8">
              <div className="eyebrow mb-6">{exp.eyebrow}</div>
              <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">{exp.title}</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                {exp.intro}
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3">
                {exp.benefits.map((b) => (
                  <li key={b} className="flex items-baseline gap-3 text-sm">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Shanti, me interesa la experiencia de ${exp.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-all hover:bg-foreground hover:text-background"
              >
                Reservar {exp.title.toLowerCase()}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
