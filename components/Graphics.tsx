import { useState, useRef } from "react";

// ── Import your assets ──────────────────────────────────────────────────────
// MobileApp
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
type Category = "all" | "webdesign" | "marketing" | "shirtdesign" | "mobileapp";
interface Item { id: number; src: string; category: Exclude<Category,"all">; label: string; tag: string; }

const mobileHighlights = [ma1, ma2, ma3, ma4, ma5, ma6];

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
  { id:30, src:ma1,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:31, src:ma2,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:32, src:ma3,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:33, src:ma4,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:34, src:ma5,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:35, src:ma6,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:36, src:ma7,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:37, src:ma8,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:38, src:ma9,  category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:39, src:ma10, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:40, src:ma11, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:41, src:ma12, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:42, src:ma13, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:43, src:ma14, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:44, src:ma15, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:45, src:ma16, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:46, src:ma17, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
  { id:47, src:ma18, category:"mobileapp",   label:"Mobile App",     tag:"iOS / Android" },
];

const filters: { value: Category; label: string; count: number }[] = [
  { value:"all",         label:"All Work",   count:items.length },
  { value:"webdesign",   label:"Web Design", count:items.filter(i=>i.category==="webdesign").length },
  { value:"marketing",   label:"Marketing",  count:items.filter(i=>i.category==="marketing").length },
  { value:"shirtdesign", label:"Apparel",    count:items.filter(i=>i.category==="shirtdesign").length },
  { value:"mobileapp",   label:"Mobile App", count:items.filter(i=>i.category==="mobileapp").length },
];

