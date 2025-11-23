// src/components/Gallery.jsx
import "../styles/Gallery.css";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">

      {/* Wellen – immer außerhalb */}
      <div className="custom-shape-divider-top-usp2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill2"
          ></path>
        </svg>
      </div>

      <div className="section-inner">
        <div className="gallery-header">
          <h2 className="gallery-title">
            Concept <span>Visuals</span>
          </h2>
          <p className="gallery-subtitle">
            Early product mockups, campaign frames and mood visuals
            for the Kuronami launch.
          </p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-item">
            <img src="/assets/mint1.png" alt="Concept A" />
          </div>

          <div className="gallery-item">
            <img src="/assets/citrus1.png" alt="Concept B" />
          </div>

          <div className="gallery-item">
            <img src="/assets/berry1.png" alt="Concept C" />
          </div>

          <div className="gallery-item">
            <img src="/assets/peach1.png" alt="Concept D" />
          </div>

          <div className="gallery-item">
            <img src="/assets/strawberry1 .png" alt="Concept E" />
          </div>
        </div>
      </div>

    </section>
  );
}
