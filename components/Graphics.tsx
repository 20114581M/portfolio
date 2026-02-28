import { useState } from "react";

// ── Import your assets ──────────────────────────────────────────────────────
// Web Design
import wd1 from "../src/assets/webdesign/933cd4_1aafcabfda344c27bef126f787c6b836~mv2.avif";
import wd2 from "../src/assets/webdesign/933cd4_2869364afdcf4eb5b9e299e8bda32877~mv2.avif";
import wd3 from "../src/assets/webdesign/933cd4_5944f00d1bba47d9b716947b730ddbb6~mv2.avif";
import wd4 from "../src/assets/webdesign/933cd4_7bbffb687d614ddaac513b5a4e311fca~mv2.avif";
import wd5 from "../src/assets/webdesign/933cd4_926983c740894abb8ac182274902944d~mv2.avif";
import wd6 from "../src/assets/webdesign/933cd4_dbf9407c2a644000b8d166788f5912b4~mv2.avif"; 
import wd7 from "../src/assets/webdesign/933cd4_f316234cf9234290b7ed386311f25f51~mv2.avif";

// Marketing Files (flyers / banners)
import mf1 from "../src/assets/marketingfiles/933cd4_3ac0114869eb44d0855219d595bfecad~mv2.avif";
import mf2 from "../src/assets/marketingfiles/933cd4_3b3dd834628c4f339ffa0cf74dd08ff1~mv2.avif";
import mf3 from "../src/assets/marketingfiles/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2.avif";
import mf4 from "../src/assets/marketingfiles/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv21.avif";
import mf5 from "../src/assets/marketingfiles/933cd4_8438c1598fe245c39abd32a4f94cf9d8~mv2.avif";
import mf6 from "../src/assets/marketingfiles/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2.avif";
import mf7 from "../src/assets/marketingfiles/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2.avif";
import mf8 from "../src/assets/marketingfiles/933cd4_9d4f19587062449ebb358c1ef4385016~mv2.avif";
import mf9 from "../src/assets/marketingfiles/933cd4_a743d93c251e4706a8cc00391c99df64~mv2.avif";
import mf10 from "../src/assets/marketingfiles/933cd4_a992971364804dff87196a63b69c4f95~mv2.avif";
import mf11 from "../src/assets/marketingfiles/933cd4_c067371c694c4909b2b85af0a079a9da~mv2.avif";
import mf12 from "../src/assets/marketingfiles/933cd4_e456be50e7c04c3583dcc3ccc1020392~mv2.avif";
import mf13 from "../src/assets/marketingfiles/933cd4_e94abbd068ae4805bf54fa0955ab17bf~mv2.avif";

// Shirt Designs
import sd1 from "../src/assets/shirtdesign/933cd4_21c532d84e3d4e70b75d90b228d3fcec~mv2.avif";
import sd2 from "../src/assets/shirtdesign/933cd4_237a1548a9d84782b4b3fb357eee1351~mv2.avif";
import sd3 from "../src/assets/shirtdesign/933cd4_23b5a8291d49458895bdc6351beb3d71~mv2.avif";
import sd4 from "../src/assets/shirtdesign/933cd4_465dfcaeb0034e2abcba48e9e5acc899~mv2.avif";
import sd5 from "../src/assets/shirtdesign/933cd4_64d72ab1b3ba4e82adf270f22f4be246~mv2.avif";
import sd6 from "../src/assets/shirtdesign/933cd4_92b20642a46240b2934aeea1d0554c76~mv2.avif";
import sd7 from "../src/assets/shirtdesign/933cd4_dc21b0c2a23f48288a3c11f39cae1e6e~mv2.avif";
import sd8 from "../src/assets/shirtdesign/933cd4_eaffa2e625054aeb813084cfeccf5b86~mv2.avif";
import sd9 from "../src/assets/shirtdesign/933cd4_f8cb313e7c3d4ce0a4090950e859c161~mv2.avif";

// ── Types & Data ─────────────────────────────────────────────────────────────
type Category = "all" | "webdesign" | "marketing" | "shirtdesign";

interface Item {
  id: number;
  src: string;
  category: Exclude<Category, "all">;
  label: string;
  tag: string;
}

