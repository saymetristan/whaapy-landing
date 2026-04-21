'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

declare global {
  // eslint-disable-next-line no-var
  var __lenis: Lenis | undefined
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    window.__lenis = lenis

    let cleanup: (() => void) | undefined
    let cancelled = false
    let rafId = 0

    ;(async () => {
      try {
        const gsapMod = await import('gsap')
        const stMod = await import('gsap/ScrollTrigger')
        if (cancelled) return
        const gsap = gsapMod.default
        const ScrollTrigger = stMod.ScrollTrigger
        gsap.registerPlugin(ScrollTrigger)

        const onLenisScroll = () => ScrollTrigger.update()
        lenis.on('scroll', onLenisScroll)

        const tickerCb = (time: number) => lenis.raf(time * 1000)
        gsap.ticker.add(tickerCb)
        gsap.ticker.lagSmoothing(0)

        cleanup = () => {
          lenis.off('scroll', onLenisScroll)
          gsap.ticker.remove(tickerCb)
        }
      } catch {
        const raf = (time: number) => {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      }
    })()

    return () => {
      cancelled = true
      cleanup?.()
      if (rafId) cancelAnimationFrame(rafId)
      window.__lenis = undefined
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
