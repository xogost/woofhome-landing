import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Icon = ({ name, size = 24 }) => {
  const paths = {
    sound: <><path d="M3 10v4h4l5 4V6L7 10H3Z"/><path d="M16 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12"/></>,
    shield: <path d="M12 3 4.5 6v5.4c0 4.7 3.2 8.1 7.5 9.6 4.3-1.5 7.5-4.9 7.5-9.6V6L12 3Z"/>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/></>,
    layers: <><path d="m12 3-9 5 9 5 9-5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    sensor: <><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/></>,
    moon: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>,
    temp: <><path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z"/><path d="M11 7v9"/></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>
  }
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="#inicio" aria-label="WoofHome, ir al inicio">
    <span className="brand__mark"><span className="brand__roof" /><span className="brand__door" /></span>
    <span>Woof<span>Home</span></span>
  </a>
}

function ProductVisual() {
  return <div className="product-visual" aria-label="Concepto visual de la casa WoofHome">
    <div className="orbit orbit--one" /><div className="orbit orbit--two" />
    <div className="signal signal--1" /><div className="signal signal--2" /><div className="signal signal--3" />
    <div className="house-shadow" />
    <div className="house">
      <div className="house__roof"><span /></div>
      <div className="house__body">
        <div className="house__light" />
        <div className="house__door">
          <div className="dog"><span className="dog__ear dog__ear--l"/><span className="dog__ear dog__ear--r"/><span className="dog__head"><i/><b/></span><span className="dog__body"/></div>
        </div>
        <div className="house__vents"><i/><i/><i/></div>
      </div>
    </div>
    <div className="status-card status-card--sound"><span><Icon name="sound" size={18}/></span><div><small>Ruido exterior</small><strong>Detectado</strong></div></div>
    <div className="status-card status-card--safe"><span><Icon name="shield" size={18}/></span><div><small>Interior</small><strong>Zona segura</strong></div></div>
    <div className="floor-label"><i/> Modo calma activo</div>
  </div>
}

