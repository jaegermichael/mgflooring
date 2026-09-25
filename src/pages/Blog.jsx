import { Link } from 'react-router-dom'
import { blogPosts } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import CTABand from '../components/CTABand.jsx'
import { Reveal } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Care & maintenance guidance."
        description="Practical advice on caring for tile and wood floors, so your investment stays beautiful for years."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-hairline p-8 transition-colors duration-500 hover:border-ink/20"
              >
                <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-brass-2">
                  <span>{post.category}</span>
                  <span className="h-px flex-1 bg-hairline" />
                  <span className="text-muted">{post.date}</span>
                </div>
                <h2 className="display mt-5 text-2xl leading-snug transition-colors group-hover:text-brass-2">{post.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink">
                  Read article{' '}
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
