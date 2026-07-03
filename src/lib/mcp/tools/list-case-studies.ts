import { defineTool } from "@lovable.dev/mcp-js";
import { cases } from "@/lib/content";

export default defineTool({
  name: "list_case_studies",
  title: "Listar casos de éxito",
  description: "Lista los casos de éxito de PM CUSTOM con su resumen y beneficios.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = cases.map((c) => ({
      slug: c.slug,
      title: c.title,
      short: c.short,
      description: c.description,
      benefits: c.benefits,
      url: `/casos-exito/${c.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { cases: items },
    };
  },
});
