import { motion } from 'framer-motion'
import {
  FaClock,
  FaCheck,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaCoffee,
  FaSpa,
  FaPlane,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { getDestinationName } from '../../data/destinationsPage'
import './PackageListingCard.css'

const facilityIcons = {
  wifi: FaWifi,
  pool: FaSwimmingPool,
  breakfast: FaCoffee,
  spa: FaSpa,
  airportPickup: FaPlane,
}

const facilityLabels = {
  wifi: 'WiFi',
  pool: 'Pool',
  breakfast: 'Breakfast',
  spa: 'Spa',
  airportPickup: 'Airport Pickup',
}

export default function PackageListingCard({ pkg, index = 0 }) {
  const navigate = useNavigate()
  const {
    id,
    name,
    destination,
    location,
    image,
    days,
    nights,
    roomType,
    facilities,
    highlights,
    pricePerPerson,
    originalPrice,
    rating,
  } = pkg

  const destinationName = getDestinationName(destination)
  const savings = originalPrice ? originalPrice - pricePerPerson : null

  const handleBookNow = () => {
    navigate(`/booking?packageId=${id}`)
  }

  return (
    <motion.article
      className="pkg-listing-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="pkg-listing-card__image-wrap">
        <img src={image} alt={name} loading="lazy" />
        <span className="pkg-listing-card__rating">
          <FaStar aria-hidden="true" />
          {rating}
        </span>
      </div>

      <div className="pkg-listing-card__body">
        <div className="pkg-listing-card__duration">
          <FaClock aria-hidden="true" />
          <span>
            {days} Days / {nights} Nights
          </span>
        </div>

        <h3 className="pkg-listing-card__title">{name}</h3>
        <p className="pkg-listing-card__destination">
          {destinationName} · {location}
        </p>
        <p className="pkg-listing-card__room">{roomType}</p>

        <div className="pkg-listing-card__facilities">
          {Object.entries(facilities)
            .filter(([, enabled]) => enabled)
            .map(([key]) => {
              const Icon = facilityIcons[key]
              return (
                <span key={key} className="pkg-listing-card__facility" title={facilityLabels[key]}>
                  <Icon aria-hidden="true" />
                  <span>{facilityLabels[key]}</span>
                </span>
              )
            })}
        </div>

        <ul className="pkg-listing-card__highlights">
          {highlights.map((item) => (
            <li key={item}>
              <FaCheck aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pkg-listing-card__footer">
          <div className="pkg-listing-card__pricing">
            {originalPrice && (
              <span className="pkg-listing-card__original">
                ${originalPrice.toLocaleString()}
              </span>
            )}
            <span className="pkg-listing-card__price">${pricePerPerson.toLocaleString()}</span>
            <span className="pkg-listing-card__per-person">/ person</span>
            {savings && (
              <span className="pkg-listing-card__savings">Save ${savings.toLocaleString()}</span>
            )}
          </div>
          <button type="button" className="pkg-listing-card__cta" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </motion.article>
  )
}
