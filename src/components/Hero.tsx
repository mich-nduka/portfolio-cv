import { useEffect, useRef, useState } from 'react'
import { ROLES } from '../data'
import Console from './Console'
import './Hero.css'

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export default function Hero() {
  const [displayed, setDisplayed] = useState(prefersReduced ? ROLES[0] : '')
  const roleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReduced) return

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
    <div className="hero">
      <div className="hero-eyebrow">Open to opportunities</div>
      <h1 className="hero-name">Ikenna <span className="accent">Onuoha.</span></h1>
      <div className="hero-role" ref={roleRef}>
        {displayed}<span className="cursor" />
      </div>
      <p className="hero-desc">
        I build <strong>web and mobile products</strong> end to end — from Supabase schemas to React Native screens
        to deployed APIs. 3+ years shipping for businesses and NGOs across Nigeria, with a backend lean
        and a growing focus on <strong>AI/ML integration and systems engineering</strong>.
      </p>
      <div className="hero-cta">
        <a className="btn btn-primary" href="#projects">View projects</a>
        <a className="btn btn-ghost" href="#contact">Get in touch</a>
      </div>
      <Console />
    </div>
  )
}
