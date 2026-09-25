import { Link } from 'react-router-dom'
import { ArrowRight } from './icons.jsx'
import { Placeholder } from './ui.jsx'

export default function ServiceCard({ service, index }) {
  return (
    <Link
      to="/services"
      className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-cream-2/40 transition-colors duration-500 hover:border-ink/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {service.image ? (
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        ) : (
          <Placeholder label={service.name} className="aspect-auto h-full rounded-none border-0" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-brass-2">
            {String(index + 1).padStart(2, '0')}
          </span>
          <ArrowRight className="h-4 w-4 text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-ink" />
        </div>
        <h3 className="display mt-4 text-xl leading-snug sm:text-2xl">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{service.short}</p>
      </div>
    </Link>
  )
}
