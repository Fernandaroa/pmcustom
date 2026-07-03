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
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="theme-p2 flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="p2-display text-7xl text-[var(--p2-white)]">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[var(--p2-white)]">Página no encontrada</h2>
        <p className="mt-2 text-sm text-[var(--p2-muted)]">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link to="/" className="p2-btn">Volver al inicio</Link>
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
    <div className="theme-p2 flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-[var(--p2-white)]">No pudimos cargar esta página</h1>
        <p className="mt-2 text-sm text-[var(--p2-muted)]">
          Ocurrió un error. Intenta nuevamente o vuelve al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="p2-btn"
          >
            Reintentar
          </button>
          <Link to="/" className="p2-btn-ghost">Inicio</Link>
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
      { title: "Sistemas Embebidos e IoT para Empresas | PM CUSTOM Chile" },
      {
        name: "description",
        content:
          "Sistemas embebidos, IoT y automatización industrial a medida. Datos en tiempo real y control operacional para empresas en Chile.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PM CUSTOM" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "PM CUSTOM",
              url: "/",
              description:
                "Empresa chilena de desarrollo de sistemas embebidos, soluciones IoT y automatización industrial a medida.",
              areaServed: "CL",
            },
            {
              "@type": "WebSite",
              name: "PM CUSTOM",
              url: "/",
            },
          ],
        }),
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
      <Outlet />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
