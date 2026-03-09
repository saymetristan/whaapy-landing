'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Code2,
  Layers3,
  MessageSquareQuote,
  Shield,
  Sparkles,
  Split,
  ToggleLeft,
  Wrench,
} from 'lucide-react'

const problems = [
  'Demasiadas reglas críticas vivían en prompts.',
  'Los loops de tools y los edge cases eran más frágiles de controlar.',
  'Las conversaciones largas encarecían demasiado el contexto.',
  'La UI podía exponer settings sin enforcement real en runtime.',
]

const openclawPrimitives = [
  'compaction automática',
  'truncamiento de outputs de tools',
  'hooks del ciclo del agente',
  'tools con catálogo explícito',
  'memory y búsqueda híbrida',
  'mejor tolerancia a fallos',
]

const whaapyLayer = [
  'backend como control plane',
  'gateway privado como execution plane',
  'tools conectadas a operaciones reales',
  'handoff y pausa humana integrados al soporte',
  'routing por motor v2/v3',
  'aislamiento por negocio y contrato compatible con dashboard',
]

const practicalChanges = [
  {
    icon: Wrench,
    title: 'Tools más confiables',
    description:
      'El runtime está mejor preparado para usar herramientas con catálogo explícito, guardrails y menos dependencia de instrucciones ambiguas.',
  },
  {
    icon: ToggleLeft,
    title: 'Control operativo real',
    description:
      'Pausa humana, control global, control por conversación y handoff ya no son solo UX; forman parte del sistema.',
  },
  {
    icon: Split,
    title: 'Mejor manejo del canal',
    description:
      'Batching, split de respuestas y contexto de pausa reflejan cómo se comporta WhatsApp en el mundo real.',
  },
  {
    icon: Shield,
    title: 'Base más estable para escalar',
    description:
      'Mejor separación de responsabilidades, mejor control de contexto y mejor punto de partida para costo, observabilidad y rollout.',
  },
]

const comparisonRows = [
  ['Base runtime', 'Servicio legacy del agente', 'Gateway v3 inspirado en OpenClaw'],
  ['Filosofía', 'Más prompt-driven', 'Más system-driven'],
  ['Tools', 'Integradas, pero más frágiles en orquestación', 'Runtime preparado para tools y guardrails explícitos'],
  ['Routing', 'Camino legacy', 'Bifurcación real por aiEngine'],
  ['Batching', 'Existente, pero periférico', 'Parte del flujo v3 real'],
  ['UI', 'Settings históricos mezclados', 'UI más honesta con enforcement real'],
]

