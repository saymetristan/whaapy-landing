'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MockFrame from './MockFrame'

const COLUMNS = ['Nuevo', 'Calificado', 'Negociando', 'Cerrado'] as const
type Col = (typeof COLUMNS)[number]

const STATIC_CARDS: { id: string; col: Col; name: string; tag: string; tone: string }[] = [
  { id: 'a', col: 'Nuevo', name: 'Lucía R.', tag: 'IG Ads', tone: 'bg-fuchsia-400/15 text-fuchsia-500' },
  { id: 'b', col: 'Nuevo', name: 'Mario T.', tag: 'Sitio', tone: 'bg-sky-400/15 text-sky-500' },
  { id: 'c', col: 'Calificado', name: 'Sofía P.', tag: 'Refer.', tone: 'bg-violet-400/15 text-violet-500' },
  { id: 'd', col: 'Calificado', name: 'Pablo V.', tag: 'IG Ads', tone: 'bg-fuchsia-400/15 text-fuchsia-500' },
  { id: 'e', col: 'Negociando', name: 'Diana A.', tag: 'WApp', tone: 'bg-emerald-400/15 text-emerald-500' },
  { id: 'f', col: 'Negociando', name: 'Hugo M.', tag: 'Sitio', tone: 'bg-sky-400/15 text-sky-500' },
  { id: 'g', col: 'Cerrado', name: 'Marina G.', tag: 'WApp', tone: 'bg-emerald-400/15 text-emerald-500' },
]

const MOVING = { id: 'mover', name: 'Andrea S.', tag: 'IG Ads', tone: 'bg-fuchsia-400/15 text-fuchsia-500' }

export default function PipelineMockup({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: false })
  const [colIdx, setColIdx] = useState(0)

  useEffect(() => {
    if (!inView) return
    const id = window.setInterval(() => {
      setColIdx((c) => (c + 1) % COLUMNS.length)
    }, 1800)
    return () => window.clearInterval(id)
  }, [inView])

  return (
    <div ref={ref}>
      <MockFrame title="pipeline · embudo" className={className}>
        <div className="grid h-full grid-cols-4 gap-2 p-3">
          {COLUMNS.map((col, idx) => (
            <div key={col} className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-text-muted">
                  {col}
                </span>
                <span className="font-mono text-[9px] text-text-subtle">
                  {STATIC_CARDS.filter((c) => c.col === col).length + (idx === colIdx ? 1 : 0)}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 rounded-lg bg-surface-2/40 p-2">
                {STATIC_CARDS.filter((c) => c.col === col).map((card) => (
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
      </MockFrame>
    </div>
  )
}

function Card({
  name,
  tag,
  tone,
  highlighted,
}: {
  name: string
  tag: string
  tone: string
  highlighted?: boolean
}) {
  return (
    <div
      className={`rounded-md border bg-surface px-2 py-1.5 ${
        highlighted
          ? 'border-accent/40 shadow-[0_0_0_3px_rgba(37,211,102,0.12)]'
          : 'border-border'
      }`}
    >
      <p className="text-[10px] font-medium text-text">{name}</p>
      <span
        className={`mt-1 inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-medium ${tone}`}
      >
        {tag}
      </span>
    </div>
  )
}
