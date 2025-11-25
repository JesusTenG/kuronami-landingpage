// src/components/Gallery.jsx
import { useEffect, useState } from "react";
import "../styles/Gallery.css";

const FLAVOR_SETS = [
  {
    id: "mint",
    images: [
      "/assets/mint1.png",
      "/assets/mint2.png",
      "/assets/mint3.png",
      "/assets/mint4.png",
      "/assets/mint5.png",
    ],
  },
  {
    id: "citrus",
    images: [
      "/assets/citrus1.png",
      "/assets/citrus2.png",
      "/assets/citrus3.png",
      "/assets/citrus4.png",
      "/assets/citrus5.png",
    ],
  },
  {
    id: "peach",
    images: [
      "/assets/peach1.png",
      "/assets/peach2.png",
      "/assets/peach3.png",
      "/assets/peach4.png",
      "/assets/peach5.png",
    ],
  },
  {
    id: "strawberry",
    images: [
      "/assets/strawberry1.png",
      "/assets/strawberry2.png",
      "/assets/strawberry3.png",
      "/assets/strawberry4.png",
      "/assets/strawberry5.png",
    ],
  },
  {
    id: "berry",
    images: [
      "/assets/berry1.png",
      "/assets/berry2.png",
      "/assets/berry3.png",
      "/assets/berry4.png",
      "/assets/berry5.png",
    ],
  },
];

const PIECE_COUNT = 5;
const SWITCH_INTERVAL = 10000; // 10s
const STAGGER_DELAY = 200;     // ms between each panel update


export default function Gallery() {
  const [flavorIndex, setFlavorIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(
    FLAVOR_SETS[0].images
  );

  // Cycle flavor every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setFlavorIndex((prev) => (prev + 1) % FLAVOR_SETS.length);
    }, SWITCH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

 useEffect(() => {
  const nextImages = FLAVOR_SETS[flavorIndex].images;
  const timeouts = [];

  for (let i = 0; i < PIECE_COUNT; i++) {
    // 1. OUT animation first
    timeouts.push(
      setTimeout(() => {
        // Panel bekommt 'out'
        const piece = document.querySelector(
          `.mosaic-piece--${i + 1}`
        );
        if (piece) piece.classList.add("mosaic-piece--out");

        // 2. wait for fade-out duration (0.8s) → swap image
        setTimeout(() => {
          setVisibleImages((prev) => {
            const clone = [...prev];
            clone[i] = nextImages[i];
            return clone;
          });

          // remove OUT after swap (so next cycle works clean)
          if (piece) piece.classList.remove("mosaic-piece--out");
        }, 800);
      }, i * STAGGER_DELAY)
    );
  }

  return () => {
    timeouts.forEach(clearTimeout);
  };
}, [flavorIndex]);


  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-hero-band">
        <div className="gallery-mosaic">
              {visibleImages.map((img, i) => (
            <div
              key={`${i}-${img}`}
              className={`mosaic-piece mosaic-piece--${i + 1}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
