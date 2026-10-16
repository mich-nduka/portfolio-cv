import { EXPERIENCE } from '../data'
import Section from './Section'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" index="03" label="background" title="Experience">
      <ol className="timeline">
        {EXPERIENCE.map((exp) => {
          const current = /present/i.test(exp.period)
          return (
            <li className={`exp-item${current ? ' current' : ''}`} key={exp.role}>
              <div className="exp-year">
                {exp.period.replace('\n', ' ')}
                {current && <span className="exp-now">now</span>}
              </div>
              <div className="exp-body">
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
