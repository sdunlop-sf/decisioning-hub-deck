import FadeIn from '../components/FadeIn'
import './SlideTitle.css'

export default function SlideTitle() {
  return (
    <div className="slide-title">
      <FadeIn delay={0.1}>
        <span className="kicker">NBA Decisioning Accelerator</span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h1>Intelligent Decisioning,<br/>Natively on Platform</h1>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="subtitle">
          A production-grade next-best-action engine that embeds directly into your
          Salesforce org. No middleware. No external dependencies. Deterministic
          arbitration with optional AI reasoning.
        </p>
      </FadeIn>
      <FadeIn delay={0.5}>
        <div className="stats-bar">
          <div className="stat">
            <span className="num">19</span>
            <span className="label">Releases</span>
          </div>
          <div className="stat">
            <span className="num">100k+</span>
            <span className="label">Contacts / day</span>
          </div>
          <div className="stat">
            <span className="num">560</span>
            <span className="label">Components</span>
          </div>
          <div className="stat">
            <span className="num">&lt;200ms</span>
            <span className="label">Arbitration</span>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
