import MockFrame from './MockFrame'

const CHATS = [
  { name: 'María González', preview: '¿Sigue disponible el descuento?', time: '10:42', unread: 2, color: 'from-fuchsia-400 to-rose-400' },
  { name: 'Carlos Méndez', preview: 'Perfecto, hago la transferencia.', time: '10:31', unread: 0, color: 'from-amber-400 to-orange-500' },
  { name: 'Lucía Romero', preview: 'Gracias por la respuesta tan rápida', time: '10:18', unread: 0, color: 'from-cyan-400 to-sky-500' },
  { name: 'Diego Ramírez', preview: 'Voy a revisar el catálogo.', time: '09:55', unread: 1, color: 'from-emerald-400 to-teal-500' },
  { name: 'Andrea Soto', preview: 'Mi pedido aún no llega...', time: '09:44', unread: 0, color: 'from-indigo-400 to-violet-500' },
  { name: 'Pablo Vargas', preview: 'Quiero agendar una demo', time: '09:21', unread: 0, color: 'from-pink-400 to-rose-500' },
]

const TABS = ['Activas', 'Pendientes', 'Cerradas']

function Avatar({ name, color }: { name: string; color: string }) {
  const initial = name.charAt(0)
  return (
    <span
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${color} text-xs font-medium text-white`}
    >
      {initial}
    </span>
  )
}

export default function InboxMockup({ className }: { className?: string }) {
  return (
    <MockFrame title="inbox · Whaapy" className={className}>
      <div className="grid h-full grid-cols-[40%,1fr]">
        <div className="flex flex-col border-r border-border">
          <div className="flex items-center gap-1 border-b border-border px-3 py-2">
            {TABS.map((t, i) => (
              <span
                key={t}
                className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                  i === 0
                    ? 'bg-accent/15 text-accent-deep dark:text-accent-bright'
                    : 'text-text-muted'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <ul className="flex-1 overflow-hidden">
            {CHATS.map((chat, i) => (
              <li
                key={chat.name}
                className={`flex items-center gap-3 border-b border-border/60 px-3 py-3 ${
                  i === 0 ? 'bg-accent/5' : ''
                }`}
              >
                <Avatar name={chat.name} color={chat.color} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-[11px] font-medium text-text">{chat.name}</p>
                    <span className="font-mono text-[9px] text-text-subtle">{chat.time}</span>
                  </div>
                  <p className="mt-0.5 truncate text-[10px] text-text-muted">{chat.preview}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[9px] font-medium text-white">
                    {chat.unread}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col bg-surface-2/40">
          <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
            <Avatar name={CHATS[0].name} color={CHATS[0].color} />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-medium text-text">{CHATS[0].name}</p>
              <p className="text-[10px] text-text-muted">+52 55 1234 5678 · en línea</p>
            </div>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] font-medium text-accent-deep dark:text-accent-bright">
              IA activa
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2 px-5 py-4">
            <div className="max-w-[75%] self-start rounded-2xl rounded-bl-md bg-surface px-3 py-2 text-[11px] text-text shadow-sm">
              Hola, ¿sigue disponible el descuento que vi en su historia?
            </div>
            <div className="max-w-[75%] self-end rounded-2xl rounded-br-md bg-accent/95 px-3 py-2 text-[11px] text-white">
              ¡Hola María! Sí, el 15% sigue activo hasta el viernes. ¿Te paso el catálogo?
              <span className="mt-1 block text-[8px] opacity-70">Whaapy IA · 10:42</span>
            </div>
            <div className="max-w-[75%] self-start rounded-2xl rounded-bl-md bg-surface px-3 py-2 text-[11px] text-text shadow-sm">
              Sí porfa, me interesa el modelo en negro.
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-border px-4 py-2.5">
            <div className="flex-1 rounded-full border border-border bg-surface px-3 py-1.5 text-[10px] text-text-subtle">
              Escribe un mensaje...
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-white">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </MockFrame>
  )
}
