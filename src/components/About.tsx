import React from 'react'

const TIMELINE = [
  { year: 'NOW',  label: '2024–PRESENT', role: 'Product Manager — British Biologicals', desc: 'Leading digital product strategy. Shipped in-house HRMS and other internal platforms.' },
  { year: '21',   label: '2021–2024',    role: 'Founding Designer — Clientell',          desc: 'Joined as first designer. Designed Tracktable and the core Clientell platform from scratch.' },
  { year: '20',   label: '2020–2021',    role: 'Freelance Designer',                     desc: 'Branding, UI/UX and web for Mahindra, Jordindian, and multiple startups.' },
  { year: '18',   label: '2018',         role: 'Started Designing',                      desc: 'Self-taught — began with branding and visual design, evolved into digital product design.' },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padded"
      style={{
        background: 'var(--bg)',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="container">

        <div className="reveal section-header">
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 12 }}>
              [ 02 ] ── ABOUT ME
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,5vw,68px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
            }}>
              Designer.<br />
              <span style={{ color: 'var(--accent)' }}>PM.</span> Both.
            </h2>
          </div>
          <div className="section-header-aside" style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.15)', textAlign: 'right', lineHeight: 2, letterSpacing: '0.1em' }}>
            <div>ENTITY: ARSHAD_SUTAR</div>
            <div>LOCATION: BENGALURU.IN</div>
            <div>MODE: DESIGNER+PM</div>
            <div style={{ color: 'var(--accent)' }}>STATUS: ACTIVE ●</div>
          </div>
        </div>

        <div className="two-col">

          {/* Left — bio */}
          <div className="reveal">
            <div style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.9 }}>
              <p>I started out as a designer — obsessing over pixels, interactions, and the feeling a product gives you. Over time, I realised I cared just as much about <strong style={{ color: 'var(--text)' }}>why</strong> we build things as <strong style={{ color: 'var(--text)' }}>how</strong> they look.</p>
              <p style={{ marginTop: 20 }}>That curiosity led me into product management. Today at <strong style={{ color: 'var(--text)' }}>British Biologicals</strong>, I lead digital product initiatives — from roadmap to release — while keeping a designer's eye on every decision.</p>
              <p style={{ marginTop: 20 }}>I believe the best products are built by people who can think in both modes: structured strategy and intuitive design. That's the space I occupy.</p>
            </div>

            <div className="stat-grid">
              {[
                { value: '6+', label: 'Years designing' },
                { value: '20+', label: 'Products shipped' },
                { value: '2', label: 'Disciplines' },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '24px 20px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <span style={{ position: 'absolute', top: 0, left: 0, width: 8, height: 8, borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)', opacity: 0.5 }} />
                  <div
                    className="stat-value"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 36, fontWeight: 900,
                      letterSpacing: '-2px',
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="reveal">
            <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 24 }}>
              CAREER TIMELINE ──────────────────────
            </div>
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr',
                  gap: 24,
                  padding: '24px 0',
                  borderBottom: i < TIMELINE.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div style={{ paddingTop: 2 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: i === 0 ? 11 : 22,
                    fontWeight: 900,
                    color: i === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.18)',
                    letterSpacing: i === 0 ? '0.1em' : '-1px',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                  }}>
                    {item.year}
                  </div>
                  {i === 0 && (
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginTop: 6, boxShadow: '0 0 8px var(--accent)' }} />
                  )}
                </div>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 6 }}>{item.label}</div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{item.role}</h4>
                  <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
