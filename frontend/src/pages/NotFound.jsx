import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <section className="not-found">
      <motion.div
        className="not-found__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__message">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn--primary">
          <FaHome aria-hidden="true" />
          Back to Home
        </Link>
      </motion.div>
    </section>
  )
}
