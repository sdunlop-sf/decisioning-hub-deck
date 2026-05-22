import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import './NavBar.css'

export default function NavBar({ current, total, onGo }) {
  return (
    <nav className="navbar">
      <button className="nav-btn" onClick={() => onGo(current - 1)} disabled={current === 0}>
        <CaretLeft size={16} weight="bold" />
      </button>
      <div className="nav-dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`nav-dot ${i === current ? 'active' : ''}`}
            onClick={() => onGo(i)}
          />
        ))}
      </div>
      <span className="nav-counter">{current + 1} / {total}</span>
      <button className="nav-btn" onClick={() => onGo(current + 1)} disabled={current === total - 1}>
        <CaretRight size={16} weight="bold" />
      </button>
    </nav>
  )
}
