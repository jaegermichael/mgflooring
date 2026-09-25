import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { company, contact, navLinks, services } from '../data/site.js'
import { Close, Menu, Phone, Pin, Clock } from './icons.jsx'
import { Button } from './ui.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          open ? 'bg-transparent' : scrolled ? 'bg-cream/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between py-5">
          <Link to="/" className="group flex items-center gap-3" aria-label="MG Flooring — home">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-500 ${
                open ? 'bg-cream text-ink' : 'bg-ink text-cream'
              } group-hover:bg-brass-2`}
            >
              <span className="display text-sm font-medium leading-none">MG</span>
            </span>
            <span className="flex flex-col">
              <span
                className={`display text-xl font-medium leading-none tracking-tight transition-colors ${
                  open ? 'text-cream' : 'text-ink'
                }`}
              >
                MG Flooring
              </span>
              <span
                className={`mt-1 text-[0.62rem] uppercase tracking-[0.28em] ${
                  open ? 'text-cream/50' : 'text-muted'
                }`}
              >
                Flooring specialists
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `link-underline text-[0.82rem] font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-ink is-active' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={contact.phones[0].href}
              className="hidden items-center gap-2 text-[0.82rem] font-medium text-muted transition-colors hover:text-ink xl:flex"
            >
              <Phone className="h-4 w-4" />
              {contact.phones[0].value}
            </a>
            <Button to="/contact" variant="primary">
              Get a quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
              open ? 'text-cream hover:bg-cream/10' : 'text-ink hover:bg-cream-2'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink text-cream transition-all duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="container-x flex flex-1 flex-col justify-center">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
                className={({ isActive }) =>
                  `display border-b border-cream/10 py-4 text-4xl transition-all duration-500 sm:text-5xl ${
                    open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  } ${isActive ? 'text-brass' : 'text-cream hover:text-cream/70'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-2 text-cream/70">
            <a href={contact.phones[0].href} className="flex items-center gap-3 py-1">
              <Phone className="h-4 w-4" /> {contact.phones[0].value}
            </a>
            <span className="flex items-center gap-3 py-1">
              <Clock className="h-4 w-4" /> {contact.hours}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-x grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-ink">
              <span className="display text-sm font-medium leading-none">MG</span>
            </span>
            <span className="flex flex-col">
              <span className="display text-xl font-medium leading-none text-cream">MG Flooring</span>
              <span className="mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-cream/50">Flooring specialists</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">{company.description}</p>
          <div className="mt-8 flex items-center gap-2 text-sm text-cream/60">
            <Clock className="h-4 w-4" /> {contact.hours}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-[0.72rem] uppercase tracking-[0.24em] text-cream/40">Explore</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-cream/75 transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[0.72rem] uppercase tracking-[0.24em] text-cream/40">Services</h3>
          <ul className="mt-6 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-cream/75 transition-colors hover:text-cream">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-[0.72rem] uppercase tracking-[0.24em] text-cream/40">Contact</h3>
          <address className="mt-6 space-y-4 text-sm not-italic text-cream/75">
            <p className="flex gap-3">
              <Pin className="mt-0.5 h-4 w-4 shrink-0 text-cream/40" />
              <span>
                {contact.address[1]}
                <br />
                {contact.address[2]}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cream/40" />
              <a href={contact.phones[0].href} className="transition-colors hover:text-cream">
                {contact.phones[0].value}
              </a>
            </p>
            <p>
              <a href={contact.emails[0].href} className="transition-colors hover:text-cream">
                {contact.emails[0].label}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/45 sm:flex-row">
          <span>© 2026 {company.legalName}. All rights reserved.</span>
          <span>Flooring, supplied &amp; installed across Zimbabwe.</span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

