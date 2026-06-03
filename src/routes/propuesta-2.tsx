import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LangSwitch, ProposalSwitcher } from "@/components/shared-nav";
import { ContactForm } from "@/components/contact-form";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import industryAerial from "@/assets/industry-aerial.jpg";
import dashboardRoom from "@/assets/dashboard-room.jpg";
import circuitMacro from "@/assets/circuit-macro.jpg";
import pmcustomLogo from "@/assets/pmcustom-logo.png.asset.json";

export const Route = createFileRoute("/propuesta-2")({
  head: () => ({
    meta: [
      { title: "PMCustom · Tecnología embebida para industria" },
      { name: "description", content: "Sistemas IoT, I+D y plataformas industriales a medida. Asesoría CORFO Ley I+D." },
    ],
  }),
  component: Proposal2,
});

function Proposal2() {
  const { t } = useI18n();
  const [tab, setTab] = useState<"iot" | "id" | "dash">("iot");

  const tabs = {
    iot: {
      title: t("iotTitle"),
      desc: t("iotDesc"),
      img: circuitMacro,
      points: [
        "Integración de sensores en terreno",
        "Gateways edge personalizados",
        "Telemetría cifrada hacia la nube",
        "Automatización de procesos críticos",
      ],
    },
    id: {
      title: t("idTitle"),
      desc: t("idDesc"),
      img: dashboardRoom,
      points: [
        "Investigación con método científico",
        "Prototipado y pruebas en campo",
        "Propiedad intelectual asesorada",
        "Transferencia tecnológica",
      ],
    },
    dash: {
      title: "Dashboards & Cloud",
      desc: "Interfaces web en tiempo real, alertas y servidores administrados para sostener tu operación 24/7.",
      img: industryAerial,
      points: [
        "Visualización en tiempo real",
        "Alertas inteligentes",
        "APIs e integraciones ERP",
        "Infraestructura cloud y on-premise",
      ],
    },
  } as const;

  const active = tabs[tab];

  return (
    <div className="theme-p2 min-h-screen">
      {/* ============= NAV ============= */}
      <header className="sticky top-0 z-40 bg-[var(--p2-black)]/90 backdrop-blur border-b border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <img src={pmcustomLogo.url} alt="PMCustom" className="h-7 w-auto" />
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[var(--p2-white)]/85">
              <a href="#productos" className="hover:text-[var(--p2-green)]">Productos</a>
              <a href="#soluciones" className="hover:text-[var(--p2-green)]">Soluciones</a>
              <a href="#corfo" className="hover:text-[var(--p2-green)]">CORFO</a>
              <a href="#proceso" className="hover:text-[var(--p2-green)]">Proceso</a>
              <a href="#contacto" className="hover:text-[var(--p2-green)]">Contacto</a>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <LangSwitch variant="p2" />
            <a href="#contacto" className="hidden md:inline-flex p2-btn !py-2 !px-4 !text-xs">Cotizar</a>
          </div>
        </div>
      </header>

      {/* ============= HERO ============= */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
          <img src={heroIndustrial} alt="Industria monitoreada por PMCustom" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
          <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-10 flex items-center">
            <div className="max-w-2xl">
              <div className="p2-eyebrow">PMCUSTOM · INDUSTRIAL IoT</div>
              <h1 className="mt-5 p2-display text-4xl md:text-6xl lg:text-7xl text-white">
                Sistemas embebidos que convierten <span className="text-[var(--p2-green)]">datos en decisiones</span>.
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                {t("heroDesc")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="p2-btn">Cuéntanos tu proyecto →</a>
                <a href="#soluciones" className="p2-btn-ghost">Ver soluciones</a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured strip — NVIDIA-style cards under hero */}
        <div className="bg-[var(--p2-black)] border-t border-[var(--p2-line)]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--p2-line)] border border-[var(--p2-line)]">
            {[
              { tag: "IoT", title: "Sensores industriales en terreno" },
              { tag: "R+D", title: "Investigación aplicada con Ley I+D" },
              { tag: "Cloud", title: "Dashboards en tiempo real 24/7" },
              { tag: "CORFO", title: "Asesoría y postulación a fondos" },
            ].map((f) => (
              <a key={f.title} href="#soluciones" className="bg-[var(--p2-black)] p-5 hover:bg-[var(--p2-surface)] transition-colors group">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--p2-green)] font-bold">{f.tag}</div>
                <div className="mt-2 text-sm font-semibold text-[var(--p2-white)] group-hover:text-[var(--p2-green)] leading-snug">{f.title} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============= SECTION — Soluciones (tabbed, NVIDIA style) ============= */}
      <section id="soluciones" className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="p2-eyebrow">Soluciones</div>
              <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
                Tecnología a medida para <span className="text-[var(--p2-green)]">cada proceso productivo</span>.
              </h2>
            </div>
            <a href="#contacto" className="text-sm font-semibold text-[var(--p2-green)] hover:underline">Hablar con un experto →</a>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 gap-2 border-t border-[var(--p2-line)] mb-10">
            {([
              ["iot", "01 — IoT"],
              ["id", "02 — I+D"],
              ["dash", "03 — Dashboards"],
            ] as const).map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)} className={`p2-tab text-left ${tab === k ? "active" : ""}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="p2-card aspect-[4/3] overflow-hidden">
              <img src={active.img} alt={active.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h3 className="p2-display text-3xl md:text-4xl text-[var(--p2-white)]">{active.title}</h3>
              <p className="mt-5 text-base text-[var(--p2-white)]/75 leading-relaxed">{active.desc}</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                {active.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-[var(--p2-white)]/85">
                    <span className="text-[var(--p2-green)] font-bold">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-9 inline-flex p2-btn">Solicitar cotización →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PRODUCTOS — grid de cards ============= */}
      <section id="productos" className="py-20 md:py-28 bg-[var(--p2-surface)] border-y border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p2-eyebrow">Otros Servicios</div>
          <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)] max-w-3xl">
            Un equipo completo, <span className="text-[var(--p2-green)]">bajo un mismo techo</span>.
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: t("otherA"), d: "Diseño de hardware electrónico industrial certificado." },
              { t: t("otherB"), d: "Interfaces web y aplicaciones de control en tiempo real." },
              { t: t("otherC"), d: "Conexión con ERPs, APIs y plataformas existentes." },
              { t: t("otherD"), d: "Infraestructura cloud y on-premise gestionada." },
            ].map((s, i) => (
              <div key={i} className="p2-card p-6">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--p2-green)] font-bold">0{i + 1}</div>
                <h4 className="mt-4 text-lg font-bold text-[var(--p2-white)]">{s.t}</h4>
                <p className="mt-3 text-sm text-[var(--p2-white)]/65 leading-relaxed">{s.d}</p>
                <div className="mt-6 text-xs font-semibold text-[var(--p2-green)]">Conocer más →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CORFO — banner ============= */}
      <section id="corfo" className="relative py-20 md:py-28 overflow-hidden">
        <img src={industryAerial} alt="Industria chilena" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--p2-black)] via-[var(--p2-black)]/95 to-[var(--p2-black)]/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="p2-eyebrow">{t("corfoKicker")}</div>
            <h2 className="mt-4 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              {t("corfoTitle")} <span className="text-[var(--p2-green)]">con PMCustom</span>.
            </h2>
            <p className="mt-6 text-base text-[var(--p2-white)]/80 leading-relaxed max-w-xl">{t("corfoDesc")}</p>
            <a href="#contacto" className="mt-8 inline-flex p2-btn">Evaluar mi proyecto →</a>
          </div>
          <div className="grid gap-5 self-center">
            <div className="p2-card p-6">
              <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--p2-green)] font-bold">Etapa 01</div>
              <h4 className="mt-3 text-xl font-bold text-[var(--p2-white)]">{t("corfoStep1")}</h4>
              <ul className="mt-4 space-y-2 text-sm text-[var(--p2-white)]/75">
                <li className="flex gap-2"><span className="text-[var(--p2-green)]">▸</span>{t("corfoStep1a")}</li>
                <li className="flex gap-2"><span className="text-[var(--p2-green)]">▸</span>{t("corfoStep1b")}</li>
              </ul>
            </div>
            <div className="p2-card p-6">
              <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--p2-green)] font-bold">Etapa 02</div>
              <h4 className="mt-3 text-xl font-bold text-[var(--p2-white)]">{t("corfoStep2")}</h4>
              <ul className="mt-4 space-y-2 text-sm text-[var(--p2-white)]/75">
                <li className="flex gap-2"><span className="text-[var(--p2-green)]">▸</span>{t("corfoStep2a")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PROCESO ============= */}
      <section id="proceso" className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p2-eyebrow">Proceso</div>
          <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)] max-w-3xl">
            {t("cycleKicker").replace("PMCustom", "")} <span className="text-[var(--p2-green)]">PMCustom</span>.
          </h2>
          <p className="mt-6 text-base text-[var(--p2-white)]/70 max-w-3xl leading-relaxed">{t("cycleDesc")}</p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--p2-line)] border border-[var(--p2-line)]">
            {[
              { i: "01", t: t("cycle1"), d: "Sensores M12 industriales montados en planta." },
              { i: "02", t: t("cycle2"), d: "Gateway con preprocesamiento edge." },
              { i: "03", t: t("cycle3"), d: "Streaming seguro y almacenamiento histórico." },
              { i: "04", t: t("cycle4"), d: "Dashboard web con alertas en tiempo real." },
            ].map((s) => (
              <div key={s.i} className="bg-[var(--p2-black)] p-7">
                <div className="text-[var(--p2-green)] text-xs font-bold tracking-[0.22em]">{s.i}</div>
                <h4 className="mt-5 text-xl font-bold text-[var(--p2-white)]">{s.t}</h4>
                <p className="mt-3 text-sm text-[var(--p2-white)]/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CONTACTO ============= */}
      <section id="contacto" className="py-20 md:py-28 bg-[var(--p2-surface)] border-t border-[var(--p2-line)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <div>
            <div className="p2-eyebrow">{t("contactKicker")}</div>
            <h2 className="mt-4 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              Cuéntanos tu <span className="text-[var(--p2-green)]">proyecto</span>.
            </h2>
            <p className="mt-5 text-base text-[var(--p2-white)]/75">{t("contactDesc")}</p>
            <div className="mt-10 space-y-5 text-sm">
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--p2-green)] font-bold">Email</div>
                <div className="mt-1 text-[var(--p2-white)]">contacto@pmcustom.cl</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--p2-green)] font-bold">Ubicación</div>
                <div className="mt-1 text-[var(--p2-white)]">Valparaíso · Chile</div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm variant="p2" />
          </div>
        </div>
      </section>

      <footer className="px-6 lg:px-10 py-8 border-t border-[var(--p2-line)] bg-[var(--p2-black)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[var(--p2-white)]/50">
        <span>{t("footer")}</span>
        <span>proposal 02 — corporate tech</span>
      </footer>

      <ProposalSwitcher current={2} />
    </div>
  );
}
