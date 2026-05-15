import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  opacity: number
  radius: number
}

const SPACING = 34
const BASE_OPACITY = 0.1
const MAX_OPACITY = 0.85
const BASE_RADIUS = 1.1
const MAX_RADIUS = 3.2
const INFLUENCE = 130
const LERP = 0.1

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const dots = useRef<Dot[]>([])
  const raf = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const build = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      dots.current = []
      const cols = Math.ceil(canvas.width / SPACING) + 1
      const rows = Math.ceil(canvas.height / SPACING) + 1
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.current.push({
            x: c * SPACING,
            y: r * SPACING,
            opacity: BASE_OPACITY,
            radius: BASE_RADIUS,
          })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouse.current
      for (const d of dots.current) {
        const dx = d.x - mx
        const dy = d.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const strength = Math.max(0, 1 - dist / INFLUENCE)
        const tO = BASE_OPACITY + (MAX_OPACITY - BASE_OPACITY) * strength
        const tR = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * strength
        d.opacity += (tO - d.opacity) * LERP
        d.radius += (tR - d.radius) * LERP
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${d.opacity.toFixed(3)})`
        ctx.fill()
      }
      raf.current = requestAnimationFrame(draw)
    }

    const onResize = () => { build() }
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 } }
    const onTouch = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect()
      const t = e.touches[0]
      mouse.current = { x: t.clientX - r.left, y: t.clientY - r.top }
    }
    const onTouchEnd = () => { mouse.current = { x: -9999, y: -9999 } }

    build()
    draw()
    window.addEventListener('resize', onResize)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseleave', onLeave)
    canvas.addEventListener('touchmove', onTouch, { passive: true })
    canvas.addEventListener('touchend', onTouchEnd)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
      canvas.removeEventListener('touchmove', onTouch)
      canvas.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  )
}
