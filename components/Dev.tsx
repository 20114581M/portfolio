import { useState } from "react";

// ── Assets ───────────────────────────────────────────────────────────────────
import t01 from "../src/assets/Time8out/Screenshot 2026-08-17 132006.png";
import t02 from "../src/assets/Time8out/Screenshot 2026-08-17 132015.png";
import t03 from "../src/assets/Time8out/Screenshot 2026-08-17 132024.png";
import t04 from "../src/assets/Time8out/Screenshot 2026-08-17 132038.png";
import t05 from "../src/assets/Time8out/Screenshot 2026-08-17 132046.png";
import t06 from "../src/assets/Time8out/Screenshot 2026-08-17 132055.png";
import t07 from "../src/assets/Time8out/Screenshot 2026-08-17 132109.png";
import t08 from "../src/assets/Time8out/Screenshot 2026-08-17 132117.png";
import t09 from "../src/assets/Time8out/Screenshot 2026-08-17 132124.png";
import t10 from "../src/assets/Time8out/Screenshot 2026-08-17 132133.png";
import t11 from "../src/assets/Time8out/Screenshot 2026-08-17 132140.png";
import t12 from "../src/assets/Time8out/Screenshot 2026-08-17 132148.png";
import t13 from "../src/assets/Time8out/Screenshot 2026-08-17 132158.png";
import t14 from "../src/assets/Time8out/Screenshot 2026-08-17 132208.png";
import t15 from "../src/assets/Time8out/Screenshot 2026-08-17 132216.png";
import t16 from "../src/assets/Time8out/Screenshot 2026-08-17 132230.png";
import t17 from "../src/assets/Time8out/Screenshot 2026-08-17 132238.png";

import proj1 from "../src/assets/Dev/Screenshot 2026-02-28 022631.png";
import proj2 from "../src/assets/Dev/Screenshot 2026-02-28 023155.png";
import proj3 from "../src/assets/Dev/Screenshot 2026-02-28 023643.png";

// Tetelestai Bible (Mobile App)
import ma1  from "../src/assets/mobileapp/657520324_122128339581079271_413717394934998652_n.jpg";
import ma2  from "../src/assets/mobileapp/657523475_122128339845079271_5936915331887691005_n.jpg";
import ma3  from "../src/assets/mobileapp/657525265_122128339719079271_5688376841275939431_n.jpg";
import ma4  from "../src/assets/mobileapp/657675461_122128340217079271_103663688234942863_n.jpg";
import ma5  from "../src/assets/mobileapp/658154758_122128340319079271_8594505295325550939_n.jpg";
import ma6  from "../src/assets/mobileapp/658221870_122128339755079271_3023340636135234144_n.jpg";
import ma7  from "../src/assets/mobileapp/659130268_122128339677079271_3786608590482122565_n.jpg";
import ma8  from "../src/assets/mobileapp/659172919_122128339545079271_8074764372666652035_n.jpg";
import ma9  from "../src/assets/mobileapp/659566311_122128339803079271_3539499664342588014_n.jpg";
import ma10 from "../src/assets/mobileapp/659642222_122128340115079271_7906012138457610164_n.jpg";
import ma11 from "../src/assets/mobileapp/659700554_122128339635079271_4434395129980663555_n.jpg";
import ma12 from "../src/assets/mobileapp/659876406_122128339965079271_2556805708608569485_n.jpg";
import ma13 from "../src/assets/mobileapp/660295965_122128339503079271_8104245686776742900_n.jpg";
import ma14 from "../src/assets/mobileapp/660403233_122128340061079271_7486745113921762045_n.jpg";
import ma15 from "../src/assets/mobileapp/660537003_122128340265079271_6786351733289619190_n.jpg";
import ma16 from "../src/assets/mobileapp/660616485_122128340163079271_6893266438101061807_n.jpg";
import ma17 from "../src/assets/mobileapp/660995204_122128339911079271_5549167849317527942_n.jpg";
import ma18 from "../src/assets/mobileapp/661803070_122128340013079271_7204857263889233147_n.jpg";

// ReDoIt (Web App)
import redoit1 from "../src/assets/redoit/Screenshot 2026-08-22 003203.png";

