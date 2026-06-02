import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LangSwitch, ProposalSwitcher } from "@/components/shared-nav";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/propuesta-1")({
  head: () => ({
    meta: [
      { title: "PMCustom · Propuesta 01 — Lab Técnico" },
      { name: "description", content: "Propuesta de sitio web para PMCustom — dirección técnica oscura." },
    ],
  }),
  component: Proposal1,
});

function Proposal1() {
  const { t } = useI18n();

  return (
    <div className="theme-p1 min-h-screen relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 p1-grid opacity-60" />
        <div className="absolute inset-0 p1-scanline" />
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, oklch(0.88 0.22 130), transparent 70%)" }}
        />

        <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 border-b border-[var(--p1-border)]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[oklch(0.88_0.22_130)] animate-pulse" />
            <div className="p1-mono text-sm tracking-[0.2em] uppercase">PMCustom</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 p1-mono text-xs tracking-widest uppercase text-[var(--p1-muted)]">
            <a href="#servicios" className="hover:text-[oklch(0.88_0.22_130)] transition">_servicios</a>
            <a href="#corfo" className="hover:text-[oklch(0.88_0.22_130)] transition">_corfo</a>
            <a href="#ciclo" className="hover:text-[oklch(0.88_0.22_130)] transition">_ciclo</a>
            <a href="#contacto" className="hover:text-[oklch(0.88_0.22_130)] transition">_contacto</a>
          </nav>
          <LangSwitch variant="p1" />
        </header>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-32">
          <div className="p1-chip">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.88_0.22_130)]" />
            {t("heroKicker")}
          </div>
          <h1 className="mt-8 p1-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] max-w-5xl">
            <span className="p1-cursor">{t("heroTitle")}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[var(--p1-muted)] leading-relaxed">{t("heroDesc")}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contacto" className="p1-btn">→ {t("heroCta")}</a>
            <a href="#servicios" className="p1-btn-ghost">_ver servicios</a>
          </div>

          {/* terminal panel */}
          <div className="mt-20 grid md:grid-cols-3 gap-px bg-[var(--p1-border)] border border-[var(--p1-border)] rounded-xl overflow-hidden">
            {[
              { k: "uptime", v: "99.98%", l: "field-modules" },
              { k: "stream", v: "real-time", l: "cloud-pipeline" },
              { k: "stack", v: "embedded", l: "iot · i+d · web" },
            ].map((s) => (
              <div key={s.k} className="bg-[var(--p1-bg)] p-6">
                <div className="p1-mono text-[10px] tracking-[0.2em] uppercase text-[var(--p1-muted)]">// {s.k}</div>
                <div className="mt-2 p1-display text-3xl font-bold text-[oklch(0.88_0.22_130)]">{s.v}</div>
                <div className="mt-1 p1-mono text-xs text-[var(--p1-muted)]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="relative px-6 md:px-12 py-32 border-t border-[var(--p1-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="p1-chip">// {t("servicesKicker")}</div>
          <p className="mt-8 max-w-3xl text-xl text-[var(--p1-fg)] leading-relaxed">{t("servicesIntro")}</p>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <article className="p1-card p-8">
              <div className="flex items-baseline justify-between">
                <div className="p1-mono text-xs text-[var(--p1-muted)] tracking-widest">01</div>
                <div className="p1-mono text-xs text-[oklch(0.82_0.13_210)]">IoT</div>
              </div>
              <h3 className="mt-6 p1-display text-3xl font-bold">{t("iotTitle")}</h3>
              <p className="mt-1 p1-mono text-xs text-[var(--p1-muted)] uppercase tracking-widest">{t("iotSub")}</p>
              <p className="mt-6 text-[var(--p1-muted)] leading-relaxed">{t("iotDesc")}</p>
            </article>
            <article className="p1-card p-8">
              <div className="flex items-baseline justify-between">
                <div className="p1-mono text-xs text-[var(--p1-muted)] tracking-widest">02</div>
                <div className="p1-mono text-xs text-[oklch(0.82_0.13_210)]">R+D</div>
              </div>
              <h3 className="mt-6 p1-display text-3xl font-bold">{t("idTitle")}</h3>
              <p className="mt-1 p1-mono text-xs text-[var(--p1-muted)] uppercase tracking-widest">{t("idSub")}</p>
              <p className="mt-6 text-[var(--p1-muted)] leading-relaxed">{t("idDesc")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* CORFO */}
      <section id="corfo" className="relative px-6 md:px-12 py-32 border-t border-[var(--p1-border)] bg-[var(--p1-bg-2)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="p1-chip">// {t("corfoKicker")}</div>
            <h2 className="mt-8 p1-display text-4xl md:text-5xl font-bold leading-tight">{t("corfoTitle")}</h2>
            <p className="mt-6 text-[var(--p1-muted)] leading-relaxed text-lg">{t("corfoDesc")}</p>
          </div>
          <div className="grid gap-4">
            <div className="p1-card p-6">
              <div className="p1-mono text-xs tracking-widest text-[oklch(0.88_0.22_130)]">STEP_01</div>
              <h4 className="mt-3 p1-display text-2xl font-bold">{t("corfoStep1")}</h4>
              <ul className="mt-4 space-y-2 text-[var(--p1-muted)]">
                <li className="flex gap-3"><span className="text-[oklch(0.88_0.22_130)]">›</span>{t("corfoStep1a")}</li>
                <li className="flex gap-3"><span className="text-[oklch(0.88_0.22_130)]">›</span>{t("corfoStep1b")}</li>
              </ul>
            </div>
            <div className="p1-card p-6">
              <div className="p1-mono text-xs tracking-widest text-[oklch(0.88_0.22_130)]">STEP_02</div>
              <h4 className="mt-3 p1-display text-2xl font-bold">{t("corfoStep2")}</h4>
              <ul className="mt-4 space-y-2 text-[var(--p1-muted)]">
                <li className="flex gap-3"><span className="text-[oklch(0.88_0.22_130)]">›</span>{t("corfoStep2a")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ciclo */}
      <section id="ciclo" className="relative px-6 md:px-12 py-32 border-t border-[var(--p1-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="p1-chip">// data-flow</div>
          <h2 className="mt-8 p1-display text-4xl md:text-5xl font-bold max-w-3xl">{t("cycleKicker")}</h2>
          <p className="mt-6 max-w-3xl text-[var(--p1-muted)] leading-relaxed text-lg">{t("cycleDesc")}</p>

          <div className="mt-16 grid md:grid-cols-4 gap-px bg-[var(--p1-border)] border border-[var(--p1-border)] rounded-xl overflow-hidden">
            {[t("cycle1"), t("cycle2"), t("cycle3"), t("cycle4")].map((label, i) => (
              <div key={i} className="bg-[var(--p1-bg)] p-6 relative">
                <div className="p1-mono text-xs text-[oklch(0.88_0.22_130)]">0{i + 1}</div>
                <div className="mt-4 text-2xl">{["📡", "🧮", "☁️", "📊"][i]}</div>
                <div className="mt-4 p1-display text-lg font-semibold">{label}</div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10 p1-mono text-[oklch(0.88_0.22_130)]">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="relative px-6 md:px-12 py-32 border-t border-[var(--p1-border)] bg-[var(--p1-bg-2)]">
        <div className="max-w-7xl mx-auto">
          <div className="p1-chip">// {t("otherTitle")}</div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[t("otherA"), t("otherB"), t("otherC"), t("otherD")].map((label, i) => (
              <div key={i} className="p1-card p-6 group">
                <div className="p1-mono text-xs text-[var(--p1-muted)]">SRV/0{i + 1}</div>
                <div className="mt-8 p1-display text-xl font-semibold group-hover:text-[oklch(0.88_0.22_130)] transition">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative px-6 md:px-12 py-32 border-t border-[var(--p1-border)]">
        <div className="max-w-4xl mx-auto">
          <div className="p1-chip">// {t("contactKicker")}</div>
          <h2 className="mt-8 p1-display text-4xl md:text-6xl font-bold">{t("contactTitle")}</h2>
          <p className="mt-6 text-[var(--p1-muted)] text-lg">{t("contactDesc")}</p>
          <div className="mt-12">
            <ContactForm variant="p1" />
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-[var(--p1-border)] flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="p1-mono text-xs uppercase tracking-widest text-[var(--p1-muted)]">{t("footer")}</div>
        <div className="p1-mono text-xs uppercase tracking-widest text-[var(--p1-muted)]">proposal_01 · technical-lab</div>
      </footer>

      <ProposalSwitcher current={1} />
    </div>
  );
}
