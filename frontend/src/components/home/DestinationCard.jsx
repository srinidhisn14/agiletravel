import { motion } from 'framer-motion'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './DestinationCard.css'

export default function DestinationCard({ destination, index = 0 }) {
  const { name, country, image, price, rating, tagline } = destination

  return (
    <motion.article
      className="dest-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <Link to="/destinations" className="dest-card__link">
        <div className="dest-card__image-wrap">
          <img src={image} alt={`${name}, ${country}`} loading="lazy" />
          <div className="dest-card__overlay" />
          <div className="dest-card__rating">
            <FaStar aria-hidden="true" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="dest-card__body">
          <div className="dest-card__meta">
            <span className="dest-card__country">{country}</span>
            <span className="dest-card__price">From ${price.toLocaleString()}</span>
          </div>
          <h3 className="dest-card__name">{name}</h3>
          <p className="dest-card__tagline">{tagline}</p>
          <span className="dest-card__cta">
            Explore
            <FaArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
