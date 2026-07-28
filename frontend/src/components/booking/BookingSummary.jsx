import { FaMapMarkerAlt, FaSuitcaseRolling, FaCalendarAlt, FaUsers, FaTag } from 'react-icons/fa'
import { getDestinationName } from '../../data/destinationsPage'
import { computeDurationDays } from './BookingForm'
import './BookingSummary.css'

export default function BookingSummary({ packageData, formData }) {
  const destinationName = getDestinationName(packageData.destination)
  const travellers = Number(formData.travellers) || 1
  const durationDays = computeDurationDays(formData.checkIn, formData.checkOut)
  const totalCost = packageData.pricePerPerson * travellers

  return (
    <aside className="booking-summary">
      <h2 className="booking-summary__title">Booking Summary</h2>

      <div className="booking-summary__items">
        <div className="booking-summary__item">
          <FaMapMarkerAlt aria-hidden="true" />
          <div>
            <span className="booking-summary__label">Destination</span>
            <span className="booking-summary__value">{destinationName}</span>
          </div>
        </div>

        <div className="booking-summary__item">
          <FaSuitcaseRolling aria-hidden="true" />
          <div>
            <span className="booking-summary__label">Package</span>
            <span className="booking-summary__value">{packageData.name}</span>
          </div>
        </div>

        {formData.checkIn && formData.checkOut && (
          <div className="booking-summary__item">
            <FaCalendarAlt aria-hidden="true" />
            <div>
              <span className="booking-summary__label">Duration</span>
              <span className="booking-summary__value">
                {durationDays} night{durationDays !== 1 ? 's' : ''} ({formData.checkIn} → {formData.checkOut})
              </span>
            </div>
          </div>
        )}

        <div className="booking-summary__item">
          <FaUsers aria-hidden="true" />
          <div>
            <span className="booking-summary__label">Travellers</span>
            <span className="booking-summary__value">{travellers}</span>
          </div>
        </div>

        <div className="booking-summary__item">
          <FaTag aria-hidden="true" />
          <div>
            <span className="booking-summary__label">Price per person</span>
            <span className="booking-summary__value">
              ${packageData.pricePerPerson.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <div className="booking-summary__total">
        <span>Total Cost</span>
        <strong>${totalCost.toLocaleString()}</strong>
      </div>
    </aside>
  )
}
