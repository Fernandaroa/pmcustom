import type { ServicePage } from "@/lib/content";

export function buildServiceHead(service: ServicePage, path: string) {
  return {
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:url", content: path },
      { property: "og:image", content: service.image },
      { name: "twitter:image", content: service.image },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.metaDescription,
          image: service.image,
          url: path,
          provider: { "@type": "Organization", name: "PM CUSTOM" },
          areaServed: "CL",
        }),
      },
    ],
  };
}
