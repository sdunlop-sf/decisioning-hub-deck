import { Rocket, GithubLogo, Package } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideCTA.css'

export default function SlideCTA() {
  return (
    <div className="slide-cta">
      <FadeIn delay={0.1}>
        <span className="kicker">Get Started</span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2>Ship intelligent decisioning<br/>in your org today</h2>
      </FadeIn>
      <FadeIn delay={0.35}>
        <p className="cta-subtitle">
          Unlocked package. Full source. Install in minutes.<br/>
          Configure your first module and run arbitration the same day.
        </p>
      </FadeIn>
      <FadeIn delay={0.5}>
        <div className="cta-actions">
          <div className="cta-card">
            <Package size={32} weight="duotone" />
            <h3>Install Package</h3>
            <p>Unlocked package deploys all metadata, Apex, and Flows to your org</p>
          </div>
          <div className="cta-card">
            <GithubLogo size={32} weight="duotone" />
            <h3>Full Source Visibility</h3>
            <p>Unlocked package — inspect, extend, and customise any component in your org</p>
          </div>
          <div className="cta-card">
            <Rocket size={32} weight="duotone" />
            <h3>Live Demo</h3>
            <p>See arbitration, adjudication, and agent signals in a working org</p>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.7}>
        <p className="cta-version">v19.0.0 — 560 components — 82 tests passing</p>
      </FadeIn>
    </div>
  )
}
