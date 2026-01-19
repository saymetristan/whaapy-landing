'use client'

import { Bot, LayoutList, Kanban } from 'lucide-react'

const conversations = [
  {
    id: 1,
    name: 'María García',
    initials: 'MG',
    color: 'from-accent to-emerald-600',
    preview: '¿Tienen disponible el modelo azul en talla M?',
    time: 'hace 2 min',
    unread: 3,
    aiEnabled: true,
    aiResponded: false,
    isActive: true,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    initials: 'CR',
    color: 'from-blue-500 to-indigo-600',
    preview: '¡Perfecto! Ya hice la transferencia, te mando el comprobante',
    time: 'hace 15 min',
    unread: 0,
    aiEnabled: true,
    aiResponded: true,
    isActive: false,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    initials: 'AM',
    color: 'from-purple-500 to-pink-600',
    preview: '¿Cuál es el precio del servicio premium?',
    time: 'hace 1 hora',
    unread: 1,
    aiEnabled: true,
    aiResponded: false,
    isActive: false,
  },
  {
    id: 4,
    name: 'Roberto Sánchez',
    initials: 'RS',
    color: 'from-amber-500 to-orange-600',
    preview: 'Gracias por la información, muy amables',
    time: 'ayer',
    unread: 0,
    aiEnabled: false,
    aiResponded: true,
    isActive: false,
  },
]

export function InboxMockup() {
  return (
    <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/80">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg text-gray-900">Inbox</h2>
          <span className="px-2 py-0.5 bg-accent text-white text-xs font-bold rounded-full">
            4
          </span>
        </div>
        
        {/* Toggle Lista/Pipeline */}
        <div className="flex bg-gray-100 rounded-lg p-0.5">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md shadow-sm text-gray-900 text-xs font-medium">
            <LayoutList className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Lista</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-500 text-xs font-medium">
            <Kanban className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Pipeline</span>
          </button>
        </div>
      </div>
      
      {/* Lista de conversaciones */}
      <div className="divide-y divide-gray-50">
        {conversations.map((conv) => (
          <div 
            key={conv.id}
            className={`flex items-start gap-3 p-3 hover:bg-gray-50/50 transition-colors cursor-pointer relative ${
              conv.id === 1 ? 'bg-accent/5' : ''
            }`}
          >
            {/* Indicador lateral */}
            <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full ${
              conv.unread > 0 ? 'bg-gradient-to-b from-accent to-accent/60' : 'bg-gray-200'
            }`} />
            
            {/* Avatar */}
            <div className="relative pl-2">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${conv.color} flex items-center justify-center text-white text-sm font-bold shadow-sm ${
                conv.unread > 0 ? 'ring-2 ring-accent/30 ring-offset-1' : ''
              }`}>
                {conv.initials}
              </div>
            </div>
            
            {/* Contenido */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <span className={`text-sm truncate ${conv.unread > 0 ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                  {conv.name}
                </span>
                <span className={`text-[10px] shrink-0 ${conv.unread > 0 ? 'text-accent font-semibold' : 'text-gray-400'}`}>
                  {conv.time}
                </span>
              </div>
              
              <div className="flex items-start gap-1 mb-1">
                {conv.aiResponded && (
                  <Bot className="w-3 h-3 text-accent shrink-0 mt-0.5" />
                )}
                <p className={`text-xs line-clamp-1 ${conv.unread > 0 ? 'text-gray-800' : 'text-gray-500'}`}>
                  {conv.preview}
                </p>
              </div>
              
              {/* Badges */}
              <div className="flex items-center gap-1">
                {conv.aiEnabled && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded-full">
                    <Bot className="w-2.5 h-2.5" />
                    IA
                  </span>
                )}
              </div>
            </div>
            
            {/* Unread badge */}
            {conv.unread > 0 && (
              <span className="px-1.5 py-0.5 bg-accent text-white text-[10px] font-bold rounded-full min-w-[18px] text-center shadow-sm">
                {conv.unread}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Footer stats */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-500">
        📊 4 conversaciones activas • ⚡ 95% respondidas por IA
      </div>
    </div>
  )
}