const items: Item[] = [
  // Web Design
  { id: 1,  src: wd1,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  { id: 2,  src: wd2,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  { id: 3,  src: wd3,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  { id: 4,  src: wd4,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  { id: 5,  src: wd5,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  { id: 6,  src: wd6,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  { id: 7,  src: wd7,  category: "webdesign",   label: "Website Design", tag: "UI / Web" },
  // Marketing
  { id: 8,  src: mf1,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 9,  src: mf2,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 10, src: mf3,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 11, src: mf4,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 12, src: mf5,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 13, src: mf6,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 13, src: mf7,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 14, src: mf8,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 15, src: mf9,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 16, src: mf10, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 17, src: mf11, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 18, src: mf12, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 19, src: mf13, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  // Shirt Designs
  { id: 20, src: sd1,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 21, src: sd2,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 22, src: sd3,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 23, src: sd4,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 24, src: sd5,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 25, src: sd6,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 26, src: sd7,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 27, src: sd8,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 28, src: sd9,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
];

const filters: { value: Category; label: string; count: number }[] = [
  { value: "all",         label: "All Work",   count: items.length },
  { value: "webdesign",   label: "Web Design", count: items.filter(i => i.category === "webdesign").length },
  { value: "marketing",   label: "Marketing",  count: items.filter(i => i.category === "marketing").length },
  { value: "shirtdesign", label: "Apparel",    count: items.filter(i => i.category === "shirtdesign").length },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Graphics() {
  const [active, setActive]     = useState<Category>("webdesign");
  const [lightbox, setLightbox] = useState<{ src: string; idx: number } | null>(null);

  const visible = active === "all" ? items : items.filter((i) => i.category === active);

  const navigateLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    const next = (lightbox.idx + dir + visible.length) % visible.length;
    setLightbox({ src: visible[next].src, idx: next });
  };

  // keyboard nav
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "ArrowLeft")  navigateLightbox(-1);
    if (e.key === "Escape")     setLightbox(null);
  };

  return (
    <>
      <style>{`
        /* ── Graphics Section ─────────────────────────────────────────── */
        .graphics-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .graphics-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; left: -5%;
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .graphics-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .graphics-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 6rem 2rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          flex-wrap: wrap;
        }

        /* ── Left: sticky label ── */
        .graphics-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .graphics-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .graphics-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
        }

        .graphics-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
        }

        .graphics-section-heading span { color: #ffc850; }

        .graphics-count-badge {
          margin-top: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .graphics-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .graphics-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── Right: content ── */
        .graphics-right {
          flex: 1 1 320px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .graphics-intro-line {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: -0.5rem;
        }

        .graphics-intro-pill {
          padding: 0.3rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }

        .graphics-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.92rem, 1.7vw, 1.05rem);
          color: rgba(255,255,255,0.52);
          line-height: 1.9;
          font-weight: 300;
        }

        .graphics-bio strong { color: #fff; font-weight: 500; }
        .graphics-bio em     { color: #ffc850; font-style: normal; }

        .graphics-divider {
          width: 100%;
          max-width: 580px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Filter tabs ── */
        .graphics-filters {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .graphics-filter-btn {
          padding: 0.5rem 1.1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .graphics-filter-btn:hover {
          border-color: rgba(255,200,80,0.35);
          color: rgba(255,200,80,0.8);
        }

        .graphics-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.45);
          color: #ffc850;
        }

        .graphics-filter-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 18px;
          height: 16px;
          padding: 0 5px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          font-size: 0.55rem;
          letter-spacing: 0;
          color: rgba(255,255,255,0.35);
          transition: background 0.2s, color 0.2s;
        }

        .graphics-filter-btn.active .graphics-filter-chip {
          background: rgba(255,200,80,0.2);
          color: #ffc850;
        }

        /* ── Grid ── */
        .graphics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .graphics-card {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: rgba(8,8,12,0.95);
          cursor: pointer;
        }

        .graphics-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s ease;
          filter: brightness(0.82) saturate(0.85);
        }

        .graphics-card:hover img {
          transform: scale(1.07);
          filter: brightness(1) saturate(1.1);
        }

        .graphics-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,80,0.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 1;
          pointer-events: none;
        }

        .graphics-card:hover::before { opacity: 1; }

        .graphics-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(4,4,8,0.88) 0%,
            rgba(4,4,8,0.15) 55%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1rem 1rem 1.1rem;
          gap: 3px;
          z-index: 2;
        }

        .graphics-card:hover .graphics-card-overlay { opacity: 1; }

        .graphics-card-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ffc850;
        }

        .graphics-card-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.15rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }

        .graphics-card-zoom {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255,200,80,0.45);
          border-radius: 2px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.75) rotate(-5deg);
          transition: opacity 0.25s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          z-index: 3;
        }

        .graphics-card:hover .graphics-card-zoom {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .graphics-card-zoom svg {
          width: 13px;
          height: 13px;
          stroke: #ffc850;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .graphics-card-index {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.5);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .graphics-card:hover .graphics-card-index { opacity: 1; }

        /* ── Lightbox ── */
        .graphics-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(2,2,6,0.94);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: lbFadeIn 0.2s ease;
        }

        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .graphics-lightbox-img-wrap {
          animation: lbSlideUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        @keyframes lbSlideUp {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        .graphics-lightbox-img-wrap img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 3px;
          box-shadow: 0 50px 140px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,200,80,0.08);
          display: block;
        }

        .graphics-lb-close {
          position: fixed;
          top: 1.25rem;
          right: 1.25rem;
          width: 38px;
          height: 38px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }

        .graphics-lb-close:hover {
          background: rgba(255,200,80,0.12);
          border-color: rgba(255,200,80,0.6);
        }

        .graphics-lb-nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
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

        .graphics-lb-nav:hover {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.5);
        }

        .graphics-lb-prev { left: 1.25rem; }
        .graphics-lb-next { right: 1.25rem; }

        .graphics-lb-counter {
          position: fixed;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        .graphics-lb-counter span { color: #ffc850; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .graphics-left { position: static; }
          .graphics-grid { grid-template-columns: repeat(2, 1fr); }
          .graphics-lb-prev { left: 0.5rem; }
          .graphics-lb-next { right: 0.5rem; }
        }

        @media (max-width: 480px) {
          .graphics-grid  { grid-template-columns: 1fr; }
          .graphics-inner { flex-direction: column; gap: 2.5rem; }
        }
      `}</style>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="graphics-lightbox"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="graphics-lb-close" onClick={() => setLightbox(null)}>✕</button>

          <button
            className="graphics-lb-nav graphics-lb-prev"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >‹</button>

          <div className="graphics-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt="Preview" />
          </div>

          <button
            className="graphics-lb-nav graphics-lb-next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >›</button>

          <div className="graphics-lb-counter">
            <span>{lightbox.idx + 1}</span> / {visible.length}
          </div>
        </div>
      )}

      <section className="graphics-wrapper" id="graphics">
        <div className="graphics-inner">

          {/* ── Left: sticky label ── */}
          <div className="graphics-left">
            <span className="graphics-section-tag">My Work</span>
            <h2 className="graphics-section-heading">
              Graphic<br /><span>Work</span>
            </h2>
            <div className="graphics-count-badge">
              <span className="graphics-count-num">{visible.length}</span>
              <span className="graphics-count-label">
                {active === "all" ? "Total Pieces" : "In Category"}
              </span>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="graphics-right">

            <div className="graphics-intro-line">
              <span className="graphics-intro-pill">Web Design</span>
              <span className="graphics-intro-pill">Marketing</span>
              <span className="graphics-intro-pill">Apparel</span>
            </div>

            <p className="graphics-bio">
              A selection of <em>visual work</em> spanning <strong>website UI design</strong>,
              print &amp; digital <strong>marketing materials</strong>, and custom{" "}
              <strong>shirt / apparel graphics</strong>. Every piece is crafted with intention —
              designed to communicate clearly and leave a lasting impression.
            </p>

            <div className="graphics-divider" />

            {/* Filter tabs */}
            <div className="graphics-filters">
              {filters.map((f) => (
                <button
                  key={f.value}
                  className={`graphics-filter-btn${active === f.value ? " active" : ""}`}
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
                  <span className="graphics-filter-chip">{f.count}</span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="graphics-grid">
              {visible.map((item, idx) => (
                <div
                  key={item.id}
                  className="graphics-card"
                  onClick={() => setLightbox({ src: item.src, idx })}
                >
                  <img src={item.src} alt={item.label} loading="lazy" />
                  <div className="graphics-card-overlay">
                    <span className="graphics-card-tag">{item.tag}</span>
                    <span className="graphics-card-label">{item.label}</span>
                  </div>
                  <div className="graphics-card-zoom">
                    <svg viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8"  x2="11" y2="14" />
                      <line x1="8"  y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <span className="graphics-card-index">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}