import { useEffect, Component, type ReactNode } from 'react'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ color: 'red', padding: 32, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
          <strong>Runtime Error:</strong>{'\n'}{(this.state.error as Error).message}{'\n\n'}{(this.state.error as Error).stack}
        </div>
      )
    }
    return this.props.children
  }
}
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Feed Lenis into GSAP's ticker for ScrollTrigger sync
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    // Scroll-triggered fade-ins for every section
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        }
      )
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <ErrorBoundary>
      <Nav />
      <main>
        <ErrorBoundary><Hero /></ErrorBoundary>
        <ErrorBoundary><Work /></ErrorBoundary>
        <ErrorBoundary><About /></ErrorBoundary>
        <ErrorBoundary><Skills /></ErrorBoundary>
        <ErrorBoundary><Testimonial /></ErrorBoundary>
        <ErrorBoundary><Contact /></ErrorBoundary>
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
