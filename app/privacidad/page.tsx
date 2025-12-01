import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Whaapy',
  description: 'Política de privacidad de Whaapy. Conoce cómo protegemos y manejamos tus datos.',
  openGraph: {
    title: 'Política de Privacidad - Whaapy',
    description: 'Política de privacidad de Whaapy. Conoce cómo protegemos y manejamos tus datos.',
    url: 'https://whaapy.com/privacidad',
    type: 'website',
  },
  other: {
    'fb:app_id': process.env.NEXT_PUBLIC_META_APP_ID || '',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-emerald-600">
            Whaapy
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <p className="text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-4">
              En Whaapy recopilamos la siguiente información cuando utilizas nuestra plataforma:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Información de cuenta:</strong> Nombre, correo electrónico y contraseña cuando te registras.</li>
              <li><strong>Información de WhatsApp Business:</strong> Número de teléfono, nombre del negocio y configuración de cuenta cuando conectas tu WhatsApp Business a través de Meta.</li>
              <li><strong>Mensajes:</strong> Contenido de las conversaciones de WhatsApp que gestionas a través de nuestra plataforma.</li>
              <li><strong>Documentos:</strong> Archivos que subes a la base de conocimiento para entrenar al asistente de IA.</li>
              <li><strong>Datos de uso:</strong> Información sobre cómo interactúas con nuestra plataforma.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cómo Usamos tu Información</h2>
            <p className="text-gray-700 mb-4">Utilizamos tu información para:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Proporcionar y mantener nuestro servicio de gestión de WhatsApp Business.</li>
              <li>Procesar mensajes entrantes y salientes de WhatsApp.</li>
              <li>Entrenar y ejecutar el asistente de IA con tu base de conocimiento.</li>
              <li>Generar métricas y análisis de tus conversaciones.</li>
              <li>Enviarte actualizaciones importantes sobre el servicio.</li>
              <li>Mejorar y personalizar tu experiencia.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Compartición de Datos</h2>
            <p className="text-gray-700 mb-4">
              Compartimos tu información únicamente con:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Meta (WhatsApp):</strong> Para enviar y recibir mensajes a través de WhatsApp Cloud API.</li>
              <li><strong>OpenAI:</strong> Para procesar respuestas del asistente de IA (los datos se envían de forma anónima).</li>
              <li><strong>Proveedores de infraestructura:</strong> Supabase (base de datos), Vercel (hosting), Railway (backend).</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>No vendemos tu información personal a terceros.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Seguridad de Datos</h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas de seguridad estándar de la industria:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encriptación SSL/TLS para todas las comunicaciones.</li>
              <li>Almacenamiento seguro con encriptación en reposo.</li>
              <li>Autenticación segura con tokens JWT.</li>
              <li>Acceso restringido a datos basado en roles.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Retención de Datos</h2>
            <p className="text-gray-700 mb-4">
              Conservamos tus datos mientras mantengas una cuenta activa con nosotros. Si eliminas tu cuenta:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Tus datos personales serán eliminados en un plazo de 30 días.</li>
              <li>Los mensajes y conversaciones serán eliminados permanentemente.</li>
              <li>Los documentos de tu base de conocimiento serán eliminados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tus Derechos</h2>
            <p className="text-gray-700 mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Acceder</strong> a tus datos personales.</li>
              <li><strong>Corregir</strong> información inexacta.</li>
              <li><strong>Eliminar</strong> tu cuenta y datos asociados.</li>
              <li><strong>Exportar</strong> tus datos en un formato portable.</li>
              <li><strong>Revocar</strong> el acceso a tu cuenta de WhatsApp Business.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Eliminación de Datos</h2>
            <p className="text-gray-700 mb-4">
              Para solicitar la eliminación de tus datos:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Inicia sesión en tu cuenta en <a href="https://app.whaapy.com" className="text-emerald-600 hover:underline">app.whaapy.com</a></li>
              <li>Ve a Configuración → Cuenta</li>
              <li>Haz clic en "Eliminar mi cuenta"</li>
              <li>Confirma la eliminación</li>
            </ol>
            <p className="text-gray-700 mt-4">
              Alternativamente, puedes enviar un correo a <a href="mailto:soporte@whaapy.com" className="text-emerald-600 hover:underline">soporte@whaapy.com</a> solicitando la eliminación de tu cuenta y datos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos cookies esenciales para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Mantener tu sesión iniciada.</li>
              <li>Recordar tus preferencias.</li>
              <li>Análisis anónimo de uso (PostHog).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cambios a esta Política</h2>
            <p className="text-gray-700">
              Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos por correo electrónico o mediante un aviso en nuestra plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-700">
              Si tienes preguntas sobre esta política de privacidad, contáctanos en:
            </p>
            <ul className="list-none text-gray-700 mt-4 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:soporte@whaapy.com" className="text-emerald-600 hover:underline">soporte@whaapy.com</a></li>
              <li><strong>Sitio web:</strong> <a href="https://whaapy.com" className="text-emerald-600 hover:underline">whaapy.com</a></li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Whaapy. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-gray-500 hover:text-emerald-600 text-sm">
                Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-500 hover:text-emerald-600 text-sm">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
