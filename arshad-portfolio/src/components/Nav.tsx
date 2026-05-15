import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Fade in on load
    gsap.fromTo(navRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 })

    // Shrink on scroll
    const onScroll = () => {
      if (!navRef.current) return
      navRef.current.style.padding = window.scrollY > 60 ? '14px 32px' : '20px 32px'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(10,10,10,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      transition: 'padding 0.3s ease',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px',
      }}>
        A<span style={{ color: 'var(--accent)' }}>.</span>Sutar
      </div>

      <div style={{ display: 'flex', gap: 36, fontSize: 14, fontWeight: 500, color: 'var(--muted)' }}>
        {['Work', 'About', 'Skills'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="mailto:arshadsutar.work@gmail.com"
        style={{
          fontSize: 13, fontWeight: 600,
          padding: '10px 20px',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 100,
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--accent)'
          e.currentTarget.style.color = 'var(--accent)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.color = 'var(--text)'
        }}
      >
        Let's talk →
      </a>
    </nav>
  )
}
