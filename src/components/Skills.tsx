const SKILLS = [
  {
    id: 'A',
    title: 'Product Design',
    items: ['UX Research', 'Wireframing', 'Prototyping', 'High-fidelity UI', 'Design Systems', 'Motion Design'],
    tools: ['Figma', 'Framer', 'Lottie', 'Webflow'],
  },
  {
    id: 'B',
    title: 'Product Management',
    items: ['Roadmapping', 'Requirements', 'Stakeholder Alignment', 'Cross-functional Delivery', 'Agile / Scrum'],
    tools: ['Notion', 'Linear', 'Jira', 'Mixpanel'],
  },
  {
    id: 'C',
    title: 'Brand & Identity',
    items: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Typography', 'Marketing Collateral'],
    tools: ['Illustrator', 'Photoshop', 'InDesign'],
  },
  {
    id: 'D',
    title: 'Frontend',
    items: ['HTML / CSS', 'React (basic)', 'Webflow', 'Framer', 'GSAP Animations'],
    tools: ['VS Code', 'Vite', 'GitHub'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padded"
      style={{
        background: 'var(--bg)',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="container">

        <div className="reveal section-header">
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 12 }}>
              [ 03 ] ── CAPABILITIES
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,5vw,64px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}>
              What I Bring
            </h2>
          </div>
          <div className="section-header-aside" style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.2)', textAlign: 'right', letterSpacing: '0.1em', lineHeight: 2 }}>
            <div>MODULES: 04</div>
            <div>SKILLS_COUNT: 24+</div>
            <div style={{ color: 'var(--accent)' }}>LOAD: COMPLETE ●</div>
          </div>
        </div>

        <div className="reveal skills-grid">
          {SKILLS.map((s) => (
            <div
              key={s.id}
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                padding: 'clamp(28px,3vw,40px) clamp(20px,3vw,36px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212,245,118,0.2)'
                e.currentTarget.style.background = 'rgba(212,245,118,0.015)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontFamily: 'var(--font-display)',
                fontSize: 80, fontWeight: 900,
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1, userSelect: 'none',
                letterSpacing: '-4px',
              }}>
                {s.id}
              </div>

              <span style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)', opacity: 0.5 }} />
              <span style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)', opacity: 0.5 }} />

              <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 16 }}>
                MODULE_{s.id} ──────────
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 20, fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.5px',
                marginBottom: 24,
              }}>
                {s.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
                {s.items.map((item) => (
                  <div key={item} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: 12, color: 'var(--muted)',
                  }}>
                    <span style={{ width: 4, height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 8 }}>TOOLS</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {s.tools.map(t => (
                    <span key={t} style={{
                      fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.08em',
                      padding: '3px 8px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.35)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
