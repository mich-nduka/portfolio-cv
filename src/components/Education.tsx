import { EDUCATION, CERTIFICATIONS } from '../data'
import './Education.css'

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">credentials</div>
      <h2 className="section-title">Education &amp; certifications</h2>
      <div className="edu-cert-grid">
        <div className="edu-block">
          <div className="edu-degree">{EDUCATION.degree}</div>
          <div className="edu-school">{EDUCATION.school}</div>
          <div className="edu-year">{EDUCATION.year}</div>
        </div>
        <div className="cert-list">
          {CERTIFICATIONS.map((c) => (
            <div className="cert-item" key={c.name}>
              <span className="cert-name">{c.name}</span>
              <span className="cert-meta">{c.issuer} &middot; {c.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
