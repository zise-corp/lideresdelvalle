"use client";
import Link from "next/link";
import data from "@/lib/data";
import { useReveal, MountainMark, CTASplit, PageHeader } from "@/components/ui";

function TeamCard({ m, i }) {
  return (
    <article className="tcard" data-reveal style={{ "--d": i * 80 + "ms" }}>
      <div className="tcard-portrait halftone">
        {m.image ? (
          <img src={m.image} alt={m.name} className="tcard-img" />
        ) : (
          <span className="ht-glyph">{m.glyph}</span>
        )}
        <span className="tcard-role">{m.role}</span>
      </div>
      <div className="tcard-body">
        <h3 className="tcard-name">{m.name}</h3>
        <p className="tcard-bio">{m.bio}</p>
        {m.quote && <p className="tcard-quote serif-italic">“{m.quote}”</p>}
        <span className="tcard-sign serif-italic">{m.name}</span>
      </div>
    </article>
  );
}

const VALUES = [
  { t: "Excelencia académica", d: "Estructuras técnicas sólidas y docentes expertos en cada área." },
  { t: "Responsabilidad civil", d: "El cambio real nace del compromiso colectivo con la sociedad." },
  { t: "Educación integral", d: "Formación personalizada que atiende a cada joven en su contexto." },
  { t: "Comunicación con impacto", d: "Dar cara y voz a proyectos que fortalecen la juventud ciudadana." },
];

export default function EquipoPage() {
  useReveal();
  return (
    <main>
      <PageHeader
        kicker="Consejo Directivo"
        title={
          <>
            Las personas detrás
            <br />
            del movimiento
          </>
        }
        sub="Un equipo multidisciplinario de profesionales comprometidos con la innovación social, la educación integral y la transformación de la juventud boliviana."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="team-grid">
            {data.team.map((m, i) => (
              <TeamCard key={i} m={m} i={i} />
            ))}
            <div className="tcard tcard-join" data-reveal style={{ "--d": data.team.length * 80 + "ms" }}>
              <MountainMark size={34} />
              <h3 className="h-md" style={{ marginTop: 18 }}>
                ¿Quieres ser mentor o aliado?
              </h3>
              <p className="text-dim" style={{ fontSize: "0.95rem", margin: "10px 0 20px" }}>
                Sumamos profesionales, instituciones y voluntarios que comparten nuestra visión
                de liderazgo juvenil.
              </p>
              <Link href="/contacto" className="btn btn-ghost">
                Conversemos <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <span className="kicker" data-reveal>
            Lo que nos mueve
          </span>
          <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 16, marginBottom: 40 }}>
            Convicciones compartidas
          </h2>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div className="value" key={i} data-reveal style={{ "--d": i * 60 + "ms" }}>
                <span className="value-bar" aria-hidden="true"></span>
                <h3 className="h-md" style={{ fontSize: "1.12rem" }}>
                  {v.t}
                </h3>
                <p className="text-dim" style={{ fontSize: "0.92rem" }}>
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASplit />
    </main>
  );
}
