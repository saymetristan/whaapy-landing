'use client'

import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import { ArrowRight, Check } from 'lucide-react'
import MagneticButton from '../shared/MagneticButton'
import ContactModal from '../shared/ContactModal'
import { captureEvent } from '@/app/lib/analytics'

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
          captureEvent('section_viewed', {
            section: 'cta_final',
          })

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

  const handleDemoClick = () => {
    captureEvent('cta_demo_click', {
      location: 'bottom_cta',
    })
    setIsContactModalOpen(true)
  }

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-gradient-to-br from-accent/5 via-white to-accent/10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline with mask reveal */}
        <h2 
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
          style={{ clipPath: 'circle(0% at 50% 50%)' }}
        >
          ¿Listo para dejar de vivir <br className="hidden md:block" />pegado al <span className="gradient-text">WhatsApp</span>?
        </h2>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12 text-text-secondary flex-wrap">
          <div className="benefit-item flex items-center gap-2 md:gap-3 opacity-0">
            <Check className="text-accent" size={20} strokeWidth={3} />
            <span className="text-base md:text-lg font-medium">Configuración en 10 minutos</span>
          </div>
          <div className="benefit-item flex items-center gap-2 md:gap-3 opacity-0">
            <Check className="text-accent" size={20} strokeWidth={3} />
            <span className="text-base md:text-lg font-medium">Sin contratos largos</span>
          </div>
          <div className="benefit-item flex items-center gap-2 md:gap-3 opacity-0">
            <Check className="text-accent" size={20} strokeWidth={3} />
            <span className="text-base md:text-lg font-medium">Soporte en español</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-button-container opacity-0">
          <MagneticButton
            onClick={handleDemoClick}
            className="relative inline-flex items-center gap-3 md:gap-4 px-8 md:px-12 py-5 md:py-6 bg-gradient-to-r from-accent to-accent-hover text-white rounded-2xl hover:shadow-2xl transition-all font-bold text-xl md:text-2xl shadow-xl overflow-hidden group"
            strength={20}
          >
            <span className="relative z-10">Quiero mi demo gratis</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={24} strokeWidth={3} />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </MagneticButton>
          
          <p className="mt-5 md:mt-6 text-base md:text-lg text-text-muted font-medium">
            Sin tarjeta de crédito para empezar ✨
          </p>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        type="contact"
      />
    </section>
  )
}

