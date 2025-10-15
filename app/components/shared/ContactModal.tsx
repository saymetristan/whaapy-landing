'use client'

import { useState } from 'react'
import { X, Send, Mail, User, Building2 } from 'lucide-react'
import anime from 'animejs'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  type?: 'demo' | 'contact'
}

export default function ContactModal({ isOpen, onClose, type = 'demo' }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xyzgvqpl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          tipo: type === 'demo' ? 'Solicitud de Demo' : 'Contacto General'
        })
      })

      if (response.ok) {
        setIsSuccess(true)
        
        // Animate success
        anime({
          targets: '.success-icon',
          scale: [0, 1],
          rotate: [0, 360],
          duration: 600,
          easing: 'easeOutElastic(1, .5)'
        })

        setTimeout(() => {
          onClose()
          setIsSuccess(false)
          setFormData({ name: '', email: '', company: '', message: '' })
        }, 2500)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-border transition-colors z-10"
          aria-label="Cerrar"
        >
          <X size={20} className="text-text-secondary" />
        </button>

        <div className="p-8">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">
                  {type === 'demo' ? '🚀 Agenda tu demo' : '📧 Contáctanos'}
                </h2>
                <p className="text-lg text-text-secondary">
                  {type === 'demo' 
                    ? 'Te mostraremos cómo Whaapy puede transformar tu atención al cliente'
                    : 'Cuéntanos cómo podemos ayudarte'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors text-lg"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors text-lg"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-text-primary mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors text-lg"
                      placeholder="Tu empresa (opcional)"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    {type === 'demo' ? '¿Qué te gustaría ver en la demo?' : 'Mensaje'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors text-lg resize-none"
                    placeholder={type === 'demo' 
                      ? 'Cuéntanos sobre tu negocio y necesidades...'
                      : 'Tu mensaje...'
                    }
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-premium-lg hover:shadow-2xl transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar {type === 'demo' ? 'solicitud' : 'mensaje'}
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>

              <p className="text-sm text-text-muted mt-6 text-center">
                Al enviar este formulario aceptas nuestra{' '}
                <a href="/privacidad" className="text-accent hover:underline" target="_blank">
                  Política de Privacidad
                </a>
              </p>
            </>
          ) : (
            // Success state
            <div className="py-12 text-center">
              <div className="success-icon w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">¡Gracias por tu interés!</h3>
              <p className="text-lg text-text-secondary">
                {type === 'demo' 
                  ? 'Nos pondremos en contacto contigo muy pronto para agendar tu demo.'
                  : 'Hemos recibido tu mensaje y te responderemos a la brevedad.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

