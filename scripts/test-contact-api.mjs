/**
 * Offline tests for api/contact.js — no network, no real API key.
 * global fetch is stubbed; every branch of the handler is exercised.
 *
 * Run: node --test scripts/
 */
import { test, mock } from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/contact.js'

const VALID = {
  name: 'Asha Rao',
  businessName: 'Rao Foods',
  email: 'asha@example.com',
  phone: '9876543210',
  message: 'We need help with <script>alert(1)</script> our ads',
  consent: true,
  companyWebsite: '',
}

function call(method, body) {
  const req = { method, body }
  const res = {
    statusCode: 0,
    headers: {},
    body: '',
    setHeader(k, v) {
      this.headers[k] = v
    },
    end(chunk = '') {
      this.body += chunk
    },
  }
  return handler(req, res).then(() => ({
    status: res.statusCode,
    headers: res.headers,
    json: () => JSON.parse(res.body),
    text: res.body,
  }))
}

test('405 for GET with Allow header', async () => {
  const r = await call('GET', undefined)
  assert.equal(r.status, 405)
  assert.equal(r.headers.Allow, 'POST')
  assert.ok(r.json().error)
})

test('405 for PUT and DELETE', async () => {
  assert.equal((await call('PUT', VALID)).status, 405)
  assert.equal((await call('DELETE', undefined)).status, 405)
})

test('400 for malformed JSON string body', async () => {
  const res = { statusCode: 0, headers: {}, body: '', setHeader() {}, end(c = '') { res.body += c } }
  await handler({ method: 'POST', body: '{not json' }, res)
  assert.equal(res.statusCode, 400)
})

test('400 when required fields are missing', async () => {
  const r = await call('POST', {})
  assert.equal(r.status, 400)
  const { fields } = r.json()
  assert.ok(fields.name && fields.email && fields.phone && fields.consent)
})

test('400 for invalid email format or missing consent', async () => {
  assert.equal((await call('POST', { ...VALID, email: 'not-an-email' })).status, 400)
  assert.equal((await call('POST', { ...VALID, consent: false })).status, 400)
})

test('accepts consent as "on"/"true" strings', async () => {
  const calls = []
  const restore = mock.method(globalThis, 'fetch', async () => {
    calls.push(1)
    return { ok: true, status: 200, json: async () => ({ id: 'x' }) }
  })
  process.env.RESEND_API_KEY = 're_dummy_test'
  try {
    assert.equal((await call('POST', { ...VALID, consent: 'on' })).status, 200)
    assert.equal((await call('POST', { ...VALID, consent: 'true' })).status, 200)
  } finally {
    restore.mock.restore()
    delete process.env.RESEND_API_KEY
  }
})

test('500 when RESEND_API_KEY is missing', async () => {
  delete process.env.RESEND_API_KEY
  const r = await call('POST', VALID)
  assert.equal(r.status, 500)
  assert.ok(r.json().error)
  assert.equal(r.text.includes('re_'), false) // no key material in response
})

test('200 + correct Resend payload on success; HTML is escaped', async () => {
  const calls = []
  const restore = mock.method(globalThis, 'fetch', async (url, opts) => {
    calls.push({ url, opts })
    return { ok: true, status: 200, json: async () => ({ id: 'email_123' }) }
  })
  process.env.RESEND_API_KEY = 're_dummy_test'
  try {
    const r = await call('POST', VALID)
    assert.equal(r.status, 200)
    assert.deepEqual(r.json(), { ok: true })

    assert.equal(calls.length, 1)
    assert.equal(calls[0].url, 'https://api.resend.com/emails')
    const payload = JSON.parse(calls[0].opts.body)
    assert.equal(payload.subject, 'New Bosqen enquiry — Asha Rao')
    assert.equal(payload.reply_to, 'asha@example.com')
    assert.ok(payload.to.includes('support@bosqen.com'))
    assert.ok(payload.from.includes('bosqen.com'))
    // user content must be escaped, never raw HTML
    assert.ok(payload.html.includes('&lt;script&gt;'))
    assert.ok(!payload.html.includes('<script>'))
    assert.ok(payload.html.includes('Rao Foods'))
  } finally {
    restore.mock.restore()
    delete process.env.RESEND_API_KEY
  }
})

test('500 (generic) when Resend rejects the send', async () => {
  const restore = mock.method(globalThis, 'fetch', async () => ({
    ok: false,
    status: 403,
    json: async () => ({ name: 'validation_error', message: 'domain not verified' }),
  }))
  process.env.RESEND_API_KEY = 're_dummy_test'
  try {
    const r = await call('POST', VALID)
    assert.equal(r.status, 500)
    const body = r.json()
    assert.ok(body.error)
    // internal detail must not leak to the client
    assert.ok(!r.text.includes('domain not verified'))
    assert.ok(!r.text.includes('re_dummy_test'))
  } finally {
    restore.mock.restore()
    delete process.env.RESEND_API_KEY
  }
})

test('500 (generic) when fetch throws (network error)', async () => {
  const restore = mock.method(globalThis, 'fetch', async () => {
    throw new Error('boom')
  })
  process.env.RESEND_API_KEY = 're_dummy_test'
  try {
    const r = await call('POST', VALID)
    assert.equal(r.status, 500)
    assert.ok(r.json().error)
  } finally {
    restore.mock.restore()
    delete process.env.RESEND_API_KEY
  }
})

test('honeypot-filled submission returns 200 without contacting Resend', async () => {
  const calls = []
  const restore = mock.method(globalThis, 'fetch', async () => {
    calls.push(1)
    return { ok: true, status: 200, json: async () => ({ id: 'x' }) }
  })
  process.env.RESEND_API_KEY = 're_dummy_test'
  try {
    const r = await call('POST', { ...VALID, companyWebsite: 'http://spam.example' })
    assert.equal(r.status, 200)
    assert.equal(calls.length, 0) // nothing sent
  } finally {
    restore.mock.restore()
    delete process.env.RESEND_API_KEY
  }
})
