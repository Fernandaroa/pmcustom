import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";
import { buildServiceHead } from "@/lib/service-head";

const service = services.find((s) => s.slug === "desarrollo-productos")!;

export const Route = createFileRoute("/desarrollo-productos")({
  head: () => buildServiceHead(service, "/desarrollo-productos"),
  component: () => <ServicePageView service={service} />,
});
