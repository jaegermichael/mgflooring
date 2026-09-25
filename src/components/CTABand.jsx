import { contact } from '../data/site.js'
import { Button, Reveal, Eyebrow } from './ui.jsx'
import { Phone, WhatsApp } from './icons.jsx'

export default function CTABand() {
  return (
    <section className="bg-ink text-cream">
      <div className="container-x py-24 sm:py-28 lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Start your project</Eyebrow>
            <h2 className="display mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Let's lay the foundation for something beautiful.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-cream/70">
              Tell us about your space, a single room, a whole building or a national rollout, and we'll
              advise, quote and install with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="light">
                Get a quote
              </Button>
              <Button href={contact.whatsapp} variant="ghostLight" icon={false}>
                <WhatsApp className="h-4 w-4" /> WhatsApp us
              </Button>
            </div>
            <a
              href={contact.phones[0].href}
              className="mt-8 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-cream"
            >
              <Phone className="h-4 w-4" /> {contact.phones[0].value}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

