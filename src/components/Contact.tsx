const LINKS = [
  { id: '01', label: 'Email',    value: 'arshadsutar.work@gmail.com', href: 'mailto:arshadsutar.work@gmail.com' },
  { id: '02', label: 'LinkedIn', value: 'linkedin.com/in/arshad-sutar', href: 'https://www.linkedin.com/in/arshad-sutar/' },
  { id: '03', label: 'Company',  value: 'britishbiologicals.com', href: 'https://www.britishbiologicals.com/' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '160px 0 120px',
        background: 'var(--bg)',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
      }}
    >
      <div className="container">

        {/* ── Header ── */}
        <div className="reveal" style={{ marginBottom: 80, borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 24 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 16 }}>
            [ 04 ] ── INITIATE CONTACT
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

          {/* Left — headline */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px,7vw,96px)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-3px',
              textTransform: 'uppercase',
              marginBottom: 36,
            }}>
              Let's Make<br />Something<br />
              <span style={{ color: 'var(--accent)' }}>Great.</span>
            </h2>

            <p style={{ fontSize: 14, color: 'var(--muted)', maxWidth: 360, lineHeight: 1.8 }}>
              Open to product design roles, PM opportunities, and interesting freelance projects.
              Based in Bengaluru — remote-friendly.
            </p>

            {/* Technical availability block */}
            <div style={{
              marginTop: 48,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '20px 24px',
              position: 'relative',
              display: 'inline-block',
            }}>
              <span style={{ position: 'absolute', top: 0, left: 0, width: 10, height: 10, borderTop: '1px solid var(--accent)', borderLeft: '1px solid var(--accent)' }} />
              <span style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderBottom: '1px solid var(--accent)', borderRight: '1px solid var(--accent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
                <span style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em', color: 'var(--accent)' }}>
                  AVAILABLE FOR NEW PROJECTS
                </span>
              </div>
            </div>
          </div>

          {/* Right — link list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr 24px',
                  alignItems: 'center',
                  gap: 16,
                  padding: '24px 20px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textDecoration: 'none',
                  transition: 'border-color 0.25s, background 0.25s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.background = 'rgba(212,245,118,0.03)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <span style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.12em', color: 'var(--accent)' }}>{l.id}</span>
                <div>
                  <div style={{ fontFamily: 'monospace', fontSize: 8, letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 4, textTransform: 'uppercase' }}>{l.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{l.value}</div>
                </div>
                <span style={{ fontFamily: 'monospace', fontSize: 14, color: 'var(--muted)' }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom system bar ── */}
        <div style={{
          marginTop: 100,
          paddingTop: 20,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'monospace',
          fontSize: 9,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.15)',
        }}>
          <span>ARSHAD.SUTAR.PROTOCOL // v2.0</span>
          <span>BENGALURU.IN · 12.97°N 77.59°E</span>
          <span>DESIGN + PRODUCT ●</span>
        </div>
      </div>
    </section>
  )
}
