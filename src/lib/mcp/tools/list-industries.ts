import { defineTool } from "@lovable.dev/mcp-js";
import { industries } from "@/lib/content";

export default defineTool({
  name: "list_industries",
  title: "Listar industrias",
  description: "Lista las industrias atendidas por PM CUSTOM.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(industries, null, 2) }],
    structuredContent: { industries },
  }),
});
