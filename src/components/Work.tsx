import React from 'react'

function Brackets({ color = 'var(--accent)', size = 14, opacity = 0.7 }: { color?: string; size?: number; opacity?: number }) {
  const s: React.CSSProperties = { position: 'absolute', width: size, height: size, opacity }
  const b = `1px solid ${color}`
  return (
    <>
      <span style={{ ...s, top: 0, left: 0, borderTop: b, borderLeft: b }} />
      <span style={{ ...s, top: 0, right: 0, borderTop: b, borderRight: b }} />
      <span style={{ ...s, bottom: 0, left: 0, borderBottom: b, borderLeft: b }} />
      <span style={{ ...s, bottom: 0, right: 0, borderBottom: b, borderRight: b }} />
    </>
  )
}

const FEATURED = [
  {
    index: '001',
    tag: 'UX/UI DESIGN',
    year: '2023',
    title: 'Tracktable',
    desc: 'End-to-end design of a Salesforce Chrome extension for Revenue teams. Custom interactions, brand visuals, and motion design — shipped to production.',
    pills: ['Product Design', 'Chrome Extension', 'Salesforce', 'Motion Design'],
    link: 'https://arshads.webflow.io/tracktable',
    linkLabel: 'View case study',
    side: 'right' as const,
    accentColor: 'var(--accent)',
  },
  {
    index: '002',
    tag: 'PRODUCT MANAGEMENT',
    year: '2024–NOW',
    title: 'HRMS — British Biologicals',
    desc: 'Led product strategy and launch of an in-house HR Management System. Defined requirements, coordinated engineering, and shipped a platform now used across the organisation.',
    pills: ['Product Management', 'Enterprise SaaS', 'Internal Tooling', 'Stakeholder Mgmt'],
    link: null,
    linkLabel: 'Case study coming soon',
    side: 'left' as const,
    accentColor: 'rgba(180,130,255,0.9)',
  },
]

const GRID = [
  { index: '003', tag: 'UX/UI DESIGN', year: '2023', title: 'Karat Capital',   desc: 'Smart investment guidance platform for investors from all backgrounds.' },
  { index: '004', tag: 'BRANDING',     year: '2022', title: 'Prop Maestro',    desc: 'Full brand identity design for a Bengaluru-based real estate firm.' },
  { index: '005', tag: 'UI/UX + WEB',  year: '2022', title: 'Tasveernama',     desc: 'Website design for tasveernama.in — art direction and UI/UX.' },
  { index: '006', tag: 'BRAND + WEB',  year: '2022', title: 'Amory Beauty',    desc: 'Branding and website design for a D2C beauty brand.' },
  { index: '007', tag: 'EXPERIENCE',   year: '2022', title: 'Mahindra Baja',   desc: 'Racing-themed experience design for Mahindra Baja SAEINDIA.' },
]

