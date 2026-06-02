import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LangSwitch } from "@/components/shared-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PMCustom · Propuestas de sitio web" },
      { name: "description", content: "Dos propuestas de diseño para PMCustom." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-[oklch(0.14_0.01_250)] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.28_0.02_250/0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.28_0.02_250/0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30"
           style={{ background: "radial-gradient(circle, oklch(0.88 0.22 130), transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-25"
           style={{ background: "radial-gradient(circle, oklch(0.72 0.2 50), transparent 70%)" }} />

      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-mono text-sm tracking-widest uppercase">PMCustom</div>
        <LangSwitch variant="p1" />
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-32">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-[oklch(0.88_0.22_130)] mb-6">
          // CLIENT-PREVIEW · v1.0
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          {t("chooseTitle")}
        </h1>
        <p className="mt-6 text-lg text-white/60 max-w-2xl">{t("chooseSub")}</p>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Link
            to="/propuesta-1"
            className="group relative block p-8 md:p-10 rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[oklch(0.88_0.22_130)] transition overflow-hidden"
          >
            <div className="font-mono text-xs tracking-widest uppercase text-[oklch(0.88_0.22_130)]">01</div>
            <h2 className="mt-4 text-3xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Lab Técnico
            </h2>
            <p className="mt-2 text-sm text-white/50 font-mono uppercase tracking-wider">{t("p1Tag")}</p>
            <div className="mt-8 h-32 rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-[10px] text-[oklch(0.88_0.22_130)] overflow-hidden">
              <div>$ pmcustom --init</div>
              <div className="text-white/40">› sensors[24] online</div>
              <div className="text-white/40">› stream: cloud.pmcustom.cl</div>
              <div className="text-[oklch(0.82_0.13_210)]">› dashboard: ready ▮</div>
            </div>
            <div className="mt-6 font-mono text-xs uppercase tracking-widest text-white/70 group-hover:text-[oklch(0.88_0.22_130)] transition">
              {t("enter")} →
            </div>
          </Link>

          <Link
            to="/propuesta-2"
            className="group relative block p-8 md:p-10 rounded-2xl bg-[oklch(0.97_0.015_85)] text-[oklch(0.16_0.02_260)] hover:scale-[1.01] transition overflow-hidden"
          >
            <div className="text-xs tracking-[0.2em] uppercase font-bold text-[oklch(0.72_0.2_50)]">02</div>
            <h2 className="mt-4 text-3xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em" }}>
              Editorial <em className="italic font-normal text-[oklch(0.72_0.2_50)]" style={{ fontFamily: "Instrument Serif, serif" }}>vibrante</em>
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider opacity-60">{t("p2Tag")}</p>
            <div className="mt-8 h-32 rounded-xl border-2 border-black p-4 relative overflow-hidden bg-white">
              <div className="text-2xl font-bold leading-none" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Datos → <em className="italic font-normal text-[oklch(0.72_0.2_50)]" style={{ fontFamily: "Instrument Serif, serif" }}>decisiones</em>
              </div>
              <div className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest font-bold">
                IoT · I+D · CORFO
              </div>
            </div>
            <div className="mt-6 text-sm uppercase tracking-widest font-bold group-hover:text-[oklch(0.72_0.2_50)] transition">
              {t("enter")} →
            </div>
          </Link>
        </div>
      </main>

      <footer className="relative z-10 px-6 md:px-12 py-8 border-t border-white/10 font-mono text-xs text-white/40 uppercase tracking-widest">
        {t("footer")}
      </footer>
    </div>
  );
}
