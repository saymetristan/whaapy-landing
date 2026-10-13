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
          Última actualización: 12 de octubre de 2026
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
          <li>Entrenar y configurar agentes de IA personalizados, excluyendo los datos de Google Calendar y sus derivados del entrenamiento.</li>
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
        <p>Los datos obtenidos de Google Calendar y sus derivados se utilizan exclusivamente para las funciones de Calendar autorizadas, según la sección siguiente; no se utilizan para las finalidades secundarias de mejora general del producto.</p>

        <section id="google-calendar" className="scroll-mt-24 space-y-4 leading-relaxed [&_a]:underline [&_a]:underline-offset-2" aria-labelledby="google-calendar-title">
          <h2 id="google-calendar-title" className="text-2xl font-semibold">3.1. Integración con Google Calendar</h2>
          <p>Conectar Google Calendar es opcional. Whaapy solicita acceso a la lista de calendarios para que usted elija uno y permisos para leer, crear, modificar y borrar eventos. Hay dos autorizaciones separadas: una para gestionar la agenda manualmente en Whaapy y otra para que el asistente de IA consulte disponibilidad y gestione citas en el calendario seleccionado.</p>
          <p>Estos permisos corresponden a <code>calendar.calendarlist.readonly</code> y <code>calendar.events</code>. Los datos tratados pueden incluir identificadores y nombres de calendarios, títulos y descripciones de eventos, fechas, horarios, ubicación, participantes y enlaces de reunión, según la operación solicitada.</p>
          <p>Al autorizar al asistente, los parámetros y resultados de las operaciones de Calendar necesarios para responder se transmiten al proveedor de IA configurado. Esto puede incluir OpenAI, OpenRouter como intermediario y el proveedor que ejecute el modelo seleccionado. Puede consultar la configuración de su asistente y solicitar información sobre los proveedores aplicables a <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a>. Las respuestas pueden compartirse con los participantes de la conversación por el canal utilizado, incluido WhatsApp y sus proveedores de infraestructura.</p>
          <p>Whaapy almacena los tokens de autorización cifrados en su base de datos. La selección y configuración del calendario, los parámetros y resultados de operaciones y los datos incluidos en conversaciones pueden conservarse en los registros del servicio. Los registros anteriores se conservan hasta que sea atendida una solicitud de eliminación. Esta conservación no habilita otros usos de esos datos.</p>
          <p>Desconectar una autorización elimina sus tokens locales y detiene su uso por Whaapy, pero conserva la selección y configuración del calendario, los eventos en Google y los registros y conversaciones anteriores. Revocar el acceso de Whaapy desde su cuenta de Google puede retirar ambas autorizaciones. Para solicitar la eliminación de los datos de Calendar conservados en Whaapy, escriba a <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a>.</p>
          <p>Los datos de Google Calendar y sus derivados no se venden, no se utilizan para publicidad, no se utilizan para entrenar modelos generales de IA ni para mejorar de forma general la Plataforma, incluso cuando estén agregados o anonimizados. Solo se comparten en la medida necesaria para las funciones de Calendar autorizadas.</p>
          <p>El uso y la transferencia por Whaapy de información recibida de las API de Google cumplen la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Política de Datos de Usuario de los Servicios API de Google</a>, incluidos sus requisitos de Uso Limitado (Limited Use).</p>
        </section>

        <h2>4. Transferencia de Datos Personales</h2>
        <p>Whaapy no compartirá, venderá ni transferirá sus datos personales a terceros sin su consentimiento previo, salvo en los siguientes casos:</p>
        <ul>
          <li><strong>Kapso.ai:</strong> Proveedor de infraestructura de WhatsApp Business API. Los datos de conversaciones se procesan a través de su plataforma.</li>
          <li><strong>Proveedores de inteligencia artificial:</strong> OpenAI, OpenRouter como intermediario y el proveedor que ejecute el modelo configurado para procesar mensajes y las operaciones autorizadas del asistente. Para Google Calendar se aplican las restricciones de la sección 3.1.</li>
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
        <p>Para los datos de Google Calendar y sus derivados, incluidos los presentes en conversaciones y registros, se aplica la conservación y el procedimiento de eliminación de la sección 3.1; los periodos generales siguientes no amplían su uso ni establecen un plazo específico para estos datos.</p>
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

