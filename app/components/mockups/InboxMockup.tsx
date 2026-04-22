'use client'

import { motion } from 'framer-motion'
import { Bot, Filter, Inbox, Search, Send, Sparkles, Tag } from 'lucide-react'
import WhaapyFrame from './WhaapyFrame'

const CHATS = [
  { name: 'María González', preview: '¿Sigue disponible el descuento?', time: '10:42', unread: 2, color: 'from-fuchsia-400 to-rose-500', online: true, tag: 'VIP' },
  { name: 'Carlos Méndez', preview: 'Perfecto, hago la transferencia.', time: '10:31', unread: 0, color: 'from-amber-400 to-orange-500', online: false, tag: null },
  { name: 'Lucía Romero', preview: 'Gracias por la respuesta tan rápida', time: '10:18', unread: 0, color: 'from-cyan-400 to-sky-500', online: true, tag: 'Hot' },
  { name: 'Diego Ramírez', preview: 'Voy a revisar el catálogo.', time: '09:55', unread: 1, color: 'from-emerald-400 to-teal-500', online: false, tag: null },
  { name: 'Andrea Soto', preview: 'Mi pedido aún no llega...', time: '09:44', unread: 3, color: 'from-indigo-400 to-violet-500', online: false, tag: 'Soporte' },
  { name: 'Pablo Vargas', preview: 'Quiero agendar una demo', time: '09:21', unread: 0, color: 'from-pink-400 to-rose-500', online: true, tag: null },
]

const TAB_TONE: Record<string, string> = {
  VIP: 'bg-amber-100 text-amber-700',
  Hot: 'bg-rose-100 text-rose-600',
  Soporte: 'bg-sky-100 text-sky-700',
}

const FILTERS = [
  { label: 'Todos', count: 142, active: true },
  { label: 'Sin responder', count: 23, active: false },
  { label: 'IA activa', count: 89, active: false },
]

