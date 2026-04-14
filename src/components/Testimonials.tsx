import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    quote: "Working with Granularity.dev was a paradigm shift. They didn't just build our platform — they architected an entire system that scaled from 200 to 12,000 users in 14 weeks without a single incident. The attention to performance and code quality is genuinely industry-leading.",
    name: 'Marcus Thorne',
    role: 'CTO, Nexus.ai',
    metrics: [{ label: 'User Growth', value: '12,000+' }, { label: 'Incident-free Launch', value: '✓' }],
  },
  {
    quote: "I've worked with 4 separate agencies and 2 in-house teams over the past 5 years. None of them came close to the calibre of work delivered by Granularity. The Vault project came in on time, under budget, and with a 40% conversion rate improvement on day one.",
    name: 'Elena Vance',
    role: 'Founder, Lumina Labs',
    metrics: [{ label: 'Conversion Lift', value: '+40%' }, { label: 'Delivered', value: 'On-time' }],
  },
]

export default function Testimonials() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal">
          <span className="lbl">05 / Testimonials</span>
        </div>
        <h2 className="d-md reveal d1" style={{ marginBottom: '3rem' }}>
          The verdict from<br />
          <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>the field.</em>
        </h2>

        <div className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`test-card reveal${i > 0 ? ' d1' : ''}`}>
              <div className="test-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="material-icons-round" style={{ fontSize: '1rem', color: '#fbbf24' }}>star</span>
                ))}
              </div>
              <p className="test-quote">"{t.quote}"</p>
              <div className="test-metrics">
                {t.metrics.map(m => (
                  <div key={m.label} className="test-stat">
                    <div className="metric-val" style={{ fontSize: '.875rem', color: 'var(--primary)' }}>{m.value}</div>
                    <div className="metric-lbl">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="test-author">
                <div className="test-avatar">{t.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <div className="t-lg" style={{ fontSize: '.9375rem' }}>{t.name}</div>
                  <div className="lbl">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
