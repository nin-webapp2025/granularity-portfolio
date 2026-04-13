const LOGOS = ['Lumina', 'Nexus.AI', 'Stratos', 'Forge', 'Apex']

export default function TrustedBy() {
  return (
    <div className="trusted">
      <div className="container">
        <p className="lbl" style={{ textAlign: 'center' }}>
          Trusted by architectural &amp; tech giants
        </p>
        <div className="trusted-logos">
          {LOGOS.map(name => (
            <span key={name} className="t-logo">{name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
