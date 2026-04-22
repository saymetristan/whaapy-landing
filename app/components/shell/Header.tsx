'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const NAV = [
  { label: 'Producto', href: '#producto' },
  { label: 'Casos', href: '#casos' },
  { label: 'Diferenciadores', href: '#diferenciadores' },
  { label: 'FAQ', href: '#faq' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'border-b border-border bg-bg/75 shadow-premium backdrop-blur-md'
          : 'border-b border-transparent bg-bg/40 backdrop-blur-sm'
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between md:h-16">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://app.whaapy.com"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            Iniciar sesión
          </Link>
          <Link href="https://app.whaapy.com/signup" className="btn-primary text-sm">
            Probar gratis
          </Link>
        </div>

        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface shadow-premium"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-surface/98 shadow-premium-lg backdrop-blur-md md:hidden"
          >
            <nav className="container-page flex flex-col gap-4 py-6" aria-label="Móvil">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-text"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
                <Link
                  href="https://app.whaapy.com"
                  className="text-base text-text-muted"
                  onClick={() => setOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="https://app.whaapy.com/signup"
                  className="btn-primary w-full"
                  onClick={() => setOpen(false)}
                >
                  Probar gratis
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
