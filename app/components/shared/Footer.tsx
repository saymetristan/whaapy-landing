import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-surface to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About Whaapy */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/icons/whaapy-icon-64.png"
                alt="Whaapy"
                width={32}
                height={32}
              />
              <h3 className="text-xl font-bold text-text-primary">Sobre Whaapy</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Startup tecnológica mexicana fundada en 2025, especializada en 
              automatización conversacional con IA para WhatsApp Business.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Plataforma SaaS B2B diseñada para PyMEs en Latinoamérica que 
              necesitan escalar su atención al cliente sin perder el toque humano.
            </p>
            <a
              href="#equipo"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
            >
              Más sobre nosotros →
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Producto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#producto"
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                >
                  El Producto
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="https://app.whaapy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                >
                  Ver demo en vivo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terminos"
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-text-secondary hover:text-text-primary text-sm transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm text-center md:text-left">
            © {new Date().getFullYear()} Whaapy. Todos los derechos reservados. 
            Hecho en México 🇲🇽
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/whaapy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

