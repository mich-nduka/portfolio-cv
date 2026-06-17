import { useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div className="nav-logo"><span>~/</span>ikenna.onuoha</div>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        &#9776;
      </button>
      <div className={`nav-links${isOpen ? ' open' : ''}`}>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a className="nav-cv" href="/Ikenna_Onuoha_CV.pdf" download>
          CV ↓
        </a>
      </div>
    </nav>
  )
}
