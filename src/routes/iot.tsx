import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { IotPlatformVideo } from "@/components/iot-platform-video";
import { services } from "@/lib/content";
import { buildServiceHead } from "@/lib/service-head";

const service = services.find((s) => s.slug === "iot")!;

export const Route = createFileRoute("/iot")({
  head: () => buildServiceHead(service, "/iot"),
  component: () => <ServicePageView service={service} extra={<IotPlatformVideo />} />,
});
