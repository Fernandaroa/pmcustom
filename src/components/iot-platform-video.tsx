import { useEffect, useRef, useState } from "react";
import videoAsset from "@/assets/pmcustom-iot-video.mp4.asset.json";

const subtitles = [
  {
    from: 0,
    to: 10,
    text: "Esta plataforma centraliza el control y monitoreo del riego agrícola en una sola pantalla. Permite ver el estado de controladores, nodos y sectores, además de revisar y gestionar la agenda de riego.",
  },
  {
    from: 10,
    to: 20,
    text: "Desde el control manual, el usuario puede operar equipos como la bomba, el generador, el inyector, el soplador, los estanques y el caudalímetro, con indicadores claros de estado, nivel, presión y caudal.",
  },
  {
    from: 20,
    to: 30,
    text: "También muestra alertas y estados críticos para tomar decisiones rápidas y mantener el sistema funcionando de forma eficiente.",
  },
];

export function IotPlatformVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState("");

  // Update subtitle text based on currentTime
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const t = video.currentTime;
      const match = subtitles.find((s) => t >= s.from && t < s.to);
      setCurrentText(match ? match.text : "");
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  // Play when in viewport, pause when out
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-24 bg-[var(--p2-surface)]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="p2-eyebrow">La plataforma en acción</div>
        <h2 className="mt-3 p2-display text-3xl md:text-4xl text-[var(--p2-white)] max-w-3xl">
          Un vistazo a cómo <span className="text-[var(--p2-green)]">opera</span> nuestra plataforma IoT.
        </h2>

        <div
          ref={containerRef}
          className="relative mt-10 rounded-xl overflow-hidden shadow-2xl border border-[var(--p2-line)] bg-black"
        >
          <video
            ref={videoRef}
            src={videoAsset.url}
            className="w-full block"
            controls
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
          />
          {currentText && (
            <div className="pointer-events-none absolute bottom-14 md:bottom-16 left-0 right-0 px-4 md:px-8">
              <div className="mx-auto max-w-3xl bg-black/65 backdrop-blur-sm rounded-lg px-4 py-2.5 md:px-5 md:py-3 text-white text-xs md:text-sm leading-relaxed text-center font-medium">
                {currentText}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
