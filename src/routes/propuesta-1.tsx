import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LangSwitch, ProposalSwitcher } from "@/components/shared-nav";
import { ContactForm } from "@/components/contact-form";
import { ParallaxImage } from "@/components/parallax-image";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import industryAerial from "@/assets/industry-aerial.jpg";
import dashboardRoom from "@/assets/dashboard-room.jpg";
import circuitMacro from "@/assets/circuit-macro.jpg";

export const Route = createFileRoute("/propuesta-1")({
  head: () => ({
    meta: [
      { title: "PMCustom · Sistemas embebidos para industria" },
      { name: "description", content: "Diseñamos, fabricamos y desplegamos sistemas IoT y dashboards en tiempo real para la industria. Asesoría CORFO Ley I+D." },
    ],
  }),
  component: Proposal1,
});

function Proposal1() {
  const { t } = useI18n();

  return (
    <div className="theme-p1 min-h-screen">
      {/* ============= HERO full-bleed cinemático ============= */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden text-white">
        <ParallaxImage
          src={heroIndustrial}
          alt="Planta industrial al atardecer monitoreada por sensores PMCustom"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          speed={0.35}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />

        <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-sm tracking-[0.22em] uppercase font-medium">PMCustom</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase text-white/80">
            <a href="#servicios" className="hover:text-white">Servicios</a>
            <a href="#proceso" className="hover:text-white">Proceso</a>
            <a href="#corfo" className="hover:text-white">CORFO</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <div className="flex items-center gap-4">
            <LangSwitch variant="p1" />
            <a href="#contacto" className="hidden md:inline-flex p1-btn-light text-xs">
              Cotizar
            </a>
          </div>
        </header>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 absolute-center pt-24 md:pt-32">
          <p className="p1-eyebrow text-white/80">{t("heroKicker")}</p>
          <h1 className="mt-8 p1-display text-5xl md:text-7xl lg:text-[7.5rem] max-w-5xl">
            Sistemas que convierten <em>datos</em> en <em>decisiones</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/85 leading-relaxed">
            {t("heroDesc")}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#contacto" className="p1-btn-light">{t("heroCta")} →</a>
            <a href="#servicios" className="p1-btn-ghost border-white text-white hover:bg-white hover:text-[var(--p1-ink)]">
              Ver servicios
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 z-10 flex items-end justify-between text-white/70 text-xs uppercase tracking-[0.2em]">
          <span>↓ Scroll</span>
          <span className="hidden md:block">Concepción · Chile</span>
        </div>
      </section>

      {/* ============= Introducción + estadísticas ============= */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
          <div>
            <p className="p1-eyebrow">{t("servicesKicker")}</p>
            <div className="mt-6 p1-rule" />
            <p className="mt-6 text-sm text-[var(--p1-ink-soft)]">PMCustom · est. Chile</p>
          </div>
          <div>
            <h2 className="p1-display text-4xl md:text-6xl">
              Somos tu <em>partner tecnológico</em> para industria, agricultura y procesos productivos.
            </h2>
            <p className="mt-10 text-lg md:text-xl text-[var(--p1-ink-soft)] leading-relaxed max-w-3xl">
              {t("servicesIntro")}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--p1-rule)] border border-[var(--p1-rule)] rounded-lg overflow-hidden">
          {[
            { n: "24/7", l: "Monitoreo en terreno" },
            { n: "<24h", l: "Respuesta de soporte" },
            { n: "100%", l: "Sistemas a medida" },
            { n: "CORFO", l: "Asesoría Ley I+D" },
          ].map((s) => (
            <div key={s.l} className="bg-[var(--p1-paper)] p-8">
              <div className="p1-stat-num text-[var(--p1-ink)]">
                <em className="italic text-[var(--p1-accent)]" style={{ fontStyle: "italic" }}>{s.n}</em>
              </div>
              <div className="mt-3 p1-eyebrow">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= Servicios IoT + I+D ============= */}
      <section id="servicios" className="bg-[var(--p1-paper)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <p className="p1-eyebrow">01 / IoT</p>
          <div className="mt-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="p1-display text-4xl md:text-6xl">
                {t("iotTitle")} <em>a medida</em>.
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--p1-ink-soft)]">{t("iotSub")}</p>
              <p className="mt-8 text-lg text-[var(--p1-ink-soft)] leading-relaxed">{t("iotDesc")}</p>
              <ul className="mt-8 space-y-3">
                {[
                  "Integración de sensores en terreno",
                  "Gateways edge personalizados",
                  "Telemetría cifrada hacia la nube",
                  "Automatización de procesos críticos",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-[var(--p1-ink)]">
                    <span className="text-[var(--p1-accent)]">→</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-10 p1-btn inline-flex">Cotizar proyecto IoT →</a>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-2xl">
              <ParallaxImage src={circuitMacro} alt="Hardware electrónico desarrollado por PMCustom" className="w-full h-full object-cover" loading="lazy" width={1280} height={1600} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
          <div className="p1-rule mb-20" />
          <p className="p1-eyebrow">02 / R+D</p>
          <div className="mt-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <ParallaxImage src={dashboardRoom} alt="Dashboard de monitoreo desarrollado por PMCustom" className="w-full h-full object-cover" loading="lazy" width={1600} height={1200} />
            </div>
            <div>
              <h3 className="p1-display text-4xl md:text-6xl">
                {t("idTitle")} <em>aplicado</em>.
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--p1-ink-soft)]">{t("idSub")}</p>
              <p className="mt-8 text-lg text-[var(--p1-ink-soft)] leading-relaxed">{t("idDesc")}</p>
              <ul className="mt-8 space-y-3">
                {[
                  "Investigación con método científico",
                  "Prototipado y pruebas en campo",
                  "Propiedad intelectual asesorada",
                  "Transferencia tecnológica",
                ].map((i) => (
                  <li key={i} className="flex gap-3 text-[var(--p1-ink)]">
                    <span className="text-[var(--p1-accent)]">→</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-10 p1-btn inline-flex">Conversar I+D →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CORFO — full bleed dark ============= */}
      <section id="corfo" className="relative text-white overflow-hidden">
        <ParallaxImage src={industryAerial} alt="Industria chilena en operación" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} speed={0.3} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="p1-eyebrow text-white/70">{t("corfoKicker")}</p>
            <h2 className="mt-8 p1-display text-4xl md:text-6xl">
              {t("corfoTitle").split(" ").slice(0, -2).join(" ")}{" "}
              <em className="italic text-[oklch(0.78_0.16_50)]">
                {t("corfoTitle").split(" ").slice(-2).join(" ")}
              </em>
            </h2>
            <p className="mt-8 text-lg text-white/80 leading-relaxed max-w-xl">{t("corfoDesc")}</p>
            <a href="#contacto" className="mt-10 inline-flex p1-btn-light">Evaluar mi proyecto →</a>
          </div>
          <div className="grid gap-6 self-center">
            <div className="border border-white/20 backdrop-blur-sm bg-white/5 rounded-2xl p-7">
              <div className="text-xs tracking-[0.25em] uppercase text-[oklch(0.78_0.16_50)]">Etapa 01</div>
              <h4 className="mt-3 text-2xl md:text-3xl" style={{ fontFamily: "Instrument Serif, serif" }}>
                {t("corfoStep1")}
              </h4>
              <ul className="mt-5 space-y-2 text-white/80">
                <li className="flex gap-3"><span className="text-[oklch(0.78_0.16_50)]">→</span>{t("corfoStep1a")}</li>
                <li className="flex gap-3"><span className="text-[oklch(0.78_0.16_50)]">→</span>{t("corfoStep1b")}</li>
              </ul>
            </div>
            <div className="border border-white/20 backdrop-blur-sm bg-white/5 rounded-2xl p-7">
              <div className="text-xs tracking-[0.25em] uppercase text-[oklch(0.78_0.16_50)]">Etapa 02</div>
              <h4 className="mt-3 text-2xl md:text-3xl" style={{ fontFamily: "Instrument Serif, serif" }}>
                {t("corfoStep2")}
              </h4>
              <ul className="mt-5 space-y-2 text-white/80">
                <li className="flex gap-3"><span className="text-[oklch(0.78_0.16_50)]">→</span>{t("corfoStep2a")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============= Proceso ============= */}
      <section id="proceso" className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
            <div>
              <p className="p1-eyebrow">Proceso</p>
              <div className="mt-6 p1-rule" />
            </div>
            <div>
              <h2 className="p1-display text-4xl md:text-6xl">
                {t("cycleKicker").replace("PMCustom", "")} <em>PMCustom</em>.
              </h2>
              <p className="mt-8 text-lg text-[var(--p1-ink-soft)] leading-relaxed max-w-3xl">{t("cycleDesc")}</p>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--p1-rule)] border border-[var(--p1-rule)] rounded-lg overflow-hidden">
            {[
              { i: "01", t: t("cycle1"), d: "Sensores M12 industriales, montaje en planta." },
              { i: "02", t: t("cycle2"), d: "Gateway con preprocesamiento edge." },
              { i: "03", t: t("cycle3"), d: "Streaming seguro, almacenamiento histórico." },
              { i: "04", t: t("cycle4"), d: "Dashboard web con alertas en tiempo real." },
            ].map((s) => (
              <div key={s.i} className="bg-[var(--p1-paper)] p-8">
                <div className="text-[var(--p1-accent)] text-xs tracking-[0.25em] uppercase">{s.i}</div>
                <h4 className="mt-6 text-2xl" style={{ fontFamily: "Instrument Serif, serif" }}>{s.t}</h4>
                <p className="mt-4 text-sm text-[var(--p1-ink-soft)] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= Otros servicios ============= */}
      <section className="bg-[var(--p1-ink)] text-[var(--p1-cream)] px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="p1-eyebrow text-white/60">{t("otherTitle")}</p>
          <h2 className="mt-6 p1-display text-4xl md:text-6xl max-w-3xl">
            Todo lo que necesitas <em className="italic text-[oklch(0.78_0.16_50)]">bajo un mismo equipo.</em>
          </h2>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: t("otherA"), d: "Diseño de hardware electrónico industrial." },
              { t: t("otherB"), d: "Interfaces web y aplicaciones de control." },
              { t: t("otherC"), d: "Conexión con ERPs, APIs y plataformas existentes." },
              { t: t("otherD"), d: "Infraestructura cloud y on-premise." },
            ].map((s, i) => (
              <div key={i} className="border-t border-white/15 pt-6">
                <div className="text-xs uppercase tracking-[0.25em] text-white/40">0{i + 1}</div>
                <h4 className="mt-4 text-2xl" style={{ fontFamily: "Instrument Serif, serif" }}>{s.t}</h4>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= Contacto ============= */}
      <section id="contacto" className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24">
          <div>
            <p className="p1-eyebrow">{t("contactKicker")}</p>
            <h2 className="mt-6 p1-display text-4xl md:text-6xl">
              Cuéntanos tu <em>proyecto</em>.
            </h2>
            <p className="mt-6 text-lg text-[var(--p1-ink-soft)]">{t("contactDesc")}</p>
            <div className="mt-12 space-y-4 text-sm text-[var(--p1-ink-soft)]">
              <div>
                <div className="p1-eyebrow">Email</div>
                <div className="mt-1 text-[var(--p1-ink)]">contacto@pmcustom.cl</div>
              </div>
              <div>
                <div className="p1-eyebrow">Ubicación</div>
                <div className="mt-1 text-[var(--p1-ink)]">Chile</div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm variant="p1" />
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-10 border-t border-[var(--p1-rule)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[var(--p1-ink-soft)]">
        <span>{t("footer")}</span>
        <span>proposal 01 — editorial cinemática</span>
      </footer>

      <ProposalSwitcher current={1} />
    </div>
  );
}
