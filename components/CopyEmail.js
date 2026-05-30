"use client";
import { useState } from "react";

export default function CopyEmail({ email, className = "", children }) {
  const [copied, setCopied] = useState(false);

  function handle(e) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <button
      type="button"
      onClick={handle}
      className={`copy-email-btn${copied ? " copied" : ""}${className ? " " + className : ""}`}
      title={copied ? "¡Copiado!" : "Clic para copiar"}
    >
      {copied ? "✓ ¡Copiado!" : (children || email)}
    </button>
  );
}
