import { useEffect, useState } from 'react'
import { ACTIVITY } from '../constants/content.js'

export default function ActivityTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ACTIVITY.items.length), 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section aria-label={ACTIVITY.title} className="border-y border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <span className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          LIVE
        </span>
        <p className="flex min-h-10 items-center text-center text-sm text-slate-300 sm:min-h-6">
          <span key={index} className="animate-ticker-item">
            {ACTIVITY.items[index]}
          </span>
        </p>
      </div>
    </section>
  )
}
