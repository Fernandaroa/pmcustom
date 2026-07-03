import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";
import { buildServiceHead } from "@/lib/service-head";

const service = services.find((s) => s.slug === "automatizacion-industrial")!;

export const Route = createFileRoute("/automatizacion-industrial")({
  head: () => buildServiceHead(service, "/automatizacion-industrial"),
  component: () => <ServicePageView service={service} />,
});
