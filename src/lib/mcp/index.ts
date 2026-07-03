import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import listCaseStudies from "./tools/list-case-studies";
import listIndustries from "./tools/list-industries";
import submitContact from "./tools/submit-contact";

export default defineMcp({
  name: "pm-custom-mcp",
  title: "PM CUSTOM MCP",
  version: "0.1.0",
  instructions:
    "Herramientas para consultar los servicios, casos de éxito e industrias de PM CUSTOM (sistemas embebidos, IoT, automatización industrial) y enviar solicitudes de contacto.",
  tools: [listServices, listCaseStudies, listIndustries, submitContact],
});
