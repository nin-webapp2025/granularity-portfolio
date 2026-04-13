import { useReveal } from '../hooks/useReveal'

export default function CTABanner() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="cta-banner" ref={ref}>
      <div className="container">
        <div className="cta-inner reveal">
          <div className="cta-badge lbl">Limited availability — Q3 2025</div>
          <h2 className="d-md cta-title">
            Ready to refine your<br />
            <em style={{ fontStyle: 'normal' }}>digital landscape?</em>
          </h2>
          <p className="b-lg cta-sub">
            Drop me a message. I'll review your requirements and come back with a clear
            architectural proposal within 48 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-p" style={{ fontSize: '1rem', padding: '.875rem 2rem' }}>
              <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>send</span>
              Start a Project
            </a>
            <a href="#work" className="btn-s" style={{ fontSize: '1rem', padding: '.875rem 2rem' }}>
              View Our Work
              <span className="material-icons-round" style={{ fontSize: '1.1rem' }}>arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
