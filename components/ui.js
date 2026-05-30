"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ---- Scroll reveal: IntersectionObserver bidireccional ---- */
export function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
          } else if (e.boundingClientRect.top > window.innerHeight * 0.9) {
            // Element went below viewport (user scrolled up) — reset for re-entry
            e.target.classList.remove("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    const t = setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
      });
    }, 350);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

/* ---- Contador animado ---- */
export function Counter({ value }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const m = String(value).match(/^(\d+)(.*)$/);
    if (!m) return;
    const target = parseInt(m[1], 10),
      suffix = m[2];
    const el = ref.current;
    let done = false;
    const run = () => {
      if (done || !el) return;
      if (el.getBoundingClientRect().top > window.innerHeight) return;
      done = true;
      window.removeEventListener("scroll", run);
      const dur = 1300,
        t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setShown(Math.round(target * eased) + suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const t = setTimeout(run, 80);
    window.addEventListener("scroll", run, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", run);
    };
  }, [value]);
  return <span ref={ref}>{shown}</span>;
}

/* ---- Marca de montaña (triángulos de marca) ---- */
export function MountainMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 40" fill="none" aria-hidden="true">
      <path d="M14 4 L26 32 L2 32 Z" fill="var(--navy)" />
      <path d="M30 0 L48 38 L16 38 Z" fill="var(--burgundy)" />
    </svg>
  );
}

/* ---- Logo ---- */
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Líderes del Valle — inicio">
      <span className="logo-chip">
        <img src="/logo.png" alt="Líderes del Valle" />
      </span>
      <span className="logo-tx">
        <strong>LÍDERES</strong>
        <em>DEL VALLE</em>
      </span>
    </Link>
  );
}

/* ---- Encabezado de página interna ---- */
export function PageHeader({ kicker, title, sub, children }) {
  useReveal();
  return (
    <section className="pagehead">
      <div className="wrap">
        <span className="kicker" data-reveal>
          {kicker}
        </span>
        <h1 className="h-xl pagehead-title" data-reveal style={{ "--d": "60ms" }}>
          {title}
        </h1>
        {sub && (
          <p className="lead pagehead-sub" data-reveal style={{ "--d": "120ms" }}>
            {sub}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---- CTA reutilizable al final de páginas ---- */
export function CTASplit() {
  return (
    <section className="section endcta">
      <div className="wrap center">
        <MountainMark size={36} />
        <h2 className="h-xl" data-reveal style={{ marginTop: 22 }}>
          ¿Listo para ser parte del cambio?
        </h2>
        <p className="lead" data-reveal style={{ "--d": "80ms", margin: "16px auto 30px", maxWidth: "46ch" }}>
          La Generación 2026 está abierta. Cupos limitados a 40 participantes.
        </p>
        <div className="hero-actions" data-reveal style={{ "--d": "140ms", justifyContent: "center" }}>
          <Link href="/postulacion" className="btn btn-primary btn-lg">
            Postula Ahora <span className="arr">→</span>
          </Link>
          <Link href="/convocatoria" className="btn btn-ghost btn-lg">
            Ver convocatoria
          </Link>
        </div>
      </div>
    </section>
  );
}
