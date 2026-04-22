'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { Loader2 } from 'lucide-react'
import LiquidBlobs from '../visuals/LiquidBlobs'
import SectionReveal from '../visuals/SectionReveal'

export default function CTAFinal() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')
    const form = e.currentTarget
    const fd = new FormData(form)
    const website = fd.get('website')
    if (typeof website === 'string' && website.length > 0) {
      setStatus('success')
      return
    }

    const payload = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      company: String(fd.get('company') ?? ''),
      message: String(fd.get('message') ?? ''),
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error ?? 'Algo salió mal.')
        return
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg('Sin conexión. Intenta de nuevo.')
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-[#0d6b5e] py-16 text-primary-foreground md:py-24 lg:py-32"
    >
      <LiquidBlobs placement="cta" className="opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-lg px-0 sm:px-4 md:px-8"
        >
          <p className="text-center text-label text-primary-foreground/90">Contacto</p>
          <SectionReveal className="mt-4">
            <h2 className="text-center font-display text-2xl font-bold text-balance text-primary-foreground sm:text-3xl md:text-4xl">
              Cuéntanos qué necesitas
            </h2>
          </SectionReveal>
          <p className="mx-auto mt-4 max-w-md text-center text-[13px] leading-relaxed text-primary-foreground/85 sm:text-sm">
            Te respondemos en <strong className="font-semibold break-words">services@whaapy.com</strong>.
            Deja tu mensaje y te contactamos.
          </p>

          {status === 'success' ? (
            <p className="mt-8 rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-6 text-center text-sm text-primary-foreground">
              Listo. Revisa tu correo por si necesitamos aclarar algo.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-7 space-y-3.5 text-left sm:mt-8 sm:space-y-4">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute h-0 w-0 opacity-0"
                aria-hidden
              />
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-label text-primary-foreground/90">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm text-text placeholder:text-text-muted backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-label text-primary-foreground/90">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm text-text placeholder:text-text-muted backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label htmlFor="contact-company" className="mb-1.5 block text-label text-primary-foreground/90">
                  Empresa <span className="font-normal opacity-70">(opcional)</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm text-text placeholder:text-text-muted backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="Nombre del negocio"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-label text-primary-foreground/90">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-y rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-3 text-sm text-text placeholder:text-text-muted backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              {status === 'error' && errorMsg && (
                <p className="rounded-lg border border-red-200/50 bg-red-500/20 px-3 py-2 text-sm text-primary-foreground">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground px-6 py-4 text-base font-bold text-primary shadow-premium-lg transition hover:bg-primary-foreground/95 disabled:opacity-70 sm:py-3.5 sm:text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>
          )}

          <p className="mt-8 text-center text-xs text-primary-foreground/70">
            ¿Ya tienes cuenta?{' '}
            <Link
              href="https://app.whaapy.com"
              className="font-semibold underline decoration-primary-foreground/40 underline-offset-2 hover:decoration-primary-foreground"
            >
              Iniciar sesión
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
