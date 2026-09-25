import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/site.js'
import NotFound from './NotFound.jsx'
import CTABand from '../components/CTABand.jsx'
import { Reveal, Eyebrow } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  return (
    <>
      <article className="pt-36 pb-16 sm:pt-44 lg:pt-52">
        <div className="container-x max-w-3xl">
          <Reveal>
            <Link
              to="/blog"
              className="link-underline inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-muted"
            >
              <ArrowRight className="h-4 w-4 rotate-180" /> All articles
            </Link>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-muted">
              <Eyebrow>{post.category}</Eyebrow>
              <span className="text-muted">· {post.date}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mt-5 text-4xl leading-[1.05] sm:text-5xl">{post.title}</h1>
          </Reveal>

          <div className="mt-12 space-y-10">
            {post.body.map((section, i) => (
              <Reveal key={i} delay={80}>
                <div>
                  <h2 className="display text-2xl">{section.heading}</h2>
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <CTABand />
    </>
  )
}
