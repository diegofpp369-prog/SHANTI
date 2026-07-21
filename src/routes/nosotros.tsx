import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import chavelina from "@/assets/about-chavelina.jpg";
import intro from "@/assets/intro-space.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Shanti Ibarra" },
      {
        name: "description",
        content:
          "La historia, filosofía y comunidad detrás de Shanti Ibarra: un santuario de bienestar en los Andes ecuatorianos.",
      },
      { property: "og:title", content: "Nosotros — Shanti Ibarra" },
      { property: "og:description", content: "Historia, filosofía y comunidad de Shanti Ibarra." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="pt-32">
      {/* Hero editorial */}
      <Section eyebrow="Nosotros" className="!pt-16 !pb-24">
        <h1 className="font-display text-6xl leading-[0.98] md:text-8xl lg:text-9xl">
          Un santuario<br />
          <em className="italic text-primary/90">nacido de la escucha.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Shanti Ibarra existe para las personas que buscan algo más que una clase.
          Un lugar donde el bienestar deja de ser una tarea y se convierte en una manera de estar.
        </p>
      </Section>

      {/* Historia */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:gap-20 md:py-32 lg:px-10">
          <div className="md:col-span-5">
            <div className="eyebrow mb-6">Nuestra historia</div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Del silencio andino a un espacio compartido.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Shanti nació de una necesidad íntima: crear un espacio donde volver
              a lo esencial fuera posible sin salir del país. Un lugar entre montañas,
              cerca del volcán Imbabura, donde el tiempo se mide en respiraciones.
            </p>
            <p>
              Lo que comenzó como una práctica personal se convirtió, con los años,
              en una comunidad viva. Personas de todas las edades y caminos que
              encuentran en Shanti un hogar temporal para sí mismas.
            </p>
          </div>
        </div>
      </section>

      {/* Chavelina */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={chavelina} alt="Chavelina, fundadora de Shanti Ibarra"
                   className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div className="eyebrow mb-6">Conoce a Chavelina</div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              La fundadora.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Chavelina es maestra, buscadora y anfitriona. Después de años
                de práctica y estudio entre India, México y los Andes, regresó a
                Ibarra para tejer todo lo aprendido en un solo lugar.
              </p>
              <p>
                Su acercamiento es humano, sin dogma. Bebe del yoga clásico,
                de la meditación, de las cocinas conscientes y de las tradiciones
                andinas. Todo con una sola intención: acompañar a las personas
                a reencontrarse consigo mismas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
          <div className="md:col-span-6">
            <div className="eyebrow mb-6">Filosofía</div>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Lo sagrado <em className="italic">sin solemnidad.</em>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Creemos que la espiritualidad se cocina, se camina y se comparte.
                Que no necesita disfraces ni exotismo. Que puede vivir en
                una taza de café, en un abrazo, en una postura sostenida
                sin apuro.
              </p>
              <p>
                Aquí no hay verdades absolutas. Solo prácticas cuidadas,
                personas cálidas y una montaña como testigo.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
            <img src={intro} alt="Espacio interior de Shanti"
                 className="aspect-[5/6] w-full rounded-sm object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="border-t border-border bg-charcoal text-background">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center md:py-40 lg:px-10">
          <div className="eyebrow mb-8 text-background/60">Nuestra visión</div>
          <p className="font-display text-3xl leading-[1.2] md:text-5xl">
            "Que cada persona que cruce nuestra puerta se lleve consigo
            un pedacito de calma, y la certeza de que <em className="italic">volver a sí misma</em> siempre es posible."
          </p>
          <div className="mt-10 text-sm tracking-[0.28em] uppercase text-background/60">
            — Shanti Ibarra
          </div>
        </div>
      </section>
    </div>
  );
}
