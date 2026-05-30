import Link from "next/link";
import { Logo } from "./ui";
import CopyEmail from "./CopyEmail";
import data from "@/lib/data";

const NAV = [
  { p: "/", l: "Inicio" },
  { p: "/programa", l: "El Programa" },
  { p: "/convocatoria", l: "Convocatoria" },
  { p: "/equipo", l: "Equipo" },
  { p: "/graduados", l: "Graduados" },
  { p: "/contacto", l: "Contacto" },
];

const wa = (p) => `https://wa.me/${p.replace(/\D/g, "")}`;

export default function Footer() {
  const c = data.contact;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p className="footer-tag serif-italic">
              Jóvenes que transforman su comunidad. Liderazgo ético, democracia y
              participación ciudadana en el corazón de Bolivia.
            </p>
            <Link href="/postulacion" className="btn btn-primary">
              Postula a la convocatoria <span className="arr">→</span>
            </Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-h">Navegación</h4>
            {NAV.map((it) => (
              <Link key={it.p} href={it.p}>
                {it.l}
              </Link>
            ))}
            <Link href="/postulacion">Postulación</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-h">Contacto</h4>
            <span className="muted-3">{c.city}</span>
            {c.phones.map((p) => (
              <a
                key={p}
                href={wa(p)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p}
              </a>
            ))}
            <CopyEmail email={c.email} />
          </div>
        </div>

        <div className="footer-bottom">
          <span className="mono">© {new Date().getFullYear()} Líderes del Valle · Cochabamba, Bolivia</span>
          <span className="mono muted-3">Proyecto educativo de liderazgo juvenil</span>
        </div>
      </div>
    </footer>
  );
}
