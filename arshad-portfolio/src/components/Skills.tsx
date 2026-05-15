const SKILLS = [
  { icon: '📐', title: 'Product Design',      desc: 'End-to-end UX/UI — research, wireframes, high-fidelity design, prototyping.' },
  { icon: '🗺',  title: 'Product Management', desc: 'Roadmapping, requirements, stakeholder alignment, cross-functional delivery.' },
  { icon: '✦',  title: 'Branding & Identity', desc: 'Logo design, visual systems, brand guidelines, marketing collateral.' },
  { icon: '⚡', title: 'Interaction & Motion', desc: 'Custom animations, micro-interactions, and motion design for digital products.' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label reveal"><span>03</span> What I Bring</div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
          {SKILLS.map((s) => (
            <div
              key={s.title}
              style={{
                background: 'var(--bg2)', padding: '40px 32px',
                border: '1px solid var(--border)',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg3)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg2)')}
            >
              <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
