import { useAbujaTime } from '../hooks'
import './Footer.css'

export default function Footer() {
  const time = useAbujaTime()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Ikenna Onuoha</span>
        <span className="footer-time">
          <span className="live-dot" /> Abuja · {time} WAT
        </span>
        <span>built with React + TypeScript</span>
      </div>
    </footer>
  )
}
