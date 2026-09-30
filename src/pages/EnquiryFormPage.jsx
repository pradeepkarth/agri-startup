import { useState } from 'react'
import StandaloneLayout from '../components/StandaloneLayout.jsx'
import { ArrowRight, CheckCircle2, Clock, Gift, ShieldCheck, Send, AlertCircle } from 'lucide-react'
import { ENQUIRY_FORM, BRAND, routes } from '../constants/content.js'
const initialForm = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  message: '',
  consent: false,
}

export default function EnquiryFormPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((errs) => ({ ...errs, [key]: undefined }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.phone.trim()) errs.phone = 'Please add a phone number so we can reach you.'
    if (!form.consent) errs.consent = ENQUIRY_FORM.form.privacyError
    return errs
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('sending')
    try {
      // Delivers to BRAND.email via FormSubmit (free, no backend).
      // NOTE: the very first submission ever sends an activation email to
      // support@bosqen.com — click the link in it once to start receiving enquiries.
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)
      const res = await fetch(`https://formsubmit.co/ajax/${BRAND.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          _subject: `New Bosqen enquiry — ${form.name}${form.businessName ? ` (${form.businessName})` : ''}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          'Business name': form.businessName || '—',
          Email: form.email,
          Phone: form.phone,
          Message: form.message || '—',
        }),
      })
      clearTimeout(timeout)
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`)
      const data = await res.json()
      if (data.success !== 'true' && data.success !== true) {
        throw new Error(data.message || 'FormSubmit rejected the submission')
      }
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  const field =
    'w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30'

  if (status === 'success') {
    return (
      <StandaloneLayout title="Enquiry received">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center sm:p-12">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {ENQUIRY_FORM.form.successTitle}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            {ENQUIRY_FORM.form.successBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={routes.home}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
            >
              Back to home
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-sm text-slate-400 underline underline-offset-4 transition hover:text-white"
            >
              Or email {BRAND.email} directly
            </a>
          </div>
        </div>
      </StandaloneLayout>
    )
  }

  return (
    <StandaloneLayout title={ENQUIRY_FORM.heading}>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
          {ENQUIRY_FORM.eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {ENQUIRY_FORM.heading}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          {ENQUIRY_FORM.subheading}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {ENQUIRY_FORM.assurances.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs text-slate-400">
              <Icon className="h-3.5 w-3.5 text-brand-400" />
              {label}
            </span>
          ))}
        </div>

        {status === 'error' && (
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>{ENQUIRY_FORM.form.errorBody}</p>
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2" noValidate>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
              {ENQUIRY_FORM.form.name} <span className="text-brand-400">*</span>
            </label>
            <input id="name" name="name" type="text" value={form.name} onChange={set('name')} className={field} />
            {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="businessName" className="mb-1.5 block text-sm font-medium text-slate-300">
              {ENQUIRY_FORM.form.businessName}
            </label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={form.businessName}
              onChange={set('businessName')}
              className={field}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
              {ENQUIRY_FORM.form.email} <span className="text-brand-400">*</span>
            </label>
            <input id="email" name="email" type="email" value={form.email} onChange={set('email')} className={field} />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-300">
              {ENQUIRY_FORM.form.phone} <span className="text-brand-400">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={set('phone')}
              className={field}
              inputMode="tel"
            />
            {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
              {ENQUIRY_FORM.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={set('message')}
              placeholder={ENQUIRY_FORM.form.messagePlaceholder}
              className={field}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="flex items-start gap-3 text-sm text-slate-400">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={set('consent')}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-900 accent-brand-500"
              />
              <span>
                I agree to the{' '}
                <a href={routes.privacy} className="font-medium text-brand-400 underline underline-offset-2">
                  Privacy Policy
                </a>{' '}
                and to being contacted about my enquiry.
              </span>
            </label>
            {errors.consent && <p className="mt-1.5 text-xs text-red-400">{errors.consent}</p>}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'sending' ? (
                ENQUIRY_FORM.form.submitting
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {ENQUIRY_FORM.form.submit}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </StandaloneLayout>
  )
}
