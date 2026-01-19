'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import anime from 'animejs'

const faqs = [
  {
    question: '¿Necesito hacer algo técnico o contratar a alguien?',
    answer: 'No. Todo se hace desde la plataforma, sin código, sin técnicos. Si sabes usar WhatsApp Web, puedes usar Whaapy.'
  },
  {
    question: '¿Qué pasa si el asistente dice algo mal?',
    answer: 'Tienes control total. Puedes apagar el asistente en cualquier conversación con un click. También puedes editar lo que dijo o tomar el control en cualquier momento.'
  },
  {
    question: '¿Puedo seguir usando mi número de WhatsApp actual?',
    answer: 'Sí. Whaapy funciona con tu número de WhatsApp Business existente. No necesitas cambiar de número ni perder tus contactos.'
  },
  {
    question: '¿Pueden entrar mis empleados también?',
    answer: 'Sí. Puedes invitar a tu equipo de ventas o soporte. Cada quien tiene su acceso y pueden colaborar en las conversaciones.'
  },
  {
    question: '¿Cómo le enseño al asistente sobre mi negocio?',
    answer: 'Subes tus documentos (catálogo, precios, políticas) en PDF, Word o Excel. El asistente los lee y aprende automáticamente. También puedes escribir instrucciones específicas.'
  },
  {
    question: '¿Puedo mandar mensajes a todos mis clientes?',
    answer: 'Sí. Puedes enviar promociones, recordatorios o avisos a todos tus contactos o solo a los que quieras. Usamos los templates oficiales de WhatsApp para que no te bloqueen.'
  },
  {
    question: '¿Cuánto cuesta?',
    answer: 'Tenemos planes desde $999 MXN al mes. Incluye todo: asistente de IA, mensajes, múltiples usuarios, soporte. Sin costos ocultos ni sorpresas.'
  },
  {
    question: '¿Puedo probarlo antes de pagar?',
    answer: 'Sí. Ofrecemos una demo personalizada donde te mostramos cómo funcionaría con tu negocio. Sin compromiso.'
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
    <section className="relative py-24 md:py-40 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Lo que todos <span className="gradient-text">preguntan</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Respuestas claras, sin tecnicismos
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border-2 border-border overflow-hidden hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
              >
                <span className="font-bold text-base md:text-xl pr-4 md:pr-8 text-text-primary">{faq.question}</span>
                <ChevronDown 
                  id={`faq-chevron-${index}`}
                  className="flex-shrink-0 text-accent transition-transform" 
                  size={24} 
                  strokeWidth={2.5}
                />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="px-5 md:px-8 pb-5 md:pb-6 text-text-secondary leading-relaxed text-sm md:text-lg">
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

