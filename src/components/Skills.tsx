import { SKILLS } from '../data'
import Section from './Section'
import './Skills.css'

export default function Skills() {
  return (
    <Section id="skills" index="01" label="capabilities" title="What I work with">
      <div className="skills-list">
        {SKILLS.map((group) => (
          <div className="skill-row" key={group.name}>
            <div className="skill-group-name">{group.name}</div>
            <ul className="skill-tags">
              {group.tags.map((tag) => (
                <li className={`tag${tag.highlight ? ' hi' : ''}`} key={tag.label}>
                  {tag.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="skills-legend">
        <span className="legend-dot" /> primary stack
      </p>
    </Section>
  )
}
