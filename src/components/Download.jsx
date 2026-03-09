export default function Download () {
    return(
        <>
        {/* ── DESCARGA ── */}
<div className="dl-section" id="descargar">
  <div className="dl-inner">
    <div className="dl-tag">DESCARGA GRATUITA</div>

    <h2 className="dl-title">Un clic.<br/>El PDF es tuyo.</h2>

    <p className="dl-desc">
      Sin registro. Sin email. Sin formulario.<br/>Solo el PDF.
    </p>

    <a href="Como hablarle a la IA Junior.pdf" download className="dl-btn">
      <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 12L3 7h3V2h4v5h3L8 12zm-5 2h10v1H3z"/></svg>
      Descargar PDF gratis
    </a>

    <p className="dl-meta">38 páginas · 0€ · Sin registro</p>

    <div className="note-box">
      <div className="note-box-label">SOBRE EL AUTOR</div>
      <p>
        Soy Francisco De Manna. Un developer Junior en crecimiento.
        Creé esta guía después de cometer todos los errores típicos usando IA como junior.
Si yo hubiera entendido esto antes, habría avanzado el doble de rápido.
      </p>
    </div>
  </div>
</div></>
    )
}