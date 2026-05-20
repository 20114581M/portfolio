import { useState, useRef } from "react";

// ── Import your assets ──────────────────────────────────────────────────────
//MobileApp
import ma1 from "../src/assets/mobileapp/657520324_122128339581079271_413717394934998652_n.jpg";
import ma2 from "../src/assets/mobileapp/657523475_122128339845079271_5936915331887691005_n.jpg";
import ma3 from "../src/assets/mobileapp/657525265_122128339719079271_5688376841275939431_n.jpg";
import ma4 from "../src/assets/mobileapp/657675461_122128340217079271_103663688234942863_n.jpg";
import ma5 from "../src/assets/mobileapp/658154758_122128340319079271_8594505295325550939_n.jpg";
import ma6 from "../src/assets/mobileapp/658221870_122128339755079271_3023340636135234144_n.jpg";
import ma7 from "../src/assets/mobileapp/659130268_122128339677079271_3786608590482122565_n.jpg";
import ma8 from "../src/assets/mobileapp/659172919_122128339545079271_8074764372666652035_n.jpg";
import ma9 from "../src/assets/mobileapp/659566311_122128339803079271_3539499664342588014_n.jpg";
import ma10 from "../src/assets/mobileapp/659642222_122128340115079271_7906012138457610164_n.jpg";
import ma11 from "../src/assets/mobileapp/659700554_122128339635079271_4434395129980663555_n.jpg";
import ma12 from "../src/assets/mobileapp/659876406_122128339965079271_2556805708608569485_n.jpg";
import ma13 from "../src/assets/mobileapp/660295965_122128339503079271_8104245686776742900_n.jpg";
import ma14 from "../src/assets/mobileapp/660403233_122128340061079271_7486745113921762045_n.jpg";
import ma15 from "../src/assets/mobileapp/660537003_122128340265079271_6786351733289619190_n.jpg";
import ma16 from "../src/assets/mobileapp/660616485_122128340163079271_6893266438101061807_n.jpg";
import ma17 from "../src/assets/mobileapp/660995204_122128339911079271_5549167849317527942_n.jpg";
import ma18 from "../src/assets/mobileapp/661803070_122128340013079271_7204857263889233147_n.jpg";

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
type Category = "all" | "webdesign" | "marketing" | "shirtdesign" | "mobileapp";

interface Item {
  id: number;
  src: string;
  category: Exclude<Category, "all">;
  label: string;
  tag: string;
}

