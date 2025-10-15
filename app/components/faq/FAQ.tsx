'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import anime from 'animejs'

const faqs = [
  {
    question: '¿Necesito API de WhatsApp Business?',
    answer: 'No. Conectas tu número existente en 2 minutos con un QR o te damos uno nuevo. Nosotros nos encargamos de Meta.'
  },
  {
    question: '¿Qué pasa si la IA responde algo incorrecto?',
    answer: 'Tienes control total. Puedes desactivar la IA por conversación, editar respuestas, o tomar el control en cualquier momento.'
  },
  {
    question: '¿Funciona con mi número actual de WhatsApp?',
    answer: 'Sí, funciona con cualquier número de WhatsApp Business. No necesitas cambiar de número.'
  },
  {
    question: '¿Puedo invitar a mi equipo?',
    answer: 'Totalmente. Sistema multiusuario con roles (Admin, Agente). Asigna conversaciones, colabora en tiempo real.'
  },
  {
    question: '¿Cómo entreno la IA?',
    answer: 'Subes documentos (PDF, Word, TXT) con información de tu negocio: productos, precios, políticas. La IA procesa y aprende automáticamente.'
  },
  {
    question: '¿Puedo usar templates de WhatsApp?',
    answer: 'Sí. Sincronizamos automáticamente tus templates aprobados por Meta. Envía notificaciones masivas desde el dashboard.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    const newOpenIndex = openIndex === index ? null : index
    setOpenIndex(newOpenIndex)

    // Animate the answer
    const answer = document.getElementById(`faq-answer-${index}`)
    if (answer) {
      if (newOpenIndex === index) {
        anime({
          targets: answer,
          height: [0, answer.scrollHeight],
          opacity: [0, 1],
          duration: 400,
          easing: 'cubicBezier(0.16, 1, 0.3, 1)'
        })
      } else {
        anime({
          targets: answer,
          height: [answer.scrollHeight, 0],
          opacity: [1, 0],
          duration: 300,
          easing: 'easeInQuad'
        })
      }
    }

    // Rotate chevron
    const chevron = document.getElementById(`faq-chevron-${index}`)
    if (chevron) {
      anime({
        targets: chevron,
        rotate: newOpenIndex === index ? 180 : 0,
        duration: 300,
        easing: 'easeInOutQuad'
      })
    }
  }

  return (
    <section className="relative py-40 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Todo lo que necesitas saber sobre Whaapy
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-border overflow-hidden hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
              >
                <span className="font-bold text-xl pr-8 text-text-primary">{faq.question}</span>
                <ChevronDown 
                  id={`faq-chevron-${index}`}
                  className="flex-shrink-0 text-accent transition-transform" 
                  size={28} 
                  strokeWidth={2.5}
                />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="px-8 pb-6 text-text-secondary leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-text-secondary mb-6">
            ¿Tienes más preguntas?
          </p>
          <a 
            href="mailto:soporte@whaapy.com" 
            className="inline-flex items-center text-accent hover:text-accent-hover font-semibold text-lg group"
          >
            Contáctanos
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

