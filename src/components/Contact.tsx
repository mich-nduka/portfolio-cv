import { useState } from 'react'
import { CONTACT_LINKS } from '../data'
import Section from './Section'
import './Contact.css'

const EMAIL = CONTACT_LINKS.find((l) => l.type === 'email')!

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL.label)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = EMAIL.href
    }
  }

  return (
    <Section id="contact" index="05" label="contact" title="Let's build something.">
      <div className="contact-grid">
        <div className="contact-intro">
          <p>Open to web, mobile, or full-stack opportunities — and always happy to talk AI systems. Based in Abuja, Nigeria.</p>
          <div className="contact-email">
            <a className="btn btn-primary" href={EMAIL.href}>
              Email me <span className="arrow" aria-hidden="true">→</span>
            </a>
            <button className="btn btn-ghost copy-btn" onClick={copyEmail}>
              <span className="mono">{copied ? '✓ copied' : EMAIL.label}</span>
            </button>
            <span className="sr-only" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
          </div>
        </div>
        <ul className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className="contact-link"
                href={link.href}
                {...(link.type !== 'email' && link.type !== 'phone'
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="contact-type">{link.type}</span>
                <span className="contact-label">{link.label}</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