const features = [
  ['layers', 'Aislamiento multicapa', 'Materiales pensados para reducir el impacto del ruido exterior y crear una sensación de refugio.'],
  ['sensor', 'Detección de ruido', 'Sensores identifican picos de sonido y activan automáticamente el modo de protección.'],
  ['moon', 'Ambiente de calma', 'Luz interior cálida y ventilación silenciosa para acompañar a tu perro sin sobreestimularlo.'],
  ['temp', 'Confort monitoreado', 'Seguimiento de las condiciones internas para mantener un espacio cómodo y seguro.'],
  ['phone', 'Alertas en tu celular', 'Recibe información del estado del refugio y sabe cuándo tu perro necesita atención.'],
  ['heart', 'Diseño centrado en bienestar', 'Una experiencia intuitiva para el perro y tranquilidad real para quien lo cuida.']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    }), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goToValidation = () => {
    setMenuOpen(false)
    document.querySelector('#validacion')?.scrollIntoView({ behavior: 'smooth' })
  }

  const joinPilot = (e) => {
    e.preventDefault()
    setJoined(true)
  }

  return <>
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Navegación principal">
        <Brand />
        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <a href="#problema" onClick={() => setMenuOpen(false)}>El problema</a>
          <a href="#solucion" onClick={() => setMenuOpen(false)}>La solución</a>
          <a href="#caracteristicas" onClick={() => setMenuOpen(false)}>Características</a>
          <button className="button button--small" onClick={goToValidation}>Quiero WoofHome <Icon name="arrow" size={17}/></button>
        </div>
        <button className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú"><Icon name={menuOpen ? 'close' : 'menu'}/></button>
      </nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero__glow" />
        <div className="container hero__grid">
          <div className="hero__copy reveal is-visible">
            <div className="eyebrow"><span /> Bienestar inteligente para perros</div>
            <h1>Calma, incluso cuando afuera <em>no la hay.</em></h1>
            <p>WoofHome es un refugio inteligente e insonorizado que protege a tu perro de la pólvora, las tormentas y otros ruidos intensos.</p>
            <div className="hero__actions">
              <button className="button button--hero" onClick={goToValidation}>Quiero WoofHome <Icon name="arrow" size={19}/></button>
              <a className="text-link" href="#como-funciona"><span className="play">▶</span> Descubre cómo funciona</a>
            </div>
            <div className="hero__trust"><div className="avatar-stack"><span>🐶</span><span>🐕</span><span>🦮</span></div><p><strong>Creado con tutores reales</strong><br/>Un proyecto académico centrado en bienestar animal</p></div>
          </div>
          <div className="hero__visual reveal is-visible"><ProductVisual /></div>
        </div>
        <a href="#problema" className="scroll-cue" aria-label="Bajar a la siguiente sección"><span>↓</span></a>
      </section>

      <section className="problem section" id="problema">
        <div className="container problem__grid">
          <div className="problem__statement reveal">
            <span className="section-number">01 · EL PROBLEMA</span>
            <h2>Para ellos no es “solo ruido”.</h2>
          </div>
          <div className="problem__content reveal">
            <p className="lead">Los sonidos fuertes pueden activar respuestas de miedo, estrés y desorientación en los perros.</p>
            <p>Durante la pólvora o una tormenta, muchos buscan esconderse, jadean, tiemblan o intentan escapar. Y sus tutores sienten que no siempre pueden protegerlos.</p>
            <div className="quote-card"><Icon name="heart"/><p>“Necesitan un lugar que se sienta seguro antes, durante y después del ruido.”</p></div>
          </div>
        </div>
      </section>

      <section className="solution section" id="solucion">
        <div className="container">
          <div className="solution__intro reveal">
            <div><span className="section-number section-number--light">02 · LA SOLUCIÓN</span><h2>Un hogar dentro de tu hogar.</h2></div>
            <p>WoofHome combina diseño acústico, sensores y confort en un espacio que responde cuando tu perro más lo necesita.</p>
          </div>
          <div className="solution__showcase reveal">
            <div className="mini-house"><div className="mini-house__roof"/><div className="mini-house__body"><span>W</span></div></div>
            <div className="solution__line" />
            <div className="solution__points">
              <div><span>01</span><strong>Refugio</strong><small>Un espacio propio y acogedor</small></div>
              <div><span>02</span><strong>Aislamiento</strong><small>Menor impacto del ruido exterior</small></div>
              <div><span>03</span><strong>Tecnología</strong><small>Respuesta automática e inteligente</small></div>
              <div><span>04</span><strong>Monitoreo</strong><small>Tranquilidad estés donde estés</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="how section" id="como-funciona">
        <div className="container">
          <div className="section-heading reveal"><span className="section-number">03 · CÓMO FUNCIONA</span><h2>Tres pasos hacia la calma.</h2><p>Una experiencia automática para que tú no tengas que reaccionar tarde.</p></div>
          <div className="steps">
            {[
              ['sound', 'Detecta', 'Los sensores reconocen un nivel de ruido que puede generar estrés.', '01'],
              ['shield', 'Protege', 'El modo calma activa el ambiente interior y reduce el impacto exterior.', '02'],
              ['bell', 'Te mantiene informado', 'Recibes una alerta para saber que tu perro está en su zona segura.', '03']
            ].map(([icon, title, text, n], i) => <React.Fragment key={title}>
              <article className="step-card reveal" style={{transitionDelay: `${i * 100}ms`}}><span className="step-card__num">{n}</span><span className="step-card__icon"><Icon name={icon} size={28}/></span><h3>{title}</h3><p>{text}</p></article>
              {i < 2 && <span className="step-arrow"><Icon name="arrow"/></span>}
            </React.Fragment>)}
          </div>
        </div>
      </section>

      <section className="features section" id="caracteristicas">
        <div className="container">
          <div className="features__heading reveal"><div><span className="section-number">04 · EL MVP</span><h2>Todo lo esencial.<br/>Nada que distraiga.</h2></div><p>Una primera versión diseñada para validar la promesa central: reducir el impacto del ruido y acompañar el bienestar del perro.</p></div>
          <div className="features__grid">
            {features.map(([icon, title, text], i) => <article className="feature-card reveal" style={{transitionDelay: `${(i % 3) * 80}ms`}} key={title}><span><Icon name={icon}/></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="audience section">
        <div className="container audience__grid">
          <div className="audience__visual reveal">
            <div className="portrait-card"><span className="portrait-card__shape"/><span className="portrait-card__person">👩🏻</span><span className="portrait-card__dog">🐕</span><div className="portrait-card__tag"><i/> Hogar más tranquilo</div></div>
          </div>
          <div className="audience__copy reveal"><span className="section-number">05 · PARA QUIÉN ES</span><h2>Para quienes también escuchan su miedo.</h2><p>WoofHome está pensado para tutores de perros sensibles al ruido que viven en entornos urbanos y buscan una solución preventiva, segura y fácil de usar.</p><ul><li><Icon name="check" size={18}/> Perros con miedo a pólvora o tormentas</li><li><Icon name="check" size={18}/> Familias que priorizan el bienestar animal</li><li><Icon name="check" size={18}/> Tutores que necesitan tranquilidad al estar lejos</li></ul></div>
        </div>
      </section>

      <section className="validation section" id="validacion">
        <div className="container validation__grid">
          <div className="validation__copy reveal"><span className="section-number section-number--light">06 · VALIDACIÓN DEL MVP</span><h2>Estamos construyendo la primera zona segura.</h2><p>WoofHome está en etapa de prototipo. El siguiente paso es escuchar, probar y mejorar junto a tutores y sus perros.</p><div className="pilot-stats"><div><strong>5</strong><span>hogares<br/>para el piloto</span></div><div><strong>3</strong><span>momentos clave<br/>a observar</span></div><div><strong>1</strong><span>promesa<br/>por validar</span></div></div></div>
          <form className="pilot-card reveal" onSubmit={joinPilot}>
            {!joined ? <><span className="pilot-card__badge">Cupos piloto</span><h3>¿Te gustaría probar WoofHome?</h3><p>Déjanos tus datos y sé parte de las primeras personas en conocer el proyecto.</p><label>Tu nombre<input required name="name" placeholder="Nombre y apellido" /></label><label>Tu correo<input required type="email" name="email" placeholder="tu@correo.com" /></label><button className="button button--wide" type="submit">Quiero WoofHome <Icon name="arrow" size={18}/></button><small>Demo académica · Tus datos no serán almacenados.</small></> : <div className="success"><span><Icon name="check" size={30}/></span><h3>¡Gracias por creer en WoofHome!</h3><p>Este formulario es una demostración del MVP. En la versión publicada podrás conectarlo con tu herramienta de contacto favorita.</p><button type="button" className="text-button" onClick={() => setJoined(false)}>Volver al formulario</button></div>}
          </form>
        </div>
      </section>

      <section className="final-cta section">
        <div className="final-cta__glow"/><div className="container final-cta__inner reveal"><div className="paw">●<i>●</i><b>●</b><span>♥</span></div><span className="eyebrow eyebrow--center"><span/> El bienestar también se diseña <span/></span><h2>Que el próximo ruido fuerte<br/>lo encuentre en un lugar seguro.</h2><p>Sé parte de las primeras personas en conocer WoofHome.</p><button className="button button--light" onClick={goToValidation}>Quiero WoofHome <Icon name="arrow" size={19}/></button></div>
      </section>
    </main>

    <footer>
      <div className="container footer__main"><div><Brand light/><p>Refugios inteligentes para<br/>el bienestar de quienes más quieres.</p></div><div className="footer__links"><div><strong>Explora</strong><a href="#problema">El problema</a><a href="#solucion">La solución</a><a href="#caracteristicas">El MVP</a></div><div><strong>Proyecto</strong><a href="#validacion">Validación</a><a href="mailto:hola@woofhome.co">Contacto</a></div></div></div>
      <div className="container footer__bottom"><span>© 2026 WoofHome · Proyecto académico</span><span>Diseñado con <span className="coral">♥</span> para narices frías</span></div>
    </footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
