import { Mail, ArrowUpRight } from 'lucide-react'
import { BRAND, FOOTER, ENQUIRY, routes } from '../constants/content.js'

const inTouch = [
  { label: 'Email us', href: ENQUIRY.general },
  { label: 'Work samples', href: ENQUIRY.work },
  { label: 'Request a demo', href: routes.contact },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <a href="#" className="flex items-center gap-2">
              <img src="/bosqen-logo.png" alt="Bosqen" className="h-7 w-auto" />
            </a>
            <p className="mt-4 max-w-md text-sm text-slate-400">{FOOTER.blurb}</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-4 flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-brand-400" />
              {FOOTER.contactLabel}: {BRAND.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              {inTouch.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">{FOOTER.copyright}</p>
          <div className="flex gap-6">
            {FOOTER.legal.map((item) => (
              <a
                key={item}
                href={routes.privacy}
                className="text-xs text-slate-500 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
