import { SKILLS } from '../data'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">capabilities</div>
      <h2 className="section-title">What I work with</h2>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div className="skill-group" key={group.name}>
            <div className="skill-group-name">{group.name}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className={`tag${tag.highlight ? ' hi' : ''}`} key={tag.label}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
