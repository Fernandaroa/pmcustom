import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";

const service = services.find((s) => s.slug === "iot")!;

export const Route = createFileRoute("/iot")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/iot" },
      { property: "og:image", content: service.image },
    ],
    links: [{ rel: "canonical", href: "/iot" }],
  }),
  component: () => <ServicePageView service={service} />,
});
