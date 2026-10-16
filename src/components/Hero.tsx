import { useEffect, useState } from 'react'
import { ROLES } from '../data'
import { prefersReducedMotion } from '../hooks'
import Console from './Console'
import './Hero.css'

const STATS = [
  { value: '3+', label: 'years shipping' },
  { value: '30+', label: 'students taught' },
  { value: 'Abuja', label: 'based in' },
]

export default function Hero() {
  const [displayed, setDisplayed] = useState(() => (prefersReducedMotion() ? ROLES[0] : ''))

  useEffect(() => {
    if (prefersReducedMotion()) return

    let ri = 0
    let ci = 0
    let deleting = false
    let wait = 0
    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      if (wait > 0) {
        wait--
        timeout = setTimeout(tick, 80)
        return
      }
      const r = ROLES[ri]
      if (!deleting) {
        ci++
        setDisplayed(r.slice(0, ci))
        if (ci === r.length) {
          deleting = true
          wait = 28
        }
        timeout = setTimeout(tick, deleting ? 40 : 90)
      } else {
        ci--
        setDisplayed(r.slice(0, ci))
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % ROLES.length
          wait = 6
        }
        timeout = setTimeout(tick, 50)
      }
    }
    timeout = setTimeout(tick, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="live-dot" />
            Available for new opportunities
          </div>
          <h1 className="hero-name">
            Ikenna Onuoha<span className="hero-dot">.</span>
          </h1>
          <div className="hero-role" aria-live="off">
            <span className="hero-prompt">&gt;</span>
            <span className="sr-only">{ROLES.join(', ')}</span>
            <span aria-hidden="true">{displayed}<span className="cursor" /></span>
          </div>
          <p className="hero-desc">
            I build <strong>web and mobile products</strong> end to end — from Supabase schemas to React Native
            screens to deployed APIs. Shipping for businesses and NGOs across Nigeria, with a backend lean and a
            growing focus on <strong>AI/ML integration and systems engineering</strong>.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View projects <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#contact">Get in touch</a>
          </div>
          <dl className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Console />
      </div>
    </header>
  )
}
