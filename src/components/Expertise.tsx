import { useReveal } from '../hooks/useReveal'

const CARDS = [
  {
    icon: 'developer_mode',
    title: 'Web Apps & SaaS',
    desc: 'Scalable, cloud-native applications built with React, Next.js, and high-performance backends that handle millions of requests.',
    tags: ['React', 'Next.js', 'TypeScript'],
    delay: '',
  },
  {
    icon: 'auto_awesome',
    title: 'AI Integration',
    desc: 'Injecting LLMs and machine learning into existing workflows for hyper-efficiency, slashing operational overhead dramatically.',
    tags: ['OpenAI', 'LangChain', 'Python'],
    delay: ' d1',
  },
  {
    icon: 'architecture',
    title: 'UI/UX Design',
    desc: 'Editorial-grade design systems that prioritize user psychology and brand authority. No templates — only bespoke architecture.',
    tags: ['Figma', 'Framer', 'Design Systems'],
    delay: ' d2',
  },
]

const STACK = ['TypeScript', 'Next.js', 'PostgreSQL', 'Vercel', 'Tailwind CSS', 'AWS', 'Node.js', 'Docker']

export default function Expertise() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="eyebrow reveal">
          <span className="lbl">01 / Expertise</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end' }}>
          <h2 className="d-md reveal d1">
            Expertise carved with<br />
            <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>Granularity.</em>
          </h2>
          <p className="b-lg reveal d2">
            We don't just build features; we build competitive advantages through
            technical excellence.
          </p>
        </div>

        <div className="exp-grid">
          {CARDS.map(card => (
            <div key={card.title} className={`exp-card reveal${card.delay}`}>
              <div className="exp-icon material-icons-round">{card.icon}</div>
              <div className="exp-title">{card.title}</div>
              <p className="b-lg" style={{ fontSize: '.9375rem' }}>{card.desc}</p>
              <div className="stack-tags">
                {card.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="stack-banner reveal">
          <div>
            <div className="lbl" style={{ color: 'var(--secondary)', marginBottom: '.5rem' }}>
              The Polished Stack
            </div>
            <div className="t-lg">Premium Output</div>
          </div>
          <div className="stack-tags" style={{ marginTop: 0 }}>
            {STACK.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
