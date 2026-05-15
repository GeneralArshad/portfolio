export default function Footer() {
  return (
    <footer style={{
      padding: '28px 32px',
      borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontSize: 13, color: 'var(--muted)',
    }}>
      <span>© {new Date().getFullYear()} Arshad Sutar</span>
      <span>Designed &amp; built in Bengaluru ✦</span>
      <a href="#hero" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
      >Back to top ↑</a>
    </footer>
  )
}
