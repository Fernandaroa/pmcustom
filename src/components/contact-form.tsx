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
      <form onSubmit={onSubmit} className="grid gap-7">
        <div className="grid md:grid-cols-2 gap-7">
          <input className="p1-input" placeholder={t("fName")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
          <input type="email" className="p1-input" placeholder={t("fEmail")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={150} required />
        </div>
        <input className="p1-input" placeholder={t("fCompany")} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={120} />
        <textarea className="p1-input resize-none" rows={4} placeholder={t("fMessage")} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} required />
        <div className="pt-2">
          <button type="submit" className="p1-btn" disabled={loading}>
            {loading ? "..." : t("fSend")} <span>→</span>
          </button>
        </div>
      </form>
    );
  }

  return <ContactFormP2 />;
}

function ContactFormP2() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    companyName: "",
    companyGiro: "",
    companyRut: "",
    contactName: "",
    contactPhone: "",
    comments: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.companyName.trim() || !form.contactName.trim() || !form.contactPhone.trim()) return;
    setLoading(true);
    setTimeout(() => {
      toast.success(t("fSuccess"));
      setForm({ companyName: "", companyGiro: "", companyRut: "", contactName: "", contactPhone: "", comments: "" });
      setLoading(false);
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input className="p2-input" placeholder={t("fCompanyName")} value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} maxLength={120} required />
        <input className="p2-input" placeholder={t("fCompanyGiro")} value={form.companyGiro} onChange={(e) => setForm({ ...form, companyGiro: e.target.value })} maxLength={120} />
      </div>
      <input className="p2-input" placeholder={t("fCompanyRut")} value={form.companyRut} onChange={(e) => setForm({ ...form, companyRut: e.target.value })} maxLength={20} />
      <div className="grid md:grid-cols-2 gap-5">
        <input className="p2-input" placeholder={t("fContactName")} value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} maxLength={100} required />
        <input className="p2-input" type="tel" placeholder={t("fContactPhone")} value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} maxLength={30} required />
      </div>
      <textarea className="p2-input resize-none" rows={5} placeholder={t("fComments")} value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} maxLength={1000} />
      <div>
        <button type="submit" className="p2-btn" disabled={loading}>
          {loading ? "..." : t("fSend")} <span>→</span>
        </button>
      </div>
    </form>
  );
}
