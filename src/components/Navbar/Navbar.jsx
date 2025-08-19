import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Certifications", to: "certifications" },
    { name: "Coding Profiles", to: "coding-profiles" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <img
              src="/ChatGPT Image Jun 27, 2025, 10_55_54 PM.png"
              alt="Sai Ganesh Logo"
              className="logo-image"
            />
            <span className="logo-text">S.SAI GANESH</span>
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-bar ${isMenuOpen ? "open" : ""}`}></div>
        </button>

        <nav className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            <div className="theme-toggle-track">
              <div className="theme-toggle-thumb"></div>
              <div className="theme-icons">
                <span className="moon-icon">🌙</span>
                <span className="sun-icon">☀️</span>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
