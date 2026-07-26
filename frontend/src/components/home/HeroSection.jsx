import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGlobeAmericas, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch, FaArrowRight } from 'react-icons/fa'
import heroImg from '../../assets/hero.png'
import './HeroSection.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
})

const searchFields = [
  { id: 'destination', label: 'Destination', placeholder: 'Where to?', icon: FaMapMarkerAlt },
  { id: 'dates', label: 'Dates', placeholder: 'Check in — Check out', icon: FaCalendarAlt },
  { id: 'guests', label: 'Guests', placeholder: '2 Adults', icon: FaUsers },
]

export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero__bg">
        <img src={heroImg} alt="Luxury travel destination" />
      </div>
      <div className="home-hero__overlay" />

      <div className="container home-hero__container">
        <div className="home-hero__content">
          <motion.div className="home-hero__badge" {...fadeUp(0.1)}>
            <FaGlobeAmericas aria-hidden="true" />
            <span>Curated journeys to 120+ destinations</span>
          </motion.div>

          <motion.h1 className="home-hero__title" {...fadeUp(0.2)}>
            Discover the World in
            <span> Unparalleled Luxury</span>
          </motion.h1>

          <motion.p className="home-hero__subtitle" {...fadeUp(0.3)}>
            Bespoke travel experiences crafted for the discerning explorer.
            From hidden gems to iconic landmarks — your extraordinary journey awaits.
          </motion.p>

          <motion.div
            className="home-hero__search"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: 'easeOut' }}
          >
            {searchFields.map((field, index) => (
              <motion.div
                key={field.id}
                className="home-hero__search-field"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08, ease: 'easeOut' }}
              >
                <label htmlFor={field.id}>{field.label}</label>
                <div className="home-hero__search-input-wrap">
                  <field.icon className="home-hero__search-icon" aria-hidden="true" />
                  <input
                    id={field.id}
                    type="text"
                    placeholder={field.placeholder}
                    readOnly
                    aria-label={field.label}
                  />
                </div>
              </motion.div>
            ))}
            <motion.button
              type="button"
              className="home-hero__search-btn"
              aria-label="Search destinations"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.75, ease: 'easeOut' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaSearch aria-hidden="true" />
            </motion.button>
          </motion.div>

          <motion.div className="home-hero__actions" {...fadeUp(0.85)}>
            <Link to="/destinations" className="home-hero__cta">
              Start Your Journey
              <FaArrowRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