// Track8out (Mobile App)
import tr01 from "../src/assets/track8out/track8out-01.jpg";
import tr02 from "../src/assets/track8out/track8out-02.jpg";
import tr03 from "../src/assets/track8out/track8out-03.jpg";
import tr04 from "../src/assets/track8out/track8out-04.jpg";
import tr05 from "../src/assets/track8out/track8out-05.jpg";
import tr06 from "../src/assets/track8out/track8out-06.jpg";
import tr07 from "../src/assets/track8out/track8out-07.jpg";
import tr08 from "../src/assets/track8out/track8out-08.jpg";
import tr09 from "../src/assets/track8out/track8out-09.jpg";
import tr10 from "../src/assets/track8out/track8out-10.jpg";
import tr11 from "../src/assets/track8out/track8out-11.jpg";
import tr12 from "../src/assets/track8out/track8out-12.jpg";
import tr13 from "../src/assets/track8out/track8out-13.jpg";
import tr14 from "../src/assets/track8out/track8out-14.jpg";
import tr15 from "../src/assets/track8out/track8out-15.jpg";
import tr16 from "../src/assets/track8out/track8out-16.jpg";
import tr17 from "../src/assets/track8out/track8out-17.jpg";
import tr18 from "../src/assets/track8out/track8out-18.jpg";
import tr19 from "../src/assets/track8out/track8out-19.jpg";
import tr20 from "../src/assets/track8out/track8out-20.jpg";
import tr21 from "../src/assets/track8out/track8out-21.jpg";
import tr22 from "../src/assets/track8out/track8out-22.jpg";
import tr23 from "../src/assets/track8out/track8out-23.jpg";
import tr24 from "../src/assets/track8out/track8out-24.jpg";

// ── Data ─────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: string;
  year: string;
  carousel?: boolean;
  link?: { label: string; url: string };
}

const projects: Project[] = [
  {
    id: 6,
    images: [tr05, tr01, tr02, tr03, tr04, tr06, tr07, tr08, tr09, tr10, tr11, tr12, tr13, tr14, tr15, tr16, tr17, tr18, tr19, tr20, tr21, tr22, tr23, tr24],
    title: "Track8out",
    subtitle: "Budget, Expense & Savings Tracker",
    description:
      "A mobile budget tracking app that helps users monitor monthly income, expenditures, and savings in one place. Log transactions by category, review recent activity, and keep a running pulse on personal finances — track today, plan tomorrow.",
    tags: ["Mobile App", "iOS / Android", "Budget & Finance", "Expense Tracking"],
    type: "Mobile Application",
    year: "2026",
    carousel: true,
    link: { label: "Download APK", url: "https://drive.google.com/file/d/1xACkvQmTqA1zIyj2rB5l6BZckzVorJcb/view?usp=drive_link" },
  },
  {
    id: 4,
    images: [ma1, ma2, ma3, ma4, ma5, ma6, ma7, ma8, ma9, ma10, ma11, ma12, ma13, ma14, ma15, ma16, ma17, ma18],
    title: "Tetelestai Bible",
    subtitle: "Scripture Reading & Study Companion",
    description:
      "A mobile Bible app for reading, bookmarking, and journaling scripture. Lets users save verses, tag personal notes as General, Prayer, Study, or Reflection, and revisit their spiritual journey through a clean, distraction-free reading experience.",
    tags: ["Mobile App", "iOS / Android", "Faith & Reading", "Notes & Bookmarks"],
    type: "Mobile Application",
    year: "2026",
    carousel: true,
    link: { label: "Download APK", url: "https://drive.google.com/file/d/1jQZBy2oId9BuqMHeB9NTXVmEgBCt2WLx/view?usp=drivesdk" },
  },
  {
    id: 0,
    images: [t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17],
    title: "Time8out",
    subtitle: "Employee Time & Payroll Management Platform",
    description:
      "Time8out is an employee time management platform built for small businesses. Handles shift logging, break tracking, automatic deduction computation, and real-time payslip generation — giving employers a live dashboard of who's clocked in, on break, and accruing pay.",
    tags: ["Web App", "SaaS", "Time Tracking", "Payroll"],
    type: "Time & Payroll Platform",
    year: "2026",
  },
  {
    id: 1,
    images: [proj1],
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
    images: [proj2],
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
    images: [proj3],
    title: "Salon Beauty Supply",
    subtitle: "Professional Beauty E-Commerce",
    description:
      "A professional e-commerce store for salon-grade beauty supplies. Built for both retail customers and salon professionals, offering a streamlined product browsing and purchasing experience for hair, skin, and beauty essentials.",
    tags: ["E-Commerce", "Beauty Supply", "Retail", "Storefront"],
    type: "E-Commerce Store",
    year: "2024",
  },
  {
    id: 5,
    images: [redoit1],
    title: "ReDoIt",
    subtitle: "Visual Markup & Revision Tool",
    description:
      "A browser-based markup tool for project managers and teams. Load any website, drop doodles, arrows, boxes, pins, and written instructions directly onto the page, then save the annotated view as a screenshot to send to the team for faster, clearer revisions.",
    tags: ["Web App", "Collaboration", "Feedback Tool", "Productivity"],
    type: "Markup & Review Tool",
    year: "2026",
  },
];

