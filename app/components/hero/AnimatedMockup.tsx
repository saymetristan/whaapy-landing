'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Bot, User, Check, CheckCheck } from 'lucide-react'

export default function AnimatedMockup() {
  const mockupRef = useRef<HTMLDivElement>(null)
  const message1Ref = useRef<HTMLDivElement>(null)
  const message2Ref = useRef<HTMLDivElement>(null)
  const message3Ref = useRef<HTMLDivElement>(null)
  const message4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Floating mockup con parallax
    if (mockupRef.current) {
      anime({
        targets: mockupRef.current,
        translateY: [80, 0],
        opacity: [0, 1],
        duration: 1800,
        easing: 'cubicBezier(0.16, 1, 0.3, 1)',
        delay: 600
      })
    }

    // Animate incoming messages
    const animateMessage = (ref: React.RefObject<HTMLDivElement>, delay: number) => {
      if (!ref.current) return

      const element = ref.current

      setTimeout(() => {
        if (!element) return

        anime.timeline()
          .add({
            targets: element,
            scale: [0.95, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
          })
      }, delay)
    }

    animateMessage(message1Ref, 1500)
    animateMessage(message2Ref, 2000)
    animateMessage(message3Ref, 2500)
    animateMessage(message4Ref, 3000)
  }, [])

  return (
    <div 
      ref={mockupRef}
      className="relative max-w-5xl mx-auto opacity-0"
    >
      <div className="glass-dark rounded-3xl shadow-premium-lg border border-border/50 overflow-hidden">
        {/* Mockup header */}
        <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Bot size={28} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-xl">Inbox de WhatsApp</div>
              <div className="text-sm opacity-90 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                IA activa · 4 conversaciones
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-accent-light" />
            <span className="text-sm font-medium">En línea</span>
          </div>
        </div>

        {/* Chat area - más grande y espacioso */}
        <div className="p-8 md:p-12 space-y-6 min-h-[500px] bg-gradient-to-b from-gray-50/50 to-white">
          {/* Message 1 - Cliente pregunta */}
          <div ref={message1Ref} className="opacity-0 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
              <User size={20} className="text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm text-text-primary">María González</span>
                <span className="text-xs text-text-muted">10:24 AM</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-5 shadow-sm border border-border/50 max-w-md">
                <p className="text-base text-text-primary">Hola, ¿tienen disponibilidad para mañana a las 10am?</p>
              </div>
            </div>
          </div>

          {/* Message 2 - IA responde */}
          <div ref={message2Ref} className="opacity-0 flex items-start gap-4 flex-row-reverse">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center flex-shrink-0">
              <Bot size={20} className="text-white" />
            </div>
            <div className="flex-1 flex flex-col items-end">
              <div className="flex items-center gap-2 mb-2 flex-row-reverse">
                <span className="font-semibold text-sm text-text-primary">Asistente IA</span>
                <div className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  IA
                </div>
                <span className="text-xs text-text-muted">10:24 AM</span>
              </div>
              <div className="bg-gradient-to-br from-accent-light to-accent-light/50 rounded-2xl rounded-tr-none p-5 shadow-sm border border-accent/20 max-w-md">
                <p className="text-base text-text-primary">¡Claro! Tenemos disponibilidad a las 10am y también a las 3pm. ¿Cuál te viene mejor? 😊</p>
                <div className="flex items-center justify-end gap-1 mt-2 text-accent-hover">
                  <CheckCheck size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Message 3 - Cliente responde */}
          <div ref={message3Ref} className="opacity-0 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
              <User size={20} className="text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm text-text-primary">María González</span>
                <span className="text-xs text-text-muted">10:25 AM</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-5 shadow-sm border border-border/50 max-w-md">
                <p className="text-base text-text-primary">Perfecto las 10am. ¿Cuánto cuesta la consulta?</p>
              </div>
            </div>
          </div>

          {/* Message 4 - Humano toma control */}
          <div ref={message4Ref} className="opacity-0 flex items-start gap-4 flex-row-reverse">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <User size={20} className="text-white" />
            </div>
            <div className="flex-1 flex flex-col items-end">
              <div className="flex items-center gap-2 mb-2 flex-row-reverse">
                <span className="font-semibold text-sm text-text-primary">Jorge (Tú)</span>
                <div className="px-2 py-0.5 bg-blue-500/10 text-blue-600 text-xs font-semibold rounded-full">
                  Humano
                </div>
                <span className="text-xs text-text-muted">10:25 AM</span>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-2xl rounded-tr-none p-5 shadow-sm border border-blue-200/50 max-w-md">
                <p className="text-base text-text-primary">¡Hola María! La consulta es de $500. Te envío el link de pago para que reserves tu cita 👇</p>
                <div className="mt-3 bg-white rounded-xl p-3 border border-blue-200/50">
                  <div className="text-xs font-semibold text-blue-600 mb-1">Link de pago</div>
                  <div className="text-xs text-text-muted">pay.whaapy.com/consulta-500</div>
                </div>
                <div className="flex items-center justify-end gap-1 mt-2 text-blue-600">
                  <CheckCheck size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Transition indicator */}
          <div className="flex items-center justify-center py-4">
            <div className="bg-accent/10 text-accent px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>IA → Humano (transición automática)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge with glassmorphism */}
      <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl shadow-premium-lg border border-border px-6 py-4 flex items-center gap-3 floating-delayed">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shimmer">
          <Bot size={20} className="text-accent" />
        </div>
        <div>
          <div className="text-sm font-bold text-text-primary">Respuesta en &lt;2s</div>
          <div className="text-xs text-text-muted">100% automatizado</div>
        </div>
      </div>
    </div>
  )
}
