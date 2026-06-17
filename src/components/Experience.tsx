import { EXPERIENCE } from '../data'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">background</div>
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {EXPERIENCE.map((exp) => (
          <div className="exp-item" key={exp.role}>
            <div className="exp-year">{exp.period.split('\n').map((line, i) => (
              <span key={i}>{line}{i < exp.period.split('\n').length - 1 && <br />}</span>
            ))}</div>
            <div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">{exp.company}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
