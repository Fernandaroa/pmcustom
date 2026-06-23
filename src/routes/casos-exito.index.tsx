import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { cases } from "@/lib/content";

export const Route = createFileRoute("/casos-exito/")({
  head: () => ({
    meta: [
      { title: "Casos de éxito en IoT y sistemas embebidos | PM CUSTOM" },
      {
        name: "description",
        content:
          "Conoce proyectos reales de PM CUSTOM: control inteligente de riego, nodos IoT para agricultura y data loggers desplegados en terreno.",
      },
      { property: "og:title", content: "Casos de éxito | PM CUSTOM" },
      {
        property: "og:description",
        content: "Tecnología aplicada que ya está generando resultados en agricultura, minería e industria.",
      },
      { property: "og:url", content: "/casos-exito" },
    ],
    links: [{ rel: "canonical", href: "/casos-exito" }],
  }),
  component: CasesIndex,
});

function CasesIndex() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28 border-b border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p2-eyebrow">Casos de éxito</div>
          <h1 className="mt-4 p2-display text-4xl md:text-6xl text-[var(--p2-white)] max-w-4xl">
            Tecnología aplicada que ya está <span className="text-[var(--p2-green)]">generando resultados</span>.
          </h1>
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to="/casos-exito/$slug"
              params={{ slug: c.slug }}
              className="p2-card group overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[var(--p2-white)]">{c.title}</h3>
                <p className="mt-3 text-sm text-[var(--p2-white)]/70 flex-1">{c.short}</p>
                <div className="mt-5 text-xs font-semibold text-[var(--p2-green)]">Ver caso →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
