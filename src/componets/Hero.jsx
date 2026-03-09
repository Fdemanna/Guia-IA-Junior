export default function Hero() {
return (
    <>
    {/*HERO */}
<div className="hero">
  <div className="open-badge">GUÍA GRATUITA / EDICIÓN 2026</div>

  <div className="hero-card">

    {/* izquierda */}
    <div>
      <div className="hero-eyebrow">DISPONIBLE GRATIS · PDF · 38 PÁGINAS</div>
      <h1 className="hero-title">Cómo hablarle<br/>a la IA</h1>
      <p className="hero-subtitle">Guía práctica para developers juniors</p>
      <p className="hero-desc">
        Esta guía no es para que la IA haga tu trabajo.
        Es para que aprendas a pensar mejor, escribir mejores prompts y <strong>convertir la IA en tu compañera de crecimiento. </strong>
        Porque si dependes de la IA, te estancas. Pero si aprendes a dirigirla, evolucionas.
     </p>
      <div className="hero-btns">
        <a href="#descargar" className="btn btn-primary">
          <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 12L3 7h3V2h4v5h3L8 12zm-5 2h10v1H3z"/></svg>
          Descargar PDF gratis
        </a>
        <a href="#contenido" className="btn btn-outline">Ver contenido</a>
        <a href="https://www.linkedin.com/in/francisco-de-manna" target="_blank" rel="noopener" className="btn btn-outline">LinkedIn</a>
      </div>
    </div>

    {/* derecha: panel de specs */}
    <div className="hero-specs">
      <div className="spec-section">
        <div className="spec-label" data-icon="◈">ESTRUCTURA</div>
        <div className="pills">
          <span className="pill blue">12 capítulos</span>
          <span className="pill blue">40+ prompts</span>
          <span className="pill blue">38 páginas</span>
        </div>
      </div>
      <div className="spec-section">
        <div className="spec-label" data-icon="◈">COMPATIBLE CON</div>
        <div className="pills">
          <span className="pill">Claude</span>
          <span className="pill">Gemini</span>
          <span className="pill">ChatGPT</span>
        </div>
      </div>
      <div className="spec-section">
        <div className="spec-label" data-icon="◈">METODOLOGÍA</div>
        <div className="pills">
          <span className="pill green">COLF Framework</span>
          <span className="pill green">Iterativo</span>
          <span className="pill green">100% práctico</span>
        </div>
      </div>
      <div className="spec-section">
        <div className="spec-label" data-icon="⌥">PRECIO</div>
        <div className="pills">
          <span className="pill blue">Gratis</span>
        </div>
      </div>
    </div>

  </div>

   {/* franja de stats */}
  <div className="stats-row">
    <div className="stat-cell">
      <span className="stat-n">12</span>
      <span className="stat-l">Capítulos</span>
    </div>
    <div className="stat-cell">
      <span className="stat-n">40+</span>
      <span className="stat-l">Prompts copiables</span>
    </div>
    <div className="stat-cell">
      <span className="stat-n">0€</span>
      <span className="stat-l">Precio</span>
    </div>
    <div className="stat-cell">
      <span className="stat-n">100%</span>
      <span className="stat-l">Práctico</span>
    </div>
  </div>
  <div className="insight reveal">
    <div className="insight-label">CONTEXT</div>
    <p>Esta no es otra guía de “copiar y pegar prompts”.
 — <em>Es una guía para que desarrolles criterio.</em></p>
  </div>
</div>



</>
)
}
