import { STEPS } from '../constants/content.js'
import Reveal from './Reveal.jsx'

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-slate-800/60 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
              {STEPS.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {STEPS.heading}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.items.map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/40">
                <span className="pointer-events-none absolute -top-4 right-2 text-7xl font-extrabold text-slate-800/60 transition-colors duration-300 group-hover:text-violet-800/60">
                  {step.number}
                </span>
                <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
