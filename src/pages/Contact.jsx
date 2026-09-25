import { useState } from 'react'
import { contact } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import { Button, Reveal } from '../components/ui.jsx'
import { Mail, Phone, Pin, Clock, WhatsApp } from '../components/icons.jsx'

const inputBase =
  'w-full rounded-xl border border-ink/15 bg-cream px-4 py-3.5 text-base text-ink placeholder:text-muted/60 transition-colors focus:border-brass focus:outline-none'

const projectTypes = [
  'Hardwood / parquet flooring',
  'Ceramic / porcelain tile',
  'Carpet & carpet tiles',
  'Vinyl / vinyl plank',
  'Epoxy floors',
  'Floor restoration & sanding',
  'Decks (teak / composite)',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please tell us a little about your project.'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    const subject = encodeURIComponent(`Enquiry, ${form.type || 'General'}, ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nProject type: ${form.type || 'Not selected'}\n\n${form.message}`,
    )
    window.location.href = `mailto:${contact.emails[0].label}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's build your home together."
        description="Talk to our team about your project, we're happy to advise, quote and arrange a visit. Reach us by phone, email, WhatsApp, or the form below."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display text-2xl sm:text-3xl">Contact details</h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <Pin className="mt-1 h-5 w-5 shrink-0 text-brass-2" />
                  <div>
                    <p className="font-semibold">Visit our HQ</p>
                    <p className="mt-1 text-muted">
                      {contact.address[0]}
                      <br />
                      {contact.address[1]}
                      <br />
                      {contact.address[2]}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brass-2" />
                  <div>
                    <p className="font-semibold">Call or WhatsApp</p>
                    <div className="mt-1 space-y-1">
                      {contact.phones.map((p) => (
                        <a key={p.value} href={p.href} className="block text-muted transition-colors hover:text-ink">
                          {p.value} <span className="text-muted/60">({p.label})</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brass-2" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <div className="mt-1 space-y-1">
                      {contact.emails.map((m) => (
                        <a key={m.label} href={m.href} className="block text-muted transition-colors hover:text-ink">
                          {m.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brass-2" />
                  <div>
                    <p className="font-semibold">Opening hours</p>
                    <p className="mt-1 text-muted">{contact.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 rounded-xl border border-hairline bg-cream-2/50 p-5 text-sm text-muted">
                <p className="font-semibold text-ink">Banking details</p>
                <p className="mt-1">{contact.banker}</p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8">
                <Button href={contact.whatsapp} variant="primary" icon={false}>
                  <WhatsApp className="h-4 w-4" /> Start a WhatsApp chat
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-hairline bg-cream-2/40 p-7 sm:p-10"
              >
                <h2 className="display text-2xl sm:text-3xl">Request a quote</h2>
                <p className="mt-2 text-sm text-muted">Fill in the form and we'll get back to you shortly.</p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`${inputBase} ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={`${inputBase} ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="you@email.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">Phone (optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputBase}
                      placeholder="+263 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-2 block text-sm font-medium">Project type</label>
                    <select id="type" value={form.type} onChange={(e) => update('type', e.target.value)} className={inputBase}>
                      <option value="">Select a service…</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">Your project</label>
                    <textarea
                      id="message"
                      rows="5"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={`${inputBase} resize-none`}
                      placeholder="Tell us about the space, area, and what you have in mind…"
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                  </div>
                </div>

                <div className="mt-8">
                  <Button type="submit" variant="primary">Send enquiry</Button>
                </div>

                {sent && (
                  <p className="mt-4 rounded-lg border border-brass/30 bg-brass/10 px-4 py-3 text-sm text-brass-2">
                    Your email app should now open with your enquiry pre-filled. If it doesn't, please email us
                    directly at {contact.emails[0].label}.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}


