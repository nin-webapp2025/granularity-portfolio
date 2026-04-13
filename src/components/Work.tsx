import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const FILTERS = ['All Projects', 'SaaS & Web Apps', 'Ecommerce', 'AI Interfaces', 'Internal Tools']

interface Project {
  title: string
  category: string
  desc: string
  tags: string[]
  metrics: { label: string; value: string }[]
  wide?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'Nexus Platform',
    category: 'SaaS & Web Apps',
    desc: 'Enterprise multi-tenant SaaS platform for operational intelligence. Real-time analytics, custom dashboards, and API-first architecture.',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    metrics: [{ label: 'Active Users', value: '12,000+' }, { label: 'Uptime', value: '99.97%' }],
  },
  {
    title: 'Vault',
    category: 'Ecommerce',
    desc: 'Headless luxury ecommerce storefront with sub-200ms page loads and a bespoke product configurator driving 40% uplift in conversions.',
    tags: ['Next.js Commerce', 'Shopify', 'Stripe'],
    metrics: [{ label: 'Conversion Lift', value: '+40%' }, { label: 'LCP', value: '0.4s' }],
  },
  {
    title: 'Vanguard',
    category: 'AI Interfaces',
    desc: 'AI-powered financial research assistant leveraging GPT-4 and a custom RAG pipeline over 10+ million proprietary documents.',
    tags: ['OpenAI', 'LangChain', 'Python', 'Pinecone'],
    metrics: [{ label: 'Query Accuracy', value: '94%' }, { label: 'Docs Indexed', value: '10M+' }],
  },
  {
    title: 'Synthetix',
    category: 'Internal Tools',
    desc: 'Automated content pipeline and publishing infrastructure for a digital media company, reducing production time by 6 hours daily.',
    tags: ['Node.js', 'AWS Lambda', 'PostgreSQL'],
    metrics: [{ label: 'Time Saved', value: '6h / day' }, { label: 'Throughput', value: '3× faster' }],
  },
  {
    title: 'Precision ERP',
    category: 'Internal Tools',
    desc: 'Custom ERP system for a precision manufacturing company replacing legacy spreadsheet workflows across 3 departments with a real-time operations hub.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metrics: [{ label: 'Departments', value: '3' }, { label: 'Manual Work', value: '−70%' }],
    wide: true,
  },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const ref = useReveal<HTMLElement>()

  const visible = activeFilter === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section className="section" id="work" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal">
          <span className="lbl">03 / Selected Work</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <h2 className="d-md reveal d1" style={{ margin: 0 }}>
            Proof of<br />
            <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>precision.</em>
          </h2>
          <div className="work-filters reveal d2">
            {FILTERS.map(f => (
              <button
                key={f}
                type="button"
                className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="work-grid">
          {visible.map((p, i) => (
            <div
              key={p.title}
              className={`work-card reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}${p.wide ? ' wide' : ''}`}
            >
              <div className="work-img">
                <span className="work-cat lbl">{p.category}</span>
              </div>
              <div className="work-body">
                <div className="work-title">{p.title}</div>
                <p className="work-desc">{p.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div className="stack-tags" style={{ marginTop: 0 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {p.metrics.map(m => (
                      <div key={m.label}>
                        <div className="metric-val" style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>{m.value}</div>
                        <div className="metric-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
