import { Link } from 'react-router-dom'
import { projects } from '../data/site.js'
import { Button, Reveal } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'

const pillars = [
  { number: '01', title: 'What we do', body: 'We supply and install considered flooring for homes, workplaces and demanding commercial spaces.', className: 'story-card story-card-dark', image: '/img/strip-flooring-brown.jpg' },
  { number: '02', title: 'Our impact', body: 'Every floor is planned around the room, the way it is used and the finish our client wants to live with.', className: 'story-card story-card-lime', image: '/img/wood-blocks-herringbone.jpg' },
  { number: '03', title: 'Our standard', body: 'Clear advice, careful preparation and a finish that looks right from the first board to the final edge.', className: 'story-card story-card-photo', image: '/img/wood-blocks.jpg' },
]

const stats = [['10+', 'years of craft'], ['30+', 'trusted brands'], ['7', 'featured projects'], ['3', 'markets served']]

export default function Home() {
  return (
    <>
      <section className="home-hero container-wide">
        <div className="hero-photo">
          <img src="/img/parquet-teak.jpg" alt="Warm teak parquet flooring fitted in a herringbone pattern" fetchPriority="high" />
          <span className="hero-photo-label">Crafted in Zimbabwe</span>
        </div>
        <div className="hero-copy-panel">
          <Reveal><p className="micro-label">Flooring specialists since 2015</p></Reveal>
          <Reveal delay={80}><h1>Floors made<br />to be lived on</h1></Reveal>
          <Reveal delay={150}><p className="hero-lede">Beautifully supplied and fitted timber, tile, carpet and vinyl flooring for homes and businesses across Zimbabwe.</p></Reveal>
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
        {['Hardwood parquet', 'Commercial flooring', 'Floor restoration', 'Vinyl sheeting', 'Carpet fitting', 'Hardwood parquet'].map((item, i) => <span key={`${item}${i}`}><i />{item}</span>)}
      </div></section>

      <section className="stats-stage"><div className="stats-backdrop" aria-hidden="true" /><div className="container-wide stats-inner">
        <Reveal><p className="section-kicker light">Measured by the work</p></Reveal>
        <Reveal delay={80}><h2>Experience you can see in every finish.</h2></Reveal>
        <div className="stats-grid">{stats.map(([value, label], i) => <Reveal key={label} delay={i * 90} className="stat-item"><strong>{value}</strong><span>{label}</span></Reveal>)}</div>
      </div></section>

      <section className="projects-section container-wide">
        <div className="projects-heading"><div><Reveal><p className="section-kicker">Selected work</p></Reveal><Reveal delay={80}><h2>Built for real rooms and real routines.</h2></Reveal></div><Reveal delay={120}><Button to="/projects" variant="outline">View every project</Button></Reveal></div>
        <div className="project-strip">{projects.slice(0, 3).map((project, i) => <Reveal key={project.name} delay={i * 90}><Link to="/projects" className="project-tile"><img src={project.image} alt={project.imageAlt} loading="lazy" /><span>{project.sector}</span><h3>{project.name}</h3><ArrowRight className="project-arrow" /></Link></Reveal>)}</div>
      </section>

      <section className="final-cta container-wide"><div><p className="section-kicker light">Start a conversation</p><h2>Your next floor starts with the right advice.</h2></div><Button to="/contact" variant="accent">Request a quote</Button></section>
    </>
  )
}
