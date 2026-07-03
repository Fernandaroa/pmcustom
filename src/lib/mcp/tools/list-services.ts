import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "@/lib/content";

export default defineTool({
  name: "list_services",
  title: "Listar servicios",
  description:
    "Lista los servicios ofrecidos por PM CUSTOM (sistemas embebidos, IoT, automatización industrial, desarrollo de productos, I+D).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = services.map((s) => ({
      slug: s.slug,
      title: s.title,
      lead: s.lead,
      benefits: s.benefits,
      url: `/${s.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
