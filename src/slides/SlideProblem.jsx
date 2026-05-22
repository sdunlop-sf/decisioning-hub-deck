import { Lightning, Plugs, Database, ShieldWarning } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideProblem.css'

const problems = [
  { icon: Plugs, title: 'Middleware Tax', desc: 'External decisioning engines add latency, cost, and integration fragility.' },
  { icon: Database, title: 'Data Duplication', desc: 'Customer data copied across systems loses freshness and governance.' },
  { icon: ShieldWarning, title: 'Opaque Logic', desc: 'Black-box ML models lack auditability and deterministic override capability.' },
  { icon: Lightning, title: 'Batch-Only', desc: 'Most NBA systems run overnight — stale by the time an agent picks up the phone.' },
]

export default function SlideProblem() {
  return (
    <div className="slide-problem">
      <FadeIn delay={0.1}>
        <span className="kicker">The Problem</span>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2>Why traditional NBA breaks<br/>in an agentic, headless world</h2>
      </FadeIn>
      <div className="problem-grid">
        {problems.map((p, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.1}>
            <div className="problem-card">
              <div className="problem-icon">
                <p.icon size={28} weight="duotone" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.7}>
        <p className="solution-line">
          The Decisioning Hub solves all four — natively, on platform, with zero external dependencies.
        </p>
      </FadeIn>
    </div>
  )
}
