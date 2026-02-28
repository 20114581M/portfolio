const footerLinks = [
  { label: "Home",       target: "home" },
  { label: "About",      target: "about" },
  { label: "Graphics",   target: "graphics" },
  { label: "Dev",        target: "dev" },
  { label: "Experience", target: "experience" },
  { label: "Tools",      target: "tools" },
  { label: "Contact",    target: "contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582378152401",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dsaleiri/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:servicesjmseptember@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+639352541057",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        /* ── Top glow line ── */
        .footer-glow-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,200,80,0.35) 30%,
            rgba(255,200,80,0.6) 50%,
            rgba(255,200,80,0.35) 70%,
            transparent 100%
          );
        }

        /* ── Main footer body ── */
        .footer-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: 3.5rem 33px 2rem;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        @media (max-width: 760px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer-body {
            grid-template-columns: 1fr;
          }
        }

        /* ── Brand column ── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-logo-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.08em;
          color: #fff;
          line-height: 1;
        }

        .footer-logo-name span {
          color: #ffc850;
        }

        .footer-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .footer-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.8;
          font-weight: 300;
          max-width: 260px;
          margin-top: 0.25rem;
        }

        /* Social icons row */
        .footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 2px;
          border: 1px solid rgba(255,200,80,0.15);
          background: rgba(255,255,255,0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: all 0.22s ease;
          flex-shrink: 0;
        }

        .footer-social-btn:hover {
          border-color: #ffc850;
          color: #ffc850;
          background: rgba(255,200,80,0.07);
          transform: translateY(-2px);
        }

        /* ── Nav column ── */
        .footer-col-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #ffc850;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .footer-col-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,200,80,0.15);
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          text-align: left;
          padding: 0;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-nav-btn::before {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: #ffc850;
          transition: width 0.2s ease;
          flex-shrink: 0;
        }

        .footer-nav-btn:hover {
          color: #ffc850;
          transform: translateX(4px);
        }

        .footer-nav-btn:hover::before {
          width: 12px;
        }

        /* ── Contact column ── */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .footer-contact-key {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .footer-contact-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          text-decoration: none;
          transition: color 0.2s;
          word-break: break-all;
        }

        a.footer-contact-val:hover {
          color: #ffc850;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          max-width: 997px;
          margin: 0 auto;
          padding: 1.25rem 33px 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.05);
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-copy {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .footer-made {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-made span {
          color: #ffc850;
          font-size: 0.75rem;
        }

        /* ── Decorative bg glow ── */
        .footer-bg-glow {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 200px;
          background: radial-gradient(ellipse at bottom, rgba(255,200,80,0.045) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <div className="footer-bg-glow" />

      {/* Top accent line */}
      <div className="footer-glow-line" />

      {/* Main grid */}
      <div className="footer-body">

        {/* ── Brand ── */}
        <div className="footer-brand">
          <div>
            <div className="footer-logo-name">
              Marlon <span>Ampoon</span>
            </div>
            <div className="footer-tagline">Web Dev · Graphic Artist · UI Designer</div>
          </div>
          <p className="footer-desc">
            Crafting digital experiences where clean code meets striking visual design.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="footer-social-btn"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div>
          <p className="footer-col-title">Navigation</p>
          <ul className="footer-nav-list">
            {footerLinks.map((item) => (
              <li key={item.target}>
                <button
                  className="footer-nav-btn"
                  onClick={() => scrollTo(item.target)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <p className="footer-col-title">Contact</p>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <span className="footer-contact-key">Email</span>
              <a href="mailto:servicesjmseptember@gmail.com" className="footer-contact-val">
                servicesjmseptember@gmail.com
              </a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-key">Phone</span>
              <a href="tel:+639352541057" className="footer-contact-val">
                +63 935 254 1057
              </a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-key">Facebook</span>
              <a
                href="https://www.facebook.com/profile.php?id=61582378152401"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-val"
              >
                Marlon Ampoon
              </a>
            </li>
            <li className="footer-contact-item">
              <span className="footer-contact-key">Instagram</span>
              <a
                href="https://www.instagram.com/dsaleiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-val"
              >
                @dsaleiri
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Marlon Ampoon · All Rights Reserved
        </span>
        <span className="footer-made">
          Made with <span>♥</span> in the Philippines
        </span>
      </div>
    </footer>
  );
}