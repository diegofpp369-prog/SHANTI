import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-yoga.jpg";
import introImg from "@/assets/intro-space.jpg";
import expYoga from "@/assets/exp-yoga.jpg";
import expBrunch from "@/assets/exp-brunch.jpg";
import expCeremonias from "@/assets/exp-ceremonias.jpg";
import expTalleres from "@/assets/exp-talleres.jpg";
import expEncuentros from "@/assets/exp-encuentros.jpg";
import expRetiros from "@/assets/exp-retiros.jpg";
import { waLink } from "@/lib/site";
import { Section } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shanti Ibarra — Bienestar para cuerpo, mente y alma" },
      {
        name: "description",
        content:
          "Santuario de bienestar en Ibarra, Ecuador. Yoga, brunch consciente, ceremonias, talleres y retiros en los Andes de Imbabura.",
      },
      { property: "og:title", content: "Shanti Ibarra — Bienestar en los Andes" },
      {
        property: "og:description",
        content:
          "Un espacio para reconectar con el cuerpo, la mente y el alma en Ibarra, Ecuador.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const experiences = [
  { slug: "yoga", title: "Yoga", desc: "Práctica consciente que integra cuerpo, respiración y presencia.", img: expYoga },
  { slug: "brunch", title: "Brunch Consciente", desc: "Comer despacio, en comunidad, con alimentos vivos y locales.", img: expBrunch },
  { slug: "ceremonias", title: "Ceremonias", desc: "Rituales contemporáneos para transitar, honrar y soltar.", img: expCeremonias },
  { slug: "talleres", title: "Talleres", desc: "Espacios íntimos de aprendizaje, escritura y meditación.", img: expTalleres },
  { slug: "encuentros", title: "Encuentros", desc: "Mesas largas, música suave y conversaciones que sanan.", img: expEncuentros },
  { slug: "retiros", title: "Retiros", desc: "Días completos entre montañas para volver a ti.", img: expRetiros },
] as const;

const pillars = [
  { n: "01", t: "Comunidad", d: "Un círculo humano cálido donde cada persona es bienvenida tal como es." },
  { n: "02", t: "Bienestar integral", d: "Cuerpo, mente y alma alineados a través de prácticas ancestrales y contemporáneas." },
  { n: "03", t: "Naturaleza", d: "El paisaje andino de Imbabura como maestro, refugio y espejo." },
  { n: "04", t: "Autenticidad", d: "Experiencias reales, sin poses ni pretensión. Solo presencia." },
  { n: "05", t: "Crecimiento", d: "Un camino sostenido de exploración personal en comunidad." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Yoga al amanecer frente al volcán Imbabura, Ecuador"
            className="ken-burns h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-12 pt-32 lg:px-16 lg:pb-20">
          <div className="fade-slow flex items-center gap-4 text-white/80">
            <span className="h-px w-10 bg-white/60" />
            <span className="text-[0.7rem] tracking-[0.32em] uppercase">Ibarra · Imbabura · Ecuador</span>
          </div>

          <div className="reveal max-w-4xl">
            <h1 className="font-display text-6xl leading-[0.95] text-white md:text-8xl lg:text-[9rem]">
              Shanti<br/>
              <span className="italic text-white/95">Ibarra</span>
            </h1>
            <p className="mt-8 max-w-lg font-serif text-xl leading-relaxed text-white/90 md:text-2xl">
              Bienestar para cuerpo, mente y alma.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-charcoal transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Reservar por WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/experiencias"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-7 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-white transition-all hover:bg-white/10"
              >
                Conocer experiencias
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center pt-8">
            <div className="flex flex-col items-center gap-3 text-white/70">
              <span className="text-[0.6rem] tracking-[0.32em] uppercase">Deslizar</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Section className="!py-32 md:!py-40">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20 items-center">
          <div className="md:col-span-7">
            <div className="eyebrow mb-8">Un espacio</div>
            <h2 className="font-display text-5xl leading-[1.02] md:text-7xl">
              Un espacio para <em className="italic text-primary/90">volver a ti.</em>
            </h2>
            <div className="mt-10 max-w-lg space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Shanti Ibarra nace como un refugio en los Andes ecuatorianos.
                Un santuario contemporáneo donde el yoga, los alimentos vivos,
                las ceremonias y la comunidad se entretejen en una sola experiencia.
              </p>
              <p>
                Aquí no vienes a hacer. Vienes a estar.
                A recordarte. A respirar.
              </p>
            </div>
            <Link
              to="/nosotros"
              className="mt-12 inline-flex items-center gap-3 text-[0.75rem] tracking-[0.24em] uppercase text-foreground group"
            >
              <span className="border-b border-foreground/40 pb-1 group-hover:border-primary">
                Conocer nuestra historia
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={introImg}
                alt="Interior sereno del santuario Shanti"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1600}
                height={1800}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCIAS */}
      <section className="bg-secondary/40 py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="eyebrow mb-6">Experiencias</div>
              <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
                Prácticas para <em className="italic">habitar</em> el presente.
              </h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Seis maneras de reconectar. Cada experiencia se cultiva en grupos pequeños,
              en espacios cuidados, con la calma como método.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <Link
                key={exp.slug}
                to="/experiencias"
                hash={exp.slug}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl">{exp.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {exp.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SHANTI */}
      <Section eyebrow="Por qué Shanti" className="!py-32 md:!py-40">
        <div className="mt-4 max-w-3xl">
          <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
            No es un estudio.<br />
            Es una forma de <em className="italic text-primary/90">vivir.</em>
          </h2>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="border-t border-border pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-primary/70">{p.n}</span>
                <h3 className="font-display text-3xl">{p.t}</h3>
              </div>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHATSAPP CTA */}
      <section className="relative overflow-hidden bg-charcoal text-background">
        <div className="mx-auto max-w-6xl px-6 py-32 text-center md:py-48 lg:px-10">
          <div className="eyebrow mb-8 text-background/60">Reservas</div>
          <h2 className="font-display text-5xl leading-[1.03] text-background md:text-7xl lg:text-8xl">
            Tu próximo momento<br />
            de <em className="italic">bienestar</em> comienza aquí.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-background/70 md:text-lg">
            Escríbenos y te acompañamos a elegir la experiencia
            que hoy resuena contigo.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-[0.75rem] tracking-[0.24em] uppercase text-charcoal transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Reservar por WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
