import {
  Brain, Lightning, Scales, ShieldCheck, Repeat, Users,
  ChartLine, Bell, Gear, Package, Globe, Robot
} from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideFeatures.css'

const features = [
  { icon: Brain, label: 'Deterministic Arbitration', desc: 'Priority + budget + suppression in <200ms' },
  { icon: Robot, label: 'LLM Adjudication', desc: 'Tier-2 reasoning for conflicting signals' },
  { icon: Scales, label: 'Budget Management', desc: 'Per-module budgets with reservation + reconciliation' },
  { icon: Repeat, label: 'Multi-Step Actions', desc: 'Exhaustion windows, escalation, fallback promotion' },
  { icon: ShieldCheck, label: 'Contact Policy', desc: 'Frequency caps, channel suppression, cooldowns' },
  { icon: Users, label: 'Segment Dispatch', desc: 'Data Cloud segments trigger bulk pre-rank' },
  { icon: ChartLine, label: 'Adaptive Weights', desc: 'Win-rate feedback auto-tunes action priority' },
  { icon: Bell, label: 'Agent Signals', desc: 'Platform Events surface decisions to Agentforce' },
  { icon: Lightning, label: 'Real-Time + Batch', desc: 'Single-contact API + batch processing paths' },
  { icon: Globe, label: 'REST API', desc: 'Full headless operation for external consumers' },
  { icon: Gear, label: 'Simulation Mode', desc: 'Test arbitration without writing decisions' },
  { icon: Package, label: 'Unlocked Package', desc: 'Install + configure in any org, no code required' },
]

export default function SlideFeatures() {
  return (
    <div className="slide-features">
      <FadeIn delay={0.1}>
        <span className="kicker">Feature Inventory</span>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2>Everything ships in the package</h2>
      </FadeIn>
      <div className="feature-grid">
        {features.map((f, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.04}>
            <div className="feature-card">
              <f.icon size={22} weight="duotone" className="feature-icon" />
              <h3>{f.label}</h3>
              <p>{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
