// src/components/Navbar.jsx
import "../styles/Navbar.css";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#usp", label: "Why Drift Fuel" },
  { href: "#flavors", label: "Flavors" },
  { href: "#gallery", label: "Gallery" },
  { href: "#story", label: "Story" },
  { href: "#cta", label: "Concept" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        isOpen ? "navbar--open" : ""
      }`.trim()}
    >
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={handleNavClick}>
          <span className="navbar-logo-main">KURONAMI</span>
          <span className="navbar-logo-sub">Drift Fuel</span>
        </a>

        <button
          className={`navbar-toggle ${
            isOpen ? "navbar-toggle--open" : ""
          }`.trim()}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav
          className={`navbar-links ${
            isOpen ? "navbar-links--open" : ""
          }`.trim()}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
