import { company, trustSignals } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { Reveal, SectionHeading } from '../components/ui.jsx'

const values = [
  { title: 'Vision', body: 'To provide good services that satisfy our customers.' },
  {
    title: 'Mission',
    body: 'To exceed our clients\u2019 expectations in good quality service across a range of markets, including commercial and residential.',
  },
  {
    title: 'Goals',
    body: 'To build a good reputation in the flooring industry and be a key player locally and beyond Zimbabwe\u2019s borders.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="True professionals in the flooring industry."
        description={company.description}
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/img/parquet-teak.jpg"
                  alt="Teak parquet flooring installed by MG Flooring"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Since 2015"
              title="A registered contractor, built on quality of finish."
              description="MG Flooring is a registered company and a member of the Construction Industry. We operate from Harare and serve clients nationwide, supplying and laying flooring for homes, schools, clubs, factories and offices."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-hairline bg-cream-2/40 p-8">
                  <h3 className="display text-2xl">{v.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-20 sm:py-28">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {trustSignals.map((t, i) => (
            <Reveal key={t.label} delay={i * 80}>
              <div className="flex flex-col gap-1 border-l border-hairline pl-5">
                <span className="display text-3xl font-medium sm:text-4xl">{t.value}</span>
                <span className="text-sm text-muted">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}

