const LINKS = [
  { label: 'arshadsutar.work@gmail.com', href: 'mailto:arshadsutar.work@gmail.com' },
  { label: 'LinkedIn',                   href: 'https://www.linkedin.com/in/arshad-sutar/' },
  { label: 'British Biologicals',        href: 'https://www.britishbiologicals.com/' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '160px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 60 }}>
          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px,6vw,88px)',
              fontWeight: 800, lineHeight: 0.95, letterSpacing: '-3px',
              marginBottom: 24,
            }}>
              Let's make<br />something<br />
              <span style={{ color: 'var(--accent)' }}>great.</span>
            </h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 380 }}>
              Open to product design roles, PM opportunities, and interesting freelance projects.
              Based in Bengaluru — remote-friendly.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 28px',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r)',
                  fontSize: 14, fontWeight: 500,
                  transition: 'border-color 0.2s, color 0.2s',
                  minWidth: 320,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text)' }}
              >
                <span>{l.label}</span>
                <span style={{ opacity: 0.5 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
