import type { ReactNode } from 'react'
import './Section.css'

type Props = {
  id: string
  index: string
  label: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, label, title, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-head reveal">
          <div className="section-label">
            <span className="section-index">{index}</span>
            <span className="section-rule" />
            {label}
          </div>
          <h2 className="section-title">{title}</h2>
        </header>
        <div className="reveal">{children}</div>
      </div>
    </section>
  )
}
