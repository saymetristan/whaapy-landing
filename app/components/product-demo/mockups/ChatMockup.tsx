'use client'

import { Bot, Send, MoreVertical, Phone } from 'lucide-react'

const messages = [
  {
    id: 1,
    type: 'incoming',
    text: 'Hola, buenas tardes! 👋',
    time: '14:32',
  },
  {
    id: 2,
    type: 'incoming',
    text: '¿Tienen disponible el modelo azul en talla M?',
    time: '14:32',
  },
  {
    id: 3,
    type: 'outgoing',
    text: '¡Hola María! 😊 Sí, tenemos disponible el modelo azul en talla M. El precio es de $899 MXN con envío gratis a todo México.',
    time: '14:32',
    isAi: true,
  },
  {
    id: 4,
    type: 'incoming',
    text: '¿Y en qué colores más lo tienen?',
    time: '14:33',
  },
  {
    id: 5,
    type: 'outgoing',
    text: 'Además del azul, lo tenemos en negro, blanco y rojo. Todos disponibles en tu talla. ¿Te gustaría que te envíe fotos de los otros colores?',
    time: '14:33',
    isAi: true,
  },
]

export function ChatMockup() {
  return (
    <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white/80">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-emerald-600 flex items-center justify-center text-white text-sm font-bold shadow-sm ring-1 ring-gray-100">
          MG
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-gray-900 truncate">María García</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-purple-50 text-purple-700 rounded font-medium hidden sm:inline">
              Juan (Agente)
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <Phone className="w-3 h-3" />
            <span>+52 55 1234 5678</span>
          </div>
        </div>
        
        {/* AI Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 rounded-full">
            <Bot className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-semibold text-accent">IA</span>
            <div className="w-8 h-4 bg-accent rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
            </div>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-full">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50/50">
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${
              msg.type === 'outgoing' 
                ? 'bg-accent text-white rounded-2xl rounded-br-md' 
                : 'bg-white text-gray-900 rounded-2xl rounded-bl-md shadow-sm border border-gray-100'
            } px-3 py-2`}>
              {msg.isAi && (
                <div className="flex items-center gap-1 mb-1 opacity-80">
                  <Bot className="w-3 h-3" />
                  <span className="text-[10px] font-medium">Asistente IA</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <div className={`text-[10px] mt-1 ${msg.type === 'outgoing' ? 'text-white/70' : 'text-gray-400'} text-right`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input area */}
      <div className="p-3 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
          <input 
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            disabled
          />
          <button className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white shadow-sm">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
