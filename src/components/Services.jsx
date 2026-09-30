import { Sparkles } from 'lucide-react'
import { SERVICES } from '../constants/content.js'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24">
      {/* soft background accents */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
              {SERVICES.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {SERVICES.heading}
            </h2>
            <p className="mt-4 text-lg text-slate-400">{SERVICES.subheading}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map(({ icon: Icon, title, copy, tag }, i) => (
            <Reveal key={title} delay={(i % 3) * 120}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/40">
                {/* corner glow on hover */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-violet-500/0 blur-2xl transition-all duration-500 group-hover:bg-violet-500/20" />
                {/* shimmer sweep on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-colors duration-300 group-hover:bg-violet-500/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-slate-700/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-400 transition-colors group-hover:border-violet-500/40 group-hover:text-violet-300">
                    {tag}
                  </span>
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
            <Sparkles className="h-4 w-4 text-violet-400" />
            Need something custom? Email us — we tailor every engagement.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
