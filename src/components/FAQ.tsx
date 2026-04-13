import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines depend on scope. A high-performance website typically takes 3–4 weeks. A complex web application or SaaS product ranges from 8–16 weeks. We always provide a detailed timeline in our project proposal after the discovery phase.',
  },
  {
    q: 'Do you offer maintenance plans?',
    a: "Yes. We offer tiered retainer packages for ongoing support, performance monitoring, feature development, and security audits. We don't disappear after launch — we're invested in your long-term success.",
  },
  {
    q: 'What is your core tech stack?',
    a: 'Our primary stack is TypeScript, Next.js, Node.js, and PostgreSQL deployed on Vercel or AWS. We also work with React, Tailwind CSS, Prisma, and various AI/ML frameworks. The stack is always chosen to best fit your specific requirements.',
  },
  {
    q: 'Do you work with startups?',
    a: "Absolutely. Some of our most impactful work has been with ambitious early-stage startups. We understand the need for speed, scalability, and lean execution. We can act as your entire technical team or augment an existing one.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section-alt" ref={ref}>
      <div className="container">
        <div className="faq-grid">
          <div>
            <div className="eyebrow reveal">
              <span className="lbl">Common Enquiries</span>
            </div>
            <h2 className="d-md reveal d1">
              Everything<br />you need to<br />
              <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>know.</em>
            </h2>
          </div>

          <div className="faq-list reveal">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button
                  className="faq-q"
                  type="button"
                  onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
                  aria-expanded={openIndex === i}
                >
                  {faq.q}
                  <span className="faq-ico material-icons-round">
                    {openIndex === i ? 'remove' : 'add'}
                  </span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: openIndex === i ? '300px' : undefined }}
                >
                  <div className="faq-a-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
