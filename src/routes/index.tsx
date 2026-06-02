import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LangSwitch } from "@/components/shared-nav";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import deviceSketch from "@/assets/device-sketch.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PMCustom · Propuestas de sitio web" },
      { name: "description", content: "Dos propuestas de diseño para PMCustom — Partner Tecnológico." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)] text-white">
      <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.88_0.18_165)]" />
          <span className="font-mono text-sm tracking-[0.2em] uppercase">PMCustom</span>
        </div>
        <span className="text-xs uppercase tracking-widest text-white/40 hidden md:block">Client preview · v2.0</span>
        <LangSwitch variant="p1" />
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-white/50">// {t("chooseSub")}</p>
        <h1 className="mt-6 text-5xl md:text-7xl font-normal leading-[1] max-w-4xl"
            style={{ fontFamily: "Instrument Serif, serif", letterSpacing: "-0.02em" }}>
          {t("chooseTitle").split(" ").slice(0, 2).join(" ")}{" "}
          <em className="italic text-[oklch(0.88_0.18_165)]">{t("chooseTitle").split(" ").slice(2).join(" ")}</em>
        </h1>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Propuesta 1 card */}
          <Link to="/propuesta-1" className="group block">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
              <img src={heroIndustrial} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase font-mono">01 / Editorial</span>
                  <span className="text-xs tracking-widest uppercase opacity-70">→</span>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "Instrument Serif, serif", letterSpacing: "-0.02em" }}>
                    Cinemática <em className="italic">editorial</em>
                  </h2>
                  <p className="mt-3 text-sm text-white/70 max-w-sm">{t("p1Tag")}</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Propuesta 2 card */}
          <Link to="/propuesta-2" className="group block">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-black border border-white/10">
              <img src={deviceSketch} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest uppercase font-mono text-[oklch(0.88_0.18_165)]">02 / Engineering</span>
                  <span className="text-xs tracking-widest uppercase opacity-70">→</span>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em" }}>
                    Black<br/>engineering
                  </h2>
                  <p className="mt-3 text-sm text-white/70 max-w-sm">{t("p2Tag")}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 text-sm text-white/60">
          <div>
            <div className="text-xs tracking-widest uppercase text-white/40">Cliente</div>
            <div className="mt-2 text-white">PMCustom · pmcustom.cl</div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-white/40">Referencias</div>
            <div className="mt-2 text-white">zetta-joule.com · renaudigital.com</div>
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-white/40">Objetivo</div>
            <div className="mt-2 text-white">Captar leads — formulario de contacto</div>
          </div>
        </div>
      </main>

      <footer className="px-6 md:px-12 py-8 border-t border-white/10 font-mono text-xs text-white/40 uppercase tracking-widest">
        {t("footer")}
      </footer>
    </div>
  );
}
