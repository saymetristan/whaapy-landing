'use client'

import { motion } from 'framer-motion'

const PINGS = [
  { x: 30, y: 22, delay: 0, label: 'CDMX' },
  { x: 28, y: 34, delay: 0.3, label: 'GDL' },
  { x: 33, y: 44, delay: 0.6, label: 'BOG' },
  { x: 38, y: 58, delay: 0.9, label: 'LIM' },
  { x: 50, y: 72, delay: 1.2, label: 'BUE' },
  { x: 45, y: 82, delay: 1.5, label: 'SCL' },
  { x: 56, y: 60, delay: 1.8, label: 'SAO' },
]

export default function LatamMapMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative grid h-full w-full place-items-center overflow-hidden ${className ?? ''}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="dots-latam" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.35" fill="#9ca3af" fillOpacity="0.35" />
          </pattern>
          <mask id="latam-mask">
            <path
              d="M28 14 L36 14 L40 22 L42 32 L40 38 L36 44 L40 50 L44 56 L50 60 L56 58 L62 62 L60 70 L54 78 L48 84 L42 86 L40 80 L36 74 L34 66 L30 58 L26 50 L24 42 L26 32 L28 22 Z"
              fill="white"
            />
          </mask>
        </defs>

        <rect width="100" height="100" fill="url(#dots-latam)" mask="url(#latam-mask)" />

        <path
          d="M28 14 L36 14 L40 22 L42 32 L40 38 L36 44 L40 50 L44 56 L50 60 L56 58 L62 62 L60 70 L54 78 L48 84 L42 86 L40 80 L36 74 L34 66 L30 58 L26 50 L24 42 L26 32 L28 22 Z"
          fill="none"
          stroke="rgb(var(--border))"
          strokeWidth="0.4"
        />

        {PINGS.map((p) => (
          <g key={p.label}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="2"
              fill="rgba(37, 211, 102, 0.4)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 3, 3], opacity: [0.6, 0, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeOut',
              }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            />
            <circle cx={p.x} cy={p.y} r="0.9" fill="rgb(37, 211, 102)" />
          </g>
        ))}
      </svg>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border bg-surface/80 px-2.5 py-1 backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
          Soporte en español
        </span>
      </div>
    </div>
  )
}
