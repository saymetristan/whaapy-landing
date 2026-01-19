'use client'

import { Bot, Sparkles, BookOpen, Calendar, Check, Shield } from 'lucide-react'

export function AgentConfigMockup() {
  return (
    <div className="w-full h-full bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 p-4 space-y-4">
      {/* Card: Asistente Activo */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-900">Asistente IA</h3>
              <p className="text-[11px] text-gray-500">Responde automáticamente a tus clientes</p>
            </div>
          </div>
          {/* Switch ON */}
          <div className="w-11 h-6 bg-accent rounded-full relative cursor-pointer">
            <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm" />
          </div>
        </div>
      </div>
      
      {/* Card: Personalidad */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-accent" />
          <h3 className="font-bold text-sm text-gray-900">Personalidad</h3>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full">
            <Check className="w-3 h-3" />
            Guardado
          </span>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
          <p className="text-xs text-gray-600 leading-relaxed">
            Eres un asistente amable de <span className="text-accent font-medium">Mi Tienda</span>. Ayudas a los clientes con información de productos, precios y disponibilidad. Siempre respondes en español, de forma cordial y profesional. Si no sabes algo, ofreces comunicar al cliente con un humano.
          </p>
        </div>
      </div>
      
      {/* Card: Herramientas */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-accent" />
          <h3 className="font-bold text-sm text-gray-900">Herramientas</h3>
        </div>
        
        <div className="space-y-2">
          {/* Tool 1: Knowledge Base - ON */}
          <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-gray-700">Base de conocimiento</span>
            </div>
            <div className="w-8 h-4 bg-accent rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
            </div>
          </div>
          
          {/* Tool 2: Calendar - OFF */}
          <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-xs font-medium text-gray-700">Google Calendar</span>
            </div>
            <div className="w-8 h-4 bg-gray-300 rounded-full relative">
              <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer hint */}
      <div className="text-center text-[10px] text-gray-400 pt-1">
        Los cambios se guardan automáticamente ✨
      </div>
    </div>
  )
}