export default function Work() {
  return (
    <section
      id="work"
      className="section-padded"
      style={{
        background: 'var(--bg)',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        position: 'relative',
        paddingTop: 140,
      }}
    >
      <div className="container">

        <div className="reveal section-header">
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 12 }}>
              [ 01 ] ── SELECTED WORK
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,5vw,64px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
            }}>
              Built.<br />Shipped.
            </h2>
          </div>
          <p className="section-header-aside" style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8, maxWidth: 320, textAlign: 'right' }}>
            From SaaS platforms and enterprise tools to branding and revenue products — across design and PM.
          </p>
        </div>

        {FEATURED.map((p) => (
          <FeaturedCard key={p.title} project={p} />
        ))}

        <div className="small-work-grid">
          {GRID.map((p) => (
            <GridCard key={p.title} project={p} />
          ))}
          <div className="reveal" style={{
            border: '1px dashed rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: 40, minHeight: 180,
          }}>
            <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              MORE_WORK.LOADING<br />
              <span style={{ color: 'var(--accent)' }}>█</span>
            </p>
          </div>
        </div>

        <div className="reveal client-bar">
          <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 28 }}>
            FEATURED CLIENTS &amp; COLLABORATIONS ──────────────────────────────
          </div>
          <div className="client-bar-items" style={{ display: 'flex', gap: 48, alignItems: 'center', flexWrap: 'wrap' }}>
            {['Mahindra', 'Clientell', 'Jordindian', 'Abhyansh', 'Prop Maestro', 'British Biologicals'].map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 900,
                  color: 'rgba(255,255,255,0.15)', letterSpacing: '-0.5px',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s', cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.15)')}
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
    <div
      className="reveal featured-card-grid"
      style={{
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.08)',
        marginBottom: 2,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(212,245,118,0.25)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
    >
      <Brackets size={16} />

      <div style={{
        padding: 'clamp(28px,4vw,52px) clamp(20px,4vw,48px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        order: p.side === 'right' ? 0 : 1,
        borderRight: p.side === 'right' ? '1px solid rgba(255,255,255,0.06)' : 'none',
        borderLeft:  p.side === 'left'  ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}>
        <div>
          <div style={{ display: 'flex', gap: 16, marginBottom: 28, fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.18em', color: 'var(--muted)', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--accent)' }}>[ {p.index} ]</span>
            <span>{p.tag}</span>
            <span>{p.year}</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px,3vw,44px)',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: 1.0,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            {p.title}
          </h2>

          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.75, marginBottom: 32 }}>{p.desc}</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 44 }}>
            {p.pills.map(pill => (
              <span key={pill} style={{
                fontFamily: 'monospace',
                fontSize: 10, letterSpacing: '0.1em',
                padding: '5px 10px',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--muted)',
                textTransform: 'uppercase',
              }}>{pill}</span>
            ))}
          </div>
        </div>

        {p.link
          ? <a
              href={p.link} target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'var(--accent)',
                fontFamily: 'monospace',
                transition: 'gap 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.gap = '16px')}
              onMouseLeave={e => (e.currentTarget.style.gap = '10px')}
            >
              {p.linkLabel} ──&gt;
            </a>
          : <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
              [CASE STUDY COMING SOON]
            </span>
        }
      </div>

      <div
        className="featured-card-visual"
        style={{
          minHeight: 380,
          background: 'rgba(255,255,255,0.02)',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
          order: p.side === 'right' ? 1 : 0,
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }}>
          <div style={{ width: 60, height: 1, background: 'var(--accent)', position: 'absolute', top: 0, left: -30 }} />
          <div style={{ width: 1, height: 60, background: 'var(--accent)', position: 'absolute', top: -30, left: 0 }} />
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem,14vw,11rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-4px',
        }}>
          {p.index}
        </div>
        <div style={{
          position: 'absolute', bottom: 16, right: 20,
          fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.15)',
        }}>
          {p.accentColor === 'var(--accent)' ? 'UX/UI.DESIGN' : 'PRODUCT.MGMT'}
        </div>
      </div>
    </div>
  )
}

function GridCard({ project: p }: { project: typeof GRID[0] }) {
  return (
    <div
      className="reveal"
      style={{
        position: 'relative',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: '36px 28px',
        transition: 'border-color 0.3s, background 0.3s',
        cursor: 'default',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(212,245,118,0.2)'
        e.currentTarget.style.background = 'rgba(212,245,118,0.02)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <Brackets size={10} opacity={0.4} />
      <div style={{ fontFamily: 'monospace', fontSize: 9, letterSpacing: '0.18em', color: 'var(--accent)', marginBottom: 16 }}>
        [ {p.index} ] ── {p.tag} / {p.year}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 22, fontWeight: 900,
        letterSpacing: '-0.5px',
        textTransform: 'uppercase',
        marginBottom: 10,
      }}>
        {p.title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{p.desc}</p>
      <div style={{
        marginTop: 24,
        fontFamily: 'monospace', fontSize: 9,
        letterSpacing: '0.15em',
        color: 'rgba(255,255,255,0.2)',
      }}>
        STATUS: COMING_SOON
      </div>
    </div>
  )
}
