import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";
import { buildServiceHead } from "@/lib/service-head";

const service = services.find((s) => s.slug === "sistemas-embebidos")!;

export const Route = createFileRoute("/sistemas-embebidos")({
  head: () => buildServiceHead(service, "/sistemas-embebidos"),
  component: () => <ServicePageView service={service} />,
});
