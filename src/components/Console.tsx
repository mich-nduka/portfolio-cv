import { useEffect, useState } from 'react'
import { COMMANDS } from '../data'
import './Console.css'

export default function Console() {
  const [cmdIndex, setCmdIndex] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const id = setInterval(() => {
      setCmdIndex((i) => (i + 1) % COMMANDS.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="console">
      <div className="console-bar">
        <div className="dot dot-r" />
        <div className="dot dot-y" />
        <div className="dot dot-g" />
      </div>
      <div><span className="c-dim">$</span> <span className="c-green">whoami</span></div>
      <div className="c-dim">&rarr; software-developer &middot; web + mobile</div>
      <div style={{ marginTop: 6 }}><span className="c-dim">$</span> <span className="c-green">cat</span> <span className="c-purple">stack.json</span></div>
      <div className="c-dim">&rarr; <span className="c-orange">{'{'}</span> backend: <span className="c-string">"Node/Bun/TS"</span>, mobile: <span className="c-string">"React Native/Expo"</span>,</div>
      <div className="c-dim">&nbsp;&nbsp;web: <span className="c-string">"Next.js+TanStack"</span>, db: <span className="c-string">"Supabase+Firebase"</span> <span className="c-orange">{'}'}</span></div>
      <div style={{ marginTop: 6 }}><span className="c-dim">$</span> <span className="c-green">git</span> log --oneline -3</div>
      <div className="c-dim">&rarr; <span className="c-purple">f2a91c0</span> feat: google maps service-provider search</div>
      <div className="c-dim">&rarr; <span className="c-purple">b8e2d44</span> feat: realtime upload + feedback pipeline</div>
      <div className="c-dim">&rarr; <span className="c-purple">a9c1f31</span> feat: course assessment platform w/ live feedback</div>
      <div style={{ marginTop: 6 }}><span className="c-dim">$</span> <span className="c-green">{COMMANDS[cmdIndex]}</span><span className="cursor" /></div>
    </div>
  )
}
