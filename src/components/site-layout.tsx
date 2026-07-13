import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import pmcustomLogo from "@/assets/pmcustom-logo.png.asset.json";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/sistemas-embebidos", label: "Sistemas Embebidos" },
  { to: "/iot", label: "IoT" },
  { to: "/automatizacion-industrial", label: "Automatización" },
  { to: "/investigacion-desarrollo", label: "I+D · CORFO" },
  { to: "/casos-exito", label: "Casos" },
  { to: "/industrias", label: "Industrias" },
  { to: "/contacto", label: "Contacto" },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-[var(--p2-black)]/90 backdrop-blur border-b border-[var(--p2-line)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={pmcustomLogo.url} alt="PM CUSTOM" className="h-7 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--p2-white)]/85">
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-[var(--p2-green)]" }}
              className="hover:text-[var(--p2-green)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contacto" className="hidden md:inline-flex p2-btn !py-2 !px-4 !text-xs">
            Evaluar proyecto
          </Link>
          <button
            className="lg:hidden text-[var(--p2-white)]"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[var(--p2-line)] bg-[var(--p2-black)]">
          <nav className="px-6 py-4 flex flex-col gap-3 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-1 text-[var(--p2-white)]/85 hover:text-[var(--p2-green)]"
                activeProps={{ className: "text-[var(--p2-green)]" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--p2-line)] bg-[var(--p2-surface)] mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <img src={pmcustomLogo.url} alt="PM CUSTOM" className="h-8 w-auto mb-4" />
          <p className="text-[var(--p2-muted)] leading-relaxed">
            Partner tecnológico en sistemas embebidos, IoT y automatización para industrias en Chile y Latinoamérica.
          </p>
        </div>
        <div>
          <div className="p2-eyebrow mb-4">Servicios</div>
          <ul className="space-y-2">
            <li><Link to="/sistemas-embebidos" className="hover:text-[var(--p2-green)]">Sistemas Embebidos</Link></li>
            <li><Link to="/iot" className="hover:text-[var(--p2-green)]">Soluciones IoT</Link></li>
            <li><Link to="/automatizacion-industrial" className="hover:text-[var(--p2-green)]">Automatización Industrial</Link></li>
            <li><Link to="/sistema-predictor-riego-ndvi" className="hover:text-[var(--p2-green)]">Predictor de Riego NDVI</Link></li>
            <li><Link to="/desarrollo-productos" className="hover:text-[var(--p2-green)]">Desarrollo de Productos</Link></li>
            <li><Link to="/investigacion-desarrollo" className="hover:text-[var(--p2-green)]">I+D · CORFO</Link></li>
          </ul>
        </div>
        <div>
          <div className="p2-eyebrow mb-4">Empresa</div>
          <ul className="space-y-2">
            <li><Link to="/casos-exito" className="hover:text-[var(--p2-green)]">Casos de éxito</Link></li>
            <li><Link to="/industrias" className="hover:text-[var(--p2-green)]">Industrias</Link></li>
            <li><Link to="/contacto" className="hover:text-[var(--p2-green)]">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <div className="p2-eyebrow mb-4">Contacto</div>
          <p className="text-[var(--p2-muted)]">¿Tienes un desafío tecnológico?<br />Te respondemos en menos de 24 hrs hábiles.</p>
          <Link to="/contacto" className="mt-4 inline-flex p2-btn !py-2 !px-4 !text-xs">Agendar reunión</Link>
        </div>
      </div>
      <div className="border-t border-[var(--p2-line)] py-5 text-center text-xs text-[var(--p2-muted)]">
        © {new Date().getFullYear()} PM CUSTOM · Sistemas Embebidos e IoT
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="theme-p2 min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
