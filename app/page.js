"use client";
import Link from "next/link";
import data from "@/lib/data";
import { useReveal, Counter, MountainMark } from "@/components/ui";
import HeroCarousel from "@/components/HeroCarousel";
import TeamCarousel from "@/components/TeamCarousel";

/* Cambia a "B" para usar la portada tipográfica alternativa */
const HERO_VARIANT = "A";

function HeroA() {
  const s = data.stats;
  return (
    <section className="heroA">
      <div className="heroA-grid wrap">
        <div className="heroA-copy">
          <span className="chip chip-dot" data-reveal>
            Cochabamba, Bolivia
          </span>
          <h1 className="display" data-reveal style={{ "--d": "60ms" }}>
            Jóvenes que
            <br />
            <span className="text-accent">transforman</span>
            <br />
            su comunidad
          </h1>
          <p className="lead" data-reveal style={{ "--d": "140ms", maxWidth: "44ch" }}>
            Líderes del Valle es un proyecto educativo y de voluntariado que desarrolla
            liderazgo, democracia y participación ciudadana en los jóvenes de Cochabamba.
          </p>
          <div className="hero-actions" data-reveal style={{ "--d": "220ms" }}>
            <Link href="/postulacion" className="btn btn-primary btn-lg">
              Postula Ahora <span className="arr">→</span>
            </Link>
            <Link href="/programa" className="btn btn-ghost btn-lg">
              Conoce el Programa <span className="arr">→</span>
            </Link>
          </div>
          <div className="hero-proof" data-reveal style={{ "--d": "300ms" }}>
            <div className="avatars">
              {["SM", "AB", "FM", "AP"].map((g, i) => (
                <span key={i} className="ava" style={{ zIndex: 4 - i }}>
                  {g}
                </span>
              ))}
            </div>
            <span>
              <strong>+340 jóvenes líderes</strong>
              <br />
              <span className="muted-3">ya son parte del movimiento</span>
            </span>
          </div>
        </div>

        <div className="heroA-art" data-reveal style={{ "--d": "160ms" }}>
          <HeroCarousel className="heroA-img" />
          <div className="heroA-badge">
            <span className="mono muted-3">impacto este año</span>
            <strong>12 ciudades</strong>
          </div>
        </div>
      </div>

      <div className="hero-statbar">
        <div className="wrap hero-statbar-inner">
          {s.map((it, i) => (
            <div className="hstat" key={i}>
              <span className="statnum">
                <Counter value={it.n} />
              </span>
              <span className="hstat-l">{it.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroB() {
  const s = data.stats;
  return (
    <section className="heroB">
      <div className="heroB-bg" aria-hidden="true">
        <span className="heroB-mtn m1"></span>
        <span className="heroB-mtn m2"></span>
      </div>
      <div className="wrap heroB-inner">
        <span className="kicker" data-reveal>
          Generación 2026 · Convocatoria abierta
        </span>
        <h1 className="heroB-title" data-reveal style={{ "--d": "80ms" }}>
          Forma parte de los <span className="serif-italic text-accent">líderes</span> que cambian el Valle
        </h1>
        <div className="heroB-row" data-reveal style={{ "--d": "180ms" }}>
          <p className="lead heroB-lead">
            Un programa de formación integral en liderazgo, democracia y participación
            ciudadana para jóvenes de 16 a 30 años en Cochabamba.
          </p>
          <div className="hero-actions">
            <Link href="/postulacion" className="btn btn-primary btn-lg">
              Postula Ahora <span className="arr">→</span>
            </Link>
            <Link href="/programa" className="btn btn-ghost btn-lg">
              El Programa
            </Link>
          </div>
        </div>
      </div>
      <div className="heroB-marquee">
        <div className="marquee-track">
          {Array(2)
            .fill(0)
            .map((_, k) => (
              <span key={k} className="marquee-set">
                {s.map((it, i) => (
                  <span key={i} className="mq-item">
                    <b>{it.n}</b> {it.l}
                    <i className="mq-dot">◆</i>
                  </span>
                ))}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="section cream vis-sec" id="vision">
      <div className="wrap">
        <div className="vis-grid">
          {/* Left column */}
          <div>
            <div className="vis-kicker-row">
              <span className="kicker on-cream" data-reveal>Nuestra Visión</span>
            </div>
            <h2 className="vis-title" data-reveal style={{ "--d": "60ms" }}>
              Formamos líderes que{" "}
              <span className="vis-accent">transforman</span>{" "}
              Bolivia
            </h2>
            <div className="vis-mission-block" data-reveal style={{ "--d": "120ms" }}>
              <span className="vis-mission-label">Misión</span>
              <p className="vis-mission-text">
                Potenciar el liderazgo juvenil para la transformación democrática de Bolivia,
                brindando herramientas reales, redes de mentoría y espacios de participación
                ciudadana activa en Cochabamba y el resto del país.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div data-reveal style={{ "--d": "80ms" }}>
            <span className="vis-right-label">En qué consiste</span>
            <ol className="vis-list">
              {[
                "Formación en liderazgo, democracia y gestión de proyectos",
                "Mentorías con profesionales y expertos en ciencias políticas",
                "50 horas académicas en 3 módulos intensivos",
                "Certificación institucional y red de líderes activos",
                "Modalidad híbrida: presencial en Cochabamba, Bolivia",
              ].map((item, i) => (
                <li key={i} className="vis-item">
                  <span className="vis-item-n">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  const p = data.pillars;
  return (
    <section className="section" id="pilares">
      <div className="wrap">
        <div className="pilares-head">
          <div>
            <span className="kicker" data-reveal>
              El programa
            </span>
            <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 18 }}>
              Cuatro pilares que
              <br />
              forman líderes completos
            </h2>
          </div>
          <p className="lead" data-reveal style={{ "--d": "120ms", maxWidth: "36ch" }}>
            Combinamos formación teórica, experiencia práctica y redes de mentoría para
            potenciar tu liderazgo.
          </p>
        </div>
        <div className="pilares-grid">
          {p.map((it, i) => (
            <Link href="/programa" className="card pilar" key={i} data-reveal style={{ "--d": i * 70 + "ms" }}>
              <span className="pilar-n mono">{it.n}</span>
              <MountainMark size={30} />
              <h3 className="h-md pilar-t">{it.t}</h3>
              <p className="text-dim pilar-d">{it.d}</p>
              <span className="pilar-link">Saber más →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="section tc-sec">
      <div className="wrap">
        <div className="tc-hd">
          <div>
            <span className="kicker" data-reveal>Nuestro Equipo</span>
            <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 14 }}>
              Las personas detrás<br />del movimiento
            </h2>
          </div>
          <Link href="/equipo" className="btn btn-ghost" data-reveal style={{ "--d": "100ms" }}>
            Ver equipo completo <span className="arr">→</span>
          </Link>
        </div>
        <TeamCarousel />
      </div>
    </section>
  );
}

function GraduatesSection() {
  const featured = data.graduates.slice(0, 3);
  return (
    <section className="section" id="graduados">
      <div className="wrap">
        <div className="grad-sum-hd">
          <div>
            <span className="kicker" data-reveal>Impacto real</span>
            <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 14 }}>
              Nuestros graduados
            </h2>
          </div>
          <Link href="/graduados" className="btn btn-ghost" data-reveal style={{ "--d": "80ms" }}>
            Ver todos <span className="arr">→</span>
          </Link>
        </div>
        <div className="grad-summary">
          {featured.map((g, i) => (
            <div
              key={g.name}
              className="grad-summary-card"
              data-reveal
              style={{ "--d": i * 90 + "ms" }}
            >
              <div className="grad-sum-ava halftone">
                <span className="ht-glyph">{g.glyph}</span>
              </div>
              <div className="grad-sum-info">
                <div className="grad-sum-top">
                  <h3 className="grad-name">{g.name}</h3>
                  <span className="grad-gen">Gen. {g.gen}</span>
                </div>
                <span className="grad-role">{g.role}</span>
                <p className="grad-impact">{g.impact}</p>
              </div>
              <span className="grad-sum-arrow" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="section navy quote-sec">
      <div className="wrap center">
        <MountainMark size={40} />
        <blockquote className="quote-tx serif-italic" data-reveal>
          "Buscamos formar líderes éticos, con pensamiento crítico y capacidad de incidencia
          real en la cultura democrática de nuestra región."
        </blockquote>
        <span className="quote-by" data-reveal style={{ "--d": "100ms" }}>
          — Consejo Directivo, Líderes del Valle
        </span>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = data.testimonials;
  return (
    <section className="section cream" id="testimonios">
      <div className="wrap">
        <div className="testi-hd">
          <span className="kicker on-cream" data-reveal>Lo que dicen</span>
          <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 14 }}>
            Voces del movimiento
          </h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");
            return (
              <div
                key={i}
                className="testi-card"
                data-reveal
                style={{ "--d": (i % 2) * 80 + "ms" }}
              >
                <span className="testi-qmark" aria-hidden="true">"</span>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-ava" aria-hidden="true">{initials}</div>
                  <div>
                    <span className="testi-name">{t.name}</span>
                    <span className="testi-role">{t.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConvoCTA() {
  return (
    <section className="section cta-sec">
      <div className="wrap cta-inner">
        <div data-reveal>
          <span className="kicker">Convocatoria abierta</span>
          <h2 className="h-xl" style={{ marginTop: 16 }}>
            Tu momento
            <br />
            es ahora
          </h2>
          <p className="lead" style={{ maxWidth: "40ch", marginTop: 18 }}>
            Cupos limitados a 40 participantes. Postula a la Generación 2026 y comienza tu
            formación como líder del Valle.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link href="/postulacion" className="btn btn-primary btn-lg">
              Postula Ahora <span className="arr">→</span>
            </Link>
            <Link href="/convocatoria" className="btn btn-ghost btn-lg">
              Ver cronograma
            </Link>
          </div>
        </div>
        <div className="cta-card" data-reveal style={{ "--d": "120ms" }}>
          <div className="cta-card-row">
            <span className="mono muted-3">Modalidad</span>
            <span>Híbrido · 70% presencial</span>
          </div>
          <div className="cta-card-row">
            <span className="mono muted-3">Duración</span>
            <span>50 horas académicas</span>
          </div>
          <div className="cta-card-row">
            <span className="mono muted-3">Edad</span>
            <span>16 a 30 años</span>
          </div>
          <div className="cta-card-row">
            <span className="mono muted-3">Sede</span>
            <span>Cochabamba, Bolivia</span>
          </div>
          <div className="cta-card-row">
            <span className="mono muted-3">Cierre</span>
            <span className="text-accent">Cupos limitados</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useReveal();
  return (
    <main>
      {HERO_VARIANT === "B" ? <HeroB /> : <HeroA />}
      <VisionSection />
      <Pilares />
      <TeamSection />
      <GraduatesSection />
      <Quote />
      <TestimonialsSection />
      <ConvoCTA />
    </main>
  );
}
