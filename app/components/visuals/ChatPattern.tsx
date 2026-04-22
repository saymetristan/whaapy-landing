export default function ChatPattern({
  className,
  opacity = 0.35,
}: {
  className?: string
  opacity?: number
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 chat-pattern ${className ?? ''}`}
      style={{ opacity }}
    />
  )
}
