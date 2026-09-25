import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { Button, Reveal } from '../components/ui.jsx'
import { Check, Mail, Phone, WhatsApp } from '../components/icons.jsx'
import { contact } from '../data/site.js'

const accountNumber = '411200171206405'

const steps = [
  {
    title: 'Confirm your invoice',
    body: 'Check the quoted amount, project description and invoice reference before making payment.',
  },
  {
    title: 'Use your invoice reference',
    body: 'Enter the reference shown on your MG Flooring invoice so we can match your payment quickly.',
  },
  {
    title: 'Send proof of payment',
    body: 'Share the bank confirmation by WhatsApp or email. Our team will acknowledge it once received.',
  },
]

export default function Payments() {
  const [copied, setCopied] = useState(false)

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Payment details"
        title="A clear way to settle your flooring invoice."
        description="Use the official MG Flooring banking details below, include your invoice reference and send us your proof of payment for confirmation."
      />

      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-7 text-cream sm:p-10 lg:min-h-[32rem] lg:p-12">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-red/40 blur-3xl" aria-hidden="true" />
              <div className="relative flex h-full flex-col">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cream/55">Bank transfer</p>
                <h2 className="display mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">MG Flooring official account</h2>

                <dl className="mt-12 grid gap-7 border-t border-cream/15 pt-8 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/45">Bank</dt>
                    <dd className="mt-2 text-xl font-semibold">ZB Bank</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/45">Branch</dt>
                    <dd className="mt-2 text-xl font-semibold">First Street, Harare</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/45">Account number</dt>
                    <dd className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-mono text-2xl font-semibold tracking-[0.08em] tabular-nums sm:text-3xl">{accountNumber}</span>
                      <button
                        type="button"
                        onClick={copyAccount}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-cream/25 px-5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-cream hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                        aria-live="polite"
                      >
                        {copied && <Check className="h-4 w-4" />}
                        {copied ? 'Copied' : 'Copy account number'}
                      </button>
                    </dd>
                  </div>
                </dl>

                <p className="mt-auto pt-10 text-sm leading-relaxed text-cream/60">
                  Account details are also shown on your official MG Flooring invoice. Please verify any requested change of banking details by calling our team directly.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={80}>
              <div className="rounded-2xl bg-brand-red p-7 text-cream sm:p-9">
                <h2 className="display text-3xl sm:text-4xl">Before you pay</h2>
                <ol className="mt-8 space-y-7">
                  {steps.map((step, index) => (
                    <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-4 border-t border-cream/20 pt-6 first:border-0 first:pt-0">
                      <span className="text-sm font-bold text-brass">0{index + 1}</span>
                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-cream/70">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-hairline bg-cream-2 p-7 sm:p-9">
                <h2 className="display text-2xl sm:text-3xl">Send proof of payment</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">Include your name and invoice reference when contacting our accounts team.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button href={contact.whatsapp} variant="primary" icon={false} className="gap-2">
                    <WhatsApp className="h-4 w-4" /> WhatsApp
                  </Button>
                  <Button href={contact.emails[0].href} variant="outline" icon={false} className="gap-2">
                    <Mail className="h-4 w-4" /> Email accounts
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-16 sm:py-20">
        <div className="container-x flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">Not sure your payment details are correct?</h2>
            <p className="mt-3 max-w-xl text-muted">Call MG Flooring before sending funds. We are available {contact.hours.toLowerCase()}.</p>
          </div>
          <Button href={contact.phones[0].href} variant="outline" icon={false} className="gap-2 self-start lg:self-auto">
            <Phone className="h-4 w-4" /> {contact.phones[0].value}
          </Button>
        </div>
      </section>
    </>
  )
}