const TypewriterBrand = () => {
  const [displayText, setDisplayText] = useState('colme')
  const [isFullPhrase, setIsFullPhrase] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let isCancelled = false

    const typeDelay = (ms: number) =>
      new Promise((resolve) => {
        timeoutId = setTimeout(resolve, ms)
      })

    const animate = async () => {
      while (!isCancelled) {
        setDisplayText('colme')
        setIsFullPhrase(false)
        setShowCursor(true)
        await typeDelay(2200)
        if (isCancelled) break

        setDisplayText('col')
        await typeDelay(100)

        const text1 = 'laborative '
        for (let i = 1; i <= text1.length; i++) {
          if (isCancelled) break
          setDisplayText('col' + text1.substring(0, i))
          await typeDelay(28)
        }

        const text2 = 'llm '
        for (let i = 1; i <= text2.length; i++) {
          if (isCancelled) break
          setDisplayText('collaborative ' + text2.substring(0, i))
          await typeDelay(28)
        }

        const text3 = 'engine'
        for (let i = 1; i <= text3.length; i++) {
          if (isCancelled) break
          setDisplayText('collaborative llm ' + text3.substring(0, i))
          await typeDelay(28)
        }

        setIsFullPhrase(true)
        await typeDelay(600)
        setShowCursor(false)
        await typeDelay(3200)
        if (isCancelled) break

        setShowCursor(true)
        setIsFullPhrase(false)

        const fullText = 'collaborative llm engine'
        for (let i = fullText.length; i >= 3; i--) {
          if (isCancelled) break
          setDisplayText(fullText.substring(0, i))
          await typeDelay(10)
        }

        setDisplayText('colm')
        await typeDelay(50)
        setDisplayText('colme')
      }
    }

    animate()

    return () => {
      isCancelled = true
      clearTimeout(timeoutId)
    }
  }, [])

  if (isFullPhrase) {
    return (
      <div className="font-mono text-[9px] sm:text-xs md:text-sm tracking-tight sm:tracking-wide min-h-8 flex items-center justify-center select-none px-2 sm:px-4">
        <div className="text-center">
          <span className="text-accent font-bold">co</span>
          <span className="text-text-muted">llaborative </span>
          <span className="text-text-muted">l</span>
          <span className="text-accent font-bold">l</span>
          <span className="text-accent font-bold">m </span>
          <span className="text-accent font-bold">e</span>
          <span className="text-text-muted">ngine</span>
          <span className="ml-1 w-1.5 h-3 sm:ml-1.5 sm:w-2 sm:h-4 inline-block opacity-0" />
        </div>
      </div>
    )
  }

  return (
    <div className="font-mono text-[9px] sm:text-xs md:text-sm tracking-tight sm:tracking-wide min-h-8 flex items-center justify-center select-none px-2 sm:px-4">
      <div className="text-center">
        <span className="text-accent font-bold whitespace-pre">{displayText}</span>
        <span
          className={`ml-1 w-1.5 h-3 sm:ml-1.5 sm:w-2 sm:h-4 bg-accent inline-block ${
            showCursor ? 'animate-pulse' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  )
}

export default function Colme2Page() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <div className="gradient-mesh" />
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver a inicio</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/colme"
              className="hidden md:inline-flex text-xs font-semibold text-text-secondary hover:text-accent transition-colors"
            >
              Ver colme-1
            </Link>
            <span className="text-xs font-mono text-text-muted bg-surface px-3 py-1 rounded-full">
              v2.0 • Marzo 2026
            </span>
          </div>
        </div>
      </header>

      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              Nuevo motor de agentes
            </span>
          </div>

          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Presentamos <span className="gradient-text">colme-2</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed text-balance">
              La nueva arquitectura de agentes de Whaapy: inspirada en OpenClaw,
              construida para tools, handoff, control operativo y negocios reales en WhatsApp.
            </p>
          </div>

          <div className="text-center mt-6 animate-fade-in">
            <TypewriterBrand />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#architecture"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md"
            >
              Ver arquitectura
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/colme"
              className="inline-flex items-center gap-2 bg-surface hover:bg-border text-text-primary px-6 py-3 rounded-xl font-semibold transition-colors border border-border"
            >
              Comparar con colme-1
            </Link>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-6 pb-24">
        <section className="mb-16">
          <div className="glass-dark rounded-2xl p-8 md:p-10 shadow-premium">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-6">
              <strong>TL;DR:</strong> `colme-2` es la evolución de `colme-1`. Menos
              dependencia de prompt magic, más decisiones movidas al sistema, mejor
              base para tools, memory, batching, handoff y control operativo real.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              No es un cambio cosmético ni una pantalla nueva. Es un cambio de
              arquitectura para que los agentes de Whaapy sean más operables en
              producción.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por qué `colme-1` ya no bastaba</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            `colme-1` nos permitió operar agentes reales, integrar RAG y construir
            una primera generación útil del producto. Pero también nos mostró dónde
            estaba el techo.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem) => (
              <div key={problem} className="glass-dark rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MessageSquareQuote className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary leading-relaxed">{problem}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Inspirado en OpenClaw, construido para Whaapy
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            OpenClaw nos dio primitives de runtime. Whaapy construyó encima la capa
            de producto y operación que importa para negocios reales.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass-dark rounded-2xl p-6 shadow-premium">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">Lo que aporta OpenClaw</h3>
              </div>
              <ul className="space-y-3">
                {openclawPrimitives.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-dark rounded-2xl p-6 shadow-premium">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">Lo que construye Whaapy</h3>
              </div>
              <ul className="space-y-3">
                {whaapyLayer.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="glass-dark rounded-2xl p-8 md:p-10 shadow-premium border-l-4 border-accent">
            <p className="text-2xl md:text-3xl font-semibold text-text-primary leading-tight">
              Un agente de negocio no puede depender solo de que el modelo recuerde
              las instrucciones correctas en el momento correcto.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-6">
              La idea central de `colme-2` es mover decisiones críticas desde el prompt
              hacia mecanismos explícitos del sistema: routing, tools, pausa, handoff,
              split y control de ejecución.
            </p>
          </div>
        </section>

        <section id="architecture" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Cómo está construido</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            `colme-2` separa claramente el plano de control del plano de ejecución.
          </p>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <div className="glass-dark rounded-2xl p-6 shadow-premium">
              <div className="flex items-center gap-3 mb-6">
                <Layers3 className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold">Flujo del sistema</h3>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-border bg-white px-4 py-3 font-semibold">
                  Cliente en WhatsApp
                </div>
                <div className="pl-4 text-text-muted">↓ Meta Cloud API</div>
                <div className="rounded-xl border border-border bg-white px-4 py-3 font-semibold">
                  Whaapy Backend
                </div>
                <div className="pl-4 text-text-muted">↓ decide `aiEngine`</div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-surface px-4 py-4">
                    <p className="text-sm font-mono text-text-muted mb-1">v2</p>
                    <p className="font-semibold">colme-1 / runtime legacy</p>
                  </div>
                  <div className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-4">
                    <p className="text-sm font-mono text-accent mb-1">v3</p>
                    <p className="font-semibold">colme-2 / gateway runtime</p>
                  </div>
                </div>
                <div className="pl-4 text-text-muted">↓ tools, memory, guardrails, metrics</div>
                <div className="rounded-xl border border-border bg-white px-4 py-3 font-semibold">
                  Respuesta de vuelta a WhatsApp
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 shadow-premium">
                <h3 className="text-xl font-bold mb-4">Backend como control plane</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li>configuración del agente</li>
                  <li>estado de conversaciones</li>
                  <li>pausas y handoffs</li>
                  <li>analytics y envío final</li>
                </ul>
              </div>

              <div className="glass-dark rounded-2xl p-6 shadow-premium">
                <h3 className="text-xl font-bold mb-4">Gateway como execution plane</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li>construcción de prompt</li>
                  <li>resolución de modelo</li>
                  <li>llamado de tools</li>
                  <li>guardrails y métricas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Qué cambia en la práctica</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {practicalChanges.map((item) => (
              <div
                key={item.title}
                className="glass-dark rounded-2xl p-6 shadow-sm hover:shadow-premium transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">`colme-1` vs `colme-2`</h2>
          <div className="glass-dark rounded-2xl p-4 md:p-6 shadow-premium overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 pr-4 text-sm uppercase tracking-wide text-text-muted">
                    Dimensión
                  </th>
                  <th className="pb-4 pr-4 text-sm uppercase tracking-wide text-text-muted">
                    colme-1
                  </th>
                  <th className="pb-4 text-sm uppercase tracking-wide text-text-muted">
                    colme-2
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([dimension, v1, v2]) => (
                  <tr key={dimension} className="border-b border-border last:border-b-0">
                    <td className="py-4 pr-4 font-semibold text-text-primary">{dimension}</td>
                    <td className="py-4 pr-4 text-text-secondary">{v1}</td>
                    <td className="py-4 text-text-secondary">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="glass-dark rounded-2xl p-8 shadow-premium">
            <h2 className="text-3xl font-bold mb-6">Lo más importante: confiabilidad operativa</h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              No queríamos solo un agente que respondiera bien cuando todo sale bien.
              Queríamos un agente que siguiera siendo útil cuando el caso real se vuelve
              desordenado.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'conversaciones largas',
                'outputs grandes de tools',
                'pausas humanas',
                'negocios con configuraciones distintas',
                'rutas híbridas durante migración',
                'mejor base para observabilidad y costo',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="glass-dark rounded-2xl p-8 shadow-premium mb-12 text-center">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed">
              `colme-1` nos enseñó a construir un agente útil. <br className="hidden md:block" />
              <strong className="text-accent">`colme-2` nos obligó a construir un sistema confiable.</strong>
            </p>
          </div>

          <div className="text-center border-t border-border pt-12">
            <p className="text-text-secondary text-lg mb-6">
              Inspirado en OpenClaw, sí. Pero moldeado por los problemas reales que
              vimos operando agentes para negocios dentro de Whaapy.
            </p>
            <p className="text-text-muted text-sm mb-8 italic">
              `colme-2` ya forma parte de la nueva arquitectura v3 y convive con `colme-1`
              mientras hacemos la transición de forma gradual.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Conoce Whaapy
              </Link>
              <Link
                href="/colme"
                className="inline-flex items-center gap-2 bg-surface hover:bg-border text-text-primary px-6 py-3 rounded-xl font-semibold transition-colors border border-border"
              >
                Ver colme-1
              </Link>
              <a
                href="mailto:hola@whaapy.com"
                className="inline-flex items-center gap-2 bg-surface hover:bg-border text-text-primary px-6 py-3 rounded-xl font-semibold transition-colors border border-border"
              >
                Hablemos
              </a>
            </div>
          </div>
        </section>
      </article>

      <footer className="border-t-2 border-border py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-text-secondary">© 2026 Whaapy. Todos los derechos reservados.</p>
          <div className="mt-4 flex gap-6 justify-center flex-wrap">
            <Link href="/terminos" className="text-accent hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-accent hover:underline">
              Aviso de Privacidad
            </Link>
            <Link href="/colme" className="text-accent hover:underline">
              colme-1
            </Link>
            <Link href="/colme-2" className="text-accent hover:underline font-semibold">
              colme-2
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
