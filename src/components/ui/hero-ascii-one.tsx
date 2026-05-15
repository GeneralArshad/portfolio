import DotGrid from './dot-grid'

export default function HeroAsciiOne() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Interactive dot grid — full bleed, handles both mouse and touch */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid />
      </div>

      {/* Corner frame accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20 pointer-events-none" />
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20 pointer-events-none" style={{ bottom: '5vh' }} />
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20 pointer-events-none" style={{ bottom: '5vh' }} />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:justify-end lg:px-0 pt-20 pb-24" style={{ marginTop: '2vh' }}>
        <div className="w-full lg:w-1/2 lg:px-16 lg:pr-[10%]">
          <div className="max-w-lg lg:ml-auto">

            {/* Decorative top line */}
            <div className="flex items-center gap-2 mb-4 opacity-60">
              <div className="w-8 h-px bg-white" />
              <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
              <div className="flex-1 h-px bg-white" />
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-none font-mono"
              style={{ letterSpacing: '0.04em' }}
            >
              DESIGNING<br />
              PRODUCTS.<br />
              <span style={{ color: 'var(--accent)' }}>SHIPPING</span><br />
              THEM TOO.
            </h1>

            {/* Dot row — sm+ */}
            <div className="hidden sm:flex gap-1 mb-4 opacity-30">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
              ))}
            </div>

            {/* Description */}
            <div className="relative mb-6">
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed font-mono opacity-80">
                Product Manager at British Biologicals &amp; multidisciplinary designer —
                bridging beautiful interfaces with the strategy behind them.
              </p>
              <div className="hidden lg:block absolute -left-4 top-1/2 w-3 h-3 border border-white opacity-20" style={{ transform: 'translateY(-50%)' }}>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white" style={{ transform: 'translate(-50%, -50%)' }} />
              </div>
            </div>

            {/* Available badge */}
            <div className="flex items-center gap-2 mb-7 opacity-90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-green-400 font-mono text-[10px] tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            {/* CTAs */}
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

            {/* Bottom notation — lg+ */}
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
        className="absolute left-0 right-0 z-20 border-t border-white/20 bg-black/40 backdrop-blur-sm pointer-events-none"
        style={{ bottom: '5vh' }}
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
    </section>
  )
}
