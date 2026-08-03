import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { notifyContact } from "@/lib/notify.functions";

interface Props {
  variant: "p1" | "p2";
}

const schema = z.object({
  name: z.string().trim().min(1, "Nombre requerido").max(100),
  company: z.string().trim().min(1, "Empresa requerida").max(120),
  email: z.string().trim().email("Email inválido").max(150),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  details: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function ContactForm({ variant: _variant }: Props) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", details: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      company: parsed.data.company,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      details: parsed.data.details || null,
    });
    setLoading(false);
    if (error) {
      toast.error("No pudimos enviar tu mensaje. Intenta nuevamente.");
      return;
    }
    toast.success("¡Gracias! Te contactaremos pronto.");
    setForm({ name: "", company: "", email: "", phone: "", details: "" });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input
          className="p2-input"
          placeholder="Nombre *"
          aria-label="Nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          maxLength={100}
          required
        />
        <input
          className="p2-input"
          placeholder="Empresa *"
          aria-label="Empresa"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          maxLength={120}
          required
        />
      </div>
      <input
        type="email"
        className="p2-input"
        placeholder="Email *"
        aria-label="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        maxLength={150}
        required
      />
      <input
        type="tel"
        className="p2-input"
        placeholder="Teléfono (opcional)"
        aria-label="Teléfono"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        maxLength={30}
      />
      <textarea
        className="p2-input min-h-[120px] resize-y"
        placeholder="Cuéntanos sobre tu proyecto o solicitud (opcional)"
        aria-label="Detalles del proyecto"
        value={form.details}
        onChange={(e) => setForm({ ...form, details: e.target.value })}
        maxLength={1000}
      />
      <div>
        <button type="submit" className="p2-btn" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"} <span>→</span>
        </button>
      </div>
    </form>
  );
}
