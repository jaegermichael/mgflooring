import { Reveal, Eyebrow } from './ui.jsx'

export default function PageHero({ eyebrow, title, description, image = '/img/parquet-teak.jpg' }) {
  return (
    <section className="page-hero-redesign">
      <div className="container-wide page-hero-grid">
        <div className="page-hero-copy">
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h1>{title}</h1></Reveal>
          {description && <Reveal delay={160}><p>{description}</p></Reveal>}
        </div>
        <Reveal delay={100} className="page-hero-image">
          <img src={image} alt="MG Flooring craftsmanship" />
          <span>MG · Flooring Zimbabwe</span>
        </Reveal>
      </div>
    </section>
  )
}
