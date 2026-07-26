import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter section-padding">
      <div className="container">
        <motion.div
          className="newsletter__inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="newsletter__content">
            <span className="newsletter__eyebrow">Stay Inspired</span>
            <h2 className="newsletter__title">Join Our Exclusive Travel Circle</h2>
            <p className="newsletter__subtitle">
              Receive curated destination guides, early access to luxury packages,
              and insider travel tips delivered to your inbox.
            </p>
          </div>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="newsletter__input"
            />
            <motion.button
              type="submit"
              className="newsletter__btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
              <FaPaperPlane aria-hidden="true" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
