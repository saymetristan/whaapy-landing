import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Términos y Condiciones | Whaapy',
  description: 'Términos y Condiciones de Uso de Whaapy'
}

export default function TerminosPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
        <p className="text-xl text-text-secondary mb-12">
          Última actualización: 15 de Octubre, 2025
        </p>

        <p className="lead">
          Estos Términos y Condiciones (en adelante, los "Términos") regulan el uso de la plataforma <strong>Whaapy</strong>, operada por Datagora Inteligencia Digital S.A.S. de C.V. (en adelante, "Whaapy", "nosotros" o "la Plataforma"). Al registrarse y utilizar Whaapy, usted (en adelante, el "Cliente" o "Usuario") acepta plenamente estos Términos, los cuales constituyen un acuerdo legal vinculante.
        </p>

        <h2>1. Definiciones</h2>
        <ul>
          <li><strong>Plataforma:</strong> El servicio SaaS de Whaapy accesible en app.whaapy.com</li>
          <li><strong>Servicio:</strong> Asistente de IA para WhatsApp Business, incluyendo gestión de conversaciones, agentes de IA, y funcionalidades relacionadas.</li>
          <li><strong>Cliente/Usuario:</strong> Persona física o moral que contrata y utiliza los servicios de Whaapy.</li>
          <li><strong>Agente de IA:</strong> Bot conversacional entrenado con información del Cliente para responder mensajes automáticamente.</li>
          <li><strong>Suscripción:</strong> Plan de pago seleccionado por el Cliente para acceder a la Plataforma.</li>
          <li><strong>Datos del Cliente:</strong> Toda la información proporcionada por el Cliente, incluyendo conversaciones, documentos, y configuraciones.</li>
        </ul>

        <h2>2. Aceptación de los Términos</h2>
        <p>
          Al crear una cuenta en Whaapy, usted confirma que:
        </p>
        <ul>
          <li>Ha leído y comprendido estos Términos.</li>
          <li>Tiene capacidad legal para aceptar este acuerdo.</li>
          <li>Si actúa en representación de una empresa, cuenta con la autorización para vincular a dicha empresa.</li>
          <li>Cumplirá con todas las leyes aplicables en su jurisdicción.</li>
        </ul>

        <h2>3. Descripción del Servicio</h2>
        <p>Whaapy proporciona:</p>
        <ul>
          <li>Conexión de su número de WhatsApp Business a través de la API oficial.</li>
          <li>Asistente de IA que responde mensajes automáticamente según la configuración del Cliente.</li>
          <li>Panel de control para gestionar conversaciones, agentes, y equipos.</li>
          <li>Sistema de transferencia de conversaciones entre IA y humanos.</li>
          <li>Capacidad de entrenar al agente de IA con documentos y conocimiento personalizado.</li>
          <li>Gestión de templates de WhatsApp Business.</li>
          <li>Métricas y reportes de desempeño.</li>
        </ul>

        <p><strong>Nota importante:</strong> Whaapy depende de servicios de terceros (Kapso, Meta/WhatsApp, OpenAI). No nos hacemos responsables por interrupciones en estos servicios externos.</p>

        <h2>4. Registro y Cuenta</h2>
        <h3>4.1. Requisitos</h3>
        <p>Para utilizar Whaapy, usted debe:</p>
        <ul>
          <li>Proporcionar información veraz y actualizada.</li>
          <li>Contar con un número de WhatsApp Business válido.</li>
          <li>Mantener la seguridad de sus credenciales de acceso.</li>
          <li>Notificarnos inmediatamente ante cualquier uso no autorizado de su cuenta.</li>
        </ul>

        <h3>4.2. Responsabilidad del Cliente</h3>
        <p>El Cliente es responsable de:</p>
        <ul>
          <li>Todas las actividades realizadas bajo su cuenta.</li>
          <li>El contenido de los mensajes enviados a través de su WhatsApp Business.</li>
          <li>Cumplir con las políticas de WhatsApp Business y las leyes de protección al consumidor.</li>
          <li>Obtener consentimiento de sus clientes para recibir mensajes automatizados.</li>
        </ul>

        <h2>5. Planes y Facturación</h2>
        <h3>5.1. Suscripciones</h3>
        <p>Whaapy ofrece planes de suscripción mensuales o anuales. Los detalles de cada plan están disponibles en <a href="https://app.whaapy.com" target="_blank">app.whaapy.com</a>.</p>

        <h3>5.2. Pagos</h3>
        <ul>
          <li>Los pagos se procesan de forma anticipada al inicio de cada periodo de facturación.</li>
          <li>Las suscripciones se renuevan automáticamente a menos que el Cliente cancele antes del siguiente ciclo.</li>
          <li>Los precios pueden cambiar con un aviso de 30 días previo al Cliente.</li>
          <li>No se realizan reembolsos por periodos de suscripción no utilizados, salvo lo establecido en la sección 7.</li>
        </ul>

        <h3>5.3. Impuestos</h3>
        <p>Los precios no incluyen impuestos. El Cliente es responsable del pago de cualquier impuesto aplicable (IVA, ISR, etc.).</p>

        <h2>6. Uso Aceptable de la Plataforma</h2>
        <h3>6.1. Está prohibido:</h3>
        <ul>
          <li>Enviar spam o mensajes no solicitados masivamente.</li>
          <li>Violar las <a href="https://www.whatsapp.com/legal/business-policy" target="_blank">Políticas de WhatsApp Business</a>.</li>
          <li>Compartir contenido ilegal, difamatorio, o que viole derechos de terceros.</li>
          <li>Intentar acceder a cuentas de otros usuarios.</li>
          <li>Realizar ingeniería inversa o descompilar la Plataforma.</li>
          <li>Sobrecargar o interferir con la infraestructura de Whaapy.</li>
          <li>Utilizar la Plataforma para actividades fraudulentas o ilegales.</li>
        </ul>

        <h3>6.2. Consecuencias</h3>
        <p>El incumplimiento de estas políticas puede resultar en:</p>
        <ul>
          <li>Suspensión temporal o permanente de la cuenta.</li>
          <li>Terminación inmediata del servicio sin reembolso.</li>
          <li>Reporte a las autoridades competentes si aplica.</li>
        </ul>

        <h2>7. Cancelación y Reembolsos</h2>
        <h3>7.1. Cancelación por el Cliente</h3>
        <ul>
          <li>Puede cancelar su suscripción en cualquier momento desde su panel de control.</li>
          <li>La cancelación entrará en vigor al final del periodo de facturación actual.</li>
          <li>No se realizan reembolsos proporcionales por cancelación anticipada.</li>
        </ul>

        <h3>7.2. Cancelación por Whaapy</h3>
        <p>Whaapy se reserva el derecho de cancelar cuentas que:</p>
        <ul>
          <li>Violen estos Términos o el Uso Aceptable.</li>
          <li>Tengan pagos pendientes por más de 15 días.</li>
          <li>Representen un riesgo de seguridad o legal para la Plataforma.</li>
        </ul>

        <h3>7.3. Reembolsos</h3>
        <p>Se otorgarán reembolsos únicamente en los siguientes casos:</p>
        <ul>
          <li>Interrupción del servicio superior a 72 horas consecutivas por causas atribuibles a Whaapy.</li>
          <li>Cargos duplicados o errores de facturación.</li>
        </ul>

        <h2>8. Propiedad Intelectual</h2>
        <h3>8.1. Propiedad de Whaapy</h3>
        <p>Todos los derechos de propiedad intelectual sobre la Plataforma, incluyendo código, diseño, marca, y contenido, son propiedad exclusiva de Whaapy o sus licenciantes.</p>

        <h3>8.2. Propiedad del Cliente</h3>
        <p>El Cliente conserva todos los derechos sobre:</p>
        <ul>
          <li>Sus datos de conversaciones.</li>
          <li>Documentos subidos para entrenar al agente de IA.</li>
          <li>Información de su negocio y clientes.</li>
        </ul>

        <h3>8.3. Licencia de Uso</h3>
        <p>El Cliente otorga a Whaapy una licencia limitada, no exclusiva y revocable para:</p>
        <ul>
          <li>Procesar y almacenar sus datos para proveer el Servicio.</li>
          <li>Utilizar datos agregados y anonimizados para mejorar la Plataforma.</li>
        </ul>

        <h2>9. Privacidad y Protección de Datos</h2>
        <p>
          El tratamiento de datos personales se rige por nuestro <Link href="/privacidad" className="text-accent hover:underline">Aviso de Privacidad</Link>. Al aceptar estos Términos, usted también acepta dicho Aviso de Privacidad.
        </p>

        <h2>10. Limitación de Responsabilidad</h2>
        <h3>10.1. Exclusión de Garantías</h3>
        <p>La Plataforma se proporciona "tal cual" y "según disponibilidad". Whaapy no garantiza:</p>
        <ul>
          <li>Disponibilidad ininterrumpida del servicio.</li>
          <li>Precisión absoluta de las respuestas del agente de IA.</li>
          <li>Compatibilidad con todos los dispositivos y navegadores.</li>
        </ul>

        <h3>10.2. Limitación de Daños</h3>
        <p>En ningún caso Whaapy será responsable por:</p>
        <ul>
          <li>Daños indirectos, incidentales o consecuentes.</li>
          <li>Pérdida de ingresos, datos o oportunidades de negocio.</li>
          <li>Errores en las respuestas del agente de IA que afecten a sus clientes.</li>
          <li>Interrupciones causadas por terceros (Meta, Kapso, OpenAI, etc.).</li>
        </ul>

        <p><strong>Responsabilidad máxima:</strong> En caso de que Whaapy sea declarado responsable de cualquier daño, la compensación máxima no excederá el monto pagado por el Cliente en los últimos 3 meses.</p>

        <h2>11. Soporte y SLA</h2>
        <ul>
          <li><strong>Soporte:</strong> Disponible vía correo electrónico y chat dentro de la plataforma.</li>
          <li><strong>Tiempo de respuesta:</strong> 24-48 horas en días hábiles.</li>
          <li><strong>Uptime objetivo:</strong> 99.5% mensual (excluyendo mantenimientos programados).</li>
        </ul>

        <h2>12. Modificaciones a los Términos</h2>
        <p>Whaapy se reserva el derecho de modificar estos Términos. Los cambios serán notificados con al menos 15 días de anticipación mediante:</p>
        <ul>
          <li>Correo electrónico a la dirección registrada.</li>
          <li>Aviso dentro de la plataforma.</li>
          <li>Publicación en <a href="https://whaapy.com/terminos">whaapy.com/terminos</a></li>
        </ul>

        <p>El uso continuado de la Plataforma después de la notificación constituye aceptación de los nuevos Términos.</p>

        <h2>13. Ley Aplicable y Jurisdicción</h2>
        <p>
          Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia será sometida a los tribunales competentes de San Luis Potosí, S.L.P., México.
        </p>

        <h2>14. Cláusula Anticorrupción</h2>
        <p>
          El Cliente y Whaapy se comprometen a cumplir con la Ley General del Sistema Nacional Anticorrupción, absteniéndose de incurrir en sobornos, actos de corrupción o conductas ilegales.
        </p>

        <h2>15. Contacto</h2>
        <p>Para consultas sobre estos Términos, puede contactarnos en:</p>
        <ul>
          <li><strong>Correo:</strong> <a href="mailto:contacto@datagora.mx">contacto@datagora.mx</a></li>
          <li><strong>Teléfono:</strong> <a href="tel:+525564299653">+52 (556) 429 9653</a></li>
          <li><strong>Soporte:</strong> Desde su panel en <a href="https://app.whaapy.com" target="_blank">app.whaapy.com</a></li>
        </ul>

        <hr className="my-12" />

        <p className="text-center text-text-muted">
          Al utilizar Whaapy, usted acepta cumplir con estos Términos y Condiciones.
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

