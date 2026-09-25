import { Link } from 'react-router-dom'
import { company, services, projects, reasons, blogPosts, trustSignals } from '../data/site.js'
import { Button, Reveal, Eyebrow, SectionHeading } from '../components/ui.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { ArrowRight } from '../components/icons.jsx'

export default function Home() {
  const featuredServices = services.slice(0, 6)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid min-h-[100svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Wooden &amp; tile flooring specialists — Harare</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display mt-6 text-[2.9rem] leading-[1.0] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
                Beautiful floors,
                <br />
                laid to <span className="italic text-brass-2">last</span>.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                MG Flooring supplies and installs premium timber, tile and carpet for homes, businesses and
                industry across Zimbabwe — from teak parquet to commercial carpet tiles.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary">
                  Get a quote
                </Button>
                <Button to="/projects" variant="ghost">
                  View our work
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/img/parquet-teak.jpg"
                    alt="Warm teak parquet flooring laid in a herringbone pattern"
                    className="aspect-[3/4] w-full object-cover"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 rounded-xl border border-hairline bg-cream px-5 py-4 shadow-sm sm:left-8">
                  <p className="display text-sm font-medium">{company.founded}</p>
                  <p className="text-xs text-muted">Operating since · Harare</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-hairline">
          <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4">
            {trustSignals.map((t, i) => (
              <Reveal key={t.label} delay={i * 80}>
                <div className="flex flex-col gap-1">
                  <span className="display text-2xl font-medium sm:text-3xl">{t.value}</span>
                  <span className="text-sm text-muted">{t.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/img/wood-blocks-herringbone.jpg"
                  alt="Herringbone teak wood block flooring"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="A contract floor layer trusted across the country."
              description={company.description}
            />
            <Reveal delay={220}>
              <Link
                to="/about"
                className="link-underline mt-8 inline-flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-ink"
              >
                About MG Flooring <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our services &amp; products"
              title="Flooring for every space and purpose."
            />
            <Reveal delay={200}>
              <Button to="/services" variant="outline" className="hidden md:inline-flex">
                All services
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-10 md:hidden">
              <Button to="/services" variant="outline" className="w-full">
                All services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 sm:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Recent work" title="Projects we're proud of." light />
            <Reveal delay={200}>
              <Button to="/projects" variant="light" className="hidden md:inline-flex">
                All projects
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 90}>
                <Link to="/projects" className="group block">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="text-[0.68rem] uppercase tracking-[0.2em] text-cream/70">{p.sector}</span>
                      <h3 className="display mt-1 text-xl leading-snug text-cream">{p.name}</h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-10 md:hidden">
              <Button to="/projects" variant="light" className="w-full">
                All projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Why MG Flooring" title="Three reasons clients choose us." />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.index} delay={i * 100}>
                <div className="flex h-full flex-col border-t border-ink/20 pt-8">
                  <span className="display text-4xl font-light text-brass-2 sm:text-5xl">{r.index}</span>
                  <h3 className="display mt-6 text-2xl">{r.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESTORATION SHOWCASE */}
      <section className="bg-cream-2/60 py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Restoration"
              title="Renew an old wooden floor to look brand new."
              description="We sand your worn floor with a floor sanding machine, then apply two coats of sealer. The sealer protects and beautifies — bringing tired timber back to life."
            />
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/services" variant="primary">
                  See the process
                </Button>
                <Button to="/contact" variant="ghost">
                  Get a quote
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={80}>
              <img
                src="/img/floor-restore-before.jpg"
                alt="Worn wooden floor before sanding"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
            </Reveal>
            <Reveal delay={160} className="mt-8">
              <img
                src="/img/floor-restore-final.jpg"
                alt="Restored wooden floor after sanding and sealing"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Care &amp; guidance" title="Keep your floors looking their best." />
            <Reveal delay={200}>
              <Button to="/blog" variant="outline" className="hidden md:inline-flex">
                All articles
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-hairline p-7 transition-colors duration-500 hover:border-ink/20"
                >
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-2">{post.category}</span>
                  <h3 className="display mt-4 text-xl leading-snug transition-colors group-hover:text-brass-2">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink">
                    Read article{' '}
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}


