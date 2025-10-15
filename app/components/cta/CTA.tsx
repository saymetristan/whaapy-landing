'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

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

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    button.appendChild(ripple)
    
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    
    anime({
      targets: ripple,
      scale: [0, 2],
      opacity: [0.6, 0],
      duration: 600,
      easing: 'easeOutQuad',
      complete: () => ripple.remove()
    })

    // Redirect after animation
    setTimeout(() => {
      window.location.href = 'https://app.whaapy.com/register'
    }, 300)
  }

  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-gradient-to-b from-surface to-accent-light/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline with mask reveal */}
        <h2 
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{ clipPath: 'circle(0% at 50% 50%)' }}
        >
          Activa tu WhatsApp IA en minutos — <span className="gradient-text">¡Gratis para empezar!</span>
        </h2>

        {/* Benefits */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-text-secondary">
          <div className="benefit-item flex items-center gap-2 opacity-0">
            <Check className="text-accent" size={20} />
            <span>Sin instalaciones ni configuraciones eternas</span>
          </div>
          <div className="benefit-item flex items-center gap-2 opacity-0">
            <Check className="text-accent" size={20} />
            <span>Precio especial de lanzamiento</span>
          </div>
          <div className="benefit-item flex items-center gap-2 opacity-0">
            <Check className="text-accent" size={20} />
            <span>Sin compromisos</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-button-container opacity-0">
          <button 
            onClick={handleCTAClick}
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-xl hover:bg-accent-hover transition-all hover:scale-105 font-semibold text-xl shadow-lg hover:shadow-xl overflow-hidden group"
          >
            <span className="relative z-10">Conectar mi WhatsApp</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={24} />
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          
          <p className="mt-4 text-sm text-text-muted">
            Más de 50 negocios ya están usando Whaapy
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">Whaapy</span>
              <span>© 2025. Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="/terminos" className="hover:text-text-primary transition-colors">
                Términos
              </a>
              <a href="/privacidad" className="hover:text-text-primary transition-colors">
                Privacidad
              </a>
              <a href="mailto:soporte@whaapy.com" className="hover:text-text-primary transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

