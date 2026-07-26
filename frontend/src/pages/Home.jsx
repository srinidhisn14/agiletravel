import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGlobeAmericas, FaArrowRight } from 'react-icons/fa'
import heroImg from '../assets/hero.png'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={heroImg} alt="Scenic travel destination" />
      </div>
      <div className="hero__overlay" />

      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaGlobeAmericas aria-hidden="true" />
            <span>Explore 120+ destinations worldwide</span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Journey Begins with <span>AgileTravel</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Book flights, hotels, and curated travel packages with ease. Discover breathtaking destinations and create unforgettable memories.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/booking" className="btn btn--primary">
              Book Now
              <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/destinations" className="btn btn--outline">
              Explore Destinations
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
