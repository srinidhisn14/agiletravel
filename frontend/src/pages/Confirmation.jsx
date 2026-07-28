import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheck, FaMapMarkerAlt, FaSuitcaseRolling, FaCalendarAlt, FaUsers, FaCreditCard } from 'react-icons/fa'
import './Confirmation.css'

export default function Confirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const { booking, payment } = location.state || {}

  useEffect(() => {
    if (!booking || !payment) {
      navigate('/packages', { replace: true })
    }
  }, [booking, payment, navigate])

  if (!booking || !payment) return null

  return (
    <>
      <section className="confirmation-page">
        <div className="container">
          <motion.div
            className="confirmation-page__card"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              className="confirmation-page__icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <FaCheck aria-hidden="true" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Booking Confirmed!
            </motion.h1>

            <motion.p
              className="confirmation-page__message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Thank you, {booking.fullName}! Your trip to {booking.destinationName} has been
              successfully booked. A confirmation email will be sent to {booking.email}.
            </motion.p>

            <motion.div
              className="confirmation-page__booking-id"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>Booking ID</span>
              <strong>{payment.bookingId}</strong>
            </motion.div>

            <motion.div
              className="confirmation-page__details"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="confirmation-page__detail">
                <FaMapMarkerAlt aria-hidden="true" />
                <div>
                  <span>Destination</span>
                  <strong>{booking.destinationName}</strong>
                </div>
              </div>
              <div className="confirmation-page__detail">
                <FaSuitcaseRolling aria-hidden="true" />
                <div>
                  <span>Package</span>
                  <strong>{booking.packageName}</strong>
                </div>
              </div>
              <div className="confirmation-page__detail">
                <FaCalendarAlt aria-hidden="true" />
                <div>
                  <span>Dates</span>
                  <strong>
                    {booking.checkIn} → {booking.checkOut}
                  </strong>
                </div>
              </div>
              <div className="confirmation-page__detail">
                <FaUsers aria-hidden="true" />
                <div>
                  <span>Travellers</span>
                  <strong>{booking.travellers}</strong>
                </div>
              </div>
              <div className="confirmation-page__detail">
                <FaCreditCard aria-hidden="true" />
                <div>
                  <span>Payment Method</span>
                  <strong>{payment.methodLabel}</strong>
                </div>
              </div>
              <div className="confirmation-page__detail">
                <div>
                  <span>Payment Status</span>
                  <strong className="confirmation-page__status">{payment.status}</strong>
                </div>
              </div>
              <div className="confirmation-page__detail confirmation-page__detail--total">
                <div>
                  <span>Total Paid</span>
                  <strong>${booking.totalCost.toLocaleString()}</strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="confirmation-page__actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/my-trips" className="btn btn--primary">
                View My Trips
              </Link>
              <Link to="/" className="btn btn--ghost">
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
