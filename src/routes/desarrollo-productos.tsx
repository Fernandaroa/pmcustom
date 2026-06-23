import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView } from "@/components/service-page-view";
import { services } from "@/lib/content";

const service = services.find((s) => s.slug === "desarrollo-productos")!;

export const Route = createFileRoute("/desarrollo-productos")({
  head: () => ({
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: "/desarrollo-productos" },
      { property: "og:image", content: service.image },
    ],
    links: [{ rel: "canonical", href: "/desarrollo-productos" }],
  }),
  component: () => <ServicePageView service={service} />,
});
