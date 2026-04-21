import { ReactNode } from 'react'

export default function MockFrame({
  title,
  children,
  className,
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`frame relative flex h-full w-full flex-col overflow-hidden ${className ?? ''}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-text-subtle/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-subtle/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-subtle/20" />
        </div>
        {title && (
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em] text-text-subtle">
            {title}
          </span>
        )}
      </div>
      <div className="relative flex-1 overflow-hidden bg-surface">{children}</div>
    </div>
  )
}
