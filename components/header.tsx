import { useState, useEffect } from "react";
import image from '../src/assets/heroimage/Gemini_Generated_Image_n8fs5qn8fs5qn8fs-Photoroom.png';
const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Graphics", target: "graphics" },
  { label: "Dev", target: "dev" },
  { label: "Experience", target: "experience" },
  { label: "Tools", target: "tools" },
  { label: "Contact", target: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.target);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(item.target);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 0 2rem;
          font-family: 'DM Sans', sans-serif;
        }

        .header.scrolled {
          background: rgba(8, 8, 12, 0.94);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 200, 80, 0.12);
          box-shadow: 0 4px 40px rgba(0,0,0,0.6);
        }

        .header-inner {
          max-width: 1300px;
          margin: 0 auto;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        /* ── Logo with avatar ── */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .avatar-ring {
          width: 42px; height: 42px;
          border-radius: 50%;
          padding: 2px;
          background: linear-gradient(135deg, #ffc850, #ff8c00);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .logo:hover .avatar-ring { transform: scale(1.08); }

        .avatar-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a22;
        }

        .avatar-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-align: left;
        }

        .logo-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.08em;
          color: #fff;
          transition: color 0.2s;
        }

        .logo:hover .logo-name { color: #ffc850; }

        .logo-tagline {
          font-size: 0.58rem;
          font-weight: 300;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ffc850;
          margin-top: 3px;
        }

        /* ── Desktop Nav ── */
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .nav-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.45rem 0.7rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
          white-space: nowrap;
        }

        .nav-btn::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px;
          background: #ffc850;
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-btn:hover { color: #fff; }
        .nav-btn:hover::after { width: 60%; }
        .nav-btn.active { color: #ffc850; }
        .nav-btn.active::after { width: 60%; }

        .cta-btn {
          margin-left: 0.75rem;
          padding: 0.5rem 1.1rem;
          background: #ffc850;
          color: #08080c;
          border: none;
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .cta-btn:hover {
          background: #fff;
          transform: translateY(-1px);
        }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1100;
          flex-shrink: 0;
        }

        .hamburger span {
          display: block;
          width: 26px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          background: #ffc850;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          background: #ffc850;
        }

        /* ── Mobile full-screen menu ── */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #08080c;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          z-index: 1050;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-avatar {
          width: 72px; height: 72px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #ffc850, #ff8c00);
          margin-bottom: 1.5rem;
        }

        .mobile-avatar-inner {
          width: 100%; height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #1a1a22;
        }

        .mobile-avatar-inner img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .mobile-nav-btn {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.6rem;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.18);
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s, transform 0.2s;
          line-height: 1.2;
        }

        .mobile-nav-btn:hover,
        .mobile-nav-btn.active {
          color: #ffc850;
          transform: translateX(8px);
        }

        .mobile-divider {
          width: 60px; height: 1px;
          background: rgba(255,200,80,0.3);
          margin: 1rem 0;
        }

        .mobile-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        /* ── Breakpoints ── */
        @media (max-width: 1060px) {
          .nav-btn { padding: 0.45rem 0.5rem; font-size: 0.65rem; }
        }

        @media (max-width: 860px) {
          .nav-desktop { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo + Avatar */}
          <button className="logo" onClick={() => scrollTo("home")}>
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img
                  src= {image}
                  alt="Marlon Ampoon"
                />
              </div>
            </div>
            <div className="logo-text">
              <span className="logo-name">Marlon Ampoon</span>
              <span className="logo-tagline">Web Dev · Graphic Artist</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.target}
                className={`nav-btn${active === item.target ? " active" : ""}`}
                onClick={() => scrollTo(item.target)}
              >
                {item.label}
              </button>
            ))}
            <button className="cta-btn" onClick={() => scrollTo("contact")}>
              Hire Me
            </button>
          </nav>

          {/* Hamburger button */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="mobile-avatar">
          <div className="mobile-avatar-inner">
            <img
              src={image}
              alt="Marlon Ampoon"
            />
          </div>
        </div>

        {navItems.map((item) => (
          <button
            key={item.target}
            className={`mobile-nav-btn${active === item.target ? " active" : ""}`}
            onClick={() => scrollTo(item.target)}
          >
            {item.label}
          </button>
        ))}

        <div className="mobile-divider" />
        <span className="mobile-tagline">Web Dev · Graphic Artist</span>
      </div>
    </>
  );
}