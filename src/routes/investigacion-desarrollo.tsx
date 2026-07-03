import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";
import { buildServiceHead } from "@/lib/service-head";

const service = services.find((s) => s.slug === "investigacion-desarrollo")!;

export const Route = createFileRoute("/investigacion-desarrollo")({
  head: () => buildServiceHead(service, "/investigacion-desarrollo"),
  component: () => <ServicePageView service={service} />,
});
