'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import MockFrame from './MockFrame'

const NODES = [
  { id: 'meta', label: 'Meta', short: 'M', tone: 'from-blue-500 to-blue-600', angle: 0 },
  { id: 'n8n', label: 'n8n', short: 'n8', tone: 'from-rose-500 to-orange-500', angle: 90 },
  { id: 'hl', label: 'HighLevel', short: 'HL', tone: 'from-amber-400 to-yellow-500', angle: 180 },
  { id: 'leads', label: 'Lead Ads', short: 'LA', tone: 'from-indigo-500 to-violet-500', angle: 270 },
] as const

export default function IntegrationsMockup({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <MockFrame title="integraciones · API · webhooks" className={className}>
      <div className="relative grid h-full place-items-center">
        <div className="relative h-[260px] w-[260px]">
          {[1, 2, 3].map((ring, i) => (
            <span
              key={ring}
              className="absolute inset-0 rounded-full border border-border"
              style={{ transform: `scale(${0.45 + i * 0.275})` }}
            />
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
            animate={reduced ? undefined : { rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180
              const r = 130
              const x = Math.cos(rad) * r
              const y = Math.sin(rad) * r
              return (
                <motion.div
                  key={node.id}
                  className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center"
                  style={{ x, y }}
                  animate={reduced ? undefined : { rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${node.tone} text-xs font-medium text-white shadow-lg ring-1 ring-black/10`}
                  >
                    {node.short}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface shadow-glow">
              <Image
                src="/icons/whaapy-icon-128.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-subtle">
            API · Webhooks · Native
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
