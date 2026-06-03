import { useEffect, useRef } from "react";

/**
 * Applies a vertical parallax translate to the referenced element
 * based on its position in the viewport.
 * speed: 0 = static, 0.5 = moves at half scroll speed (classic parallax)
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      // distance from viewport center
      const offset = rect.top + rect.height / 2 - vh / 2;
      const translate = -offset * speed;
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0) scale(1.15)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
