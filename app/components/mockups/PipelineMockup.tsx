'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import WhaapyFrame from './WhaapyFrame'

const COLUMNS = [
  { id: 'nuevo', label: 'Nuevo', count: 12, dot: 'bg-text-subtle' },
  { id: 'cal', label: 'Calificado', count: 8, dot: 'bg-sky-500' },
  { id: 'neg', label: 'Negociando', count: 5, dot: 'bg-amber-500' },
  { id: 'cer', label: 'Cerrado', count: 23, dot: 'bg-primary' },
] as const
type ColId = (typeof COLUMNS)[number]['id']

const STATIC_CARDS: {
  id: string
  col: ColId
  name: string
  tag: string
  tone: string
  amount: string
  init: string
}[] = [
  { id: 'a', col: 'nuevo', name: 'Lucía R.', tag: 'IG Ads', tone: 'bg-accent-light text-accent', amount: '$1.2K', init: 'L' },
  { id: 'b', col: 'nuevo', name: 'Mario T.', tag: 'Sitio', tone: 'bg-primary-light/80 text-primary', amount: '$890', init: 'M' },
  { id: 'c', col: 'cal', name: 'Sofía P.', tag: 'Refer.', tone: 'bg-accent-light text-accent', amount: '$2.4K', init: 'S' },
  { id: 'd', col: 'cal', name: 'Pablo V.', tag: 'IG Ads', tone: 'bg-accent-light text-accent', amount: '$1.8K', init: 'P' },
  { id: 'e', col: 'neg', name: 'Diana A.', tag: 'WApp', tone: 'bg-primary-light text-primary', amount: '$5.6K', init: 'D' },
  { id: 'f', col: 'neg', name: 'Hugo M.', tag: 'Sitio', tone: 'bg-primary-light/80 text-primary', amount: '$3.2K', init: 'H' },
  { id: 'g', col: 'cer', name: 'Marina G.', tag: 'WApp', tone: 'bg-primary-light text-primary', amount: '$4.1K', init: 'M' },
  { id: 'h', col: 'cer', name: 'Iván C.', tag: 'Refer.', tone: 'bg-accent-light text-accent', amount: '$2.9K', init: 'I' },
]

const MOVING = {
  id: 'mover',
  name: 'Andrea S.',
  tag: 'IG Ads',
  tone: 'bg-accent-light text-accent',
  amount: '$3.4K',
  init: 'A',
}

export default function PipelineMockup({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: false })
  const [colIdx, setColIdx] = useState(0)

  useEffect(() => {
    if (!inView) return
    const id = window.setInterval(() => {
      setColIdx((c) => (c + 1) % COLUMNS.length)
    }, 1900)
    return () => window.clearInterval(id)
  }, [inView])

  return (
    <div ref={ref} className="h-full">
      <WhaapyFrame title="Pipeline" subtitle="Embudo de ventas" className={className}>
        <div className="grid h-full grid-cols-4 gap-2 bg-surface p-3">
          {COLUMNS.map((col, idx) => (
            <div key={col.id} className="flex flex-col gap-2">
              <div
                className={`rounded-t-md px-1 pb-1 ${idx === colIdx ? 'border-t-2 border-primary' : ''}`}
              >
                <div className="flex items-center justify-between px-0.5 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${col.dot}`} />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      {col.label}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] font-medium text-text">{col.count}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 rounded-lg bg-surface-alt/60 p-1.5">
                {STATIC_CARDS.filter((c) => c.col === col.id).map((card) => (
                  <Card key={card.id} {...card} />
                ))}
                {idx === colIdx && (
                  <motion.div
                    layoutId="pipeline-mover"
                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  >
                    <Card {...MOVING} highlighted />
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </WhaapyFrame>
    </div>
  )
}

function Card({
  name,
  tag,
  tone,
  amount,
  init,
  highlighted,
}: {
  name: string
  tag: string
  tone: string
  amount: string
  init: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-md border bg-surface px-2 py-1.5 shadow-premium ${
        highlighted ? 'border-primary/50 shadow-[0_0_0_2px_rgba(37,211,102,0.2),0_8px_24px_-8px_rgba(37,211,102,0.35)]' : 'border-border'
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span className="grid h-4 w-4 place-items-center rounded-full bg-surface-2 font-display text-[8px] font-bold text-text">
          {init}
        </span>
        <p className="truncate font-display text-[10px] font-semibold text-text">{name}</p>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${tone}`}>{tag}</span>
        <span className="font-mono text-[9px] text-text-muted">{amount}</span>
      </div>
    </div>
  )
}
