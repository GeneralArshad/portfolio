import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { gsap } from 'gsap'
import ChromaticShader from './ChromaticShader'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const els = contentRef.current.querySelectorAll('.hero-anim')
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.12, delay: 0.5, ease: 'power3.out' }
    )
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* ── WebGL shader background via R3F ── */}
      <div className="canvas-fill" style={{ zIndex: 0 }}>
        <Canvas
          orthographic
          camera={{ near: -1, far: 1 }}
          gl={{ antialias: false, alpha: false }}
          style={{ width: '100%', height: '100%' }}
        >
          <ChromaticShader />
        </Canvas>
      </div>

      {/* ── Hero content ── */}
      <div ref={contentRef} style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 900, margin: '0 24px' }}>
        {/* outer border frame */}
        <div style={{ border: '1px solid rgba(39,39,42,0.9)', padding: 8 }}>
          {/* inner card */}
          <div style={{
            border: '1px solid rgba(39,39,42,0.9)',
            padding: '60px 52px 52px',
            textAlign: 'center',
            background: 'rgba(0,0,0,0.38)',
            backdropFilter: 'blur(2px)',
          }}>

            {/* headline */}
            <h1 className="hero-anim" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-2px',
              color: '#fff',
              marginBottom: 20,
              opacity: 0,
            }}>
              Designing products.{' '}
              <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Shipping</em>
              {' '}them too.
            </h1>

            {/* subtext */}
            <p className="hero-anim" style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(13px, 1.5vw, 17px)',
              lineHeight: 1.65,
              maxWidth: 520,
              margin: '0 auto 32px',
              opacity: 0,
            }}>
              Product Manager at British Biologicals &amp; multidisciplinary designer —
              bridging beautiful interfaces with the strategy behind them.
            </p>

            {/* available badge */}
            <div className="hero-anim" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginBottom: 36, fontSize: 12, color: '#22c55e',
              opacity: 0,
            }}>
              <span style={{ position: 'relative', width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PingDot />
              </span>
              Available for New Projects
            </div>

            <br />

            {/* CTA */}
            <a
              className="hero-anim liquid-btn"
              href="mailto:arshadsutar.work@gmail.com"
              style={{ opacity: 0 }}
            >
              <span>Let's work together</span>
              <span style={{ transition: 'transform 0.2s' }}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PingDot() {
  return (
    <>
      <span style={{
        position: 'absolute', width: '100%', height: '100%',
        borderRadius: '50%', background: '#22c55e', opacity: 0.75,
        animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
      }} />
      <span style={{
        position: 'relative', width: 8, height: 8,
        borderRadius: '50%', background: '#22c55e',
      }} />
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .liquid-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 10px; height: 54px; padding: 0 40px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.07);
          color: #fff; font-size: 15px; font-weight: 600;
          cursor: pointer; text-decoration: none;
          backdrop-filter: blur(20px) saturate(1.6) brightness(1.1);
          -webkit-backdrop-filter: blur(20px) saturate(1.6) brightness(1.1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.25),
            inset 0 1px 0 rgba(255,255,255,0.28),
            inset 0 -1px 0 rgba(0,0,0,0.15);
          transition: transform 0.22s cubic-bezier(0.1,0.4,0.2,1),
            background 0.22s, border-color 0.22s, box-shadow 0.22s;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .liquid-btn:hover {
          transform: scale(1.05) translateY(-1px);
          background: rgba(255,255,255,0.13);
          border-color: rgba(255,255,255,0.38);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.35),
            0 0 24px rgba(255,255,255,0.08);
        }
        .liquid-btn:active { transform: scale(0.97); }
      `}</style>
    </>
  )
}
