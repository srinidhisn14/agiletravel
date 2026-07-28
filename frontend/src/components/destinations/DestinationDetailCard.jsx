import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaStar, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import './DestinationDetailCard.css'

export default function DestinationDetailCard({ destination, index = 0 }) {
  const navigate = useNavigate()
  const {
    slug,
    name,
    country,
    image,
    description,
    bestTimeToVisit,
    popularAttractions,
    averageDuration,
    startingPrice,
    rating,
  } = destination

  const handleViewPackages = () => {
    navigate(`/packages?destination=${slug}`)
  }

  return (
    <motion.article
      className="dest-detail-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <div className="dest-detail-card__image-wrap">
        <img src={image} alt={`${name}, ${country}`} loading="lazy" />
        <div className="dest-detail-card__overlay" />
        <div className="dest-detail-card__rating">
          <FaStar aria-hidden="true" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="dest-detail-card__body">
        <div className="dest-detail-card__meta">
          <span className="dest-detail-card__country">
            <FaMapMarkerAlt aria-hidden="true" />
            {country}
          </span>
          <span className="dest-detail-card__price">From ${startingPrice.toLocaleString()}</span>
        </div>

        <h3 className="dest-detail-card__name">{name}</h3>
        <p className="dest-detail-card__description">{description}</p>

        <div className="dest-detail-card__details">
          <div className="dest-detail-card__detail">
            <FaCalendarAlt aria-hidden="true" />
            <div>
              <span className="dest-detail-card__detail-label">Best time</span>
              <span>{bestTimeToVisit}</span>
            </div>
          </div>
          <div className="dest-detail-card__detail">
            <FaClock aria-hidden="true" />
            <div>
              <span className="dest-detail-card__detail-label">Duration</span>
              <span>{averageDuration}</span>
            </div>
          </div>
        </div>

        <div className="dest-detail-card__attractions">
          <span className="dest-detail-card__attractions-label">Popular attractions</span>
          <ul>
            {popularAttractions.map((attraction) => (
              <li key={attraction}>{attraction}</li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="dest-detail-card__cta btn btn--primary"
          onClick={handleViewPackages}
        >
          View Packages
          <FaArrowRight aria-hidden="true" />
        </button>
      </div>
    </motion.article>
  )
}
