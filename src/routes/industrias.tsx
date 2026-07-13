import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { industries } from "@/lib/content";
import industriesHero from "@/assets/industries-hero.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/industrias")({
  head: () => ({
    meta: [
      { title: "Industrias que servimos | PM CUSTOM" },
      {
        name: "description",
        content:
          "Soluciones tecnológicas para agricultura, minería, manufactura, energía, industria y logística. Tecnología a medida para cada operación.",
      },
      { property: "og:title", content: "Industrias | PM CUSTOM" },
      {
        property: "og:description",
        content: "Soluciones para industrias que necesitan información, control y eficiencia.",
      },
      { property: "og:url", content: "/industrias" },
      { property: "og:image", content: industriesHero },
    ],
    links: [{ rel: "canonical", href: "/industrias" }],
  }),
  component: IndustriasPage,
});

function IndustriasPage() {
  return (
    <SiteLayout>
      <section className="relative border-b border-[var(--p2-line)]">
        <div className="relative h-[400px] overflow-hidden">
          <img src={industriesHero} alt="Industrias en Chile" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="p2-eyebrow text-white/70">Industrias</div>
              <h1 className="mt-4 p2-display text-4xl md:text-6xl text-white">
                Soluciones para industrias que necesitan{" "}
                <span className="text-[var(--p2-green)]">información, control y eficiencia</span>.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="p2-display text-2xl md:text-3xl text-[var(--p2-white)] mb-10">
            Industrias que atendemos
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <div key={ind.name} className="p2-card p-7">
                <div className="text-[var(--p2-green)] text-xs font-bold tracking-[0.22em]">0{i + 1}</div>
                <h3 className="mt-3 text-xl font-bold text-[var(--p2-white)]">{ind.name}</h3>
                <p className="mt-3 text-sm text-[var(--p2-white)]/70 leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
