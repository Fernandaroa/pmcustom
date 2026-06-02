import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function LangSwitch({ variant }: { variant: "p1" | "p2" }) {
  const { lang, setLang } = useI18n();
  const base =
    variant === "p1"
      ? "p1-mono text-xs tracking-widest uppercase"
      : "text-xs tracking-widest uppercase font-semibold";
  return (
    <div className={`flex items-center gap-2 ${base}`}>
      <button
        onClick={() => setLang("es")}
        className={lang === "es" ? "opacity-100" : "opacity-40 hover:opacity-70"}
      >
        ES
      </button>
      <span className="opacity-30">/</span>
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}
      >
        EN
      </button>
    </div>
  );
}

export function ProposalSwitcher({ current }: { current: 1 | 2 }) {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-1.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-white/15 shadow-2xl text-xs">
      <Link
        to="/propuesta-1"
        className={`px-3 py-1.5 rounded-full transition ${current === 1 ? "bg-white text-black" : "text-white/70 hover:text-white"}`}
      >
        Propuesta 01
      </Link>
      <Link
        to="/propuesta-2"
        className={`px-3 py-1.5 rounded-full transition ${current === 2 ? "bg-white text-black" : "text-white/70 hover:text-white"}`}
      >
        Propuesta 02
      </Link>
      <Link
        to="/"
        className="px-3 py-1.5 rounded-full text-white/50 hover:text-white transition"
      >
        ←
      </Link>
    </div>
  );
}
