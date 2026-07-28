import { FaMapMarkerAlt, FaSuitcaseRolling, FaUsers, FaTag } from 'react-icons/fa'
import './OrderSummary.css'

export default function OrderSummary({ booking }) {
  if (!booking) return null

  return (
    <aside className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>

      <div className="order-summary__items">
        <div className="order-summary__item">
          <FaMapMarkerAlt aria-hidden="true" />
          <div>
            <span className="order-summary__label">Destination</span>
            <span className="order-summary__value">{booking.destinationName}</span>
          </div>
        </div>

        <div className="order-summary__item">
          <FaSuitcaseRolling aria-hidden="true" />
          <div>
            <span className="order-summary__label">Package</span>
            <span className="order-summary__value">{booking.packageName}</span>
          </div>
        </div>

        <div className="order-summary__item">
          <FaUsers aria-hidden="true" />
          <div>
            <span className="order-summary__label">Travellers</span>
            <span className="order-summary__value">{booking.travellers}</span>
          </div>
        </div>

        <div className="order-summary__item">
          <FaTag aria-hidden="true" />
          <div>
            <span className="order-summary__label">Dates</span>
            <span className="order-summary__value">
              {booking.checkIn} → {booking.checkOut}
            </span>
          </div>
        </div>
      </div>

      <div className="order-summary__total">
        <span>Total Amount</span>
        <strong>${booking.totalCost.toLocaleString()}</strong>
      </div>
    </aside>
  )
}
