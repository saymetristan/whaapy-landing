'use client'

type Variant = 'hero' | 'subtle' | 'corner'

const VARIANTS: Record<Variant, { stops: { x: number; y: number; r: number; color: string }[] }> = {
  hero: {
    stops: [
      { x: 22, y: 18, r: 45, color: 'rgba(37, 211, 102, 0.12)' },
      { x: 78, y: 22, r: 42, color: 'rgba(139, 92, 246, 0.08)' },
      { x: 50, y: 85, r: 38, color: 'rgba(37, 211, 102, 0.06)' },
    ],
  },
  subtle: {
    stops: [
      { x: 30, y: 30, r: 40, color: 'rgba(37, 211, 102, 0.08)' },
      { x: 75, y: 65, r: 44, color: 'rgba(139, 92, 246, 0.06)' },
    ],
  },
  corner: {
    stops: [
      { x: 92, y: 8, r: 34, color: 'rgba(37, 211, 102, 0.1)' },
      { x: 8, y: 92, r: 28, color: 'rgba(139, 92, 246, 0.08)' },
    ],
  },
}

export default function MeshGradient({
  variant = 'hero',
  className,
  blur = 100,
  noise = false,
}: {
  variant?: Variant
  className?: string
  blur?: number
  noise?: boolean
}) {
  const v = VARIANTS[variant]

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ filter: `blur(${blur}px)` }}
      >
        {v.stops.map((s, i) => (
          <radialGradient
            key={i}
            id={`mesh-${variant}-${i}`}
            cx={s.x}
            cy={s.y}
            r={s.r}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={s.color} />
            <stop offset="100%" stopColor={s.color.replace(/[\d.]+\)$/, '0)')} />
          </radialGradient>
        ))}
        {v.stops.map((_, i) => (
          <rect key={i} width="100" height="100" fill={`url(#mesh-${variant}-${i})`} />
        ))}
      </svg>
      {noise && (
        <div
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      )}
    </div>
  )
}
