import { Sparkles, ArrowRight, ChevronDown, TrendingUp, Users } from 'lucide-react'
import { HERO, ENQUIRY, BRAND } from '../constants/content.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* animated background blobs */}
      <div className="animate-blob pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
        style={{ animationDelay: '-7s' }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              <Sparkles className="h-3.5 w-3.5" />
              {HERO.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {HERO.headlineLead}{' '}
              <span className="animate-gradient-x bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {HERO.headlineAccent}
              </span>{' '}
              {HERO.headlineTail}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg text-slate-400">{BRAND.description}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={ENQUIRY.trial}
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition hover:scale-[1.03] hover:opacity-90"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
              >
                <ChevronDown className="h-4 w-4" />
                {HERO.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 ring-1 ring-violet-500/40">
                <Users className="h-4 w-4 text-violet-300" />
              </span>
              <p className="text-sm text-slate-400">
                {HERO.socialProof.trustedPrefix}{' '}
                <span className="font-semibold text-white">
                  {HERO.socialProof.trustedHighlight}
                </span>{' '}
                {HERO.socialProof.trustedSuffix}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Dashboard mock */}
        <Reveal delay={250}>
          <div className="relative">
            <div className="animate-float absolute -top-6 -left-6 hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-emerald-400 shadow-xl lg:block">
              {HERO.dashboard.floaters.roi}
            </div>
            <div className="animate-float absolute -right-4 -bottom-6 hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-cyan-400 shadow-xl [animation-delay:3s] lg:block">
              {HERO.dashboard.floaters.uptime}
            </div>

            <div className="animate-pulse-glow rounded-2xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-violet-950/50 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  {HERO.dashboard.title}
                </span>
              </div>

              <div className="space-y-6 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {HERO.dashboard.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 p-3"
                    >
                      <p className="text-xs text-slate-500">{kpi.label}</p>
                      <p className="mt-1 text-xl font-bold text-white">{kpi.value}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-400">
                        <TrendingUp className="h-3 w-3" />
                        {kpi.delta}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{HERO.dashboard.chartLabel}</span>
                    <span>{HERO.dashboard.chartRange}</span>
                  </div>
                  <div className="flex h-28 items-end gap-2">
                    {[38, 55, 44, 68, 58, 82, 72, 100].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className={`flex-1 rounded-t-md bg-gradient-to-t ${
                          i % 2 === 0
                            ? 'from-violet-600/60 to-violet-400/80'
                            : 'from-cyan-600/60 to-cyan-400/80'
                        } transition-transform duration-300 hover:scale-y-105`}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    {HERO.dashboard.feedTitle}
                  </p>
                  <ul className="space-y-2">
                    {HERO.dashboard.feed.map(({ icon: Icon, text }) => (
                      <li
                        key={text}
                        className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-300"
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0 text-violet-400" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
