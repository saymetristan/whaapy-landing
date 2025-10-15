import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Aviso de Privacidad | Whaapy',
  description: 'Aviso de Privacidad de Whaapy - Protección de datos personales'
}

export default function PrivacidadPage() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver a inicio</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Aviso de Privacidad</h1>
        <p className="text-xl text-text-secondary mb-12">
          Última actualización: 15 de Octubre, 2025
        </p>

        <p className="lead">
          En <strong>Whaapy</strong>, una marca de Datagora Inteligencia Digital S.A.S. de C.V. (en adelante, "Whaapy" o "nosotros"), estamos comprometidos con la protección de los datos personales de nuestros clientes y usuarios. Este Aviso de Privacidad se emite en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su reglamento.
        </p>

        <h2>1. Identidad y Domicilio del Responsable</h2>
        <p>
          <strong>Datagora Inteligencia Digital S.A.S. de C.V.</strong><br />
          Dirección: Fracc. Desarrollo, Blvd. Antonio Rocha Cordero, Del Pedregal 157-D201, 78295 San Luis Potosí, S.L.P.<br />
          Correo Electrónico: <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a><br />
          Teléfono: <a href="tel:+525564299653">+52 (556) 429 9653</a>
        </p>

        <h2>2. Datos Personales que Recabamos</h2>
        <p>Podremos recabar los siguientes datos personales:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> Nombre completo, domicilio, teléfono, correo electrónico.</li>
          <li><strong>Datos de la empresa:</strong> Nombre de la empresa, giro comercial, número de empleados.</li>
          <li><strong>Datos de WhatsApp Business:</strong> Número de teléfono de WhatsApp Business, ID de la cuenta.</li>
          <li><strong>Datos de conversaciones:</strong> Mensajes intercambiados a través de WhatsApp con sus clientes (únicamente para proporcionar el servicio).</li>
          <li><strong>Datos fiscales:</strong> RFC, razón social, información de facturación.</li>
          <li><strong>Datos financieros:</strong> Información de métodos de pago para procesar la suscripción.</li>
          <li><strong>Datos técnicos:</strong> Información relacionada con el uso de la plataforma, configuración de agentes de IA, documentos subidos para conocimiento del bot.</li>
          <li><strong>Datos de navegación:</strong> Tipo de navegador, sistema operativo, páginas visitadas, dirección IP, ubicación geográfica.</li>
        </ul>

        <p><strong>No recabamos datos personales sensibles.</strong> Solicitamos abstenerse de proporcionar datos relacionados con origen étnico, opiniones políticas, creencias religiosas, afiliaciones sindicales, salud, orientación sexual, o antecedentes penales a través de nuestra plataforma.</p>

        <h2>3. Finalidades del Tratamiento de Datos</h2>
        <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades:</p>

        <h3>Primarias:</h3>
        <ul>
          <li>Proveer el servicio de asistente de IA para WhatsApp Business.</li>
          <li>Gestionar conversaciones entre su negocio y sus clientes.</li>
          <li>Entrenar y configurar agentes de IA personalizados.</li>
          <li>Procesar pagos y gestionar suscripciones.</li>
          <li>Emitir facturas y cumplir con obligaciones fiscales.</li>
          <li>Brindar soporte técnico y atención al cliente.</li>
          <li>Cumplir con obligaciones legales y regulatorias.</li>
        </ul>

        <h3>Secundarias:</h3>
        <ul>
          <li>Realizar estudios de uso y mejora del producto.</li>
          <li>Enviar notificaciones sobre actualizaciones del servicio.</li>
          <li>Compartir información sobre nuevas funcionalidades.</li>
          <li>Realizar encuestas de satisfacción.</li>
        </ul>

        <p>Si no desea que sus datos personales sean tratados para las finalidades secundarias, puede manifestarlo enviando un correo a <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a>.</p>

        <h2>4. Transferencia de Datos Personales</h2>
        <p>Whaapy no compartirá, venderá ni transferirá sus datos personales a terceros sin su consentimiento previo, salvo en los siguientes casos:</p>
        <ul>
          <li><strong>Kapso.ai:</strong> Proveedor de infraestructura de WhatsApp Business API. Los datos de conversaciones se procesan a través de su plataforma.</li>
          <li><strong>OpenAI:</strong> Proveedor de modelos de inteligencia artificial para el procesamiento de mensajes.</li>
          <li><strong>Proveedores de servicios en la nube:</strong> Para almacenamiento seguro de datos (Railway, Vercel, Supabase, Upstash).</li>
          <li><strong>Procesadores de pago:</strong> Para gestionar cobros de suscripciones.</li>
          <li>Cuando sea necesario para el cumplimiento de obligaciones legales.</li>
          <li>Cuando sea requerido por autoridades competentes.</li>
        </ul>

        <p>Todos los terceros con quienes compartimos información están obligados contractualmente a mantener la confidencialidad y seguridad de sus datos.</p>

        <h2>5. Medidas de Seguridad</h2>
        <p>Implementamos medidas de seguridad administrativas, físicas y técnicas para proteger sus datos personales, incluyendo:</p>
        <ul>
          <li>Encriptación de datos en tránsito y en reposo (TLS/SSL).</li>
          <li>Control de acceso restringido mediante autenticación multifactor.</li>
          <li>Políticas de seguridad de Row Level Security (RLS) en base de datos.</li>
          <li>Monitoreo continuo de accesos y actividad sospechosa.</li>
          <li>Respaldos automáticos y redundancia de datos.</li>
          <li>Capacitación periódica a nuestro personal sobre protección de datos.</li>
        </ul>

        <h2>6. Derechos ARCO</h2>
        <p>Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> (ARCO) al tratamiento de sus datos personales. Para ejercer cualquiera de estos derechos, puede:</p>
        <ul>
          <li>Acceder a su panel de control en <a href="https://app.whaapy.com" target="_blank">app.whaapy.com</a> para visualizar y actualizar su información.</li>
          <li>Enviar una solicitud por correo electrónico a <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a></li>
          <li>Llamar al teléfono <a href="tel:+525564299653">+52 (556) 429 9653</a></li>
        </ul>

        <p>La solicitud deberá incluir:</p>
        <ul>
          <li>Nombre completo del titular.</li>
          <li>Descripción clara del derecho que desea ejercer.</li>
          <li>Documentación que acredite su identidad.</li>
        </ul>

        <h2>7. Uso de Cookies y Tecnologías Similares</h2>
        <p>Nuestro sitio web y plataforma utilizan cookies y tecnologías similares para:</p>
        <ul>
          <li>Mantener su sesión activa.</li>
          <li>Recordar sus preferencias.</li>
          <li>Analizar el uso de la plataforma y mejorar la experiencia.</li>
          <li>Medir el rendimiento de funcionalidades.</li>
        </ul>

        <p><strong>Tipos de cookies:</strong></p>
        <ul>
          <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico de la plataforma.</li>
          <li><strong>Cookies de funcionalidad:</strong> Permiten recordar preferencias del usuario.</li>
          <li><strong>Cookies de análisis:</strong> Recaban información sobre cómo se utiliza el sitio.</li>
        </ul>

        <p>Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad de la plataforma.</p>

        <h2>8. Retención de Datos Personales</h2>
        <p>Los datos personales serán conservados durante:</p>
        <ul>
          <li><strong>Datos de cuenta:</strong> Mientras su suscripción esté activa, más 5 años adicionales para cumplir con obligaciones fiscales.</li>
          <li><strong>Conversaciones:</strong> Según la configuración que usted defina en la plataforma (por defecto 1 año).</li>
          <li><strong>Datos de facturación:</strong> 10 años según lo requerido por las autoridades fiscales.</li>
        </ul>

        <p>Al término de estos periodos, los datos serán eliminados de manera segura e irreversible.</p>

        <h2>9. Modificaciones al Aviso de Privacidad</h2>
        <p>Whaapy se reserva el derecho de modificar este Aviso de Privacidad. Cualquier cambio será notificado a través de:</p>
        <ul>
          <li>Publicación en nuestro sitio web <a href="https://whaapy.com/privacidad">whaapy.com/privacidad</a></li>
          <li>Correo electrónico a la dirección registrada en su cuenta.</li>
          <li>Notificación dentro de la plataforma.</li>
        </ul>

        <h2>10. Contacto</h2>
        <p>Para dudas, comentarios o ejercer sus derechos ARCO, puede comunicarse con nosotros a:</p>
        <ul>
          <li><strong>Correo:</strong> <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a></li>
          <li><strong>Teléfono:</strong> <a href="tel:+525564299653">+52 (556) 429 9653</a></li>
          <li><strong>Dirección:</strong> Fracc. Desarrollo, Blvd. Antonio Rocha Cordero, Del Pedregal 157-D201, 78295 San Luis Potosí, S.L.P.</li>
        </ul>

        <hr className="my-12" />

        <p className="text-center text-text-muted">
          Al utilizar Whaapy, usted manifiesta su conformidad con los términos establecidos en este Aviso de Privacidad.
        </p>

        <p className="text-center font-bold mt-8">
          Whaapy by <a href="https://datagora.mx" target="_blank" className="text-accent hover:underline">Datagora</a><br />
          Transformando la atención al cliente con IA
        </p>
      </article>

      {/* Footer */}
      <footer className="border-t-2 border-border mt-24 py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-text-secondary">
            © 2025 Whaapy by Datagora. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex gap-6 justify-center">
            <Link href="/terminos" className="text-accent hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-accent hover:underline">
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

