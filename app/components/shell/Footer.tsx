import Link from 'next/link'
import Logo from './Logo'

const COLUMNS = [
  {
    title: 'Producto',
    links: [
      { label: 'Casos de uso', href: '#casos' },
      { label: 'Diferenciadores', href: '#diferenciadores' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Brochure', href: '/brochure' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Iniciar sesión', href: 'https://app.whaapy.com' },
      { label: 'Contáctanos', href: '#contacto' },
      { label: 'colme-2', href: '/colme-2' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Términos', href: '/terminos' },
    ],
  },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:gap-10 md:grid-cols-[1.4fr,1fr,1fr,1fr] md:gap-12 md:py-16">
        <div className="col-span-2 max-w-sm md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            La capa que convierte WhatsApp en tu canal de venta principal. Hecho en LATAM, conectado
            directo a Meta.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-label text-text-subtle">
              {col.title}
            </p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-text-subtle md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Whaapy. Todos los derechos reservados.</p>
          <p>Conectado directo a Meta WhatsApp Cloud API.</p>
        </div>
      </div>
    </footer>
  )
}
