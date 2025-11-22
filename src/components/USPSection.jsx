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
    <div className="custom-shape-divider-top-usp">
        <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        >
        <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
        ></path>
        </svg>
    </div>

    <div className="usp-inner">
        <div className="section-heading">
        <h2>Why Drift Fuel?</h2>
        <p>
          Not another generic energy can. KuroNami Drift Fuel is a concept tool
          for ambitious minds who treat ideas like missions.
        </p>
      </div>
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
