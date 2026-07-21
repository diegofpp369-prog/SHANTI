import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-4xl leading-tight md:text-5xl">
              Shanti Ibarra
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Un santuario de bienestar en los Andes ecuatorianos. Yoga,
              ceremonias, brunch consciente y encuentros para volver a ti.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full border border-foreground px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-all hover:bg-foreground hover:text-background"
            >
              Reservar por WhatsApp
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Explorar</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/experiencias" className="hover:text-primary">Experiencias</Link></li>
              <li><Link to="/eventos" className="hover:text-primary">Eventos</Link></li>
              <li><Link to="/galeria" className="hover:text-primary">Galería</Link></li>
              <li><Link to="/nosotros" className="hover:text-primary">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Contacto</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{SITE.location}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  WhatsApp {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" /> {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Shanti Ibarra. Todos los derechos reservados.</span>
          <span className="tracking-[0.24em] uppercase">Bienestar · Comunidad · Naturaleza</span>
        </div>
      </div>
    </footer>
  );
}
