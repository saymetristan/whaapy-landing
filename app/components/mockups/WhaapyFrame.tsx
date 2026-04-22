import { ReactNode } from 'react'
import { Sparkles } from 'lucide-react'

export default function WhaapyFrame({
  title,
  subtitle,
  showAiBadge = false,
  children,
  className,
  innerClassName,
}: {
  title?: string
  subtitle?: string
  showAiBadge?: boolean
  children: ReactNode
  className?: string
  innerClassName?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-premium-lg ${className ?? ''}`}
    >
      {(title || showAiBadge) && (
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3">
          <div className="min-w-0">
            {title && (
              <p className="truncate font-display text-sm font-bold tracking-tight text-text">{title}</p>
            )}
            {subtitle && (
              <p className="truncate text-[10px] text-text-muted">{subtitle}</p>
            )}
          </div>
          {showAiBadge && (
            <span className="flex shrink-0 items-center gap-1 rounded-full border border-primary/25 bg-primary-light/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3 w-3" />
              IA
            </span>
          )}
        </div>
      )}
      <div className={`relative min-h-0 flex-1 overflow-hidden ${innerClassName ?? ''}`}>{children}</div>
    </div>
  )
}
