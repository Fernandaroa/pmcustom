import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";
import { Sprout, Globe2, Cpu, TrendingUp, LayoutDashboard } from "lucide-react";

export const Route = createFileRoute("/casos-exito/")({
  head: () => ({
    meta: [
      { title: "Casos de éxito 2026 | PM CUSTOM" },
      {
        name: "description",
        content:
          "Más de 5 hectáreas automatizadas, 3.000+ dispositivos en terreno y 20% de mejora productiva. PM CUSTOM opera con tecnología propia en Chile, España y Portugal.",
      },
      { property: "og:title", content: "Casos de éxito | PM CUSTOM" },
      {
        property: "og:description",
        content: "Resultados reales de automatización IoT en agricultura: hectáreas, dispositivos y productividad.",
      },
      { property: "og:url", content: "/casos-exito" },
    ],
    links: [{ rel: "canonical", href: "/casos-exito" }],
  }),
  component: CasesIndex,
});

type Milestone = {
  kicker: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  metric: React.ReactNode;
  title: string;
  body: string;
};

function CasesIndex() {
  const milestones: Milestone[] = [
    {
      kicker: "Escala 2026",
      icon: Sprout,
      metric: (
        <>
          <AnimatedCounter to={5} />
          <span className="text-[var(--p2-green)]">+</span>
          <span className="text-[0.5em] align-top ml-2 text-[var(--p2-white)]/60 tracking-normal">ha</span>
        </>
      ),
      title: "Hectáreas automatizadas",
      body: "En 2026 hemos automatizado más de 5 hectáreas de cultivo entre Chile, España y Portugal, integrando riego, sensores y control remoto.",
    },
    {
      kicker: "Presencia internacional",
      icon: Globe2,
      metric: (
        <>
          <AnimatedCounter to={3} />
          <span className="text-[0.5em] align-top ml-2 text-[var(--p2-white)]/60 tracking-normal">países</span>
        </>
      ),
      title: "Tecnología en Chile, España y Portugal",
      body: "PM CUSTOM está presente con tecnología propia operando en tres países, adaptándose a cultivos, climas y regulaciones locales.",
    },
    {
      kicker: "Dispositivos desplegados",
      icon: Cpu,
      metric: (
        <>
          <AnimatedCounter to={3000} />
          <span className="text-[var(--p2-green)]">+</span>
        </>
      ),
      title: "Dispositivos en terreno",
      body: "Más de 3.000 dispositivos operando en terreno, controlados y automatizados desde nuestra plataforma centralizada en la nube.",
    },
    {
      kicker: "Impacto productivo",
      icon: TrendingUp,
      metric: (
        <>
          <AnimatedCounter to={20} />
          <span className="text-[var(--p2-green)]">%</span>
        </>
      ),
      title: "Mejora en producción del cultivo",
      body: "Nuestros clientes han incrementado un 20% la producción aplicando automatización, monitoreo continuo y decisiones basadas en datos.",
    },
    {
      kicker: "En desarrollo",
      icon: LayoutDashboard,
      metric: (
        <>
          <AnimatedCounter to={4} />
          <span className="text-[0.5em] align-top ml-2 text-[var(--p2-white)]/60 tracking-normal">procesos</span>
        </>
      ),
      title: "Procesos unificados en un dashboard",
      body: "Estamos integrando rotoperfilador, plantación, cosecha y riego en un único dashboard centralizado para control total de la operación.",
    },
  ];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative border-b border-[var(--p2-line)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl bg-[var(--p2-green)]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl bg-[var(--p2-green)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-32">
          <Reveal>
            <div className="p2-eyebrow">Casos de éxito · 2026</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 p2-display text-4xl md:text-6xl lg:text-7xl text-[var(--p2-white)] max-w-5xl">
              Tecnología aplicada que ya está{" "}
              <span className="text-[var(--p2-green)]">generando resultados</span>.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 text-lg md:text-xl text-[var(--p2-white)]/70 max-w-2xl leading-relaxed">
              Cinco cifras que resumen lo que estamos construyendo con clientes en Chile, España y Portugal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-8 md:space-y-10">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isEven = i % 2 === 0;
            return (
              <Reveal key={i} delay={i * 60}>
                <article
                  className={`p2-card p-8 md:p-12 grid md:grid-cols-12 gap-8 md:gap-10 items-center ${
                    isEven ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Metric */}
                  <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
                    <div className="flex items-center gap-3 text-[var(--p2-green)]">
                      <Icon size={22} />
                      <span className="p2-eyebrow !text-[var(--p2-green)]">
                        {String(i + 1).padStart(2, "0")} · {m.kicker}
                      </span>
                    </div>
                    <div
                      className="mt-6 p2-display text-[var(--p2-white)] leading-none tracking-tight"
                      style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
                    >
                      {m.metric}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-7 lg:col-span-8 md:pl-6 md:border-l md:border-[var(--p2-line)]">
                    <h2 className="p2-display text-2xl md:text-4xl text-[var(--p2-white)]">
                      {m.title}
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-[var(--p2-white)]/75 leading-relaxed">
                      {m.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-[var(--p2-line)]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="p2-display text-3xl md:text-5xl text-[var(--p2-white)]">
              ¿Quieres ser el <span className="text-[var(--p2-green)]">próximo caso</span> de éxito?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-base md:text-lg text-[var(--p2-white)]/75">
              Cuéntanos tu operación. Evaluamos factibilidad y te respondemos en menos de 24 horas hábiles.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link to="/contacto" className="mt-10 inline-flex p2-btn">
              Solicitar evaluación →
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
