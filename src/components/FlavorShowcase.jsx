import "../styles/FlavorShowcase.css";

import { flavors } from "../data/flavors";
import { useState, useEffect } from "react";

export default function FlavorShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFlavor = flavors[activeIndex];

  useEffect(() => {
    if (!activeFlavor) return;
    const root = document.documentElement;
    root.style.setProperty("--flavor-bg", activeFlavor.hex.bg);
    root.style.setProperty("--flavor-accent", activeFlavor.hex.accent);
    root.style.setProperty("--flavor-glow", activeFlavor.hex.glow);
  }, [activeFlavor]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % flavors.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? flavors.length - 1 : prev - 1
    );
  };

  return (
    <section id="flavors" className="flavor-section">
      <h2>Choose your Drift Flavor</h2>
      <p className="flavor-subtitle">
        Swipe through each flavor and watch the atmosphere adapt.
      </p>

      <div className="flavor-slider">
        <button className="flavor-nav flavor-prev" onClick={handlePrev}>
          ‹
        </button>

        <div className="flavor-stack">
          {flavors.map((flavor, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={flavor.id}
                className={`flavor-card ${
                  isActive ? "flavor-card--active" : "flavor-card--inactive"
                }`}
              >
                <h3>{flavor.name}</h3>
                <span className="flavor-sub">{flavor.subtitle}</span>
                <p>{flavor.description}</p>
              </div>
            );
          })}
        </div>

        <button className="flavor-nav flavor-next" onClick={handleNext}>
          ›
        </button>
      </div>
    </section>
  );
}
