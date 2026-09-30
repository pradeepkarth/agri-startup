import StandaloneLayout from '../components/StandaloneLayout.jsx'
import { ShieldCheck } from 'lucide-react'
import { PRIVACY, BRAND } from '../constants/content.js'

export default function PrivacyPolicyPage() {
  return (
    <StandaloneLayout
      title="Privacy Policy"
      subtitle={`Last updated: ${PRIVACY.lastUpdated}`}
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
            <ShieldCheck className="h-5 w-5 text-brand-400" />
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Privacy Policy
          </h1>
        </div>
        <p className="mt-2 text-sm text-slate-400">Last updated: {PRIVACY.lastUpdated}</p>

        <p className="mt-6 text-base leading-relaxed text-slate-300">{PRIVACY.intro}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{PRIVACY.contactLine}</p>
      </div>

      <div className="mt-8 space-y-6">
        {PRIVACY.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-20 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold tracking-tight text-white">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.body.map((block) => (
                <div key={block.heading}>
                  <h3 className="text-sm font-semibold text-slate-100">{block.heading}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{block.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </StandaloneLayout>
  )
}
