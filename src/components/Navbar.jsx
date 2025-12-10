// src/components/Navbar.jsx
import "../styles/Navbar.css";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#usp", label: "Benefits" },
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

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${
        isOpen ? "navbar--open" : ""
      }`.trim()}
    >
      {/* Glas-Pill */}
      <div className="navbar-shell">
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo" onClick={handleNavClick}>
            <span className="navbar-logo-main">KURONAMI</span>
            <span className="navbar-logo-sub">Drift Fuel</span>
          </a>

          {/* Desktop-Links in der Pill */}
          <nav
            className="navbar-links navbar-links-desktop"
            aria-label="Main navigation"
          >
            {navLinks.map(link => (
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

          {/* Burger – nur auf Mobile sichtbar */}
          <button
            className={`navbar-toggle ${
              isOpen ? "navbar-toggle--open" : ""
            }`.trim()}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>

        {/* Mobile-Dropdown – jetzt IMMER innerhalb der Shell */}
        <nav
          className={`navbar-links navbar-links-mobile ${
            isOpen ? "navbar-links-mobile--open" : ""
          }`.trim()}
          aria-label="Mobile navigation"
        >
          {navLinks.map(link => (
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
