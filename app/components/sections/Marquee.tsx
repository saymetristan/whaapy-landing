'use client'

import { motion, useReducedMotion } from 'framer-motion'

const ITEMS = [
  { label: 'Meta Cloud API', icon: 'meta' },
  { label: 'WhatsApp Business', icon: 'wapp' },
  { label: 'OpenAI', icon: 'oai' },
  { label: 'n8n', icon: 'n8n' },
  { label: 'HighLevel', icon: 'hl' },
  { label: 'Meta Lead Ads', icon: 'lead' },
  { label: 'Webhooks', icon: 'wh' },
  { label: 'API REST', icon: 'api' },
] as const

function Mark({ icon }: { icon: string }) {
  const map: Record<string, string> = {
    meta: 'M',
    wapp: 'W',
    oai: '◯',
    n8n: '⌘',
    hl: 'HL',
    lead: '◆',
    wh: '⇄',
    api: '{}',
  }
  return (
    <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-surface text-[10px] font-semibold text-text-muted shadow-premium">
      {map[icon]}
    </span>
  )
}

export default function Marquee() {
  const reduced = useReducedMotion()
  const loop = [...ITEMS, ...ITEMS]

  return (
    <section className="relative border-y border-border bg-surface py-8">
      <div className="container-page">
        <p className="text-center text-label text-text-muted">Conectado con tu stack</p>
        <div className="mask-marquee mt-5 overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-12 will-change-transform"
            animate={reduced ? undefined : { x: ['0%', '-50%'] }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            {loop.map((it, i) => (
              <div key={i} className="flex shrink-0 items-center gap-2.5">
                <Mark icon={it.icon} />
                <span className="text-sm font-medium text-text-muted">{it.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
