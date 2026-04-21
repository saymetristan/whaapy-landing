'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Bot, MessageSquareText, ShieldCheck, Workflow } from 'lucide-react'
import InboxMockup from '../mockups/InboxMockup'
import AIChatMockup from '../mockups/AIChatMockup'
import AIControlMockup from '../mockups/AIControlMockup'
import IntegrationsMockup from '../mockups/IntegrationsMockup'

const SCENES = [
  {
    id: 'conversaciones',
    eyebrow: '01 · Inbox',
    title: 'Cada conversación, un solo lugar.',
    body: 'Tus chats, tus contactos, tu pipeline y tus seguimientos en una sola pantalla. Tu equipo deja de saltar entre apps.',
    icon: MessageSquareText,
    Mockup: InboxMockup,
  },
  {
    id: 'ia',
    eyebrow: '02 · Inteligencia',
    title: 'La IA responde con tu negocio.',
    body: 'Le enseñas tu catálogo, tus políticas y tu tono. Responde como tú lo harías, en segundos, las 24 horas.',
    icon: Bot,
    Mockup: AIChatMockup,
  },
  {
    id: 'control',
    eyebrow: '03 · Control',
    title: 'Cuando quieras, tomas el control.',
    body: 'Activas y desactivas la IA por conversación. Modo sugerencia para revisar antes de enviar. Sin sorpresas.',
    icon: ShieldCheck,
    Mockup: AIControlMockup,
  },
  {
    id: 'integraciones',
    eyebrow: '04 · Conectado',
    title: 'Tu CRM, tu n8n, tu Meta Ads. Conectados.',
    body: 'Webhooks, API, integración nativa con HighLevel, Meta Lead Ads y n8n. Lo que ya usas, ahora habla con WhatsApp.',
    icon: Workflow,
    Mockup: IntegrationsMockup,
  },
] as const

export default function ProductScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setIsDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    if (!sectionRef.current || !trackRef.current) return

    let cleanup: (() => void) | undefined

    ;(async () => {
      const gsapMod = await import('gsap')
      const stMod = await import('gsap/ScrollTrigger')
      const gsap = gsapMod.default
      const ScrollTrigger = stMod.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: 'top top',
        end: () => `+=${(SCENES.length - 1) * window.innerHeight}`,
        pin: trackRef.current,
        pinSpacing: true,
        scrub: 0.4,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.min(
            SCENES.length - 1,
            Math.round(self.progress * (SCENES.length - 1)),
          )
          setActive(idx)
        },
      })

      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('resize', refresh)

      cleanup = () => {
        window.removeEventListener('resize', refresh)
        trigger.kill()
      }
    })()

    return () => cleanup?.()
  }, [isDesktop])

  if (!isDesktop) {
    return (
      <section id="producto" className="relative py-24">
        <div className="container-page">
          <p className="eyebrow">Producto</p>
          <h2 className="display mt-6 text-display-lg text-balance">
            Una capa.<br /> Toda tu operación en WhatsApp.
          </h2>

          <div className="mt-12 space-y-12">
            {SCENES.map((scene) => {
              const Icon = scene.icon
              const Mockup = scene.Mockup
              return (
                <article key={scene.id}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent-deep dark:text-accent-bright">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-subtle">
                        {scene.eyebrow}
                      </p>
                      <h3 className="mt-1 text-lg font-medium text-text">{scene.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">{scene.body}</p>
                    </div>
                  </div>
                  <div className="mt-6 h-[420px]">
                    <Mockup />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  const sectionHeight = `${SCENES.length * 100}vh`

  return (
    <section
      id="producto"
      ref={sectionRef}
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div ref={trackRef} className="relative flex h-screen items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        <div className="container-page grid h-full max-h-[820px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
          <div className="relative">
            <p className="eyebrow">Producto</p>
            <h2 className="display mt-6 text-display-lg text-balance">
              Una capa.<br /> Toda tu operación en WhatsApp.
            </h2>

            <ul className="mt-12 space-y-1">
              {SCENES.map((scene, i) => {
                const isActive = i === active
                const Icon = scene.icon
                return (
                  <li key={scene.id} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        const top = sectionRef.current!.offsetTop
                        const dist = (SCENES.length - 1) * window.innerHeight
                        const target = top + (dist * i) / (SCENES.length - 1) + 4
                        const lenis = window.__lenis
                        if (lenis) lenis.scrollTo(target, { duration: 1 })
                        else window.scrollTo({ top: target, behavior: 'smooth' })
                      }}
                      className={`group flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition-colors ${
                        isActive ? 'bg-surface' : 'hover:bg-surface/60'
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-all ${
                          isActive
                            ? 'border-accent/40 bg-accent/10 text-accent-deep dark:text-accent-bright'
                            : 'border-border bg-surface text-text-subtle'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-subtle">
                          {scene.eyebrow}
                        </p>
                        <p
                          className={`mt-1 text-base font-medium transition-colors ${
                            isActive ? 'text-text' : 'text-text-muted'
                          }`}
                        >
                          {scene.title}
                        </p>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.35 }}
                            className="mt-2 text-sm leading-relaxed text-text-muted"
                          >
                            {scene.body}
                          </motion.p>
                        )}
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="relative h-[60vh] min-h-[420px] w-full lg:h-[78vh]">
            <div className="relative h-full w-full">
              {SCENES.map((scene, i) => {
                const Mockup = scene.Mockup
                return (
                  <motion.div
                    key={scene.id}
                    initial={false}
                    animate={{
                      opacity: i === active ? 1 : 0,
                      y: i === active ? 0 : 12,
                      scale: i === active ? 1 : 0.985,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                    style={{ pointerEvents: i === active ? 'auto' : 'none' }}
                  >
                    <Mockup />
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-6 flex items-center justify-center gap-1.5 lg:absolute lg:-right-3 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 lg:flex-col">
              {SCENES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === active ? 'w-6 bg-accent lg:h-6 lg:w-1' : 'w-1 bg-border lg:h-1 lg:w-1'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
