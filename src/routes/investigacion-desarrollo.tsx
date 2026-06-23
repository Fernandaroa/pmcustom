import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";

const service = services.find((s) => s.slug === "investigacion-desarrollo")!;

export const Route = createFileRoute("/investigacion-desarrollo")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/investigacion-desarrollo" },
      { property: "og:image", content: service.image },
    ],
    links: [{ rel: "canonical", href: "/investigacion-desarrollo" }],
  }),
  component: () => <ServicePageView service={service} />,
});
