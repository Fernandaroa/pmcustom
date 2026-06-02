import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LangSwitch, ProposalSwitcher } from "@/components/shared-nav";
import { ContactForm } from "@/components/contact-form";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import dashboardRoom from "@/assets/dashboard-room.jpg";
import industryAerial from "@/assets/industry-aerial.jpg";
import circuitMacro from "@/assets/circuit-macro.jpg";

export const Route = createFileRoute("/propuesta-2")({
  head: () => ({
    meta: [
      { title: "PMCustom · Diseñamos dispositivos embebidos para tu industria" },
      { name: "description", content: "Hardware IoT, dashboards y asesoría CORFO Ley I+D. Soluciones a medida para procesos industriales." },
    ],
  }),
  component: Proposal2,
});

function Proposal2() {
  const { t } = useI18n();

  return (
    <div className="theme-p2 min-h-screen">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 border-b border-[var(--p2-line)]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[var(--p2-mint)]" />
          <span className="text-sm font-bold tracking-tight">PMCustom<span className="text-[var(--p2-mint)]">.</span></span>
          <span className="hidden md:inline ml-3 text-xs text-[var(--p2-muted)] font-mono tracking-widest uppercase">/ Partner Tecnológico</span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <a href="#servicios" className="hover:text-[var(--p2-mint)] transition">Servicios</a>
          <a href="#proceso" className="hover:text-[var(--p2-mint)] transition">Cómo trabajamos</a>
          <a href="#corfo" className="hover:text-[var(--p2-mint)] transition">CORFO</a>
          <a href="#contacto" className="hover:text-[var(--p2-mint)] transition">Contacto</a>
        </nav>
        <div className="flex items-center gap-4">
          <LangSwitch variant="p2" />
          <a href="#contacto" className="hidden md:inline-flex p2-btn text-xs px-4 py-2">Cotizar</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 pt-16 md:pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 p2-grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="p2-eyebrow">{t("heroKicker")}</div>
            <h1 className="mt-8 p2-display text-5xl md:text-6xl lg:text-7xl">
              Diseñamos <span className="text-[var(--p2-mint)]">sistemas embebidos</span> para industria y procesos productivos.
            </h1>
            <p className="mt-8 text-lg text-[var(--p2-muted)] leading-relaxed max-w-xl">{t("heroDesc")}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contacto" className="p2-btn">{t("heroCta")} →</a>
              <a href="#servicios" className="p2-btn-ghost">Ver servicios</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--p2-line)]">
              <img src={heroIndustrial} alt="Hardware embebido fabricado por PMCustom" className="absolute inset-0 w-full h-full object-cover" width={1600} height={2000} />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono tracking-widest uppercase text-white/90 backdrop-blur-sm bg-black/30 rounded-md px-3 py-2">
                <span>EC-2000 · Field Unit</span>
                <span className="text-[var(--p2-mint)]">● live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-[var(--p2-line)] overflow-hidden bg-[var(--p2-ink)]">
        <div className="p2-marquee text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 shrink-0">
              <span>IoT</span><span className="text-[var(--p2-mint)]">●</span>
              <span>Sistemas Embebidos</span><span className="text-[var(--p2-mint)]">●</span>
              <span>Dashboards</span><span className="text-[var(--p2-mint)]">●</span>
              <span>Sensores Industriales</span><span className="text-[var(--p2-mint)]">●</span>
              <span>I+D Aplicado</span><span className="text-[var(--p2-mint)]">●</span>
              <span>CORFO Ley I+D</span><span className="text-[var(--p2-mint)]">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-end">
            <div>
              <div className="p2-eyebrow">{t("servicesKicker")}</div>
              <h2 className="mt-6 p2-display text-4xl md:text-5xl">
                Tecnología <span className="text-[var(--p2-mint)]">a medida</span>.
              </h2>
            </div>
            <p className="text-lg text-[var(--p2-muted)] leading-relaxed">{t("servicesIntro")}</p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <article className="p2-card p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="p2-eyebrow">01 / IoT</span>
                <span className="text-xs text-[var(--p2-muted)] font-mono">EC-2000 series</span>
              </div>
              <h3 className="mt-8 p2-display text-3xl md:text-4xl">{t("iotTitle")}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-[var(--p2-muted)] font-mono">{t("iotSub")}</p>
              <p className="mt-6 text-[var(--p2-muted)] leading-relaxed">{t("iotDesc")}</p>
              <div className="mt-8 pt-6 border-t border-[var(--p2-line)] grid grid-cols-2 gap-4 text-sm">
                <div><div className="text-[var(--p2-mint)] font-mono text-xs uppercase tracking-widest">Hardware</div><div className="mt-1">Sensores M12 · IP65</div></div>
                <div><div className="text-[var(--p2-mint)] font-mono text-xs uppercase tracking-widest">Conectividad</div><div className="mt-1">Ethernet · LoRa · 4G</div></div>
              </div>
            </article>
            <article className="p2-card p-8 md:p-10">
              <div className="flex items-center justify-between">
                <span className="p2-eyebrow">02 / R+D</span>
                <span className="text-xs text-[var(--p2-muted)] font-mono">CORFO eligible</span>
              </div>
              <h3 className="mt-8 p2-display text-3xl md:text-4xl">{t("idTitle")}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-[var(--p2-muted)] font-mono">{t("idSub")}</p>
              <p className="mt-6 text-[var(--p2-muted)] leading-relaxed">{t("idDesc")}</p>
              <div className="mt-8 pt-6 border-t border-[var(--p2-line)] grid grid-cols-2 gap-4 text-sm">
                <div><div className="text-[var(--p2-mint)] font-mono text-xs uppercase tracking-widest">Método</div><div className="mt-1">Científico aplicado</div></div>
                <div><div className="text-[var(--p2-mint)] font-mono text-xs uppercase tracking-widest">Salida</div><div className="mt-1">Patentable / IP</div></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Proceso — diagrama */}
      <section id="proceso" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--p2-line)]">
        <div className="max-w-7xl mx-auto">
          <div className="p2-eyebrow">Arquitectura end-to-end</div>
          <h2 className="mt-6 p2-display text-4xl md:text-6xl max-w-4xl">
            Del sensor a tu <span className="text-[var(--p2-mint)]">decisión</span>.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-[var(--p2-muted)] leading-relaxed">{t("cycleDesc")}</p>

          <div className="mt-16 rounded-2xl border border-[var(--p2-line)] bg-[var(--p2-ink)] p-6 md:p-10">
            <img src={networkSketch} alt="Arquitectura de red IoT PMCustom" className="w-full h-auto" loading="lazy" width={1920} height={1280} />
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {[
              { i: "01", t: t("cycle1") },
              { i: "02", t: t("cycle2") },
              { i: "03", t: t("cycle3") },
              { i: "04", t: t("cycle4") },
            ].map((s) => (
              <div key={s.i} className="p2-card p-6">
                <div className="font-mono text-xs tracking-widest text-[var(--p2-mint)]">{s.i}</div>
                <div className="mt-4 text-xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORFO */}
      <section id="corfo" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--p2-line)] bg-[var(--p2-ink)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="p2-eyebrow">{t("corfoKicker")}</div>
            <h2 className="mt-6 p2-display text-4xl md:text-6xl">
              Accede a <span className="text-[var(--p2-mint)]">financiamiento CORFO</span>.
            </h2>
            <p className="mt-8 text-lg text-[var(--p2-muted)] leading-relaxed max-w-xl">{t("corfoDesc")}</p>
            <a href="#contacto" className="mt-10 inline-flex p2-btn">Evaluar mi proyecto →</a>
          </div>
          <div className="grid gap-5">
            <div className="border border-[var(--p2-line)] rounded-2xl p-7">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[var(--p2-mint)]" style={{ fontFamily: "Space Grotesk" }}>01</span>
                <h4 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>{t("corfoStep1")}</h4>
              </div>
              <ul className="mt-5 space-y-2 text-[var(--p2-muted)]">
                <li className="flex gap-3"><span className="text-[var(--p2-mint)]">→</span>{t("corfoStep1a")}</li>
                <li className="flex gap-3"><span className="text-[var(--p2-mint)]">→</span>{t("corfoStep1b")}</li>
              </ul>
            </div>
            <div className="border border-[var(--p2-line)] rounded-2xl p-7">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-[var(--p2-mint)]" style={{ fontFamily: "Space Grotesk" }}>02</span>
                <h4 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk" }}>{t("corfoStep2")}</h4>
              </div>
              <ul className="mt-5 space-y-2 text-[var(--p2-muted)]">
                <li className="flex gap-3"><span className="text-[var(--p2-mint)]">→</span>{t("corfoStep2a")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Otros servicios + imagen */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--p2-line)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--p2-line)]">
            <img src={circuitMacro} alt="Hardware desarrollado por PMCustom" className="w-full h-full object-cover" loading="lazy" width={1280} height={1280} />
          </div>
          <div>
            <div className="p2-eyebrow">{t("otherTitle")}</div>
            <h2 className="mt-6 p2-display text-4xl md:text-5xl">
              Un equipo, <span className="text-[var(--p2-mint)]">cuatro capacidades</span>.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[t("otherA"), t("otherB"), t("otherC"), t("otherD")].map((s, i) => (
                <div key={i} className="p2-card p-6">
                  <div className="font-mono text-xs text-[var(--p2-mint)] tracking-widest">0{i + 1}</div>
                  <div className="mt-6 text-lg font-bold" style={{ fontFamily: "Space Grotesk" }}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 md:px-12 py-24 md:py-32 border-t border-[var(--p2-line)]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <div className="p2-eyebrow">{t("contactKicker")}</div>
            <h2 className="mt-6 p2-display text-4xl md:text-5xl">
              Cuéntanos tu <span className="text-[var(--p2-mint)]">proyecto</span>.
            </h2>
            <p className="mt-6 text-lg text-[var(--p2-muted)]">{t("contactDesc")}</p>
            <div className="mt-12 space-y-5 text-sm">
              <div>
                <div className="p2-eyebrow text-[var(--p2-muted)]">Email</div>
                <div className="mt-1">contacto@pmcustom.cl</div>
              </div>
              <div>
                <div className="p2-eyebrow text-[var(--p2-muted)]">Ubicación</div>
                <div className="mt-1">Chile</div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm variant="p2" />
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-[var(--p2-line)] flex flex-col md:flex-row gap-4 items-center justify-between text-xs uppercase tracking-widest text-[var(--p2-muted)]">
        <span>{t("footer")}</span>
        <span>proposal 02 — black engineering</span>
      </footer>

      <ProposalSwitcher current={2} />
    </div>
  );
}
