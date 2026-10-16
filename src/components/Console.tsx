import { useEffect, useState } from 'react'
import { COMMANDS } from '../data'
import { prefersReducedMotion } from '../hooks'
import './Console.css'

export default function Console() {
  const [cmdIndex, setCmdIndex] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = setInterval(() => {
      setCmdIndex((i) => (i + 1) % COMMANDS.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="console" role="img" aria-label="Terminal summary: software developer, web and mobile. Stack: Node, Bun, TypeScript, React Native, Expo, Next.js, TanStack, Supabase, Firebase.">
      <div className="console-bar">
        <div className="dots" aria-hidden="true"><i /><i /><i /></div>
        <span className="console-title">ikenna@dev: ~/portfolio</span>
        <span className="console-branch">main</span>
      </div>
      <div className="console-body" aria-hidden="true">
        <div><span className="c-prompt">❯</span> <span className="c-cmd">whoami</span></div>
        <div className="c-out">software-developer · web + mobile</div>

        <div className="gap"><span className="c-prompt">❯</span> <span className="c-cmd">cat</span> <span className="c-arg">stack.json</span></div>
        <div className="c-out">{'{'}</div>
        <div className="c-out">&nbsp;&nbsp;<span className="c-key">"backend"</span>: <span className="c-str">"Node / Bun / TS"</span>,</div>
        <div className="c-out">&nbsp;&nbsp;<span className="c-key">"mobile"</span>: <span className="c-str">"React Native / Expo"</span>,</div>
        <div className="c-out">&nbsp;&nbsp;<span className="c-key">"web"</span>: <span className="c-str">"Next.js + TanStack"</span>,</div>
        <div className="c-out">&nbsp;&nbsp;<span className="c-key">"db"</span>: <span className="c-str">"Supabase + Firebase"</span></div>
        <div className="c-out">{'}'}</div>

        <div className="gap"><span className="c-prompt">❯</span> <span className="c-cmd">git</span> log --oneline -3</div>
        <div className="c-out"><span className="c-hash">f2a91c0</span> feat: google maps provider search</div>
        <div className="c-out"><span className="c-hash">b8e2d44</span> feat: realtime upload + feedback</div>
        <div className="c-out"><span className="c-hash">a9c1f31</span> feat: course assessment platform</div>

        <div className="gap"><span className="c-prompt">❯</span> <span className="c-cmd">{COMMANDS[cmdIndex]}</span><span className="cursor" /></div>
      </div>
    </div>
  )
}
