import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Brain,
  BriefcaseBusiness,
  Check,
  Clock3,
  Headphones,
  MessageCircle,
  MessageSquareText,
  Megaphone,
  PlugZap,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
  Users,
} from 'lucide-react'
import StickyWhatsApp from './StickyWhatsApp'

const WHATSAPP_URL =
  'https://wa.me/19288000091?text=Hola%2C%20me%20interesa%20conocer%20Whaapy'

const painPoints = [
  'Pierdes ventas cuando te escriben fuera de horario.',
  'Respondes tarde y el cliente se enfria.',
  'Tu equipo repite las mismas respuestas todos los dias.',
  'No tienes visibilidad clara de conversaciones y oportunidades.',
]

const wins = [
  'La IA responde al instante, 24/7, desde tu WhatsApp.',
  'Habla en tu tono y con la informacion real de tu negocio.',
  'Escala a un humano cuando hace falta cerrar o intervenir.',
  'Todo queda ordenado en inbox, pipeline y dashboard.',
]

const stats = [
  { value: '15h', label: 'ahorradas por semana' },
  { value: '3x', label: 'mas conversion sobre seguimiento manual' },
  { value: '<2s', label: 'tiempo de respuesta' },
]

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'Inbox unificado',
    description: 'Vista lista y pipeline para operar conversaciones y oportunidades.',
    icon: MessageSquareText,
  },
  {
    title: 'IA conversacional 24/7',
    description: 'Responde preguntas, filtra leads y empuja la conversacion.',
    icon: Bot,
  },
  {
    title: 'Base de conocimiento',
    description: 'Tu agente aprende productos, procesos, politicas y contexto.',
    icon: Brain,
  },
  {
    title: 'Templates Meta',
    description: 'Gestiona plantillas aprobadas para seguimiento y reactivacion.',
    icon: Megaphone,
  },
  {
    title: 'Dashboard y metricas',
    description: 'Mide actividad, tiempos de respuesta y comportamiento comercial.',
    icon: BarChart3,
  },
  {
    title: 'Handoff inteligente',
    description: 'La IA detecta cuando conviene pasar la conversacion a un humano.',
    icon: Users,
  },
  {
    title: 'API e integraciones',
    description: 'Conecta flujos con CRMs, n8n, automatizaciones y sistemas propios.',
    icon: PlugZap,
  },
  {
    title: 'Soporte en espanol',
    description: 'Implementacion rapida con acompanamiento real para tu equipo.',
    icon: Headphones,
  },
]

type Industry = {
  title: string
  description: string
  accent: string
  icon: LucideIcon
}

const industries: Industry[] = [
  {
    title: 'E-commerce',
    description:
      'Responde dudas de productos, stock, envios y seguimiento sin saturar a tu equipo.',
    accent: 'bg-sky-500',
    icon: ShoppingBag,
  },
  {
    title: 'Restaurantes',
    description:
      'Atiende reservas, menu, promociones y pedidos desde un solo flujo conversacional.',
    accent: 'bg-orange-500',
    icon: UtensilsCrossed,
  },
  {
    title: 'Servicios',
    description:
      'Agenda citas, responde preguntas frecuentes y captura leads fuera de horario.',
    accent: 'bg-violet-500',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Agencias',
    description:
      'Ofrece WhatsApp con IA como servicio para multiples clientes y verticales.',
    accent: 'bg-emerald-500',
    icon: Sparkles,
  },
]

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
      {children}
    </span>
  )
}

