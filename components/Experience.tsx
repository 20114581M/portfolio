export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Century 21 Steinposner",
      role: "IT / Project Manager",
      department: "TheMedSpa HB",
      period: "February 2024 – June 2024",
      bullets: [
        "Website Management: Oversaw website updates, content management, and UX improvements, ensuring alignment with branding guidelines.",
        "Marketing Flier Creation: Designed and produced marketing materials that boosted client acquisition and retention.",
        "Project Launch Support: Managed new project initiatives, collaborating cross-functionally to meet timelines and budget objectives.",
      ],
      tags: ["Web Management", "UX", "Project Management", "Marketing"],
    },
    {
      id: 2,
      company: "Transform Salon Luxe",
      role: "Marketing Specialist / Web Dev",
      department: null,
      period: "January 2023 – December 2023",
      bullets: [
        "Website Updates and Maintenance: Regularly updated the salon's website with new content, promotional offers, and service updates.",
        "Creation of Marketing Materials: Designed and developed a variety of marketing materials, including brochures, flyers, and digital graphics tailored to attract new clients and retain existing ones by highlighting the salon's unique services and promotions.",
      ],
      tags: ["Web Development", "Marketing", "Graphic Design", "Branding"],
    },
    {
      id: 3,
      company: "MyDesk Virtual Office",
      role: "Executive Assistant",
      department: null,
      period: "November 2021 – January 2023",
      bullets: [
        "Monitored onboarding processes for new Virtual Assistants and clients.",
        "Led a team of Virtual Assistants, providing support and mentorship.",
        "Handled tasks including transaction coordination, social media marketing, cold calling, skip tracing, email marketing, product research, web maintenance, web development, flyer creation, and video creation.",
        "Analyzed team strengths to maximize staff abilities, assigned work to ideal project partners, and streamlined the scheduling experience.",
      ],
      tags: ["Team Leadership", "Social Media", "Email Marketing", "Web Dev", "VA"],
    },
    {
      id: 4,
      company: "VideoPower.com",
      role: "SEO Content Writer",
      department: null,
      period: "July 2020 – October 2021",
      bullets: [
        "Content and Article Creation: Developed high-quality content and articles tailored for the company's website, creating engaging and informative pieces that resonated with the target audience.",
        "SEO Optimization: Integrated SEO standards and keyword strategies into all content to improve search engine ranking. Conducted thorough keyword research to identify relevant and high-traffic keywords, ensuring maximum visibility.",
      ],
      tags: ["SEO", "Content Writing", "Keyword Research", "Article Creation"],
    },
  ];

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════════════════════════════
           EXPERIENCE SECTION
        ══════════════════════════════════════════════════════════════ */
        .exp-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .exp-wrapper::before {
          content: '';
          position: absolute;
          top: -10%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(255,200,80,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-wrapper::after {
          content: '';
          position: absolute;
          bottom: -10%; right: -5%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(255,200,80,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-inner {
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
           LEFT — sticky label
        ══════════════════════════════════════ */
        .exp-left {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: sticky;
          top: 6rem;
        }

        .exp-section-tag {
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

        .exp-section-tag::before {
          content: '';
          display: inline-block;
          width: 28px; height: 1px;
          background: #ffc850;
          flex-shrink: 0;
        }

        .exp-section-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: 0.04em;
          line-height: 0.92;
          color: #fff;
          margin: 0;
        }

        .exp-section-heading span { color: #ffc850; }

        /* total count */
        .exp-count-badge {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .exp-count-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ffc850;
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .exp-count-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.56rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
        }

        /* ══════════════════════════════════════
           RIGHT — timeline
        ══════════════════════════════════════ */
        .exp-right {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Timeline track ── */
        .exp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* vertical gold line */
        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            rgba(255,200,80,0.5),
            rgba(255,200,80,0.15) 80%,
            transparent
          );
        }

        /* ── Each entry ── */
        .exp-entry {
          position: relative;
          padding: 0 0 3rem 2.5rem;
        }

        .exp-entry:last-child {
          padding-bottom: 0;
        }

        /* dot on timeline */
        .exp-entry::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 8px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(8,8,12,1);
          border: 1px solid rgba(255,200,80,0.5);
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s;
          z-index: 2;
        }

        .exp-entry:hover::before {
          background: #ffc850;
          border-color: #ffc850;
          box-shadow: 0 0 10px rgba(255,200,80,0.4);
        }

        /* ── Card ── */
        .exp-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          padding: 1.75rem 1.75rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.25s, border-color 0.25s;
        }

        .exp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(255,200,80,0.6), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .exp-entry:hover .exp-card {
          background: rgba(255,200,80,0.03);
          border-color: rgba(255,200,80,0.15);
        }

        .exp-entry:hover .exp-card::before {
          transform: scaleX(1);
        }

        /* card header */
        .exp-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .exp-card-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .exp-company {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          letter-spacing: 0.05em;
          color: #fff;
          line-height: 1;
          transition: color 0.25s;
        }

        .exp-entry:hover .exp-company { color: #ffc850; }

        .exp-role-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .exp-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
        }

        .exp-dept-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,200,80,0.4);
          flex-shrink: 0;
        }

        .exp-dept {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.04em;
        }

        /* period badge */
        .exp-period {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.85rem;
          background: rgba(255,200,80,0.07);
          border: 1px solid rgba(255,200,80,0.18);
          border-radius: 2px;
          white-space: nowrap;
          flex-shrink: 0;
          align-self: flex-start;
        }

        .exp-period-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #ffc850;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .exp-period span {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,200,80,0.75);
        }

        /* divider inside card */
        .exp-card-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 1.25rem;
        }

        /* bullet points */
        .exp-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.25rem;
          list-style: none;
          padding: 0;
          margin-top: 0;
        }

        .exp-bullet {
          display: flex;
          gap: 0.7rem;
          align-items: flex-start;
        }

        .exp-bullet-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,200,80,0.45);
          flex-shrink: 0;
          margin-top: 0.45rem;
          transition: background 0.2s;
        }

        .exp-entry:hover .exp-bullet-dot {
          background: #ffc850;
        }

        .exp-bullet-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          font-weight: 300;
        }

        .exp-bullet-text strong {
          color: rgba(255,255,255,0.65);
          font-weight: 500;
        }

        /* tags */
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .exp-tag {
          padding: 0.22rem 0.65rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 2px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.52rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .exp-entry:hover .exp-tag {
          background: rgba(255,200,80,0.06);
          border-color: rgba(255,200,80,0.2);
          color: rgba(255,200,80,0.65);
        }

        /* ══════════════════════════════════════════════════════════════
           TABLET  ≤ 900px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .exp-inner {
            padding: 5rem 2.5rem;
            gap: 3rem;
          }

          .exp-left {
            position: static;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           MOBILE  ≤ 680px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 680px) {
          .exp-inner {
            padding: 4.5rem 1.5rem 5rem;
            flex-direction: column;
            gap: 0;
          }

          .exp-left {
            margin-bottom: 2.5rem;
          }

          .exp-section-heading {
            font-size: clamp(3.2rem, 16vw, 4.5rem);
          }

          .exp-count-badge {
            display: none;
          }

          .exp-entry {
            padding-left: 2rem;
            padding-bottom: 2.5rem;
          }

          .exp-card {
            padding: 1.4rem 1.25rem 1.25rem;
          }

          .exp-card-header {
            flex-direction: column;
            gap: 0.75rem;
          }

          .exp-period {
            align-self: flex-start;
          }

          .exp-company {
            font-size: 1.4rem;
          }

          .exp-bullet-text {
            font-size: 0.82rem;
          }
        }

        /* ══════════════════════════════════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ══════════════════════════════════════════════════════════════ */
        @media (max-width: 400px) {
          .exp-inner {
            padding: 4rem 1.25rem 4.5rem;
          }

          .exp-card {
            padding: 1.2rem 1rem 1rem;
          }

          .exp-timeline::before {
            left: -1px;
          }

          .exp-entry {
            padding-left: 1.5rem;
          }

          .exp-bullet-text {
            font-size: 0.8rem;
          }

          .exp-tag {
            font-size: 0.48rem;
          }
        }
      `}</style>

      <section className="exp-wrapper" id="experience">
        <div className="exp-inner">

          {/* ── Left: sticky label ── */}
          <div className="exp-left">
            <span className="exp-section-tag">My Journey</span>
            <h2 className="exp-section-heading">
              Work<br /><span>Experience</span>
            </h2>
            <div className="exp-count-badge">
              <span className="exp-count-num">{experiences.length}</span>
              <span className="exp-count-label">Roles Held</span>
            </div>
          </div>

          {/* ── Right: timeline ── */}
          <div className="exp-right">
            <div className="exp-timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="exp-entry">
                  <div className="exp-card">

                    {/* Header */}
                    <div className="exp-card-header">
                      <div className="exp-card-title-group">
                        <span className="exp-company">{exp.company}</span>
                        <div className="exp-role-line">
                          <span className="exp-role">{exp.role}</span>
                          {exp.department && (
                            <>
                              <span className="exp-dept-sep" />
                              <span className="exp-dept">{exp.department}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="exp-period">
                        <span className="exp-period-dot" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="exp-card-divider" />

                    {/* Bullets */}
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, i) => {
                        const colonIdx = b.indexOf(":");
                        const hasLabel = colonIdx > -1 && colonIdx < 40;
                        return (
                          <li key={i} className="exp-bullet">
                            <span className="exp-bullet-dot" />
                            <span className="exp-bullet-text">
                              {hasLabel ? (
                                <>
                                  <strong>{b.slice(0, colonIdx + 1)}</strong>
                                  {b.slice(colonIdx + 1)}
                                </>
                              ) : b}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    {/* Tags */}
                    <div className="exp-tags">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="exp-tag">{tag}</span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}