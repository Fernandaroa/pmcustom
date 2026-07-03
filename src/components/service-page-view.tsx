import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { CheckCircle2 } from "lucide-react";
import type { ServicePage as ServiceData } from "@/lib/content";

export function ServicePageView({ service, extra }: { service: ServiceData; extra?: React.ReactNode }) {
  return (
    <SiteLayout>
      <section className="relative border-b border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="p2-eyebrow">Servicio</div>
            <h1 className="mt-4 p2-display text-4xl md:text-6xl text-[var(--p2-white)]">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-[var(--p2-white)]/80 leading-relaxed">{service.lead}</p>
            <p className="mt-4 text-base text-[var(--p2-white)]/70 leading-relaxed">{service.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="p2-btn">Evaluar mi proyecto →</Link>
              <Link to="/casos-exito" className="p2-btn-ghost">Ver casos de éxito</Link>
            </div>
          </div>
          <div className="p2-card aspect-[4/3] overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[var(--p2-surface)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p2-eyebrow">Beneficios</div>
          <h2 className="mt-3 p2-display text-3xl md:text-4xl text-[var(--p2-white)] max-w-3xl">
            Lo que obtienes al trabajar con <span className="text-[var(--p2-green)]">PM CUSTOM</span>.
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {service.benefits.map((b) => (
              <li key={b} className="p2-card p-5 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[var(--p2-green)] shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--p2-white)] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="p2-display text-3xl md:text-4xl text-[var(--p2-white)]">
            ¿Listo para conversar tu <span className="text-[var(--p2-green)]">proyecto</span>?
          </h2>
          <p className="mt-5 text-base text-[var(--p2-white)]/75">
            Cuéntanos tu desafío. Te respondemos en menos de 24 horas hábiles.
          </p>
          <Link to="/contacto" className="mt-8 inline-flex p2-btn">Solicitar evaluación →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
