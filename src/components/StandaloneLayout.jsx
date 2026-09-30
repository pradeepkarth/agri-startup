import { ArrowLeft } from 'lucide-react'
import { BRAND, routes } from '../constants/content.js'

/**
 * Shared chrome for standalone pages (privacy policy, enquiry form).
 * Keeps the same visual language as the main site but is self-contained.
 */
export default function StandaloneLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href={routes.home} className="flex items-center gap-2">
            <img src="/bosqen-logo.png" alt="Bosqen" className="h-7 w-auto" />
          </a>
          <a
            href={routes.home}
            className="group flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">{children}</main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>{BRAND.name} — {BRAND.tagline}</p>
          <div className="flex gap-6">
            <a href={routes.privacy} className="transition hover:text-white">Privacy Policy</a>
            <a href={routes.contact} className="transition hover:text-white">Request a demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
