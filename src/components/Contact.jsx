import { ArrowRight, Mail } from 'lucide-react'
import { CONTACT, ENQUIRY, BRAND, routes } from '../constants/content.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 pb-24 sm:px-6 lg:px-8">
      <Reveal>
        <div className="animate-gradient-x relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="animate-spin-slow pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full border border-dashed border-white/20" />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {CONTACT.heading}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
            {CONTACT.subheading}
          </p>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={ENQUIRY.trial}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:scale-[1.03] hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={routes.contact}
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a demo
            </a>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {CONTACT.assurances.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-white/85">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>

          <p className="relative mt-4 text-xs text-white/70">
            Prefer plain email? Write to{' '}
            <a href={ENQUIRY.general} className="font-semibold underline underline-offset-2">
              {BRAND.email}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  )
}
