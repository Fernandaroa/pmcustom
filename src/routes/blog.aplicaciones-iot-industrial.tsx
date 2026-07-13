import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroIot from "@/assets/hero-iot.jpg";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TITLE = "Aplicaciones de IoT Industrial en Chile | PM CUSTOM";
const DESCRIPTION =
  "Guía práctica de aplicaciones de IoT industrial en minería, agricultura y manufactura en Chile: casos reales, arquitectura y beneficios.";
const PATH = "/blog/aplicaciones-iot-industrial";

export const Route = createFileRoute("/blog/aplicaciones-iot-industrial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PATH },
      { property: "og:type", content: "article" },
      { property: "og:image", content: heroIot },
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Aplicaciones de IoT Industrial en Chile",
          description: DESCRIPTION,
          image: heroIot,
          author: { "@type": "Organization", name: "PM CUSTOM" },
          publisher: { "@type": "Organization", name: "PM CUSTOM" },
          mainEntityOfPage: PATH,
          about: [
            "Industrial IoT",
            "IoT en minería",
            "IoT en agricultura",
            "IoT en manufactura",
          ],
        }),
      },
    ],
  }),
  component: GuidePage,
});

const useCases = [
  {
    industry: "Minería",
    title: "Monitoreo remoto de activos y variables críticas",
    problem:
      "Faenas dispersas, sin cobertura estable y con equipos costosos operando 24/7. Sin datos en línea, las fallas se detectan tarde y las decisiones se toman a ciegas.",
    solution:
      "Nodos IoT industriales con comunicación LoRa y celular, alimentación solar y sensores de vibración, temperatura, presión y consumo. Los datos se centralizan en un dashboard con alertas configurables.",
    outcomes: [
      "Detección temprana de fallas y mantenimiento predictivo",
      "Trazabilidad de equipos móviles y estacionarios",
      "Menor costo operacional por hora fuera de servicio",
    ],
  },
  {
    industry: "Agricultura",
    title: "Riego inteligente y gestión hídrica por sectores",
    problem:
      "El riego uniforme desperdicia agua y energía. Sin datos de humedad, presión y clima, la fertilización y la irrigación se ajustan por intuición.",
    solution:
      "Sensores de humedad y presión en terreno, válvulas controladas por nodos autónomos y programación desde la nube. Comunicación LoRa entre sectores y celular hacia la plataforma.",
    outcomes: [
      "Mayor eficiencia hídrica y menor consumo energético",
      "Programación por sector y por tipo de cultivo",
      "Menor intervención manual en terreno",
    ],
  },
  {
    industry: "Manufactura",
    title: "Trazabilidad de procesos y control de calidad",
    problem:
      "Líneas productivas con datos aislados en cada máquina. Sin integración, cada turno registra manualmente y los rechazos se detectan al final del proceso.",
    solution:
      "Pasarelas IoT que integran PLCs, sensores y sistemas existentes vía protocolos industriales. Data logger centralizado con dashboards en tiempo real y alertas por variables fuera de rango.",
    outcomes: [
      "Trazabilidad completa lote a lote",
      "Detección inmediata de desviaciones de calidad",
      "Reportes automáticos para producción y mantenimiento",
    ],
  },
];

function GuidePage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-[var(--p2-line)]">
        <div className="relative h-[420px] overflow-hidden">
          <img src={heroIot} alt="IoT industrial en operación" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10 h-full flex items-center">
            <div>
              <div className="p2-eyebrow text-white/70">Guía · IoT Industrial</div>
              <h1 className="mt-4 p2-display text-4xl md:text-6xl text-white">
                Aplicaciones de <span className="text-[var(--p2-green)]">IoT Industrial</span> en Chile
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-2xl">
                Casos reales de IoT en minería, agricultura y manufactura: qué problema resuelven, cómo se arman y qué resultados entregan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <p className="text-lg text-[var(--p2-white)]/80 leading-relaxed">
            El IoT industrial (IIoT) conecta sensores, dispositivos y sistemas legados con plataformas que centralizan la información y automatizan decisiones. En Chile, los sectores con mayor tracción son minería, agricultura y manufactura, donde los datos en terreno resuelven problemas concretos de eficiencia, mantenimiento y trazabilidad.
          </p>

          <h2 className="mt-14 p2-display text-3xl md:text-4xl text-[var(--p2-white)]">
            ¿Qué es una solución de IoT industrial?
          </h2>
          <p className="mt-5 text-base text-[var(--p2-white)]/75 leading-relaxed">
            Una solución IIoT combina cuatro capas: <strong className="text-[var(--p2-white)]">sensores</strong> que capturan variables físicas, <strong className="text-[var(--p2-white)]">nodos</strong> que procesan y transmiten (celular, LoRa, Ethernet industrial), una <strong className="text-[var(--p2-white)]">plataforma</strong> que almacena y analiza, y <strong className="text-[var(--p2-white)]">dashboards y alertas</strong> que entregan la información a operaciones. La diferencia con el IoT de consumo está en la robustez, la ciberseguridad y la integración con sistemas industriales existentes.
          </p>

          <h2 className="mt-14 p2-display text-3xl md:text-4xl text-[var(--p2-white)]">
            Aplicaciones reales por industria
          </h2>

          <div className="mt-10 space-y-10">
            {useCases.map((u, i) => (
              <Reveal key={u.industry} delay={i * 80}>
                <section className="p2-card p-7 md:p-9">
                  <div className="p2-eyebrow">{u.industry}</div>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--p2-white)]">{u.title}</h3>
                  <p className="mt-5 text-sm text-[var(--p2-white)]/70 leading-relaxed">
                    <strong className="text-[var(--p2-white)]">Problema. </strong>
                    {u.problem}
                  </p>
                  <p className="mt-3 text-sm text-[var(--p2-white)]/70 leading-relaxed">
                    <strong className="text-[var(--p2-white)]">Solución IIoT. </strong>
                    {u.solution}
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                    {u.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-[var(--p2-green)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--p2-white)]/85 leading-relaxed">{o}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>


          <h2 className="mt-14 p2-display text-3xl md:text-4xl text-[var(--p2-white)]">
            Cómo evaluar si tu operación está lista para IIoT
          </h2>
          <ol className="mt-6 space-y-4 list-decimal pl-6 text-base text-[var(--p2-white)]/80">
            <li>Identificar 1 o 2 variables críticas cuyo desconocimiento hoy tiene costo operacional claro.</li>
            <li>Verificar cobertura de comunicación (celular, LoRa) y disponibilidad de energía en terreno.</li>
            <li>Definir el destino de los datos: dashboard operacional, integración con ERP/SCADA o alertas al equipo de terreno.</li>
            <li>Escalar por sectores en vez de desplegar todo de una vez.</li>
          </ol>

          <div className="mt-14 p2-card p-8 md:p-10 text-center">
            <h2 className="p2-display text-2xl md:text-3xl text-[var(--p2-white)]">
              ¿Quieres aplicar IoT industrial en tu operación?
            </h2>
            <p className="mt-4 text-base text-[var(--p2-white)]/75">
              Evaluamos factibilidad técnica y armamos un piloto acotado antes de escalar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/contacto" className="p2-btn">Solicitar evaluación →</Link>
              <Link to="/casos-exito" className="p2-btn-ghost">Ver casos de éxito</Link>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
