import { useEffect } from 'react'
import DotGrid from './dot-grid'

export default function HeroAsciiOne() {
  useEffect(() => {
    const embedScript = document.createElement('script')
    embedScript.type = 'text/javascript'
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `
    document.head.appendChild(embedScript)

    const style = document.createElement('style')
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 10% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important; visibility: hidden !important; opacity: 0 !important;
        position: absolute !important; left: -9999px !important; top: -9999px !important;
      }
    `
    document.head.appendChild(style)

    const hideBranding = () => {
      const selectors = [
        '[data-us-project]',
        '[data-us-project="OMzqyUv6M3kSnv0JeAtC"]',
        '.unicorn-studio-container',
        'canvas[aria-label*="Unicorn"]',
      ]
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((container) => {
          container.querySelectorAll('*').forEach((el) => {
            const text = (el.textContent || '').toLowerCase()
            const title = (el.getAttribute('title') || '').toLowerCase()
            const href = (el.getAttribute('href') || '').toLowerCase()
            if (
              text.includes('made with') || text.includes('unicorn') ||
              title.includes('made with') || title.includes('unicorn') ||
              href.includes('unicorn.studio')
            ) {
              const s = (el as HTMLElement).style
              s.display = 'none'; s.visibility = 'hidden'; s.opacity = '0'
              s.pointerEvents = 'none'; s.position = 'absolute'
              s.left = '-9999px'; s.top = '-9999px'
              try { el.remove() } catch (_) {}
            }
          })
        })
      })
    }

    hideBranding()
    const interval = setInterval(hideBranding, 50)
    const timers = [500, 1000, 2000, 5000, 10000].map((d) => setTimeout(hideBranding, d))

    return () => {
      clearInterval(interval)
      timers.forEach(clearTimeout)
      if (embedScript.parentNode) embedScript.parentNode.removeChild(embedScript)
      if (style.parentNode) style.parentNode.removeChild(style)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* ── UnicornStudio ASCII animation — desktop only ── */}
      <div className="absolute inset-0 w-full h-full hidden lg:block" style={{ zIndex: 0 }}>
        <div
          data-us-project="OMzqyUv6M3kSnv0JeAtC"
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {/* ── Dot grid: full background on mobile, interactive overlay on desktop ── */}
      {/* Mobile: solid dots background */}
      <div className="absolute inset-0 w-full h-full lg:hidden" style={{ zIndex: 1 }}>
        <DotGrid baseOpacity={0.1} maxOpacity={0.85} influence={130} />
      </div>
      {/* Desktop: semi-transparent dot overlay on top of UnicornStudio */}
      <div className="absolute inset-0 w-full h-full hidden lg:block" style={{ zIndex: 1 }}>
        <DotGrid baseOpacity={0.04} maxOpacity={0.55} influence={140} />
      </div>

      {/* Corner frame accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 pointer-events-none" style={{ zIndex: 20 }} />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 pointer-events-none" style={{ zIndex: 20 }} />
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 pointer-events-none" style={{ bottom: '5vh', zIndex: 20 }} />
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 pointer-events-none" style={{ bottom: '5vh', zIndex: 20 }} />

      {/* Content */}
      <div className="relative flex min-h-screen items-center px-6 sm:px-10 lg:justify-end lg:px-0 pt-20 pb-24" style={{ zIndex: 10, marginTop: '2vh' }}>
        <div className="w-full lg:w-1/2 lg:px-16 lg:pr-[10%]">
          <div className="max-w-lg lg:ml-auto">

            <div className="flex items-center gap-2 mb-4 opacity-60">
              <div className="w-8 h-px bg-white" />
              <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
              <div className="flex-1 h-px bg-white" />
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-none font-mono"
              style={{ letterSpacing: '0.04em' }}
            >
              DESIGNING<br />
              PRODUCTS.<br />
              <span style={{ color: 'var(--accent)' }}>SHIPPING</span><br />
              THEM TOO.
            </h1>

            <div className="hidden sm:flex gap-1 mb-4 opacity-30">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
              ))}
            </div>

            <div className="relative mb-6">
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-mono opacity-80">
                Product Manager at British Biologicals &amp; multidisciplinary designer —
                bridging beautiful interfaces with the strategy behind them.
              </p>
              <div className="hidden lg:block absolute -left-4 top-1/2 w-3 h-3 border border-white opacity-20" style={{ transform: 'translateY(-50%)' }}>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white" style={{ transform: 'translate(-50%, -50%)' }} />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-green-400 font-mono text-[10px] tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="relative px-6 py-3 bg-transparent text-white font-mono text-xs border border-white hover:bg-white hover:text-black transition-all duration-200 group text-center"
              >
                <span className="hidden sm:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="hidden sm:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity" />
                VIEW MY WORK
              </a>
              <a
                href="mailto:arshadsutar.work@gmail.com"
                className="px-6 py-3 bg-transparent border border-white/40 text-white/75 font-mono text-xs hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-center"
              >
                LET'S COLLABORATE ↗
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-2 mt-7 opacity-35">
              <span className="text-white text-[9px] font-mono">∞</span>
              <div className="flex-1 h-px bg-white" />
              <span className="text-white text-[9px] font-mono">ARSHAD.SUTAR.PROTOCOL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div
        className="absolute left-0 right-0 border-t border-white/20 bg-black/40 backdrop-blur-sm pointer-events-none"
        style={{ bottom: '5vh', zIndex: 20 }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span className="hidden lg:inline">SYSTEM.ACTIVE</span>
            <span className="lg:hidden">SYS.ACT</span>
            <div className="hidden lg:flex gap-1 items-end" style={{ height: 16 }}>
              {[12, 6, 14, 8, 10, 4, 16, 7].map((h, i) => (
                <div key={i} className="w-1 bg-white/30" style={{ height: h }} />
              ))}
            </div>
            <span>V1.0.0</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span className="hidden lg:inline">◐ RENDERING</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="hidden lg:inline">FRAME: ∞</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-stars {
          background-image:
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(1px 1px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 60%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent);
          opacity: 0.3;
        }
      `}</style>
    </section>
  )
}
