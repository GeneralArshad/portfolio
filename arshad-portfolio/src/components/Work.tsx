const FEATURED = [
  {
    tag: 'UX/UI Design · 2023',
    title: 'Tracktable',
    desc: 'End-to-end design of a Salesforce Chrome extension for Revenue teams. Custom interactions, brand visuals, and motion design — shipped to production.',
    pills: ['Product Design', 'Chrome Extension', 'Salesforce', 'Motion Design'],
    link: 'https://arshads.webflow.io/tracktable',
    linkLabel: 'View case study ↗',
    side: 'right' as const,
    color: 'linear-gradient(135deg,#0f1b2d,#1a2f4a)',
    accentColor: 'rgba(212,245,118,0.35)',
  },
  {
    tag: 'Product Management · 2024–Present',
    title: 'HRMS — British Biologicals',
    desc: 'Led product strategy and launch of an in-house HR Management System. Defined requirements, coordinated engineering, and shipped a platform now used across the organisation.',
    pills: ['Product Management', 'Enterprise SaaS', 'Internal Tooling', 'Stakeholder Mgmt'],
    link: null,
    linkLabel: 'Case study coming soon',
    side: 'left' as const,
    color: 'linear-gradient(135deg,#1a0f2d,#2f1a4a)',
    accentColor: 'rgba(180,130,255,0.35)',
  },
]

const GRID = [
  { tag: 'UX/UI Design · 2023',  title: 'Karat Capital',   desc: 'Smart investment guidance platform for investors from all backgrounds.' },
  { tag: 'Branding · 2022',       title: 'Prop Maestro',    desc: 'Full brand identity design for a Bengaluru-based real estate firm.' },
  { tag: 'UI/UX + Web · 2022',    title: 'Tasveernama',     desc: 'Website design for tasveernama.in — art direction and UI/UX.' },
  { tag: 'Brand + Web · 2022',    title: 'Amory Beauty',    desc: 'Branding and website design for a D2C beauty brand.' },
  { tag: 'Experience · 2022',     title: 'Mahindra Baja',   desc: 'Racing-themed experience design for Mahindra Baja SAEINDIA.' },
]

export default function Work() {
  return (
    <section id="work" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label reveal">
          <span>01</span> Selected Work
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px' }}>
            Things I've built &amp; shipped.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8 }}>
            From SaaS platforms and enterprise tools to branding and revenue products — work across design and product management.
          </p>
        </div>

        {/* Featured cards */}
        {FEATURED.map((p) => (
          <FeaturedCard key={p.title} project={p} />
        ))}

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {GRID.map((p) => (
            <GridCard key={p.title} project={p} />
          ))}
          <div className="reveal" style={{
            background: 'transparent', border: '1px dashed rgba(255,255,255,0.1)',
            borderRadius: 'var(--r)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', textAlign: 'center', padding: 40, minHeight: 180,
          }}>
            <div>
              <div style={{ fontSize: 28, marginBottom: 10 }}>✦</div>
              <p style={{ fontSize: 13, color: 'var(--muted)' }}>More work in progress.<br />Check back soon.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client bar */}
      <div className="container">
        <div className="reveal" style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginTop: 80 }}>
          <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 28 }}>
            Featured clients &amp; collaborations
          </p>
          <div style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
            {['Mahindra', 'Clientell', 'Jordindian', 'Abhyansh', 'Prop Maestro', 'British Biologicals'].map((name) => (
              <span key={name} style={{
                fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800,
                color: 'rgba(255,255,255,0.2)', letterSpacing: '-0.5px',
                transition: 'color 0.3s', cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
              >{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project: p }: { project: typeof FEATURED[0] }) {
  return (
    <div className="reveal" style={{
      background: 'var(--bg2)',
      border: '1px solid var(--border)',
      borderRadius: 20,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      marginBottom: 24,
      transition: 'border-color 0.3s',
    }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(212,245,118,0.2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
    >
      {/* Info */}
      <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', order: p.side === 'right' ? 0 : 1 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>{p.tag}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,42px)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 16 }}>{p.title}</h2>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>{p.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {p.pills.map(pill => <span key={pill} className="pill">{pill}</span>)}
          </div>
        </div>
        {p.link
          ? <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: 6, width: 'fit-content', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
            >{p.linkLabel}</a>
          : <span style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>{p.linkLabel}</span>
        }
      </div>

      {/* Visual */}
      <div style={{
        background: p.color, display: 'flex', alignItems: 'center',
        justifyContent: 'center', minHeight: 400, position: 'relative',
        order: p.side === 'right' ? 1 : 0,
      }}>
        <MockUI accentColor={p.accentColor} />
      </div>
    </div>
  )
}

function GridCard({ project: p }: { project: typeof GRID[0] }) {
  return (
    <div className="reveal" style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: 'var(--r)', padding: '36px 32px',
      transition: 'border-color 0.3s, transform 0.3s', cursor: 'default',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,245,118,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none' }}
    >
      <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>{p.tag}</p>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 10 }}>{p.title}</h3>
      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{p.desc}</p>
      <span style={{
        display: 'inline-block', marginTop: 20,
        fontSize: 11, fontWeight: 600,
        padding: '4px 10px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 100, color: 'var(--muted)',
      }}>Case study coming soon</span>
    </div>
  )
}

// Decorative fake-UI placeholder — replace with real screenshots
function MockUI({ accentColor }: { accentColor: string }) {
  const row = (w: string, bg?: string) => (
    <div style={{ height: 12, borderRadius: 4, background: bg ?? 'rgba(255,255,255,0.08)', width: w, marginBottom: 8 }} />
  )
  const card = () => (
    <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 12, height: 80, flex: 1 }}>
      <div style={{ height: 8, borderRadius: 3, background: accentColor, width: '50%', marginBottom: 6 }} />
      <div style={{ height: 8, borderRadius: 3, background: 'rgba(255,255,255,0.08)', marginBottom: 6 }} />
      <div style={{ height: 8, borderRadius: 3, background: 'rgba(255,255,255,0.08)', width: '70%' }} />
    </div>
  )

  return (
    <div style={{
      width: '80%', borderRadius: 12,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      padding: 16,
      transform: 'perspective(800px) rotateY(-8deg) rotateX(4deg)',
      boxShadow: '24px 24px 60px rgba(0,0,0,0.5)',
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {['#ff5f57','#ffbd2e','#28c941'].map(c => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
        ))}
      </div>
      {row('40%', accentColor)}
      {row('80%')}
      {row('60%')}
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {card()}{card()}
      </div>
    </div>
  )
}
