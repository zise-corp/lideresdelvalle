"use client";
import Link from "next/link";
import data from "@/lib/data";
import { useReveal, MountainMark, PageHeader, CTASplit } from "@/components/ui";

export default function ProgramaPage() {
  useReveal();
  return (
    <main>
      <PageHeader
        kicker="El Programa · 50 horas académicas"
        title={
          <>
            Formación integral para
            <br />
            líderes con propósito
          </>
        }
        sub="Un programa de tres módulos estratégicos que combina democracia, participación comunitaria y gestión de proyectos, bajo una metodología vivencial y un modelo híbrido."
      >
        <div className="prog-meta" data-reveal style={{ "--d": "180ms" }}>
          <span className="chip chip-dot">Modelo híbrido</span>
          <span className="chip">70% presencial · 20% virtual · 10% autónomo</span>
          <span className="chip">3 módulos · 50 horas</span>
        </div>
      </PageHeader>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="prog-pillars">
            {data.pillars.map((p, i) => (
              <div className="prog-pillar" key={i} data-reveal style={{ "--d": i * 60 + "ms" }}>
                <div className="prog-pillar-top">
                  <MountainMark size={26} />
                  <span className="mono muted-3">{p.n}</span>
                </div>
                <h3 className="h-md">{p.t}</h3>
                <p className="text-dim" style={{ fontSize: "0.95rem" }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <span className="kicker on-cream" data-reveal>
            Pilares formativos
          </span>
          <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 16, marginBottom: 44 }}>
            Tres módulos, un solo camino
          </h2>
          <div className="mod-cards">
            {data.modules.map((m, i) => (
              <div className="mod-card" key={i} data-reveal style={{ "--d": i * 80 + "ms" }}>
                <span className="mod-card-n">0{m.n}</span>
                <div className="mod-card-body">
                  <h3 className="h-md" style={{ color: "var(--burgundy)" }}>
                    {m.title}
                  </h3>
                  <p style={{ color: "var(--tx-cream-2)", margin: "10px 0 18px" }}>{m.desc}</p>
                  <Link href="/convocatoria" className="mod-card-link">
                    Ver cronograma del módulo →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="benefit-head">
            <div>
              <span className="kicker" data-reveal>
                Qué obtienes al participar
              </span>
              <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 16 }}>
                Mucho más que
                <br />
                un certificado
              </h2>
            </div>
          </div>
          <div className="benefit-grid">
            {data.benefits.map((b, i) => (
              <div className="card benefit" key={i} data-reveal style={{ "--d": i * 60 + "ms" }}>
                <span className="benefit-n mono">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h-md" style={{ fontSize: "1.15rem" }}>
                  {b.t}
                </h3>
                <p className="text-dim" style={{ fontSize: "0.92rem" }}>
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap eval-wrap">
          <div data-reveal>
            <span className="kicker">Criterios de evaluación</span>
            <h2 className="h-lg" style={{ marginTop: 16 }}>
              Evaluación continua
            </h2>
            <p className="text-dim" style={{ marginTop: 14, maxWidth: "40ch" }}>
              Para obtener la certificación, los participantes son evaluados bajo un esquema
              de evaluación continua a lo largo de los tres módulos.
            </p>
          </div>
          <div className="eval-list" data-reveal style={{ "--d": "120ms" }}>
            {data.evaluation.map((e, i) => (
              <div className="eval-row" key={i}>
                <span>{e.l}</span>
                <span className="eval-r">{e.r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASplit />
    </main>
  );
}
