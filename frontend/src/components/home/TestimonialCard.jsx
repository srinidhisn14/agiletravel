import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './TestimonialCard.css'

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, avatar, location, rating, quote, trip } = testimonial

  return (
    <motion.article
      className="testimonial-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <FaQuoteLeft className="testimonial-card__quote-icon" aria-hidden="true" />
      <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} aria-hidden="true" />
        ))}
      </div>
      <blockquote className="testimonial-card__quote">{quote}</blockquote>
      <footer className="testimonial-card__footer">
        <div className="testimonial-card__avatar" aria-hidden="true">{avatar}</div>
        <div className="testimonial-card__info">
          <cite className="testimonial-card__name">{name}</cite>
          <span className="testimonial-card__location">{location}</span>
          <span className="testimonial-card__trip">{trip}</span>
        </div>
      </footer>
    </motion.article>
  )
}
