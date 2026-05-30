"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./ui";

const NAV = [
  { p: "/", l: "Inicio" },
  { p: "/programa", l: "El Programa" },
  { p: "/convocatoria", l: "Convocatoria" },
  { p: "/equipo", l: "Equipo" },
  { p: "/graduados", l: "Graduados" },
  { p: "/contacto", l: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="nav-stripe" aria-hidden="true" />
      <header className={"nav" + (scrolled ? " nav-scrolled" : "")}>
        <div className="nav-inner wrap">
          <Logo />
          <nav className="nav-links">
            {NAV.map((it) => (
              <Link
                key={it.p}
                href={it.p}
                className={"nav-link" + (pathname === it.p ? " active" : "")}
              >
                {it.l}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <Link href="/postulacion" className="btn btn-nav-cta">
              Postula <span className="arr">→</span>
            </Link>
          </div>
          <button
            className={"burger" + (open ? " open" : "")}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div className={"mobile-overlay" + (open ? " open" : "")} aria-hidden={!open}>
        <nav className="mobile-nav">
          {NAV.map((it, i) => (
            <Link
              key={it.p}
              href={it.p}
              className={"mobile-link" + (pathname === it.p ? " active" : "")}
              style={{ "--i": i }}
            >
              <span className="mobile-link-n mono">0{i + 1}</span>
              {it.l}
            </Link>
          ))}
          <div className="mobile-cta" style={{ "--i": 5 }}>
            <Link href="/postulacion" className="btn btn-primary btn-lg">
              Postula Ahora <span className="arr">→</span>
            </Link>
          </div>
        </nav>
        <p className="mobile-footer mono muted-3">Cochabamba, Bolivia · Generación 2026</p>
      </div>
    </>
  );
}
