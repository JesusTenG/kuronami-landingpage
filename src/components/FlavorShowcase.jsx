// src/components/FlavorShowcase.jsx
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

  const getPositionClass = (index) => {
    const lastIndex = flavors.length - 1;

    if (index === activeIndex) return "flavor-card--active";

    // previous
    if (
      index === activeIndex - 1 ||
      (activeIndex === 0 && index === lastIndex)
    ) {
      return "flavor-card--prev";
    }

    // next
    if (
      index === activeIndex + 1 ||
      (activeIndex === lastIndex && index === 0)
    ) {
      return "flavor-card--next";
    }

    return "flavor-card--hidden";
  };

  return (
    <section id="flavors" className="flavor-section">
      <div className="section-inner flavor-inner">
        <h2>Choose your Drift Flavor</h2>
        <p className="flavor-subtitle">
          Swipe through each flavor and watch the atmosphere adapt.
        </p>

        <div className="flavor-slider">
          <div className="flavor-stack">
            <button className="flavor-nav flavor-prev" onClick={handlePrev}>
              <img src="/icons/leftarrow.svg" alt="Previous flavor" />
            </button>

            {flavors.map((flavor, index) => {
              const positionClass = getPositionClass(index);

              return (
                <article
                  key={flavor.id}
                  className={`flavor-card ${positionClass}`}
                >
                  <div className="flavor-card-inner">
                    <div className="flavor-card-text">
                      <h3>{flavor.name}</h3>
                      <span className="flavor-sub">{flavor.subtitle}</span>
                      <p>{flavor.description}</p>

                      {flavor.facts && flavor.facts.length > 0 && (
                        <ul className="flavor-facts">
                          {flavor.facts.map((fact, i) => (
                            <li key={i}>{fact}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {flavor.image && (
                      <div className="flavor-card-media">
                        <img
                          src={flavor.image}
                          alt={flavor.name}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            <button className="flavor-nav flavor-next" onClick={handleNext}>
              <img src="/icons/rightarrow.svg" alt="Next flavor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
