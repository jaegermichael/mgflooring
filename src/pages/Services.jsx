import { services } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { Button, Reveal, Placeholder } from '../components/ui.jsx'

const process = [
  { step: '01', label: 'Old wooden floor before sanding', image: '/img/floor-restore-before.jpg', alt: 'Old wooden floor before sanding' },
  { step: '02', label: 'Sanding in progress', image: '/img/work-in-progress-1.jpg', alt: 'Floor sanding in progress' },
  { step: '03', label: 'After being sanded', image: '/img/floor-restore-after.jpg', alt: 'Floor after sanding' },
  { step: '04', label: 'Final, two coats of sealer', image: '/img/floor-restore-final.jpg', alt: 'Finished floor with two coats of sealer' },
]

const flooringServices = services.filter((service) => !['floor-restoration', 'decks'].includes(service.slug))
const extraServices = services.filter((service) => ['floor-restoration', 'decks'].includes(service.slug))

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our core service"
        title="Flooring is what we do."
        description="Our main service is the supply and professional installation of flooring for homes, businesses and industrial spaces. Choose from timber, tile, carpet, vinyl and resin finishes."
      />

      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="grid overflow-hidden rounded-2xl bg-ink text-cream lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <h2 className="display text-4xl leading-tight sm:text-5xl">Flooring supply and installation</h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                  We help you select the right floor, prepare the surface and install every finish with care. One team manages the work from product choice to the final fitted edge.
                </p>
                <div className="mt-8">
                  <Button to="/contact" variant="accent">Discuss your floor</Button>
                </div>
              </div>
              <img
                src="/img/parquet-teak.jpg"
                alt="Professionally installed timber flooring"
                className="h-full min-h-[22rem] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-10 sm:pb-16">
        <div className="container-x pb-4 sm:pb-8">
          <Reveal>
            <h2 className="display max-w-3xl text-4xl leading-tight sm:text-5xl">Choose the flooring that suits your space.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">These are flooring options within our core supply and installation service.</p>
          </Reveal>
        </div>
        <div className="container-x flex flex-col">
          {flooringServices.map((s, i) => (
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

      <section className="bg-cream-2 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <h2 className="display max-w-3xl text-4xl leading-tight sm:text-5xl">Additional services when your project needs more.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {extraServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <article className="grid h-full overflow-hidden rounded-2xl bg-cream lg:grid-cols-[.9fr_1.1fr]">
                  {service.image ? (
                    <img src={service.image} alt={service.imageAlt} loading="lazy" className="h-full min-h-64 w-full object-cover" />
                  ) : (
                    <Placeholder label={service.name} className="h-full min-h-64 rounded-none border-0" />
                  )}
                  <div className="flex flex-col p-7 sm:p-9">
                    <h3 className="display text-3xl leading-tight">{service.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>
                    <div className="mt-auto pt-7"><Button to="/contact" variant="outline">Enquire</Button></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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

