import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/experiencias", label: "Experiencias" },
  { to: "/eventos", label: "Eventos" },
  { to: "/galeria", label: "Galería" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-widest text-foreground">
            SHANTI
          </span>
          <span className="hidden h-px w-6 bg-foreground/30 sm:block" />
          <span className="hidden text-[0.65rem] tracking-[0.32em] text-muted-foreground sm:block">
            IBARRA
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.8rem] tracking-[0.18em] uppercase text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-foreground/70 px-5 py-2.5 text-[0.72rem] tracking-[0.22em] uppercase text-foreground transition-all hover:bg-foreground hover:text-background md:inline-block"
          >
            Reservar
          </a>
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-foreground/30 p-2 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-foreground/85 py-2"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-foreground px-6 py-3 text-center text-[0.72rem] tracking-[0.22em] uppercase text-background"
            >
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
