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

