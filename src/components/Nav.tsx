import { useEffect, useRef, useState, CSSProperties } from 'react'
import { gsap } from 'gsap'

const LINKS = [
  { label: 'Work',    href: '#work'    },
  { label: 'About',   href: '#about'   },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [time,     setTime]     = useState('')

  const overlayRef = useRef<HTMLDivElement>(null)
  const linesRef   = useRef<HTMLDivElement[]>([])
  const footerRef  = useRef<HTMLDivElement>(null)

  // ── Live IST clock ──────────────────────────────────────────────
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata',
      }))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  // ── Shrink on scroll ─────────────────────────────────────────────
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // ── Open / close animation ────────────────────────────────────────
  useEffect(() => {
    if (!overlayRef.current) return

    if (open) {
      document.body.style.overflow = 'hidden'
      // Overlay slides down
      gsap.fromTo(overlayRef.current,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.75, ease: 'power4.inOut' }
      )
      // Nav lines stagger in
      gsap.fromTo(linesRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out', delay: 0.35 }
      )
      // Footer fades in
      if (footerRef.current)
        gsap.fromTo(footerRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.65 }
        )
    } else {
      document.body.style.overflow = ''
      gsap.to(linesRef.current, { y: -30, opacity: 0, duration: 0.3, stagger: 0.04 })
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.6,
        delay: 0.1,
        ease: 'power4.inOut',
      })
    }
  }, [open])

  const close = () => setOpen(false)

  // ── Shared styles ─────────────────────────────────────────────────
  const navPad: CSSProperties = {
    padding: scrolled ? '14px 44px' : '24px 44px',
    transition: 'padding 0.4s cubic-bezier(0.76,0,0.24,1)',
  }

  return (
    <>
      {/* ══ Top bar ══════════════════════════════════════════════════ */}
      <header style={{
        ...navPad,
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a
          href="#hero"
          onClick={close}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 17, fontWeight: 900, letterSpacing: '-0.5px',
            color: '#fff', textDecoration: 'none',
            position: 'relative', zIndex: 310,
          }}
        >
          A<span style={{ color: open ? '#fff' : 'var(--accent)', transition: 'color 0.4s' }}>.</span>Sutar
        </a>

        {/* Centre: location + time */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: open ? 'rgba(255,255,255,0.45)' : 'var(--muted)',
          transition: 'color 0.4s',
          zIndex: 310,
          pointerEvents: 'none',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
            display: 'inline-block',
          }} />
          Bengaluru&nbsp;&nbsp;{time}&nbsp;IST
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 6,
            position: 'relative', zIndex: 310,
          }}
        >
          {[0, 1].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: open ? 24 : (i === 0 ? 24 : 14),
                height: 1.5,
                background: '#fff',
                borderRadius: 2,
                transformOrigin: 'center',
                transform: open
                  ? (i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : 'rotate(-45deg) translate(5px, -5px)')
                  : 'none',
                transition: 'transform 0.45s cubic-bezier(0.76,0,0.24,1), width 0.3s ease',
              }}
            />
          ))}
        </button>
      </header>

      {/* ══ Full-screen overlay ═══════════════════════════════════════ */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed', inset: 0, zIndex: 250,
          background: '#0c0c0c',
          clipPath: 'inset(0% 0% 100% 0%)',
          display: 'flex', flexDirection: 'column',
          padding: '120px 44px 52px',
          justifyContent: 'space-between',
        }}
      >
        {/* Big nav links */}
        <nav>
          {LINKS.map((link, i) => (
            <div
              key={link.label}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              <a
                ref={el => { if (el) linesRef.current[i] = el as unknown as HTMLDivElement }}
                href={link.href}
                onClick={close}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--accent)'
                  el.style.paddingLeft = '24px'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color = '#fff'
                  el.style.paddingLeft = '0px'
                }}
                style={{
                  display: 'flex', alignItems: 'baseline',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                  fontWeight: 900,
                  color: '#fff',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  padding: '10px 0',
                  transition: 'color 0.25s ease, padding-left 0.35s cubic-bezier(0.76,0,0.24,1)',
                }}
              >
                {link.label}
                <span style={{
                  fontSize: '0.9rem', fontWeight: 400,
                  color: 'var(--muted)', fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em',
                }}>
                  0{i + 1}
                </span>
              </a>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
        </nav>

        {/* Bottom strip */}
        <div
          ref={footerRef}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            opacity: 0,
          }}
        >
          <div>
            <div style={{
              marginBottom: 6, fontSize: 10, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--muted)',
            }}>
              Get in touch
            </div>
            <a
              href="mailto:arshadsutar.work@gmail.com"
              style={{
                color: '#fff', fontSize: 15, fontWeight: 500,
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              arshadsutar.work@gmail.com
            </a>
          </div>

          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arshad-sutar/' },
              { label: 'Twitter',  href: 'https://twitter.com/' },
              { label: 'Dribbble', href: 'https://dribbble.com/' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--muted)', fontSize: 13,
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Grain overlay for entire site */}
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, zIndex: 400,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.028,
          mixBlendMode: 'overlay',
        }}
      />
    </>
  )
}
