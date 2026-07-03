import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { cases, services, industries, pillars, benefitsList, process } from "@/lib/content";
import heroIot from "@/assets/hero-iot.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistemas Embebidos e IoT para Empresas | PM CUSTOM Chile" },
      {
        name: "description",
        content:
          "Desarrollamos soluciones tecnológicas a medida basadas en sistemas embebidos, IoT, sensores y automatización industrial. Optimiza procesos y captura datos en tiempo real con PM CUSTOM.",
      },
      { property: "og:title", content: "Sistemas Embebidos e IoT para Empresas | PM CUSTOM Chile" },
      {
        property: "og:description",
        content:
          "Diseñamos sistemas embebidos, soluciones IoT y plataformas de monitoreo para empresas que buscan optimizar procesos y tomar mejores decisiones.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroIot },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="relative min-h-[640px] md:min-h-[720px] w-full overflow-hidden">
          <img src={heroIot} alt="Tecnología IoT en terreno" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32 flex items-center min-h-[640px] md:min-h-[720px]">
            <div className="max-w-3xl">
              <div className="p2-eyebrow text-white/70">PM CUSTOM · CHILE</div>
              <h1 className="mt-5 p2-display text-4xl md:text-6xl lg:text-7xl text-white">
                Transformamos desafíos operacionales en{" "}
                <span className="text-[var(--p2-green)]">soluciones tecnológicas inteligentes</span> para tu empresa.
              </h1>
              <p className="mt-7 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
                Sistemas embebidos, IoT y automatización a medida para empresas que necesitan datos en tiempo real y control operacional.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contacto" className="p2-btn">Solicita una evaluación →</Link>
                <Link to="/casos-exito" className="p2-btn-ghost !text-white !border-white/40 hover:!border-[var(--p2-green)]">
                  Conoce nuestros casos de éxito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTORIDAD */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="p2-eyebrow">Autoridad</div>
            <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              Más que tecnología. Desarrollamos <span className="text-[var(--p2-green)]">soluciones que generan resultados</span>.
            </h2>
            <p className="mt-6 text-base text-[var(--p2-white)]/75 leading-relaxed">
              Desarrollamos tecnología a medida para capturar información crítica, automatizar procesos y convertir datos en decisiones. Trabajamos con agricultura, minería, manufactura, logística e industria.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 self-center">
            {benefitsList.map((b) => (
              <li key={b} className="p2-card p-4 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[var(--p2-green)] shrink-0" />
                <span className="text-sm font-medium text-[var(--p2-white)]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DIFERENCIADOR — Pilares */}
      <section className="py-20 md:py-28 bg-[var(--p2-surface)] border-y border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="p2-eyebrow">Diferenciador</div>
            <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              ¿Por qué elegir PM CUSTOM como <span className="text-[var(--p2-green)]">partner tecnológico</span>?
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="p2-card flex flex-col overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="text-[var(--p2-green)] text-xs font-bold tracking-[0.22em]">0{i + 1}</div>
                  <h3 className="mt-3 p2-display text-2xl text-[var(--p2-white)]">{p.title}</h3>
                  <p className="mt-3 text-sm text-[var(--p2-white)]/70 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="p2-eyebrow">Qué hacemos</div>
            <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              Desarrollamos tecnología personalizada para <span className="text-[var(--p2-green)]">resolver problemas reales</span>.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const to = `/${s.slug}` as "/sistemas-embebidos";
              return (
                <Link
                  key={s.slug}
                  to={to}
                  className="p2-card p-7 hover:border-[var(--p2-green)] transition-colors group"
                >
                  <div className="text-[var(--p2-green)] text-xs font-bold tracking-[0.22em]">0{i + 1}</div>
                  <h3 className="mt-3 text-xl font-bold text-[var(--p2-white)]">{s.title}</h3>
                  <p className="mt-3 text-sm text-[var(--p2-white)]/70 leading-relaxed">{s.lead}</p>
                  <div className="mt-6 text-xs font-semibold text-[var(--p2-green)] group-hover:translate-x-1 transition-transform inline-block">Ver más →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-20 md:py-28 bg-[var(--p2-surface)] border-y border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p2-eyebrow">Proceso</div>
          <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)] max-w-3xl">
            Cómo transformamos una idea en una <span className="text-[var(--p2-green)]">solución tecnológica</span>.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step) => (
              <div key={step.n} className="p2-card p-6">
                <div className="text-[var(--p2-green)] text-2xl font-bold p2-display">{step.n}</div>
                <h4 className="mt-3 text-lg font-bold text-[var(--p2-white)]">{step.t}</h4>
                <p className="mt-2 text-sm text-[var(--p2-white)]/65 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="p2-eyebrow">Casos de éxito</div>
              <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)] max-w-3xl">
                Tecnología aplicada que ya está <span className="text-[var(--p2-green)]">generando resultados</span>.
              </h2>
            </div>
            <Link to="/casos-exito" className="text-sm font-semibold text-[var(--p2-green)] hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <Link
                key={c.slug}
                to="/casos-exito/$slug"
                params={{ slug: c.slug }}
                className="p2-card group overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[var(--p2-white)]">{c.title}</h3>
                  <p className="mt-3 text-sm text-[var(--p2-white)]/70 flex-1">{c.short}</p>
                  <div className="mt-5 text-xs font-semibold text-[var(--p2-green)]">Ver caso →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section className="py-20 md:py-28 bg-[var(--p2-surface)] border-y border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="p2-eyebrow">Industrias</div>
            <h2 className="mt-3 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              Soluciones para industrias que necesitan{" "}
              <span className="text-[var(--p2-green)]">información, control y eficiencia</span>.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div key={ind.name} className="p2-card p-6">
                <h4 className="text-lg font-bold text-[var(--p2-white)]">{ind.name}</h4>
                <p className="mt-2 text-sm text-[var(--p2-white)]/65">{ind.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/industrias" className="text-sm font-semibold text-[var(--p2-green)] hover:underline">
              Ver detalle por industria →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <div className="p2-eyebrow">Hablemos</div>
          <h2 className="mt-4 p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
            ¿Tienes un desafío tecnológico que <span className="text-[var(--p2-green)]">aún no encuentra solución</span>?
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--p2-white)]/75 max-w-2xl mx-auto">
            En PM CUSTOM diseñamos tecnología adaptada a la realidad de tu empresa. Desde sensores inteligentes y plataformas IoT hasta productos tecnológicos completamente personalizados.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link to="/contacto" className="p2-btn">Agenda una reunión con nuestros especialistas →</Link>
            <Link to="/contacto" className="p2-btn-ghost">Evalúa tu proyecto hoy</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
