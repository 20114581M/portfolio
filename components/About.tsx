export default function About() {
  const stats = [
    { num: "5+", label: "Years Experience" },
    { num: "5",  label: "Projects Completed" },
    { num: "8+", label: "Happy Clients" },
    { num: "5",  label: "Fields of Mastery" },
  ];

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════════════════════════
           ABOUT — BASE (Desktop first, then scale down)
        ══════════════════════════════════════════════════════════════ */
        .about-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .about-wrapper::before {
          content: '';
          position: absolute;
          bottom: -15%; right: -8%;
          width: 650px; height: 650px;
          background: radial-gradient(circle, rgba(255,200,80,0.05) 0%, transparent 68%);
          pointer-events: none;
        }

        .about-wrapper::after {
          content: '';
          position: absolute;
          top: -10%; left: -10%;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Layout container ── */
        .about-inner {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 7rem 3rem;
          display: flex;
          gap: clamp(3rem, 8vw, 7rem);
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        /* ══════════════════════════════════════
           LEFT COLUMN
        ══════════════════════════════════════ */
        .about-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .about-section-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ffc850;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .about-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .about-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }

        .about-section-heading span { color: #ffc850; }

        /* ══════════════════════════════════════
           RIGHT COLUMN
        ══════════════════════════════════════ */
        .about-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        /* ── Pills ── */
        .about-intro-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .about-intro-pill {
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

        /* ── Bio ── */
        .about-bio-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.9rem, 1.5vw, 1.02rem);
          color: rgba(255,255,255,0.52);
          line-height: 1.9;
          font-weight: 300;
        }

        .about-bio strong { color: #fff; font-weight: 500; }
        .about-bio em     { color: #ffc850; font-style: normal; }

        /* ── VA callout ── */
        .about-secondary {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.2rem 1.4rem;
          border: 1px solid rgba(255,255,255,0.07);
          border-left: 2px solid rgba(255,200,80,0.45);
          border-radius: 2px;
          background: rgba(255,200,80,0.03);
          transition: background 0.25s, border-left-color 0.25s;
        }

        .about-secondary:hover {
          background: rgba(255,200,80,0.05);
          border-left-color: rgba(255,200,80,0.7);
        }

        .about-secondary-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          margin-top: 1px;
          opacity: 0.75;
        }

        .about-secondary p {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          font-weight: 300;
          margin: 0;
        }

        .about-secondary p strong {
          color: rgba(255,255,255,0.62);
          font-weight: 500;
        }

        /* ── Divider ── */
        .about-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,200,80,0.2), transparent);
        }

        /* ── Stats ── */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .about-stat {
          padding: 1.2rem 1rem;
          background: rgba(8,8,12,0.95);
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: background 0.2s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .about-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #ffc850;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .about-stat:hover { background: rgba(255,200,80,0.05); }
        .about-stat:hover::before { transform: scaleX(1); }

        .about-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #ffc850;
          line-height: 1;
        }

        .about-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── CTA ── */
        .about-cta {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .about-cta-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.83rem;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
        }

        .about-cta-btn {
          padding: 0.7rem 1.6rem;
          background: transparent;
          color: #ffc850;
          border: 1px solid rgba(255,200,80,0.35);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.25s, border-color 0.25s;
        }

        .about-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ffc850;
          transform: translateX(-101%);
          transition: transform 0.25s ease;
          z-index: 0;
        }

        .about-cta-btn span {
          position: relative;
          z-index: 1;
        }

        .about-cta-btn:hover::before { transform: translateX(0); }
        .about-cta-btn:hover { color: #08080c; border-color: #ffc850; }


        /* ══════════════════════════════════════════════════════════════
           TABLET  ≤ 900px
           — unstick left, keep side-by-side but tighten gap
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .about-inner {
            padding: 5rem 2.5rem;
            gap: 3rem;
          }

          .about-left {
            position: static;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           MOBILE  ≤ 680px
           — stack into single column
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .about-inner {
            padding: 4.5rem 1.5rem 5rem;
            flex-direction: column;
            gap: 0;
          }

          /* Left block becomes a compact header */
          .about-left {
            margin-bottom: 2rem;
          }

          .about-section-heading {
            font-size: clamp(3.2rem, 16vw, 4.5rem);
            line-height: 0.88;
          }

          /* Slightly tighter content spacing on mobile */
          .about-right {
            gap: 1.5rem;
          }

          .about-bio {
            font-size: 0.95rem;
          }

          /* Stats: 2-column on mobile */
          .about-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-stat {
            padding: 1.1rem 1rem;
          }

          /* CTA stacks cleanly */
          .about-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.85rem;
          }

          .about-cta-btn {
            width: 100%;
            text-align: center;
            padding: 0.85rem 1rem;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 400px) {
          .about-inner {
            padding: 4rem 1.25rem 4.5rem;
          }

          .about-section-heading {
            font-size: 3rem;
          }

          .about-intro-pill {
            font-size: 0.56rem;
            padding: 0.25rem 0.65rem;
          }

          .about-stat-num {
            font-size: 1.75rem;
          }

          .about-stat-label {
            font-size: 0.5rem;
          }

          .about-secondary {
            padding: 1rem 1rem;
          }

          .about-secondary p {
            font-size: 0.78rem;
          }
        }
      `}</style>

      <section className="about-wrapper" id="about">
        <div className="about-inner">

          {/* ── Left ── */}
          <div className="about-left">
            <span className="about-section-tag">Who I Am</span>
            <h2 className="about-section-heading">
              About<br /><span>Me</span>
            </h2>
          </div>

          {/* ── Right ── */}
          <div className="about-right">

            <div className="about-intro-line">
              <span className="about-intro-pill">Web Developer</span>
              <span className="about-intro-pill">Graphic Artist</span>
            </div>

            <div className="about-bio-block">
              <p className="about-bio">
                I'm <strong>Marlon Ampoon</strong> — a <em>Web Developer</em> and <em>Graphic Artist</em> passionate
                about helping people and businesses succeed online. I build websites that don't just
                look great — they work smoothly, load fast, and make a real impact for the people behind them.
              </p>
              <p className="about-bio">
                I find genuine fulfillment in taking <strong>technical challenges</strong> and transforming them
                into clean, functional solutions. Whether it's crafting a responsive frontend from scratch,
                designing a cohesive brand identity, or producing bold digital graphics — I bring both the{" "}
                <strong>engineering precision</strong> and the <strong>visual sensibility</strong>.
              </p>
              <p className="about-bio">
                Every project I take on gets my full commitment — not just to meet the brief, but to{" "}
                <em>exceed it</em>. I believe great work comes from clear communication, attention to detail,
                and a genuine willingness to go the extra mile. If there's a way I can help you achieve your
                goals, I'd be honored to be a part of that journey.
              </p>
            </div>

            <div className="about-secondary">
              <span className="about-secondary-icon">💼</span>
              <p>
                I also offer <strong>Virtual Assistant support</strong> as a secondary service —
                drawing on my background in organization, clear communication, and adaptability
                to help clients with day-to-day operational tasks when needed.
              </p>
            </div>

            <div className="about-divider" />

            <div className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-num">{s.num}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <span className="about-cta-text">Interested in working together?</span>
              <button
                className="about-cta-btn"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Let's Talk →</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}