// First 6 mobile app shots used as highlights
const mobileHighlights = [ma1, ma2, ma3, ma4, ma5, ma6];

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
  { id: 14, src: mf7,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 15, src: mf8,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 16, src: mf9,  category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 17, src: mf10, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 18, src: mf11, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 19, src: mf12, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  { id: 20, src: mf13, category: "marketing",   label: "Marketing File", tag: "Print / Digital" },
  // Shirt Designs
  { id: 21, src: sd1,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 22, src: sd2,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 23, src: sd3,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 24, src: sd4,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 25, src: sd5,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 26, src: sd6,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 27, src: sd7,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 28, src: sd8,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  { id: 29, src: sd9,  category: "shirtdesign", label: "Shirt Design",   tag: "Apparel" },
  // Mobile App
  { id: 30, src: ma1,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 31, src: ma2,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 32, src: ma3,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 33, src: ma4,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 34, src: ma5,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 35, src: ma6,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 36, src: ma7,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 37, src: ma8,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 38, src: ma9,  category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 39, src: ma10, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 40, src: ma11, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 41, src: ma12, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 42, src: ma13, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 43, src: ma14, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 44, src: ma15, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 45, src: ma16, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 46, src: ma17, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
  { id: 47, src: ma18, category: "mobileapp",   label: "Mobile App",     tag: "iOS / Android" },
];

const filters: { value: Category; label: string; count: number }[] = [
  { value: "all",         label: "All Work",    count: items.length },
  { value: "webdesign",   label: "Web Design",  count: items.filter(i => i.category === "webdesign").length },
  { value: "marketing",   label: "Marketing",   count: items.filter(i => i.category === "marketing").length },
  { value: "shirtdesign", label: "Apparel",     count: items.filter(i => i.category === "shirtdesign").length },
  { value: "mobileapp",   label: "Mobile App",  count: items.filter(i => i.category === "mobileapp").length },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Graphics() {
  const [active, setActive]       = useState<Category>("webdesign");
  const [lightbox, setLightbox]   = useState<{ src: string; idx: number } | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const APK_LINK = "https://drive.google.com/file/d/1jQZBy2oId9BuqMHeB9NTXVmEgBCt2WLx/view?usp=drivesdk";

  const handleDownloadConfirm = () => {
    window.open(APK_LINK, "_blank", "noopener,noreferrer");
    setShowInstall(false);
  };

  const visible = active === "all" ? items : items.filter((i) => i.category === active);

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

  const scrollStrip = (dir: 1 | -1) => {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
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

        /* ── Mobile App Highlights ── */
        .ma-highlights {
          position: relative;
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 6px;
          background: rgba(255,200,80,0.02);
          padding: 1.5rem 0 1.5rem;
          overflow: hidden;
        }

        .ma-highlights::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,200,80,0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .ma-highlights-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem 1.2rem;
        }

        .ma-highlights-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ma-highlights-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ma-highlights-eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: #ffc850;
          display: inline-block;
        }

        .ma-highlights-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }

        .ma-highlights-nav {
          display: flex;
          gap: 0.4rem;
        }

        .ma-nav-btn {
          width: 32px;
          height: 32px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          line-height: 1;
        }

        .ma-nav-btn:hover {
          background: rgba(255,200,80,0.1);
          border-color: rgba(255,200,80,0.5);
        }

        /* Horizontal scroll strip */
        .ma-strip-outer {
          position: relative;
        }

        .ma-strip-outer::before,
        .ma-strip-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 60px;
          z-index: 2;
          pointer-events: none;
        }

        .ma-strip-outer::before {
          left: 0;
          background: linear-gradient(90deg, rgba(4,4,8,0.7), transparent);
        }

        .ma-strip-outer::after {
          right: 0;
          background: linear-gradient(-90deg, rgba(4,4,8,0.7), transparent);
        }

        .ma-strip {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 0 1.5rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .ma-strip::-webkit-scrollbar { display: none; }

        /* Phone frame card */
        .ma-phone-card {
          flex: 0 0 auto;
          width: 160px;
          scroll-snap-align: start;
          cursor: pointer;
          position: relative;
        }

        .ma-phone-frame {
          position: relative;
          width: 160px;
          height: 280px;
          border-radius: 22px;
          overflow: hidden;
          border: 2px solid rgba(255,200,80,0.2);
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.6),
            0 20px 50px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.07);
          transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94),
                      border-color 0.3s,
                      box-shadow 0.35s;
        }

        .ma-phone-card:hover .ma-phone-frame {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(255,200,80,0.55);
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.6),
            0 30px 70px rgba(0,0,0,0.65),
            0 0 30px rgba(255,200,80,0.08),
            inset 0 1px 0 rgba(255,255,255,0.07);
        }

        .ma-phone-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: filter 0.3s, transform 0.4s;
          filter: brightness(0.88) saturate(0.9);
        }

        .ma-phone-card:hover .ma-phone-frame img {
          filter: brightness(1) saturate(1.1);
          transform: scale(1.04);
        }

        /* notch decoration */
        .ma-phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 5px;
          background: rgba(0,0,0,0.55);
          border-radius: 10px;
          z-index: 3;
        }

        .ma-phone-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,200,80,0.06) 0%, transparent 40%);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
          pointer-events: none;
        }

        .ma-phone-card:hover .ma-phone-glow { opacity: 1; }

        .ma-phone-zoom {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 24px;
          height: 24px;
          background: rgba(255,200,80,0.15);
          border: 1px solid rgba(255,200,80,0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.7);
          transition: opacity 0.25s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          z-index: 4;
        }

        .ma-phone-card:hover .ma-phone-zoom {
          opacity: 1;
          transform: scale(1);
        }

        .ma-phone-zoom svg {
          width: 11px; height: 11px;
          stroke: #ffc850;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .ma-shot-num {
          margin-top: 0.55rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          text-align: center;
          transition: color 0.2s;
        }

        .ma-phone-card:hover .ma-shot-num { color: rgba(255,200,80,0.5); }

        /* See all CTA */
        .ma-see-all {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 1rem 1.5rem 0;
        }

        .ma-see-all-btn {
          background: transparent;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.55);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s;
          padding: 0;
        }

        .ma-see-all-btn:hover { color: #ffc850; }

        .ma-see-all-btn::after {
          content: '→';
          font-size: 0.75rem;
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

        /* Mobile app grid: portrait-friendly 3/4 ratio */
        .graphics-grid.mobileapp-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .graphics-grid.mobileapp-grid .graphics-card {
          aspect-ratio: 9/16;
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

        /* ── APK Download Banner ── */
        .ma-download-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 1rem 1.4rem;
          background: linear-gradient(135deg, rgba(255,200,80,0.07) 0%, rgba(255,200,80,0.03) 100%);
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }
        .ma-download-banner::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #ffc850;
          border-radius: 6px 0 0 6px;
        }
        .ma-download-banner-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1 1 200px;
        }
        .ma-download-icon {
          width: 42px; height: 42px;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.3);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ma-download-icon svg { width: 20px; height: 20px; fill: #ffc850; }
        .ma-download-text-group { display: flex; flex-direction: column; gap: 0.2rem; }
        .ma-download-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem; letter-spacing: 0.06em; color: #fff; line-height: 1;
        }
        .ma-download-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
        }
        .ma-download-btn {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.6rem 1.3rem;
          background: #ffc850; border: none; border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.65rem;
          font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
          color: #0a0a0f; cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          white-space: nowrap; flex-shrink: 0;
          box-shadow: 0 4px 18px rgba(255,200,80,0.25);
        }
        .ma-download-btn:hover {
          background: #ffd370; transform: translateY(-1px);
          box-shadow: 0 8px 28px rgba(255,200,80,0.35);
        }
        .ma-download-btn svg { width: 14px; height: 14px; fill: #0a0a0f; }

        /* ── Install Modal ── */
        .install-modal-overlay {
          position: fixed; inset: 0;
          background: rgba(2,2,6,0.88);
          backdrop-filter: blur(16px);
          z-index: 2000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          animation: lbFadeIn 0.2s ease;
        }
        .install-modal {
          background: #0d0d14;
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 10px;
          max-width: 480px; width: 100%;
          overflow: hidden;
          animation: lbSlideUp 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
          box-shadow: 0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,200,80,0.05);
        }
        .install-modal-header {
          padding: 1.5rem 1.5rem 0;
          display: flex; align-items: flex-start; gap: 1rem;
        }
        .install-modal-android-icon {
          width: 48px; height: 48px;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .install-modal-android-icon svg { width: 26px; height: 26px; fill: #ffc850; }
        .install-modal-title-block { display: flex; flex-direction: column; gap: 0.2rem; padding-top: 0.1rem; }
        .install-modal-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem; letter-spacing: 0.06em; color: #fff; line-height: 1;
        }
        .install-modal-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(255,200,80,0.6);
        }
        .install-modal-body {
          padding: 1.25rem 1.5rem;
          display: flex; flex-direction: column; gap: 0.9rem;
        }
        .install-modal-warning {
          display: flex; gap: 0.75rem; padding: 1rem;
          background: rgba(255,160,40,0.06);
          border: 1px solid rgba(255,160,40,0.2);
          border-radius: 6px; align-items: flex-start;
        }
        .install-modal-warning-icon { font-size: 1.1rem; line-height: 1; flex-shrink: 0; margin-top: 1px; }
        .install-modal-warning-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem; color: rgba(255,255,255,0.6); line-height: 1.65;
        }
        .install-modal-warning-text strong { color: #ffc850; font-weight: 500; }
        .install-modal-steps { display: flex; flex-direction: column; gap: 0.55rem; }
        .install-modal-step { display: flex; align-items: flex-start; gap: 0.75rem; }
        .install-step-num {
          width: 20px; height: 20px;
          background: rgba(255,200,80,0.12);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 50%;
          font-family: 'Bebas Neue', sans-serif; font-size: 0.7rem;
          letter-spacing: 0.05em; color: #ffc850;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .install-step-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; color: rgba(255,255,255,0.5); line-height: 1.5;
        }
        .install-step-text strong { color: rgba(255,255,255,0.85); font-weight: 500; }
        .install-step-text code {
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 3px; padding: 1px 6px;
          font-size: 0.72rem; color: #ffc850; font-family: monospace;
        }
        .install-modal-footer {
          padding: 1rem 1.5rem 1.5rem;
          display: flex; gap: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .install-modal-cancel {
          flex: 1; padding: 0.7rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.62rem;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.35); cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .install-modal-cancel:hover {
          border-color: rgba(255,255,255,0.25); color: rgba(255,255,255,0.6);
        }
        .install-modal-confirm {
          flex: 2; padding: 0.7rem;
          background: #ffc850; border: none; border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.62rem;
          font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
          color: #0a0a0f; cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          box-shadow: 0 4px 18px rgba(255,200,80,0.3);
        }
        .install-modal-confirm:hover {
          background: #ffd370; box-shadow: 0 6px 24px rgba(255,200,80,0.4);
          transform: translateY(-1px);
        }
        .install-modal-confirm svg { width: 13px; height: 13px; fill: #0a0a0f; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .graphics-left { position: static; }
          .graphics-grid { grid-template-columns: repeat(2, 1fr); }
          .graphics-grid.mobileapp-grid { grid-template-columns: repeat(3, 1fr); }
          .graphics-lb-prev { left: 0.5rem; }
          .graphics-lb-next { right: 0.5rem; }
          .ma-phone-card { width: 130px; }
          .ma-phone-frame { width: 130px; height: 228px; }
        }

        @media (max-width: 480px) {
          .graphics-grid  { grid-template-columns: 1fr; }
          .graphics-grid.mobileapp-grid { grid-template-columns: repeat(2, 1fr); }
          .graphics-inner { flex-direction: column; gap: 2.5rem; }
        }
      `}</style>

      {/* ── Install Modal ── */}
      {showInstall && (
        <div className="install-modal-overlay" onClick={() => setShowInstall(false)}>
          <div className="install-modal" onClick={(e) => e.stopPropagation()}>

            <div className="install-modal-header">
              <div className="install-modal-android-icon">
                {/* Android robot icon */}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.95 0-1.84.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.14 3.07 6 4.76 6 6.7V7h12v-.3c0-1.94-1.14-3.63-2.47-4.54zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                </svg>
              </div>
              <div className="install-modal-title-block">
                <span className="install-modal-title">Download for Android</span>
                <span className="install-modal-subtitle">APK — Sideload Install Required</span>
              </div>
            </div>

            <div className="install-modal-body">
              <div className="install-modal-warning">
                <span className="install-modal-warning-icon">⚠️</span>
                <p className="install-modal-warning-text">
                  This app is distributed as an <strong>APK file outside the Google Play Store</strong>.
                  Android will block it by default to protect you. You'll need to temporarily
                  enable <strong>"Install Unknown Apps"</strong> — it's safe to disable again after installing.
                </p>
              </div>

              <div className="install-modal-steps">
                <div className="install-modal-step">
                  <span className="install-step-num">1</span>
                  <p className="install-step-text">
                    Download the <strong>.apk</strong> file from Google Drive to your Android device.
                  </p>
                </div>
                <div className="install-modal-step">
                  <span className="install-step-num">2</span>
                  <p className="install-step-text">
                    Go to <strong>Settings → Apps → Special App Access → Install Unknown Apps</strong>,
                    then allow your file manager or browser to install unknown apps.
                  </p>
                </div>
                <div className="install-modal-step">
                  <span className="install-step-num">3</span>
                  <p className="install-step-text">
                    Open the downloaded <code>.apk</code> file and tap <strong>Install</strong>.
                  </p>
                </div>
                <div className="install-modal-step">
                  <span className="install-step-num">4</span>
                  <p className="install-step-text">
                    Once installed, you can <strong>re-disable</strong> "Install Unknown Apps" for security.
                  </p>
                </div>
              </div>
            </div>

            <div className="install-modal-footer">
              <button className="install-modal-cancel" onClick={() => setShowInstall(false)}>
                Cancel
              </button>
              <button className="install-modal-confirm" onClick={handleDownloadConfirm}>
                <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/></svg>
                I Understand — Download
              </button>
            </div>

          </div>
        </div>
      )}

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
              <span className="graphics-intro-pill">Mobile App</span>
            </div>

            <p className="graphics-bio">
              A selection of <em>visual work</em> spanning <strong>website UI design</strong>,
              print &amp; digital <strong>marketing materials</strong>, custom{" "}
              <strong>shirt / apparel graphics</strong>, and <strong>mobile app</strong> design.
              Every piece is crafted with intention — designed to communicate clearly and leave a lasting impression.
            </p>

            <div className="graphics-divider" />

            {/* ── Mobile App Highlights strip (always visible) ── */}
            <div className="ma-highlights">
              <div className="ma-highlights-header">
                <div className="ma-highlights-title-group">
                  <span className="ma-highlights-eyebrow">Featured</span>
                  <span className="ma-highlights-label">App Highlights</span>
                </div>
                <div className="ma-highlights-nav">
                  <button className="ma-nav-btn" onClick={() => scrollStrip(-1)}>‹</button>
                  <button className="ma-nav-btn" onClick={() => scrollStrip(1)}>›</button>
                </div>
              </div>

              <div className="ma-strip-outer">
                <div className="ma-strip" ref={stripRef}>
                  {mobileHighlights.map((src, i) => (
                    <div
                      key={i}
                      className="ma-phone-card"
                      onClick={() => {
                        // Open in lightbox using the mobileapp filtered list
                        setActive("mobileapp");
                        setLightbox({ src, idx: i });
                      }}
                    >
                      <div className="ma-phone-frame">
                        <div className="ma-phone-notch" />
                        <img src={src} alt={`App screenshot ${i + 1}`} loading="lazy" />
                        <div className="ma-phone-glow" />
                        <div className="ma-phone-zoom">
                          <svg viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8"  x2="11" y2="14" />
                            <line x1="8"  y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </div>
                      <div className="ma-shot-num">
                        {String(i + 1).padStart(2, "0")} / {String(mobileHighlights.length).padStart(2, "0")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ma-see-all">
                <button
                  className="ma-see-all-btn"
                  onClick={() => setActive("mobileapp")}
                >
                  See all {items.filter(i => i.category === "mobileapp").length} shots
                </button>
              </div>

              {/* Download APK banner */}
              <div style={{ padding: "0 1.5rem 0.5rem" }}>
                <div className="ma-download-banner">
                  <div className="ma-download-banner-left">
                    <div className="ma-download-icon">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.95 0-1.84.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.14 3.07 6 4.76 6 6.7V7h12v-.3c0-1.94-1.14-3.63-2.47-4.54zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                      </svg>
                    </div>
                    <div className="ma-download-text-group">
                      <span className="ma-download-title">Try the App</span>
                      <span className="ma-download-sub">Android APK · Free Download</span>
                    </div>
                  </div>
                  <button className="ma-download-btn" onClick={() => setShowInstall(true)}>
                    <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/></svg>
                    Download APK
                  </button>
                </div>
              </div>
            </div>

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
            <div className={`graphics-grid${active === "mobileapp" ? " mobileapp-grid" : ""}`}>
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