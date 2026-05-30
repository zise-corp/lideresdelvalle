"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import data from "@/lib/data";
import Link from "next/link";

export default function TeamCarousel() {
  const team = data.team;
  const [active, setActive] = useState(0);
  const pauseRef = useRef(false);

  const next = useCallback(() => setActive((a) => (a + 1) % team.length), [team.length]);
  const prev = useCallback(() => setActive((a) => (a - 1 + team.length) % team.length), [team.length]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pauseRef.current) next();
    }, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div
      className="tc-stage"
      onMouseEnter={() => { pauseRef.current = true; }}
      onMouseLeave={() => { pauseRef.current = false; }}
    >
      {team.map((m, i) => (
        <div key={m.name} className={"tc-slide" + (i === active ? " tc-active" : "")}>
          <div className="tc-portrait halftone">
            {m.image
              ? <img src={m.image} alt={m.name} className="tc-img" />
              : <span className="ht-glyph">{m.glyph}</span>
            }
            <div className="tc-portrait-foot">
              <span className="tc-role">{m.role}</span>
            </div>
          </div>
          <div className="tc-body">
            <h3 className="tc-name">{m.name}</h3>
            <p className="tc-bio">{m.bio}</p>
            {m.quote && (
              <blockquote className="tc-quote serif-italic">"{m.quote}"</blockquote>
            )}
          </div>
        </div>
      ))}
      <div className="tc-controls">
        <button className="tc-btn" onClick={prev} aria-label="Anterior">←</button>
        <div className="tc-dots">
          {team.map((_, i) => (
            <button
              key={i}
              className={"tc-dot" + (i === active ? " active" : "")}
              onClick={() => setActive(i)}
              aria-label={`Ir a ${team[i].name}`}
            />
          ))}
        </div>
        <button className="tc-btn" onClick={next} aria-label="Siguiente">→</button>
      </div>
    </div>
  );
}
