import { NextResponse } from 'next/server'

const TO = process.env.CONTACT_EMAIL_TO ?? 'services@whaapy.com'

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Cuerpo inválido' }, { status: 400 })
  }

  const { name, email, company, message, website } = body as Record<string, unknown>

  if (typeof website === 'string' && website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  if (typeof name !== 'string' || name.trim().length < 2) {
    return NextResponse.json({ error: 'Nombre requerido' }, { status: 400 })
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }
  if (typeof message !== 'string' || message.trim().length < 10) {
    return NextResponse.json({ error: 'Mensaje demasiado corto' }, { status: 400 })
  }

  const companyStr = typeof company === 'string' ? company.trim() : ''
  const safeName = name.trim()
  const safeEmail = email.trim()
  const safeMessage = message.trim()

  const key = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_EMAIL_FROM

  if (!key || !from) {
    console.error('[contact] Falta RESEND_API_KEY o CONTACT_EMAIL_FROM')
    return NextResponse.json(
      { error: 'El envío de correo no está configurado en el servidor.' },
      { status: 503 },
    )
  }

  const html = `
    <h2>Nuevo contacto — landing whaapy.com</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(safeName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
    ${companyStr ? `<p><strong>Empresa:</strong> ${escapeHtml(companyStr)}</p>` : ''}
    <p><strong>Mensaje:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(safeMessage)}</pre>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [TO],
      reply_to: safeEmail,
      subject: `[Whaapy landing] ${safeName}`,
      html,
    }),
  })

  if (!res.ok) {
    const errText = await res.text().catch(() => '')
    console.error('[contact] Resend error', res.status, errText)
    return NextResponse.json({ error: 'No se pudo enviar el mensaje. Intenta más tarde.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
