'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import MockFrame from './MockFrame'

const NODES = [
  { id: 'meta', label: 'Meta', short: 'M', tone: 'from-blue-500 to-blue-700', angle: 315 },
  { id: 'n8n', label: 'n8n', short: 'n8', tone: 'from-rose-500 to-orange-500', angle: 45 },
  { id: 'hl', label: 'HighLevel', short: 'HL', tone: 'from-amber-400 to-yellow-500', angle: 135 },
  { id: 'leads', label: 'Lead Ads', short: 'LA', tone: 'from-indigo-500 to-violet-600', angle: 225 },
] as const

export default function IntegrationsMockup({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <MockFrame title="integraciones · API · webhooks" className={className}>
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute inset-0 grid place-items-center">
          <div
            className="relative aspect-square w-full"
            style={{ maxWidth: 'min(100%, 380px)' }}
          >
            <svg
              viewBox="-100 -100 200 200"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <radialGradient id="int-core" cx="0" cy="0" r="80" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(37, 211, 102, 0.45)" />
                  <stop offset="60%" stopColor="rgba(37, 211, 102, 0.08)" />
                  <stop offset="100%" stopColor="rgba(37, 211, 102, 0)" />
                </radialGradient>
                <linearGradient id="int-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(37, 211, 102, 0)" />
                  <stop offset="50%" stopColor="rgba(37, 211, 102, 0.55)" />
                  <stop offset="100%" stopColor="rgba(37, 211, 102, 0)" />
                </linearGradient>
              </defs>

              <circle cx="0" cy="0" r="80" fill="url(#int-core)" />

              {[40, 65, 90].map((r, i) => (
                <motion.circle
                  key={r}
                  cx="0"
                  cy="0"
                  r={r}
                  fill="none"
                  stroke="rgb(var(--border))"
                  strokeWidth={0.6}
                  strokeDasharray="2 4"
                  initial={{ rotate: 0 }}
                  animate={reduced ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 60 + i * 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '0 0' }}
                />
              ))}

              {NODES.map((node) => {
                const rad = (node.angle * Math.PI) / 180
                const r = 75
                const x2 = Math.cos(rad) * r
                const y2 = Math.sin(rad) * r
                return (
                  <motion.line
                    key={`l-${node.id}`}
                    x1="0"
                    y1="0"
                    x2={x2}
                    y2={y2}
                    stroke="url(#int-line)"
                    strokeWidth={0.8}
                    strokeDasharray="3 3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatType: 'loop',
                      delay: NODES.indexOf(node) * 0.4,
                      ease: 'easeInOut',
                    }}
                  />
                )
              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={reduced ? undefined : { scale: [1, 1.06, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative grid h-[88px] w-[88px] place-items-center rounded-3xl border border-accent/30 bg-surface shadow-glow"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-3xl bg-accent/15 blur-xl"
                />
                <Image
                  src="/icons/whaapy-icon-128.png"
                  alt=""
                  width={56}
                  height={56}
                  className="relative h-14 w-14 rounded-xl"
                />
              </motion.div>
            </div>

            {NODES.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180
              const r = 38
              const xPct = 50 + Math.cos(rad) * r
              const yPct = 50 + Math.sin(rad) * r
              return (
                <motion.div
                  key={node.id}
                  className="absolute"
                  style={{
                    left: `${xPct}%`,
                    top: `${yPct}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={reduced ? undefined : { y: [0, -4, 0] }}
                    transition={{
                      duration: 4 + i * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.5,
                    }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${node.tone} text-xs font-semibold text-white shadow-lg ring-1 ring-white/10`}
                    >
                      {node.short}
                    </div>
                    <span className="rounded-full border border-border bg-surface/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted backdrop-blur">
                      {node.label}
                    </span>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-subtle">
            API · Webhooks · Native
          </p>
        </div>
      </div>
    </MockFrame>
  )
}
