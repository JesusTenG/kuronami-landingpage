import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-tagline">High-caffeine mint energy</span>
        <h1>KURONAMI DRIFT FUEL</h1>
        <p className="hero-subtitle">
          High-caffeine mint blend inspired by Japanese street racing culture.
          Built for late-night coding sessions, LAN parties and neon-soaked
          city runs.
        </p>

        <div className="hero-badges">
          <span>Zero Sugar</span>
          <span>Ultra Mint</span>
          <span>Night Drift Ready</span>
        </div>

        <div className="hero-buttons">
          <a href="#flavors" className="btn-primary">
            Explore Flavors
          </a>
          <a href="#story" className="btn-secondary">
            Brand Story
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-can-placeholder">
          <span>Mint Can</span>
        </div>
      </div>
    </section>
  );
}
