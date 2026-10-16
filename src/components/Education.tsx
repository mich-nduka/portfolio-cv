import { EDUCATION, CERTIFICATIONS } from '../data'
import Section from './Section'
import './Education.css'

export default function Education() {
  return (
    <Section id="education" index="04" label="credentials" title="Education & certifications">
      <div className="edu-cert-grid">
        <div className="edu-card">
          <div className="card-label">degree</div>
          <h3 className="edu-degree">{EDUCATION.degree}</h3>
          <div className="edu-school">{EDUCATION.school}</div>
          <div className="edu-year">{EDUCATION.year}</div>
        </div>
        <div className="edu-card">
          <div className="card-label">certifications</div>
          <ul className="cert-list">
            {CERTIFICATIONS.map((c) => (
              <li className="cert-item" key={c.name}>
                <span className="cert-name">{c.name}</span>
                <span className="cert-meta">{c.issuer} · {c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
