import { useMemo, useState } from 'react'
import { projects } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { Reveal } from '../components/ui.jsx'

const filters = ['All', 'Commercial', 'Residential', 'Education']

function categoryOf(p) {
  if (['Industrial', 'Engineering', 'Private Club', 'Residential / Commercial'].includes(p.sector)) return 'Commercial'
  if (p.sector === 'Residential') return 'Residential'
  return 'Education'
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => categoryOf(p) === active)),
    [active],
  )

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work delivered across Zimbabwe."
        description="From schools and private clubs to industrial facilities and private residences — a selection of the projects we have supplied and installed."
      />

      <section className="pb-8">
        <div className="container-x">
          <Reveal>
            <p className="max-w-2xl rounded-xl border border-hairline bg-cream-2/50 px-5 py-4 text-sm text-muted">
              <span className="font-semibold text-ink">Note:</span> project-specific photography is being compiled —
              images shown are representative of our work.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={active === f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.14em] transition-all duration-300 ${
                    active === f
                      ? 'border-ink bg-ink text-cream'
                      : 'border-hairline text-muted hover:border-ink/40 hover:text-ink'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.66rem] uppercase tracking-[0.16em] text-ink backdrop-blur">
                      {p.sector}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="display text-xl leading-snug sm:text-2xl">{p.name}</h2>
                    <p className="mt-2 text-sm text-muted">{p.scope}</p>
                    {p.contactPerson && (
                      <p className="mt-4 border-t border-hairline pt-4 text-xs text-muted">
                        Contact: <span className="text-ink">{p.contactPerson}</span>
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
