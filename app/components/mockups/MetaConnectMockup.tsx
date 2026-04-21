'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export default function MetaConnectMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative grid h-full w-full place-items-center overflow-hidden ${className ?? ''}`}
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="meta-line" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(37, 211, 102, 0)" />
            <stop offset="50%" stopColor="rgba(37, 211, 102, 0.6)" />
            <stop offset="100%" stopColor="rgba(37, 211, 102, 0)" />
          </linearGradient>
        </defs>
        <motion.line
          x1="55"
          y1="50"
          x2="145"
          y2="50"
          stroke="url(#meta-line)"
          strokeWidth="0.6"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      <div className="relative flex items-center gap-10">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-base font-bold text-white shadow-lg">
            M
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-subtle">
            Meta
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-7 w-7 place-items-center rounded-full bg-accent text-black shadow-glow"
        >
          <CheckCircle2 className="h-4 w-4" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-surface shadow-glow">
            <Image
              src="/icons/whaapy-icon-128.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
            />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-bright">
            Whaapy
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-3 flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1">
        <CheckCircle2 className="h-3 w-3 text-accent-bright" />
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-bright">
          Embedded Signup oficial
        </span>
      </div>
    </div>
  )
}
