export default function Testimonial() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bg2)' }}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 120, lineHeight: 0.6,
            color: 'var(--accent)', opacity: 0.3,
            marginBottom: 24,
          }}>"</div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px,3vw,34px)',
            fontWeight: 700, lineHeight: 1.3, letterSpacing: '-1px',
            marginBottom: 40,
          }}>
            Arshad is what I call a Fullstack Designer. He has very good design skills,
            be it designing for SaaS or apps — he knows the drill.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--bg3)',
              border: '2px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
            }}>👤</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Shivraj Nag</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Senior Front End Developer, Clientell</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
