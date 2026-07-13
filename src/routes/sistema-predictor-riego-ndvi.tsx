import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";
import { buildServiceHead } from "@/lib/service-head";

const service = services.find((s) => s.slug === "sistema-predictor-riego-ndvi")!;

export const Route = createFileRoute("/sistema-predictor-riego-ndvi")({
  head: () => buildServiceHead(service, "/sistema-predictor-riego-ndvi"),
  component: () => <ServicePageView service={service} />,
});
