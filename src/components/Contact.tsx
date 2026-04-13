import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

interface FormData {
  name: string
  email: string
  interest: string
  message: string
}

const INTERESTS = [
  'High-Performance Website',
  'Landing Page System',
  'Web Application / SaaS',
  'Ecommerce Engineering',
  'Internal Tooling',
  'AI Integration',
  'Other',
]

const METHODS = [
  { icon: 'chat_bubble_outline', label: 'Send a DM', detail: '@granularity.dev' },
  { icon: 'mail_outline', label: 'Email Us', detail: 'hello@granularity.dev' },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useReveal<HTMLElement>()

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          {/* Left column */}
          <div>
            <div className="eyebrow reveal">
              <span className="lbl">06 / Contact</span>
            </div>
            <h2 className="d-md reveal d1">
              Let's build<br />
              <em style={{ fontStyle: 'normal', color: 'var(--primary)' }}>something.</em>
            </h2>
            <p className="b-lg reveal d2" style={{ maxWidth: '28ch' }}>
              Tell me about your project and I'll draft a bespoke technical proposal
              within 48 hours.
            </p>
            <div className="contact-methods reveal d3">
              {METHODS.map(m => (
                <div key={m.label} className="cmethod">
                  <div className="cmethod-icon material-icons-round">{m.icon}</div>
                  <div>
                    <div className="t-lg" style={{ fontSize: '.9375rem' }}>{m.label}</div>
                    <div className="lbl">{m.detail}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="studio-info reveal d4">
              <div className="lbl" style={{ marginBottom: '.5rem' }}>Studio Location</div>
              <div className="t-lg">Zürich, Switzerland</div>
              <div className="b-lg" style={{ fontSize: '.875rem', marginTop: '.25rem' }}>
                Available globally via remote engagements
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal">
            {submitted ? (
              <div className="form-success">
                <span className="material-icons-round" style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>check_circle</span>
                <div className="t-lg" style={{ marginTop: '1rem' }}>Message received.</div>
                <p className="b-lg" style={{ fontSize: '.9375rem', marginTop: '.5rem' }}>
                  I'll review your project requirements and respond with a technical
                  proposal within 48 hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="lbl">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="lbl">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="interest" className="lbl">I'm interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-input"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service…</option>
                    {INTERESTS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="lbl">Tell me about your project</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Describe your project, goals, and ideal timeline…"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-p" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '.875rem 2rem' }}>
                  <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>send</span>
                  Send Proposal Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
