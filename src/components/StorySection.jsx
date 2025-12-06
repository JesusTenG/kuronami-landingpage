// src/components/StorySection.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "../styles/StorySection.css";
import RotatingText from "./RotatingText";

export default function StorySection() {
  const rotatingLines = [
    "the clean spark cutting through your day.",
    "the bright kick that pulls you forward.",
    "the neon rush for heavy late nights.",
    "the smooth slipstream for calm focus.",
    "the loud hit when you need one more lap.",
  ];

  // Aktueller Index vom RotatingText
  const [activeIndex, setActiveIndex] = useState(0);
  // Zielbreite für den lila Block
  const [pillWidth, setPillWidth] = useState(null);
  const measureRef = useRef(null);

  // Immer wenn sich der Text-Index ändert, Breite neu messen
    useEffect(() => {
      if (measureRef.current) {
        const base = measureRef.current.offsetWidth;
        const extra = base * 0.10; // +10%
        setPillWidth(base + extra);
      }
    }, [activeIndex]);

  return (
    <section id="story" className="story-section">
      {/* Top Wave */}
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
        {/* HEADING */}
        <div className="story-heading">
          <span className="story-tagline">Design case study</span>
          <h2 className="story-title">The Concept Behind Kuronami</h2>
          <p className="story-subtitle">
            Kuronami explores how a beverage brand can be built like a digital
            product: modular, reactive and system-driven.
          </p>
        </div>

        {/* ROTATING TEXT BLOCK */}
        <div className="story-rotator-wrapper">
          <span className="story-rotator-label">Kuronami Drift Fuel is</span>

          {/* Dieser Wrapper animiert die Breite smooth */}
          <motion.div
            className="story-rotator-main-outer"
            style={{ width: pillWidth || "auto" }}
            animate={{ width: pillWidth || "auto" }}
            initial={false}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <RotatingText
              texts={rotatingLines}
              mainClassName="story-rotator-main"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="story-rotator-split"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={5000}
              // <- Hier holen wir uns den aktuellen Index
              onNext={(idx) => setActiveIndex(idx)}
            />
          </motion.div>

          {/* Unsichtbarer Mess-Span, um die Breite für den aktuellen Text zu messen */}
          <span
            ref={measureRef}
            className="story-rotator-main story-rotator-main-measure"
          >
            {rotatingLines[activeIndex]}
          </span>
        </div>

        {/* BODY */}
        <div className="story-body">
          <p className="story-text">
            Kuronami connects packaging logic, motion language and UI components
            into a unified system. Every flavor defines its own accent, mood and
            interaction rules — and these propagate across the interface.
          </p>
          <p className="story-text">
            The goal is to demonstrate how branding, system thinking and
            front-end design can merge into one modular product identity.
          </p>
        </div>

        {/* META INFO */}
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
