// src/components/USPSection.jsx
import "../styles/USPSection.css";

const uspItems = [
  {
    title: "Fuel for conquerors",
    text: "KuroNami Drift Fuel is built as a concept brand for people who launch things: founders, indie hackers, artists, operators.",
    icon: "/icons/fire-fill.svg",
  },
  {
    title: "Engineered for launch nights",
    text: "High-caffeine mint profile tuned for deep work, pitch decks, product sprints and those 2 a.m. calls that actually matter.",
    icon: "/icons/lightning-fill.svg",
  },
  {
    title: "A brand you can build around",
    text: "KuroNami exists as a visual & narrative playground: perfect for mockups, landing pages, portfolios and storytelling projects.",
    icon: "/icons/windmill-fill.svg",
  },
];

export default function USPSection() {
  return (
    <section id="usp" className="usp-section">
      <div className="section-heading">
        <h2>Why Drift Fuel?</h2>
        <p>
          Not another generic energy can. KuroNami Drift Fuel is a concept tool
          for ambitious minds who treat ideas like missions.
        </p>
      </div>

      <div className="usp-grid">
        {uspItems.map((usp) => (
          <article key={usp.title} className="usp-card">
            <div className="usp-card-icon">
              {usp.icon && <img src={usp.icon} alt="" aria-hidden="true" />}
            </div>
            <div className="usp-card-content">
              <h3>{usp.title}</h3>
              <p>{usp.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
