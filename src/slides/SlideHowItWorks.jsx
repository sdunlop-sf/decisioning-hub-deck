import FadeIn from '../components/FadeIn'
import './SlideHowItWorks.css'

const steps = [
  { num: '01', title: 'Trigger', desc: 'Flow, Batch, Agent, or API fires arbitration for a contact' },
  { num: '02', title: 'Evaluate', desc: 'Eligible actions scored by priority, budget, freshness, and suppression rules' },
  { num: '03', title: 'Arbitrate', desc: 'Deterministic winner selection — <200ms. Optional LLM tier-2 adjudication' },
  { num: '04', title: 'Dispatch', desc: 'Winner delivered to channel (Email, SMS, Slack, Agent) with full rationale' },
  { num: '05', title: 'Learn', desc: 'Outcome feeds back into Einstein Studio model + adaptive weight adjustment' },
]

const codeSnippet = `POST /services/apexrest/nba/v1/arbitrate
{
  "contactId": "003xx...",
  "moduleId": "a0Bxx...",
  "channel": "agent_console"
}

// Response
{
  "decisionId": "a1Cxx...",
  "action": "Retention_Offer_25",
  "confidence": 0.87,
  "escalationLevel": 0
}`

export default function SlideHowItWorks() {
  return (
    <div className="slide-how">
      <FadeIn delay={0.1}>
        <span className="kicker">How It Works</span>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2>Five steps. One API call.</h2>
      </FadeIn>
      <div className="how-layout">
        <div className="how-steps">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              <div className="how-step">
                <span className="step-num">{s.num}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.6}>
          <div className="how-code">
            <div className="code-header">
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-dot" />
              <span className="code-title">REST API</span>
            </div>
            <pre><code>{codeSnippet}</code></pre>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
