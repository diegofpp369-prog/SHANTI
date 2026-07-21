import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { waLink } from "@/lib/site";
import expYoga from "@/assets/exp-yoga.jpg";
import expBrunch from "@/assets/exp-brunch.jpg";
import expCeremonias from "@/assets/exp-ceremonias.jpg";
import expTalleres from "@/assets/exp-talleres.jpg";
import expRetiros from "@/assets/exp-retiros.jpg";
import expEncuentros from "@/assets/exp-encuentros.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos y Calendario — Shanti Ibarra" },
      {
        name: "description",
        content:
          "Próximos eventos en Shanti Ibarra: yoga, ceremonias, brunch, talleres y retiros en Ibarra, Ecuador.",
      },
      { property: "og:title", content: "Eventos — Shanti Ibarra" },
      { property: "og:description", content: "Calendario de experiencias y retiros." },
      { property: "og:url", content: "/eventos" },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: Page,
});

type Event = {
  id: string;
  category: "Yoga" | "Ceremonias" | "Brunch" | "Talleres" | "Retiros";
  title: string;
  date: string;
  dateISO: string;
  desc: string;
  img: string;
};

const events: Event[] = [
  { id: "1", category: "Yoga", title: "Vinyasa al amanecer", date: "Sábados · 6:30 AM", dateISO: "sabados", desc: "Práctica suave para despertar el cuerpo con la primera luz sobre Imbabura.", img: expYoga },
  { id: "2", category: "Brunch", title: "Brunch de temporada", date: "Domingo 27 · 10:00", dateISO: "27", desc: "Mesa larga con ingredientes de nuestros huertos y productores vecinos.", img: expBrunch },
  { id: "3", category: "Ceremonias", title: "Ceremonia de cacao", date: "Viernes 15 · 19:00", dateISO: "15", desc: "Círculo íntimo con cacao ceremonial, música en vivo y palabra honesta.", img: expCeremonias },
  { id: "4", category: "Talleres", title: "Taller de escritura consciente", date: "Sábado 22 · 15:00", dateISO: "22", desc: "Tres horas para escuchar lo que pide ser escrito.", img: expTalleres },
  { id: "5", category: "Retiros", title: "Retiro de fin de semana", date: "8 – 10 Nov", dateISO: "nov", desc: "Dos noches en las montañas: yoga, silencio, comidas conscientes.", img: expRetiros },
  { id: "6", category: "Ceremonias", title: "Ceremonia de luna llena", date: "Miércoles 5 · 19:30", dateISO: "5", desc: "Ritual de cierre bajo el cielo despejado de los Andes.", img: expEncuentros },
];

const filters = ["Todos", "Yoga", "Ceremonias", "Brunch", "Talleres", "Retiros"] as const;

function Page() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const visible = active === "Todos" ? events : events.filter((e) => e.category === active);

  return (
    <div className="pt-32">
      <Section eyebrow="Próximos eventos" className="!pt-16 !pb-12">
        <h1 className="font-display text-6xl leading-[0.98] md:text-8xl lg:text-9xl">
          Un calendario<br />
          <em className="italic text-primary/90">para volver.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Cada semana abrimos nuestras puertas con encuentros cuidados.
          Reserva por WhatsApp — los cupos son limitados.
        </p>
      </Section>

      {/* Filtros */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap gap-3 border-y border-border py-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-[0.72rem] tracking-[0.2em] uppercase transition-all ${
                active === f
                  ? "bg-foreground text-background"
                  : "border border-border text-foreground/70 hover:border-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-16 lg:px-10">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((ev) => (
            <article key={ev.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={ev.img} alt={ev.title} loading="lazy"
                     className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.6rem] tracking-[0.22em] uppercase">
                  {ev.category}
                </div>
              </div>
              <div className="mt-6">
                <div className="text-[0.7rem] tracking-[0.24em] uppercase text-muted-foreground">
                  {ev.date}
                </div>
                <h3 className="mt-2 font-display text-3xl leading-tight">{ev.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ev.desc}</p>
                <a
                  href={waLink(`Hola Shanti, quiero reservar: ${ev.title} (${ev.date}).`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.22em] uppercase text-foreground"
                >
                  <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-primary">Reservar</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-24 text-center text-muted-foreground">
            No hay eventos en esta categoría por ahora.
          </p>
        )}
      </div>
    </div>
  );
}