function BrandLogo({
  textClassName = 'gradient-text',
  iconClassName = 'h-10 w-10',
  labelClassName = 'text-2xl',
}: {
  textClassName?: string
  iconClassName?: string
  labelClassName?: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex items-center justify-center ${iconClassName}`}>
        <img
          src="/icons/whaapy-icon-64.png"
          alt="Whaapy"
          className="h-full w-full object-contain"
        />
      </div>
      <span className={`${labelClassName} font-bold ${textClassName}`}>Whaapy</span>
    </div>
  )
}

export default function BrochurePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-background">
        <section className="relative isolate border-b border-border/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.09),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(18,140,126,0.06),transparent_30%)]" />
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-10">
            <header className="glass-dark flex items-center justify-between rounded-full px-4 py-3 shadow-premium">
              <BrandLogo textClassName="text-text-primary" />

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-premium"
              >
                <span>WhatsApp</span>
              </a>
            </header>

            <div className="grid flex-1 items-center gap-14 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-16">
              <div className="max-w-2xl">
                <SectionBadge>Brochure Web</SectionBadge>

                <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-text-primary sm:text-6xl lg:text-7xl">
                  Tu WhatsApp <span className="gradient-text">vende por ti</span>{' '}
                  mientras tu descansas
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary sm:text-xl">
                  Asistente de IA que atiende, vende y agenda por tu negocio.
                  Responde en segundos, en tu tono, y escala al humano cuando
                  conviene.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary shimmer inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-premium-lg"
                  >
                    <span>Escribenos por WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-white/80 p-4 shadow-premium">
                    <Clock3 className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-2xl font-bold text-text-primary">24/7</p>
                    <p className="mt-1 text-sm text-text-secondary">
                      Atencion automatica sin depender del horario del equipo.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/80 p-4 shadow-premium">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-2xl font-bold text-text-primary">&lt;2s</p>
                    <p className="mt-1 text-sm text-text-secondary">
                      Tiempo de respuesta para no dejar enfriar al lead.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/80 p-4 shadow-premium">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-2xl font-bold text-text-primary">10 min</p>
                    <p className="mt-1 text-sm text-text-secondary">
                      Setup rapido para empezar sin proyecto eterno.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-3xl" />
                <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-premium-lg">
                  <Image
                    src="/brochure/inbox-chat.png"
                    alt="Inbox de Whaapy con conversacion y respuestas automaticas"
                    width={1024}
                    height={1024}
                    priority
                    className="h-auto w-full rounded-[1.4rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <SectionBadge>Antes y despues</SectionBadge>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Menos caos operativo. Mas conversion real.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Whaapy no solo responde mensajes. Ordena la operacion de ventas y
                te da velocidad, consistencia y seguimiento.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-red-200 bg-red-50 p-8 shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-500">
                  Sin Whaapy
                </p>
                <ul className="mt-6 space-y-4">
                  {painPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-primary">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="text-base leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-accent/20 bg-accent-light p-8 shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-hover">
                  Con Whaapy
                </p>
                <ul className="mt-6 space-y-4">
                  {wins.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-text-primary">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-base leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-4 rounded-[2rem] border border-border bg-white p-6 shadow-premium sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-surface p-5">
                  <p className="text-3xl font-bold tracking-[-0.03em] text-text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <SectionBadge>Producto</SectionBadge>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Todo desde un solo lugar
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Conversaciones, pipeline, configuracion del agente y metricas
                operativas integradas en la misma capa de trabajo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              <article className="group lg:col-span-7">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-premium transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/brochure/inbox-chat.png"
                    alt="Vista de inbox con chat activo"
                    width={1024}
                    height={1024}
                    className="h-auto w-full rounded-[1.4rem]"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-text-secondary">
                  Inbox inteligente con IA que responde en tu tono.
                </p>
              </article>

              <article className="group lg:col-span-5">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-premium transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/brochure/inbox-pipeline.png"
                    alt="Vista de pipeline visual para seguimiento comercial"
                    width={1024}
                    height={1024}
                    className="h-auto w-full rounded-[1.4rem]"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-text-secondary">
                  Pipeline visual para seguir oportunidades sin perder contexto.
                </p>
              </article>

              <article className="group lg:col-span-6">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-premium transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/brochure/agent-control.png"
                    alt="Panel de control del agente de Whaapy"
                    width={1024}
                    height={1024}
                    className="h-auto w-full rounded-[1.4rem]"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-text-secondary">
                  Configura el motor, reglas y personalidad de tu agente en
                  minutos.
                </p>
              </article>

              <article className="group lg:col-span-6">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-premium transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/brochure/dashboard-summary.png"
                    alt="Dashboard resumen con metricas de Whaapy"
                    width={1024}
                    height={1024}
                    className="h-auto w-full rounded-[1.4rem]"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-text-secondary">
                  Metricas en tiempo real para entender actividad y rendimiento.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <SectionBadge>Todo incluido</SectionBadge>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                  Operacion, automatizacion y conversion en la misma herramienta
                </h2>
                <p className="mt-4 max-w-xl text-lg text-text-secondary">
                  No es solo un bot. Es una capa comercial para responder mejor,
                  vender mejor y ordenar el seguimiento desde WhatsApp.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map(({ title, description, icon: Icon }) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-border bg-white p-5 shadow-premium transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-text-primary">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-white p-3 shadow-premium">
              <Image
                src="/brochure/templates-list.png"
                alt="Panel de templates de WhatsApp en Whaapy"
                width={1024}
                height={1024}
                className="h-auto w-full rounded-[1.4rem]"
              />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <SectionBadge>Ideal para</SectionBadge>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Equipos que venden por WhatsApp y ya no quieren operar a mano
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Whaapy funciona bien cuando la velocidad de respuesta y el orden
                comercial ya impactan ventas, servicio o conversion.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {industries.map(({ title, description, accent, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-[1.75rem] border border-border bg-white p-6 shadow-premium"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-text-secondary">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-[2.25rem] bg-text-primary px-6 py-12 text-white shadow-premium-lg sm:px-10 lg:px-12">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    Hablemos
                  </p>
                  <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                    Agenda una demo de 15 minutos. Sin compromiso.
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-white/70">
                    Te mostramos el producto, aterrizamos el caso de uso y vemos
                    si hace sentido para tu operacion.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 lg:items-end">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white shadow-premium-lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Escribenos por WhatsApp</span>
                  </a>
                  <p className="text-sm text-white/60">
                    whaapy.com | Hecho en Mexico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-text-secondary sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <BrandLogo
              textClassName="text-text-primary"
              iconClassName="h-8 w-8"
              labelClassName="text-xl"
            />
            <span>Todos los derechos reservados.</span>
          </div>
          <a
            href="https://whaapy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text-primary transition-colors hover:text-accent"
          >
            whaapy.com
          </a>
        </div>
      </footer>

      <StickyWhatsApp />
    </>
  )
}
