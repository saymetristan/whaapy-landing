'use client'

import { useReducedMotion } from 'framer-motion'

type Placement = 'hero' | 'section' | 'cta'

export default function LiquidBlobs({
  placement = 'hero',
  className,
}: {
  placement?: Placement
  className?: string
}) {
  const reduced = useReducedMotion()

  if (reduced) return null

  const positions =
    placement === 'hero'
      ? {
          green: '-right-32 -top-24 md:right-0 md:top-0',
          purple: '-left-40 bottom-0 md:left-0 md:bottom-[-10%]',
        }
      : placement === 'cta'
        ? {
            green: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150',
            purple: 'hidden',
          }
        : {
            green: 'right-[-20%] top-[-30%]',
            purple: 'left-[-15%] bottom-[-20%]',
          }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
    >
      <div className={`liquid-blob absolute ${positions.green}`} />
      {positions.purple !== 'hidden' && (
        <div className={`liquid-blob liquid-blob-purple absolute ${positions.purple}`} />
      )}
    </div>
  )
}
