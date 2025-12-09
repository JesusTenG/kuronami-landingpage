// src/components/QualitySection.jsx
import "../styles/QualitySection.css";
import { useEffect, useRef, useState } from "react";

const QUALITY_STATS = [
  { id: 1, label: "Natural ingredients", value: 100, suffix: "%" },
  { id: 2, label: "Batch-tested consistency", value: 100, suffix: "%" },
  { id: 3, label: "Traceable sourcing", value: 100, suffix: "%" },
  { id: 4, label: "ESSENTIAL VITAMINS", value: 100, suffix: "%" },
];

export default function QualitySection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(
    QUALITY_STATS.map(() => 0)
  );

  // 1) Nur Sichtbarkeit beobachten → setzt hasAnimated = true
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.8,   // 20% der Section sichtbar reicht
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

// 2) Sobald hasAnimated true → Zahlen nacheinander hochzählen
useEffect(() => {
  if (!hasAnimated) return;

  const duration = 5400;
  const frames = 100;
  const interval = duration / frames;

  let currentFrame = 0;

  const intervalId = window.setInterval(() => {
    currentFrame += 1;
    const progress = Math.min(currentFrame / frames, 1);

    const nextValues = QUALITY_STATS.map((stat, index) => {
      const delay = index * 0.15; // 150 ms Delay zwischen jedem Wert
      const delayedProgress = Math.max(progress - delay, 0);
      return Math.round(stat.value * Math.min(delayedProgress / (1 - delay), 1));
    });

    setDisplayValues(nextValues);

    if (progress >= 1.2) { // etwas größer wegen Delay
      window.clearInterval(intervalId);
    }
  }, interval);

  return () => {
    window.clearInterval(intervalId);
  };
}, [hasAnimated]);


  return (
    <section
      className="quality-section flavor-reactive"
      aria-labelledby="quality-heading"
      ref={sectionRef}
    >
      <div className="section-inner quality-inner">
        {/* LEFT: Textblock */}
        <div className="quality-copy">
          <p className="quality-kicker">Ingredient philosophy</p>
          <h2 id="quality-heading" className="quality-heading">
            Engineered for clean energy,
            <span> sourced with intention.</span>
          </h2>
          <p className="quality-body">
            Every Drift Fuel batch is crafted from carefully selected,
            naturally derived ingredients. No shortcuts, no mystery blends –
            just transparent sourcing, precise formulation and obsessive
            quality control in every can.
          </p>
          <p className="quality-body quality-body--muted">
            From the first mint leaf to the final cold can, each step is
            monitored, measured and tuned to hit our standard: clean lift,
            bold flavor, zero crash.
          </p>
        </div>

        {/* RIGHT: Animated KPIs */}
        <div className="quality-stats">
          {QUALITY_STATS.map((stat, index) => (
            <div key={stat.id} className="quality-stat">
              <div className="quality-stat-label">
                <span>{stat.label}</span>
              </div>
              <div
                className="quality-stat-value"
                aria-label={`${stat.label}: ${displayValues[index]}${stat.suffix}`}
              >
                <span className="quality-stat-number">
                  {displayValues[index]}
                </span>
                {stat.suffix && (
                  <span className="quality-stat-suffix">
                    {stat.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
