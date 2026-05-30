"use client";
import { useState } from "react";
import Link from "next/link";
import data from "@/lib/data";
import { useReveal, MountainMark, PageHeader } from "@/components/ui";
import CopyEmail from "@/components/CopyEmail";

const wa = (p) => `https://wa.me/${p.replace(/\D/g, "")}`;
const waDir = (cel) => `https://wa.me/591${cel}`;

function EmailCard({ email, ...props }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <button
      type="button"
      className={`cto-method cto-method-cta${copied ? " cto-method-copied" : ""}`}
      onClick={handleCopy}
      {...props}
    >
      <span className="cto-method-label">Correo electrónico</span>
      <p className="cto-method-value">{email}</p>
      <span className="cto-action-row">
        {copied
          ? <>✓ ¡Copiado al portapapeles!</>
          : <>Copiar correo <span className="arr">→</span></>}
      </span>
    </button>
  );
}

export default function ContactoPage() {
  useReveal();
  const c = data.contact;

  return (
    <main>
      <PageHeader
        kicker="Contacto"
        title={
          <>
            Hablemos de
            <br />
            liderazgo
          </>
        }
        sub="¿Tienes preguntas sobre la convocatoria, quieres ser aliado o aportar como mentor? Estamos en Cochabamba y respondemos con gusto."
      />

      {/* ── Métodos de contacto ── */}
      <section className="section cto-methods-sec">
        <div className="wrap">
          <div className="cto-methods">

            <div className="cto-method" data-reveal>
              <span className="cto-method-label">Ubicación</span>
              <p className="cto-method-value">{c.city}</p>
              <p className="cto-method-note">
                Sesiones en sedes itinerantes confirmadas tras la inscripción.
              </p>
            </div>

            <EmailCard
              email={c.email}
              data-reveal
              style={{ "--d": "90ms" }}
            />

            <div className="cto-method" data-reveal style={{ "--d": "180ms" }}>
              <span className="cto-method-label">WhatsApp / Teléfonos</span>
              <div className="cto-phone-list">
                {c.phones.map((p) => (
                  <a
                    key={p}
                    href={wa(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cto-method-value cto-phone-link"
                  >
                    {p}
                  </a>
                ))}
              </div>
              <span className="cto-action-row">
                Abrir WhatsApp <span className="arr">→</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── Directores ── */}
      <section className="section cto-dir-sec">
        <div className="wrap">
          <div className="cto-dir-header">
            <div>
              <span className="kicker" data-reveal>Consejo Directivo</span>
              <h2 className="h-xl" data-reveal style={{ "--d": "60ms", marginTop: 14 }}>
                Contáctanos
                <br />
                directamente
              </h2>
            </div>
            <p
              className="lead"
              data-reveal
              style={{ "--d": "120ms", maxWidth: "38ch" }}
            >
              Nuestros directores están disponibles para resolver consultas,
              explorar alianzas o dar la bienvenida a nuevos mentores.
            </p>
          </div>

          <div className="cto-dir-grid">
            {c.directors.map((d, i) => {
              const isSergio = d.name.includes("Sergio");
              const isAndres = d.name.includes("Andrés");
              const imgUrl = isSergio
                ? "/integrantes/sergio.png"
                : isAndres
                ? "/integrantes/andres.png"
                : null;
              const initials = d.name
                .split(" ")
                .filter((w) => w.length > 2)
                .slice(0, 2)
                .map((w) => w[0])
                .join("");
              return (
                <div
                  className="cto-dir-card"
                  key={i}
                  data-reveal
                  style={{ "--d": i * 100 + "ms" }}
                >
                  <div className="cto-dir-ava halftone">
                    {imgUrl ? (
                      <img src={imgUrl} alt={d.name} className="cto-dir-img" />
                    ) : (
                      <span className="ht-glyph" style={{ fontSize: "2rem" }}>
                        {initials}
                      </span>
                    )}
                  </div>
                  <div className="cto-dir-info">
                    <span className="cto-dir-role">{d.role}</span>
                    <h3 className="cto-dir-name">{d.name}</h3>
                    <div className="cto-dir-links">
                      <a
                        href={waDir(d.cel)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cto-dir-link"
                      >
                        <span className="cto-dir-link-label mono">WhatsApp</span>
                        {d.cel}
                      </a>
                      <CopyEmail
                        email={c.email}
                        className="cto-dir-link"
                      >
                        <span className="cto-dir-link-label mono">Email</span>
                        {c.email}
                      </CopyEmail>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quote + CTA ── */}
      <section className="section cto-quote-sec">
        <div className="wrap center">
          <div data-reveal>
            <MountainMark size={36} />
          </div>
          <blockquote
            className="quote-tx serif-italic"
            data-reveal
            style={{ "--d": "60ms" }}
          >
            "Ningún miedo es más grande que un sueño."
          </blockquote>
          <span className="quote-by" data-reveal style={{ "--d": "120ms" }}>
            — Líderes del Valle
          </span>
          <div
            className="hero-actions"
            data-reveal
            style={{ "--d": "180ms", justifyContent: "center", marginTop: 36 }}
          >
            <Link href="/postulacion" className="btn btn-primary btn-lg">
              Postula a la convocatoria <span className="arr">→</span>
            </Link>
            <Link href="/convocatoria" className="btn btn-ghost btn-lg">
              Ver cronograma
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
