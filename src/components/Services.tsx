import { useReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    num: '01',
    title: 'High-Performance Websites',
    tags: ['Next.js', 'TypeScript', 'CMS'],
    desc: 'Bespoke marketing sites and corporate platforms engineered for Core Web Vitals perfection and uncompromising brand authority.',
  },
  {
    num: '02',
    title: 'Landing Page Systems',
    tags: ['A/B Testing', 'Analytics', 'CRO'],
    desc: 'Conversion-engineered landing pages that integrate A/B testing, heatmaps, and analytics pipelines to maximise your ROI.',
  },
  {
    num: '03',
    title: 'Web Application Development',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    desc: 'Full-stack SaaS products and internal tools with multi-tenant architecture, real-time features, and rock-solid authentication.',
  },
  {
    num: '04',
    title: 'Ecommerce Engineering',
    tags: ['Shopify', 'Next.js Commerce', 'Stripe'],
    desc: 'Custom headless ecommerce storefronts with sub-second page loads, seamless payment flows, and intelligent recommendation engines.',
  },
  {
    num: '05',
    title: 'Internal Tooling',
    tags: ['Dashboards', 'Automation', 'Integrations'],
    desc: 'Custom operations dashboards, workflow automation systems, and internal APIs that eliminate manual processes and scale your team.',
  },
  {
    num: '06',
    title: 'AI-Powered Interfaces',
    tags: ['OpenAI', 'LangChain', 'RAG'],
    desc: 'Embedding LLMs into your product with custom RAG pipelines, AI chat interfaces, and intelligent automation tailored to your business.',
  },
]

export default function Services() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section-alt" id="services" ref={ref}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end', marginBottom: '4rem' }}>
          <div>
            <div className="eyebrow reveal">
              <span className="lbl">02 / Services</span>
            </div>
            <h2 className="d-md reveal d1">
              What we<br />
              <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>architect.</em>
            </h2>
          </div>
          <p className="b-lg reveal d2">
            Six specialised service pillars, each with a precise methodology and a
            single-minded focus on measurable business outcomes.
          </p>
        </div>

        <div className="svc-list">
          {SERVICES.map((svc, i) => (
            <div key={svc.num} className={`svc-row reveal${i > 0 ? ` d${Math.min(i, 3)}` : ''}`}>
              <div className="svc-num">{svc.num}</div>
              <div className="svc-body">
                <div className="svc-head">
                  <div className="svc-title">{svc.title}</div>
                  <div className="svc-tags">
                    {svc.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <p className="svc-desc">{svc.desc}</p>
              </div>
              <div className="svc-arr material-icons-round">arrow_forward</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
