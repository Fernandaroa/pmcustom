import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

interface Props {
  variant: "p1" | "p2";
}

export function ContactForm({ variant }: Props) {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    setTimeout(() => {
      toast.success(t("fSuccess"));
      setForm({ name: "", email: "", company: "", message: "" });
      setLoading(false);
    }, 600);
  };

  if (variant === "p1") {
    return (
      <form onSubmit={onSubmit} className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <label className="block">
            <span className="p1-label">01 · {t("fName")}</span>
            <input
              className="p1-input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              required
            />
          </label>
          <label className="block">
            <span className="p1-label">02 · {t("fEmail")}</span>
            <input
              type="email"
              className="p1-input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={150}
              required
            />
          </label>
        </div>
        <label className="block">
          <span className="p1-label">03 · {t("fCompany")}</span>
          <input
            className="p1-input"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            maxLength={120}
          />
        </label>
        <label className="block">
          <span className="p1-label">04 · {t("fMessage")}</span>
          <textarea
            className="p1-input resize-none"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            required
          />
        </label>
        <div>
          <button type="submit" className="p1-btn" disabled={loading}>
            {loading ? "..." : `> ${t("fSend")}`}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input
          className="p2-input"
          placeholder={t("fName")}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          maxLength={100}
          required
        />
        <input
          type="email"
          className="p2-input"
          placeholder={t("fEmail")}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          maxLength={150}
          required
        />
      </div>
      <input
        className="p2-input"
        placeholder={t("fCompany")}
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        maxLength={120}
      />
      <textarea
        className="p2-input resize-none"
        rows={5}
        placeholder={t("fMessage")}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        maxLength={1000}
        required
      />
      <div>
        <button type="submit" className="p2-btn" disabled={loading}>
          {loading ? "..." : `${t("fSend")} →`}
        </button>
      </div>
    </form>
  );
}
