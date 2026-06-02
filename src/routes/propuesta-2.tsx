import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LangSwitch, ProposalSwitcher } from "@/components/shared-nav";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/propuesta-2")({
  head: () => ({
    meta: [
      { title: "PMCustom · Propuesta 02 — Editorial Vibrante" },
      { name: "description", content: "Propuesta de sitio web para PMCustom — dirección editorial vibrante." },
    ],
  }),
  component: Proposal2,
});

function Proposal2() {
  const { t } = useI18n();

  return (
    <div className="theme-p2 min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="w-3 h-3 rounded-full bg-[var(--p2-orange)]" />
          PMCustom<span className="text-[var(--p2-orange)]">.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#servicios" className="hover:text-[var(--p2-orange)] transition">Servicios</a>
          <a href="#corfo" className="hover:text-[var(--p2-orange)] transition">CORFO</a>
          <a href="#ciclo" className="hover:text-[var(--p2-orange)] transition">Proceso</a>
          <a href="#contacto" className="hover:text-[var(--p2-orange)] transition">Contacto</a>
        </nav>
        <LangSwitch variant="p2" />
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 pt-16 pb-32">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] p2-blob rounded-full -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] p2-blob rounded-full -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="p2-kicker text-[var(--p2-orange)]">{t("heroKicker")}</div>
          <h1 className="mt-8 p2-display text-6xl md:text-8xl lg:text-[8.5rem]">
            Datos en <em>tiempo&nbsp;real.</em>
            <br />
            Decisiones <em>al instante.</em>
          </h1>
          <div className="mt-12 grid md:grid-cols-[1.2fr_1fr] gap-12 items-end">
            <p className="text-xl md:text-2xl leading-snug max-w-xl">{t("heroDesc")}</p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#contacto" className="p2-btn">{t("heroCta")} →</a>
              <a href="#servicios" className="p2-btn-outline">↓ Servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative py-6 border-y-2 border-[var(--p2-fg)] bg-[var(--p2-fg)] text-[var(--p2-bg)] overflow-hidden">
        <div className="p2-marquee text-3xl md:text-5xl font-bold" style={{ fontFamily: "Space Grotesk" }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 shrink-0">
              <span>IoT</span><span className="text-[var(--p2-orange)]">✦</span>
              <span>Embedded Systems</span><span className="text-[var(--p2-orange)]">✦</span>
              <span>R+D</span><span className="text-[var(--p2-orange)]">✦</span>
              <span>CORFO</span><span className="text-[var(--p2-orange)]">✦</span>
              <span>Dashboards</span><span className="text-[var(--p2-orange)]">✦</span>
              <span>Sensores</span><span className="text-[var(--p2-orange)]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div>
              <div className="p2-kicker">{t("servicesKicker")}</div>
              <h2 className="mt-6 p2-display text-5xl md:text-6xl">
                Tecnología <em>a medida.</em>
              </h2>
            </div>
            <p className="text-xl leading-relaxed text-[var(--p2-muted)]">{t("servicesIntro")}</p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <article className="p2-card p-10">
              <div className="flex items-center justify-between">
                <span className="p2-tag">01 / IoT</span>
                <span className="text-4xl">📡</span>
              </div>
              <h3 className="mt-8 p2-display text-4xl">{t("iotTitle")}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest font-bold text-[var(--p2-muted)]">{t("iotSub")}</p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--p2-muted)]">{t("iotDesc")}</p>
            </article>
            <article className="p2-card p-10">
              <div className="flex items-center justify-between">
                <span className="p2-tag">02 / R+D</span>
                <span className="text-4xl">🧪</span>
              </div>
              <h3 className="mt-8 p2-display text-4xl">{t("idTitle")}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest font-bold text-[var(--p2-muted)]">{t("idSub")}</p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--p2-muted)]">{t("idDesc")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* CORFO */}
      <section id="corfo" className="relative px-6 md:px-12 py-32 bg-[var(--p2-fg)] text-[var(--p2-bg)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="p2-kicker text-[var(--p2-orange)]">{t("corfoKicker")}</div>
            <h2 className="mt-6 p2-display text-5xl md:text-7xl">
              {t("corfoTitle").split(" ").slice(0, -1).join(" ")} <em>{t("corfoTitle").split(" ").slice(-1)}</em>
            </h2>
            <p className="mt-8 text-xl leading-relaxed opacity-80 max-w-xl">{t("corfoDesc")}</p>
          </div>
          <div className="grid gap-6">
            <div className="border-2 border-[var(--p2-bg)] rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl p2-display text-[var(--p2-orange)]">01</span>
                <h4 className="p2-display text-3xl">{t("corfoStep1")}</h4>
              </div>
              <ul className="mt-6 space-y-3 text-lg">
                <li className="flex gap-3"><span className="text-[var(--p2-orange)]">→</span>{t("corfoStep1a")}</li>
                <li className="flex gap-3"><span className="text-[var(--p2-orange)]">→</span>{t("corfoStep1b")}</li>
              </ul>
            </div>
            <div className="border-2 border-[var(--p2-bg)] rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl p2-display text-[var(--p2-orange)]">02</span>
                <h4 className="p2-display text-3xl">{t("corfoStep2")}</h4>
              </div>
              <ul className="mt-6 space-y-3 text-lg">
                <li className="flex gap-3"><span className="text-[var(--p2-orange)]">→</span>{t("corfoStep2a")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ciclo */}
      <section id="ciclo" className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="p2-kicker">Proceso</div>
          <h2 className="mt-6 p2-display text-5xl md:text-7xl max-w-4xl">
            {t("cycleKicker").replace("PMCustom", "")} <em>PMCustom.</em>
          </h2>
          <p className="mt-8 max-w-3xl text-xl text-[var(--p2-muted)] leading-relaxed">{t("cycleDesc")}</p>

          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {[
              { icon: "📡", label: t("cycle1") },
              { icon: "🧮", label: t("cycle2") },
              { icon: "☁️", label: t("cycle3") },
              { icon: "📊", label: t("cycle4") },
            ].map((s, i) => (
              <div key={i} className="p2-card p-8 relative">
                <div className="text-xs font-bold tracking-widest text-[var(--p2-orange)]">PASO 0{i + 1}</div>
                <div className="mt-6 text-5xl">{s.icon}</div>
                <div className="mt-6 p2-display text-2xl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Otros */}
      <section className="relative px-6 md:px-12 py-32 bg-[oklch(0.94_0.025_85)]">
        <div className="max-w-7xl mx-auto">
          <div className="p2-kicker">{t("otherTitle")}</div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[t("otherA"), t("otherB"), t("otherC"), t("otherD")].map((label, i) => (
              <div key={i} className="p2-card p-8">
                <div className="text-xs font-bold tracking-widest text-[var(--p2-orange)]">0{i + 1}</div>
                <div className="mt-12 p2-display text-2xl">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative px-6 md:px-12 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="p2-kicker text-[var(--p2-orange)]">{t("contactKicker")}</div>
          <h2 className="mt-6 p2-display text-5xl md:text-7xl">
            {t("contactTitle").split(" ").slice(0, -1).join(" ")} <em>{t("contactTitle").split(" ").slice(-1)}</em>
          </h2>
          <p className="mt-6 text-xl text-[var(--p2-muted)]">{t("contactDesc")}</p>
          <div className="mt-12">
            <ContactForm variant="p2" />
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t-2 border-[var(--p2-fg)] flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="text-sm font-semibold">{t("footer")}</div>
        <div className="text-xs uppercase tracking-widest font-bold">proposal_02 · editorial-vibrant</div>
      </footer>

      <ProposalSwitcher current={2} />
    </div>
  );
}
