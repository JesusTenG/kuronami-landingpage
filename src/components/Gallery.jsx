import "../styles/Gallery.css";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Concept Visuals</h2>
      <p className="gallery-subtitle">
        Product mockups, campaign ideas and mood visuals for Kuronami.
      </p>
      <div className="gallery-grid">
        <div className="gallery-item placeholder">Rainy street shot</div>
        <div className="gallery-item placeholder">Fridge full of cans</div>
        <div className="gallery-item placeholder">Hand-held can close-up</div>
        <div className="gallery-item placeholder">Studio hero shot</div>
      </div>
    </section>
  );
}
