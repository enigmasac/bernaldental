import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MapPin, Clock, Phone, Mail, X, Menu,
  ShieldCheck, Shield, FileCheck, ClipboardList, Sparkle,
  AlertTriangle, Play, Pause, ArrowRight,
  Facebook, Instagram, ArrowLeft, Cookie
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

function WarrantyPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cookieConsent, setCookieConsent] = useState(() => localStorage.getItem('cookie-consent'))
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setVideoPlaying(!videoPlaying)
    }
  }

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setCookieConsent('accepted')
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setCookieConsent('rejected')
  }

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-content">
              <div className="header-top-left">
                <div className="header-top-item">
                  <MapPin size={16} />
                  <span>Passatge de Montserrat de Andrés 11, 08014 Barcelona</span>
                </div>
                <div className="header-top-item">
                  <Clock size={16} />
                  <span>Lun-Jue: 10:00-14:00 / 15:00-20:00 | Vie: 10:00-14:00</span>
                </div>
              </div>
              <div className="header-top-right">
                <div className="header-top-item">
                  <Phone size={16} />
                  <a href="tel:+34625766371">625 766 371</a>
                </div>
                <div className="social-links">
                  <a href="https://www.facebook.com/bernaldentalclinic/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
                  <a href="https://www.instagram.com/bernal_dental_clinic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
                  <a href="https://www.google.com/search?q=bernaldentalclinic" target="_blank" rel="noopener noreferrer" aria-label="Google" className="google-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="header-main-content">
              <Link to="/" className="logo">
                <img src="/logo.png" alt="Bernal Dental Clinic" />
              </Link>
              <nav>
                <ul className="nav-menu">
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/condiciones-implantes">Garantía Prótesis</Link></li>
                </ul>
              </nav>
              <div className="header-cta">
                <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Pedir Cita
                </a>
                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/logo.png" alt="Bernal Dental Clinic" style={{ height: '40px' }} />
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
            <X />
          </button>
        </div>
        <ul className="mobile-nav">
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/condiciones-implantes" onClick={() => setMobileMenuOpen(false)}>Garantía Prótesis</Link></li>
        </ul>
        <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
          Pedir Cita
        </a>
      </div>

      <section className="warranty-page section-padding">
        <div className="container">
          <motion.div
            className="warranty-back"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/" className="warranty-back-link">
              <ArrowLeft size={18} />
              Volver al inicio
            </Link>
          </motion.div>

          <motion.div
            className="warranty-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="warranty-header-icon">
              <ShieldCheck size={32} />
            </div>
            <span className="section-subtitle" style={{ justifyContent: 'center' }}>Garantía y Condiciones</span>
            <h2 className="section-title">Garantía de Prótesis Dentales</h2>
            <p>
              En Bernal Dental Clinic, nuestro compromiso es que cada paciente disfrute de una sonrisa
              sana y duradera. Por ello, el tratamiento cuenta con una garantía de reparación para su
              prótesis (ya sea fija, removible o sobre implantes).
            </p>
          </motion.div>

          <div className="warranty-content">
            <motion.div
              className="warranty-video-wrapper"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="warranty-video-container">
                <video
                  ref={videoRef}
                  src="/Bernie.mp4"
                  playsInline
                  onPlay={() => setVideoPlaying(true)}
                  onPause={() => setVideoPlaying(false)}
                  onEnded={() => setVideoPlaying(false)}
                />
                <button className={`warranty-video-play ${videoPlaying ? 'playing' : ''}`} onClick={toggleVideo}>
                  {videoPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
              </div>
            </motion.div>

            <motion.div
              className="warranty-info"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="warranty-intro">
                En la garantía que le hemos compartido, encontrará cuántos años de cobertura tiene su
                tratamiento desde el día de su colocación. Para que esta protección se mantenga vigente,
                es necesario cumplir con los siguientes cuidados y requisitos:
              </p>

              <div className="warranty-requirements">
                <div className="warranty-req-item">
                  <div className="warranty-req-icon">
                    <FileCheck size={22} />
                  </div>
                  <div>
                    <h4>Certificado de Garantía</h4>
                    <p>Es indispensable presentar el certificado correspondiente, debidamente sellado y firmado por nuestro equipo.</p>
                  </div>
                </div>
                <div className="warranty-req-item">
                  <div className="warranty-req-icon">
                    <ClipboardList size={22} />
                  </div>
                  <div>
                    <h4>Revisiones</h4>
                    <p>Acuda a las revisiones indicadas en su garantía. Cada visita debe quedar registrada con su sello y fecha correspondientes.</p>
                  </div>
                </div>
                <div className="warranty-req-item">
                  <div className="warranty-req-icon">
                    <Sparkle size={22} />
                  </div>
                  <div>
                    <h4>Limpiezas Profesionales</h4>
                    <p>El paciente debe realizarse las limpiezas bucales recomendadas por nuestros profesionales en la clínica.</p>
                  </div>
                </div>
              </div>

              <div className="warranty-notice">
                <AlertTriangle size={18} />
                <p>
                  La clínica no tiene la obligación de realizar recordatorios telefónicos para las citas de revisión.
                  Recomendamos al paciente agendar sus fechas con antelación para asegurar su cobertura.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="warranty-exclusions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              <Shield size={22} />
              Exclusiones de la Garantía
            </h3>
            <p className="warranty-exclusions-intro">
              Existen situaciones específicas en las que la clínica no puede hacerse responsable de la reparación bajo garantía:
            </p>
            <div className="warranty-exclusions-grid">
              <div className="warranty-exclusion-card">
                <div className="warranty-exclusion-number">1</div>
                <h4>Extravío</h4>
                <p>La garantía no cubre la pérdida de la prótesis dental.</p>
              </div>
              <div className="warranty-exclusion-card">
                <div className="warranty-exclusion-number">2</div>
                <h4>Manipulación Externa</h4>
                <p>Si la prótesis es reparada o modificada en centros ajenos a Bernal Dental Clinic, la garantía quedará invalidada automáticamente.</p>
              </div>
              <div className="warranty-exclusion-card">
                <div className="warranty-exclusion-number">3</div>
                <h4>Uso Inadecuado</h4>
                <p>No se cubren daños derivados de un uso negligente o por no seguir las recomendaciones de nuestros dentistas.</p>
              </div>
              <div className="warranty-exclusion-card">
                <div className="warranty-exclusion-number">4</div>
                <h4>Soportes Naturales</h4>
                <p>La garantía se aplica exclusivamente a la pieza fabricada. No se garantizan los soportes dentarios ni cualquier parte natural de la boca, ya que su estado depende de la salud biológica individual del paciente.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/logo-blanco.png" alt="Bernal Dental Clinic" className="footer-logo" />
              <p>
                Clínica dental de confianza en Barcelona. Más de 15 años cuidando
                de la salud bucal de nuestros pacientes con un trato cercano y profesional.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/bernaldentalclinic/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://www.instagram.com/bernal_dental_clinic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://www.google.com/search?q=bernaldentalclinic" target="_blank" rel="noopener noreferrer" aria-label="Google" className="google-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Navegación</h4>
              <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/condiciones-implantes">Garantía Prótesis</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contacto</h4>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Passatge de Montserrat de Andrés 11, Local 2, 08014 Barcelona (Sants)</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <span>625 766 371</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <span>info@bernaldentalclinic.com</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} />
                <span>Lun-Jue: 10:00-20:00<br />Vie: 10:00-14:00</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Bernal Dental Clinic. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#">Aviso Legal</a>
              <a href="#">Política de Privacidad</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCookiePolicyOpen(true) }}>Política de Cookies</a>
            </div>
            <p className="footer-credits">Desarrollado por <a href="https://enigmasac.com" target="_blank" rel="noopener noreferrer">Enigma Developers</a></p>
          </div>
        </div>
      </footer>

      <motion.a
        href="https://wa.me/34625766371"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.18 2.28-.852.18-1.964.324-5.71-1.228-4.796-1.986-7.882-6.848-8.12-7.166-.23-.318-1.926-2.566-1.926-4.892s1.218-3.47 1.652-3.944c.434-.474.946-.592 1.262-.592.316 0 .632.002.908.016.292.016.682-.11 1.068.814.39.938 1.33 3.264 1.448 3.502.118.238.196.514.04.832-.158.318-.236.514-.474.792-.238.278-.5.622-.714.834-.238.238-.486.496-.21.974.278.474 1.234 2.036 2.65 3.298 1.82 1.622 3.354 2.124 3.828 2.362.474.238.752.198 1.028-.118.278-.318 1.186-1.382 1.504-1.856.316-.474.632-.394 1.068-.236.434.158 2.76 1.302 3.234 1.538.474.238.79.356.908.554.118.198.118 1.148-.272 2.252z"/>
        </svg>
        <span className="whatsapp-tooltip">WhatsApp</span>
      </motion.a>

      {!cookieConsent && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
        >
          <div className="cookie-banner-content">
            <div className="cookie-banner-icon">
              <Cookie size={24} />
            </div>
            <p className="cookie-banner-text">
              Utilizamos cookies propias para mejorar tu experiencia en nuestro sitio web.
              Puedes aceptar o rechazar su uso. <a href="#" onClick={(e) => { e.preventDefault(); setCookiePolicyOpen(true) }}>Política de Cookies</a>
            </p>
            <div className="cookie-banner-actions">
              <button className="cookie-btn cookie-btn-accept" onClick={acceptCookies}>Aceptar</button>
              <button className="cookie-btn cookie-btn-reject" onClick={rejectCookies}>Rechazar</button>
            </div>
          </div>
        </motion.div>
      )}

      {cookiePolicyOpen && (
        <div className="cookie-policy-overlay" onClick={() => setCookiePolicyOpen(false)}>
          <motion.div
            className="cookie-policy-modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cookie-policy-header">
              <h2>Política de Cookies</h2>
              <button className="cookie-policy-close" onClick={() => setCookiePolicyOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="cookie-policy-body">
              <p className="cookie-policy-updated">Última actualización: febrero 2026</p>
              <h3>1. ¿Qué son las cookies?</h3>
              <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario (ordenador, tablet o móvil) cuando los visita. Sirven para que el sitio web recuerde información sobre la visita, como preferencias de idioma u otros ajustes, lo que puede facilitar la siguiente visita y hacer el sitio más útil.</p>
              <h3>2. Responsable del tratamiento</h3>
              <p><strong>Titular:</strong> Bernal Dental Clinic, S.L.<br /><strong>CIF:</strong> B67156695<br /><strong>Domicilio:</strong> Passatge de Montserrat de Andrés 11, Local 2, 08014 Barcelona<br /><strong>Email:</strong> info@bernaldentalclinic.com<br /><strong>Teléfono:</strong> 625 766 371</p>
              <h3>3. Tipos de cookies que utilizamos</h3>
              <p>Este sitio web utiliza únicamente <strong>cookies técnicas y funcionales</strong> estrictamente necesarias para el correcto funcionamiento de la página. No utilizamos cookies de análisis, publicitarias ni de rastreo de terceros.</p>
              <h3>4. Base legal</h3>
              <p>Las cookies técnicas están exentas del requisito de consentimiento según el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), ya que son estrictamente necesarias para la prestación del servicio solicitado por el usuario.</p>
              <h3>5. ¿Cómo gestionar las cookies?</h3>
              <p>Puedes aceptar o rechazar las cookies a través del banner informativo que aparece al acceder al sitio web. Además, puedes configurar tu navegador para bloquear o eliminar las cookies instaladas en tu equipo.</p>
              <h3>6. Derechos del usuario</h3>
              <p>De conformidad con el Reglamento General de Protección de Datos (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un correo a <a href="mailto:info@bernaldentalclinic.com">info@bernaldentalclinic.com</a>.</p>
              <p>Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default WarrantyPage
