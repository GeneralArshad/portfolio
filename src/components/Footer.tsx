export default function Footer() {
  return (
    <footer style={{
      padding: '20px 44px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'var(--bg)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: 'monospace',
      fontSize: 9,
      letterSpacing: '0.14em',
      color: 'rgba(255,255,255,0.18)',
    }}>
      <span>© {new Date().getFullYear()} ARSHAD SUTAR</span>
      <span>BUILT WITH REACT · DEPLOYED ON VERCEL</span>
      <a
        href="#hero"
        style={{ color: 'rgba(255,255,255,0.18)', transition: 'color 0.2s', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.18)')}
      >
        BACK_TO_TOP ↑
      </a>
    </footer>
  )
}
