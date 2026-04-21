'use client'

import { useMotionValue, useSpring } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'

export function useMagnetic(strength = 18) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const onMove = useCallback(
    (e: Event) => {
      const me = e as globalThis.MouseEvent
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (me.clientX - cx) / (rect.width / 2)
      const dy = (me.clientY - cy) / (rect.height / 2)
      x.set(dx * strength)
      y.set(dy * strength)
    },
    [strength, x, y],
  )

  const onLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [onMove, onLeave])

  return { ref, x: sx, y: sy }
}
