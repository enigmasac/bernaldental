import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MapPin, Clock, Phone, Mail, Menu, X, Star, Quote,
  Calendar, Users, HeartPulse, Shield, Award, CheckCircle,
  ArrowRight, Facebook, Instagram, Youtube,
  Stethoscope, Smile, Baby, Sparkles, CircleDot, Target,
  Eye, Heart, Lightbulb, Handshake, ShieldCheck, Cookie
} from 'lucide-react'
import './App.css'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cookieConsent, setCookieConsent] = useState(() => localStorage.getItem('cookie-consent'))
  const [cookiePolicyOpen, setCookiePolicyOpen] = useState(false)

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setCookieConsent('accepted')
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setCookieConsent('rejected')
  }

  const services = [
    { icon: Stethoscope, title: 'Odontología General', description: 'Cuidado integral de tu salud bucal con tratamientos preventivos y conservadores para mantener tu sonrisa sana.' },
    { icon: CircleDot, title: 'Ortodoncia', description: 'Corregimos la posición de tus dientes con las técnicas más avanzadas, incluyendo ortodoncia invisible.' },
    { icon: Baby, title: 'Ortodoncia Infantil', description: 'Tratamientos especializados para los más pequeños, cuidando su desarrollo dental desde temprana edad.' },
    { icon: Sparkles, title: 'Estética Dental', description: 'Carillas dentales y blanqueamiento para conseguir la sonrisa perfecta que siempre has deseado.' },
    { icon: Target, title: 'Implantes Dentales', description: 'Recupera la funcionalidad y estética de tu sonrisa con implantes de última generación.' },
    { icon: HeartPulse, title: 'Otras Especialidades', description: 'Contamos con especialistas en todas las áreas de la odontología para ofrecerte el mejor tratamiento.' },
  ]

  const philosophy = [
    { icon: Heart, title: 'Nuestra Filosofía', text: 'Nuestra filosofía nace de los más de 15 años de experiencia en odontología general y ortodoncia de la Dra. Yeimi Bernal, que siempre ha buscado la solución más adecuada para cada uno de sus pacientes, ofreciéndoles y aconsejándoles el tratamiento más conveniente.' },
    { icon: Target, title: 'Nuestra Misión', text: 'Ofrecemos un trato cercano y directo con los pacientes, cumpliendo con sus necesidades, solucionando sus problemas actuales y previniendo futuros con resultados profesionales. Contamos con los mejores especialistas y ofrecemos el mejor servicio al mejor precio.' },
    { icon: Eye, title: 'Nuestra Visión', text: 'Ser referentes como clínica de confianza, cercana a la comunidad, transparente y clara, con precios competitivos y facilidades de pago, y con especialistas en constante formación.' },
    { icon: Lightbulb, title: 'Así Trabajamos', text: 'Desde la primera visita se realiza una valoración profesional para evaluar y comprender cada caso y derivar al especialista correspondiente. Los pacientes tienen accesibilidad directa a nuestros doctores para comprender las necesidades de su caso.' },
  ]

  const testimonials = [
    { name: 'Guiño Ro', text: 'Es una Clínica de ensueño, el lugar donde perdí el miedo al dentista. El trato es excepcional y muy profesional.', rating: 5 },
    { name: 'María García', text: 'La Dra. Yeimi es increíble. Me explicó todo el tratamiento con detalle y siempre con una sonrisa. Muy recomendable.', rating: 5 },
    { name: 'Carlos Martínez', text: 'Después de años buscando un buen dentista, encontré a Bernal Dental Clinic. Trato cercano y resultados excelentes.', rating: 5 },
  ]

  const mutuas = [
    { name: 'Active Seguros', logo: '/mutuas/active.png' },
    { name: 'Allianz', logo: '/mutuas/allianz.png' },
    { name: 'Dentista de Empresa', logo: '/mutuas/dentista-de-empresa.png' },
    { name: 'Preventiva', logo: '/mutuas/preventiva.png' },
    { name: 'Hogar Dental', logo: '/mutuas/hogardental.png' },
    { name: 'Legalitas Salud', logo: '/mutuas/legalitas-salud.png' },
    { name: 'Ocaso', logo: '/mutuas/ocaso.png' },
    { name: 'Servibucal', logo: '/mutuas/servibucal.png' },
    { name: 'Prebal', logo: '/mutuas/prebal.png' },
    { name: 'Smart Dental', logo: '/mutuas/smartdental.png' },
  ]

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
              <a href="#" className="logo">
                <img src="/logo.png" alt="Bernal Dental Clinic" />
              </a>
              <nav>
                <ul className="nav-menu">
                  <li><a href="#inicio">Inicio</a></li>
                  <li><a href="#servicios">Especialidades</a></li>
                  <li><a href="#filosofia">Filosofía</a></li>
                  <li><a href="#equipo">Equipo</a></li>
                  <li><a href="#testimonios">Testimonios</a></li>
                  <li><a href="#contacto">Contacto</a></li>
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
          <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
          <li><a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Especialidades</a></li>
          <li><a href="#filosofia" onClick={() => setMobileMenuOpen(false)}>Filosofía</a></li>
          <li><a href="#equipo" onClick={() => setMobileMenuOpen(false)}>Equipo</a></li>
          <li><a href="#testimonios" onClick={() => setMobileMenuOpen(false)}>Testimonios</a></li>
          <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          <li><Link to="/condiciones-implantes" onClick={() => setMobileMenuOpen(false)}>Garantía Prótesis</Link></li>
        </ul>
        <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
          Pedir Cita
        </a>
      </div>

      <section id="inicio" className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="hero-text" variants={fadeInUp}>
              <div className="hero-badge">
                <Award size={18} />
                Primera visita gratuita
              </div>
              <h1 className="hero-title">
                Tu sonrisa, <br />
                nuestra <span>prioridad</span>
              </h1>
              <p className="hero-description">
                En Bernal Dental Clinic cuidamos de tu salud bucal con un trato cercano y profesional.
                Más de 15 años de experiencia nos avalan. Confía, sonríe.
              </p>
              <div className="hero-buttons">
                <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-green">
                  Pedir Cita Gratis <ArrowRight size={18} />
                </a>
                <a href="#servicios" className="btn btn-secondary">
                  Nuestros Servicios
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Años de experiencia</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2000+</div>
                  <div className="stat-label">Pacientes felices</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.8</div>
                  <div className="stat-label">Valoración Google</div>
                </div>
              </div>
            </motion.div>
            <motion.div className="hero-image" variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=700&fit=crop"
                alt="Dentista profesional"
                className="hero-image-main"
              />
              <motion.div
                className="hero-floating-card top"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="floating-icon">
                  <Shield size={24} />
                </div>
                <div className="floating-text">
                  <h4>Tratamiento seguro</h4>
                  <p>Protocolos de higiene</p>
                </div>
              </motion.div>
              <motion.div
                className="hero-floating-card bottom"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="floating-icon">
                  <Smile size={24} />
                </div>
                <div className="floating-text">
                  <h4>Sonrisas perfectas</h4>
                  <p>Resultados garantizados</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="quick-services">
        <div className="container">
          <motion.div
            className="quick-services-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: Calendar, title: 'Pedir Cita', desc: 'Reserva tu visita gratuita' },
              { icon: Users, title: 'Equipo Experto', desc: 'Profesionales cualificados' },
              { icon: Phone, title: 'Urgencias', desc: '625 766 371' },
              { icon: HeartPulse, title: 'Atención Cercana', desc: 'Trato personalizado' },
            ].map((item, index) => (
              <motion.div key={index} className="quick-service-card" variants={fadeInUp}>
                <div className="quick-service-icon">
                  <item.icon />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="about section-padding">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-images"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=500&h=600&fit=crop"
                alt="Clínica dental moderna"
                className="about-image-main"
              />
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=250&h=200&fit=crop"
                alt="Tratamiento dental"
                className="about-image-secondary"
              />
              <div className="about-experience-badge">
                <h3>15+</h3>
                <p>Años de<br />experiencia</p>
              </div>
            </motion.div>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-subtitle">Sobre Nosotros</span>
              <h2 className="section-title">
                Cuidamos de tu salud bucal con dedicación y profesionalismo
              </h2>
              <p>
                En Bernal Dental Clinic, nuestra misión es proporcionar atención dental excepcional
                con un enfoque centrado en el paciente. Estamos dedicados a mejorar la salud y el
                bienestar de nuestra comunidad.
              </p>
              <p>
                Con la Dra. Yeimi Bernal al frente, ofrecemos tratamientos personalizados con
                tecnología de vanguardia y un equipo de especialistas expertos en cada área.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Primera visita gratuita</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Especialistas certificados</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Tecnología avanzada</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Facilidades de pago</span>
                </div>
              </div>
              <a href="#filosofia" className="btn btn-primary">
                Conoce Nuestra Filosofía <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="servicios" className="services section-padding">
        <div className="container">
          <div className="services-header">
            <div className="services-header-text">
              <span className="section-subtitle">Nuestros Servicios</span>
              <h2 className="section-title">
                Especialidades dentales para toda la familia
              </h2>
              <p>
                Ofrecemos una amplia gama de servicios dentales con los mejores especialistas
                y la tecnología más avanzada.
              </p>
            </div>
            <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'none' }}>
              Ver Todos los Servicios <ArrowRight size={18} />
            </a>
          </div>
          <motion.div
            className="services-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} className="service-card" variants={fadeInUp}>
                <div className="service-icon">
                  <service.icon />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="service-link" style={{ display: 'none' }}>
                  Más información <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="filosofia" className="philosophy section-padding">
        <div className="container">
          <div className="philosophy-content">
            <motion.div
              className="philosophy-cards"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div style={{ marginBottom: '2rem' }}>
                <span className="section-subtitle">Nuestra Esencia</span>
                <h2 className="section-title">Lo que nos define como clínica</h2>
              </div>
              {philosophy.map((item, index) => (
                <motion.div key={index} className="philosophy-card" variants={fadeInUp}>
                  <h4>
                    <item.icon size={24} />
                    {item.title}
                  </h4>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="philosophy-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=800&fit=crop"
                alt="Filosofía de la clínica"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="equipo" className="team section-padding">
        <div className="container">
          <div className="team-header">
            <span className="section-subtitle">Nuestro Equipo</span>
            <h2 className="section-title">Conoce a nuestra directora</h2>
          </div>
          <motion.div
            className="doctor-profile"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
              marginTop: '2rem'
            }}
          >
            <div className="doctor-image" style={{ position: 'relative' }}>
              <img
                src="/yeimi.png"
                alt="Dra. Yeimi Bernal"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  borderRadius: '1.5rem',
                  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                background: 'var(--color-green)',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>15+</div>
                <div style={{ fontSize: '0.875rem' }}>años de experiencia</div>
              </div>
            </div>
            <div className="doctor-info">
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                Dra. Yeimi Bernal
              </h3>
              <p style={{ color: 'var(--color-green)', fontWeight: '600', marginBottom: '1.5rem' }}>
                Directora Médica · Especialista en Ortodoncia y Ortopedia
              </p>
              <p style={{ color: 'var(--color-gray-dark)', marginBottom: '1rem', lineHeight: '1.8' }}>
                Licenciada en Odontología por la Universidad de Barcelona con más de 15 años de experiencia
                en la especialidad de ortodoncia y ortopedia.
              </p>
              <p style={{
                fontStyle: 'italic',
                color: 'var(--color-primary)',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'var(--color-bg-light)',
                borderLeft: '4px solid var(--color-green)',
                borderRadius: '0 0.5rem 0.5rem 0'
              }}>
                "Conocer al paciente es esencial para conseguir alcanzar el resultado perfecto"
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-green)' }} />
                  <span>CEO Barcelona Dental Academy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-green)' }} />
                  <span>Embajadora WON de Clear Correct</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-green)' }} />
                  <span>Nº Colegiado: 6627</span>
                </div>
              </div>
              <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Pedir Cita con la Dra. Bernal <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonios" className="testimonials section-padding">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-subtitle">Testimonios</span>
            <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
          </div>
          <motion.div
            className="testimonials-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="testimonial-card" variants={fadeInUp}>
                <div className="testimonial-quote">
                  <Quote />
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 10}`}
                    alt={testimonial.name}
                  />
                  <div className="testimonial-author-info">
                    <h5>{testimonial.name}</h5>
                    <p>Paciente</p>
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} fill="#fbbf24" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mutuas section-padding">
        <div className="container">
          <motion.div
            className="mutuas-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mutuas-header-icon">
              <ShieldCheck size={32} />
            </div>
            <span className="section-subtitle" style={{ justifyContent: 'center' }}>Mutuas Dentales</span>
            <h2 className="section-title">Trabajamos con tu mutua</h2>
            <p>
              Colaboramos con las principales mutuas dentales para que puedas
              disfrutar de nuestros servicios de calidad.
            </p>
          </motion.div>
          <motion.div
            className="mutuas-grid"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {mutuas.map((mutua, index) => (
              <motion.div key={index} className="mutua-card" variants={fadeInUp}>
                <div className="mutua-logo-wrapper">
                  <img src={mutua.logo} alt={mutua.name} />
                </div>
                <span className="mutua-name">{mutua.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="appointment section-padding" style={{ display: 'none' }}>
        <div className="container">
          <div className="appointment-content">
            <div className="appointment-image">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&h=800&fit=crop"
                alt="Reserva tu cita"
              />
              <div className="appointment-overlay">
                <h3>Primera visita gratuita</h3>
                <p>
                  Incluye valoración completa y presupuesto sin compromiso.
                  Tu salud bucal es nuestra prioridad.
                </p>
                <div className="appointment-info-list">
                  <div className="appointment-info-item">
                    <MapPin size={20} />
                    <span>Passatge de Montserrat de Andrés 11, Barcelona</span>
                  </div>
                  <div className="appointment-info-item">
                    <Phone size={20} />
                    <span>625 766 371</span>
                  </div>
                  <div className="appointment-info-item">
                    <Mail size={20} />
                    <span>info@bernaldentalclinic.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="appointment-form">
              <h3>Solicita tu cita</h3>
              <p>Completa el formulario y nos pondremos en contacto contigo.</p>
              <form action="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" method="get" target="_blank">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="Tu teléfono" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Tu email" />
                  </div>
                  <div className="form-group">
                    <label>Especialidad</label>
                    <select>
                      <option value="">Selecciona una especialidad</option>
                      <option value="general">Odontología General</option>
                      <option value="ortodoncia">Ortodoncia</option>
                      <option value="ortodoncia-infantil">Ortodoncia Infantil</option>
                      <option value="estetica">Estética Dental</option>
                      <option value="implantes">Implantes Dentales</option>
                      <option value="otros">Otras Especialidades</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label>Mensaje</label>
                    <textarea placeholder="Cuéntanos sobre tu caso..."></textarea>
                  </div>
                </div>
                <div className="form-submit">
                  <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-green">
                    Solicitar Cita Gratuita <ArrowRight size={18} />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="cta section-padding">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">¿Listo para sonreír?</span>
            <h2 className="section-title">
              Tu primera visita es gratuita
            </h2>
            <p>
              Pide tu cita en nuestra clínica dental de manera totalmente gratuita y déjate
              recomendar por nuestro equipo de profesionales. Tu salud nos importa.
            </p>
            <div className="cta-buttons">
              <a href="https://clientes.gestiondeclinica.es/30/AreaPrivada/getapp.html?cif=b67156695&idc=b87e152a-bbaa-45d5-91e4-8658c926d2fc" target="_blank" rel="noopener noreferrer" className="btn btn-green">
                Pedir Cita Ahora <ArrowRight size={18} />
              </a>
              <a href="tel:+34625766371" className="btn btn-secondary">
                <Phone size={18} /> Llamar: 625 766 371
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#filosofia">Filosofía</a></li>
                <li><a href="#servicios">Especialidades</a></li>
                <li><Link to="/condiciones-implantes">Garantía Prótesis</Link></li>
                <li><a href="https://bernaldentalclinic.com/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Especialidades</h4>
              <ul className="footer-links">
                <li><a href="#">Odontología General</a></li>
                <li><a href="#">Ortodoncia</a></li>
                <li><a href="#">Ortodoncia Infantil</a></li>
                <li><a href="#">Estética Dental</a></li>
                <li><a href="#">Implantes Dentales</a></li>
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
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo
                del usuario (ordenador, tablet o móvil) cuando los visita. Sirven para que el sitio web
                recuerde información sobre la visita, como preferencias de idioma u otros ajustes, lo que
                puede facilitar la siguiente visita y hacer el sitio más útil.
              </p>

              <h3>2. Responsable del tratamiento</h3>
              <p>
                <strong>Titular:</strong> Bernal Dental Clinic, S.L.<br />
                <strong>CIF:</strong> B67156695<br />
                <strong>Domicilio:</strong> Passatge de Montserrat de Andrés 11, Local 2, 08014 Barcelona<br />
                <strong>Email:</strong> info@bernaldentalclinic.com<br />
                <strong>Teléfono:</strong> 625 766 371
              </p>

              <h3>3. Tipos de cookies que utilizamos</h3>
              <p>
                Este sitio web utiliza únicamente <strong>cookies técnicas y funcionales</strong> estrictamente
                necesarias para el correcto funcionamiento de la página. No utilizamos cookies de análisis,
                publicitarias ni de rastreo de terceros.
              </p>

              <table className="cookie-policy-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Finalidad</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cookie-consent</td>
                    <td>Técnica (localStorage)</td>
                    <td>Almacena la preferencia del usuario sobre el uso de cookies para no volver a mostrar el aviso</td>
                    <td>Persistente (hasta que el usuario borre los datos del navegador)</td>
                  </tr>
                </tbody>
              </table>

              <h3>4. Base legal</h3>
              <p>
                Las cookies técnicas están exentas del requisito de consentimiento según el artículo 22.2
                de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
                Comercio Electrónico (LSSI-CE), ya que son estrictamente necesarias para la prestación
                del servicio solicitado por el usuario.
              </p>

              <h3>5. ¿Cómo gestionar las cookies?</h3>
              <p>
                Puedes aceptar o rechazar las cookies a través del banner informativo que aparece al
                acceder al sitio web. Además, puedes configurar tu navegador para bloquear o eliminar
                las cookies instaladas en tu equipo:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
                <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias → Privacidad → Gestión de datos de sitios web</li>
                <li><strong>Microsoft Edge:</strong> Configuración → Privacidad → Cookies</li>
              </ul>
              <p>
                Ten en cuenta que la desactivación de cookies puede afectar al funcionamiento de algunas
                características del sitio web.
              </p>

              <h3>6. Derechos del usuario</h3>
              <p>
                De conformidad con el Reglamento General de Protección de Datos (UE) 2016/679 y la
                Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía
                de los derechos digitales (LOPDGDD), puedes ejercer tus derechos de acceso,
                rectificación, supresión, limitación, portabilidad y oposición enviando un correo a{' '}
                <a href="mailto:info@bernaldentalclinic.com">info@bernaldentalclinic.com</a>.
              </p>
              <p>
                Asimismo, tienes derecho a presentar una reclamación ante la Agencia Española de
                Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
              </p>

              <h3>7. Actualizaciones</h3>
              <p>
                Esta política de cookies puede actualizarse periódicamente para adaptarse a cambios
                normativos o a nuevas funcionalidades del sitio web. Te recomendamos revisarla de
                forma periódica.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default App
