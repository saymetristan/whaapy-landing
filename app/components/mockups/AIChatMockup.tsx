'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles } from 'lucide-react'
import WhaapyFrame from './WhaapyFrame'

const item = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.55, delayChildren: 0.2 } },
}

function Bubble({ side, ai, text }: { side: 'in' | 'out'; ai?: boolean; text: string }) {
  return (
    <motion.div
      variants={item}
      className={`max-w-[85%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
        side === 'in'
          ? 'self-start rounded-bl-md bg-surface text-text shadow-premium'
          : 'self-end rounded-br-md bg-primary text-primary-foreground shadow-premium'
      }`}
    >
      {ai && (
        <span
          className={`mb-0.5 flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.14em] ${
            side === 'out' ? 'text-primary-foreground/90' : 'text-primary'
          }`}
        >
          <Sparkles className="h-2.5 w-2.5" />
          Whaapy IA
        </span>
      )}
      {text}
    </motion.div>
  )
}

function TypingDots() {
  return (
    <motion.div
      variants={item}
      className="self-end flex items-center gap-1 rounded-2xl rounded-br-md bg-primary px-3 py-2 shadow-premium"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-primary-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </motion.div>
  )
}

export default function AIChatMockup({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4, once: false })

  return (
    <div ref={ref} className="h-full">
      <WhaapyFrame
        title="Conversación"
        subtitle="IA · respuesta automática"
        showAiBadge
        className={className}
        innerClassName="bg-surface-alt/90"
      >
        <div className="chat-pattern absolute inset-0 opacity-40" aria-hidden />
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative z-[1] flex h-full flex-col justify-end gap-2 px-4 py-4"
        >
          <Bubble side="in" text="Hola! ¿Tienen disponible el plan de 12 meses?" />
          <TypingDots />
          <Bubble
            side="out"
            ai
            text="¡Hola Andrea! El plan anual incluye 2 meses gratis y soporte prioritario."
          />
          <Bubble side="out" ai text="¿Quieres que te lo deje apartado y te paso el link de pago?" />
          <Bubble side="in" text="Sí porfa, me lo apartas." />
        </motion.div>
      </WhaapyFrame>
    </div>
  )
}
