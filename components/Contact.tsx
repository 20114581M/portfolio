import { useState } from "react";

const socials = [
  {
    label: "Facebook",
    handle: "Marlon Ampoon",
    href: "https://www.facebook.com/profile.php?id=61582378152401",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@dsaleiri",
    href: "https://www.instagram.com/dsaleiri/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("servicesjmseptember@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); opacity: 0.6; }
          70%  { transform: scale(1.08); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes float-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .contact-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 997px;
          margin: 0 auto;
          padding: 6rem 33px;
          gap: 5rem;
          align-items: center;
          animation: float-up 0.8s ease both;
        }

        @media (max-width: 740px) {
          .contact-section {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            padding: 4rem 24px;
          }
          .contact-right {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255,200,80,0.1);
            padding-top: 3rem !important;
          }
        }

        .contact-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contact-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #ffc850;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .contact-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.8rem, 9vw, 6.5rem);
          line-height: 0.92;
          color: #fff;
          letter-spacing: 0.03em;
          margin: 0 0 1.75rem;
        }

        .contact-headline span {
          color: #ffc850;
          display: block;
        }

        .contact-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          font-weight: 300;
          max-width: 360px;
          margin-bottom: 2.5rem;
        }

        .email-cta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .email-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }

        .email-value {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.78rem, 1.8vw, 0.95rem);
          color: rgba(255,255,255,0.75);
          font-weight: 400;
          word-break: break-all;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding: 0.6rem 1.25rem;
          background: transparent;
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 2px;
          color: #ffc850;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s ease;
          width: fit-content;
        }

        .copy-btn:hover {
          background: rgba(255,200,80,0.08);
          border-color: #ffc850;
        }

        .copy-btn.copied {
          background: rgba(255,200,80,0.12);
          color: #fff;
          border-color: #ffc850;
        }

        .social-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.1rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.22s ease;
          background: rgba(255,255,255,0.02);
        }

        .social-link:hover {
          color: #ffc850;
          border-color: rgba(255,200,80,0.4);
          background: rgba(255,200,80,0.05);
          transform: translateY(-2px);
        }

        .contact-right {
          border-left: 1px solid rgba(255,200,80,0.1);
          padding-left: 4rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 1.1rem;
          border: 1px solid rgba(80,255,140,0.2);
          border-radius: 2px;
          background: rgba(80,255,140,0.04);
          width: fit-content;
        }

        .avail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #50ff8c;
          position: relative;
          flex-shrink: 0;
        }

        .avail-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(80,255,140,0.4);
          animation: pulse-ring 2s ease-out infinite;
        }

        .avail-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #50ff8c;
        }

        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1.25rem 0;
          padding-left: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          transition: padding-left 0.25s ease;
        }

        .info-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0;
          width: 2px;
          height: 0;
          background: #ffc850;
          transition: height 0.3s ease;
        }

        .info-row:hover { padding-left: 1rem; }
        .info-row:hover::before { height: 100%; }

        .info-key {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
        }

        .info-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.7);
          font-weight: 300;
        }

        .deco-ring {
          position: absolute;
          top: 8%;
          right: -8%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,80,0.04);
          pointer-events: none;
          animation: spin-slow 30s linear infinite;
        }

        .deco-ring::before {
          content: '';
          position: absolute;
          top: 10%; left: -2px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ffc850;
          opacity: 0.5;
        }

        .deco-ring-2 {
          position: absolute;
          bottom: 10%;
          left: -6%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(255,200,80,0.03);
          pointer-events: none;
          animation: spin-slow 20s linear infinite reverse;
        }

        .phone-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          padding: 1.1rem 1.5rem;
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 2px;
          background: linear-gradient(135deg, rgba(255,200,80,0.06) 0%, transparent 100%);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .phone-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,80,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .phone-cta:hover {
          border-color: rgba(255,200,80,0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        .phone-cta:hover::after { opacity: 1; }

        .phone-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffc850;
          flex-shrink: 0;
          z-index: 1;
        }

        .phone-text {
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .phone-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 0.2rem;
        }

        .phone-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .contact-footer {
          max-width: 997px;
          margin: 0 auto;
          padding: 1.5rem 33px 3rem;
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
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
        }

        .footer-dots {
          display: flex;
          gap: 0.4rem;
        }

        .footer-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,200,80,0.3);
        }

        .footer-dot:first-child { background: #ffc850; }
      `}</style>

      {/* Decorative orbiting rings */}
      <div className="deco-ring" />
      <div className="deco-ring-2" />

      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "30%", left: "40%",
        width: "500px", height: "300px",
        background: "radial-gradient(ellipse, rgba(255,200,80,0.055) 0%, transparent 65%)",
        pointerEvents: "none",
        transform: "translateX(-50%)",
      }} />

      <div className="contact-section">

        {/* ── LEFT ── */}
        <div className="contact-left">
          <p className="contact-eyebrow">Contact</p>

          <h2 className="contact-headline">
            Say<br />Hello<br />
            <span>To Me.</span>
          </h2>

          <p className="contact-subtext">
            Open for freelance projects, collaborations,
            and creative work. Let's build something
            worth remembering.
          </p>

          {/* Email block */}
          <div className="email-cta">
            <span className="email-label">Email Address</span>
            <span className="email-value">servicesjmseptember@gmail.com</span>
            <button className={`copy-btn${copied ? " copied" : ""}`} onClick={copyEmail}>
              {copied ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Email
                </>
              )}
            </button>
          </div>

          {/* Social links */}
          <div className="social-row">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {s.icon}
                {s.handle}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="contact-right">

          {/* Availability badge */}
          <div className="availability">
            <div className="avail-dot" />
            <span className="avail-text">Available for Work</span>
          </div>

          {/* Info rows */}
          <div className="info-stack">
            {[
              { key: "Based in",    val: "Philippines" },
              { key: "Timezone",    val: "PHT · UTC +8" },
              { key: "Response",    val: "Within 24 hours" },
              { key: "Specialties", val: "Web Dev · UI Design · Graphic Art" },
            ].map((row) => (
              <div className="info-row" key={row.key}>
                <span className="info-key">{row.key}</span>
                <span className="info-val">{row.val}</span>
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <a href="tel:+639352541057" className="phone-cta">
            <div className="phone-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.3 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="phone-text">
              <span className="phone-sub">Call me directly</span>
              <span className="phone-num">+63 935 254 1057</span>
            </div>
            <svg style={{ marginLeft: "auto", color: "rgba(255,200,80,0.4)", zIndex: 1 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>

      {/* Footer strip */}
      <div className="contact-footer">
        <span className="footer-copy">© {new Date().getFullYear()} Marlon Ampoon · All Rights Reserved</span>
        <div className="footer-dots">
          <div className="footer-dot" />
          <div className="footer-dot" />
          <div className="footer-dot" />
        </div>
      </div>
    </section>
  );
}