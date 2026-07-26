import { motion } from 'framer-motion'
import { FaClock, FaCheck, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './PackageCard.css'

export default function PackageCard({ pkg, index = 0 }) {
  const { title, destination, duration, price, originalPrice, image, highlights, badge } = pkg
  const savings = originalPrice - price

  return (
    <motion.article
      className="pkg-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="pkg-card__image-wrap">
        <img src={image} alt={title} loading="lazy" />
        <span className="pkg-card__badge">{badge}</span>
      </div>
      <div className="pkg-card__body">
        <div className="pkg-card__duration">
          <FaClock aria-hidden="true" />
          <span>{duration}</span>
        </div>
        <h3 className="pkg-card__title">{title}</h3>
        <p className="pkg-card__destination">{destination}</p>
        <ul className="pkg-card__highlights">
          {highlights.map((item) => (
            <li key={item}>
              <FaCheck aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pkg-card__footer">
          <div className="pkg-card__pricing">
            <span className="pkg-card__original">${originalPrice.toLocaleString()}</span>
            <span className="pkg-card__price">${price.toLocaleString()}</span>
            <span className="pkg-card__savings">Save ${savings.toLocaleString()}</span>
          </div>
          <Link to="/packages" className="pkg-card__cta">
            View Package
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
