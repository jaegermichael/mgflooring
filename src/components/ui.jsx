import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from './icons.jsx'

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export function Eyebrow({ children, className = '', light = false }) {
  return (
    <span className={`eyebrow ${light ? 'text-cream/70' : ''} ${className}`}>
      {children}
    </span>
  )
}

export function Button({ to, href, onClick, children, variant = 'primary', className = '', type, icon = true, ...rest }) {
  const base =
    'btn group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-[1.05rem] text-[0.78rem] uppercase tracking-[0.16em]'
  const variants = {
    primary: 'bg-ink text-cream hover:bg-brass-2',
    light: 'bg-cream text-ink hover:bg-cream-2',
    outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream',
    ghost: 'text-ink hover:text-brass-2',
    ghostLight: 'text-cream hover:text-cream/60',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="h-[1.05rem] w-[1.05rem] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={cls} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type || 'button'} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left', light = false, className = '' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow light={light}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`display mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${
            light ? 'text-cream' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
              light ? 'text-cream/75' : 'text-muted'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

export function Placeholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-dashed border-ink/25 bg-cream-2 ${className}`}
    >
      <div className="px-6 text-center">
        <span className="display block text-2xl text-ink/40 italic">{label}</span>
        <span className="mt-2 block text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          Image to be added
        </span>
      </div>
    </div>
  )
}
