import { PROJECTS } from '../data'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">selected work</div>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className={`project-card${p.featured ? ' featured' : ''}`} key={p.title}>
            <div className="proj-type">{p.type} <span className="proj-status">{p.year}</span></div>
            <div className="proj-title">{p.title}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span className="stack-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
