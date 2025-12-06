import { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PARALLAX_STRENGTH = 0.65;
  const clampedScroll = Math.min(scrollY, 600);
  const translateY = clampedScroll * -PARALLAX_STRENGTH;

  return (
    <section id="hero" className="hero">
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <span className="hero-tagline">Concept energy for visionaries</span>

          <h1>KURONAMI DRIFT FUEL</h1>

          <p className="hero-subtitle">
            A mint-charged concept drink for founders, builders and creative
            conquerors who treat every late night like a launch window.
          </p>

          <div className="hero-badges">
            <span>Sweet-Taste</span>
            <span>High-Caffeine</span>
            <span>Fresh-Mint</span>
          </div>

          <div className="hero-buttons">
            <a href="#flavors" className="btn-primary">Explore Flavors</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/assets/kuronami-can-mint.png"
            alt="KuroNami Drift Fuel – mint concept can"
            className="hero-can-img"
            style={{
              transform: `translateY(${translateY}px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
