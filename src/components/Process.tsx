import { useReveal } from '../hooks/useReveal'

const STEPS = [
  {
    num: '01',
    icon: 'search',
    title: 'Discovery & Definition',
    desc: 'A rigorous technical audit of your existing systems, competitive landscape analysis, and a precise definition of success metrics before a single line of code is written.',
    tags: ['Requirements Analysis', 'Technical Audit', 'Stakeholder Interviews'],
  },
  {
    num: '02',
    icon: 'architecture',
    title: 'Architect & Blueprint',
    desc: "A detailed technical specification, system architecture diagram, and UI/UX wireframes. You sign off on the blueprint before we build. No surprises.",
    tags: ['System Architecture', 'UI/UX Wireframes', 'Tech Stack Selection'],
  },
  {
    num: '03',
    icon: 'code',
    title: 'Forge & Engineer',
    desc: 'Iterative development cycles with weekly demos. Transparent progress on a shared project board with clear milestones and deliverables you can track in real time.',
    tags: ['Agile Sprints', 'Code Reviews', 'Weekly Demos'],
  },
  {
    num: '04',
    icon: 'rocket_launch',
    title: 'Optimise & Launch',
    desc: 'Comprehensive QA, performance load testing, and a zero-downtime deployment strategy. We monitor closely for the first 30 days post-launch to ensure stability.',
    tags: ['Performance Testing', 'QA Audit', 'Zero-downtime Deploy'],
  },
]

export default function Process() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section-alt" id="process" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal">
          <span className="lbl">04 / Process</span>
        </div>
        <div className="section-header section-header-mb">
          <h2 className="d-md reveal d1">
            The Four-Phase<br />
            <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>Methodology.</em>
          </h2>
          <p className="b-lg reveal d2">
            A structured, transparent process that eliminates ambiguity and delivers
            predictable, exceptional results every single time.
          </p>
        </div>

        <div className="proc-grid">
          {STEPS.map((step, i) => (
            <div key={step.num} className={`proc-card reveal${i > 0 ? ` d${i}` : ''}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div className="proc-num">{step.num}</div>
                <div className="material-icons-round" style={{ color: 'var(--primary)', fontSize: '1.375rem' }}>{step.icon}</div>
              </div>
              <div className="proc-title">{step.title}</div>
              <p className="b-lg" style={{ fontSize: '.9rem', marginBottom: '1.25rem' }}>{step.desc}</p>
              <div className="stack-tags">
                {step.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
