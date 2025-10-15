'use client'

import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import { ArrowRight, Check } from 'lucide-react'
import MagneticButton from '../shared/MagneticButton'
import ContactModal from '../shared/ContactModal'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    if (!sectionRef.current || !headlineRef.current) return

    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Text reveal con circular mask
          if (headlineRef.current) {
            anime({
              targets: headlineRef.current,
              clipPath: [
                'circle(0% at 50% 50%)',
                'circle(100% at 50% 50%)'
              ],
              duration: 1500,
              easing: 'easeOutQuint',
              delay: 200
            })
          }

          // Animate bullets
          const bullets = entry.target.querySelectorAll('.benefit-item')
          anime({
            targets: bullets,
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuad',
            delay: anime.stagger(100, { start: 800 })
          })

          // Animate CTA button
          const cta = entry.target.querySelector('.cta-button-container')
          if (cta) {
            anime({
              targets: cta,
              scale: [0.9, 1],
              opacity: [0, 1],
              duration: 800,
              easing: 'spring(1, 80, 10, 0)',
              delay: 1200
            })
          }

          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const handleRegisterClick = () => {
    window.location.href = 'https://app.whaapy.com/register'
  }

  return (
    <section ref={sectionRef} className="relative py-40 px-6 bg-gradient-to-br from-accent/5 via-white to-accent/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline with mask reveal */}
        <h2 
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.05]"
          style={{ clipPath: 'circle(0% at 50% 50%)' }}
        >
          Activa tu WhatsApp IA <br className="hidden md:block" />en <span className="gradient-text">minutos</span>
        </h2>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-text-secondary flex-wrap">
          <div className="benefit-item flex items-center gap-3 opacity-0">
            <Check className="text-accent" size={24} strokeWidth={3} />
            <span className="text-lg font-medium">Setup en menos de 5 minutos</span>
          </div>
          <div className="benefit-item flex items-center gap-3 opacity-0">
            <Check className="text-accent" size={24} strokeWidth={3} />
            <span className="text-lg font-medium">Sin instalaciones complicadas</span>
          </div>
          <div className="benefit-item flex items-center gap-3 opacity-0">
            <Check className="text-accent" size={24} strokeWidth={3} />
            <span className="text-lg font-medium">Soporte personalizado incluido</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-button-container opacity-0">
          <MagneticButton
            onClick={handleRegisterClick}
            className="relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-accent to-accent-hover text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-2xl shadow-xl overflow-hidden group"
            strength={20}
          >
            <span className="relative z-10">Conectar mi WhatsApp</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={28} strokeWidth={3} />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </MagneticButton>
          
          <p className="mt-6 text-lg text-text-muted font-medium">
            Más de 50 negocios ya están usando Whaapy ✨
          </p>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        type="contact"
      />

      {/* Footer */}
      <footer className="mt-32 pt-16 border-t-2 border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-text-secondary">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold gradient-text">Whaapy</span>
              <span className="text-base">© 2025. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center gap-8 text-base font-medium">
              <a href="/terminos" className="hover:text-text-primary transition-colors">
                Términos
              </a>
              <a href="/privacidad" className="hover:text-text-primary transition-colors">
                Privacidad
              </a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="hover:text-text-primary transition-colors"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

