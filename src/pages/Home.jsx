import { Link } from 'react-router-dom'
import { Button, Reveal } from '../components/ui.jsx'
import { ArrowRight } from '../components/icons.jsx'

const materials = [
  { number: '01', title: 'Parquet wooden floor tiles', body: 'Pattern, warmth and a finish made for rooms with character.', image: '/img/wood-blocks-herringbone.jpg', className: 'material-card material-card-wide' },
  { number: '02', title: 'Strip wooden flooring tiles', body: 'Natural timber lines that give a room calm, lasting rhythm.', image: '/img/strip-flooring-brown-white.jpg', className: 'material-card material-card-tall' },
  { number: '03', title: 'Wood block floor tiles', body: 'Durable solid blocks, precisely arranged and carefully finished.', image: '/img/wood-blocks.jpg', className: 'material-card' },
  { number: '04', title: 'Wood laminate flooring', body: 'A clean contemporary surface with practical everyday performance.', image: '/img/laminate-flooring-restored.png', className: 'material-card material-card-light' },
]

const projectImages = [
  { image: '/img/parquet-teak.jpg', alt: 'Warm parquet wooden floor tiles after installation', label: 'Parquet installation' },
  { image: '/img/floor-restore-final.jpg', alt: 'Restored wooden floor after sealing', label: 'Floor restoration' },
  { image: '/img/vinyl-sheeting-2.jpg', alt: 'Professionally fitted vinyl flooring', label: 'Commercial flooring' },
]

export default function Home() {
  return (
    <>
      <section className="studio-hero" aria-labelledby="home-title">
        <img src="/img/wood-blocks-herringbone.jpg" alt="Herringbone wooden floor tiles installed in Zimbabwe" fetchPriority="high" />
        <div className="studio-hero-shade" />
        <div className="container-wide studio-hero-copy">
          <Reveal><p className="studio-index">MG Flooring · Harare · Since 2015</p></Reveal>
          <Reveal delay={80}><h1 id="home-title">Wood floors,<br />laid to last.</h1></Reveal>
          <Reveal delay={150}><p>Specialists in wooden floor tiles in Zimbabwe. We supply, install, sand and seal parquet, strip timber, wood blocks and laminate for homes and commercial spaces.</p></Reveal>
          <Reveal delay={220} className="studio-hero-actions">
            <Button to="/contact" variant="accent">Request a quote</Button>
            <Link to="/projects" className="studio-text-link">See our work <ArrowRight /></Link>
          </Reveal>
        </div>
        <div className="studio-proof" aria-label="Company highlights">
          <span><strong>10+</strong> years of flooring craft</span>
          <span><strong>Nationwide</strong> project coverage</span>
          <span><strong>One team</strong> from advice to finish</span>
        </div>
      </section>

      <section className="studio-intro container-wide">
        <div className="studio-intro-head">
          <Reveal><p className="section-kicker">Our speciality</p></Reveal>
          <Reveal delay={70}><h2>The floor is not the last detail.<br />It sets the whole room.</h2></Reveal>
        </div>
        <Reveal delay={120}><p className="studio-intro-copy">MG Flooring helps you choose a surface that suits the space, prepares the floor properly and installs every edge with care. Wooden flooring is our core craft. Tiles, vinyl, carpeting and other finishes support complete projects.</p></Reveal>
      </section>

      <section className="material-section">
        <div className="container-wide material-heading">
          <Reveal><p className="section-kicker">Wood collection · 01—04</p></Reveal>
          <Reveal delay={70}><h2>Four ways to bring wood into a space.</h2></Reveal>
        </div>
        <div className="container-wide material-grid">
          {materials.map((material, index) => (
            <Reveal key={material.title} delay={(index % 2) * 80} className={material.className}>
              <Link to="/services">
                <img src={material.image} alt={material.title} loading={index > 1 ? 'lazy' : 'eager'} />
                <span className="material-wash" />
                <span className="material-number">{material.number}</span>
                <div className="material-copy"><h3>{material.title}</h3><p>{material.body}</p></div>
                <span className="material-arrow">↗</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="craft-section">
        <div className="container-wide craft-layout">
          <div className="craft-title">
            <Reveal><p className="section-kicker light">The MG standard</p></Reveal>
            <Reveal delay={80}><h2>Measured in the finish, not the promise.</h2></Reveal>
          </div>
          <div className="craft-steps">
            {[
              ['01', 'Advise', 'We assess the room, use and desired finish before recommending a floor.'],
              ['02', 'Prepare', 'We correct the base and plan every transition before installation begins.'],
              ['03', 'Install', 'Each board, block or sheet is fitted with consistent spacing and alignment.'],
              ['04', 'Finish', 'Edges, sealers and final checks are completed before handover.'],
            ].map(([number, title, body], index) => (
              <Reveal key={title} delay={index * 60} className="craft-step"><span>{number}</span><h3>{title}</h3><p>{body}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section container-wide">
        <div className="work-heading">
          <div><Reveal><p className="section-kicker">Recent finishes</p></Reveal><Reveal delay={70}><h2>Real work. Carefully completed.</h2></Reveal></div>
          <Reveal delay={120}><Button to="/projects" variant="outline">Explore projects</Button></Reveal>
        </div>
        <div className="work-gallery">
          {projectImages.map((project, index) => (
            <Reveal key={project.label} delay={index * 70} className={`work-image work-image-${index + 1}`}>
              <img src={project.image} alt={project.alt} loading="lazy" /><span>{project.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="studio-cta container-wide">
        <div><p>Have a room in mind?</p><h2>Let’s specify the right floor.</h2></div>
        <Button to="/contact" variant="accent">Talk to MG Flooring</Button>
      </section>
    </>
  )
}