// ── Filmstrip preview (5 images visible at once, windowed by offset) ────────
const FILM_SIZE = 5;

function DevCarousel({
  images,
  offset,
  title,
  onNext,
}: {
  images: string[];
  offset: number;
  title: string;
  onNext: () => void;
}) {
  const visible = Array.from({ length: Math.min(FILM_SIZE, images.length) }, (_, i) =>
    images[(offset + i) % images.length]
  );

  return (
    <div className="dev-carousel">
      <div className="dev-carousel-track">
        {visible.map((src, i) => (
          <img
            key={`${offset}-${i}`}
            src={src}
            alt={`${title} screenshot ${((offset + i) % images.length) + 1}`}
            className="dev-carousel-img"
            loading="lazy"
          />
        ))}
      </div>
      <button
        type="button"
        className="dev-carousel-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Show next screenshots"
      >
        →
      </button>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function Dev() {
  const [lightbox, setLightbox] = useState<{ projectIdx: number; imageIdx: number } | null>(null);
  const [filmOffset, setFilmOffset] = useState<Record<number, number>>({});

  const navigateLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    const images = projects[lightbox.projectIdx].images;
    const next = (lightbox.imageIdx + dir + images.length) % images.length;
    setLightbox({ projectIdx: lightbox.projectIdx, imageIdx: next });
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
          min-width: 0;
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
          min-width: 0;
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

        /* ── Filmstrip preview (all images visible at once) ── */
        .dev-carousel {
          position: relative;
          width: 100%;
          height: 480px;
          background: rgba(0,0,0,0.4);
        }

        .dev-carousel-track {
          display: flex;
          width: 100%;
          height: 100%;
          gap: 2px;
        }

        .dev-carousel-img {
          flex: 1 1 0;
          min-width: 0;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        .dev-carousel-next {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          background: rgba(4,4,8,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,200,80,0.4);
          border-radius: 50%;
          color: #ffc850;
          font-size: 1.1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: background 0.2s, transform 0.2s;
        }

        .dev-carousel-next:hover { background: rgba(255,200,80,0.18); }
        .dev-carousel-next:active { transform: scale(0.92); }

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

        .dev-row-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.9rem;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 3px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ffc850;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s;
        }

        .dev-row-link:hover {
          background: rgba(255,200,80,0.16);
          border-color: rgba(255,200,80,0.55);
        }

        .dev-row-link svg {
          width: 12px; height: 12px;
          fill: #ffc850;
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

          /* Carousel rows (Tetelestai Bible, Track8out) — one image at a time on
             mobile; tap the arrow to step to the next screenshot. Height is driven
             by the image's own aspect ratio so it fills the frame without cropping. */
          .dev-carousel { height: auto; }
          .dev-carousel-track {
            height: auto;
            align-items: center;
            overflow: hidden;
          }
          .dev-carousel-img {
            flex: 0 0 100%;
            width: 100%;
            height: auto;
            aspect-ratio: 9 / 20;
            object-fit: contain;
          }
          .dev-carousel-img:not(:first-child) { display: none; }
          .dev-carousel-next {
            bottom: 10px;
            right: 10px;
            width: 44px;
            height: 44px;
          }

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
            <img src={projects[lightbox.projectIdx].images[lightbox.imageIdx]} alt="Project preview" />
          </div>

          <button className="dev-lb-nav dev-lb-next"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>›</button>

          <div className="dev-lb-label">
            <span className="dev-lb-title">{projects[lightbox.projectIdx].title}</span>
            <span className="dev-lb-counter">
              <span>{lightbox.imageIdx + 1}</span> of {projects[lightbox.projectIdx].images.length}
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
                  {project.carousel ? (
                    <DevCarousel
                      images={project.images}
                      offset={filmOffset[project.id] ?? 0}
                      title={project.title}
                      onNext={() => {
                        setFilmOffset((o) => ({
                          ...o,
                          [project.id]: ((o[project.id] ?? 0) + 1) % project.images.length,
                        }));
                      }}
                    />
                  ) : (
                    <>
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="dev-row-screenshot"
                        loading="lazy"
                      />
                      <div className="dev-screenshot-zoom">
                        <button
                          className="dev-screenshot-zoom-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightbox({ projectIdx: idx, imageIdx: 0 });
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
                    </>
                  )}
                </div>

                {/* Bottom info */}
                <div className="dev-row-bottom">
                  <p className="dev-row-desc">{project.description}</p>
                  <div className="dev-row-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="dev-row-tag">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dev-row-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/></svg>
                      {project.link.label}
                    </a>
                  )}
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
            { num: "2",  label: "Mobile Apps Shipped" },
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
