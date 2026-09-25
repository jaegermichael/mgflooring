import { services } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { Button, Reveal, Placeholder } from '../components/ui.jsx'

const process = [
  { step: '01', label: 'Old wooden floor before sanding', image: '/img/floor-restore-before.jpg', alt: 'Old wooden floor before sanding' },
  { step: '02', label: 'Sanding in progress', image: '/img/work-in-progress-1.jpg', alt: 'Floor sanding in progress' },
  { step: '03', label: 'After being sanded', image: '/img/floor-restore-after.jpg', alt: 'Floor after sanding' },
  { step: '04', label: 'Final — two coats of sealer', image: '/img/floor-restore-final.jpg', alt: 'Finished floor with two coats of sealer' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services & products"
        title="Flooring for every space and purpose."
        description="We supply and install timber, tile, carpet, vinyl and resin flooring for domestic, commercial and industrial projects — and restore tired wooden floors to look brand new."
      />

      <section className="pb-10 sm:pb-16">
        <div className="container-x flex flex-col">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className={`grid items-center gap-10 border-t border-hairline py-14 lg:grid-cols-12 lg:gap-14 lg:py-20 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className="lg:col-span-6 lg:[direction:ltr]">
                <Reveal>
                  {s.image ? (
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={s.image}
                        alt={s.imageAlt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  ) : (
                    <Placeholder label={s.name} />
                  )}
                </Reveal>
              </div>
              <div className="lg:col-span-6 lg:[direction:ltr]">
                <Reveal>
                  <span className="text-[0.72rem] uppercase tracking-[0.2em] text-brass-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="display mt-4 text-3xl leading-tight sm:text-4xl">{s.name}</h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{s.description}</p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button to="/contact" variant="primary">
                      Enquire
                    </Button>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESTORATION PROCESS */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow text-cream/60">Restoration process</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
              How we renew an old wooden floor.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline gap-3">
                    <span className="display text-2xl font-light text-brass">{p.step}</span>
                    <p className="text-sm text-cream/70">{p.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
