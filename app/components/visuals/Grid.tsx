type Variant = 'dotted' | 'lines' | 'lines-v'

export default function Grid({
  variant = 'dotted',
  className,
  fade = 'radial',
}: {
  variant?: Variant
  className?: string
  fade?: 'radial' | 'top' | 'bottom' | 'none'
}) {
  const bg =
    variant === 'dotted'
      ? 'radial-gradient(rgba(37, 211, 102, 0.12) 1px, transparent 1px)'
      : variant === 'lines'
        ? 'linear-gradient(rgba(37, 211, 102, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 211, 102, 0.04) 1px, transparent 1px)'
        : 'linear-gradient(90deg, rgba(37, 211, 102, 0.04) 1px, transparent 1px)'

  const size = variant === 'dotted' ? '24px 24px' : '64px 64px'

  const mask =
    fade === 'radial'
      ? 'radial-gradient(ellipse at center, black 0%, black 40%, transparent 72%)'
      : fade === 'top'
        ? 'linear-gradient(to bottom, black 0%, transparent 80%)'
        : fade === 'bottom'
          ? 'linear-gradient(to top, black 0%, transparent 80%)'
          : 'none'

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className ?? ''}`}
      style={{
        backgroundImage: bg,
        backgroundSize: size,
        WebkitMaskImage: mask !== 'none' ? mask : undefined,
        maskImage: mask !== 'none' ? mask : undefined,
      }}
    />
  )
}
