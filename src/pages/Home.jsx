import { Link } from 'react-router-dom'
import { Button, Reveal } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'

const pillars = [
  { number: '01', title: 'Strip wooden flooring tiles', body: 'Long timber boards supplied and installed for a clean, natural finish in homes and commercial spaces.', className: 'story-card story-card-dark', image: '/img/strip-wooden-flooring-tiles.jpg' },
  { number: '02', title: 'Parquet wooden floor tiles', body: 'Precision-laid parquet in herringbone and geometric patterns, finished to showcase the timber grain.', className: 'story-card story-card-lime', image: '/img/wooden-floor-tiles-hero.jpg' },
  { number: '03', title: 'Wood block floor tiles', body: 'Durable wood blocks arranged into distinctive patterns for warm, characterful interiors.', className: 'story-card story-card-photo', image: '/img/wood-block-floor-tiles.jpg' },
]

const stats = [['10+', 'years of craft'], ['30+', 'trusted brands'], ['7', 'featured projects'], ['3', 'markets served']]

const featuredWork = [
  { name: 'Strip wooden flooring tiles', sector: 'Wooden flooring', image: '/img/strip-wooden-flooring-tiles.jpg', imageAlt: 'Bright strip wooden flooring tiles' },
  { name: 'Parquet wooden floor tiles', sector: 'Wooden flooring', image: '/img/wooden-floor-tiles-hero.jpg', imageAlt: 'Bright parquet wooden floor tiles' },
  { name: 'Wood laminate flooring', sector: 'Wooden flooring', image: '/img/wood-laminate-flooring.jpg', imageAlt: 'Bright wood laminate flooring' },
]

export default function Home() {
  return (
    <>
      <section className="home-hero container-wide">
        <div className="hero-photo">
          <img src="/img/wooden-floor-tiles-hero.jpg" alt="Bright parquet wooden floor tiles installed in a Zimbabwean home" fetchPriority="high" />
          <span className="hero-photo-label">Crafted in Zimbabwe</span>
        </div>
        <div className="hero-copy-panel">
          <Reveal><p className="micro-label">Wooden floor tiles Zimbabwe</p></Reveal>
          <Reveal delay={80}><h1>Wooden floors<br />made to be lived on</h1></Reveal>
          <Reveal delay={150}><p className="hero-lede">MG Flooring supplies and installs wooden floor tiles across Zimbabwe, including strip wooden flooring tiles, wood block floor tiles, parquet wooden floor tiles and wood laminate.</p></Reveal>
          <Reveal delay={220}><Button to="/projects" variant="accent">Explore our work</Button></Reveal>
          <div className="hero-proof">
            <Reveal delay={260}><div className="experience-mark"><strong>10+</strong><span>years<br />of craft</span></div></Reveal>
            <Reveal delay={320}><Link className="watch-link" to="/about"><span className="watch-dot">▶</span> Meet MG Flooring</Link></Reveal>
          </div>
        </div>
      </section>

      <section className="intro-section container-wide">
        <Reveal><p className="section-kicker">Who we are</p></Reveal>
        <Reveal delay={80}><h2 className="center-statement">We create landmark floors for the spaces that matter.</h2></Reveal>
        <div className="story-grid">
          {pillars.map((item, index) => (
            <Reveal key={item.number} delay={index * 100} className={item.className}>
              {item.image && <img src={item.image} alt="Finished timber flooring by MG Flooring" />}
              <span className="card-number">{item.number}</span>
              <div className="story-content"><h3>{item.title}</h3><p>{item.body}</p><Link to={index === 0 ? '/services' : '/about'} aria-label={`Read more about ${item.title}`} className="round-link">↗</Link></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="service-marquee" aria-label="Our specialisms"><div className="marquee-track">
        {['Parquet wooden floor tiles', 'Strip wooden flooring tiles', 'Wood block floor tiles', 'Wood laminate flooring', 'Floor restoration', 'Parquet wooden floor tiles'].map((item, i) => <span key={`${item}${i}`}><i />{item}</span>)}
      </div></section>

      <section className="stats-stage"><div className="stats-backdrop" aria-hidden="true" /><div className="container-wide stats-inner">
        <Reveal><p className="section-kicker light">Measured by the work</p></Reveal>
        <Reveal delay={80}><h2>Experience you can see in every finish.</h2></Reveal>
        <div className="stats-grid">{stats.map(([value, label], i) => <Reveal key={label} delay={i * 90} className="stat-item"><strong>{value}</strong><span>{label}</span></Reveal>)}</div>
      </div></section>

      <section className="projects-section container-wide">
        <div className="projects-heading"><div><Reveal><p className="section-kicker">Selected work</p></Reveal><Reveal delay={80}><h2>Built for real rooms and real routines.</h2></Reveal></div><Reveal delay={120}><Button to="/projects" variant="outline">View every project</Button></Reveal></div>
        <div className="project-strip">{featuredWork.map((project, i) => <Reveal key={project.name} delay={i * 90}><Link to="/projects" className="project-tile"><img src={project.image} alt={project.imageAlt} loading="lazy" /><span>{project.sector}</span><h3>{project.name}</h3><ArrowRight className="project-arrow" /></Link></Reveal>)}</div>
      </section>

      <section className="final-cta container-wide"><div><p className="section-kicker light">Start a conversation</p><h2>Your next floor starts with the right advice.</h2></div><Button to="/contact" variant="accent">Request a quote</Button></section>
    </>
  )
}
