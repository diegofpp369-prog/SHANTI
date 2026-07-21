import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Página no encontrada</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          El camino que buscas no existe. Regresa al inicio para continuar tu viaje.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase transition-all hover:bg-foreground hover:text-background"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">
          Algo interrumpió tu recorrido
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Intenta recargar o vuelve al inicio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-foreground px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase text-background"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="rounded-full border border-foreground px-6 py-3 text-[0.72rem] tracking-[0.22em] uppercase"
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shanti Ibarra — Bienestar para cuerpo, mente y alma" },
      {
        name: "description",
        content:
          "Santuario de bienestar en Ibarra, Ecuador. Yoga, ceremonias, brunch consciente, talleres y retiros en los Andes de Imbabura.",
      },
      { name: "author", content: "Shanti Ibarra" },
      { property: "og:site_name", content: "Shanti Ibarra" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Shanti Ibarra — Bienestar en los Andes" },
      {
        property: "og:description",
        content:
          "Un espacio para reconectar con el cuerpo, la mente y el alma en Ibarra, Ecuador.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#f6f1e8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="pt-0">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
