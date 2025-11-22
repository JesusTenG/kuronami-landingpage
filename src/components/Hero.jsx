import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
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
          <a href="#story" className="btn-secondary">Read the Concept</a>
        </div>
      </div>

      <div className="hero-image">
          <img
            src="/assets/kuronami-can-mint.png"
            alt="KuroNami Drift Fuel – mint concept can"
            className="hero-can-img"
          />
        </div>
    </section>
  );
}
