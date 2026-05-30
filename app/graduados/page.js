"use client";
import data from "@/lib/data";
import { useReveal, MountainMark, CTASplit, PageHeader } from "@/components/ui";

function GradCard({ g, i }) {
  return (
    <article className="grad-card" data-reveal style={{ "--d": (i % 3) * 70 + "ms" }}>
      <div className="grad-portrait halftone">
        <span className="ht-glyph">{g.glyph}</span>
      </div>
      <div className="grad-body">
        <div className="grad-meta">
          <span className="grad-gen">Gen. {g.gen}</span>
        </div>
        <h3 className="grad-name">{g.name}</h3>
        <span className="grad-role">{g.role}</span>
        <p className="grad-impact">{g.impact}</p>
      </div>
    </article>
  );
}

export default function GraduadosPage() {
  useReveal();
  return (
    <main>
      <PageHeader
        kicker="Generaciones"
        title={
          <>
            340+ líderes que
            <br />
            transforman Bolivia
          </>
        }
        sub="Cada generación suma jóvenes comprometidos que regresan a sus comunidades con herramientas reales de liderazgo, democracia y participación ciudadana activa."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grad-grid">
            {data.graduates.map((g, i) => (
              <GradCard key={g.name} g={g} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap center">
          <MountainMark size={38} />
          <h2 className="h-xl" data-reveal style={{ marginTop: 22 }}>
            Cada egresado es prueba
            <br />
            del cambio posible
          </h2>
          <p
            className="lead"
            data-reveal
            style={{ "--d": "80ms", maxWidth: "50ch", margin: "18px auto 0" }}
          >
            El impacto de Líderes del Valle no termina en el aula — continúa en
            cada comunidad, institución y proyecto que nuestros graduados lideran.
          </p>
          <div className="grad-stats-row" data-reveal style={{ "--d": "140ms" }}>
            {data.stats.map((s, i) => (
              <div key={i} className="grad-stat">
                <span className="statnum">{s.n}</span>
                <span className="hstat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASplit />
    </main>
  );
}
