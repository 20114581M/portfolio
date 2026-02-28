import Header from "../components/header";
import image from '../src/assets/heroimage/Gemini_Generated_Image_n8fs5qn8fs5qn8fs-Photoroom.png';
import BodyContents from "../components/body";
import Footer from "../components/footer";
// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "86vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        maxWidth: "997px",
        margin: "0 auto",
        width: "100%",
        position: "relative",
        padding: "33px 24px",
      }}
    >
      {/* Decorative glow */}
      <div style={{
        position: "absolute",
        top: "20%", left: "-10%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(255,200,80,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Hero image — larger, beside text on desktop */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(2rem, 6vw, 5rem)",
        flexWrap: "wrap",
        width: "100%",
      }}>
        {/* Text side */}
        <div style={{ flex: "1 1 280px", zIndex: 1, minWidth: 0 }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#ffc850",
            marginBottom: "1rem",
          }}>
            Hello, I'm
          </p>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 10vw, 8.5rem)",
            letterSpacing: "0.04em",
            lineHeight: 0.93,
            color: "#fff",
            margin: "0 0 1.25rem",
          }}>
            Marlon<br />
            <span style={{ color: "#ffc850" }}>Ampoon</span>
          </h1>

          {/* Role pills */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            {["Web Developer", "Graphic Artist", "UI Designer"].map((role) => (
              <span key={role} style={{
                padding: "0.3rem 0.85rem",
                border: "1px solid rgba(255,200,80,0.3)",
                borderRadius: "2px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#ffc850",
              }}>
                {role}
              </span>
            ))}
          </div>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "440px",
            lineHeight: 1.75,
            marginBottom: "2.5rem",
            fontWeight: 300,
          }}>
            Crafting digital experiences where clean, purposeful code meets striking visual design.
            From pixel-perfect UIs to bold graphic work — I build things that look great and work even better.
          </p>

          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("graphics")}
              style={{
                padding: "0.75rem 2rem",
                background: "#ffc850",
                color: "#08080c",
                border: "none",
                borderRadius: "2px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.background = "#ffc850")}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                padding: "0.75rem 2rem",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "2px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#ffc850")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Portrait image side */}
        <div style={{
          flex: "0 0 auto",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "clamp(140px, 26vw, 320px)",
        }}>
          <div style={{
            width: "clamp(140px, 26vw, 320px)",
            height: "clamp(140px, 26vw, 320px)",
            borderRadius: "50%",
            padding: "4px",
            background: "linear-gradient(135deg, #ffc850 0%, #ff8c00 50%, #08080c 100%)",
            boxShadow: "0 0 80px rgba(255,200,80,0.18)",
          }}>
            <div style={{
              width: "100%", height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#1a1a22",
            }}>
              <img
                src={image}
                alt="Marlon Ampoon"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.4rem",
        opacity: 0.4,
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#fff",
        }}>Scroll</span>
        <div style={{
          width: "1px", height: "40px",
          background: "linear-gradient(to bottom, #ffc850, transparent)",
        }} />
      </div>
    </section>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: #08080c;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,200,80,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,200,80,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }



        main {
  padding-top: 72px;
  width: 100vw;          /* ← change from 100vw to 100% */
  overflow-x: hidden;   /* ← add this as a safety net */
}

        /* ── Mobile hero layout fix ── */
        @media (max-width: 600px) {
          #home > div:first-of-type {
            flex-direction: column-reverse !important;
            align-items: center !important;
          }
          #home > div:first-of-type > div:last-child {
            max-width: 160px !important;
            width: 160px !important;
          }
          #home > div:first-of-type > div:first-child {
            flex: 1 1 100% !important;
            width: 100%;
          }
        }
      `}</style>

      <Header />

      <main>
        
        {/* ── HOME / HERO ──────────────────────────────── */}
        <Hero />

        {/* ── ABOUT + REST ─────────────────────────────── */}
        <BodyContents />
        
      </main>
        <Footer />
      
    </>
  );
}