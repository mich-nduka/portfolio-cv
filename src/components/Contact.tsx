import { CONTACT_LINKS } from '../data'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-block">
        <h3>Let's build something.</h3>
        <p>Open to web, mobile, or full-stack opportunities. Based in Abuja, Nigeria.</p>
        <div className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <a
              className="contact-link"
              href={link.href}
              key={link.label}
              {...(link.type !== 'email' && link.type !== 'phone'
                ? { target: '_blank', rel: 'noopener' }
                : {})}
            >
              {link.live && <span className="dot-live" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
