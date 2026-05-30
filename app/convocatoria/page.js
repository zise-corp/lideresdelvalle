"use client";
import { useState } from "react";
import Link from "next/link";
import data from "@/lib/data";
import { useReveal, PageHeader, CTASplit } from "@/components/ui";

function ModeTag({ mode }) {
  const cls = mode === "Virtual" ? "tag-virt" : mode === "Autónomo" ? "tag-aut" : "tag-pres";
  return <span className={"tag " + cls}>{mode}</span>;
}

function ModuleAccordion({ m, open, onToggle, idx }) {
  return (
    <div className={"acc" + (open ? " open" : "")} data-reveal style={{ "--d": idx * 70 + "ms" }}>
      <button className="acc-head" onClick={onToggle} aria-expanded={open}>
        <span className="acc-n">0{m.n}</span>
        <span className="acc-titles">
          <strong className="acc-title">{m.title}</strong>
          <span className="acc-desc">{m.desc}</span>
        </span>
        <span className="acc-icon" aria-hidden="true"></span>
      </button>
      <div className="acc-body">
        <div className="acc-body-inner">
          <div className="sched-head">
            <span>Unidad</span>
            <span>Fecha</span>
            <span>Horario</span>
            <span>Modalidad</span>
          </div>
          {m.units.map((u, i) => {
            const prac = u.u === "Prácticas";
            return (
              <div className={"sched-row" + (prac ? " prac" : "")} key={i}>
                <span className="sched-u">
                  {prac && <i className="prac-mark">↳</i>}
                  {prac ? <em>Prácticas</em> : u.u}
                </span>
                <span className="sched-d">{u.date}</span>
                <span className="sched-t">{u.time}</span>
                <span>
                  <ModeTag mode={u.mode} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ConvocatoriaPage() {
  useReveal();
  const [open, setOpen] = useState(0);
  return (
    <main>
      <PageHeader
        kicker="Convocatoria 2026 · Generación abierta"
        title={
          <>
            ¿Eres el agente de cambio
            <br />
            que tu comunidad necesita?
          </>
        }
        sub="El Proyecto Líderes del Valle invita a jóvenes de Cochabamba comprometidos con su comunidad a participar en su programa extracurricular de formación integral."
      >
        <div className="hero-actions" data-reveal style={{ "--d": "180ms" }}>
          <Link href="/postulacion" className="btn btn-primary btn-lg">
            Postula Ahora <span className="arr">→</span>
          </Link>
        </div>
      </PageHeader>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="convo-reqs">
            <div className="req" data-reveal>
              <span className="mono muted-3">01 · Edad</span>
              <strong>16 a 30 años</strong>
              <p className="text-dim">Jóvenes que residan en la ciudad de Cochabamba.</p>
            </div>
            <div className="req" data-reveal style={{ "--d": "60ms" }}>
              <span className="mono muted-3">02 · Perfil</span>
              <strong>Vocación de servicio</strong>
              <p className="text-dim">Interés en la realidad social y alto sentido de responsabilidad.</p>
            </div>
            <div className="req" data-reveal style={{ "--d": "120ms" }}>
              <span className="mono muted-3">03 · Compromiso</span>
              <strong>Asistencia activa</strong>
              <p className="text-dim">Participación estricta en los módulos, prácticas y conversatorios.</p>
            </div>
            <div className="req" data-reveal style={{ "--d": "180ms" }}>
              <span className="mono muted-3">04 · Cupos</span>
              <strong>Máximo 40</strong>
              <p className="text-dim">Plazas limitadas para asegurar la calidad pedagógica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <div className="sched-intro">
            <div>
              <span className="kicker on-cream" data-reveal>
                Cronograma oficial
              </span>
              <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 16 }}>
                Mayo — Julio 2026
              </h2>
            </div>
            <p className="lead" data-reveal style={{ "--d": "120ms", maxWidth: "34ch" }}>
              Toca cada módulo para desplegar las unidades, fechas y horarios. Las sesiones se
              realizan en sedes itinerantes confirmadas tras la inscripción.
            </p>
          </div>
          <div className="acc-list">
            {data.modules.map((m, i) => (
              <ModuleAccordion
                key={i}
                m={m}
                idx={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
          <p className="sched-note" data-reveal>
            <strong>Aclaración:</strong> el Consejo Directivo aclara que las fechas son
            referenciales. Ante caso fortuito o fuerza mayor, se procurará el avance curricular
            conforme a horarios y fechas acordadas con los participantes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="kicker" data-reveal>
            Proceso de postulación
          </span>
          <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 16, marginBottom: 48 }}>
            Tres pasos para ser admitido
          </h2>
          <div className="steps-grid">
            {data.steps.map((s, i) => (
              <div className="step" key={i} data-reveal style={{ "--d": i * 80 + "ms" }}>
                <span className="step-n">{s.n}</span>
                <h3 className="h-md">{s.t}</h3>
                <p className="text-dim">{s.d}</p>
                {i < data.steps.length - 1 && <span className="step-line" aria-hidden="true"></span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASplit />
    </main>
  );
}
