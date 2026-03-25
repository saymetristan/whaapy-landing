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
  'Te escriben fuera de horario y nadie contesta.',
  'Respondes tarde y el cliente ya le compro a otro.',
  'Tu equipo repite las mismas respuestas todo el dia.',
  'No sabes cuantas ventas se te escapan por WhatsApp.',
]

const wins = [
  'Whaapy contesta al instante, a cualquier hora, todos los dias.',
  'Responde como tu lo harias: con tu informacion, tus productos, tu estilo.',
  'Te avisa cuando el cliente necesita hablar con una persona real.',
  'Ves todas tus conversaciones y ventas organizadas en un solo lugar.',
]

const stats = [
  { value: '15h', label: 'menos pegado al celular cada semana' },
  { value: '3x', label: 'mas ventas cerradas vs responder a mano' },
  { value: '<2s', label: 'en contestar cualquier mensaje' },
]

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

const features: Feature[] = [
  {
    title: 'Todas tus conversaciones en un lugar',
    description: 'Ve chats, seguimientos y ventas pendientes sin brincar entre apps.',
    icon: MessageSquareText,
  },
  {
    title: 'Responde solo, las 24 horas',
    description: 'Tu asistente contesta preguntas, da precios y agenda sin que estes presente.',
    icon: Bot,
  },
  {
    title: 'Conoce tu negocio',
    description: 'Le ensenas tus productos, servicios y formas de trabajar. Responde con esa info.',
    icon: Brain,
  },
  {
    title: 'Mensajes de seguimiento',
    description: 'Envia recordatorios y promociones a clientes que dejaron de contestar.',
    icon: Megaphone,
  },
  {
    title: 'Ve como van tus ventas',
    description: 'Un tablero simple con cuantos mensajes recibes, en cuanto contestas y que pasa.',
    icon: BarChart3,
  },
  {
    title: 'Te avisa cuando intervenir',
    description: 'Si el cliente necesita algo que solo tu puedes resolver, Whaapy te lo pasa.',
    icon: Users,
  },
  {
    title: 'Se conecta con tus otras herramientas',
    description: 'Funciona con tu CRM, tu sistema de pedidos o lo que ya uses.',
    icon: PlugZap,
  },
  {
    title: 'Te acompanamos en espanol',
    description: 'Te ayudamos a configurarlo y a sacarle provecho desde el dia uno.',
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
    title: 'Tiendas en linea',
    description:
      'Contesta dudas de productos, disponibilidad y envios sin que tu equipo se sature.',
    accent: 'bg-sky-500',
    icon: ShoppingBag,
  },
  {
    title: 'Restaurantes y cafes',
    description:
      'Reservas, menu del dia, promociones y pedidos, todo desde WhatsApp.',
    accent: 'bg-orange-500',
    icon: UtensilsCrossed,
  },
  {
    title: 'Clinicas, despachos y servicios',
    description:
      'Agenda citas, responde lo que siempre preguntan y captura clientes fuera de horario.',
    accent: 'bg-violet-500',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Agencias que revenden',
    description:
      'Ofrecelo a tus clientes como un servicio mas y gana con cada cuenta.',
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
                <SectionBadge>Conoce Whaapy</SectionBadge>

                <h1 className="mt-6 text-balance text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-text-primary sm:text-6xl lg:text-7xl">
                  Tu WhatsApp <span className="gradient-text">vende por ti</span>{' '}
                  mientras tu descansas
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary sm:text-xl">
                  Un asistente que contesta a tus clientes, les da informacion
                  de tus productos y agenda citas. Todo desde tu WhatsApp, sin
                  que tengas que estar ahi.
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
                      Contesta aunque estes dormido o de vacaciones.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/80 p-4 shadow-premium">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-2xl font-bold text-text-primary">&lt;2s</p>
                    <p className="mt-1 text-sm text-text-secondary">
                      Le contesta al cliente antes de que se vaya con otro.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-white/80 p-4 shadow-premium">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-2xl font-bold text-text-primary">10 min</p>
                    <p className="mt-1 text-sm text-text-secondary">
                      Lo configuras rapido y empieza a trabajar ese mismo dia.
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
              <SectionBadge>El problema</SectionBadge>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Dejas de perder clientes que ya te escribieron.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Whaapy no es solo un bot. Responde como tu, da seguimiento y te
                avisa cuando el cliente necesita a una persona real.
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
              <SectionBadge>Asi se ve</SectionBadge>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Todo en un solo lugar, facil de usar
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Tus conversaciones, tus ventas pendientes, la configuracion de
                tu asistente y tus resultados. Todo junto, sin complicaciones.
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
                  Todos tus chats de WhatsApp en una sola pantalla. La IA contesta por ti.
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
                  Arrastra cada cliente por etapa: nuevo, interesado, cotizado, cerrado.
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
                  Dile a tu asistente como hablar, que ofrecer y cuando pedirte ayuda.
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
                  Ve cuantos mensajes recibes, en cuanto contestas y como van tus ventas.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <SectionBadge>Que incluye</SectionBadge>
                <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                  Todo lo que necesitas para vender mas por WhatsApp
                </h2>
                <p className="mt-4 max-w-xl text-lg text-text-secondary">
                  Whaapy junta las conversaciones, el seguimiento y la
                  inteligencia para que tu equipo venda sin perder clientes.
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
              <SectionBadge>Para quien es</SectionBadge>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Si vendes por WhatsApp y ya no das abasto, esto es para ti
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                Negocios que reciben muchos mensajes y pierden ventas por no
                contestar rapido o no dar seguimiento.
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
                    Platicamos 15 minutos y ves si te sirve. Sin compromiso.
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-white/70">
                    Te ensenamos como funciona con tu tipo de negocio y
                    respondemos todas tus dudas.
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
