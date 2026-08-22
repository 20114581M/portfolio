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

// Marketing Files
import mf1  from "../src/assets/marketingfiles/933cd4_3ac0114869eb44d0855219d595bfecad~mv2.avif";
import mf2  from "../src/assets/marketingfiles/933cd4_3b3dd834628c4f339ffa0cf74dd08ff1~mv2.avif";
import mf3  from "../src/assets/marketingfiles/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv2.avif";
import mf4  from "../src/assets/marketingfiles/933cd4_7b18d81fa7554b939b9015ab1e022d59~mv21.avif";
import mf5  from "../src/assets/marketingfiles/933cd4_8438c1598fe245c39abd32a4f94cf9d8~mv2.avif";
import mf6  from "../src/assets/marketingfiles/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2.avif";
import mf7  from "../src/assets/marketingfiles/933cd4_933ecddb115642eeb4de5ce728ce4158~mv2.avif";
import mf8  from "../src/assets/marketingfiles/933cd4_9d4f19587062449ebb358c1ef4385016~mv2.avif";
import mf9  from "../src/assets/marketingfiles/933cd4_a743d93c251e4706a8cc00391c99df64~mv2.avif";
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
interface Item { id: number; src: string; category: Exclude<Category,"all">; label: string; tag: string; }

const items: Item[] = [
  { id:1,  src:wd1,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:2,  src:wd2,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:3,  src:wd3,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:4,  src:wd4,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:5,  src:wd5,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:6,  src:wd6,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:7,  src:wd7,  category:"webdesign",   label:"Website Design", tag:"UI / Web" },
  { id:8,  src:mf1,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:9,  src:mf2,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:10, src:mf3,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:11, src:mf4,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:12, src:mf5,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:13, src:mf6,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:14, src:mf7,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:15, src:mf8,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:16, src:mf9,  category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:17, src:mf10, category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:18, src:mf11, category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:19, src:mf12, category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:20, src:mf13, category:"marketing",   label:"Marketing File", tag:"Print / Digital" },
  { id:21, src:sd1,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:22, src:sd2,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:23, src:sd3,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:24, src:sd4,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:25, src:sd5,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:26, src:sd6,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:27, src:sd7,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:28, src:sd8,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
  { id:29, src:sd9,  category:"shirtdesign", label:"Shirt Design",   tag:"Apparel" },
];

const filters: { value: Category; label: string; count: number }[] = [
  { value:"all",         label:"All Work",   count:items.length },
  { value:"webdesign",   label:"Web Design", count:items.filter(i=>i.category==="webdesign").length },
  { value:"marketing",   label:"Marketing",  count:items.filter(i=>i.category==="marketing").length },
  { value:"shirtdesign", label:"Apparel",    count:items.filter(i=>i.category==="shirtdesign").length },
];

export default function Graphics() {
  const [active, setActive]     = useState<Category>("webdesign");
  const [lightbox, setLightbox] = useState<{ src: string; idx: number } | null>(null);

  const visible = active === "all" ? items : items.filter(i => i.category === active);

  const navigateLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    const next = (lightbox.idx + dir + visible.length) % visible.length;
    setLightbox({ src: visible[next].src, idx: next });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "ArrowLeft")  navigateLightbox(-1);
    if (e.key === "Escape")     setLightbox(null);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root overflow lock ── */
        .gfx-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* this must stay */
}

        .gfx-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 5rem 2rem;
          display: flex;
          gap: 5rem;
          align-items: flex-start;
          overflow-x: hidden;
        }

        /* ── Left sticky label ── */
        .gfx-left {
          flex: 0 0 160px;
          width: 160px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: sticky;
          top: 5rem;
        }
        .gfx-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .gfx-eyebrow::before {
          content: '';
          width: 24px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
          display: inline-block;
        }
        .gfx-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 4vw, 4.5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }
        .gfx-heading span { color: #ffc850; }
        .gfx-count {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .gfx-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          color: #ffc850;
          line-height: 1;
        }
        .gfx-count-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── Right content ── */
        .gfx-right {
  flex: 1 1 0;
  min-width: 0;
  max-width: 100%;
  /* DELETE: overflow-x: hidden; */
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

        /* Pills */
        .gfx-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          min-width: 0;
        }
        .gfx-pill {
          padding: 0.28rem 0.8rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ffc850;
        }

        /* Bio */
        .gfx-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.88rem, 1.5vw, 1rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.85;
          font-weight: 300;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
          min-width: 0;
        }
        .gfx-bio strong { color: #fff; font-weight: 500; }
        .gfx-bio em     { color: #ffc850; font-style: normal; }

        .gfx-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Filter tabs ── */
        .gfx-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          width: 100%;
          min-width: 0;
        }
        .gfx-filter-btn {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
          min-height: 40px;
        }
        .gfx-filter-btn:hover {
          border-color: rgba(255,200,80,0.35);
          color: rgba(255,200,80,0.8);
        }
        .gfx-filter-btn.active {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.45);
          color: #ffc850;
        }
        .gfx-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 16px;
          height: 14px;
          padding: 0 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 2px;
          font-size: 0.52rem;
          color: rgba(255,255,255,0.35);
        }
        .gfx-filter-btn.active .gfx-chip {
          background: rgba(255,200,80,0.2);
          color: #ffc850;
        }

        /* ── Grid ── */
        .gfx-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
          min-width: 0;
        }
        .gfx-card {
          position: relative;
          min-width: 0;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: rgba(8,8,12,0.95);
          cursor: pointer;
        }
        .gfx-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.82) saturate(0.85);
          transition: transform 0.5s, filter 0.4s;
        }
        .gfx-card:hover img { transform: scale(1.07); filter: brightness(1) saturate(1.1); }
        .gfx-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(4,4,8,0.88) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.75rem;
          gap: 2px;
          z-index: 2;
        }
        .gfx-card:hover .gfx-card-overlay { opacity: 1; }
        .gfx-card-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ffc850;
        }
        .gfx-card-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .gfx-card-num {
          position: absolute;
          bottom: 0.6rem; right: 0.6rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(255,200,80,0.5);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .gfx-card:hover .gfx-card-num { opacity: 1; }

        /* ── Lightbox ── */
        .gfx-lb {
          position: fixed; inset: 0;
          background: rgba(2,2,6,0.94);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { transform:translateY(20px); opacity:0 } to { transform:translateY(0); opacity:1 } }

        .gfx-lb-img { animation: slideUp 0.3s ease; }
        .gfx-lb-img img {
          max-width: 88vw;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 3px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.8);
          display: block;
        }
        .gfx-lb-close {
          position: fixed; top: 1rem; right: 1rem;
          width: 40px; height: 40px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          color: #ffc850; font-size: 0.9rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }
        .gfx-lb-close:hover { background: rgba(255,200,80,0.12); }
        .gfx-lb-nav {
          position: fixed; top: 50%;
          transform: translateY(-50%);
          width: 44px; height: 44px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          color: #ffc850; font-size: 1.3rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }
        .gfx-lb-nav:hover { background: rgba(255,200,80,0.1); }
        .gfx-lb-prev { left: 0.75rem; }
        .gfx-lb-next { right: 0.75rem; }
        .gfx-lb-counter {
          position: fixed; bottom: 1.25rem; left: 50%;
          transform: translateX(-50%);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .gfx-lb-counter span { color: #ffc850; }

        /* ─────────── TABLET (≤ 860px) ─────────── */
        @media (max-width: 860px) {
          .gfx-inner {
            flex-direction: column;
            gap: 2rem;
            padding: 3.5rem 1.5rem;
          }
          .gfx-left {
            position: static;
            flex-direction: row;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 1.5rem;
            flex: unset;
            width: 100%;
          }
          .gfx-count { margin-top: 0; }
          .gfx-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        /* ─────────── MOBILE (≤ 600px) ─────────── */
        @media (max-width: 600px) {
          .gfx-inner {
            padding: 2rem 1rem;
            gap: 1.25rem;
          }

          /* Header: full width, stacked */
          .gfx-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
            width: 100%;
            flex: unset;
          }
          .gfx-heading { font-size: clamp(2.4rem, 10vw, 3rem); }

          /* Bio: contained, wrapping */
          .gfx-bio {
            font-size: 0.85rem;
            line-height: 1.75;
          }

          /* Pills wrap */
          .gfx-pills { gap: 0.35rem; }
          .gfx-pill  { font-size: 0.52rem; padding: 0.22rem 0.6rem; }

          /* Grid: always 2 cols on mobile */
          .gfx-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          /* Lightbox */
          .gfx-lb { padding: 0.75rem 0.4rem; }
          .gfx-lb-img img { max-width: 96vw; max-height: 72vh; }
          .gfx-lb-prev { left: 0.2rem; }
          .gfx-lb-next { right: 0.2rem; }
          .gfx-lb-close { top: 0.5rem; right: 0.5rem; width: 36px; height: 36px; font-size: 0.8rem; }
          .gfx-lb-nav   { width: 36px; height: 36px; font-size: 1.1rem; }
        }

        /* ─────────── SMALL PHONES (≤ 390px) ─────────── */
        @media (max-width: 390px) {
          .gfx-heading { font-size: clamp(2rem, 12vw, 2.6rem); }
          .gfx-grid { grid-template-columns: minmax(0, 1fr); }
        }
      `}</style>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="gfx-lb" onClick={() => setLightbox(null)} onKeyDown={handleKeyDown} tabIndex={0}>
          <button className="gfx-lb-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="gfx-lb-nav gfx-lb-prev" onClick={e => { e.stopPropagation(); navigateLightbox(-1); }}>‹</button>
          <div className="gfx-lb-img" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt="Preview" />
          </div>
          <button className="gfx-lb-nav gfx-lb-next" onClick={e => { e.stopPropagation(); navigateLightbox(1); }}>›</button>
          <div className="gfx-lb-counter"><span>{lightbox.idx + 1}</span> / {visible.length}</div>
        </div>
      )}

      <section className="gfx-wrap" id="graphics">
        <div className="gfx-inner">

          {/* Left */}
          <div className="gfx-left">
            <span className="gfx-eyebrow">My Work</span>
            <h2 className="gfx-heading">Graphic<br /><span>Work</span></h2>
            <div className="gfx-count">
              <span className="gfx-count-num">{visible.length}</span>
              <span className="gfx-count-lbl">{active === "all" ? "Total Pieces" : "In Category"}</span>
            </div>
          </div>

          {/* Right */}
          <div className="gfx-right">

            <div className="gfx-pills">
              <span className="gfx-pill">Web Design</span>
              <span className="gfx-pill">Marketing</span>
              <span className="gfx-pill">Apparel</span>
            </div>

            <p className="gfx-bio">
              A selection of <em>visual work</em> spanning <strong>website UI design</strong>,
              print &amp; digital <strong>marketing materials</strong>, and custom{" "}
              <strong>shirt / apparel graphics</strong>.
              Every piece is crafted with intention — designed to communicate clearly and leave a lasting impression.
            </p>

            <div className="gfx-divider" />

            {/* Filter tabs */}
            <div className="gfx-filters">
              {filters.map(f => (
                <button
                  key={f.value}
                  className={`gfx-filter-btn${active === f.value ? " active" : ""}`}
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
                  <span className="gfx-chip">{f.count}</span>
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="gfx-grid">
              {visible.map((item, idx) => (
                <div key={item.id} className="gfx-card" onClick={() => setLightbox({ src: item.src, idx })}>
                  <img src={item.src} alt={item.label} loading="lazy" />
                  <div className="gfx-card-overlay">
                    <span className="gfx-card-tag">{item.tag}</span>
                    <span className="gfx-card-label">{item.label}</span>
                  </div>
                  <span className="gfx-card-num">{String(idx+1).padStart(2,"0")}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
