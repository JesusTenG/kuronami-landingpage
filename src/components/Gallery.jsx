// src/components/Gallery.jsx
import { useEffect, useState } from "react";
import "../styles/Gallery.css";

const IMAGE_POOL = [
  "/assets/mint1.png",
  "/assets/berry1.png",
  "/assets/citrus1.png",
  "/assets/peach1.png",
  "/assets/strawberry1.png",
  "/assets/m1.png",
  "/assets/m2.png",
  "/assets/m3.png",
  "/assets/m4.png",
  "/assets/m5.png",
  "/assets/m6.png",
  "/assets/m7.png",
  "/assets/m8.png",
  "/assets/m9.png",
  "/assets/m10.png",
  "/assets/m11.png",
  "/assets/m12.png",
  "/assets/m13.png",
];

const PIECE_COUNT = 5;

export default function Gallery() {
  const [tick, setTick] = useState(0);

  // Every 10 seconds → tick++
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Panel-Nr + delay bestimmen Bildindex
  const visibleImages = Array.from({ length: PIECE_COUNT }, (_, i) => {
    const delayedTick = tick + Math.floor(i * 0.5 * 1000 / 10000); 
    return IMAGE_POOL[(delayedTick + i) % IMAGE_POOL.length];
  });

  return (
    <section id="gallery" className="gallery-section">

      <div className="gallery-hero-band">
        <div className="gallery-mosaic">

          {visibleImages.map((img, i) => (
            <div
              key={i}
              className={`mosaic-piece mosaic-piece--${i + 1}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

        </div>
      </div>

    </section>
  );
}
