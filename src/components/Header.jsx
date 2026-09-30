import { ArrowRight, CalendarClock } from 'lucide-react'
import { routes } from '../constants/content.js'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <img src="/bosqen-logo.png" alt="Bosqen" className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={routes.contact}
          aria-label="Request a demo"
          className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-3 py-2 text-sm font-semibold text-white transition hover:scale-[1.03] sm:px-4"
        >
          <CalendarClock className="h-4 w-4 sm:hidden" />
          <span className="hidden sm:inline">Request a demo</span>
          <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:inline" />
        </a>
      </div>
    </header>
  )
}
