/**
 * Vercel serverless function — POST /api/contact
 *
 * Receives the Bosqen enquiry form as JSON, validates it, and sends the
 * enquiry email through the Resend REST API (plain fetch — zero dependencies).
 *
 * Security:
 * - RESEND_API_KEY is read from process.env at runtime only (configured in
 *   Vercel by the GitHub Actions deploy workflow). It is never sent to the
 *   browser and never included in responses.
 * - POST only (405 otherwise); 400 invalid input; 500 on send failure —
 *   success is returned only after Resend accepts the email.
 * - All user-provided values are HTML-escaped before being embedded in the
 *   email body; client-facing errors are always generic.
 *
 * Optional environment overrides (for testing):
 * - CONTACT_TO_EMAIL   (default: support@bosqen.com)
 * - CONTACT_FROM_EMAIL (default: Bosqen <enquiries@bosqen.com> — requires the
 *   bosqen.com domain to be verified in Resend. For pre-verification testing,
 *   set e.g. "Bosqen <onboarding@resend.dev>".)
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'support@bosqen.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Bosqen <enquiries@bosqen.com>'
const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const FALLBACK_EMAIL = 'support@bosqen.com'

const MAX_LENGTHS = { name: 120, businessName: 160, email: 254, phone: 40, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function str(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function json(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(payload))
}

function row(label, value) {
  return `<tr><td style="padding:6px 14px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#0f172a">${value}</td></tr>`
}

function buildHtml(data) {
  const message = escapeHtml(data.message).replace(/\n/g, '<br />')
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px">
  <h2 style="margin:0 0 16px;color:#0f172a">New Bosqen enquiry</h2>
  <table style="border-collapse:collapse;font-size:14px">
    ${row('Name', escapeHtml(data.name))}
    ${row('Business name', escapeHtml(data.businessName) || '<i style="color:#94a3b8">Not provided</i>')}
    ${row('Email', escapeHtml(data.email))}
    ${row('Phone', escapeHtml(data.phone))}
    ${row('Message', message || '<i style="color:#94a3b8">Not provided</i>')}
    ${row('Consent', 'Yes — agreed to Privacy Policy and contact')}
  </table>
</div>`
}

function buildText(data) {
  return [
    'New Bosqen enquiry',
    '',
    `Name: ${data.name}`,
    `Business name: ${data.businessName || 'Not provided'}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Message: ${data.message || 'Not provided'}`,
    'Consent: Yes — agreed to Privacy Policy and contact',
  ].join('\n')
}

function validate(data) {
  const fields = {}
  if (!data.name) fields.name = 'Name is required.'
  else if (data.name.length > MAX_LENGTHS.name) fields.name = 'Name is too long.'
  if (!data.email || !EMAIL_RE.test(data.email)) fields.email = 'A valid email is required.'
  else if (data.email.length > MAX_LENGTHS.email) fields.email = 'Email is too long.'
  if (!data.phone) fields.phone = 'Phone is required.'
  else if (data.phone.length > MAX_LENGTHS.phone) fields.phone = 'Phone is too long.'
  if (data.businessName.length > MAX_LENGTHS.businessName) fields.businessName = 'Business name is too long.'
  if (data.message.length > MAX_LENGTHS.message) fields.message = 'Message is too long.'
  if (!data.consent) fields.consent = 'Consent is required.'
  return fields
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { error: 'Method not allowed. Use POST.' })
  }

  let raw
  try {
    raw = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body
  } catch {
    return json(res, 400, { error: 'Invalid JSON body.' })
  }
  const body = raw && typeof raw === 'object' ? raw : {}

  // companyWebsite is a honeypot: humans never see or fill it.
  const data = {
    name: str(body.name),
    businessName: str(body.businessName),
    email: str(body.email),
    phone: str(body.phone),
    message: str(body.message),
    consent: body.consent === true || body.consent === 'true' || body.consent === 'yes' || body.consent === 'on',
    companyWebsite: str(body.companyWebsite),
  }

  const fields = validate(data)
  if (Object.keys(fields).length > 0) {
    return json(res, 400, { error: 'Invalid form data.', fields })
  }

  // Honeypot tripped — almost certainly a bot. Acknowledge quietly, send nothing.
  if (data.companyWebsite) {
    return json(res, 200, { ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured in this environment')
    return json(res, 500, {
      error: `The enquiry service is temporarily unavailable. Please email ${FALLBACK_EMAIL} directly.`,
    })
  }

  const payload = {
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    reply_to: data.email,
    subject: `New Bosqen enquiry — ${data.name}`,
    html: buildHtml(data),
    text: buildText(data),
  }

  let response
  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.error('[contact] Could not reach Resend:', err?.name, err?.message)
    return json(res, 500, {
      error: `Could not send your enquiry right now. Please try again or email ${FALLBACK_EMAIL} directly.`,
    })
  }

  if (!response.ok) {
    let detail = ''
    try {
      const errBody = await response.json()
      detail = errBody?.message || errBody?.name || ''
    } catch {
      /* non-JSON error body — ignore */
    }
    // Server-side log only (Vercel runtime logs); never forwarded to the client.
    console.error(`[contact] Resend rejected the email (status ${response.status})${detail ? `: ${detail}` : ''}`)
    return json(res, 500, {
      error: `Could not send your enquiry right now. Please try again or email ${FALLBACK_EMAIL} directly.`,
    })
  }

  return json(res, 200, { ok: true })
}
