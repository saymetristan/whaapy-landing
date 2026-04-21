'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorBlob() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 320, damping: 30, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 320, damping: 30, mass: 0.4 })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduced || !fine) return
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const interactive = t.closest('a, button, [role="button"], [role="tab"], input, textarea')
      setHovering(!!interactive)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.55 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="-translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[260px] w-[260px] rounded-full bg-accent/35 blur-3xl mix-blend-screen" />
      </motion.div>
    </motion.div>
  )
}
