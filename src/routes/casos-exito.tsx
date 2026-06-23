import { createFileRoute, Link, Outlet, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { cases } from "@/lib/content";

export const Route = createFileRoute("/casos-exito")({
  component: () => <Outlet />,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-[900px] mx-auto px-6 py-32 text-center">
        <h1 className="p2-display text-5xl text-[var(--p2-white)]">Caso no encontrado</h1>
        <Link to="/casos-exito" className="mt-8 inline-flex p2-btn">Ver todos los casos</Link>
      </div>
    </SiteLayout>
  ),
});

// Re-export shared utilities for child routes
export { cases };
export const findCase = (slug: string) => {
  const c = cases.find((x) => x.slug === slug);
  if (!c) throw notFound();
  return c;
};
