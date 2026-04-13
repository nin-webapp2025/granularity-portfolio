import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#process',  label: 'Process' },
  { href: '#contact',  label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]           = useState(false)
  const [drawerOpen, setDrawerOpen]       = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = document.querySelectorAll<HTMLElement>('section[id]')
      let current = 'home'
      sections.forEach(s => {
        if (s.getBoundingClientRect().top <= 130) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const close = () => setDrawerOpen(false)

  return (
    <>
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="container">
          <div className="nav-inner">
            <a href="#home" className="nav-logo">
              Granularity<span>.dev</span>
            </a>

            <ul className="nav-links">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={activeSection === href.slice(1) ? 'active' : undefined}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <a href="#contact" className="btn-p">
                <span className="material-icons-round" style={{ fontSize: '1rem' }}>send</span>
                Send a DM
              </a>
              <button
                className="hamburger"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                type="button"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={drawerOpen ? 'drawer open' : 'drawer'}
        role="dialog"
        aria-modal="true"
        onClick={e => { if (e.target === e.currentTarget) close() }}
      >
        <button
          className="drawer-close material-icons-round"
          onClick={close}
          aria-label="Close menu"
          type="button"
        >
          close
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>{label}</a>
        ))}
        <a href="#contact" className="btn-p" onClick={close}>Send a DM</a>
      </div>
    </>
  )
}
