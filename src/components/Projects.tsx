import type { MouseEvent } from 'react'
import { PROJECTS } from '../data'
import Section from './Section'
import './Projects.css'

// Feeds the cursor position to CSS for the spotlight hover effect.
function trackPointer(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Projects() {
  return (
    <Section id="projects" index="02" label="selected work" title="Projects">
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <article
            className={`project-card${p.featured ? ' featured' : ''}`}
            key={p.title}
            onMouseMove={trackPointer}
          >
            <div className="proj-head">
              <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="proj-type">{p.type}</span>
              <span className="proj-year">{p.year}</span>
            </div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            <ul className="proj-stack">
              {p.stack.map((s) => (
                <li className="stack-tag" key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
