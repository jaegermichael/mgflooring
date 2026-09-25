import { Reveal, Eyebrow } from './ui.jsx'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 lg:pt-52 lg:pb-24">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
