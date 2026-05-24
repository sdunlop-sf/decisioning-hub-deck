import { Storefront, EnvelopeSimple, PhoneCall, Robot } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideOfferResolution.css'

const columns = [
  {
    label: 'Marketing Channel',
    labelColor: '#6366f1',
    title: 'Intent only',
    icon: EnvelopeSimple,
    items: [
      'DH outputs: action + channel + timing',
      'SP/RTOM handles variant selection and offer rendering',
      'Treatment_Template blank — downstream owns content',
    ],
    pill: 'SP + RTOM serves',
    pillBg: 'rgba(99, 102, 241, 0.1)',
    pillColor: '#6366f1',
    pillBorder: 'rgba(99, 102, 241, 0.25)',
  },
  {
    label: 'Service Channel',
    labelColor: '#f59e0b',
    title: 'Intent + treatment',
    icon: PhoneCall,
    items: [
      'DH outputs: action + call brief or task description',
      'Treatment_Template holds the content',
      'No downstream presentation layer exists',
    ],
    pill: 'Self-contained',
    pillBg: 'rgba(245, 158, 11, 0.1)',
    pillColor: '#f59e0b',
    pillBorder: 'rgba(245, 158, 11, 0.25)',
  },
  {
    label: 'A2A / Buyer Agent',
    labelColor: '#06b6d4',
    title: 'Full structured offer',
    icon: Robot,
    items: [
      'Full structured offer in response payload',
      'RTOMResolver hydrates: price, terms, validity, margin floor',
      'Governance: don\'t bid below margin',
      'Attribution: did the agent select us?',
    ],
    pill: 'Agentic Web',
    pillBg: 'rgba(6, 182, 212, 0.1)',
    pillColor: '#06b6d4',
    pillBorder: 'rgba(6, 182, 212, 0.25)',
  },
]

export default function SlideOfferResolution() {
  return (
    <div className="slide-offer">
      <FadeIn delay={0.1}>
        <span className="kicker">RTOM Integration</span>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2>Offer Resolution — from action to structured payload</h2>
      </FadeIn>
      <div className="offer-grid">
        {columns.map((col, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.1}>
            <div className="offer-card">
              <div className="offer-card-label" style={{ color: col.labelColor }}>
                <col.icon size={16} weight="duotone" style={{ marginRight: 6, verticalAlign: 'middle' }} />
                {col.label}
              </div>
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <span
                className="offer-pill"
                style={{
                  background: col.pillBg,
                  color: col.pillColor,
                  border: `1px solid ${col.pillBorder}`,
                }}
              >
                {col.pill}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.6}>
        <div className="offer-callout">
          <p>
            <strong>The engine doesn't choose between being an action engine or an offer engine.</strong> It resolves at the depth the endpoint requires. Human channels get intent. Service channels get a brief. Buyer agents get a structured bid.
          </p>
        </div>
      </FadeIn>
    </div>
  )
}
