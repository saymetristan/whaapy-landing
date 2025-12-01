import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Servicio - Whaapy',
  description: 'Términos y condiciones de uso de Whaapy.',
  openGraph: {
    title: 'Términos de Servicio - Whaapy',
    description: 'Términos y condiciones de uso de Whaapy.',
    url: 'https://whaapy.com/terminos',
    type: 'website',
  },
  other: {
    'fb:app_id': process.env.NEXT_PUBLIC_META_APP_ID || '',
  },
}

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos de Servicio</h1>
        
        <p className="text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de Términos</h2>
            <p className="text-gray-700 mb-4">
              Al acceder y utilizar Whaapy ("el Servicio"), aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al Servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 mb-4">
              Whaapy es una plataforma de software como servicio (SaaS) que permite a negocios:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Conectar y gestionar su cuenta de WhatsApp Business.</li>
              <li>Enviar y recibir mensajes de WhatsApp a través de nuestra interfaz.</li>
              <li>Configurar un asistente de inteligencia artificial para responder automáticamente.</li>
              <li>Cargar documentos para crear una base de conocimiento.</li>
              <li>Visualizar métricas y análisis de conversaciones.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Requisitos de Cuenta</h2>
            <p className="text-gray-700 mb-4">Para usar Whaapy debes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Tener al menos 18 años de edad.</li>
              <li>Proporcionar información precisa y completa durante el registro.</li>
              <li>Mantener la seguridad de tu cuenta y contraseña.</li>
              <li>Tener una cuenta de WhatsApp Business válida y activa.</li>
              <li>Cumplir con las políticas de WhatsApp Business y Meta.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceptable</h2>
            <p className="text-gray-700 mb-4">Te comprometes a NO usar Whaapy para:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Enviar spam o mensajes no solicitados.</li>
              <li>Actividades ilegales o fraudulentas.</li>
              <li>Acosar, amenazar o abusar de otros usuarios.</li>
              <li>Distribuir malware o contenido malicioso.</li>
              <li>Violar las políticas de WhatsApp o Meta.</li>
              <li>Intentar acceder sin autorización a nuestros sistemas.</li>
              <li>Revender o redistribuir el Servicio sin autorización.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Políticas de WhatsApp</h2>
            <p className="text-gray-700 mb-4">
              Al usar Whaapy, también aceptas cumplir con:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a href="https://www.whatsapp.com/legal/business-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Política de WhatsApp Business</a></li>
              <li><a href="https://www.whatsapp.com/legal/commerce-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Política de Comercio de WhatsApp</a></li>
              <li><a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Términos de la Plataforma de Meta</a></li>
            </ul>
            <p className="text-gray-700 mt-4">
              El incumplimiento de estas políticas puede resultar en la suspensión de tu cuenta de Whaapy y/o tu cuenta de WhatsApp Business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Inteligencia Artificial</h2>
            <p className="text-gray-700 mb-4">
              Respecto al asistente de IA de Whaapy:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>La IA genera respuestas basadas en tu base de conocimiento y configuración.</li>
              <li>No garantizamos que las respuestas de la IA sean 100% precisas.</li>
              <li>Eres responsable de revisar y supervisar las respuestas automáticas.</li>
              <li>Puedes desactivar la IA en cualquier momento desde la configuración.</li>
              <li>Los datos enviados a la IA se procesan de forma segura y no se usan para entrenar modelos de terceros.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-4">
              <strong>Nuestra propiedad:</strong> Whaapy, incluyendo su código, diseño, logos y contenido, es propiedad de Whaapy y está protegido por leyes de propiedad intelectual.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Tu contenido:</strong> Mantienes la propiedad de todo el contenido que subes a Whaapy (documentos, mensajes, configuraciones). Nos otorgas una licencia limitada para procesar este contenido únicamente para proporcionarte el Servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Pagos y Facturación</h2>
            <p className="text-gray-700 mb-4">
              Durante el período beta, el Servicio es gratuito. Cuando implementemos planes de pago:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Los precios serán claramente comunicados antes de cualquier cargo.</li>
              <li>Los pagos se procesarán de forma segura.</li>
              <li>Podrás cancelar tu suscripción en cualquier momento.</li>
              <li>No hay reembolsos por períodos parciales de uso.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 mb-4">
              EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>El Servicio se proporciona "tal cual" sin garantías de ningún tipo.</li>
              <li>No garantizamos disponibilidad ininterrumpida del Servicio.</li>
              <li>No somos responsables por daños indirectos, incidentales o consecuentes.</li>
              <li>Nuestra responsabilidad total no excederá el monto que hayas pagado por el Servicio en los últimos 12 meses.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnización</h2>
            <p className="text-gray-700">
              Aceptas indemnizar y mantener indemne a Whaapy de cualquier reclamo, daño o gasto (incluyendo honorarios de abogados) que surja de tu uso del Servicio o violación de estos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Terminación</h2>
            <p className="text-gray-700 mb-4">
              Podemos suspender o terminar tu acceso al Servicio:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Si violas estos términos o las políticas de WhatsApp/Meta.</li>
              <li>Si detectamos actividad fraudulenta o abusiva.</li>
              <li>Si no pagas las tarifas aplicables (cuando se implementen).</li>
              <li>Por cualquier razón con previo aviso de 30 días.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Puedes cancelar tu cuenta en cualquier momento desde la configuración.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Modificaciones</h2>
            <p className="text-gray-700">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos de cambios materiales con al menos 30 días de anticipación. El uso continuado del Servicio después de los cambios constituye aceptación de los nuevos términos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Ley Aplicable</h2>
            <p className="text-gray-700">
              Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales competentes de la Ciudad de México.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contacto</h2>
            <p className="text-gray-700">
              Para preguntas sobre estos términos:
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
