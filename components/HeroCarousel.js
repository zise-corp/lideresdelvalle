"use client";
import { useState, useEffect, useRef } from "react";

const IMAGES = [
  "/images/team1.png",
  "/images/team2.png",
];

export default function HeroCarousel({ className }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const duration = 5500; // 5.5s slide duration
  const tickRate = 50; // Update progress bar every 50ms

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % IMAGES.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    setProgress(0);
  };

  // Main autoplay timer
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, duration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, activeIdx]);

  // Progress bar updater
  useEffect(() => {
    if (isHovered) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const steps = duration / tickRate;
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / steps);
      });
    }, tickRate);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isHovered, activeIdx]);

  const handleDotClick = (idx) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  return (
    <div
      className={`hero-carousel ${className || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="carousel-track">
        {IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`carousel-slide ${idx === activeIdx ? "active" : ""}`}
            style={{
              backgroundImage: `url(${img})`,
              zIndex: idx === activeIdx ? 2 : 1,
            }}
            aria-hidden={idx !== activeIdx}
          />
        ))}
      </div>

      {/* Overlay Halftone Effect for texture continuity */}
      <div className="carousel-overlay" />

      {/* Progress Bar */}
      <div className="carousel-progress-bar">
        <div
          className="carousel-progress-line"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="carousel-nav-btn prev"
        aria-label="Imagen anterior"
      >
        <span className="arrow">←</span>
      </button>
      <button
        onClick={nextSlide}
        className="carousel-nav-btn next"
        aria-label="Siguiente imagen"
      >
        <span className="arrow">→</span>
      </button>

      {/* Indicators Dots */}
      <div className="carousel-dots">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`carousel-dot ${idx === activeIdx ? "active" : ""}`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
