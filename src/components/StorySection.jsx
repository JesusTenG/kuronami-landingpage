// src/components/StorySection.jsx
import { useState, useMemo } from "react";
import "../styles/StorySection.css";
import RotatingText from "./RotatingText";
import { flavors } from "../data/flavors"; // Pfad ggf. anpassen

export default function StorySection() {
  // 🔥 Mapping: welcher Satz gehört zu welchem Flavor?
  const flavorLines = [
    {
      flavorId: "mint",
      text: "the clean spark cutting through your day.",
    },
    {
      flavorId: "citrus",
      text: "the bright kick that pulls you forward.",
    },
    {
      flavorId: "purple",
      text: "the cool flow that keeps you moving.",
    },
    {
      flavorId: "strawberry",
      text: "the bold boost that hits you different.",
    },
    {
      flavorId: "peach",
      text: "the warm shift that lifts your mood.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Aktive Flavor-Config aus flavors[] ziehen
  const activeFlavor = useMemo(() => {
    const current = flavorLines[activeIndex];
    if (!current) return null;
    return (
      flavors.find((f) => f.id === current.flavorId) ?? null
    );
  }, [activeIndex]);

  // Inline-Styles aus hex-Config ableiten
  const pillStyle = activeFlavor
    ? {
        background: activeFlavor.hex.bg,
        borderColor: activeFlavor.hex.accent,
        boxShadow: `0 14px 40px ${activeFlavor.hex.glow}`,
        color: "#ffffff", // bei deinen Colors ist White gut lesbar
      }
    : {};

  return (
    <section id="story" className="story-section">
      <div className="custom-shape-divider-top-story">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <div className="section-inner story-inner">
        {/* Heading */}
        <div className="story-heading">
          <span className="story-tagline">Design case study</span>
          <h2 className="story-title">The Concept Behind Kuronami</h2>
          <p className="story-subtitle">
            Kuronami explores how a beverage brand can be built like a digital
            product: modular, reactive and system-driven.
          </p>
        </div>

        {/* 🔁 Flavor Rotator */}
        <div className="story-rotator-wrapper">
          <span className="story-rotator-label">Kuronami Drift Fuel is</span>

          <span
            key={activeIndex} // ⬅️ triggert auch Pill-Animation bei jedem Wechsel
            className="story-rotator-pill"
            style={pillStyle}
          >
            <RotatingText
              texts={flavorLines.map((item) => item.text)}
              interval={2600}            // ⬅️ Geschwindigkeit in ms
              onIndexChange={setActiveIndex}
            />
          </span>
        </div>

        {/* Body */}
        <div className="story-body">
          <p className="story-text">
            Kuronami connects packaging logic, motion language and UI components
            into a unified system. Every flavor defines its own accent, mood,
            and interaction rules — and these propagate across the interface.
          </p>
          <p className="story-text">
            The goal is to demonstrate how branding, system thinking and
            front-end design can merge into one modular product identity.
          </p>
        </div>

        {/* Meta */}
        <div className="story-meta">
          <div className="story-meta-item">
            <span className="story-meta-label">System</span>
            <span className="story-meta-value">Brand · UI · Motion</span>
          </div>
          <div className="story-meta-item">
            <span className="story-meta-label">Approach</span>
            <span className="story-meta-value">Modular Design</span>
          </div>
          <div className="story-meta-item">
            <span className="story-meta-label">Energy</span>
            <span className="story-meta-value">
              Mint · Citrus · Purple · Peach · Strawberry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
