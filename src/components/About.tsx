const TIMELINE = [
  { year: 'NOW',  role: 'Product Manager — British Biologicals', desc: 'Leading digital product strategy. Shipped in-house HRMS and other internal platforms.' },
  { year: '2021', role: 'Founding Designer — Clientell',          desc: 'Joined as first designer. Designed Tracktable and the core Clientell platform from scratch.' },
  { year: '2020', role: 'Freelance Designer',                     desc: 'Branding, UI/UX and web for Mahindra, Jordindian, and multiple startups.' },
  { year: '2018', role: 'Started designing',                      desc: 'Self-taught — began with branding and visual design, evolved into digital product design.' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <div className="section-label reveal"><span>02</span> About Me</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left */}
          <div className="reveal">
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px,4.5vw,64px)',
              fontWeight: 800, lineHeight: 1.0, letterSpacing: '-2px',
              marginBottom: 32,
            }}>
              Designer.<br />PM.<br />
              <span style={{ color: 'var(--accent)' }}>Both.</span>
            </h2>
            <div style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.85 }}>
              <p>I started out as a designer — obsessing over pixels, interactions, and the feeling a product gives you. Over time, I realised I cared just as much about <strong style={{ color: 'var(--text)' }}>why</strong> we build things as <strong style={{ color: 'var(--text)' }}>how</strong> they look.</p>
              <p style={{ marginTop: 20 }}>That curiosity led me into product management. Today at <strong style={{ color: 'var(--text)' }}>British Biologicals</strong>, I lead digital product initiatives — from roadmap to release — while keeping a designer's eye on every decision.</p>
              <p style={{ marginTop: 20 }}>I believe the best products are built by people who can think in both modes: structured strategy and intuitive design. That's the space I occupy.</p>
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="reveal">
            {TIMELINE.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 24,
                padding: '24px 0',
                borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', minWidth: 52, paddingTop: 2, letterSpacing: 1 }}>{item.year}</div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{item.role}</h4>
                  <p style={{ fontSize: 13, color: 'var(--muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
