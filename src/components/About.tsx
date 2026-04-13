import { useReveal } from '../hooks/useReveal'

const VALUES = [
  {
    icon: 'architecture',
    title: 'Structural Integrity',
    desc: 'Most systems fail because they are built on sand. I build on foundations of clean code and scalable patterns that last for years, not months.',
  },
  {
    icon: 'monitoring',
    title: 'Performance Logic',
    desc: 'Milliseconds matter to your bottom line. Every interaction I design is optimized for speed, ensuring your users never experience friction.',
  },
  {
    icon: 'business_center',
    title: 'Business First',
    desc: "I don't just write code; I solve business problems. My work is aligned with your growth strategy and operational efficiency.",
  },
]

const CAPS = [
  { icon: 'layers',         title: 'Full-Stack Architecture',  desc: 'End-to-end engineering from database schema to front-end interaction layers.', tags: ['React', 'Next.js', 'Node.js', 'AWS'] },
  { icon: 'palette',        title: 'Premium UX/UI Design',     desc: 'Designing digital interfaces that command authority and provide seamless user journeys.', tags: [] },
  { icon: 'lightbulb',      title: 'Technical Strategy',       desc: 'Fractional CTO services for scaling teams — architecture decisions and technology roadmapping.', tags: [] },
  { icon: 'speed',          title: 'Performance Audit',        desc: 'Removing bottlenecks for enterprise apps. Core Web Vitals optimization and database query tuning.', tags: [] },
]

export default function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="eyebrow reveal">
              <span className="lbl">The Architect</span>
            </div>
            <h2 className="d-md reveal d1" style={{ marginBottom: '1.5rem' }}>
              Precision in the<br />
              <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>Granular.</em>
            </h2>
            <p className="b-lg reveal d2">
              I build architectural-grade digital solutions for businesses that demand
              more than just "functional." I bridge the gap between complex engineering
              and aesthetic sophistication.
            </p>

            <div className="val-list">
              {VALUES.map((v, i) => (
                <div key={v.title} className={`val-item reveal d${i + 1}`}>
                  <div className="val-icon">
                    <span className="material-icons-round">{v.icon}</span>
                  </div>
                  <div>
                    <div className="t-lg" style={{ marginBottom: '.375rem' }}>{v.title}</div>
                    <p className="b-lg" style={{ fontSize: '.9rem' }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait — hidden on mobile via CSS .about-vis */}
          <div className="about-vis" style={{ position: 'relative' }}>
            <div className="portrait">
              <div className="portrait-label">DEV</div>
            </div>
            <div className="years-badge">
              <div className="y-num">10+</div>
              <div className="y-txt">Years Engineering<br />Bespoke Infrastructure</div>
            </div>
            <div className="arch-chip">THE ARCHITECT</div>
          </div>
        </div>

        {/* Core capabilities */}
        <div style={{ marginTop: '5rem' }}>
          <h3 className="hl-md reveal" style={{ marginBottom: '2.5rem' }}>Core Capabilities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
            {CAPS.map((c, i) => (
              <div key={c.title} className={`exp-card reveal${i > 0 ? ` d${i}` : ''}`}>
                <div className="exp-icon material-icons-round">{c.icon}</div>
                <div className="exp-title">{c.title}</div>
                <p className="b-lg" style={{ fontSize: '.9rem' }}>{c.desc}</p>
                {c.tags.length > 0 && (
                  <div className="stack-tags">
                    {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
