'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, MessageSquareText, ShieldCheck, Workflow } from 'lucide-react'

const SCENES = [
  {
    id: 'conversaciones',
    eyebrow: '01 · Inbox',
    title: 'Cada conversación, un solo lugar.',
    body: 'Tus chats, tus contactos, tu pipeline y tus seguimientos en una sola pantalla. Tu equipo deja de saltar entre apps.',
    icon: MessageSquareText,
    image: '/images/product-v2/inbox-chat.png',
    overlay: { top: '12%', left: '4%', width: '36%', height: '76%' },
  },
  {
    id: 'ia',
    eyebrow: '02 · Inteligencia',
    title: 'La IA responde con tu negocio.',
    body: 'Le enseñas tu catálogo, tus políticas y tu tono. Responde como tú lo harías, en segundos, las 24 horas.',
    icon: Bot,
    image: '/images/product-v2/inbox-chat.png',
    overlay: { top: '14%', left: '40%', width: '38%', height: '70%' },
  },
  {
    id: 'control',
    eyebrow: '03 · Control',
    title: 'Cuando quieras, tomas el control.',
    body: 'Activas y desactivas la IA por conversación. Modo sugerencia para revisar antes de enviar. Sin sorpresas.',
    icon: ShieldCheck,
    image: '/images/product-v2/agent-control.png',
    overlay: { top: '18%', left: '6%', width: '88%', height: '64%' },
  },
  {
    id: 'integraciones',
    eyebrow: '04 · Conectado',
    title: 'Tu CRM, tu n8n, tu Meta Ads. Conectados.',
    body: 'Webhooks, API, integración nativa con HighLevel, Meta Lead Ads y n8n. Lo que ya usas, ahora habla con WhatsApp.',
    icon: Workflow,
    image: '/images/product-v2/pipeline.png',
    overlay: { top: '20%', left: '4%', width: '92%', height: '60%' },
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
        end: () => `+=${(trackRef.current!.offsetHeight - window.innerHeight)}`,
        pin: trackRef.current,
        pinSpacing: false,
        scrub: 0.4,
        onUpdate: (self) => {
          const idx = Math.min(SCENES.length - 1, Math.floor(self.progress * SCENES.length))
          setActive(idx)
        },
      })

      cleanup = () => {
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
              return (
                <article key={scene.id}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent">
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

                  <div className="frame relative mt-6 aspect-[4/3] overflow-hidden">
                    <Image
                      src={scene.image}
                      alt={scene.title}
                      fill
                      sizes="100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="producto"
      ref={sectionRef}
      className="relative"
      style={{ height: `${SCENES.length * 100}vh` }}
    >
      <div ref={trackRef} className="relative flex h-screen items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        <div className="container-page grid h-full max-h-[820px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
          {/* Texto */}
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
                        const dist = sectionRef.current!.offsetHeight - window.innerHeight
                        window.scrollTo({ top: top + (dist * i) / SCENES.length + 4, behavior: 'smooth' })
                      }}
                      className={`group flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition-colors ${
                        isActive ? 'bg-surface' : 'hover:bg-surface/60'
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-all ${
                          isActive
                            ? 'border-accent/40 bg-accent/10 text-accent'
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

          {/* Frame */}
          <div className="relative h-[60vh] min-h-[420px] w-full lg:h-[78vh]">
            <div className="frame relative h-full w-full overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-bg/0 via-bg/0 to-bg/30"
              />
              {SCENES.map((scene, i) => (
                <motion.div
                  key={scene.id}
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.02 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-top"
                    priority={i === 0}
                  />
                  <motion.div
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute rounded-xl border-2 border-accent shadow-glow"
                    style={scene.overlay}
                  />
                </motion.div>
              ))}
            </div>

            {/* Progress dots */}
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
