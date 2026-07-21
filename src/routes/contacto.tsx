import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, MapPin, Clock, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Reservas — Shanti Ibarra" },
      {
        name: "description",
        content:
          "Reserva tu experiencia en Shanti Ibarra. WhatsApp, Instagram, ubicación y horarios en Ibarra, Ecuador.",
      },
      { property: "og:title", content: "Contacto — Shanti Ibarra" },
      { property: "og:description", content: "Escríbenos por WhatsApp o Instagram." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Page,
});

function Page() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Shanti, soy ${form.nombre}. ${form.mensaje}${
      form.email ? ` (Contacto: ${form.email})` : ""
    }`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-32">
      <Section eyebrow="Contacto" className="!pt-16 !pb-16">
        <h1 className="font-display text-6xl leading-[0.98] md:text-8xl lg:text-9xl">
          Escríbenos.<br />
          <em className="italic text-primary/90">Te esperamos.</em>
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          La forma más rápida de reservar es por WhatsApp.
          Respondemos personalmente cada mensaje.
        </p>
      </Section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:py-32 lg:px-10">
          {/* Info */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <div className="eyebrow mb-4">WhatsApp</div>
              <a
                href={waLink()}
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-display text-3xl md:text-4xl"
              >
                <MessageCircle className="h-6 w-6 text-primary" />
                {SITE.whatsappDisplay}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div>
              <div className="eyebrow mb-4">Instagram</div>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-3 font-display text-2xl md:text-3xl">
                <Instagram className="h-5 w-5" /> {SITE.instagramHandle}
              </a>
            </div>

            <div>
              <div className="eyebrow mb-4">Email</div>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 font-display text-2xl md:text-3xl">
                <Mail className="h-5 w-5" /> {SITE.email}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <div className="mb-3 flex items-center gap-2 eyebrow">
                  <MapPin className="h-3.5 w-3.5" /> Ubicación
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ibarra, Imbabura<br />Ecuador
                </p>
              </div>
              <div>
                <div className="mb-3 flex items-center gap-2 eyebrow">
                  <Clock className="h-3.5 w-3.5" /> Horarios
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lun – Sáb<br />7:00 – 20:00
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-sm border border-border bg-secondary/40 p-8 md:p-12">
              <div className="eyebrow mb-6">Envíanos un mensaje</div>
              <form onSubmit={sendWhatsApp} className="space-y-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Nombre</label>
                  <input required value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email o teléfono</label>
                  <input value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-b border-border bg-transparent py-3 outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Mensaje</label>
                  <textarea required rows={4} value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    placeholder="¿En qué experiencia te gustaría participar?"
                    className="w-full resize-none border-b border-border bg-transparent py-3 outline-none focus:border-primary transition-colors" />
                </div>
                <button type="submit"
                  className="mt-4 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-[0.72rem] tracking-[0.24em] uppercase text-background transition-all hover:bg-primary">
                  Enviar por WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="eyebrow mb-6">Cómo llegar</div>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Ibarra, corazón de Imbabura.</h2>
          <div className="mt-10 overflow-hidden rounded-sm border border-border">
            <iframe
              title="Ubicación de Shanti Ibarra"
              src="https://www.google.com/maps?q=Ibarra,Ecuador&output=embed"
              className="h-[420px] w-full grayscale-[30%] contrast-[95%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
