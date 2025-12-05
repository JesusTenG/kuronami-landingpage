// src/components/RotatingText.jsx
import { useEffect, useState } from "react";
import "../styles/RotatingText.css";

export default function RotatingText({
  texts = [],
  interval = 22600,        // ⬅️ HIER: Zeit bis zum nächsten Text (in ms)
  onIndexChange,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts.length) return;

    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % texts.length;
        if (onIndexChange) onIndexChange(next); // ⬅️ meldet nach außen, welcher Index aktiv ist
        return next;
      });
    }, interval);

    return () => clearInterval(id);
  }, [texts, interval, onIndexChange]);

  const currentText = texts[index] ?? "";

  return (
    <span className={className}>
      {/* key=index → triggert CSS-Animation jedes Mal beim Wechsel */}
      <span key={index} className="rotator-text">
        {currentText}
      </span>
    </span>
  );
}
