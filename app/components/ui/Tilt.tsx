'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

export default function Tilt({
  children,
  className,
  max = 8,
  perspective = 1400,
  scale = 1,
  glare = false,
}: {
  children: ReactNode
  className?: string
  max?: number
  perspective?: number
  scale?: number
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 180, damping: 22 })
  const sy = useSpring(my, { stiffness: 180, damping: 22 })

  const rotateY = useTransform(sx, [0, 1], [max, -max])
  const rotateX = useTransform(sy, [0, 1], [-max, max])
  const glareX = useTransform(sx, [0, 1], ['0%', '100%'])
  const glareY = useTransform(sy, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mx.set((e.clientX - rect.left) / rect.width)
      my.set((e.clientY - rect.top) / rect.height)
    }
    const onLeave = () => {
      mx.set(0.5)
      my.set(0.5)
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [mx, my])

  return (
    <motion.div
      ref={ref}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className ?? ''}`}
    >
      <motion.div
        style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
        className="will-change-transform"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
            style={{
              background: useTransform(
                [glareX, glareY] as never,
                ([x, y]: string[]) =>
                  `radial-gradient(400px circle at ${x} ${y}, rgba(255,255,255,0.1), transparent 60%)`,
              ),
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
