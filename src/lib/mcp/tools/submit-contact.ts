import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export default defineTool({
  name: "submit_contact",
  title: "Enviar formulario de contacto",
  description:
    "Envía una solicitud de contacto a PM CUSTOM. Usar cuando el usuario quiera pedir una evaluación o cotización.",
  inputSchema: {
    name: z.string().min(1).describe("Nombre completo del contacto."),
    company: z.string().min(1).describe("Empresa u organización."),
    email: z.string().email().describe("Email de contacto."),
    phone: z.string().optional().describe("Teléfono (opcional)."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ name, company, email, phone }) => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      return {
        content: [{ type: "text", text: "Backend no configurado." }],
        isError: true,
      };
    }
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      company,
      email,
      phone: phone || null,
    });
    if (error) {
      return {
        content: [{ type: "text", text: `No se pudo enviar: ${error.message}` }],
        isError: true,
      };
    }
    return {
      content: [
        { type: "text", text: "Solicitud enviada. El equipo de PM CUSTOM te contactará pronto." },
      ],
      structuredContent: { ok: true },
    };
  },
});
