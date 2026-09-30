import { WHY } from '../constants/content.js'
import Reveal from './Reveal.jsx'

export default function WhyBosqen() {
  return (
    <section id="why" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">
              {WHY.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {WHY.heading}
            </h2>
            <p className="mt-4 text-lg text-slate-400">{WHY.subheading}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {WHY.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 150}>
              <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500/20">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
