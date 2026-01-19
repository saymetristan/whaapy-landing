'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import ContactModal from './ContactModal'
import { captureEvent } from '@/app/lib/analytics'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevenir scroll cuando menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const closeMenu = (reason: 'overlay' | 'nav_link' | 'cta_click' | 'toggle_button' | 'close_button') => {
    if (!isMenuOpen) return

    setIsMenuOpen(false)
    captureEvent('header_mobile_menu_closed', {
      reason,
    })
  }

  const openDemoModal = (origin: 'desktop_nav' | 'mobile_cta' | 'mobile_menu') => {
    captureEvent('cta_demo_click', {
      location: `header_${origin}`,
    })

    setIsContactModalOpen(true)

    if (origin !== 'desktop_nav') {
      closeMenu('cta_click')
    }
  }

  const handleMenuToggle = () => {
    const nextValue = !isMenuOpen
    if (nextValue) {
      setIsMenuOpen(true)
      captureEvent('header_mobile_menu_toggled', {
        isOpen: true,
      })
    } else {
      closeMenu('toggle_button')
    }
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div 
            className={`glass-dark rounded-full px-4 sm:px-6 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-premium transition-all duration-300 ${
              isScrolled ? 'shadow-premium-lg' : ''
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 group relative z-50">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/whaapy-icon-64.png"
                  alt="Whaapy Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold gradient-text">Whaapy</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://app.whaapy.com/login"
                className="text-text-secondary hover:text-text-primary transition-colors font-medium px-4 py-2"
                onClick={() =>
                  captureEvent('cta_login_click', {
                    location: 'header_desktop',
                  })
                }
              >
                Iniciar sesión
              </a>
              <button
                onClick={() => openDemoModal('desktop_nav')}
                className="px-6 py-2.5 btn-primary text-white rounded-full font-semibold shimmer shadow-premium hover:shadow-premium-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Probar gratis
              </button>
            </div>

            {/* Mobile CTA + Hamburger */}
            <div className="flex md:hidden items-center gap-2 sm:gap-3">
              <button
                onClick={() => openDemoModal('mobile_cta')}
                className="px-4 sm:px-5 py-2 sm:py-2.5 btn-primary text-white rounded-full font-semibold text-sm sm:text-base shimmer shadow-premium hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Probar
              </button>
              <button
                onClick={handleMenuToggle}
                className="p-2 sm:p-2.5 text-text-primary hover:text-accent transition-colors rounded-full hover:bg-accent/10"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '0' }}
          onClick={() => closeMenu('overlay')}
        />

        {/* Mobile Menu Panel */}
        <div 
          className={`fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/whaapy-icon-64.png"
                  alt="Whaapy"
                  width={32}
                  height={32}
                />
                <span className="text-xl font-bold gradient-text">Whaapy</span>
              </div>
                <button
                  onClick={() => closeMenu('close_button')}
                  className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-surface"
                >
                  <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <div className="space-y-4">
                <a 
                  href="https://app.whaapy.com/login"
                  className="block w-full text-left px-6 py-4 text-lg font-medium text-text-primary hover:bg-surface rounded-2xl transition-all duration-300 hover:translate-x-1"
                  onClick={() => {
                    captureEvent('cta_login_click', {
                      location: 'header_mobile_menu',
                    })
                    closeMenu('nav_link')
                  }}
                >
                  Iniciar sesión
                </a>

                <button
                  onClick={() => openDemoModal('mobile_menu')}
                  className="block w-full text-left px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-accent to-accent-hover rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] shimmer"
                >
                  Probar gratis
                </button>

                <div className="pt-6 mt-6 border-t border-border">
                  <a
                    href="https://app.whaapy.com"
                    className="block text-sm text-text-secondary hover:text-accent transition-colors"
                    onClick={() => {
                      captureEvent('navigation_link_click', {
                        location: 'header_mobile_menu',
                        destination: 'dashboard',
                      })
                      closeMenu('nav_link')
                    }}
                  >
                    Ir al Dashboard
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-border bg-surface/50">
              <p className="text-xs text-text-muted text-center">
                © 2026 Whaapy. Hecho en México 🇲🇽
              </p>
            </div>
          </div>
        </div>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        type="demo"
      />
    </>
  )
}