export default function Graphics() {
  const [active, setActive]           = useState<Category>("webdesign");
  const [lightbox, setLightbox]       = useState<{ src: string; idx: number } | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const APK_LINK = "https://drive.google.com/file/d/1jQZBy2oId9BuqMHeB9NTXVmEgBCt2WLx/view?usp=drivesdk";

  const handleDownloadConfirm = () => {
    window.open(APK_LINK, "_blank", "noopener,noreferrer");
    setShowInstall(false);
  };

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

  const scrollStrip = (dir: 1 | -1) => {
    stripRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
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
          gap: 0.4rem;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          max-width: 100%;
        }
        .gfx-filters::-webkit-scrollbar { display: none; }
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

        /* ── App Highlights ── */
        .ma-hl {
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 8px;
          background: rgba(255,200,80,0.02);
          overflow: hidden;
          width: 100%;
          max-width: 100%;
        }

        .ma-hl-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.25rem 1rem;
          gap: 0.75rem;
        }
        .ma-hl-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .ma-hl-eyebrow::before {
          content: '';
          width: 14px; height: 1px;
          background: #ffc850;
          display: inline-block;
        }
        .ma-hl-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .ma-hl-nav {
          display: flex;
          gap: 0.35rem;
          flex-shrink: 0;
        }
        .ma-nav-btn {
          width: 36px; height: 36px;
          background: rgba(8,8,12,0.8);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 2px;
          color: #ffc850;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          line-height: 1;
        }
        .ma-nav-btn:hover { background: rgba(255,200,80,0.1); }

        /* Scroll strip */
        .ma-strip-wrap {
  position: relative;
  width: 100%;
  max-width: 100%;
  /* DELETE: overflow: hidden; */
}
        .ma-strip-wrap::before,
        .ma-strip-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .ma-strip-wrap::before { left:0;  background: linear-gradient(90deg,  rgba(4,4,8,0.7), transparent); }
        .ma-strip-wrap::after  { right:0; background: linear-gradient(-90deg, rgba(4,4,8,0.7), transparent); }

        .ma-strip {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 0 1.25rem 0.75rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .ma-strip::-webkit-scrollbar { display: none; }

        .ma-card {
          flex: 0 0 auto;
          width: 140px;
          scroll-snap-align: start;
          cursor: pointer;
        }
        .ma-frame {
          width: 140px;
          height: 246px;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid rgba(255,200,80,0.2);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          position: relative;
          transition: transform 0.3s, border-color 0.3s;
        }
        .ma-card:hover .ma-frame {
          transform: translateY(-5px) scale(1.02);
          border-color: rgba(255,200,80,0.5);
        }
        .ma-frame img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88);
          transition: filter 0.3s;
        }
        .ma-card:hover .ma-frame img { filter: brightness(1); }
        .ma-notch {
          position: absolute;
          top: 8px; left: 50%;
          transform: translateX(-50%);
          width: 36px; height: 4px;
          background: rgba(0,0,0,0.5);
          border-radius: 10px;
          z-index: 3;
        }
        .ma-card-num {
          margin-top: 0.45rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          text-align: center;
        }

        /* See all row */
        .ma-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0.5rem 1.25rem 0.75rem;
        }
        .ma-see-all {
          background: transparent;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.55);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0;
          transition: color 0.2s;
          min-height: 40px;
        }
        .ma-see-all:hover { color: #ffc850; }
        .ma-see-all::after { content: '→'; font-size: 0.7rem; }

        /* ── Download Banner ── */
        .ma-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.9rem 1.25rem;
          margin: 0 1.25rem 1.25rem;
          background: linear-gradient(135deg, rgba(255,200,80,0.07), rgba(255,200,80,0.02));
          border: 1px solid rgba(255,200,80,0.28);
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }
        .ma-banner::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #ffc850;
        }
        .ma-banner-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
          flex: 1;
        }
        .ma-banner-icon {
          width: 38px; height: 38px;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ma-banner-icon svg { width: 18px; height: 18px; fill: #ffc850; }
        .ma-banner-text { display: flex; flex-direction: column; gap: 0.15rem; min-width: 0; }
        .ma-banner-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 1;
        }
        .ma-banner-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
          white-space: nowrap;
        }
        .ma-dl-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          background: #ffc850;
          border: none;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0a0a0f;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(255,200,80,0.3);
          min-height: 40px;
        }
        .ma-dl-btn:hover { background: #ffd370; transform: translateY(-1px); }
        .ma-dl-btn svg { width: 12px; height: 12px; fill: #0a0a0f; }

        /* ── Grid ── */
        .gfx-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
          width: 100%;
        }
        .gfx-grid.app-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .gfx-card {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: rgba(8,8,12,0.95);
          cursor: pointer;
        }
        .gfx-grid.app-grid .gfx-card { aspect-ratio: 9/16; }
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

        /* ── Install Modal ── */
        .inst-overlay {
          position: fixed; inset: 0;
          background: rgba(2,2,6,0.9);
          backdrop-filter: blur(14px);
          z-index: 2000;
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }
        .inst-modal {
          background: #0d0d14;
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 10px;
          max-width: 460px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease;
          box-shadow: 0 40px 100px rgba(0,0,0,0.7);
        }
        .inst-header {
          padding: 1.4rem 1.4rem 0;
          display: flex; align-items: flex-start; gap: 0.9rem;
        }
        .inst-icon {
          width: 44px; height: 44px;
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.2);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .inst-icon svg { width: 24px; height: 24px; fill: #ffc850; }
        .inst-title-block { display: flex; flex-direction: column; gap: 0.15rem; padding-top: 0.1rem; }
        .inst-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem; letter-spacing: 0.06em; color: #fff; line-height: 1;
        }
        .inst-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,200,80,0.6);
        }
        .inst-body {
          padding: 1.1rem 1.4rem;
          display: flex; flex-direction: column; gap: 0.8rem;
        }
        .inst-warn {
          display: flex; gap: 0.65rem;
          padding: 0.9rem;
          background: rgba(255,160,40,0.06);
          border: 1px solid rgba(255,160,40,0.2);
          border-radius: 6px;
          align-items: flex-start;
        }
        .inst-warn-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }
        .inst-warn-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem; color: rgba(255,255,255,0.58); line-height: 1.6;
        }
        .inst-warn-text strong { color: #ffc850; font-weight: 500; }
        .inst-steps { display: flex; flex-direction: column; gap: 0.5rem; }
        .inst-step { display: flex; align-items: flex-start; gap: 0.65rem; }
        .inst-step-num {
          width: 18px; height: 18px;
          background: rgba(255,200,80,0.1);
          border: 1px solid rgba(255,200,80,0.25);
          border-radius: 50%;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.65rem; color: #ffc850;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .inst-step-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.76rem; color: rgba(255,255,255,0.48); line-height: 1.5;
        }
        .inst-step-text strong { color: rgba(255,255,255,0.82); font-weight: 500; }
        .inst-step-text code {
          background: rgba(255,200,80,0.08);
          border: 1px solid rgba(255,200,80,0.15);
          border-radius: 3px; padding: 1px 5px;
          font-size: 0.7rem; color: #ffc850;
        }
        .inst-footer {
          padding: 0.9rem 1.4rem 1.4rem;
          display: flex; gap: 0.65rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .inst-cancel {
          flex: 1; padding: 0.65rem;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.6rem;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.32); cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          min-height: 44px;
        }
        .inst-cancel:hover { border-color: rgba(255,255,255,0.25); color: rgba(255,255,255,0.55); }
        .inst-confirm {
          flex: 2; padding: 0.65rem;
          background: #ffc850; border: none; border-radius: 4px;
          font-family: 'DM Sans', sans-serif; font-size: 0.6rem;
          font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: #0a0a0f; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 4px 16px rgba(255,200,80,0.28);
          min-height: 44px;
        }
        .inst-confirm:hover { background: #ffd370; transform: translateY(-1px); }
        .inst-confirm svg { width: 12px; height: 12px; fill: #0a0a0f; }

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
          .gfx-grid { grid-template-columns: repeat(2, 1fr); }
          .gfx-grid.app-grid { grid-template-columns: repeat(3, 1fr); }
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
          .gfx-grid          { grid-template-columns: repeat(2, 1fr); }
          .gfx-grid.app-grid { grid-template-columns: repeat(2, 1fr); }

          /* App highlight section */
          .ma-hl { border-radius: 6px; }
          .ma-hl-header { padding: 0.9rem 0.9rem 0.65rem; }
          .ma-hl-title  { font-size: 1.1rem; }

          /* Phone strip cards — fit inside screen */
          .ma-strip { padding: 0 0.9rem 0.6rem; gap: 8px; }
          .ma-card  { width: 105px; }
          .ma-frame { width: 105px; height: 186px; border-radius: 14px; }
          .ma-notch { width: 26px; top: 5px; height: 3px; }
          .ma-card-num { font-size: 0.45rem; margin-top: 0.35rem; }

          .ma-footer { padding: 0.35rem 0.9rem 0.55rem; }

          /* Download banner — vertical stack */
          .ma-banner {
            flex-direction: column;
            align-items: stretch;
            margin: 0 0.9rem 0.9rem;
            padding: 0.85rem 1rem;
            gap: 0.75rem;
          }
          .ma-banner-left { width: 100%; }
          .ma-dl-btn {
            width: 100%;
            justify-content: center;
            padding: 0.75rem;
            font-size: 0.62rem;
            min-height: 44px;
          }

          /* Lightbox */
          .gfx-lb { padding: 0.75rem 0.4rem; }
          .gfx-lb-img img { max-width: 96vw; max-height: 72vh; }
          .gfx-lb-prev { left: 0.2rem; }
          .gfx-lb-next { right: 0.2rem; }
          .gfx-lb-close { top: 0.5rem; right: 0.5rem; width: 36px; height: 36px; font-size: 0.8rem; }
          .gfx-lb-nav   { width: 36px; height: 36px; font-size: 1.1rem; }

          /* Install modal — bottom sheet */
          .inst-overlay { align-items: flex-end; padding: 0; }
          .inst-modal   { border-radius: 16px 16px 0 0; max-height: 88vh; }
          .inst-header  { padding: 1.25rem 1.25rem 0; }
          .inst-body    { padding: 1rem 1.25rem; }
          .inst-footer  {
            flex-direction: column;
            padding: 0.75rem 1.25rem 2rem;
            gap: 0.5rem;
          }
          .inst-cancel,
          .inst-confirm { flex: unset; width: 100%; padding: 0.85rem; min-height: 48px; }
        }
          

        /* ─────────── SMALL PHONES (≤ 390px) ─────────── */
        @media (max-width: 390px) {
          .gfx-inner { padding: 1.75rem 0.75rem; }
          .gfx-heading { font-size: clamp(2rem, 12vw, 2.6rem); }
          .gfx-grid          { grid-template-columns: 1fr; }
          .gfx-grid.app-grid { grid-template-columns: repeat(2, 1fr); }
          .ma-card  { width: 90px; }
          .ma-frame { width: 90px; height: 160px; border-radius: 12px; }
        }
          @media (max-width: 600px) {
  .gfx-filters {
   
        width: -webkit-fill-available;
        display: flex;
        flex-direction: column;
  }
}
      `}</style>

      {/* ── Install Modal ── */}
      {showInstall && (
        <div className="inst-overlay" onClick={() => setShowInstall(false)}>
          <div className="inst-modal" onClick={e => e.stopPropagation()}>
            <div className="inst-header">
              <div className="inst-icon">
                <svg viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.95 0-1.84.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.14 3.07 6 4.76 6 6.7V7h12v-.3c0-1.94-1.14-3.63-2.47-4.54zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>
              </div>
              <div className="inst-title-block">
                <span className="inst-title">Download for Android</span>
                <span className="inst-subtitle">APK — Sideload Install Required</span>
              </div>
            </div>
            <div className="inst-body">
              <div className="inst-warn">
                <span className="inst-warn-icon">⚠️</span>
                <p className="inst-warn-text">
                  This app is distributed as an <strong>APK outside the Google Play Store</strong>.
                  Android blocks these by default. You'll need to temporarily enable{" "}
                  <strong>"Install Unknown Apps"</strong> — safe to turn off again after.
                </p>
              </div>
              <div className="inst-steps">
                <div className="inst-step">
                  <span className="inst-step-num">1</span>
                  <p className="inst-step-text">Download the <strong>.apk</strong> file from Google Drive to your Android device.</p>
                </div>
                <div className="inst-step">
                  <span className="inst-step-num">2</span>
                  <p className="inst-step-text">Go to <strong>Settings → Apps → Special App Access → Install Unknown Apps</strong> and allow your browser or file manager.</p>
                </div>
                <div className="inst-step">
                  <span className="inst-step-num">3</span>
                  <p className="inst-step-text">Open the downloaded <code>.apk</code> and tap <strong>Install</strong>.</p>
                </div>
                <div className="inst-step">
                  <span className="inst-step-num">4</span>
                  <p className="inst-step-text">After installing, <strong>re-disable</strong> "Install Unknown Apps" for security.</p>
                </div>
              </div>
            </div>
            <div className="inst-footer">
              <button className="inst-cancel" onClick={() => setShowInstall(false)}>Cancel</button>
              <button className="inst-confirm" onClick={handleDownloadConfirm}>
                <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/></svg>
                I Understand — Download
              </button>
            </div>
          </div>
        </div>
      )}

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
              <span className="gfx-pill">Mobile App</span>
            </div>

            <p className="gfx-bio">
              A selection of <em>visual work</em> spanning <strong>website UI design</strong>,
              print &amp; digital <strong>marketing materials</strong>, custom{" "}
              <strong>shirt / apparel graphics</strong>, and <strong>mobile app</strong> design.
              Every piece is crafted with intention — designed to communicate clearly and leave a lasting impression.
            </p>

            <div className="gfx-divider" />

            {/* App Highlights */}
            <div className="ma-hl">
              <div className="ma-hl-header">
                <div>
                  <div className="ma-hl-eyebrow">Featured</div>
                  <div className="ma-hl-title">App Highlights</div>
                </div>
                <div className="ma-hl-nav">
                  <button className="ma-nav-btn" onClick={() => scrollStrip(-1)}>‹</button>
                  <button className="ma-nav-btn" onClick={() => scrollStrip(1)}>›</button>
                </div>
              </div>

              <div className="ma-strip-wrap">
                <div className="ma-strip" ref={stripRef}>
                  {mobileHighlights.map((src, i) => (
                    <div key={i} className="ma-card" onClick={() => { setActive("mobileapp"); setLightbox({ src, idx: i }); }}>
                      <div className="ma-frame">
                        <div className="ma-notch" />
                        <img src={src} alt={`App screenshot ${i + 1}`} loading="lazy" />
                      </div>
                      <div className="ma-card-num">{String(i+1).padStart(2,"0")} / {String(mobileHighlights.length).padStart(2,"0")}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ma-footer">
                <button className="ma-see-all" onClick={() => setActive("mobileapp")}>
                  See all {items.filter(i => i.category === "mobileapp").length} shots
                </button>
              </div>

              {/* Download Banner */}
              <div className="ma-banner">
                <div className="ma-banner-left">
                  <div className="ma-banner-icon">
                    <svg viewBox="0 0 24 24"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zm-2.5-1C2.67 17 2 17.67 2 18.5v-9C2 8.67 2.67 8 3.5 8S5 8.67 5 9.5v9c0 .83-.67 1.5-1.5 1.5zm17 0c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.95 0-1.84.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C7.14 3.07 6 4.76 6 6.7V7h12v-.3c0-1.94-1.14-3.63-2.47-4.54zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/></svg>
                  </div>
                  <div className="ma-banner-text">
                    <span className="ma-banner-title">Try the App</span>
                    <span className="ma-banner-sub">Android APK · Free Download</span>
                  </div>
                </div>
                <button className="ma-dl-btn" onClick={() => setShowInstall(true)}>
                  <svg viewBox="0 0 24 24"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/></svg>
                  Download APK
                </button>
              </div>
            </div>

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
            <div className={`gfx-grid${active === "mobileapp" ? " app-grid" : ""}`}>
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