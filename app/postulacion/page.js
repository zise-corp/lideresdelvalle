"use client";
import { useState } from "react";
import Link from "next/link";
import data from "@/lib/data";
import { useReveal, PageHeader } from "@/components/ui";
import CopyEmail from "@/components/CopyEmail";

function Field({ label, name, value, onChange, error, type = "text", placeholder, ...rest }) {
  return (
    <label className={"field" + (error ? " field-err" : "")}>
      <span className="field-label">{label}</span>
      <input
        className="field-input"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <span className="field-msg">{error}</span>}
    </label>
  );
}

export default function PostulacionPage() {
  useReveal();
  const [f, setF] = useState({
    nombre: "",
    email: "",
    tel: "",
    edad: "",
    zona: "",
    modulo: "",
    motivacion: "",
    acepta: false,
  });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);

  const set = (e) => {
    const { name, value, type, checked } = e.target;
    setF((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    setErrs((p) => ({ ...p, [name]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (f.nombre.trim().length < 3) e.nombre = "Ingresa tu nombre completo.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = "Correo electrónico no válido.";
    if (f.tel.replace(/\D/g, "").length < 7) e.tel = "Ingresa un teléfono válido.";
    const edad = parseInt(f.edad, 10);
    if (!edad || edad < 16 || edad > 30) e.edad = "La edad debe estar entre 16 y 30 años.";
    if (!f.zona.trim()) e.zona = "Indica tu zona o barrio.";
    if (f.motivacion.trim().length < 30) e.motivacion = "Cuéntanos un poco más (mín. 30 caracteres).";
    if (!f.acepta) e.acepta = "Debes aceptar el compromiso de participación.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const first = document.querySelector(".field-err .field-input");
      if (first) first.focus();
    }
  };

  if (sent) {
    return (
      <main>
        <section className="section postul-done">
          <div className="wrap center">
            <span className="done-check" aria-hidden="true">
              ✓
            </span>
            <h1 className="h-xl" style={{ marginTop: 24 }}>
              ¡Postulación recibida!
            </h1>
            <p className="lead" style={{ margin: "16px auto 8px", maxWidth: "46ch" }}>
              Gracias, <strong>{f.nombre.split(" ")[0]}</strong>. Hemos registrado tu interés en
              la Generación 2026 de Líderes del Valle.
            </p>
            <p className="text-dim" style={{ maxWidth: "46ch", margin: "0 auto 32px" }}>
              Si tu perfil avanza, te contactaremos a{" "}
              <strong className="text-accent">{f.email}</strong> para la entrevista personal.
              Revisa tu correo en los próximos días.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/convocatoria" className="btn btn-primary btn-lg">
                Ver cronograma <span className="arr">→</span>
              </Link>
              <Link href="/" className="btn btn-ghost btn-lg">
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        kicker="Postulación · Generación 2026"
        title={
          <>
            Da el primer paso
            <br />
            hacia tu liderazgo
          </>
        }
        sub="Completa el formulario de inscripción. Los candidatos seleccionados serán contactados para una entrevista personal y, posteriormente, recibirán su carta de admisión."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap postul-grid">
          <form className="postul-form" onSubmit={submit} noValidate>
            <div className="form-row-2">
              <Field label="Nombre completo *" name="nombre" value={f.nombre} onChange={set} error={errs.nombre} placeholder="Ej. María Fernanda Rojas" />
              <Field label="Edad *" name="edad" type="number" value={f.edad} onChange={set} error={errs.edad} placeholder="16–30" min="16" max="30" />
            </div>
            <div className="form-row-2">
              <Field label="Correo electrónico *" name="email" type="email" value={f.email} onChange={set} error={errs.email} placeholder="tucorreo@gmail.com" />
              <Field label="Teléfono / WhatsApp *" name="tel" value={f.tel} onChange={set} error={errs.tel} placeholder="+591 7XXXXXXX" />
            </div>
            <Field label="Zona o barrio en Cochabamba *" name="zona" value={f.zona} onChange={set} error={errs.zona} placeholder="Ej. Cala Cala, Sarco, Sacaba…" />

            <label className="field">
              <span className="field-label">¿Qué módulo te interesa más?</span>
              <select className="field-input" name="modulo" value={f.modulo} onChange={set}>
                <option value="">Selecciona (opcional)</option>
                {data.modules.map((m) => (
                  <option key={m.n} value={m.title}>
                    Módulo {m.n} — {m.title}
                  </option>
                ))}
                <option value="Todos">Los tres módulos</option>
              </select>
            </label>

            <label className={"field" + (errs.motivacion ? " field-err" : "")}>
              <span className="field-label">¿Por qué quieres ser parte de Líderes del Valle? *</span>
              <textarea
                className="field-input"
                name="motivacion"
                rows="5"
                value={f.motivacion}
                onChange={set}
                placeholder="Cuéntanos sobre tu vocación de servicio y qué cambio quieres generar en tu comunidad…"
              ></textarea>
              <span className="field-count mono">{f.motivacion.trim().length}/30 mín.</span>
              {errs.motivacion && <span className="field-msg">{errs.motivacion}</span>}
            </label>

            <label className={"checkfield" + (errs.acepta ? " field-err" : "")}>
              <input type="checkbox" name="acepta" checked={f.acepta} onChange={set} />
              <span>
                Me comprometo con la asistencia y participación activa en los módulos, prácticas y
                conversatorios del programa.
              </span>
            </label>
            {errs.acepta && (
              <span className="field-msg" style={{ marginTop: -8 }}>
                {errs.acepta}
              </span>
            )}

            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 8 }}>
              Enviar postulación <span className="arr">→</span>
            </button>
            <p className="muted-3" style={{ fontSize: "0.82rem", marginTop: 4 }}>
              * Campos obligatorios. Tus datos se usan únicamente para el proceso de admisión.
            </p>
          </form>

          <aside className="postul-aside" data-reveal style={{ "--d": "120ms" }}>
            <div className="aside-card">
              <h4 className="aside-h">El proceso</h4>
              {data.steps.map((s, i) => (
                <div className="aside-step" key={i}>
                  <span className="aside-step-n">{s.n}</span>
                  <div>
                    <strong>{s.t}</strong>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="aside-card aside-info">
              <h4 className="aside-h">Datos clave</h4>
              <div className="aside-row">
                <span className="muted-3">Edad</span>
                <span>16 a 30 años</span>
              </div>
              <div className="aside-row">
                <span className="muted-3">Cupos</span>
                <span>Máximo 40</span>
              </div>
              <div className="aside-row">
                <span className="muted-3">Modalidad</span>
                <span>Híbrido</span>
              </div>
              <div className="aside-row">
                <span className="muted-3">Sede</span>
                <span>Cochabamba</span>
              </div>
            </div>
            <p className="aside-help">
              ¿Dudas? Escríbenos a{" "}
              <CopyEmail email={data.contact.email} className="text-accent" />
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
