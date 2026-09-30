import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FAQS } from '../constants/content.js'
import Reveal from './Reveal.jsx'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
              {FAQS.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {FAQS.heading}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-12 divide-y divide-slate-800 border-y border-slate-800">
            {FAQS.items.map((faq, index) => {
              const open = openIndex === index
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-medium text-white">{faq.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                        open ? 'rotate-45 text-violet-400' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-sm leading-relaxed text-slate-400">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