function Avatar({ name, color, online }: { name: string; color: string; online?: boolean }) {
  return (
    <span className="relative">
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${color} font-display text-xs font-bold text-white`}
      >
        {name.charAt(0)}
      </span>
      {online && (
        <span className="absolute bottom-0 right-0 grid h-2.5 w-2.5 place-items-center rounded-full border-2 border-surface bg-primary" />
      )}
    </span>
  )
}

export default function InboxMockup({ className }: { className?: string }) {
  return (
    <WhaapyFrame
      title="Inbox"
      subtitle="inbox.whaapy.com"
      showAiBadge
      className={className}
      innerClassName="bg-surface-alt/50"
    >
      <div className="grid h-full min-h-[280px] grid-cols-[minmax(0,150px),minmax(0,1fr)_minmax(0,1.25fr)] md:grid-cols-[180px,minmax(0,1fr)_minmax(0,1.4fr)]">
        <aside className="flex flex-col border-r border-border bg-primary-light/40 px-2 py-3">
          <div className="space-y-0.5">
            {[
              { icon: Inbox, label: 'Conversaciones', active: true },
              { icon: Sparkles, label: 'IA · Auto', active: false },
              { icon: Tag, label: 'Etiquetas', active: false },
              { icon: Bot, label: 'Agentes', active: false },
            ].map((it) => {
              const Icon = it.icon
              return (
                <div
                  key={it.label}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium ${
                    it.active ? 'bg-surface text-primary shadow-sm' : 'text-text-muted'
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  {it.label}
                </div>
              )
            })}
          </div>

          <div className="mt-4 border-t border-primary/15 pt-3">
            <p className="px-2 text-label text-text-subtle">Etiquetas</p>
            <div className="mt-2 space-y-0.5 px-2">
              {[
                { dot: 'bg-amber-400', label: 'VIP' },
                { dot: 'bg-rose-400', label: 'Hot leads' },
                { dot: 'bg-sky-400', label: 'Soporte' },
                { dot: 'bg-violet-400', label: 'Demos' },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-[10px] text-text-muted">
                  <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex flex-col border-r border-border bg-surface">
          <div className="border-b border-border px-3 py-2">
            <div className="flex items-center gap-2 rounded-md border border-border bg-surface-2 px-2 py-1">
              <Search className="h-3 w-3 text-text-subtle" />
              <span className="text-[10px] text-text-subtle">Buscar conversaciones</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {FILTERS.map((f) => (
                <span
                  key={f.label}
                  className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                    f.active ? 'bg-primary-light text-primary' : 'text-text-muted'
                  }`}
                >
                  {f.label}
                  <span className="font-mono text-[9px] opacity-70">{f.count}</span>
                </span>
              ))}
              <Filter className="ml-auto h-3 w-3 text-text-subtle" />
            </div>
          </div>
          <ul className="flex-1 overflow-hidden">
            {CHATS.map((chat, i) => (
              <li
                key={chat.name}
                className={`flex items-center gap-3 border-b border-border/70 px-3 py-2.5 ${
                  i === 0 ? 'bg-primary-light/50' : ''
                }`}
              >
                <Avatar name={chat.name} color={chat.color} online={chat.online} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate font-display text-[11px] font-semibold text-text">{chat.name}</p>
                    <span className="font-mono text-[9px] text-text-subtle">{chat.time}</span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <p className="truncate text-[10px] text-text-muted">{chat.preview}</p>
                    {chat.tag && (
                      <span
                        className={`shrink-0 rounded-sm px-1 py-px text-[8px] font-semibold ${TAB_TONE[chat.tag]}`}
                      >
                        {chat.tag}
                      </span>
                    )}
                  </div>
                </div>
                {chat.unread > 0 && (
                  <span className="grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
                    {chat.unread}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex flex-col bg-surface-alt/80">
          <div className="chat-pattern absolute inset-0 opacity-[0.35]" aria-hidden />
          <div className="relative z-[1] flex items-center gap-3 border-b border-border/80 bg-surface/90 px-4 py-2.5 backdrop-blur-sm">
            <Avatar name={CHATS[0].name} color={CHATS[0].color} online />
            <div className="min-w-0 flex-1">
              <p className="font-display text-[11px] font-semibold text-text">{CHATS[0].name}</p>
              <p className="text-[10px] text-text-muted">+52 55 1234 5678 · en línea</p>
            </div>
            <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary-light px-2 py-0.5 text-[9px] font-semibold text-primary">
              <Sparkles className="h-2.5 w-2.5" />
              IA activa
            </span>
          </div>
          <div className="relative z-[1] flex flex-1 flex-col justify-end gap-2 px-4 py-3 md:px-5 md:py-4">
            <div className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-surface px-3 py-2 text-[11px] text-text shadow-premium">
              Hola, ¿sigue disponible el descuento que vi en su historia?
              <span className="mt-1 block text-[8px] text-text-subtle">10:41</span>
            </div>
            <div className="max-w-[78%] self-end rounded-2xl rounded-br-md bg-primary px-3 py-2 text-[11px] text-primary-foreground shadow-premium">
              <span className="mb-0.5 flex items-center gap-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/95">
                <Sparkles className="h-2.5 w-2.5" />
                Whaapy IA
              </span>
              ¡Hola María! Sí, el 15% sigue activo hasta el viernes. ¿Te paso el catálogo?
              <span className="mt-1 block text-[8px] text-primary-foreground/80">10:42 · respondió en 3s</span>
            </div>
            <div className="max-w-[78%] self-start rounded-2xl rounded-bl-md bg-surface px-3 py-2 text-[11px] text-text shadow-premium">
              Sí porfa, me interesa el modelo en negro.
            </div>
            <motion.div
              className="self-end flex items-center gap-1 rounded-2xl rounded-br-md bg-primary px-3 py-2 shadow-premium"
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-primary-foreground"
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
                />
              ))}
            </motion.div>
          </div>
          <div className="relative z-[1] flex items-center gap-2 border-t border-border/80 bg-surface/95 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex-1 rounded-full border border-border bg-surface px-3 py-1.5 text-[10px] text-text-subtle">
              Escribe un mensaje...
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-premium">
              <Send className="h-3 w-3" strokeWidth={2.5} />
            </span>
          </div>
        </div>
      </div>
    </WhaapyFrame>
  )
}
