'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Bot, Hand, MessageSquareText, Sparkles, UserCog } from 'lucide-react'
import WhaapyFrame from './WhaapyFrame'

type Mode = 'auto' | 'sugerencia' | 'pausada'

const MODES: { id: Mode; label: string; icon: typeof Bot; desc: string }[] = [
  { id: 'auto', label: 'Auto', icon: Sparkles, desc: 'La IA responde sola, te avisa cuando escala.' },
  { id: 'sugerencia', label: 'Sugerencia', icon: UserCog, desc: 'La IA propone, tu equipo aprueba antes de enviar.' },
  { id: 'pausada', label: 'Pausada', icon: Hand, desc: 'Sólo respuestas humanas en esta conversación.' },
]

export default function AIControlMockup({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: false })
  const [mode, setMode] = useState<Mode>('auto')

  useEffect(() => {
    if (!inView) return
    const order: Mode[] = ['auto', 'sugerencia', 'pausada', 'auto']
    let i = 0
    const id = window.setInterval(() => {
      i = (i + 1) % order.length
      setMode(order[i])
    }, 2200)
    return () => window.clearInterval(id)
  }, [inView])

  const enabled = mode !== 'pausada'

  return (
    <div ref={ref} className="h-full">
      <WhaapyFrame title="Control IA" subtitle="Por conversación" showAiBadge className={className}>
        <div className="flex h-full flex-col gap-5 bg-surface px-5 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-light text-primary">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-xs font-semibold text-text">Asistente Whaapy</p>
                <p className="text-[10px] text-text-muted">Conversación con María González</p>
              </div>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={enabled}
              tabIndex={-1}
              className={`relative h-6 w-11 rounded-full transition-colors ${
                enabled ? 'bg-primary' : 'bg-text-subtle/35'
              }`}
            >
              <motion.span
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-surface shadow-premium ${
                  enabled ? 'left-[22px]' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          <div className="rounded-xl border border-border bg-surface-2 p-1 shadow-premium">
            {MODES.map((m) => {
              const isActive = m.id === mode
              const Icon = m.icon
              return (
                <button
                  key={m.id}
                  type="button"
                  tabIndex={-1}
                  className="relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[11px] transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="ai-mode-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-lg border border-primary/25 bg-primary-light"
                    />
                  )}
                  <Icon
                    className={`h-3.5 w-3.5 ${isActive ? 'text-primary' : 'text-text-subtle'}`}
                  />
                  <span className={isActive ? 'font-semibold text-text' : 'text-text-muted'}>
                    {m.label}
                  </span>
                  <span
                    className={`ml-auto h-2 w-2 rounded-full ${isActive ? 'bg-primary' : 'bg-transparent'}`}
                  />
                </button>
              )
            })}
          </div>

          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2.5 shadow-premium"
          >
            <MessageSquareText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-text-subtle" />
            <p className="text-[10.5px] leading-snug text-text-muted">
              {MODES.find((m) => m.id === mode)?.desc}
            </p>
          </motion.div>
        </div>
      </WhaapyFrame>
    </div>
  )
}
