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

export function ProposalSwitcher({ current }: { current?: 1 | 2 }) {
  const other = current === 1 ? 2 : 1;
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        to={other === 1 ? "/propuesta-1" : "/propuesta-2"}
        className="inline-flex items-center gap-2 rounded-full bg-black/85 backdrop-blur px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg hover:bg-black"
      >
        Ver Propuesta 0{other} →
      </Link>
    </div>
  );
}
