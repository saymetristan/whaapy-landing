'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Bot, User } from 'lucide-react'

export default function AnimatedMockup() {
  const mockupRef = useRef<HTMLDivElement>(null)
  const message1Ref = useRef<HTMLDivElement>(null)
  const message2Ref = useRef<HTMLDivElement>(null)
  const message3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Floating mockup con parallax
    if (mockupRef.current) {
      anime({
        targets: mockupRef.current,
        translateY: [60, 0],
        opacity: [0, 1],
        duration: 1600,
        easing: 'cubicBezier(0.16, 1, 0.3, 1)',
        delay: 400
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
            scale: [0.8, 1],
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: 'spring(1, 80, 10, 0)',
          })
          .add({
            targets: element.querySelector('.typing-indicator'),
            opacity: [0, 1],
            duration: 300,
            delay: 500
          })
          .add({
            targets: element.querySelector('.ai-response'),
            opacity: [0, 1],
            translateX: [-10, 0],
            duration: 500,
            easing: 'easeOutQuad'
          })
      }, delay)
    }

    animateMessage(message1Ref, 1000)
    animateMessage(message2Ref, 3500)
    animateMessage(message3Ref, 6000)
  }, [])

  return (
    <div 
      ref={mockupRef}
      className="relative max-w-4xl mx-auto opacity-0"
    >
      <div className="bg-surface-elevated rounded-2xl shadow-lg border border-border overflow-hidden">
        {/* Mockup header */}
        <div className="bg-accent text-white px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot size={20} />
          </div>
          <div>
            <div className="font-semibold">Inbox de WhatsApp</div>
            <div className="text-sm opacity-80">3 conversaciones activas</div>
          </div>
        </div>

        {/* Chat area */}
        <div className="p-6 space-y-4 min-h-[400px]">
          {/* Message 1 */}
          <div ref={message1Ref} className="opacity-0">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="bg-surface rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hola, ¿tienen disponibilidad para mañana?</p>
              </div>
            </div>
            
            {/* Typing indicator */}
            <div className="typing-indicator flex items-center gap-2 ml-11 mb-2 opacity-0">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-xs text-text-muted">IA escribiendo...</span>
            </div>

            {/* AI Response */}
            <div className="ai-response flex items-start gap-3 opacity-0">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-accent-light border border-accent/20 rounded-lg p-3 max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-accent">IA</span>
                </div>
                <p className="text-sm">¡Claro! Tenemos disponibilidad a las 10am y 3pm. ¿Cuál te viene mejor?</p>
              </div>
            </div>
          </div>

          {/* Message 2 */}
          <div ref={message2Ref} className="opacity-0">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="bg-surface rounded-lg p-3 max-w-xs">
                <p className="text-sm">¿Cuánto cuesta el servicio?</p>
              </div>
            </div>
            
            <div className="typing-indicator flex items-center gap-2 ml-11 mb-2 opacity-0">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-xs text-text-muted">IA escribiendo...</span>
            </div>

            <div className="ai-response flex items-start gap-3 opacity-0">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-accent-light border border-accent/20 rounded-lg p-3 max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-accent">IA</span>
                </div>
                <p className="text-sm">Nuestros planes empiezan desde $29/mes. Incluye respuestas ilimitadas y soporte 24/7.</p>
              </div>
            </div>
          </div>

          {/* Message 3 */}
          <div ref={message3Ref} className="opacity-0">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="bg-surface rounded-lg p-3 max-w-xs">
                <p className="text-sm">Perfecto, me gustaría contratar</p>
              </div>
            </div>
            
            <div className="typing-indicator flex items-center gap-2 ml-11 mb-2 opacity-0">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-xs text-text-muted">Humano respondiendo...</span>
            </div>

            <div className="ai-response flex items-start gap-3 opacity-0">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-600">Jorge (Humano)</span>
                </div>
                <p className="text-sm">¡Excelente! Te envío el link de pago por aquí... 👇</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

