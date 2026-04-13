import { useReveal } from '../hooks/useReveal'

/* Static hardcoded code snippet — dangerouslySetInnerHTML is safe, no user input */
const CODE_HTML = `<span class="cm">// The Granularity Commitment</span>
<span class="kw">const</span> <span class="fn">ProjectSuccess</span> = (clientNeeds) <span class="kw">=&gt;</span> {
  <span class="kw">return</span> <span class="fn">architecturalPrecision</span>({
    detail:        <span class="str">"obsessive"</span>,
    performance:   <span class="str">"peak"</span>,
    businessValue: <span class="str">"maximized"</span>
  });
};

<span class="kw">export const</span> stack = {
  frontend: [<span class="str">"Next.js"</span>, <span class="str">"TypeScript"</span>],
  backend:  [<span class="str">"Node.js"</span>, <span class="str">"PostgreSQL"</span>],
  infra:    [<span class="str">"Vercel"</span>, <span class="str">"AWS"</span>]
};`

export default function Hero() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="container">
        <div className="hero-grid">

          {/* Copy */}
          <div>
            <div className="hero-badge reveal">Available for New Projects</div>

            <h1 className="d-xl hero-title reveal d1">
              Digital Solutions for<br />
              <span className="accent">Modern Business</span>
            </h1>

            <p className="hero-desc reveal d2">
              Architecting high-performance digital ecosystems with surgical
              precision. We build what scale demands.
            </p>

            <div className="hero-cta reveal d3">
              <a href="#contact" className="btn-p">
                <span className="material-icons-round" style={{ fontSize: '1rem' }}>send</span>
                Send a DM
              </a>
              <a href="#work" className="btn-s">
                View Projects
                <span className="material-icons-round" style={{ fontSize: '1rem' }}>arrow_forward</span>
              </a>
            </div>

            <div className="hero-stats reveal d4">
              <div>
                <div className="stat-num">10+</div>
                <div className="stat-lbl">Years Experience</div>
              </div>
              <div>
                <div className="stat-num">042</div>
                <div className="stat-lbl">Deployments</div>
              </div>
              <div>
                <div className="stat-num">100%</div>
                <div className="stat-lbl">Custom Build</div>
              </div>
            </div>
          </div>

          {/* Code card visual */}
          <div className="hero-visual">
            <div className="code-card reveal d1">
              <div className="code-header">
                <div className="dot" style={{ background: '#ff605c' }} />
                <div className="dot" style={{ background: '#ffbd44' }} />
                <div className="dot" style={{ background: '#00ca4e' }} />
                <span style={{ fontFamily: 'var(--f-label)', fontSize: '.6875rem', color: 'rgba(156,172,200,.35)', marginLeft: '.625rem' }}>
                  granularity.config.ts
                </span>
              </div>
              <pre className="code-body">
                <code dangerouslySetInnerHTML={{ __html: CODE_HTML }} />
              </pre>
            </div>
            <div className="float float-1">
              <div className="metric-val">+142%</div>
              <div className="metric-lbl">User Growth</div>
            </div>
            <div className="float float-2">
              <div className="metric-val">0.4s</div>
              <div className="metric-lbl">LCP Speed</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
