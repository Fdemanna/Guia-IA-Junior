export default function Problems() {
    return(
        <>
        {/* ── 01. PROBLEMA ── */}
<section className="section">
  <div className="section-head reveal">
    <div className="section-num-title">
      <span className="section-num">01.</span>
      <span className="section-title">El Problema</span>
    </div>
    <div className="section-tag">DIAGNÓSTICO</div>
  </div>

  <p className="section-desc reveal">
    Sin instrucciones específicas, la IA completa los huecos con sus propias suposiciones.
    Y sus suposiciones no conocen tu proyecto, tu stack, ni tus restricciones.
    El resultado: <strong>código que parece correcto pero no funciona</strong>,
    refactors que nadie pidió, y sesiones de debug que duran el doble.
  </p>

  <div className="prob-grid reveal">
    <div className="cmp-card bad">
      <div className="cmp-header">
        <span className="dot"></span>
        <span className="cmp-label">✗ ASÍ NO</span>
      </div>
      <div className="cmp-body">Corrige este error: [ERROR]

[CÓDIGO]</div>
    </div>

    <div className="cmp-card good">
      <div className="cmp-header">
        <span className="dot"></span>
        <span className="cmp-label">✓ ASÍ SÍ — cópialo y úsalo</span>
      </div>
      <div className="cmp-body"><span className="c">Corrige este error.
Mínimo de cambios posibles.
No reorganices, no renombres.</span>

<span className="k">## El error exacto:</span>
<span className="v">[PEGA EL MENSAJE COMPLETO]</span>
<span className="k">## El código donde ocurre:</span>
<span className="v">[PEGA EL CÓDIGO]</span>

<span className="c">Dime: qué línea cambias,
por qué estaba mal,
por qué lo soluciona.</span></div>
    </div>
  </div>

  <div className="insight reveal">
    <div className="insight-label">CONTEXT</div>
    <p>"La IA no te da lo que necesitas. Te da lo que le pediste — <em>que no siempre es lo mismo.</em>"</p>
  </div>
</section>

 {/* ── 02. CAPÍTULOS ── */}
<section className="section" id="contenido">
  <div className="section-head reveal">
    <div className="section-num-title">
      <span className="section-num">02.</span>
      <span className="section-title">Contenido de la guía</span>
    </div>
    <div className="section-tag">12 CAPÍTULOS</div>
  </div>

  <p className="section-desc reveal">
    Cada capítulo cubre una situación concreta con el prompt malo, el prompt bueno,
    y una explicación de por qué funciona. No teoría —
    <strong> patrones que puedes copiar y usar hoy.</strong>
  </p>

  <div className="chap-grid reveal">
    <div className="chap-card">
      <div className="chap-num">CAP 01</div>
      <div className="chap-title">La IA cambió cosas que no le pediste</div>
      <div className="chap-sub">Delimitar exactamente lo que puede tocar</div>
      <div className="chap-tags">
        <span className="chap-tag">LÍMITES</span>
        <span className="chap-tag">PERÍMETRO</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 02</div>
      <div className="chap-title">No sabes cómo explicarle un error</div>
      <div className="chap-sub">La estructura de debug que siempre funciona</div>
      <div className="chap-tags">
        <span className="chap-tag">DEBUG</span>
        <span className="chap-tag">STACK TRACE</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 03</div>
      <div className="chap-title">Generó código que no entiendes</div>
      <div className="chap-sub">Entender antes de pegar</div>
      <div className="chap-tags">
        <span className="chap-tag">COMPRENSIÓN</span>
        <span className="chap-tag">MODELO MENTAL</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 04</div>
      <div className="chap-title">No sabes estructurar el prompt</div>
      <div className="chap-sub">La estructura COLF que no falla</div>
      <div className="chap-tags">
        <span className="chap-tag">COLF</span>
        <span className="chap-tag">ESTRUCTURA</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 05</div>
      <div className="chap-title">Quieres ir paso a paso</div>
      <div className="chap-sub">El flujo iterativo que te mantiene en control</div>
      <div className="chap-tags">
        <span className="chap-tag">ITERATIVO</span>
        <span className="chap-tag">CONTROL</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 06</div>
      <div className="chap-title">Quieres mejorar código sin romper nada</div>
      <div className="chap-sub">Refactorizar de forma segura</div>
      <div className="chap-tags">
        <span className="chap-tag">REFACTOR</span>
        <span className="chap-tag">SEGURIDAD</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 07</div>
      <div className="chap-title">La sesión se alargó y la IA se perdió</div>
      <div className="chap-sub">Gestionar el contexto en sesiones largas</div>
      <div className="chap-tags">
        <span className="chap-tag">CONTEXTO</span>
        <span className="chap-tag">MEMORIA</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 08</div>
      <div className="chap-title">Quieres auditar código sin modificarlo</div>
      <div className="chap-sub">Code review con IA: ver sin tocar</div>
      <div className="chap-tags">
        <span className="chap-tag">CODE REVIEW</span>
        <span className="chap-tag">AUDITORÍA</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 09</div>
      <div className="chap-title">El cambio afecta a varios archivos</div>
      <div className="chap-sub">Contexto multi-archivo sin que se pierda</div>
      <div className="chap-tags">
        <span className="chap-tag">MULTI-FILE</span>
        <span className="chap-tag">COHERENCIA</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 10</div>
      <div className="chap-title">Cuándo NO usar la IA</div>
      <div className="chap-sub">Los casos donde te hace perder tiempo</div>
      <div className="chap-tags">
        <span className="chap-tag">LÍMITES</span>
        <span className="chap-tag">CRITERIO</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 11</div>
      <div className="chap-title">Quieres aprender, no solo resolver</div>
      <div className="chap-sub">La IA como mentor, no como oráculo</div>
      <div className="chap-tags">
        <span className="chap-tag">APRENDIZAJE</span>
        <span className="chap-tag">MENTOR</span>
      </div>
    </div>
    <div className="chap-card">
      <div className="chap-num">CAP 12</div>
      <div className="chap-title">Plantillas listas para copiar</div>
      <div className="chap-sub">Los prompts que usarás cada semana</div>
      <div className="chap-tags">
        <span className="chap-tag">PLANTILLAS</span>
        <span className="chap-tag">REFERENCIA</span>
      </div>
    </div>
  </div>
</section>

 {/* ── 03. PARA QUIÉN ── */}
<section className="section">
  <div className="section-head reveal">
    <div className="section-num-title">
      <span className="section-num">03.</span>
      <span className="section-title">Para quién es</span>
    </div>
    <div className="section-tag">AUDIENCIA</div>
  </div>

  <p className="section-desc reveal">
    No es una guía de IA en general. Es para developers que ya usan IA a diario 
    y quieren dejar de perder tiempo corrigiendo lo que hizo mal.
  </p>

  <div className="fw-grid reveal">
    <div className="fw-card yes">
      <div className="fw-label">✓ ES PARA TI SI...</div>
      <div className="fw-item"><span className="fw-arrow">→</span><span>Usas Claude o Gemini mientras programas</span></div>
      <div className="fw-item"><span className="fw-arrow">→</span><span>La IA a veces hace más de lo que pediste</span></div>
      <div className="fw-item"><span className="fw-arrow">→</span><span>Pegas código sin entender del todo qué hace</span></div>
      <div className="fw-item"><span className="fw-arrow">→</span><span>Las sesiones largas acaban en contradicciones</span></div>
      <div className="fw-item"><span className="fw-arrow">→</span><span>Quieres aprender, no solo que resuelva por ti</span></div>
    </div>
    <div className="fw-card no">
      <div className="fw-label">✗ NO ES PARA TI SI...</div>
      <div className="fw-item"><span className="fw-arrow">×</span><span>Buscas una intro a la IA desde cero</span></div>
      <div className="fw-item"><span className="fw-arrow">×</span><span>Quieres usar IA para marketing o contenido</span></div>
      <div className="fw-item"><span className="fw-arrow">×</span><span>No programas ni tienes intención de hacerlo</span></div>
      <div className="fw-item"><span className="fw-arrow">×</span><span>Buscas prompts mágicos que funcionen solos</span></div>
    </div>
  </div>
</section>
        </>
    )
}