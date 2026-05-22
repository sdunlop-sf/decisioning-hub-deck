import FadeIn from '../components/FadeIn'
import './SlideArchitecture.css'

const layers = [
  { label: 'Learning Loop', desc: 'Outcome tracking, model retraining signals, adaptive weights', color: 'var(--violet)' },
  { label: 'Value Function', desc: 'Budget arbitration, priority scoring, escalation multipliers', color: 'var(--blue-light)' },
  { label: 'Action Space', desc: 'Catalogue of actions, eligibility rules, exhaustion windows, composition', color: 'var(--teal)' },
  { label: 'Relationship State', desc: 'Per-contact memory: interaction history, category signals, suppression', color: 'var(--gold)' },
]

export default function SlideArchitecture() {
  return (
    <div className="slide-arch">
      <FadeIn delay={0.1}>
        <span className="kicker">Architecture</span>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2>Memory-First: Four Primitives</h2>
      </FadeIn>
      <div className="arch-stack">
        {layers.map((l, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.12}>
            <div className="arch-layer" style={{ '--layer-color': l.color }}>
              <div className="layer-bar" />
              <div className="layer-content">
                <h3>{l.label}</h3>
                <p>{l.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.8}>
        <p className="arch-note">
          Each primitive is independently addressable via REST API and Apex Invocable Methods.
          Pluggable reasoning (LLM adjudication) sits alongside — never in — the hot path.
        </p>
      </FadeIn>
    </div>
  )
}
