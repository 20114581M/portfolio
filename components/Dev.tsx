import { useState } from "react";

// ── Assets ───────────────────────────────────────────────────────────────────
import proj1 from "../src/assets/Dev/Screenshot 2026-02-28 022631.png";
import proj2 from "../src/assets/Dev/Screenshot 2026-02-28 023155.png";
import proj3 from "../src/assets/Dev/Screenshot 2026-02-28 023643.png";

// ── Data ─────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    src: proj1,
    title: "Steinposner Century 21",
    subtitle: "All-in-One Agent Marketing Hub",
    description:
      "A centralized marketing platform built exclusively for Century 21 Steinposner agents. Consolidates vendor hiring, flyer creation, postcard delivery, email marketing, and social media boosting — all under one roof. Eliminates the need for agents to juggle multiple platforms to fulfill their listing and marketing needs.",
    tags: ["Web App", "E-Commerce", "Real Estate", "Multi-Platform"],
    type: "Marketing Platform",
    year: "2025",
  },
  {
    id: 2,
    src: proj2,
    title: "Women's Health & Cosmetics",
    subtitle: "Health & Beauty Storefront",
    description:
      "An e-commerce store dedicated to women's health and well-being. Features a curated catalog of cosmetic and healthcare products with a clean, confidence-inspiring shopping experience designed to resonate with its target audience.",
    tags: ["E-Commerce", "Health & Beauty", "Storefront", "UI Design"],
    type: "E-Commerce Store",
    year: "2025",
  },
  {
    id: 3,
    src: proj3,
    title: "Salon Beauty Supply",
    subtitle: "Professional Beauty E-Commerce",
    description:
      "A professional e-commerce store for salon-grade beauty supplies. Built for both retail customers and salon professionals, offering a streamlined product browsing and purchasing experience for hair, skin, and beauty essentials.",
    tags: ["E-Commerce", "Beauty Supply", "Retail", "Storefront"],
    type: "E-Commerce Store",
    year: "2024",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Dev() {
  const [lightbox, setLightbox] = useState<{ src: string; idx: number } | null>(null);

  const navigateLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    const next = (lightbox.idx + dir + projects.length) % projects.length;
    setLightbox({ src: projects[next].src, idx: next });
  };

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════════════════════════════
           DEV SECTION — Showcase Layout
        ═══════════════════════════════════════════════════════════════ */
        .dev-wrapper {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 6rem 0 8rem;
        }

        /* noise texture overlay */
        .dev-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
        }

        /* ── Section header ── */
        .dev-header {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .dev-header-left {}

        .dev-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.8rem;
        }

        .dev-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
        }

        .dev-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          letter-spacing: 0.03em;
          line-height: 0.88;
          color: #fff;
          margin: 0;
        }

        .dev-section-heading span { color: #ffc850; }

        .dev-header-right {
          max-width: 340px;
        }

        .dev-header-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
        }

        .dev-header-bio strong { color: rgba(255,255,255,0.7); font-weight: 500; }
        .dev-header-bio em     { color: #ffc850; font-style: normal; }

        /* ── Horizontal rule ── */
        .dev-rule {
          max-width: 1300px;
          margin: 0 auto 0;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .dev-rule-inner {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.25), rgba(255,200,80,0.05) 60%, transparent);
        }

        /* ═══════════════════════════════════════
           SHOWCASE ROWS
        ═══════════════════════════════════════ */
        .dev-showcase {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        /* each project row */
        .dev-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
          cursor: pointer;
          transition: background 0.3s;
        }

        .dev-row:first-child {
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .dev-row:hover {
          background: rgba(255,200,80,0.02);
        }

        /* ── Row number column ── */
        .dev-row-num-col {
          display: flex;
          align-items: flex-start;
          padding-top: 2.8rem;
          padding-right: 1rem;
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .dev-row-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.35);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          transition: color 0.3s;
        }

        .dev-row:hover .dev-row-num {
          color: #ffc850;
        }

        /* ── Row main content ── */
        .dev-row-main {
          padding: 2.5rem 0 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* top bar: title + type */
        .dev-row-topbar {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.8rem;
        }

        .dev-row-title-group {
          display: flex;
          align-items: baseline;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .dev-row-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          letter-spacing: 0.04em;
          color: #fff;
          line-height: 1;
          transition: color 0.25s;
          margin: 0;
        }

        .dev-row:hover .dev-row-title { color: #ffc850; }

        .dev-row-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: color 0.25s;
        }

        .dev-row:hover .dev-row-subtitle { color: rgba(255,200,80,0.5); }

        .dev-row-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .dev-row-type {
          padding: 0.28rem 0.8rem;
          background: rgba(255,200,80,0.07);
          border: 1px solid rgba(255,200,80,0.18);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.65);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dev-row:hover .dev-row-type {
          background: rgba(255,200,80,0.12);
          border-color: rgba(255,200,80,0.35);
          color: #ffc850;
        }

        .dev-row-year {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.2);
        }

        /* ── Screenshot area: wide browser mockup ── */
        .dev-row-preview {
          position: relative;
          width: 100%;
          border-radius: 6px 6px 0 0;
          overflow: hidden;
          background: rgba(20,20,28,0.9);
          border: 1px solid rgba(255,255,255,0.07);
          border-bottom: none;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          transition: box-shadow 0.4s, border-color 0.3s;
        }

        .dev-row:hover .dev-row-preview {
          border-color: rgba(255,200,80,0.15);
          box-shadow: 0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,200,80,0.08);
        }

        /* fake browser chrome */
        .dev-browser-bar {
          height: 32px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 6px;
          flex-shrink: 0;
        }

        .dev-browser-dot {
          width: 9px; height: 9px;
          border-radius: 50%;
        }

        .dev-browser-dot:nth-child(1) { background: rgba(255,95,86,0.5); }
        .dev-browser-dot:nth-child(2) { background: rgba(255,189,46,0.5); }
        .dev-browser-dot:nth-child(3) { background: rgba(39,201,63,0.5); }

        .dev-browser-url {
          margin-left: 8px;
          flex: 1;
          height: 18px;
          background: rgba(255,255,255,0.04);
          border-radius: 3px;
          max-width: 320px;
        }

        .dev-row-screenshot {
          width: 100%;
          display: block;
          height: 340px;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94),
                      filter 0.4s ease,
                      height 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: brightness(0.8) saturate(0.75);
          cursor: zoom-in;
        }

        .dev-row:hover .dev-row-screenshot {
          height: 420px;
          filter: brightness(1) saturate(1.05);
          transform: scale(1.01);
        }

        /* zoom overlay on screenshot */
        .dev-screenshot-zoom {
          position: absolute;
          inset: 32px 0 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .dev-row:hover .dev-screenshot-zoom { opacity: 1; }

        .dev-screenshot-zoom-btn {
          width: 48px; height: 48px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,200,80,0.4);
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: all;
          cursor: zoom-in;
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.2s;
        }

        .dev-row:hover .dev-screenshot-zoom-btn { transform: scale(1); }
        .dev-screenshot-zoom-btn:hover { background: rgba(255,200,80,0.15); }

        .dev-screenshot-zoom-btn svg {
          width: 18px; height: 18px;
          stroke: #ffc850; fill: none;
          stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
        }

        /* ── Bottom info strip ── */
        .dev-row-bottom {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .dev-row-desc {
          flex: 1 1 260px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.85;
          font-weight: 300;
          max-width: 560px;
        }

        .dev-row-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: flex-start;
          padding-top: 0.1rem;
        }

        .dev-row-tag {
          padding: 0.25rem 0.65rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.54rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .dev-row:hover .dev-row-tag {
          background: rgba(255,200,80,0.07);
          border-color: rgba(255,200,80,0.2);
          color: rgba(255,200,80,0.7);
        }

        /* arrow indicator */
        .dev-row-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          opacity: 0;
          transition: opacity 0.25s, transform 0.3s;
          font-size: 1.2rem;
          color: #ffc850;
        }

        .dev-row:hover .dev-row-arrow {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ── Footer stat bar ── */
        .dev-footer {
          max-width: 1300px;
          margin: 3rem auto 0;
          padding: 0 2rem;
          display: flex;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }

        .dev-footer-stat {
          flex: 1;
          padding: 1.2rem 1.5rem;
          background: rgba(8,8,12,0.95);
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: background 0.2s;
        }

        .dev-footer-stat:hover { background: rgba(255,200,80,0.04); }

        .dev-footer-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #ffc850;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .dev-footer-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ── Lightbox ── */
        .dev-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(2,2,6,0.96);
          backdrop-filter: blur(18px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: devLbIn 0.2s ease;
        }

        @keyframes devLbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .dev-lightbox-wrap {
          animation: devLbUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        @keyframes devLbUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .dev-lightbox-wrap img {
          max-width: 90vw;
          max-height: 84vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 60px 160px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,200,80,0.1);
          display: block;
        }

        .dev-lb-close {
          position: fixed;
          top: 1.25rem; right: 1.25rem;
          width: 38px; height: 38px;
          background: rgba(8,8,12,0.85);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }

        .dev-lb-close:hover { background: rgba(255,200,80,0.12); }

        .dev-lb-nav {
          position: fixed;
          top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(8,8,12,0.85);
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }

        .dev-lb-nav:hover {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.5);
        }

        .dev-lb-prev { left: 1.25rem; }
        .dev-lb-next { right: 1.25rem; }

        .dev-lb-label {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .dev-lb-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          color: #fff;
        }

        .dev-lb-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .dev-lb-counter span { color: #ffc850; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .dev-header { flex-direction: column; align-items: flex-start; }
          .dev-header-right { max-width: 100%; }
          .dev-row { grid-template-columns: 48px 1fr; }
          .dev-lb-prev { left: 0.5rem; }
          .dev-lb-next { right: 0.5rem; }
        }

        @media (max-width: 600px) {
          .dev-row { grid-template-columns: 1fr; }
          .dev-row-num-col { display: none; }
          .dev-row-main { padding: 1.5rem 0; }
          .dev-row-screenshot { height: 220px; }
          .dev-row:hover .dev-row-screenshot { height: 280px; }
          .dev-footer { flex-direction: column; }
        }
      `}</style>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="dev-lightbox"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") navigateLightbox(1);
            if (e.key === "ArrowLeft")  navigateLightbox(-1);
            if (e.key === "Escape")     setLightbox(null);
          }}
          tabIndex={0}
        >
          <button className="dev-lb-close" onClick={() => setLightbox(null)}>✕</button>

          <button className="dev-lb-nav dev-lb-prev"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>‹</button>

          <div className="dev-lightbox-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt="Project preview" />
          </div>

          <button className="dev-lb-nav dev-lb-next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>›</button>

          <div className="dev-lb-label">
            <span className="dev-lb-title">{projects[lightbox.idx].title}</span>
            <span className="dev-lb-counter">
              <span>{lightbox.idx + 1}</span> of {projects.length}
            </span>
          </div>
        </div>
      )}

      <section className="dev-wrapper" id="dev">

        {/* ── Section Header ── */}
        <div className="dev-header">
          <div className="dev-header-left">
            <span className="dev-section-tag">My Builds</span>
            <h2 className="dev-section-heading">
              Dev<br /><span>Projects</span>
            </h2>
          </div>
          <div className="dev-header-right">
            <p className="dev-header-bio">
              Where <em>design meets functionality</em>. From <strong>multi-feature business platforms</strong> to
              polished <strong>e-commerce storefronts</strong> — each build is engineered to solve real
              problems and deliver a seamless experience.
            </p>
          </div>
        </div>

        <div className="dev-rule">
          <div className="dev-rule-inner" />
        </div>

        {/* ── Project Showcase Rows ── */}
        <div className="dev-showcase">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="dev-row"
            >
              {/* Number column */}
              <div className="dev-row-num-col">
                <span className="dev-row-num">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Main content */}
              <div className="dev-row-main">

                {/* Top bar */}
                <div className="dev-row-topbar">
                  <div className="dev-row-title-group">
                    <h3 className="dev-row-title">{project.title}</h3>
                    <span className="dev-row-subtitle">{project.subtitle}</span>
                  </div>
                  <div className="dev-row-meta">
                    <span className="dev-row-type">{project.type}</span>
                    <span className="dev-row-year">{project.year}</span>
                  </div>
                </div>

                {/* Browser mockup + screenshot */}
                <div className="dev-row-preview">
                  <div className="dev-browser-bar">
                    <div className="dev-browser-dot" />
                    <div className="dev-browser-dot" />
                    <div className="dev-browser-dot" />
                    <div className="dev-browser-url" />
                  </div>
                  <img
                    src={project.src}
                    alt={project.title}
                    className="dev-row-screenshot"
                    loading="lazy"
                  />
                  <div className="dev-screenshot-zoom">
                    <button
                      className="dev-screenshot-zoom-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightbox({ src: project.src, idx });
                      }}
                    >
                      <svg viewBox="0 0 24 24">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="dev-row-bottom">
                  <p className="dev-row-desc">{project.description}</p>
                  <div className="dev-row-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="dev-row-tag">{tag}</span>
                    ))}
                  </div>
                </div>

              </div>

              <span className="dev-row-arrow">→</span>
            </div>
          ))}
        </div>

        {/* ── Footer stat bar ── */}
        <div className="dev-footer">
          {[
            { num: projects.length.toString(), label: "Projects Built" },
            { num: "3+",  label: "Industries Served" },
            { num: "E-Commerce", label: "Primary Platform" },
            { num: "100%", label: "Client Focused" },
          ].map((s) => (
            <div key={s.label} className="dev-footer-stat">
              <span className="dev-footer-num">{s.num}</span>
              <span className="dev-footer-label">{s.label}</span>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}