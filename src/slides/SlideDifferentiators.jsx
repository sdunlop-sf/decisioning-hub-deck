import { CheckCircle, XCircle, MinusCircle } from '@phosphor-icons/react'
import FadeIn from '../components/FadeIn'
import './SlideDifferentiators.css'

const rows = [
  { feature: 'Native Platform Execution', da: 'full', pega: 'none', mcp: 'none' },
  { feature: 'Zero Middleware', da: 'full', pega: 'none', mcp: 'partial' },
  { feature: 'Deterministic Arbitration', da: 'full', pega: 'full', mcp: 'none' },
  { feature: 'LLM-Augmented Reasoning', da: 'full', pega: 'partial', mcp: 'full' },
  { feature: 'Real-Time + Batch', da: 'full', pega: 'full', mcp: 'partial' },
  { feature: 'Budget Management', da: 'full', pega: 'full', mcp: 'none' },
  { feature: 'Adaptive Learning', da: 'full', pega: 'full', mcp: 'partial' },
  { feature: 'Unlocked Package Install', da: 'full', pega: 'none', mcp: 'none' },
  { feature: 'Agentforce Native', da: 'full', pega: 'none', mcp: 'partial' },
  { feature: 'No Data Movement', da: 'full', pega: 'none', mcp: 'partial' },
]

function StatusIcon({ status }) {
  if (status === 'full') return <CheckCircle size={18} weight="fill" className="status-yes" />
  if (status === 'partial') return <MinusCircle size={18} weight="fill" className="status-partial" />
  return <XCircle size={18} weight="fill" className="status-no" />
}

export default function SlideDifferentiators() {
  return (
    <div className="slide-diff">
      <FadeIn delay={0.1}>
        <span className="kicker">Differentiation</span>
      </FadeIn>
      <FadeIn delay={0.15}>
        <h2>Platform-native vs. the alternatives</h2>
      </FadeIn>
      <FadeIn delay={0.25}>
        <div className="diff-table-wrap">
          <table className="diff-table">
            <thead>
              <tr>
                <th>Capability</th>
                <th>Decisioning Hub</th>
                <th>External Engine</th>
                <th>MCP / Agent-Only</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.feature}</td>
                  <td><StatusIcon status={r.da} /></td>
                  <td><StatusIcon status={r.pega} /></td>
                  <td><StatusIcon status={r.mcp} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </div>
  )
}
