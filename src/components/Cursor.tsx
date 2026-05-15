import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mouse = { x: -100, y: -100 }
    const ring  = { x: -100, y: -100 }
    let   raf: number
    let   hovering = false

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x - 4}px, ${mouse.y - 4}px)`
      }
    }

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n

    const tick = () => {
      ring.x = lerp(ring.x, mouse.x, 0.12)
      ring.y = lerp(ring.y, mouse.y, 0.12)
      if (ringRef.current) {
        const offset = hovering ? 30 : 20
        ringRef.current.style.transform =
          `translate(${ring.x - offset}px, ${ring.y - offset}px) scale(${hovering ? 1.5 : 1})`
      }
      raf = requestAnimationFrame(tick)
    }

    const onEnter = () => {
      hovering = true
      if (ringRef.current) ringRef.current.style.borderColor = 'var(--accent)'
      if (dotRef.current)  dotRef.current.style.opacity = '0'
    }
    const onLeave = () => {
      hovering = false
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(255,255,255,0.45)'
      if (dotRef.current)  dotRef.current.style.opacity = '1'
    }

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    // Attach after a short delay so all elements have mounted
    const t = setTimeout(attach, 600)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      clearTimeout(t)
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none', zIndex: 9999,
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 40, height: 40, borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.45)',
          pointerEvents: 'none', zIndex: 9998,
          transition: 'border-color 0.3s, transform 0.05s linear',
          willChange: 'transform',
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  )
}
